export const Skeleton = () => {
  const arr = [];

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
