import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './scss/index.scss'
import { getTasks } from './redux/operations'
import { AddTask } from './components/AddTask/AddTask';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <section className='section'>
      <div className='container'>
        <AddTask/>
        <TaskList/>
      </div>
    </section>
    
  )
}

export default App
