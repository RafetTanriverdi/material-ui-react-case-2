import { ROUTES_ID } from "@rt/routes/routes-id";
import { flattenRoutes } from "@rt/utils/flatten-routes";

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


export const FLAT_ROUTES = flattenRoutes(routes);
const ROUTE_ID_MAP: Record<string, RouteType> = {};
FLAT_ROUTES.map((el) => (ROUTE_ID_MAP[el.id] = el));

console.log(ROUTE_ID_MAP,'ROUTE_ID_MAP');

export const getRoutePath = (routeId: string): string => {
  const routeInfo = ROUTE_ID_MAP[routeId];
  if (routeInfo && routeInfo.path) {
    return routeInfo.path;
  }
  return "/404";
};

export const getRouteId = (path: string): string => {

  const routeInfo = FLAT_ROUTES.find((el) => el.path === path);
  if (routeInfo) {
    return routeInfo.id;
  } else {
    return "not found id";
  }
};