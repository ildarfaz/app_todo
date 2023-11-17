import { FC, useMemo } from "react";

import styles from "./todolist.module.scss";
import { ITodo } from "../../types/store";
import { ToDoItem } from "../todoitem/ToDoItem";

interface IToDoList {
    todos: ITodo[];
}

export const ToDoList: FC<IToDoList> = ({ todos }) => {

    const list = useMemo(() => {
        return <>{todos.map((item) => <ToDoItem key={item.id} item={item} />)}</>
    }, [todos]);


    return (
        <div className={styles.box}>
            {list}
        </div>
    )
}