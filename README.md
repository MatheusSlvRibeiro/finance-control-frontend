<h1>💰 Finance Control – Frontend Demo</h1>

<p>Interface de um sistema de controle financeiro pessoal, desenvolvida com React, Vite, TypeScript e SCSS, com foco em arquitetura frontend, boas práticas e experiência do usuário.</p>
<p>Este repositório representa exclusivamente a camada de interface (frontend), utilizando dados mockados, e tem como objetivo demonstrar organização, estrutura e qualidade de código em aplicações frontend modernas.</p>

<p>🔎 A integração com backend real está disponível em um repositório separado.</p>
</br>

<h3>🚀 Demo online</h3>
<p>🔗 Acesse a demo: https://fincontrol.devreloaded.com.br</p>

<em>📌 Observação:</em>
Esta versão não possui autenticação real nem persistência de dados. Todas as informações exibidas são simuladas.

---

## 🧠 Objetivo do projeto

- Demonstrar domínio de React moderno com Vite e React Router
- Aplicar boas práticas de arquitetura frontend (componentização, separação por domínio, organização de pastas)
- Criar uma interface realista de dashboard financeiro
- Servir como base visual para futura integração com backend
- Atuar como projeto de portfólio, refletindo padrões próximos ao mercado

---

## 🔁 Decisão técnica: migração (Next.js → React + Vite)

<p>Durante o desenvolvimento inicial, o projeto utilizava Next.js, porém optamos por migrar para React + Vite pelos seguintes motivos:</p>

- **Estabilidade e previsibilidade**: após uma **FALHA CRÍTICA envolvendo `react-server`**, priorizamos reduzir pontos únicos de falha e evitar acoplamento com um runtime server-first/SSR que não era essencial para o estado atual do projeto.
- **Menos complexidade desnecessária**: o projeto é uma UI de dashboard (camada de interface), e neste momento não temos uma demanda forte por SSR/SSG que justifique o custo operacional/mental.
- **SCSS mais produtivo**: no Next.js não foi possível utilizar `@use` de forma global como precisávamos, o que forçava repetição de imports/tokens em vários arquivos `.scss`. No Vite, configuramos injeção global de variáveis/tokens no pré-processador (evitando repetição e inconsistência).
- **Ciclo de desenvolvimento mais rápido**: Vite melhora a experiência de DX (build/dev server), deixando o feedback loop mais curto.

**Por que React?**

- Mantém o projeto focado no que realmente importa no momento: UI, rotas e componentes

- Menos abstrações e “mágica” de framework

- Maior controle do comportamento no cliente

- Ecossistema maduro, estável e amplamente adotado

---

## 🛠️ Tecnologias utilizadas

- React
- Vite
- TypeScript
- React Router
- SCSS
- Recharts (Gráficos)

---

## 📂 Estrutura do projeto

```bash
public/
src/
 ├─ components/
 │  ├─ layout/
 │  └─ ui/
 ├─ data/
 ├─ hooks/
 ├─ pages/
 │  ├─ Landing/
 │  ├─ auth/
 │  └─ app/
 ├─ routes/
 ├─ styles/
 ├─ utils/
 ├─ App.tsx
 └─ main.tsx
```

### 📌 A estrutura foi pensada para escala, facilitar manutenção e permitir integração futura com backend.

---

## 🎨 Estilos

- Utiliza SCSS Modules para estilos encapsulados por componente
- Variáveis/tokens centralizados e disponíveis globalmente via `@use` (configurado no build)
- Variáveis globais centralizadas para:
    - Espaçamento
    - Tipografia
    - Font weight
    - Border radius

- Separação clara entre:
    - Estrutura (TSX)
    - Estilo (SCSS)

## 📊 Funcionalidades da interface

- Landing page de apresentação
- Login e cadastro (interface)
- Dashboard com:
    - Cards de resumo (saldo, receitas, despesas)
    - Gráfico de evolução de despesas
    - Gráfico de despesas por categoria

- Gerenciamento de:
    - Contas
    - Transações
    - Categorias
- Sidebar com navegação
- Layout responsivo
- Estados de loading e empty state

---

## 🔌 Backend

### ➡️ O backend em Django REST está disponível em: (https://github.com/MatheusSlvRibeiro/finance-control-backend.git)

### Como rodar o projeto localmente

1. **Clone o repositório**

```bash
git clone https://github.com/MatheusSlvRibeiro/finance-control
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
pnpm dev
```

A aplicação estará disponível em: 📍 http://localhost:5173

---

## 📌 Considerações finais

Este projeto foi desenvolvido com foco em:

- Clareza arquitetural
- Organização e legibilidade de código
- Boas práticas modernas de frontend
- Aplicação realista voltada para portfólio

Feedbacks e sugestões são bem-vindos.

---

👤 Autor

Matheus Ribeiro
Desenvolvedor Fullstack

GitHub: [https://github.com/MatheusSlvRibeiro]

LinkedIn: [https://www.linkedin.com/in/matheusslvribeiro/]
