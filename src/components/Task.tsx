import styles from './Task.module.css';
import { Trash, Check } from 'phosphor-react';

interface TaskProps {
    id: string;
    description: string;
    completed: boolean;
    onTaskStatusChange: (taskId: string) => void;
    onDeleteTask: (taskId: string) => void;
}


export function Task({id, description, completed, onTaskStatusChange, onDeleteTask}: TaskProps) {
    function handleTaskStatusChange() {
        onTaskStatusChange(id);
    }

    function handleDeleteTask() {
        onDeleteTask(id);
    }
    
    return (
        <div id={id} className={styles.task}>
            
            <label className={styles['form-control']}>
                <input type="checkbox" name="checkbox" checked={completed} onChange={handleTaskStatusChange} />
                <Check />
            </label>
            
            <p className={completed ? styles.completed : ''}>{description}</p>
            
            <Trash className={styles.trash} size={24} onClick={handleDeleteTask}/>
        </div>
    );
}