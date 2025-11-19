import React, { useState } from "react"

const TodoList = () => {
    const [todoList, setTodoList] = useState([])
    const [text, setText] = useState('')

    const addListItem = () => {
        setText('')
        setTodoList([
            ...todoList,
            {
                id: Date.now(),
                text: text
            }
        ])
    }

    const deleteListItem = (itemId) => {
        const revisedList = todoList.filter(item => item.id !== itemId)
        setTodoList(revisedList)
    }

    return (
        <div className="flex justify-between">
            <div className="flex mx-4 my-4">
                <h1 className="mr-4">
                    Add Todo Item
                </h1>
                <input
                    className="border-2 rounded-2xl h-8 w-32 px-2"
                    id="todo"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className="cursor-pointer bg-blue-400 rounded-2xl h-8 px-6 py-1 ml-4 text-white"
                    onClick={addListItem}
                >
                    Add
                </button>
            </div>
            <div className="mx-12 my-4 min-w-80">
                <h1 className="text-2xl border-b-2 pb-1 mb-4">
                    Your Todo List
                </h1>
                {todoList.length === 0
                    ? <p> No Items in List. Please add </p>
                    : todoList.map(item => (
                        <ul key={item.id}>
                            <div className="flex items-center justify-between my-1">
                                <li className="text-xl">
                                    {item.text}
                                </li>
                                <button
                                    className="cursor-pointer bg-red-400 rounded-2xl h-8 px-6 py-1 ml-4 text-white"
                                    onClick={(e) => deleteListItem(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </ul>
                    ))}
            </div>
        </div>
    )
}

export default TodoList
