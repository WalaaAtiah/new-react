import React from "react";
import HornedBeast from "./HornedBeast";
// import Data from './Data.json'
import Row from "react-bootstrap/Row";

class Main extends React.Component {


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clickCard: "",
  //   };
  // }


  render() {
    return (
      <Row xs={1} md={3} className="g-4">
        {this.props.Data.map((user) => (
          <HornedBeast
            id={user._id}
            title={user.title}
            img={user.image_url}
            disc={user.description}
            keyword={user.keyword}
            horns={user.horns}
            Module={this.props.Module}
          />
        ))}
      </Row>
    );
  }
}

export default Main;
