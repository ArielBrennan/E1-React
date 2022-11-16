import React from 'react'
import ElementoToDo from './ElementoToDo'

export default function ToDoContainer({todos}) {
    return (
        todos.map((todo, index) => {
            return <ElementoToDo key={index} todo={todo} />
        })
    )
}
