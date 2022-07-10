import React, { Fragment } from "react";
import * as S from './styled';

const Number = (props) => {
    return (
        <Fragment>
            <S.NumberWrapper className={props.className}>
                {props.children}
            </S.NumberWrapper>
        </Fragment>
    );
};

export default Number;