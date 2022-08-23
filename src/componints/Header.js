import React from 'react';



class Header extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
        change : ""
    }
}

changeelement = () => {
    this.setState({
      change : "🦄🐋🐏"
      
    })
}


  render(){
    return(
    <div>
      <h1 onMouseOver={this.changeelement}> {this.state.change} Animal APP 🐐🐑🐕</h1>
      <style jsx >
        {`
          h1 {
            text-align: center;
            font-size: 40px;
            font-weight: bold;
            color:DodgerBlue;
          }
        `}
      </style>

    </div>
    
    
    )
  }
}

export default Header;