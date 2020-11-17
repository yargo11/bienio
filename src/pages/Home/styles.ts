import styled from 'styled-components';
import { shade } from 'polished';

export const Size = styled.div`
  max-width: 960px;
  margin: auto;
`;

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  float: left;
  margin-top: 50px;

  img {
    max-height: 350px;
    & + img {
      margin-left: -100px;
      max-height: 609px;
    }
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
