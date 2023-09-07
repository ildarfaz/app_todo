import { FC } from "react";
import styles from "./content.module.scss";
import { Input } from "../ui/Input";
import { Footer } from "../footer/Footer";
import { ToDoList } from "../todolist/ToDoList";

export const Content: FC = () => {

    return (
        <div className={styles.box}>
            <Input />
            <ToDoList />
            <Footer />
        </div>
    )
}