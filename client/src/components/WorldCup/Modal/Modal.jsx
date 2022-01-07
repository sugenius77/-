import React, { useState } from 'react';
import ModalView from './ModalView';

const Modal = ({ setModalRound }) => {
    const [modal, setModal] = useState({
        modalOpen: true,
        round: 0,
    });
    const { modalOpen, round } = modal;
    const roundSelect = (e) => {
        setModal({
            modalOpen: true,
            round: e.target.value,
        });
    };
    const modalClose = (e) => {
        setModal({
            modalOpen: false,
            round: round,
        });
        if (modal.round === 0) {
            setModalRound(8);
        } else {
            setModalRound(modal.round);
        }
    };
    return <>{modal.modalOpen && <ModalView modalClose={modalClose} roundSelect={roundSelect}></ModalView>}</>;
};

export default Modal;
