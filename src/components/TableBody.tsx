import type {Data, TableItem} from "../api/hooks/useFetchData.ts";
import {type FC, memo, useCallback} from "react";
import {TableRow} from "./TableRow.tsx";

type TableBodyProps = {
    data: Data;
    currentMonths: string[];
    startMonthIndex: number;
    isMonthPast: (index: number) => boolean;
}

export const TableBody: FC<TableBodyProps> = memo(({
                                                       data,
                                                       currentMonths,
                                                       startMonthIndex,
                                                       isMonthPast
                                                   }) => {
    const getMonthData = useCallback((item: TableItem, monthIndex: number) => {
        return item.months[(startMonthIndex + monthIndex) % 12];
    }, [startMonthIndex]);

    return (
        <tbody>
        {data.table.map((item) => (
            <TableRow
                key={item.id}
                item={item}
                currentMonths={currentMonths}
                getMonthData={getMonthData}
                isMonthPast={isMonthPast}
            />
        ))}
        </tbody>
    );
});