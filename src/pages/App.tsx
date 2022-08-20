import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss';
import Cronometro from '../components/Cronometro';
import { useState } from 'react';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    {
      tarefa: "React",
      tempo: '02:00:00'
    },
    {
      tarefa: "Javascript",
      tempo: '01:00:00'
    },
    {
      tarefa: "Typescript",
      tempo: '03:00:00'
    },
  ]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
