import React, { Component } from 'react';
import List from './Todo/List';



import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      list : [],
      item_adicionar:"",
      item_alterar:"",
  

  }
  
  this.handleInputAdd=this.handleInputAdd.bind(this);
  this.addNameHandler=this.addNameHandler.bind(this);
  this.handleEdit =this.handleEdit.bind(this);
    this.handleRemove =this.handleRemove.bind(this);
  }
  
 


  handleRemove(index){
    this.state.list.splice(index ,1)
      this.setState({list: this.state.list})

  }

  handleEdit(index){
   

    const list = this.state.list
    
    list[index] = this.state.item_alterar
    console.log(this.state.item_alterar)
   
    this.setState({
      
      list:this.state.list, 
      
     
      
    })
    
    
    

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
  console.log(this.state.list)
}


  render() {
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
