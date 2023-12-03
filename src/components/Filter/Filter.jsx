import { useDispatch } from "react-redux";
import { statusFilters } from "../../redux/Filter/constans";
import { setStatusFilter } from "../../redux/Filter/filterSlice";

// Filter to get all completed tasks and tasks in progress
export const Filter = () => {
  const dispatch = useDispatch();

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