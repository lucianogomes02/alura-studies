import ITarefa from '../../../types/tarefas';
import style from './Tarefa.module.scss';

interface Props extends ITarefa {
    selecionarTarefa: (tarefa: ITarefa) => void
}

export default function Tarefa({nome, tempo, selecionado, completado, id, selecionarTarefa}: Props) {
    return (
        <li className={`${style.tarefa} ${selecionado ? style.tarefaSelecionada : ''} 
        ${completado ? style.tarefaCompletada : ''}`} onClick={() => !completado && selecionarTarefa(
            {
                nome,
                tempo,
                selecionado,
                completado,
                id
            }
        )}>
            <h3>{nome}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="Tarefa Completada"></span>}
        </li>
    )
}