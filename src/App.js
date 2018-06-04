import React, { Component } from 'react';
import List from './Todo/List';



import './App.css';

class App extends Component {
  state={
    list : [],
    item_adicionar:"",


  }

  handleInputChange (event) {
      
    this.setState({
      [event.target.name]:event.target.value
    })
    
  }

  
  addNameHandler (event){
    console.log('click!!!')
    if(this.state.item_adicionar !==""){
      this.state.list.push({
        nome:this.state.item_adicionar,
        


      })
      this.setState({
          
        lista:this.state.lista, 
        
        item_adicionar:"",
        
      })

  }
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Groceries List</h1>
        </header>
        <List list={this.state.list}/>
        
        <form onSubmit={this.addNameHandler}>
        <input type="text" name="item_adicionar" value={this.state.item_adicionar} onChange={this.handleInputChange}/>
        
        <input type="submit" name="frase_submit" />
        
        </form>

        
      </div>
    );
  }
}

export default App;
