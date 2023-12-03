import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./scss/index.scss";
import { Skeleton } from "./components/Skeleton/Skeleton";
import { selectError, selectIsLoading, selectTasks, selectTotalPage, selectVisibleTasks } from "./redux/selectors";
import { getTasks, getAllTasks } from "./redux/operations";
import { AppBar } from "./components/AppBar/AppBar";
import { AddTask } from "./components/AddTask/AddTask";
import { TaskList } from "./components/TaskList/TaskList";
import { Pagination } from "./components/Pagination/Pagination";
import { NavButton } from "./components/NavButton/NavButton";
import { Filter } from "./components/Filter/Filter";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentTask = useSelector(selectTasks);
  const filteredTasks = useSelector(selectVisibleTasks);
  const totalPage = useSelector(selectTotalPage);
  console.log(isLoading)

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);
  const onPrevClick = () => setCurrentPage((prev) => prev - 1);
  const onNextClick = () => setCurrentPage((prev) => prev + 1);


  useEffect(() => {
    dispatch(getTasks(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(getAllTasks());
    if (currentTask.length === 0 && currentPage > 1) {
      dispatch(getAllTasks());
      setCurrentPage((prev) => prev - 1);
      return;
    }

    if (currentTask.length > 6) {
      dispatch(getAllTasks());
      dispatch(getTasks(currentPage));
      return;
    }

  }, [dispatch, currentTask]);

  return (
    <main>
      <AppBar />
          <Filter/>
    <section className="section section-main">
        <div className="container">
          <AddTask />
          {isLoading && !error && <Skeleton/>}
          {!isLoading && !filteredTasks.length ? <TaskList tasks={currentTask}/> : <TaskList tasks={filteredTasks} />}
        {!isLoading && !filteredTasks.length && currentTask.length !== 0 && <div className="btn-box">
          <NavButton
            name={"Prev"}
            disabled={currentPage === 1}
            onBtnClick={onPrevClick}
          />
          <Pagination currentPage={currentPage} onClick={onPageChange} />
          <NavButton
            name={"Next"}
            disabled={currentPage === totalPage}
            onBtnClick={onNextClick}
          />
        </div>}
      </div>
      </section>
      </main>
  );
}

export default App;
