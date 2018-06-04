import React from 'react';
import Item from './Item'



const List = ({list})=> {
   
    return (
        <div>
            {
                list.map((item, index) => {
                return( 
                <Item 
                key={"frase" + index}
                Changed={this.handleEdit.bind(this)}
                Item={this.state.name} 
                />
            )
                
                
               



            })
            
        }
        </div>


    )
}

export default List;

