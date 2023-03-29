import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { setStatusFilter } from 'redux/action';
import { getFilterStatus } from 'redux/selectors';
import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(getFilterStatus);
  const dispatch = useDispatch();
  const handleStatusFilter = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleStatusFilter(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleStatusFilter(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleStatusFilter(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
