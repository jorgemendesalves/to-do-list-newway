import React, { Component } from 'react';
import Item from './Item'


class List  extends Component {
    constructor(props){
      super(props)
      
    
      this.handleEdit =this.handleEdit.bind(this);
    
  
    }
    
    handleEdit (index, newdata) {
        
      !this.props.onEdit || this.props.onEdit(index, newdata)
      
    }  

  
    
  
    
    handleRemove (index) {
        
        !this.props.onRemove || this.props.onRemove(index)
      }
  
  
    render() {
      return (
        <div>
        {
            this.props.list.map((item, index) => {
              
            return( 
            <Item 
              key={"frase" + index}
              onChange={this.onChange}
              data={item} 
              onRemove={this.handleRemove.bind(this, index)}
              onEdit={this.handleEdit.bind(this,index)}
              />
        )
            
            
           



        })
        
    }
    </div>

      );
    }
  }


export default List;

