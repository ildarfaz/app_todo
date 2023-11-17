import styles from "./wrapper.module.scss";
import { Content } from "../content/Content";
import { Header } from "../header/Header";

export const Wrapper = () => {

    return (
        <div className={styles.box}>
            <Header />
            <Content />
        </div>
    )
}