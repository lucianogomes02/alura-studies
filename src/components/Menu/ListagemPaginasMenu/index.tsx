import { useState } from 'react';
import style from './ListagemPaginasMenu.module.scss';

interface Props {
    opcoes: string[];
}

export default function ListagemPaginasMenu({ opcoes }: Props) {
    const [estaAberto, setEstaAberto] = useState<boolean>(false);

    const clicarNoMenu = () => setEstaAberto(!estaAberto);

    return (
        <div className={style.menuDropdown} onClick={clicarNoMenu}>
        <button className={style.botaoMenu}>Menu</button>
        {estaAberto && (
            <ul className={style.listaMenu}>
            {opcoes.map((opcao, index) => (
                <li key={index} className={style.itemMenu}>
                {opcao}
                </li>
            ))}
            </ul>
        )}
        </div>
    )
}