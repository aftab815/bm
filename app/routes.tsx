import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";

const About = lazy(() => import("./components/pages/About").then(m => ({ default: m.About })));
const PracticeAreas = lazy(() => import("./components/pages/PracticeAreas").then(m => ({ default: m.PracticeAreas })));
const ServiceDetail = lazy(() => import("./components/pages/ServiceDetail").then(m => ({ default: m.ServiceDetail })));
const Chairman = lazy(() => import("./components/pages/Chairman").then(m => ({ default: m.Chairman })));
const Contact = lazy(() => import("./components/pages/Contact").then(m => ({ default: m.Contact })));
const NotFound = lazy(() => import("./components/pages/NotFound").then(m => ({ default: m.NotFound })));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: () => withSuspense(About) },
      { path: "practice-areas", Component: () => withSuspense(PracticeAreas) },
      { path: "practice-areas/:slug", Component: () => withSuspense(ServiceDetail) },
      { path: "chairman", Component: () => withSuspense(Chairman) },
      { path: "contact", Component: () => withSuspense(Contact) },
      { path: "*", Component: () => withSuspense(NotFound) },
    ],
  },
]);
