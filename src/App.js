import React from 'react';
import Header from './componints/Header';
import Footer from './componints/Footer';
import Main from './componints/Main';
import SelestedBeast from './componints/SelectedBeast'
import Data from './componints/Data.json'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newModule: "",
      setshow:false,
      selBeast :{},
      selecthorn:Data,
      numberHorn :0,
      bbb:5

      
    };
  }

  Module = (name) => {
    
    this.setState({
      newModule: this.state.newModule + "💕",
      setshow:true,
      selBeast:Data.find(item=>item.title===name)

    });
  };
  handleClose = () => {
    this.setState({
      setshow: false,
      
    });
  };
  numhorn =(event) =>{
    this.setState({
      numberHorn :event.target.value,
      
              })
      event.preventDefault();
      console.log(this.state.numberHorn);
      let a =Data.filter(item=>{
         
        switch(this.state.numberHorn){
          case "1":
          case "2": 
            return (item.horns==this.state.numberHorn);
          case "3"  :
            return (item.horns>=this.state.numberHorn);
          default:
            return true;
        }
      })

      this.setState({
       
        selecthorn:a
                })

      console.log(a);
    }
  



  render(){
    return(
    <div style={{backgroundColor:"rgb(178, 235, 235)"  ,textAlign:'center'}}>
      <h1>newmodel :{this.state.newModule}</h1>
     
    <Header />

    <div style={{textAlign:'center' ,borderStyle:'dashed', borderWidth: "2px" ,borderColor:'blue' ,width:'50rem' ,padding:'10px' ,fontSize:'25px'}}>
      <form onChange={this.numhorn}>
    <Form.Group className="mb-3" >
        <Form.Label htmlFor='select'>Numbers of Horns 🦄</Form.Label>
        <Form.Select id='select' style={{fontSize:'25px' ,textAlign:'center'}} onClick={this.numhorn} >
          <option >Please Choose Number Of Horn</option>
          <option value={1} >One</option>
          <option value={2}>Two</option>
          <option value ={3} >more</option>
        </Form.Select>
        <Button variant="primary" type="submit" >
        reset 
      </Button>
      </Form.Group>
      <> select the beast have number of horns={this.state.numberHorn}</>
      {/* <> {this.state.selecthorn} </>  */}
    </form>
    </div>


    
    <Main  Data={this.state.selecthorn} Module={this.Module} />
    <Footer />
    <SelestedBeast setshow={this.state.setshow} handleClose={this.handleClose} selBeast={this.state.selBeast}/>

    </div>
    )
  }
}

export default App;
