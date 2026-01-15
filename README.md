<h1>💰 Financial Dashboard – Frontend Demo</h1>

<p>Interface de um sistema de controle financeiro pessoal, desenvolvida com Next.js, TypeScript e SCSS, com foco em arquitetura frontend, boas práticas e experiência do usuário.</p>
<p>Este repositório representa apenas a camada de interface, utilizando dados mockados, e tem como objetivo demonstrar organização, estrutura e qualidade de código frontend.
A integração com backend real está disponível em um repositório separado.</p>
</br>

<h3>🚀 Demo online</h3>
<p>🔗 Acesse a demo: https://fincontrol.devreloaded.com.br</p>

<em>📌 Observação:</em>
Esta versão não possui autenticação real nem persistência de dados. Todas as informações exibidas são simuladas.

---

## 🧠 Objetivo do projeto

-   Demonstrar domínio de Next.js moderno (App Router)
-   Aplicar boas práticas de arquitetura frontend
-   Criar uma interface realista de dashboard financeiro
-   Servir como base visual para futura integração com backend

---

## 🛠️ Tecnologias utilizadas

-   Next.js (App Router)
-   React
-   TypeScript
-   SCSS
-   Gráficos: Recharts

---

## 📂 Estrutura do projeto

```bash
src/
 ├─ app/
 │   ├─ (public)/
 │   ├─ (auth)/
 │   ├─ (app)/
 │   │   ├─ dashboard/
 │   │   ├─ accounts/
 │   │   ├─ transactions/
 │   │   └─ categories/
 │   └─ layout.tsx
 ├─ components/
 ├─ hooks/
 ├─ services/
 ├─ types/
 ├─ utils/
 └─ styles/
     ├─ globals.scss
     └─ variables.scss
```

### 📌 A estrutura foi pensada para escalar, facilitar manutenção e permitir integração futura com backend.

---

## 🎨 Estilos

-   Utiliza SCSS Modules para estilos encapsulados por componente
-   Variáveis globais centralizadas para:

    -   Espaçamento
    -   Tipografia
    -   Font weight
    -   Border radius

-   Separação clara entre:
    -   Estrutura (TSX)
    -   Estilo (SCSS)

## 📊 Funcionalidades da interface

-   Landing page de apresentação
-   Login e cadastro (interface)
-   Dashboard com:

    -   Cards de resumo (saldo, receitas, despesas)
    -   Gráfico de evolução de despesas
    -   Gráfico de despesas por categoria

-   Gerenciamento de:
    -   Contas
    -   Transações
    -   Categorias
-   Sidebar com navegação
-   Layout responsivo
-   Estados de loading e empty state

---

## 🔌 Backend

Este repositório não possui integração com backend real.

### ➡️ O projeto completo (frontend + backend em Django REST) está disponível em: ()

### Como rodar o projeto localmente

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/seu-repo-frontend-demo
```

2. **Entre na pasta**

```bash
cd finance-control
```

3. **Instale as dependências**

```bash
pnpm install
```

4. **Rode o projeto**

```bash
npm run dev
```

A aplicação estará disponível em:
📍 http://localhost:3000

---

## 📌 Considerações finais

Este projeto foi desenvolvido com foco em:

-   Clareza arquitetural
-   Organização de código
-   Boas práticas modernas de frontend
-   Aplicação realista para portfólio

Feedbacks e sugestões são bem-vindos.

---

👤 Autor

Matheus Ribeiro
Desenvolvedor Fullstack

GitHub: [https://github.com/seu-usuario](https://github.com/MatheusSlvRibeiro)

LinkedIn: [https://linkedin.com/in/seu-linkedin](https://www.linkedin.com/in/matheusslvribeiro/)
