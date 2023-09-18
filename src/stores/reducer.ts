import { IAction, IState } from "../types/store";
import { EAction } from "../types/common";

export const reducer = (state: IState, action: IAction) => {

    switch (action.type) {
        case EAction.ADD_TODO:
            return { ...state, todoList: [...state.todoList, { id: new Date().getTime(), done: false, title: action.payload }] }
        default:
            return state;
    }
}
