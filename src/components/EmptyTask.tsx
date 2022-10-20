import clipboard from '../assets/clipboard.svg';

import styles from './EmptyTask.module.css';

export function EmptyTask({ className = ''}) {
    return (
        <div className={`${styles.emptyTasks} ${className}`}>
            <img src={clipboard} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
    );
}