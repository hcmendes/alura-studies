import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

interface IItemProps extends ITarefa {
  selectTask: (task: ITarefa) => void;
};

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selectTask
}: IItemProps) {

  return (
    <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() => selectTask({
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
      })}>
      <h3>{tarefa}</h3>
      <span>
        {tempo}
      </span>
    </li>
  )
}