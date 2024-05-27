import React from "react";
import style from './Botao.module.scss';

interface Props {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

export default class Botao extends React.Component<Props> {
    render(): React.ReactNode {
        const { type = "button", onClick } = this.props; 
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
};