import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"

function ModalEdit({show , setShow , value , ChangeInputValue , func}) {

    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>افزودن/ویرایش کالا</Modal.Title>
                </Modal.Header>
                <Modal.Body className='container_modal'>
                    <label>عنوان:</label>
                    <input type="text" id='name' onChange={ChangeInputValue} className='input_modal' defaultValue={value.name}/>
                    <label>مبلغ:</label>
                    <input type="text" id='price' onChange={ChangeInputValue} className='input_modal' defaultValue={value.price === 0 ? 'رایگان' : value.price} />
                    <label>لینک:</label>
                    <input type="text" id='shortName' onChange={ChangeInputValue} className='input_modal' defaultValue={value.shortName} />
                    <label>وضعیت:</label>
                    <input type="text" id='isComplete' onChange={ChangeInputValue} className='input_modal' defaultValue={Number(value.isComplete) === 0 ? 'در حال برگزاری' : 'تکمیل شده'} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => func(value._id)}>
                        ذخیره
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        نه
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdit