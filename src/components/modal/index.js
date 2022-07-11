import React, { Fragment } from "react";
import * as S from './styled';
import Button from '../button';

const Modal = (props) => {
    const title = props.title;
    const message = props.message;
    const confirmModal = props.onConfirm;
    const closeModal = props.onClose;

    return (
        <S.ModalWrapper>
            <S.ModalTitle className={props.className}>
                {title}
            </S.ModalTitle>
            <S.ModalContent>
                {message}
            </S.ModalContent>
            <S.ModalFooter>
                {confirmModal ? 
                    (<Fragment>
                        <Button className="success" onClick={confirmModal}>
                            Confirm
                        </Button>
                        <Button onClick={closeModal}>
                            Cancel
                        </Button>
                    </Fragment>)
                :
                    (<Fragment>
                        <Button onClick={closeModal}>
                            Ok
                        </Button>
                    </Fragment>)
                }
            </S.ModalFooter>
        </S.ModalWrapper>
    );
};

export default Modal;