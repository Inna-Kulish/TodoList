import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./scss/index.scss";
import { getTasks, getAllTasks } from "./redux/operations";
import { AddTask } from "./components/AddTask/AddTask";
import { TaskList } from "./components/TaskList/TaskList";
import { Pagination } from "./components/Pagination/Pagination";
import { NavButton } from "./components/NavButton/NavButton";
import { selectAllTasks, selectTasks, selectTotalPage } from "./redux/selectors";
import { TaskCounter } from "./components/TaskCounter/TaskCounter";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const allTasks = useSelector(selectAllTasks);
  const currentTask = useSelector(selectTasks);
  const totalPage = useSelector(selectTotalPage);

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

    if (currentTask.length > 9) {
      dispatch(getAllTasks());
      dispatch(getTasks(currentPage));
      return;
    }
  }, [dispatch, currentTask]);

  return (
    <section className="section">
      <div className="container">
        <TaskCounter />
        <AddTask />
        <TaskList />
        <div className="btn-box">
          <NavButton
            name={"Prev"}
            disabled={currentPage === 1}
            onBtnClick={onPrevClick}
          />
          <Pagination totalPage={totalPage} onClick={onPageChange} />
          <NavButton
            name={"Next"}
            disabled={currentPage === totalPage}
            onBtnClick={onNextClick}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
