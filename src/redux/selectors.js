import { createSelector } from "@reduxjs/toolkit";

export const selectTaskNumbers = (state) => state.tasks.numberTasks;
export const selectTasks = (state) => state.tasks.items;

export const selectTotalPage = createSelector(selectTaskNumbers, (totalTasks) => {
    return Math.ceil(totalTasks / 9);
})