import React, { Fragment } from "react";
import * as S from './styled';

const Loading = () => {
    return (
        <Fragment>
            <S.LoadingWrapper>
                <S.Spinner src="../../assets/img/loading.png" alt=""></S.Spinner>
            </S.LoadingWrapper>
        </Fragment>
    );
};

export default Loading;