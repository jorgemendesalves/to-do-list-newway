import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
      super(props)
      
      
    this.handleEdit =this.handleEdit.bind(this);
    this.handleRemove =this.handleRemove.bind(this);
    this.handleInputEdit=this.handleInputEdit.bind(this);
    
  
    }
    handleRemove () {
        
        !this.props.onRemove || this.props.onRemove()
      }

     
    handleEdit () {
        
      !this.props.onEdit || this.props.onEdit()
    }  

      




      handleInputEdit(event) {
        this.setState({
          [event.target.name]:event.target.value
        })
        
      }
    

    render() {
        return (
          <div className="App">
           
           <span>{this.props.data}</span>
            <span>
                {/* <button
                 onClick={() => !this.onChange || this.onChange()}>Edit
                </button> */}
            </span>
            
        
            <button onClick={this.handleEdit}>Edit</button>
            <input type="text" name="item_alterar" value={this.state.item_alterar} onChange={this.handleInputEdit}/>
            <button onClick={this.handleRemove}>Remove</button>
            
           
            
           
    
            
          </div>
        );
      }
    }






export default Item;






