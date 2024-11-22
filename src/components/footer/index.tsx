import { FC } from "react";

import { Button } from "@/ui/button";
import { TTodo } from "@/types/store";
import { EFilterType } from "@/types/common";

import styles from "./style.module.scss";

type TFooter = {
    list: TTodo[];
    handleClear: () => void;
    handleFilter: (filter: EFilterType) => void;
    activeFilter: string;
}

export const Footer: FC<TFooter> = ({ list, handleClear, handleFilter, activeFilter }) => {
    const onHandleFilter = (item: EFilterType) => {
        handleFilter(item);
    }

    const onClickComplete = () => {
        handleClear();
    }

    return <footer className={styles.box}>
        <p>{`${list.length} items left`}</p>
        <div className={styles.btn__action}>
            <Button
                onClick={() => onHandleFilter(EFilterType.ALL)}
                active={activeFilter === EFilterType.ALL}
            >
                {EFilterType.ALL}
            </Button>
            <Button
                onClick={() => onHandleFilter(EFilterType.ACTIVE)}
                active={activeFilter === EFilterType.ACTIVE}
            >
                {EFilterType.ACTIVE}
            </Button>
            <Button
                onClick={() => onHandleFilter(EFilterType.COMPLETED)}
                active={activeFilter === EFilterType.COMPLETED}>
                {EFilterType.COMPLETED}
            </Button>
        </div>
        <Button
            onClick={onClickComplete}>
            Clear completed
        </Button>
    </footer>
}