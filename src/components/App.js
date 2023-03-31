import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import css from './AppBar/AppBar.module.css';

export const App = () => {
  return (
    <Layout>
      <div className={css.wrapperHeaderInf}>
        <AppBar />
        <TaskForm />
      </div>

      <TaskList />
    </Layout>
  );
};
