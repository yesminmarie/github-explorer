import styled, { css } from 'styled-components';
import { shade } from 'polished'; // shade serve para dar sombreamento, deixar mais escuro.

// o elemento Form precisa receber a propriedade hasError
interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;

  @media only screen and (max-width: 600px) {
    font-size: 28px;
    max-width: 100%;
    line-height: 35px;
    text-align: center;
    margin-top: 32px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  /* Encadeamentos. É o mesmo que:

    form input {

    }

   */

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    /* Recebe as props dentro da função.
      Se hasError for true coloca borda vermelha.
    */
    ${props =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    /* & se refere ao próprio elemento. Neste caso button */
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;

    input {
      height: 50px;
      width: 100%;
      border-radius: 5px;
      border-right: 2px solid #fff;
      ${props =>
    props.hasError &&
    css`
          border-color: #c53030;
        `}
    }
    button {
      margin-top: 10px;
      height: 50px;
      width: 100%;
      border-radius: 5px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  @media only screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const RepositoriesList = styled.div`
  position: relative;

  /* pega da segunda div em diante */
  & + div {
    margin-top: 16px;
  }

  transition: transform 0.2s;

  &:hover {
    transform: translateX(
      10px
    ); /* Aopassar o mouse afasta 10px para a direita */
  }

  button {
    position: absolute;
    top: 10px;
    right: 25px;
    border: 0;
    background-color: #fff;

    /* ícone deletar */
    svg {
      color: #cbcbd6;
      transition: color 0.2s;
      &:hover {
        color: #666;
      }
    }
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%; /* imagem fica completamente arredondada */
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

    /* ícone seta para direita */
    svg {
      margin-left: auto; /* pega todo o espaço disponível da esquerda e coloca com margin */
      color: #cbcbd6;
    }
  }

  @media only screen and (max-width: 600px) {
    a {
      flex-direction: column;

      div {
        margin-top: 10px;
        text-align: center;
      }
      svg {
        visibility: hidden;
      }
    }
    &:hover {
      transform: translateX(0px);
    }
  }
`;
