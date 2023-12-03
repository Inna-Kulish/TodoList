// Loader skeleton is shown when we expect data from the backend
export const Skeleton = () => {
  const arr = [];

  // Counts the number of cards
  for (let i = 0; i < 6; i += 1) {
    arr.push(i);
  }

  return (
    <ul className="list-skeleton">
      {arr.map((item) => (
        <li className="item-skeleton" key={item}>
          <div className="loading-skeleton">
            <img
              src="//placekitten.com/300/200"
              className="card-img-top"
              alt="..."
            />
          </div>
        </li>
      ))}
      </ul>
  );
};
