import React from 'react';
import { useState, useEffect } from 'react';

const initialForm = {
    id: null,
    name:'',
    symbol:'',
}
 
const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    const [form, setForm] = useState({initialForm});

    useEffect(() => {
      if(dataToEdit){
        setForm(dataToEdit);
      } else {
        setForm(initialForm)  
      }        
    }, [dataToEdit])
    
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!form.name || !form.symbol) {
          alert('Datos incompletos');
          return;
        }
    
        if (form.id === null) {
          createData(form);
        } else {
          updateData(form);
        }
    
        handleReset();
      };
    
      const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
      };
    
    return (
        <div>
            <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name' onChange={handleChange} value={form.name} />
                <input type='text' name='symbol' placeholder='Short' onChange={handleChange} value={form.symbol}/>
                <input type='submit' value='Enviar'/>
                <input type='reset' value='Limpiar' onClick={handleReset}/>
            </form>

            <h3>{form.name} - {form.symbol}</h3>

        </div>
        
    );
};

export default CrudForm;