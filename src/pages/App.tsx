import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss';
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
