import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
class SelectedBeast extends React.Component {
  
  

  render() {
    return (
      <>
        <Modal  show={this.props.setshow} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: "black", fontSize: "2rem", fontweight: "bold" }}> {this.props.selBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card style={{ width: "25rem", textAlign: "center", borderBlockStyle: "solid", borderWidth: "5px", height: "50rem", margin: "30px", borderRadius: "20px", backgroundColor: "#FFB4B4", }}>
            <Card.Title style={{ color: "black", fontSize: "1.5rem", fontweight: "bold" }} >
              {this.props.selBeast._id}
            </Card.Title>
            <Card.Title style={{ color: "red", fontSize: "2rem", fontweight: "bold" }} >
            {this.props.selBeast.id}
              {this.props.selBeast.title}
            </Card.Title>
            <Card.Body>
              <Card.Img variant="top" src={this.props.selBeast.image_url} alt="image" title={this.props.selBeast.title}   />
              <Card.Text>
                <p style={{ fontSize: "1.5rem" }}> keyword : {this.props.selBeast.keyword}</p>
                <p style={{ fontSize: "1.5rem" }}>horns :{this.props.selBeast.horns}</p>
                <p style={{ fontSize: "1.5rem" }}>{this.props.selBeast.description}</p>
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
