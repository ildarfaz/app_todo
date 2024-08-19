import { FC } from "react";

import { ITodo } from "../../types/store";
import { ToDoItem } from "../todoitem";

import styles from "./style.module.scss";

interface IToDoList {
    todos: ITodo[];
    handleChange: (id: number) => void;
}

export const ToDoList: FC<IToDoList> = ({ todos, handleChange }) => {

    return (
        <div className={styles.box}>
            {todos.map((item) =>
                <ToDoItem
                    key={item.id}
                    item={item}
                    handleChange={handleChange}
                />)}
        </div>
    )
}