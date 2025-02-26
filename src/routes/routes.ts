import { ROUTES_ID } from "@rt/routes/routes-id";

export interface RouteType {
  id: string;
  filePath: string;
  title: string;
  path?: string;
  children?: RouteType[];
}

export const routes: RouteType[] = [
  {
    title: "Private Routes",
    id: ROUTES_ID.privatePages,
    filePath: "privatePages/Index",
    children: [
      {
        id: ROUTES_ID.dashboard,
        filePath: "privatePages/DashboardPage/DashboardPage",
        title: "Dashboard",
        path: "/",
      },
      {
        id: ROUTES_ID.categories,
        filePath: "privatePages/CategoriesPage/CategoriesPage",
        title: "Categories",
        path: "/categories",
      },
      {
        id: ROUTES_ID.products,
        filePath: "privatePages/ProductsPage/ProductsPage",
        title: "Products",
        path: "/products",
      },
    ],
  },
  {
    title: "Public Routes",
    id: ROUTES_ID.publicPages,
    filePath: "publicPages/Index",
    children: [
      {
        id: ROUTES_ID.login,
        filePath: "publicPages/LoginPage/LoginPage",
        title: "Login",
        path: "/login",
      },
      {
        id: ROUTES_ID.register,
        filePath: "publicPages/RegisterPage/RegisterPage",
        title: "Register",
        path: "/register",
      },
    ],
  },
];
