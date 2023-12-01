import { TaskCounter } from '../TaskCounter/TaskCounter';

export const AppBar = () => {
  return (
    <section className="section hero-section">
          <div className="container">
              <h1>To do list</h1>
        <TaskCounter />
      </div>
    </section>
  );
};
