import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';
import ITarefa from "../../types/tarefas";

export default function Lista({ tarefas }: { tarefas: ITarefa[]}) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item
                        key={index}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}