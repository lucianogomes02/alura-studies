import ITarefa from '../../../types/tarefas';
import style from './Tarefa.module.scss';

interface Props extends ITarefa {
    selecionarTarefa: (tarefa: ITarefa) => void
    selecionado: boolean
    cronometroAtivo: boolean
}

export default function Tarefa({id, nome, tempo, status, atualizadoEm, criadoEm, selecionado, selecionarTarefa, cronometroAtivo}: Props) {
    return (
        <li className={`${style.tarefa} ${selecionado ? style.tarefaSelecionada : ''}
        ${cronometroAtivo ? style.tarefaBloqueada : ''} 
        ${status === "DONE" ? style.tarefaCompletada : ''}`} onClick={() => status !== "DONE" && !cronometroAtivo && selecionarTarefa(
            {
                id,
                nome,
                tempo,
                status,
                criadoEm,
                atualizadoEm
            }
        )}>
            <h3>{nome}</h3>
            <span>{tempo}</span>
            {status === "DONE" && <span className={style.concluido} aria-label="Tarefa Completada"></span>}
        </li>
    )
}