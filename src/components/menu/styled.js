import styled from "styled-components";

const MenuWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardWrapper = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 50px;
    background-color: rgba(230, 230, 230);
    box-shadow: 2px 2px 0px 2px #555555;
    border-radius: 16px;
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardImage = styled.img`
    width: 400px;

    @media( max-width: 400px ) {
        width: 300px;
    }
`;

const CardTitle = styled.h2`
    font-size: 3em;
    letter-spacing: 1em;
    direction: rtl;
    text-indent: -1em;
    margin: 0px;
`;

export {
    MenuWrapper,
    CardWrapper,
    CardHeader,
    CardContent,
    CardFooter,
    CardImage,
    CardTitle
}