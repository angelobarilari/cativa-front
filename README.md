# Cativa Frontend

Este projeto é a implementação do frontend para o teste técnico de um programa de fidelidade e cadastro de agências de turismo. Este MVP (Minimum Viable Product) permite que usuários se inscrevam no programa de fidelidade e que agências de turismo se cadastrem.

## Índice

- [Contexto](#contexto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)

## Contexto

Este projeto foi desenvolvido como parte de um teste técnico. O MVP consiste em duas principais funcionalidades:
1. **Programa de Fidelidade**: Onde usuários podem se inscrever para acumular pontos em reservas de viagens e trocar por descontos, upgrades, entre outros benefícios.
2. **Cadastro de Agências de Turismo**: Onde agências de turismo podem se cadastrar fornecendo informações como nome, e-mail, telefone e observações.

## Tecnologias Utilizadas

- React
- React Hook Form
- Axios
- Vite (para o desenvolvimento e build do projeto)
- Styled Components
- React Router

## Instalação

Para começar a usar o projeto, você precisa clonar o repositório e instalar as dependências.

### Passos:

1. Clone o repositório:

    ```sh
    git clone https://github.com/angelobarilari/cativa-front.git
    cd cativa-front
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

## Configuração

Para configurar a aplicação, você precisa definir o endpoint da API no arquivo `apiConfig` localizado na pasta `api`.

1. Abra o arquivo `apiConfig.js` na pasta `api`.
2. Defina o link da API que está rodando. Por exemplo:

    ```javascript
    const apiConfig = {
        baseURL: "https://seu-link-da-api.com"
    };

    export default apiConfig;
    ```

## Execução

Após configurar o projeto, você pode iniciar o servidor de desenvolvimento.

### Iniciar o servidor de desenvolvimento:

```sh
npm run dev
 ```

## Funcionalidades

### Programa de Fidelidade

- **Descrição**: Página onde os usuários podem se inscrever no programa de fidelidade.
- **Funcionalidades**:
  - Informações sobre o programa.
  - Benefícios e recompensas.
  - Botão para saber mais sobre o programa.
  
### Cadastro de Agências de Turismo

- **Descrição**: Página onde as agências de turismo podem se cadastrar.
- **Funcionalidades**:
  - Formulário para cadastro de agência.
  - Validação de campos.
  - Feedback de sucesso ou erro no cadastro.

## Contribuição

Se você quiser contribuir com o projeto, sinta-se à vontade para fazer um fork do repositório, criar uma nova branch, fazer suas alterações e enviar um pull request.
