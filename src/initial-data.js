const initialData = {
  goals: {
    "goal-1": { content: "Do all exercises!", id: "goal-1" },
    "goal-2": { content: "Finish the course!", id: "goal-2" },
    "goal-3": { content: "Add more items", id: "goal-3" },
    "goal-4": { content: "Make this draggable", id: "goal-4" },
    "goal-5": { content: "Apply concept to groceries", id: "goal-5" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Goals",
      goalIds: ["goal-1", "goal-2", "goal-3", "goal-4", "goal-5"],
    },
  },
  // Facilitate Reordering of Columns
  columnOrder: ["column-1"],
};

export default initialData;
