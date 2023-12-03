import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './scss/index.scss';
import {
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectTasks,
  selectVisibleTasks,
} from './redux/selectors';
import { getTasks, getAllTasks } from './redux/operations';
import { Skeleton } from './components/Skeleton/Skeleton';
import { AppBar } from './components/AppBar/AppBar';
import { AddTask } from './components/AddTask/AddTask';
import { TaskList } from './components/TaskList/TaskList';
import { Pagination } from './components/Pagination/Pagination';
import { Filter } from './components/Filter/Filter';
import { setCurrentPage } from './redux/tasksSlice';

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentTask = useSelector(selectTasks);
  const filteredTasks = useSelector(selectVisibleTasks);

  // Get tasks for current page
  useEffect(() => {
    dispatch(getTasks(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
      // Get all tasks for get number of pages
    dispatch(getAllTasks());

    // rerender page when delete all tasks on current page
    if (currentTask.length === 0 && currentPage > 1) {
      dispatch(getAllTasks());
      dispatch(setCurrentPage(currentPage - 1))
      return;
    }

    // rerender page when add task and on page more when 6 tasks
    if (currentTask.length > 6) {
      dispatch(getAllTasks());
      dispatch(getTasks(currentPage));
      return;
    }
  }, [dispatch, currentTask]);

  return (
    <main>
      <AppBar />
      <Filter />
      <section className="section section-main">
        <div className="container">
          <AddTask />
          {isLoading && !error && <Skeleton />}
          {!isLoading && !filteredTasks.length ? (
            <TaskList tasks={currentTask} />
          ) : (
            <TaskList tasks={filteredTasks} />
          )}
          {!isLoading && !filteredTasks.length && currentTask.length !== 0 && (
              <Pagination />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
