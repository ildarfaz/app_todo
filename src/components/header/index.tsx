import { FC } from "react";

import styles from "./style.module.scss";

export const Header: FC = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>TO DO</h1>
        </header>
    );
}