import React, { useState } from 'react'
import { Button, Form, FormGroup, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postNewRubro } from '../../Redux/Actions/Actions';

const ModalRubros = () => {

    const redir = useNavigate();

    const dispatch = useDispatch();
     
    const [show, setShow] = useState(false);

    const [input, setInput] = useState({
        nombre: ""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleCahnge (e) {
        setInput({
            ...input,
            nombre: e.target.value,
        })
        console.log(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!input.nombre){
            alert('Agrege un nombre!!')
        }else{
            e.preventDefault();
            dispatch(postNewRubro(input))
            alert('Rubro creado exitosamente')
            setInput({
                nombre:""
            })
        redir("/");
        handleClose()
        }
    }
  
    return (
      <>
        <Button variant="outline-success" onClick={handleShow}>
          Nuevo Rubro
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nuevo Rubro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p>Woohoo, you're reading this text in a modal!</p>
              <Form>
                  <FormGroup>
                      <input type="text" name='nombre' value={input.nombre} placeholder='Nombre de Rubro' onChange={(e) => handleCahnge(e)} />
                  </FormGroup>
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={(e) => handleSubmit(e)}>
              Crear Rubro
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalRubros