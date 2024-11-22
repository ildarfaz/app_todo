import { Content } from "@/components/content";
import { Header } from "@/components/header";

import styles from "./style.module.scss";

const Home = () => {

    return (
        <main className={styles.box}>
            <Header />
            <Content />
        </main>
    )
}
export default Home;