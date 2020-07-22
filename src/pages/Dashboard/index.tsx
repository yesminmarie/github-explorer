import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error, RepositoriesList } from './styles';

// Interfaces são criadas para definir tipos de variáveis
// de estados que não são valores padrão como string, boolean, números
// mas são arrays ou objetos.
// Abaixo foi criada a interface para o array newRepo para definir o tipo desse estado.
// Apenas colocar a tipagem das informações que serão utilizadas.
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// FC -> Function Component (Componente escrito no formato de função)
const Dashboard: React.FC = () => {
  // estado para armazenar o valor do input
  const [newRepo, setNewRepo] = useState('');

  // estado para armazenar mensagem de erro
  const [inputError, setInputError] = useState('');

  // estado para armazenar o repositório.
  // Ele é inicializado com uma função que busca os repositórios armazenados em localStorage.
  // Se houver repositórios, eles serão convertidos em array (JSON.parse(storagedRepositories))
  // Senão retorna um array vazio.
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    // armazena o array de repositórios no Storage sempre que repositories tiver alguma alteração.
    // Para que um Storage não atrapalhe outro, já que eles são compartilhados pelo mesmo endereço no localhost,
    // colocar @NomeDaAplicação:nome da informação que quer gravar no Storage
    // JSON.stringify(repositories) converte o array para JSON, pois localStorage não aceita array
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    // se o usuário não digitou nada
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      // Para adicionar um novo repositório
      // Primiero consumir API do Github
      // depois salvar repositório no estado
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      // Verifica se já existe esse repositório na lista
      const indexRepository = repositories.findIndex(repo =>
        repo.full_name.includes(repository.full_name),
      );

      if (indexRepository >= 0) {
        setInputError('Este repositório já existe');
        return;
      }

      setRepositories([repository, ...repositories]);
      setNewRepo(''); // limpa o input
      setInputError(''); // limpa a mensagem de erro
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  function handleRemoveRepository(full_name: string): void {
    const indexRepository = repositories.findIndex(repository =>
      repository.full_name.includes(full_name),
    );

    if (indexRepository >= 0) {
      const updatedRepository = [...repositories];

      updatedRepository.splice(indexRepository, 1);

      setRepositories(updatedRepository);
    }
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      {/**
       * Se o inputError estiver vazio, ele terá o valor falsy.
       * O primeiro ! converte esse valor para true.
       * O segundo ! converte esse valor para false.
       * Já se o inputError conter uma mensagem, ele terá valor truthy.
       * O primeiro ! converte esse valor para false.
       * O segundo ! converte esse valor para true.
       */}
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {/* exibe o elemento Error apenas se inputError estiver preenchida, ou seja, se houver mensagem de erro. */}
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <RepositoriesList key={repository.full_name}>
            <a
              key={repository.full_name}
              href={`/repositories/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </a>

            <button
              type="button"
              onClick={() => handleRemoveRepository(repository.full_name)}
            >
              <FiTrash2 size={20} />
            </button>
          </RepositoriesList>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
