import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { getRubros } from '../../Redux/Actions/Actions'
import ModalRubros from './ModalRubros'


const Rubros = () => {

    const dispatch = useDispatch();

    const AllRubros = useSelector((state) => state.Rubros)



    useEffect(() => {
        dispatch(getRubros())
    }, [dispatch])

  return (
      <>
        <div>Rubros</div>
        <ModalRubros/>
        <Table hover>
            <thead >
                <tr>
                    <th>
                        <span id="span"> Rubros </span>

                    </th>
                
                    <th>
                        <span id="span">Opciones</span>
                    </th>
                </tr>
            </thead>
            <tbody striped>
               
                   {AllRubros?.map((e,index) => (
                       <tr>
                           <td key={index} value={e.nombre}>{e.nombre}</td>
                           <td><button>editar</button>   <button>eliminar</button></td>
                       </tr>
                   ))}
                
            </tbody>
        </Table>
      </>

  )
}

export default Rubros