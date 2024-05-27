import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import ITarefa from "../../types/tarefas";
import { tempoParaSegundos } from "../../common/utils/time";
import { useEffect, useState } from "react";

interface Props {
    tarefaSelecionada: ITarefa | undefined
}

export default function Cronometro({ tarefaSelecionada }: Props) {
    const [tempo, setTempo] = useState<number>();
    
    useEffect(() => {
        if (tarefaSelecionada?.tempo) {
            setTempo(tempoParaSegundos(tarefaSelecionada.tempo));
        }
    }, [tarefaSelecionada]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Iniciar
            </Botao>
        </div>
    )
}