import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
      super(props)
      this.state={
        list : [],
        item_alterar:"",
        item_adicionar:""
  
    }
    
    this.handleRemove =this.handleRemove.bind(this);
    this.handleInputEdit=this.handleInputEdit.bind(this);
  
    }
    handleRemove () {
        
        !this.props.onRemove || this.props.onRemove()
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
            
        
           
            <input type="text" name="item_alterar" value={this.state.item_alterar} onChange={this.handleInputAdd}/>
            <button onClick={this.handleRemove}>Remove</button>
            
           
            
           
    
            
          </div>
        );
      }
    }






export default Item;






