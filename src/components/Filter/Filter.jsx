import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "../../redux/Filter/constans";
import { selectStatusFilter } from "../../redux/selectors"; 
import { setStatusFilter } from "../../redux/Filter/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

    const handleFilterChange = filter => { dispatch(setStatusFilter(filter))};

    return (
      <section className="filter-section">
      <div className="container filter-wrap">
          <h2>Filter by status:</h2>
          <ul className="filter-list">
              {statusFilters.map(filter => (
                  <li key={filter.name}><button className="btn" selected={filter.name}
                      onClick={() => handleFilterChange(filter.name)}
                  >{filter.name}</button></li>
              ))}
          </ul>
            </div>
            </section>
  );
};