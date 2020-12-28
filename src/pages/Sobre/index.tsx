import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import logoBienio from '../../assets/Logo.png';
import dirigente1 from '../../assets/img3.png';
import amaury from '../../assets/amaury.jpg';
import diego from '../../assets/diego.jpg';
import fabio from '../../assets/fabio.jpeg';

import { Cover, HeaderBG, Section, Column, Columns, Button } from './styles';

const Sobre: React.FC = () => {
  return (
    <>
      <Cover>
        <Link to="/bienio">
          <img src={logoBienio} alt="Logo Biênio" height="250" width="auto" />
        </Link>
      </Cover>
      <HeaderBG>
        <Header />
        <hr />
      </HeaderBG>
      <br />

      <Section>
        <h1>CORREGEDOR GERAL DE JUSTIÇA</h1>
        <Columns>
          <Column>
            <img src={amaury} alt="Des. Amaury Moura Sobrinho" />
            <p>Des. Amaury Moura Sobrinho</p>
          </Column>
        </Columns>

        <h1>JUÍZES CORREGEDORES AUXILIARES</h1>
        <Columns>
          <Column>
            <img
              src={diego}
              alt="Diego de Almeida Cabral - Juiz de Direito Titular da 2ª Vara da Comarca de Assú/RN"
            />
            <p>
              Diego de Almeida Cabral - Juiz de Direito Titular da 2ª Vara da
              Comarca de Assú/RN
            </p>
          </Column>
          <Column>
            <img
              src={fabio}
              alt="Fábio Wellington Ataíde Alves - 13º Juiz Auxiliar da Comarca de Natal/RN"
            />
            <p>
              Fábio Wellington Ataíde Alves - 13º Juiz Auxiliar da Comarca de
              Natal/RN
            </p>
          </Column>
          {/* <Column>
            <img src={dirigente1} alt="Des. Gilson Barbosa Vice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente3</p>
          </Column>
          <Column>
            <img src={dirigente1} alt="Des. Gilson Barbosa Vice-presidente" />
            <p>Des. Gilson Barbosa Vice-presidente4</p>
          </Column> */}
        </Columns>
        <h1>REVISTA DO BIÊNIO 2019-2020 - CGJ</h1>
        <Columns>
          <Column>
            <h4>TEXTOS</h4>
            <h5>Karine Symonir de Brito Pessoa</h5>
            <h5>Francineide S. Damasceno Barbosa</h5>
            <h4>COORDENAÇÃO DO PROJETO GRÁFICO E WEB</h4>
            <h5>Wabner Alves</h5>
            <h4>DIAGRAMAÇÃO</h4>
            <h5>Ilton Spínola</h5>
            <h4>FOTOS</h4>
            <h5>Tasso Pinheiro (Secoms-TJRN)</h5>
            <h4>DESENVOLVIMENTO WEB</h4>
            <h5>Yargo Valério</h5>
          </Column>
          <Column>
            <h3>EXPEDIENTE - SECOMS</h3>
            <h4>SECRETÁRIA DE COMUNICAÇÃO SOCIAL</h4>
            <h5>Andreia Ramos</h5>
            <h4>CHEFE DE GABINETE DA SECOMS-TJRN</h4>
            <h5>Geórgia Nery</h5>
            <h4>DIRETOR DE JORNALISMO</h4>
            <h5>Juliano Freire</h5>
            <h4>CHEFE DE SEÇÃO DE COMUNICAÇÃO INSTITUCIONAL</h4>
            <h5>Luiz Freitas</h5>
            <h4>CHEFE DE DIVISÃO DE MÍDIA IMPRESSA E ELETRÔNICA</h4>
            <h5>Luciana Silveira</h5>
            <h4>CHEFE DE SEÇÃO DE WEBDESIGN E CRIAÇÃO GRÁFICA</h4>
            <h5>Wabner Alves de Souza</h5>
          </Column>
          {/* <Column>
            <h3>REVISTA DO BIÊNIO 2017-2018 - TJRN</h3>
            <h4>Edição</h4>
            <h5>Juliano Freire</h5>
          </Column> */}
        </Columns>
        <Button type="submit">Clique e veja a Revista</Button>
      </Section>
    </>
  );
};

export default Sobre;
