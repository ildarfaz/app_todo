import { FC, useState } from "react";
import { Button } from "../ui/button/Button";
import styles from "./footer.module.scss";
import { ITodo } from "../../types/store";

enum Btn { All = "All", Active = "Active", Completed = "Completed" }
interface IFooter {
    list: ITodo[];
}
export const Footer: FC<IFooter> = ({list}) => {
    const [activeBtn, setActiveBtn] = useState("");
    const clickHandler = (item: Btn) => {
        setActiveBtn(item);

    }
    const clearHandler = () => {
        console.log("clear");
    }
    return <footer className={styles.box}>
        <p>{`${list.length} items left`}</p>
        <div className={styles.btn__action}>
            <Button onClick={() => clickHandler(Btn.All)} active={activeBtn===Btn.All}>{Btn.All}</Button>
            <Button onClick={() => clickHandler(Btn.Active)} active={activeBtn===Btn.Active}>{Btn.Active}</Button>
            <Button onClick={() => clickHandler(Btn.Completed)} active={activeBtn===Btn.Completed}>{Btn.Completed}</Button>
        </div>
        <Button onClick={() => clearHandler()}>Clear completed</Button>
    </footer>
}