import { IAction, IState } from "../types/store";
import { EAction } from "../types/common";

export const reducer = (state: IState, action: IAction) => {

    switch (action.type) {
        case EAction.ADD_TODO:
            return { ...state, todoList: [...state.todoList, { id: new Date().getTime(), done: false, title: action.payload }] };
        case EAction.DEL_COMPLETED:
            return { ...state, todoList: state.todoList.filter((todo) => !todo.done) };
        case EAction.CHANGE_TODO:
            return { ...state, todoList: state.todoList.map((todo) => todo.id === Number(action.payload) ? { ...todo, done: !todo.done } : todo) };
        default:
            return state;
    }
}
