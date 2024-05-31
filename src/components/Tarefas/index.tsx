import React from "react";
import Tarefa from "./Tarefa";
import style from './Tarefas.module.scss';
import ITarefa from "../../types/tarefas";

interface Props {
    tarefas: ITarefa[]
    selecionarTarefa: (tarefa: ITarefa) => void
    cronometroAtivo: boolean
}

export default function Tarefas({ tarefas, selecionarTarefa, cronometroAtivo }: Props) {
    const ordenarTarefasConcluidas = [...tarefas].sort((tarefaAtual, tarefaAnterior) => {
        if (tarefaAtual.status === "DONE" && tarefaAnterior.status === "DONE") {
            return 0; 
        }
        if (tarefaAtual.status === "DONE") {
            return -1;
        }
        if (tarefaAnterior.status === "DONE") {
            return 1;
        }
        return 0;
    });

    return (
        <aside className={style.listaTarefas}>
            <h2>Tarefas do Dia</h2>
            <ul>
                {ordenarTarefasConcluidas.map((tarefa) => (
                    <Tarefa
                        selecionarTarefa={selecionarTarefa}
                        key={tarefa.id}
                        cronometroAtivo={cronometroAtivo}
                        selecionado={false}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    );
}