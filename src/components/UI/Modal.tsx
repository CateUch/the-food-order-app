
//@ts-nocheck
import React, { Fragment } from 'react';
import style from './Modal.module.css';
import  ReactDOM  from 'react-dom';



const Backdrop = (props:any) => {
    return <div className={style.backdrop}></div>
}

const ModalOverlay = (props: any) => {
    return (
    <div className={style.modal}>
        {props.children}
    </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props: any) => {
    return (
    <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
                )}
                </Fragment>
            );
};

export default Modal;