import {type FC, memo} from "react";
import type {MonthData, TableItem} from "../api/hooks/useFetchData.ts";
import {MonthDataCell} from "./MonthDataCell.tsx";

export const TableRow = memo(({ item, currentMonths, getMonthData, isMonthPast }: {
    item: TableItem;
    currentMonths: string[];
    getMonthData: (item: TableItem, index: number) => MonthData | null;
    isMonthPast: (index: number) => boolean;
}) => (
    <tr key={item.id}>
        <AdminCell adminName={item.adminName} />
        <TotalsCell />

        {currentMonths.map((_, index) => (
            <MonthDataCell
                key={`month-${index}-${item.id}`}
                monthData={getMonthData(item, index)}
                isPast={isMonthPast(index)}
            />
        ))}
    </tr>
));

const AdminCell: FC<{ adminName: string }> = ({adminName}) => (
    <td className="px-6 py-6 border border-gray-300 w-[150px] text-left font-bold" colSpan={2}>
        <div className='w-[150px]'>
            <p>{adminName}</p>
        </div>
    </td>
);

const TotalsCell: FC = () => (
    <td className="py-6 border border-gray-300 text-left font-bold" colSpan={2}>
        <div className='w-[210px]'>
            <p className='mb-4 pb-4 border-b border-gray-300 px-6'>Total income:</p>
            <p className='px-6'>Total active partners:</p>
        </div>
    </td>
);