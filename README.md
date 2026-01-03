# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Processo completo para desenvolvimento do Sistema Fincore

Após ter utilizado o vite para criar o projeto
- npm create vite@latest

Foram excluidos os arquivos eslints para impedir que não haja erros de compilação onde a compilação é muito rigorosa

Iremos utilizar o React-router (consultar Docs)

instalar: npm i react-router


Adicionamos BrowserRouter (Contexto - Ele funciona como provedor de dados e funcionalidade de roteamento - Quando envolve um componente como App ele consegue ver todas as rotas daquela aplicação)

## Criando a primeira rota

Criação do arquivo /src/pages - páginas aplicação
Criação do arquivo /src/router - para Definir cada rota da nossa aplicação