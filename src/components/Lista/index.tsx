import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface IListaProps {
  tarefas: ITarefa[],
}

function Lista({ tarefas }: IListaProps) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index}
            tarefa={item.tarefa}
            tempo={item.tempo} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;