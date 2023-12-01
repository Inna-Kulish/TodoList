import { useSelector } from 'react-redux';
import { selectTaskCount } from '../../redux/selectors';

export const TaskCounter = () => {
  const { total, active, completed } = useSelector(selectTaskCount);

  return (
    <div className='counter-wrap'>
      <p>Total: {total}</p>
      <p>Active: {active}</p>
      <p>Completed: {completed}</p>
    </div>
  );
};
