import {useState, useEffect} from 'react';
import axios from 'axios';

interface ApiResponse {
    success: boolean;
    data: Data;
}

export interface Data {
    total: TotalItem[];
    table: TableItem[];
}

interface TotalItem {
    fact: Metrics;
    plan: Metrics;
}

interface Metrics {
    income: number;
    activePartners: number;
}

export interface TableItem {
    id: number;
    adminId: number;
    adminName: string;
    months: (MonthData | null)[];
    year: number;
}

export interface MonthData {
    income: number;
    activePartners: number;
    plan: Metrics;
    fact: Metrics;
}

const useFetchApi = () => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://3snet.co/js_test/api.json');
                setData(response.data);
            } catch (err) {
                console.log(err);
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {data, loading, error};
};

export default useFetchApi;