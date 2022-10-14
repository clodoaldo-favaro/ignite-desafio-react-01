import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header />
      
      <form className={styles.taskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit">Criar</button>
      </form>
      
    </div>
  );
}

