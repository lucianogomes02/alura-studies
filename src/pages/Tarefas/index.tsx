import { useState } from 'react'
import ITarefa from '../../types/tarefas'
import style from './PaginaTarefas.module.scss'

export default function PaginaDeTarefas() {
    const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
    // aplifcar o useEffect para carregar as tarefas com o repository
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
                          <td>{tarefa.status}</td>
                          <td>{String(tarefa.criadoEm)}</td>
                          <td>{String(tarefa.atualizadoEm)}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
          {renderizarPaginacao()}
      </div>
  )
}