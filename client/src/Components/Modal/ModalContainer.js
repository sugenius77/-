import React, { useState, useEffect } from 'react'
import ModalPresenter from './ModalPresenter'


const ModalContainer = ( { setModalRound } ) => {
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
        if(modal.round==0){ setModalRound(8); }
        else{ setModalRound(modal.round); }
	};
    return (
        <>
            { modal.modalOpen && <ModalPresenter modalClose={modalClose} roundSelect={roundSelect}></ModalPresenter>}
        </>
    )
}

export default ModalContainer