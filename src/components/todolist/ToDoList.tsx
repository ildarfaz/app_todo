import { FC } from "react";

import styles from "./ToDoList.module.scss";
import { ITodo } from "../../types/store";
import { ToDoItem } from "../todoitem/ToDoItem";

interface ToDoList {
    todos: ITodo[];
}

export const ToDoList: FC<ToDoList> = ({ todos }) => {

    const list = () => { 
    return <>{todos.map((item) => <ToDoItem key={item.id} item={item} />)}</> };


    return (
        <div className={styles.box}>
            {list()}
        </div>
    )
}