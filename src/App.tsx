import './App.css'
import Table from "./components/Table.tsx";
import useFetchData from "./api/hooks/useFetchData.ts";

function App() {
    const {data, loading, error} = useFetchData();

    return (
        <Table data={data?.data} loading={loading} error={error}/>
    )
}

export default App
