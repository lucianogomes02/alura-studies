import React, {useState} from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from  './App.module.scss';
import Cronometro from '../components/Cronometro';
import ITarefa from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    {
        nome: 'React',
        tempo: '02:00:00'
    },
    {
        nome: 'Java',
        tempo: '03:00:00'
    }
])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
