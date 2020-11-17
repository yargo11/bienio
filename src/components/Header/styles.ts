import styled from 'styled-components';

export const Menu = styled.div`
  max-width: 960px;
  width: 100%;
  float: left;

  hr {
    color: #fff;
    max-width: 960px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    max-width: 960px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    float: left;

    a {
      display: block;
      color: white;
      font-weight: bold;
      text-align: center;
      align-items: center;
      padding: 16px;
      text-decoration: none;
    }
  }
`;
