import React from "react";
import style from './Botao.module.scss';

interface Props {
    children: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    desabilitado?: boolean;
}

export default function Botao({ children, type, onClick, desabilitado }: Props) {
    return (
        <button onClick={onClick} type={type} className={`${style.botao} ${desabilitado? style.botaoDesabilitado : ""}`} disabled={desabilitado}>
            {children}
        </button>
    )
}
