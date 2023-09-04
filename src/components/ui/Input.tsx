import { FC } from "react";
import styles from "./input.module.scss";

export const Input: FC = () => {
    const onHandlerChange = (str : string) => {
        console.log(str);
    }
    return (
        <div className={styles.box}>
            <input type="text" onChange={(e) => onHandlerChange(e.currentTarget.value)} placeholder="What need to be done?"/>
        </div>
    )
}