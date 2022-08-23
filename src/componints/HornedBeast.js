import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfloves: "",
      // cardName :'',
    };
  }

  incrementNumOflove = () => {
    this.setState({
      numOfloves: this.state.numOfloves + "💕",
    });
  };
  cardtital=()=>{
    // this.setState({
    //   cardName:this.props.title,
    // });
    this.props.Module()

  }




  render() {
    return (
      <div>
        <Col>
          <Card onClick={this.cardtital} style={{ width: "25rem", textAlign: "center", borderBlockStyle: "solid", borderWidth: "5px", height: "50rem", margin: "30px", borderRadius: "20px", backgroundColor: "#FFB4B4", }}>
            <Card.Title style={{ color: "black", fontSize: "1.5rem", fontweight: "bold" }} >
              {this.props.id}
            </Card.Title>
            <Card.Title style={{ color: "red", fontSize: "2rem", fontweight: "bold" }} >
              {this.props.title}
            </Card.Title>
            <Card.Body>
              <Card.Img variant="top" src={this.props.img} alt="image" title={this.props.title} onClick={this.incrementNumOflove}  />
              <Card.Text>
                <p style={{ fontSize: "1.5rem" }}> keyword : {this.props.keyword}</p>
                <p style={{ fontSize: "1.5rem" }}>horns :{this.props.horns}</p>
                <p style={{ fontSize: "1.5rem" }}>{this.props.disc}</p>
              </Card.Text>
              <Card.Text style={{ margin: "10px", fontSize: "1.5rem" }}>
                💕Favorites: {this.state.numOfloves}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default HornedBeast;
