import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "cyan")};
  color: ${(props) => (props.isDragging ? "darkgreen" : "darkviolet")};

  display: flex;
`;

// const Handle = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: orange;
//   border-radius: 4px;
//   margin-right: 8px;
// `;

export default class Goal extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.goal.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {/* <Handle {...provided.dragHandleProps} /> */}
            {this.props.goal.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
