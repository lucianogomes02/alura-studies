import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';

export default function Lista() {
    const tarefas = [
        {
            nome: 'React',
            tempo: '02:00:00'
        },
        {
            nome: 'Java',
            tempo: '03:00:00'
        }
    ]
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