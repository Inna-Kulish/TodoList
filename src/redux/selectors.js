import { createSelector } from "@reduxjs/toolkit";

export const selectAllTasks = (state) => state.tasks.allTasks;
export const selectTasks = (state) => state.tasks.items;
export const selectTotalPage = (state) => state.tasks.totalPage;

export const selectTaskCount = createSelector([selectAllTasks], tasks => {
  return tasks.reduce(
      (count, task) => {
          count.total += 1;
      if (task.completed) {
        count.completed += 1;
      } else {
          
        count.active += 1;
      }
      return count;
    },
      { total: 0, active: 0, completed: 0 }
  );
});