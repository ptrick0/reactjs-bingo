import React from "react";
import * as S from './styled';
import Number from '../number';

const Panel = (props) => {
    const { numbers } = props;

    const renderNumbers = () => {
        return (
            numbers.map((number, i) => {
                return <Number key={`n-${i}`} isLucky={number.isLucky}>{number.value}</Number>
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