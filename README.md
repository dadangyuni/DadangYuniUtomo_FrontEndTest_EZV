# 📝 Todo App

A modern Todo App built with **Next.js (App Router)**, **Server-Side Rendering (SSR)**, **Incremental Static Regeneration (ISR)**, **RTK Query**, **Tailwind CSS**, and **React Hook Form**.

## 🔗 Demo

Check out the live demo:

👉 [https://todosfrontendtestezv.vercel.app](https://todosfrontendtestezv.vercel.app)

---

## 🚀 Features

- ✅ View list of todos (SSR + ISR)
- ➕ Add a new todo (React Hook Form + RTK Query)
- 🔁 Update todo completion status (RTK Mutation)
- 📄 View todo details (Dynamic Route + ISR)
- 💅 Fully responsive with Tailwind CSS

---

## 📦 Tech Stack

| Tech                                                         | Description                                   |
| ------------------------------------------------------------ | --------------------------------------------- |
| [Next.js](https://nextjs.org/)                               | React framework with App Router, SSR, and ISR |
| [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) | Data fetching, caching, and mutations         |
| [Tailwind CSS](https://tailwindcss.com/)                     | Utility-first CSS framework                   |
| [React Hook Form](https://react-hook-form.com/)              | Form management library                       |
| [TypeScript](https://www.typescriptlang.org/)                | Static typing (if enabled)                    |

---

## 📂 Project Structure

```
/app
  /[id]
    /page.tsx      # Todo detail page (ISR)
  /layout.tsx
  /page.tsx        # List todos (SSR)
  /globals.css

/constants
  /url.ts          # Global variable endpoints

/lib
  /store.ts          # Redux store

/services
  /todo.ts          # Todo API Service with RTKQ

/components
  /Spinner.tsx
  /ReduxProvider.tsx
  /Button.tsx
  /TodoCard.tsx
  /TodoForm.tsx

/types
  /todo.types.ts    # TypeScript interfaces/types

/views              # Client Side component for page
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dadangyuni/DadangYuniUtomo_FrontEndTest_EZV.git
cd DadangYuniUtomo_FrontEndTest_EZV
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to start using the app.

---

## 🧪 Available Scripts

- `dev` – Run development server
- `build` – Build for production
- `start` – Start production server
- `lint` – Lint project using ESLint

---

## 🛠 Configuration Notes

- Data is fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) using query params `?_start` and `&_limit` for pagination.
- SSR is used to pre-render the todo list.
- ISR (`revalidate`) is applied for detail and list pages.
- RTK Query is used on the client side for cache management, refetching, and mutations.
- Pagination is handled client-side after initial SSR.

---

## 🙋‍♂️ Author

Developed by [Dadang](https://github.com/dadangyuni)
