import React, { Component } from 'react';
import Item from './Item'


class List  extends Component {
    constructor(props){
      super(props)
      
    
      this.handleEdit =this.handleEdit.bind(this);
      this.handleRemove =this.handleRemove.bind(this);
  
    }
    
    handleEdit () {
        
      !this.props.onEdit || this.props.onEdit()
    }  

  
    
  
    
    handleRemove () {
        
        !this.props.onRemove || this.props.onRemove()
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

