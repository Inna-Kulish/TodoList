import { useSelector } from 'react-redux';
import { selectTotalPage } from '../../redux/selectors';

  export const Pagination = ({ currentPage, onClick }) => {
    const totalPage = useSelector(selectTotalPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPage; i+=1) {
        pageNumbers.push(i);
    }
  
  const onPageClick = (e) => {
    e.preventDefault();

    const number = Number(e.target.text);
    onClick(number);

  }

    return (
        <div>
            <ul className="page-list">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a href="" className={currentPage === number ? 'page-link active-page' : 'page-link'} onClick={onPageClick}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
