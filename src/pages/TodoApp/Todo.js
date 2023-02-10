import React, { useState } from 'react'
import TodoListItem from '../../components/todo/TodoListItem'

const Todo = () => {

    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const handleInputChange = (e) => {
        setTask(e.target.value);
        console.log(task)

    }

    const addTask = () => {
        if (task !== '') {
            taskList.push({ task: task, isDone: false, isCompleted: false })
            console.log(taskList)
            setTask('')
        } else {
            alert('empty')
        }
    }



    const completeTask = (i) => {
        setTaskList(
            taskList.map((task, index) => {
                if (index === i) {
                    return { ...task, isCompleted: !task.completed };
                }
                return task;
            })
        );
    }
    const onDelete = (i) => {
        const selectedItem = taskList.findIndex((item, index) => index === i);
        const newItems = [...taskList];
        newItems.splice(selectedItem, 1);
        setTaskList(newItems)
    }

    // const onEdit = (i, newTask) => {
    //     setTaskList(
    //         taskList.map((item, index) => {
    //             if (index === i) {
    //                 return { ...item, task: newTask };
    //             }
    //             return item;
    //         })
    //     );
    // }

    const renderTasks = () => {
        if (taskList?.length !== 0) {
            return taskList?.map((item, index) => {
                return (
                    <TodoListItem item={item} key={index} onComplete={() => completeTask(index)} onDelete={() => onDelete(index)} />
                )
            })
        }
    }





    return (
        <>
            <section style={{ margin: '200px auto', width: '600px' }}>
                <input type={'text'} value={task} onChange={handleInputChange} />
                <button onClick={addTask}>Add</button>
                <div>
                    {renderTasks()}
                </div>
            </section>
        </>
    )
}

export default Todo