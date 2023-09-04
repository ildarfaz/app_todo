import { FC } from "react";
import styles from "./content.module.scss";
import { Input } from "../ui/Input";

export const Content: FC = () => {

    return (
        <div className={styles.box}>
            <Input/>
        </div>
    )
}