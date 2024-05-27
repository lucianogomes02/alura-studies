import ITarefa from '../../../types/tarefas';
import style from './Item.module.scss';

interface Props extends ITarefa {
    selecionarTarefa: (tarefa: ITarefa) => void
}

export default function Item({nome, tempo, selecionado, completado, id, selecionarTarefa}: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} 
        ${completado ? style.itemCompletado : ''}`} onClick={() => !completado && selecionarTarefa(
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