import React, { useContext, useState } from 'react'
import TodoListItem from '../../components/todo/TodoListItem'
import { LeaderBoardContext } from '../../context/Context'

const Todo = () => {

    const { leaderBoardList, todo } = useContext(LeaderBoardContext)

    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const handleInputChange = (e) => {
        setTask(e.target.value);
        console.log(task)

    }

    const addTask = () => {
        if (task !== '') {
            // taskList.push({ task: task, isDone: false, isCompleted: false })
            todo.push({ task: task, isDone: false, isCompleted: false })
            console.log(todo)
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



    const renderTasks = () => {
        if (todo?.length !== 0) {
            return todo?.map((item, index) => {
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