import { FC, useReducer } from "react";
import styles from "./content.module.scss";
import { Input } from "../ui/Input";
import { Footer } from "../footer/Footer";
import { ToDoList } from "../todolist/ToDoList";
import { EAction } from "../../types/common";
import { reducer } from "../../stores/reducer";

const initialState = { todoList: [{ id: new Date().getTime(), done: true, title: "Сделать todo" }] };

export const Content: FC = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleKeyDown = (value: string) => {
        dispatch({ type: EAction.ADD_TODO, payload: value });
    };

    const handleClearComplete = () => {
        dispatch({type: EAction.DEL_COMPLETED, payload: ""});
    };

    return (
        <div className={styles.box}>
            <Input onKeyDown={handleKeyDown} />
            <ToDoList todos={state.todoList}/>
            <Footer list={state.todoList} handleClear = {handleClearComplete}/>
        </div>
    )
}