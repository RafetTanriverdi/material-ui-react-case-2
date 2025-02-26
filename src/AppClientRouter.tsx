import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";
import { routes, RouteType } from "@rt/routes/routes";

const AppClientRouter = () => {
  const pages = import.meta.glob("./pages/**/*.tsx");

  const renderRoute = (route:RouteType):RouteObject => {
    const PageComponent = lazy(
      () => pages[`./pages/${route.filePath}.tsx`]() as Promise<{ default: React.ComponentType }>
    );

    const children = route.children?.map(renderRoute);

    return {
      path: route.path,
      element: (
        <Suspense fallback={ 'loading...' }>
          <PageComponent />
        </Suspense>
      ),
      children,
    };
  };

  const router = createBrowserRouter([
    {
      element: (
        <Suspense fallback={'loading...'}>
          <App />
        </Suspense>
      ),
      children: routes.map(renderRoute),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppClientRouter;