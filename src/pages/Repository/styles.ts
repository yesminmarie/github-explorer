import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 48px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 28px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 40px;
    header {
      flex-direction: column;
      div {
        margin-top: 24px;
        text-align: center;
        margin-left: 0;
      strong {
        font-size: 24px;

      }

      p {
        font-size: 18px;
      }
    }
  }

  ul {
      margin-top: 24px;
      flex-direction: column;
      text-align: center;
      li {
        margin: 0px;

        & + li {
          margin-left: 0;
          margin-top: 16px;
        }

        strong {
          font-size: 28px;
        }

      }
    }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px); /* afasta 10px para a direita */
    }

    /* pega do segundo a em diante */
    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1; /* a div se ajusta ao tamanho que ela tem disponível*/

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    /* ícone svg */
    svg {
      margin-left: auto; /* pega todo o espaço disponível da esquerda e coloca com margin */
      color: #cbcbd6;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 30px;

    a {
      &:hover {
        transform: translateX(0px); /* afasta 10px para a direita */
      }
      div {
        strong {
          font-size: 18px;
        }

        p {
          font-size: 15px;
        }
      }
    }
  }
`;
