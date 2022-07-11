import React from "react";
import Button from "../button";
import * as S from './styled';

const Controls = (props) => {

    const handleClick = props.handleClick;

    return (
        <S.ControlsWrapper>
            <Button className="success" onClick={() => handleClick("lucky")}>Lucky</Button>
            <Button className="danger" onClick={() => handleClick("modal")}>Reset</Button>
        </S.ControlsWrapper>
    );
};

export default Controls;