# Energy

## 1. Instale as Dependências

```bash
npm install

## 2. Variáveis de Ambiente
.env
VITE_BACKEND_URL = 'http://localhost:3003/'



## 4. Compilação e Execução

# Desenvolvimento
npm run dev


## 5. Estrutura do Projeto

Componentes
FormSimular : Um componente de formulário para registrar simulações de energia. Inclui campos como nome, e-mail, código da unidade e detalhes de consumo.
LeadSimular : Exibe uma tabela de simulações enviadas anteriormente com filtros para pesquisar por nome, e-mail e código da unidade.
Componentes da interface do usuário do Chakra : O projeto usa componentes da interface do usuário do Chakra como Input, Button, Boxe Tablepara estilo e estrutura.
(Zustand)
SimuladorStore : gerencia a lista de simulações e filtros para listagem de simulações.
SimuladorState : define o estado para armazenar simulações e o listarSimulacoesmétodo para buscar a lista do backend.

Serviços
PostSimulador : manipula o envio de novos dados de simulação para a API de backend.
GetSimulador : Obtém a lista de simulações do backend, usando filtros como nomeCompleto, emaile codigoDaUnidadeConsumidora.



## 6. Tecnologias Utilizadas

React : biblioteca JavaScript para criar interfaces de usuário.
Chakra UI : biblioteca de componentes para criar interfaces de usuário acessíveis e responsivas.
Zustand : Biblioteca de gerenciamento de estado para React.
Axios : cliente HTTP para fazer solicitações de API.
React Input Mask : Biblioteca para mascaramento de entrada.
TypeScript : superconjunto tipado de JavaScript usado para construir o aplicativo.









```
