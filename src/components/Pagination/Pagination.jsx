import { useSelector } from "react-redux";
import { selectTotalPage } from "../../redux/selectors";

export const Pagination = ({totalPage, onClick}) => {
    // const totalPage = useSelector(selectTotalPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPage; i+=1) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="page-list">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a href="!#" onClick={()=>onClick(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}