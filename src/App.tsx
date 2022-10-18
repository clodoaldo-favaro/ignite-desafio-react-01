import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';

import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header />
      
      <form className={styles.taskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      
    </div>
  );
}

