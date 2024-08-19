import { FC, useRef } from "react";

import styles from "./style.module.scss";

interface IInput {
    onKeyDown: (value: string) => void,
}

export const Input: FC<IInput> = ({ onKeyDown }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleKeyDown = (event: { key: string }) => {
        if (event.key === 'Enter' && inputRef?.current?.value) {
            onKeyDown(inputRef?.current?.value);
            inputRef.current.value = "";
        }
    };

    return (
        <div className={styles.box}>
            <input
                type="text"
                ref={inputRef}
                onKeyDown={handleKeyDown}
                placeholder="What need to be done?" />
        </div>
    )
}