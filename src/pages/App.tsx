import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss';
import Cronometro from '../components/Cronometro';
import { useLayoutEffect, useState } from 'react';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    {
      id: '1',
      tarefa: "React",
      tempo: '00:30:00'
    },
    {
      id: '2',
      tarefa: "Javascript",
      tempo: '00:10:00'
    },
    {
      id: '3',
      tarefa: "Typescript",
      tempo: '00:00:15'
    },
  ]);
  const [selecionado, setSelected] = useState<ITarefa>();

  useLayoutEffect(() => {
    selectTask(tarefas[2]);
  }, []);

  function selectTask(selectedTask: ITarefa) {
    setSelected(selectedTask);
    setTarefas(old => 
      old.map(task => 
        ({
          ...task,
          selecionado: task.id === selectedTask?.id ? true : false
        })
      ));
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelected(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}
        selectTask={selectTask} />
      <Cronometro selecionado={selecionado}
        finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
