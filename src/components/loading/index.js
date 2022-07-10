import React, { Fragment } from "react";
import * as S from './styled';
import loadingImg from "../../assets/img/loading.png";

const Loading = () => {
    return (
        <Fragment>
            <S.LoadingWrapper>
                <S.Spinner src={loadingImg} alt=""></S.Spinner>
            </S.LoadingWrapper>
        </Fragment>
    );
};

export default Loading;