import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"

function ModalEdit({show , setShow , value}) {

    const handleClose = () => {
        setShow(false)

    }
    const[datas ,setDatas] = useState({name:"" , price:"" , iscomplete:""})
    console.log(datas);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>افزودن/ویرایش کالا</Modal.Title>
                </Modal.Header>
                <Modal.Body className='container_modal'>
                    <label>عنوان:</label>
                    <input type="text" onChange={(e) => setDatas({...datas , name: e.target.value})} className='input_modal' defaultValue={value.name}/>
                    <label>مبلغ:</label>
                    <input type="text" onChange={(e) => setDatas({...datas , price: e.target.value})} className='input_modal' defaultValue={value.price === 0 ? 'رایگان' : value.price} />
                    <label>وضعیت:</label>
                    <input type="text" onChange={(e) => setDatas({...datas , iscomplete: e.target.value})} className='input_modal' defaultValue={value.isComplete === 0 ? 'در حال برگزاری' : 'تکمیل شده'} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        ذخیره
                    </Button>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        نه
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdit