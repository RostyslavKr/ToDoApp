import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';

export const TaskList = () => {
  return (
    <ul>
      {[].map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
