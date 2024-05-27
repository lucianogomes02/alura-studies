import React from "react";
import style from "./Relogio.module.scss";
import { segundosParaTempo } from "../../../common/utils/time";

interface Props {
    tempoInicial: number | undefined
}

export default function Relogio({ tempoInicial = 0 }: Props) {
    let tempoInicialEmHoraMinutoSegundo = segundosParaTempo(tempoInicial);
    let [horas, minutos, segundos] = tempoInicialEmHoraMinutoSegundo.split(":");

    return (
        <React.Fragment> 
            <span className={style.relogioNumero}>{horas[0]}</span>
            <span className={style.relogioNumero}>{horas[1]}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{minutos[0]}</span>
            <span className={style.relogioNumero}>{minutos[1]}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundos[0]}</span>
            <span className={style.relogioNumero}>{segundos[1]}</span>
        </React.Fragment>
    )
}