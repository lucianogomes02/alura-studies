import { useState } from 'react'
import ITarefa from '../../types/tarefas'
import style from './PaginaTarefas.module.scss'
import { v4 as randomUUID } from 'uuid';

export default function PaginaDeTarefas() {
    const [tarefas, setTarefas] = useState<ITarefa[] | []>([
      {
        id: randomUUID(),
        nome: 'Estudar React',
        tempo: '30 minutos',
        selecionado: false,
        completado: false
      },
      {
        id: randomUUID(),
        nome: 'Estudar CSS',
        tempo: '20 minutos',
        selecionado: false,
        completado: false
      },
      {
        id: randomUUID(),
        nome: 'Estudar HTML',
        tempo: '10 minutos',
        selecionado: false,
        completado: false
      },
      {
        id: randomUUID(),
        nome: 'Estudar JavaScript',
        tempo: '40 minutos',
        selecionado: false,
        completado: false
      },
      {
        id: randomUUID(),
        nome: 'Estudar TypeScript',
        tempo: '50 minutos',
        selecionado: false,
        completado: false
      },
    ])
    const [paginaAtual, setPaginaAtual] = useState<number>(1)

    const proximaPagina = () => {
        setPaginaAtual(paginaAtual + 1)
    }

    const paginaAnterior = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1)
        }
    }

    const renderizarPaginacao = () => {
        return (
            <div>
              <button onClick={proximaPagina} disabled={paginaAtual === Math.ceil(tarefas.length / 10)}>
                Próximo
              </button>
            </div>
          )
    }

    return (
      <div className={style.paginaDeTarefas}>
          <h1>Tarefas</h1>
          <table className={style.tabelaDeTarefas}>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Tempo</th>
                      <th>Selecionado</th>
                      <th>Completado</th>
                  </tr>
              </thead>
              <tbody>
                  {tarefas.map((tarefa) => (
                      <tr key={tarefa.id}>
                          <td>{tarefa.nome}</td>
                          <td>{tarefa.tempo}</td>
                          <td>{String(tarefa.selecionado)}</td>
                          <td>{String(tarefa.completado)}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
          {renderizarPaginacao()}
      </div>
  )
}