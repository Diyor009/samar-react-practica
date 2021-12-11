import React from 'react';
import MyButton from './UI/button/MyButton';
const TableItem = (props) => {
    return(        

        <div className="d-flex justify-content-between border p-2 m-2">
    
            <p>{props.number}</p>
                <p>{props.post.title}</p>
                <p>{props.post.body}</p>
                <p><MyButton
                    onClick={() => props.remove(props.post)}
                    className="btn btn-primary"                
                >delete</MyButton>
            </p>

        </div>
      
    )
}
export default TableItem