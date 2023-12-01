import { useSelector } from "react-redux";
import { selectTotalPage } from "../../redux/selectors";

export const Pagination = ({totalPage, onClick}) => {
    // const totalPage = useSelector(selectTotalPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPage; i+=1) {
        pageNumbers.push(i);
    }

    function hideOverPages() {
  let items = [...pagination.children];
  if (items.length > 5) {
    items.forEach((item) => item.classList.add("_hide"));
    items[0].classList.remove("_hide");
    if (active.parentElement.previousElementSibling) {
      active.parentElement.previousElementSibling.classList.remove("_hide");
    }
    active.parentElement.classList.remove("_hide");
    if (active.parentElement.nextElementSibling) {
      active.parentElement.nextElementSibling.classList.remove("_hide");
    }
    items[items.length - 1].classList.remove("_hide");
  }
}

    return (
        <div>
            <ul className="page-list">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a href="" onClick={()=>onClick(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}