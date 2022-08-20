import React, { ChangeEvent, FormEvent } from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface IFormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

class Formulario extends React.Component<IFormularioProps> {
  state = {
    tarefa: '',
    tempo: '00:00'
  }

  handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      tempo: e.target.value
    });
  }

  handleTarefaChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      tarefa: e.target.value
    });
  }

  handleTaskSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.setTarefas(tarefas => 
      [
        ...tarefas,
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        },
      ]
    );
    this.setState({
      tarefa: "",
      tempo: "00:00"
    });
  }

  render() {
    return (
      <form className={style.novaTarefa}
        onSubmit={this.handleTaskSubmit}>
        <div className={style.inputContainer}>
          <label>
            Adicione um novo estudo
          </label>
          <input type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={this.handleTarefaChange}
            id="tarefa"
            placeholder="O que você quer estudar"
            required />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={this.handleTimeChange}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    )
  }
}

export default Formulario;