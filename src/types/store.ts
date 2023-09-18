import { EAction } from "./common";
export interface ITodo {
    id: number;
    done: boolean;
    title: string;
}

export interface IState {
    todoList: ITodo[];

}
export interface IAction {
    type: EAction;
    payload: string;
}