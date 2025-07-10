import React, {type ReactNode, type MouseEventHandler } from "react";

interface UiButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

export const UiButton: React.FC<UiButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            aria-label="Кнопка для переключения месяца"
        >
            {children}
        </button>
    );
};
