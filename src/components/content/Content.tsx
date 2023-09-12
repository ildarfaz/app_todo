import { FC, useReducer } from "react";
import styles from "./content.module.scss";
import { Input } from "../ui/Input";
import { Footer } from "../footer/Footer";
import { ToDoList } from "../todolist/ToDoList";

enum EAction {
    ADD_TODO = 'ADD_TODO',
    DEL_COMPLETED = 'DEL_COMPLETED',
    CHANGE_TODO = 'CHANGE_TODO',
}
interface IState {
    todoList: { id: number, done: boolean, title: string }[]

}
interface IAction {
    type: EAction;
    payload: string;
}
const initialState = { todoList: [] };

const reducer = (state: IState, action: IAction) => {

    switch (action.type) {
        case EAction.ADD_TODO:
            return { ...state, todoList: [...state.todoList, { id: new Date().getTime(), done: false, title: action.payload }] }
        default:
            return state;
    }
}

export const Content: FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleKeyDown = (value: string) => {

            dispatch({ type: EAction.ADD_TODO, payload: value });
        
    };
    console.log(state);
    return (
        <div className={styles.box}>
            <Input onKeyDown= {handleKeyDown} />
            <ToDoList />
            <Footer />
        </div>
    )
}