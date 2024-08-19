import { FC, useReducer } from "react";

import { Input } from "../ui/input";
import { Footer } from "../footer";
import { ToDoList } from "../todolist";
import { EAction, EFilterType } from "../../types/common";
import { reducer } from "../../stores/reducer";

import styles from "./style.module.scss";

const initialState = {
    todoList: [],
    filter: EFilterType.ALL,
    filterList: []
};

export const Content: FC = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleKeyDown = (value: string) => {
        dispatch({ type: EAction.ADD_TODO, payload: value });
        dispatch({ type: EAction.CHANGE_FILTER, payload: state.filter });
    };

    const handleClearComplete = () => {
        dispatch({ type: EAction.DEL_COMPLETED, payload: "" });
        dispatch({ type: EAction.CHANGE_FILTER, payload: state.filter });
    };

    const handleChange = (id: number) => {
        dispatch({ type: EAction.CHANGE_TODO, payload: `${id}` });
        dispatch({ type: EAction.CHANGE_FILTER, payload: state.filter });
    }
    const handleFilter = (type: EFilterType) => {
        dispatch({ type: EAction.CHANGE_FILTER, payload: type });
    }

    return (
        <main className={styles.box}>
            <Input onKeyDown={handleKeyDown} />
            <ToDoList
                todos={state.filterList}
                handleChange={handleChange}
            />
            <Footer
                list={state.filterList}
                handleClear={handleClearComplete}
                handleFilter={handleFilter}
                activeFilter={state.filter}
            />
        </main>
    )
}