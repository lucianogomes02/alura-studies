import React from "react";
import './style.scss';

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
        <aside className="listaTarefas">
            <h2> Estudos do Dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index} className="item">
                        <h3>{tarefa.nome}</h3>
                        <span>{tarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}