import { EAction } from "./common";
export type TTodo = {
    id: number;
    done: boolean;
    title: string;
}

export type TState = {
    todoList: TTodo[];
    filter: string;
    filterList: TTodo[];
}
export type TAction = {
    type: EAction;
    payload: string;
}