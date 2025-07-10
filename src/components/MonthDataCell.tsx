import type { FC } from "react";
import type {MonthData} from "../api/hooks/useFetchData.ts";

type MonthDataCellProps = {
    monthData: MonthData | null;
    isPast: boolean;
}

const baseCellClass = "px-2 py-2 border border-gray-300";
const textCenterBold = `${baseCellClass} text-center font-bold`;
const noDataCell = `${baseCellClass} text-center opacity-50`;

export const MonthDataCell: FC<MonthDataCellProps> = ({ monthData, isPast }) => {
    if (!monthData) {
        return (
            <td colSpan={2} className={noDataCell}>
                No data
            </td>
        );
    }

    return (
        <td className={`${textCenterBold} ${isPast ? 'opacity-50 font-semibold' : ''}`} colSpan={2}>
            <IncomeRow
                plan={monthData.plan.income}
                fact={monthData.fact.income}
            />
            <PartnersRow
                plan={monthData.plan.activePartners}
                fact={monthData.fact.activePartners}
            />
        </td>
    );
};

const IncomeRow: FC<{ plan: number; fact: number }> = ({ plan, fact }) => (
    <div className='flex items-center justify-between px-4 py-2 mb-5'>
        <p>$ {plan}</p>
        <p>$ {fact}</p>
    </div>
);

const PartnersRow: FC<{ plan: number; fact: number }> = ({ plan, fact }) => (
    <div className='flex items-center justify-between px-4 py-2'>
        <p>{plan}</p>
        <p>{fact}</p>
    </div>
);