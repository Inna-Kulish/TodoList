import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentPage, selectTotalPage } from '../../redux/selectors';
import { setCurrentPage } from '../../redux/tasksSlice';
import { NavButton } from '../NavButton/NavButton';

// Pagination to navigate between pages
export const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPage = useSelector(selectTotalPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i += 1) {
    pageNumbers.push(i);
  }

  const onPrevClick = () => dispatch(setCurrentPage(currentPage - 1));
  const onNextClick = () => dispatch(setCurrentPage(currentPage + 1));
    
  const onPageClick = (e) => {
    e.preventDefault();

    const number = Number(e.target.text);
    dispatch(setCurrentPage(number));
  };

  return (
    <div>
      <div className="btn-box">
        <NavButton
          name={'Prev'}
          disabled={currentPage === 1}
          onBtnClick={onPrevClick}
        />
        <ul className="page-list">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                href=""
                className={
                  currentPage === number ? 'page-link active-page' : 'page-link'
                }
                onClick={onPageClick}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
        <NavButton
          name={'Next'}
          disabled={currentPage === totalPage}
          onBtnClick={onNextClick}
        />
      </div>
    </div>
  );
};
