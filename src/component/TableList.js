import React from "react";
import TableItem from "./Tableitem";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from 'react-transition-group';

const TableList = ({posts, title, remove}) => {
    if(!posts.length) {
        return (
            <h6 className="text-center">
                NOT FOUND
            </h6>
        )
    }
    return (
        <>
            <h5 className="text">{title}</h5>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="item">
                        <TableItem remove={remove} number = {index + 1} post={post}/>
                    </CSSTransition>                
            ))}
            </TransitionGroup>
            
        </>
    )
}
export default TableList