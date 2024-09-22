import React from 'react';
import { createPortal } from 'react-dom';
import { Modal, ModalContent, CloseButton } from './styles';
import { CloseIcon } from './CloseIcon';

export const Popup = ({
                                isOpen,
                                closeModal,
                                children,
                                zIndex = 1000,
                                portalTarget = document.body
                            }) => createPortal(
    <Modal
        $isOpen={isOpen}
        onClick={() => closeModal(false)}
        $zIndex={zIndex}
    >
        <ModalContent
            $isOpen={isOpen}
            onClick={(e) => e.stopPropagation()}
        >
            <CloseButton onClick={() => closeModal(false)}>
                <CloseIcon />
            </CloseButton>
            {children}
        </ModalContent>
    </Modal>,
    portalTarget,
);
