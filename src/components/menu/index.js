import React from "react";
import Controls from "../controls";
import Button from "../button";
import * as S from "./styled";
import bingoImg from '../../assets/img/bingo.png';
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    return (
        <S.MenuWrapper>
            <S.CardWrapper>
            <S.CardHeader>
                <S.CardTitle>BINGO</S.CardTitle>
            </S.CardHeader>
            <S.CardContent>
                <S.CardImage src={bingoImg} />
            </S.CardContent>
            <S.CardFooter>
                <Controls>
                    <Button className="success" onClick={() => navigate('/bingo')}>
                        Play
                    </Button>
                    <Button className="" onClick={() => {}}>Generate Cards</Button>
                </Controls>
            </S.CardFooter>
        </S.CardWrapper>
        </S.MenuWrapper>
    );
};

export default Menu;