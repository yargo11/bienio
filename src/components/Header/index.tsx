import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './styles';

import logoTJRN from '../../assets/tjrn.png';

const Header: React.FC = () => (
  <>
    <Menu>
      <ul>
        <li>
          <a href="http://tjrn.jus.br/">
            <img src={logoTJRN} alt="TJRN" />
          </a>
        </li>
        <li>
          <Link to="/bienio/sobre">SOBRE</Link>
        </li>
        <li>
          <Link to="teste">ENTREVISTA</Link>
        </li>
        <li>
          <Link to="teste">SECRETARIAS</Link>
        </li>
        <li>
          <Link to="teste">VERSÃO EM PDF</Link>
        </li>
      </ul>
      {/* <hr /> */}
    </Menu>
  </>
);

export default Header;
