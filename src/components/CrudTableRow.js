import React from 'react';

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

    let {name, symbol, id} = el;
    return (
            <tr>

                <td>{name}</td>
                <td>{symbol}</td>
                <td>
                    <button onClick={() => setDataToEdit(el)}>Editar</button>
                    <button onClick={() => deleteData(id)}>Eliminar</button>
                </td>
            </tr>
    );
};

export default CrudTableRow;