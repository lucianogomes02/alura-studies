import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import ITarefa from "../../types/tarefas";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({setTarefas}: Props) {
    const [nome, setNome] = React.useState("");
    const [tempo, setTempo] = React.useState("00:00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    nome,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4(),
                }
            ]
        );
        setNome("");
        setTempo("00:00:00");
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione uma nova tarefa
                </label>
                <input
                    type="text"
                    name="tarefa"
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    id="tarefa"
                    placeholder="Qual é a tarefa que deseja realizar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label>
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:05:00"
                    required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}