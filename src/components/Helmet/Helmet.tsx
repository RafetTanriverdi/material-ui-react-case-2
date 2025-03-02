import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const DynamicHelmet = ({ title }: { title: string }) => {
  const location = useLocation();

  return (
    <Helmet key={location.pathname}>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
    </Helmet>
  );
};
