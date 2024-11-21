import { Content } from "../content";
import { Header } from "../header";

import styles from "./style.module.scss";

export const Wrapper = () => {

    return (
        <main className={styles.box}>
            <Header />
            <Content />
        </main>
    )
}