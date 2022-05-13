import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Goal from "./goal";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "lightgrey"};
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.goals === this.props.goals) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.tasks.map((goal, index) => (
      <Goal key={goal.id} goal={goal} index={index} />
    ));
  }
}

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              isDraggingOver={snapshot.isDraggingOver}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {/* {this.props.goals.map((goal, index) => (
                <Goal key={goal.id} goal={goal} index={index} />
              ))} */}
              <InnerList tasks={this.props.goals} />
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
