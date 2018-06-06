import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
      super(props)
      this.state={
        data: {text: this.props.data},
        editing: false,
      }
      
      
    this.handleEdit =this.handleEdit.bind(this);
    this.handleRemove =this.handleRemove.bind(this);
    this.handleInputEdit=this.handleInputEdit.bind(this);
    this.handleEditing=this.handleEditing.bind(this);
    
  
    }

    componentWillReceiveProps({data}) {
      console.log("data new")
      this.setState({data: {text: data}})
    }

    handleRemove () {
        !this.props.onRemove || this.props.onRemove()
      }

    handleEdit(newData){
         !this.props.onEdit || this.props.onEdit(newData.text) 
     }

      handleInputEdit(event) {
        let data = Object.assign({}, this.state.data)
        data[event.target.name] = event.target.value
        this.setState({data})
        this.handleEdit(data)
      }

      handleEditing () {
        this.setState({editing: !this.state.editing})
      }
    

    render() {
        return (
          <div className="App">
           <button onClick={this.handleEditing}>Edit</button>
           {
          this.state.editing
           ? <input type="text" name="text" value={this.state.data.text} onChange={this.handleInputEdit}/>
           : <span>{this.state.data.text}</span>
           }
            <button onClick={this.handleRemove}>Remove</button>
            
          </div>
        );
      }
    }






export default Item;






