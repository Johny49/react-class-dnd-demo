import React from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";
import initialData from "./initial-data";

class App extends React.Component {
  state = initialData;

  onDragStart = () => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.12 ease";
  };

  onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.goals).length
      : 0;
    document.body.style.backgroundColor = `rgba(153,141,217, ${opacity})`;
  };

  onDragEnd = (result) => {
    // reset text and background color
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newGoalIds = Array.from(column.goalIds);
    newGoalIds.splice(source.index, 1);
    newGoalIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      goalIds: newGoalIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const goals = column.goalIds.map(
            (goalId) => this.state.goals[goalId]
          );

          return <Column key={column.id} column={column} goals={goals} />;
        })}
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
