import styles from './Task.module.css';
import { Trash, Check } from 'phosphor-react';

interface TaskProps {
    id: string;
    description: string;
    completed: boolean;
    onTaskStatusChange: (taskId: string) => void;
}


export function Task({id, description, completed, onTaskStatusChange}: TaskProps) {
    
    function handleTaskStatusChange() {
        debugger;
        onTaskStatusChange(id);
    }
    
    return (
        <div id={id} className={styles.task}>
            
            <label className={styles['form-control']}>
                <input type="checkbox" name="checkbox" checked={completed} onChange={handleTaskStatusChange} />
                <Check />
            </label>
            
            <p className={completed ? styles.completed : ''}>{description}</p>
            
            <Trash size={24} />
        </div>
    );
}