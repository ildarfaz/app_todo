import { FC } from "react";

import styles from "./ToDoItem.module.scss";
import { ITodo } from "../../types/store";

interface ToDoItem {
    item: ITodo;
}

export const ToDoItem: FC<ToDoItem> = ({ item }) => {
    return (
        <div className={styles.box}>
            <input type="checkbox" checked = {item.done} />
            <span>{item.title}</span>
        </div>
    )
}