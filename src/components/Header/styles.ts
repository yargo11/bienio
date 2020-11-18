import styled from 'styled-components';
import { shade } from 'polished';

export const Menu = styled.div`
  margin: 20px 25px;
  /* width: 100%; */

  hr {
    color: #fff;
    max-width: 960px;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: center;
    align-items: center;

    li:first-child {
      /* width: 70px; */
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

    li {
      /* width: 150px; */
      font-weight: bold;
      text-align: center;
      margin: 10px 0px;

      a {
        text-decoration: none;
        color: #fff;
        margin-right: 20px;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, '#fff')};
        }
      }
    }
  }
`;
