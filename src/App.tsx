import { Header } from './components/Header';
import { PlusCircle } from 'phosphor-react';
import { EmptyTask } from './components/EmptyTask';
import { Task } from './components/Task';
import uuid from 'react-uuid';


import './global.css';
import styles from './App.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface TaskProps {
  id: string;
  description: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [newTaskDescription, setNewTaskDescription] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuid(),
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

  function changeTaskStatus(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, completed: !task.completed};
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  function deleteTask(taskId: string) {
    const tasksWithoutDeleted = tasks.filter(task => task.id !== taskId);

    setTasks(tasksWithoutDeleted);
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
                  return (
                    <Task 
                      key={task.id}
                      id={task.id}
                      completed={task.completed}
                      description={task.description}
                      onTaskStatusChange={changeTaskStatus}
                      onDeleteTask={deleteTask}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

