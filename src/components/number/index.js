import React, { Fragment } from "react";
import * as S from './styled';

const Number = (props) => {

    const isLucky = props.isLucky;

    return (
        <Fragment>
            <S.NumberWrapper className={ isLucky ? "lucky" : ""}>
                {props.children}
            </S.NumberWrapper>
        </Fragment>
    );
};

export default Number;