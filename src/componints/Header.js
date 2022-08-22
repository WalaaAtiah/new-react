import React from 'react';



class Header extends React.Component {
  render(){
    return(
    <div>
      <h1>🦄🦄 Unicorn React APP </h1>
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