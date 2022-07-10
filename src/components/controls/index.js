import React, { Fragment } from "react";
import Button from "../button";
import * as S from './styled';

const Controls = () => {
    return (
        <S.ControlsWrapper>
            <Button className="success">Lucky</Button>
            <Button className="danger">Reset</Button>
        </S.ControlsWrapper>
    );
};

export default Controls;