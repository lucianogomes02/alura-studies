import style from './Home.module.scss';
import Formulario from '../../components/Formulario';
import Tarefas from '../../components/Tarefas';
import Cronometro from '../../components/Cronometro';
import ITarefa from '../../types/tarefas';
import { useState } from 'react';

export default function Home() {
    const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
    const [tarefaSelecionada, setSelecionado] = useState<ITarefa | undefined>(undefined)
    const [cronometroAtivo, setCronometroAtivo] = useState(false);

    function selecionarTarefa(tarefaSelecionada: ITarefa){
        setSelecionado(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
        {
            ...tarefa,
            selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        }
        )));
    }

    function finalizarTarefa() {
        if (tarefaSelecionada) {
        setSelecionado(undefined);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
            {
            ...tarefa,
            completado: tarefa.id === tarefaSelecionada.id ? true : tarefa.completado,
            selecionado: false
            }
        )));
        setCronometroAtivo(false);
        }
    }
    return(
        <div className={style.HomeStyles}>
            <Formulario setTarefas={setTarefas}/>
            <Tarefas 
                tarefas={tarefas} 
                selecionarTarefa={selecionarTarefa}
                cronometroAtivo={cronometroAtivo}
            />
            <Cronometro 
                tarefaSelecionada={tarefaSelecionada} 
                finalizarTarefa={finalizarTarefa}
                cronometroAtivo={cronometroAtivo}
                setCronometroAtivo={setCronometroAtivo}
            />
      </div>
    )
}