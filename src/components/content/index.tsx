import { FC, useReducer } from "react";

import { Input } from "../ui/input";
import { Footer } from "../footer";
import { ToDoList } from "../todolist";
import { EAction } from "../../types/common";
import { reducer } from "../../stores/reducer";

import styles from "./style.module.scss";

const initialState = {
    todoList: [
        {
            id: new Date().getTime(),
            done: true, title: "Сделать todo"
        }
    ]
};

export const Content: FC = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleKeyDown = (value: string) => {
        dispatch({ type: EAction.ADD_TODO, payload: value });
    };

    const handleClearComplete = () => {
        dispatch({ type: EAction.DEL_COMPLETED, payload: "" });
    };

    const handleChange = (id: number) => {
        dispatch({ type: EAction.CHANGE_TODO, payload: `${id}` });
    }


    return (
        <div className={styles.box}>
            <Input onKeyDown={handleKeyDown} />
            <ToDoList todos={state.todoList} handleChange={handleChange} />
            <Footer list={state.todoList} handleClear={handleClearComplete} />
        </div>
    )
}