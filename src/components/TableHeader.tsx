import {type FC, memo} from "react";

type HeaderProps = {
    currentMonths: string[];
    isMonthPast: (index: number) => boolean;
}

const monthHeaderClass = "px-0 py-0 border border-gray-300 text-center";

export const TableHeader: FC<HeaderProps> = memo(({ currentMonths, isMonthPast }) => {
    return (
        <thead className="bg-gray-100 text-blue-900">
        <tr>
            <th className="px-2 py-2 border border-gray-300 font-semibold" colSpan={2}></th>
            <th className="px-2 py-2 border border-gray-300 font-semibold" colSpan={2}></th>
            {currentMonths.map((month, index) => (
                <MonthHeaderCell
                    key={`month-${month}-${index}`}
                    month={month}
                    index={index}
                    isMonthPast={isMonthPast}
                />
            ))}
        </tr>
        </thead>
    );
});

type MonthHeaderCellProps = {
    month: string;
    index: number;
    isMonthPast: (index: number) => boolean;
}

const MonthHeaderCell: FC<MonthHeaderCellProps> = ({ month, index, isMonthPast }) => (
    <th
        key={`month-${month}-${index}`}
        className={`${monthHeaderClass} ${isMonthPast(index) ? 'opacity-50 font-semibold' : ''}`}
        colSpan={2}
    >
        <MonthHeader month={month} />
    </th>
);

const MonthHeader: FC<{ month: string }> = ({ month }) => (
    <div className="w-[150px] px-6 py-4">
        <p className="text-left mb-4">{month}</p>
        <div className="flex items-center justify-between w-full text-sm">
            <p className='font-semibold'>Plan:</p>
            <p className='font-semibold'>Fact:</p>
        </div>
    </div>
);