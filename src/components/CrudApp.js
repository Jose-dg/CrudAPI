import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const initialDb = [
    {id:1, name: 'Bitcoin', symbol:'BTC'}, 
    {id:2, name: 'Thether', symbol:'USDT'}, 
    {id:3, name: 'Litecoin', symbol:'LTC' }
   ]

const CrudApp = () => {

    // const [db, setDb] = useState([])
    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (data) => {
        data.id = Date.now();
        console.log(data);
        setDb([...db, data])
    };
    
    const updateData = (data) => {
        let newData = db.map((el) => (el.id=== data.id ? data:el));
        setDb(newData);
    };
    const deleteData = (id) => {
        let isDelete = window.confirm(`Are you sure to delele id '${id}'?`
        );
        if (isDelete){
            let newData = db.filter((el) => el.id !== id);
            setDb(newData)        
        } else {
            return;
        }
    };

    return (
        <div>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div> 
    );
}; 
  
export default CrudApp;