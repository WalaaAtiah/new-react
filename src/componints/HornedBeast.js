import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
        numOfloves : ""
    }
}

incrementNumOflove = () => {
    this.setState({
        numOfloves : this.state.numOfloves + "💕"
    })
}





  render(){
    return(
    <div>
      
<Card style={{ width: '20rem' ,textAlign:'center' ,borderBlockStyle:'solid' ,borderWidth:'5px' ,height:'40rem' ,margin:'10px',borderRadius:'20px' ,backgroundColor:'#FFB4B4'  }}>
      <Card.Title style={{color:'black' ,fontSize:'1.5rem' ,fontweight:'bold'  }}>{this.props.id}</Card.Title>
      <Card.Title style={{color:'red' ,fontSize:'2rem' ,fontweight:'bold'}}>{this.props.title}</Card.Title>
      <Card.Body>
      <Card.Img variant="top" src={this.props.img} alt='image' title={this.props.title} onClick={this.incrementNumOflove}/>
        <Card.Text>
        <p style={{fontSize:'1rem'}}>{this.props.keyword}</p>
        <p style={{fontSize:'1rem'}}>{this.props.horns}</p>
        <p style={{fontSize:'1rem'}}>{this.props.disc}</p>

        </Card.Text>
        <Card.Text style={{margin:'10px' ,fontSize:'1.5rem' }}>
        💕Favorites: {this.state.numOfloves}
        </Card.Text>
      </Card.Body>
    </Card>



    </div>
    )
  }
}

export default HornedBeast;