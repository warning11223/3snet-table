import {UiButton} from "./ui/UIButton.tsx";
import {type FC, memo} from "react";

type ButtonsProps = {
    handlePrev: () => void;
    handleNext: () => void;
}

export const TableButtons: FC<ButtonsProps> = memo(({ handlePrev, handleNext }) => {
    return (
        <div className="flex space-x-4 justify-end mb-4">
            <UiButton
                onClick={handlePrev}
            >
                &larr;
            </UiButton>
            <UiButton
                onClick={handleNext}
            >
                &rarr;
            </UiButton>
        </div>
    );
});