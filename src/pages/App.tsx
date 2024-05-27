import React, {useState} from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from  './App.module.scss';
import Cronometro from '../components/Cronometro';
import ITarefa from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [tarefaSelecionada, setSelecionado] = useState<ITarefa | null>(null)

  function selecionarTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
      {
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }
    )));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas} 
        selecionarTarefa={selecionarTarefa}
      />
      <Cronometro/>
    </div>
  );
}

export default App;
