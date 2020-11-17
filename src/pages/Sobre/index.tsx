import React from 'react';
import Header from '../../components/Header';

import logoBienio from '../../assets/Logo.png';
import dirigente1 from '../../assets/img3.png';

import { Size, Cover, HeaderBG, Section, Column, Button } from './styles';

const Sobre: React.FC = () => {
  return (
    <>
      <Cover>
        <img src={logoBienio} alt="Logo Biênio" height="250" width="auto" />
      </Cover>
      <HeaderBG>
        <Size>
          <Header />
        </Size>
      </HeaderBG>
      <br />
      <Section>
        <h1>DIRIGENTES DO BIÊNIO</h1>
        <div>
          <Column>
            <img src={dirigente1} alt="Des. Gilson Barbosa Vice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente</p>
          </Column>
          <Column>
            <img src={dirigente1} alt="Des. Gilson Barbosa Vice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente</p>
          </Column>
          <Column>
            <img src={dirigente1} alt="Des. Gilson Barbosa Vice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente</p>
          </Column>
          <Column>
            <img src={dirigente1} alt="Des. Gilson BarbosaVice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente</p>
          </Column>
        </div>
        <h1>EXPEDIENTE</h1>
      </Section>
    </>
  );
};

export default Sobre;
