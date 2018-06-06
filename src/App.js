import React, { Component } from 'react';
import List from './Todo/List';



import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      list : [],
      item_adicionar:"",
      
  

  }
  
  this.handleInputAdd=this.handleInputAdd.bind(this);
  this.addNameHandler=this.addNameHandler.bind(this);
 
    this.handleRemove =this.handleRemove.bind(this);
    this.handleEdit =this.handleEdit.bind(this);
  }
  
 


  handleRemove(index){
    let list = this.state.list.slice()
    list.splice(index ,1)
      this.setState({list})
  }

  handleEdit (index, data) {
    let list = this.state.list.slice()
    list[index] = data;
      this.setState({list})
  }



  handleInputAdd(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
    
  }

  
  addNameHandler (event){
    event.preventDefault()
  
    if(this.state.item_adicionar !==""){
      this.state.list.push(this.state.item_adicionar)
      this.setState({
          
        list:this.state.list, 
        
        item_adicionar:"",
        
      })

  }
  
}


  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Groceries List<span>{this.state.list.length}</span></h1>
        </header>
        <List list={this.state.list} onRemove={this.handleRemove} onEdit={this.handleEdit}/>
        
        <form onSubmit={this.addNameHandler}>
        <input type="text" name="item_adicionar" value={this.state.item_adicionar} onChange={this.handleInputAdd}/>
        
        <input type="submit" name="frase_submit" />
        
        </form>

        
      </div>
    );
  }
}

export default App;
