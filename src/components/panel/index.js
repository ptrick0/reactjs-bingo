import React from "react";
import * as S from './styled';
import Number from '../number';

const Panel = (props) => {
    const { numbers } = props;

    const renderNumbers = () => {
        return (
            numbers.map((number, i) => {
                return <Number className={number.isLucky?"lucky":""}>{number.value}</Number>
            })
        );
    };

    return (
        <S.PanelWrapper>
            {renderNumbers()}
        </S.PanelWrapper>
    );
};

export default Panel;