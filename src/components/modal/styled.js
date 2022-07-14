import styled from "styled-components";


const ModalWrapper = styled.div`
    width: 500px;
    height: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    position: fixed;
    z-index: 1;
    animation: fade-in 0.3s linear 0s 1;
    
    background-color: rgba(230, 230, 230);
    box-shadow: 2px 2px 0px 2px #555555;
`;

const ModalTitle = styled.div`
    display: flex;
    justify-content: center;
    width: calc(100%);
    font-size: 3em;
    border-radius: 16px;
    margin-bottom: 20px;
    background-color: #0e62be;
    color: white;
`;

const ModalContent = styled.div`
    font-size: 2em;
    margin-bottom: 30px;
`;

const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    ModalWrapper,
    ModalTitle,
    ModalContent,
    ModalFooter
};