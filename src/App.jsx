import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './scss/index.scss'
import { getTasks, getAllTasks } from './redux/operations'
import { AddTask } from './components/AddTask/AddTask';
import { TaskList } from './components/TaskList/TaskList';
import { Pagination } from './components/Pagination/Pagination';
import { NavButton } from './components/NavButton/NavButton';
import { selectTaskNumbers, selectTotalPage } from './redux/selectors';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  
  const allTaskNumbers = useSelector(selectTaskNumbers);
  const totalPage = useSelector(selectTotalPage);

  const onPageChange = pageNumber => setCurrentPage(pageNumber);
  const onPrevClick = () => setCurrentPage(prev => prev - 1);
  const onNextClick = () => setCurrentPage(prev => prev + 1);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch])

  useEffect(() => {
    dispatch(getTasks(currentPage));
  }, [dispatch, currentPage]);

  return (
    <section className='section'>
      <div className='container'>
        <AddTask/>
        <TaskList />
        <div className='btn-box'>
          <NavButton name={'Prev'} disabled={currentPage === 1} onBtnClick={onPrevClick}/>
          <Pagination onClick={onPageChange} />
          <NavButton name={'Next'} disabled={currentPage === totalPage} onBtnClick={onNextClick}/>
          </div>
      </div>
    </section>
  )
}

export default App
