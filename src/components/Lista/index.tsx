import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';
import ITarefa from "../../types/tarefas";

interface Props {
    tarefas: ITarefa[]
    selecionarTarefa: (tarefa: ITarefa) => void
}

export default function Lista({ tarefas, selecionarTarefa }: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item
                        selecionarTarefa={selecionarTarefa}
                        key={tarefa.id}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}