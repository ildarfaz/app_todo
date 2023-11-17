import { FC, useState } from "react";
import { Button } from "../ui/button/Button";
import styles from "./footer.module.scss";
import { ITodo } from "../../types/store";

enum Btn { All = "All", Active = "Active", Completed = "Completed" }
interface IFooter {
    list: ITodo[];
    handleClear: () => void;
}
export const Footer: FC<IFooter> = ({list, handleClear}) => {
    const [activeBtn, setActiveBtn] = useState(Btn.All);
    const handleClick = (item: Btn) => {
        setActiveBtn(item);

    }

    const onClickComplete = () => {
        handleClear();
    }

    return <footer className={styles.box}>
        <p>{`${list.length} items left`}</p>
        <div className={styles.btn__action}>
            <Button onClick={() => handleClick(Btn.All)} active={activeBtn===Btn.All}>{Btn.All}</Button>
            <Button onClick={() => handleClick(Btn.Active)} active={activeBtn===Btn.Active}>{Btn.Active}</Button>
            <Button onClick={() => handleClick(Btn.Completed)} active={activeBtn===Btn.Completed}>{Btn.Completed}</Button>
        </div>
        <Button onClick={() => onClickComplete()}>Clear completed</Button>
    </footer>
}