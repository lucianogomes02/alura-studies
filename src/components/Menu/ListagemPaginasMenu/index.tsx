import { useState } from 'react';
import style from './ListagemPaginasMenu.module.scss';
import { Link } from 'react-router-dom';
import OpcoesMenu from '../../../types/opcoesMenu';

interface Props {
    opcoes: OpcoesMenu[];
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
                <Link to={opcao.url}>{opcao.nome}</Link>
                </li>
            ))}
            </ul>
        )}
        </div>
    )
}