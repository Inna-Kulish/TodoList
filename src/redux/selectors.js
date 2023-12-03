import { createSelector } from "@reduxjs/toolkit";

export const selectAllTasks = (state) => state.tasks.allTasks;
export const selectTasks = (state) => state.tasks.items;
export const selectTotalPage = (state) => state.tasks.totalPage;
export const selectStatusFilter = (state) => state.filters.status;
export const selectCurrentPage = (state) => state.tasks.currentPage;
export const selectIsLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;

export const selectVisibleTasks = createSelector(
  [selectAllTasks, selectStatusFilter],
  (allTasks, filter) => {
    return allTasks.filter(task => {
      if (filter === 'active' && !task.completed) {
        return true;
      }
      if (filter === 'completed' && task.completed) {
        return true;
      }
      return false;
   })
  }
);

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