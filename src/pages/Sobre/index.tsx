import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import logoBienio from '../../assets/Logo.png';
import dirigente1 from '../../assets/img3.png';

import {
  Size,
  Cover,
  HeaderBG,
  Section,
  Column,
  Columns,
  Button,
} from './styles';

const Sobre: React.FC = () => {
  return (
    <>
      <Cover>
        <Link to="/">
          <img src={logoBienio} alt="Logo Biênio" height="250" width="auto" />
        </Link>
      </Cover>
      <HeaderBG>
        <Header />
        <hr />
      </HeaderBG>
      <br />

      <Section>
        <h1>DIRIGENTES DO BIÊNIO</h1>
        <Columns>
          <Column>
            <img src={dirigente1} alt="Des. Gilson Barbosa Vice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente1</p>
          </Column>
          <Column>
            <img src={dirigente1} alt="Des. Gilson Barbosa Vice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente2</p>
          </Column>
          <Column>
            <img src={dirigente1} alt="Des. Gilson Barbosa Vice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente3</p>
          </Column>
          <Column>
            <img src={dirigente1} alt="Des. Gilson Barbosa Vice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente4</p>
          </Column>
        </Columns>
        <h1>EXPEDIENTE</h1>
        <Columns>
          <Column>
            <h4>DIRETOR DA ESMARN</h4>
            <h5>Desembargador Claudio Santos</h5>
            <h4>TRIBUNAL PLENO</h4>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
            <h5>Desembargador Amaury Moura</h5>
          </Column>
          <Column>
            <h3>ESTRUTURA ADMINISTRATIVA</h3>
            <h4>SECRETÁRIO GERAL</h4>
            <h5>Luiz Mariz</h5>
            <h5>Luiz Mariz</h5>
            <h5>Luiz Mariz</h5>
            <h5>Luiz Mariz</h5>
            <h5>Luiz Mariz</h5>
            <h5>Luiz Mariz</h5>
            <h5>Luiz Mariz</h5>
            <h5>Luiz Mariz</h5>
            <h5>Luiz Mariz</h5>
            <h5>Luiz Mariz</h5>
          </Column>
          <Column>
            <h3>REVISTA DO BIÊNIO 2017-2018 - TJRN</h3>
            <h4>Edição</h4>
            <h5>Juliano Freire</h5>
            <h5>Juliano Freire</h5>
            <h5>Juliano Freire</h5>
            <h5>Juliano Freire</h5>
            <h5>Juliano Freire</h5>
            <h5>Juliano Freire</h5>
            <h5>Juliano Freire</h5>
          </Column>
        </Columns>
        <Button type="submit">Clique e veja a Revista</Button>
      </Section>
    </>
  );
};

export default Sobre;
