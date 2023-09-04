import styles from "./wrapper.module.scss";
import { Content } from "../content/Content";

export const Wrapper = () => {

    return (<div className={styles.box}>
        <header>
            <h1>todos</h1>
        </header>

        <Content />

    </div>)
}