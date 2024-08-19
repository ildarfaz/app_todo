import { FC } from "react";

import { ITodo } from "../../types/store";

import styles from "./style.module.scss";

interface ToDoItem {
    item: ITodo;
    handleChange: (id: number) => void;
}

export const ToDoItem: FC<ToDoItem> = ({ item, handleChange }) => {
    return (
        <div
            className={styles.box}
            onClick={() => handleChange(item.id)}
        >
            <input
                type="checkbox"
                checked={item.done}
                readOnly
            />
            <span>
                {item.title}
            </span>
        </div>
    )
}