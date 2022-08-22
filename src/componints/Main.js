import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data.json'


class Main extends React.Component {
  
  render(){
    return(

      
    <div style={{ display:'flex' , alignContent:'center'  }}>

        {Data.map(user => (
          
          <><HornedBeast id={user._id} title={user.title} img={user.image_url} disc={user.description} keyword={user.keyword} horns={user.horns} /></>
      ))}

          

    </div>
    )
  }
}

export default Main;
