import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss';
import Cronometro from '../components/Cronometro';
import { useState } from 'react';
import { ITarefa } from '../types/tarefa';

function App() {
  const [selected, setSelected] = useState<ITarefa>();
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    {
      id: '1',
      tarefa: "React",
      tempo: '02:00:00'
    },
    {
      id: '2',
      tarefa: "Javascript",
      tempo: '01:00:00'
    },
    {
      id: '3',
      tarefa: "Typescript",
      tempo: '03:00:00'
    },
  ]);

  function selectTask(task: ITarefa) {
    setSelected(task);
    console.log({
      task: { ...task },
      selected
    })
    setTarefas(old => 
      old.map(task => 
        ({
          ...task,
          selecionado: task.id === selected?.id ? true : false
        })
      ));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}
        selectTask={selectTask} />
      <Cronometro />
    </div>
  );
}

export default App;
