import React from 'react';
import { Menu } from './styles';

import logoTJRN from '../../assets/tjrn.png';

const Header: React.FC = () => (
  <>
    <Menu>
      <ul>
        <li>
          <a href="teste">
            <img src={logoTJRN} alt="TJRN" />
          </a>
        </li>
        <li>
          <a href="teste">SOBRE</a>
        </li>
        <li>
          <a href="teste">ENTREVISTA</a>
        </li>
        <li>
          <a href="teste">SECRETARIAS</a>
        </li>
        <li>
          <a href="teste">VERSÃO EM PDF</a>
        </li>
      </ul>
      {/* <hr /> */}
    </Menu>
  </>
);

export default Header;
