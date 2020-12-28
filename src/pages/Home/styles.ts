import styled from 'styled-components';
import { shade } from 'polished';

export const Size = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 0px 10px 10px 10px;
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

  @media (max-width: 800px) {
    flex-direction: column;

    img {
      width: 100%;
      & + img {
        margin-left: 0px;
      }
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
