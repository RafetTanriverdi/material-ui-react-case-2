import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";
import { routes, RouteType } from "@rt/routes/routes";
import ErrorBoundryPage from "@rt/pages/otherPages/ErrorBoundryPage/ErrorBoundryPage";
import ErrorPage from "@rt/pages/otherPages/ErrorPage/ErrorPage";
import { RTLoading } from "@rt/components/Loading/Index";

const AppClientRouter = () => {
  const pages = import.meta.glob("./pages/**/*.tsx");

  const renderRoute = (route: RouteType): RouteObject => {
    const PageComponent = lazy(
      () =>
        pages[`./pages/${route.filePath}.tsx`]() as Promise<{
          default: React.ComponentType<{ routeData: RouteType }>;
        }>
    );

    const children = route.children?.map(renderRoute);

    return {
      path: route.path,
      element: (
        <Suspense fallback={<RTLoading.page />}>
          <PageComponent routeData={route} />
        </Suspense>
      ),
      children,
    };
  };

  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      element: (
        <Suspense fallback={<RTLoading.page />}>
          <ErrorBoundryPage>
            <App />
          </ErrorBoundryPage>
        </Suspense>
      ),
      children: routes.map(renderRoute),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppClientRouter;
