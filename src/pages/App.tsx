import React, {useState} from 'react';
import Formulario from '../components/Formulario';
import Tarefas from '../components/Tarefas';
import style from  './App.module.scss';
import Cronometro from '../components/Cronometro';
import ITarefa from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [tarefaSelecionada, setSelecionado] = useState<ITarefa | undefined>(undefined)

  function selecionarTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
      {
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }
    )));
  }

  function finalizarTarefa() {
    if (tarefaSelecionada) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
        {
          ...tarefa,
          completado: tarefa.id === tarefaSelecionada.id ? true : tarefa.completado,
          selecionado: false
        }
      )));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Tarefas 
        tarefas={tarefas} 
        selecionarTarefa={selecionarTarefa}
      />
      <Cronometro 
        tarefaSelecionada={tarefaSelecionada} 
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
