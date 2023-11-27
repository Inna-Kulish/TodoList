import { useDispatch } from 'react-redux'
import './App.css'
import { getTasks } from './redux/operations'
import { useEffect } from 'react';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <TaskList/>
  )
}

export default App
