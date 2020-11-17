import styled from 'styled-components';
import { shade } from 'polished';

export const Size = styled.div`
  max-width: 960px;
  margin: auto;
`;

export const Cover = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

export const HeaderBG = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 100px;
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  display: block;
  justify-content: center;
  float: left;

  h1 {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
  }

  div {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Column = styled.div`
  flex-direction: column;
  text-align: center;
`;

export const Button = styled.button`
  margin: auto;
  background: #48d1cc;
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;

  font-size: 20px;
  font-weight: bold;
  color: #fff;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#48d1cc')};
  }
`;
