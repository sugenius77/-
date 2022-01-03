import React, { useState, useEffect } from 'react'
import ModalPresenter from './ModalPresenter'


const ModalContainer = (props) => {
    const [modal, setModal] = useState({
        modalOpen: true,
        round: 0
    })
    const {modalOpen, round} = modal;
    const roundSelect = (e) => {
		setModal({
            modalOpen:true,
            round: e.target.value
        });
	};
    const modalClose = (e) => {
		setModal({
            modalOpen:false,
            round: round
        });
	};
    return (
        <>
            { modal.modalOpen && <ModalPresenter modalClose={modalClose} roundSelect={roundSelect}></ModalPresenter>}
        </>
    )
}

export default ModalContainer