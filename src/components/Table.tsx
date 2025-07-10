import React, {useCallback, useMemo, useState} from 'react';
import type {Data} from "../api/hooks/useFetchData.ts";
import {TableButtons} from "./TableButtons.tsx";
import {months} from "../shared/months.ts";
import {TableHeader} from "./TableHeader.tsx";
import {TableBody} from "./TableBody.tsx";
import {Loader} from "./ui/Loader.tsx";

interface TableProps {
    data: Data | undefined;
    loading: boolean;
    error: string | null;
}

const DataTable: React.FC<TableProps> = ({data, loading, error}) => {
    const currentMonth = new Date().getMonth();

    // Текущий месяц
    const [startMonthIndex, setStartMonthIndex] = useState(currentMonth);

    // Вычисление индекса месяца
    const getMonthIndex = useCallback((index: number) => (
        startMonthIndex + index) % months.length, [startMonthIndex]
    );

    const handlePrev = useCallback(() => {
        setStartMonthIndex((prevIndex) =>
            (prevIndex - 1 + months.length) % months.length
        );
    }, []);

    const handleNext = useCallback(() => {
        setStartMonthIndex((prevIndex) =>
            (prevIndex + 1) % months.length
        );
    }, []);

    // Получаем текущие 6 месяцев циклически
    const currentMonths = useMemo(() =>
            Array.from({length: 6}, (_, i) => months[getMonthIndex(i)]),
        [getMonthIndex]
    );

    const isMonthPast = useCallback((index: number) =>
            getMonthIndex(index) < currentMonth,
        [getMonthIndex, currentMonth]
    );

    if (loading) return <Loader />;
    if (error) return <div className="text-center mt-4 text-red-600">{error}</div>;
    if (!data) return <div className="text-center mt-4">No data...</div>;

    return (
        <div className="overflow-x-auto p-4 relative bg-white text-gray-900">
            <TableButtons
                handlePrev={handlePrev}
                handleNext={handleNext}
            />

            <table className="min-w-full border border-gray-300 rounded-lg shadow-lg table-fixed">
                <TableHeader
                    currentMonths={currentMonths}
                    isMonthPast={isMonthPast}
                />

                <TableBody
                    data={data}
                    currentMonths={currentMonths}
                    startMonthIndex={startMonthIndex}
                    isMonthPast={isMonthPast}
                />
            </table>
        </div>
    );
};

export default DataTable;