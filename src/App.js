import React from 'react';
import Header from './componints/Header';
import Footer from './componints/Footer';
import Main from './componints/Main';
import Data from './componints/Data.json'


class App extends React.Component {

  render(){
    return(
    <div style={{backgroundColor:"rgb(178, 235, 235)"  }}>
    <Header />
    <Main  Data={Data}/>
    <Footer />

    </div>
    )
  }
}

export default App;
