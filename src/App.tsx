import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';

import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <form className={styles.taskForm}>
          <input type="text" placeholder="Adicione uma nova tarefa"/>
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.tasksWrapper}>
          <div className={styles.tasksHeader}>
            <div>
              <span className={styles.tasksCreated}>Tarefas criadas</span>
              <div className={styles.tasksCounter}><span>0</span></div>
            </div>
            <div>
              <span className={styles.tasksCompleted}>Concluídas</span>
              <div className={styles.tasksCounter}><span>0</span></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

