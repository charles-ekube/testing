import React from "react";

const TodoListItem = (props) => {
    const { onDelete, editTask, onComplete, item } = props

    return (
        <>
            <section style={{ background: '#FFFFFF', margin: '10px 0', padding: '20px', borderRadius: '8px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', width: "300px" }}>
                <div>
                    {item?.isCompleted ? <p>Completed</p> :
                        <p>{item?.task}</p>}
                </div>
                <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}>
                    <li onClick={onDelete}>Delete</li>
                    <li onClick={onComplete}>Done</li>
                    <li>Edit</li>
                </ul>
            </section>
        </>
    )
}

export default TodoListItem;