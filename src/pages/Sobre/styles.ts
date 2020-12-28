import styled from 'styled-components';
import { shade } from 'polished';

export const Size = styled.div``;

export const Cover = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;

  img {
    padding: 5px;
  }
`;

export const HeaderBG = styled.div`
  width: 90%;
  margin: auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: #eeeeee;
  margin: 10px;
  padding: 10px 0px;
  text-align: center;

  h1 {
    font-size: 2.8em;
    font-weight: bold;
    color: #01909c;
    margin: 35px 0px;
  }

  h3,
  h4 {
    margin-top: 10px;
  }

  h5 {
    margin: 3px;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #01909c;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  align-items: center;
  text-align: center;

  p {
    margin-top: 15px;
    font-weight: bold;
  }

  img {
    width: 250px;
    height: auto;
    border-radius: 50%;
  }
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
