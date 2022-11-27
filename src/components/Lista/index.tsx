import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface IListaProps {
  tarefas: ITarefa[],
  selectTask: (task: ITarefa) => void;
}

function Lista({ tarefas, selectTask }: IListaProps) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(item => (
          <Item key={item.id}
            { ...item }
            selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;