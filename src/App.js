import React from 'react';
import Header from './componints/Header';
import Footer from './componints/Footer';
import Main from './componints/Main';
import SelestedBeast from './componints/SelectedBeast'
import Data from './componints/Data.json'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newModule: "",
    };
  }

  Module = () => {
    this.setState({
      newModule: this.state.newModule + "💕",
    });
  };
  



  render(){
    return(
    <div style={{backgroundColor:"rgb(178, 235, 235)"  }}>
      <h1>newmodel :{this.state.newModule}</h1>


    <Header />
    <Main  Data={Data} Module={this.Module}/>
    <Footer />

    </div>
    )
  }
}

export default App;
