import { FC } from "react";

import { TTodo } from "../../types/store";

import styles from "./style.module.scss";

interface ToDoItem {
    item: TTodo;
    handleChange: (id: number) => void;
}

export const ToDoItem: FC<ToDoItem> = ({ item, handleChange }) => {
    return (
        <button
            className={styles.box}
            onClick={() => handleChange(item.id)}
            disabled={item.done}
        >
            <input
                type="checkbox"
                checked={item.done}
                readOnly
                disabled={item.done}
            />
            <span className={`${item.done ? styles.box__title__done : ""}`}>
                {item.title}
            </span>
        </button>
    )
}