import { useDispatch } from 'react-redux'
import './scss/index.scss'
import { getTasks } from './redux/operations'
import { useEffect } from 'react';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <section className='section'>
      <div className='container'>
        <TaskList/>
      </div>
    </section>
    
  )
}

export default App
