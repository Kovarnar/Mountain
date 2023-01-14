import { useState } from 'react';
import ToursData from '../TOURS_DATA.json';
import '../sass/layouts/SortTable.scss';


function SortTable() {
    const [data, setData] = useState(ToursData);
    const [order, setOrder] = useState("ASC");
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) => 
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("ASC");
        }
    };

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th onClick={()=>sorting('mountain')}>Вершина</th>
                    <th onClick={()=>sorting('height')}>Высота</th>
                    <th onClick={()=>sorting('level')}>Уровень</th>
                    <th onClick={()=>sorting('price')}>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                { data.map((d) => (
                    <tr key={d.id}>
                        <td>{d.mountain}</td>
                        <td>{d.height}</td>
                        <td>{d.level}</td>
                        <td>{d.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SortTable;