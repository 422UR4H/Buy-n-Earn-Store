import React from 'react'
import MainTemplate from '../../components/templates/MainTemplate.jsx';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    const navigate = useNavigate();

    return (
        <MainTemplate textFooterButton="Finalizar Compra" onClickFooterButton={() => navigate("/checkout")}>
            CartPage
        </MainTemplate>
    );
}