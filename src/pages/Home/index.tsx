import React from 'react';
import Header from '../../components/Header';

import logoBienio from '../../assets/Logo.png';
import Revista from '../../assets/Revista.png';

import { Size, Container, Button } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Size>
        <Header />
        <Container>
          <img src={logoBienio} alt="Biênio 2019-2020" />
          <img src={Revista} alt="Logo Revista" />
        </Container>
        <Button type="submit">Clique e veja a Revista</Button>
      </Size>
    </>
  );
};

export default Home;
