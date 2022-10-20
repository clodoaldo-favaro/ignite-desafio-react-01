import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';
import { EmptyTask } from './components/EmptyTask';

import './global.css';
import styles from './App.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface Task {
  description: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTaskDescription, setNewTaskDescription] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      description: newTaskDescription,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskDescription('');
  }

  function handleTaskDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskDescription(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Preencha a descrição da nova tarefa');
  }

  const isNewTaskDescriptionEmpty = newTaskDescription.length === 0;
  const isTasksEmpty = tasks.length === 0;
  const createdTasksCount = tasks.length;
  const completedTasksCount = tasks.filter(task => task.completed).length;
  
  return (
    <div>
      <Header />
      
      <main>
        <div className={styles.wrapper}>
          <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
            <input 
              type="text" 
              placeholder="Adicione uma nova tarefa"
              value={newTaskDescription}
              onChange={handleTaskDescriptionChange}
              onInvalid={handleNewTaskInvalid}
              required
            />
            <button type="submit" disabled={isNewTaskDescriptionEmpty}>
              Criar
              <PlusCircle size={16} />
            </button>
          </form>

          <div className={styles.tasksWrapper}>
            <div className={styles.tasksHeader}>
              <div>
                <span className={styles.tasksCreated}>Tarefas criadas</span>
                <div className={styles.tasksCounter}><span>{createdTasksCount}</span></div>
              </div>
              <div>
                <span className={styles.tasksCompleted}>Concluídas</span>
                <div className={styles.tasksCounter}><span>{`${createdTasksCount > 0 ? completedTasksCount + ' de ' + createdTasksCount : '0'}`}</span></div>
              </div>
            </div>

            <EmptyTask className={!isTasksEmpty ? styles.hidden : ''}/>

            <div className={`${styles.tasksList} ${isTasksEmpty ? styles.hidden : ''}`}>
              {
                tasks.map(task => {
                  return <p>{task.description}</p>
                })
              }
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

