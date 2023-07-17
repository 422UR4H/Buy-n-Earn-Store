import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import handleApiError from "../utils/handleApiError.js";

export function useGetCart() {
    const [cart, setCart] = useState(undefined);

    function getCart() {
        axios.get(`${process.env.VITE_API_URL}/cart`)
            .then(res => setCart(res.data))
            .catch(err => handleApiError(err));
    }
    useEffect(getCart, []);

    return { cart, getCart };
}

export function useCreateCart() {
    return (body) => {
        axios.post(`${import.meta.env.VITE_API_URL}/cart`, body)
            .then(({ data }) => console.log(data))
            .catch(err => handleApiError(err));
    }
}

export function useDeleteCart() {
    return (id, getCart) => {
        axios.delete(`${process.env.VITE_API_URL}/cart/${id}`)
            .then(res => getCart())
            .catch(err => handleApiError(err));
    }
}

export function useEditCart() {
    const navigate = useNavigate();

    return (id, body) => {
        axios.put(`${process.env.VITE_API_URL}/cart/${id}`, body)
            .then(res => navigate("/home"))
            .catch(err => handleApiError(err));
    }
}