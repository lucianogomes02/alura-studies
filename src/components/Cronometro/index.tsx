import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import ITarefa from "../../types/tarefas";
import { tempoParaSegundos } from "../../common/utils/time";
import { useEffect, useState } from "react";

interface Props {
    tarefaSelecionada: ITarefa | undefined
    finalizarTarefa: () => void
    cronometroAtivo: boolean
    setCronometroAtivo: (value: boolean) => void
}

export default function Cronometro({ tarefaSelecionada, finalizarTarefa, cronometroAtivo, setCronometroAtivo }: Props) {
    const [tempo, setTempo] = useState<number>();
    
    useEffect(() => {
        if (tarefaSelecionada?.tempo && !cronometroAtivo) {
            setTempo(tempoParaSegundos(tarefaSelecionada.tempo));
        }
    }, [tarefaSelecionada, cronometroAtivo]);

    function regressiva(contador: number = 0) {
        setCronometroAtivo(true);
        setTimeout(() => {
                if (contador > 0) {
                    setTempo(contador - 1);
                    return regressiva(contador - 1);
                } 
                return finalizarTarefa();
            }, 1000
        )
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma tarefa e inicie o cronômetro</p>
            <p className={style.subtitulo}>Tarefa selecionada: {tarefaSelecionada ? tarefaSelecionada.nome: 'Nenhuma tarefa selecionada'}</p>
            <div className={style.relogioWrapper}>
                <Relogio tempoInicial={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)} desabilitado={!tarefaSelecionada || cronometroAtivo}>
                Iniciar
            </Botao>
        </div>
    )
}