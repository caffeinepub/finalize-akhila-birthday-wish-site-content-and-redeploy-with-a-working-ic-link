import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import LandingPage from './pages/LandingPage';
import CelebrationPage from './pages/CelebrationPage';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { ROUTES } from './content/routes';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster />
    </>
  ),
});

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.LANDING,
  component: LandingPage,
});

const celebrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.CELEBRATE,
  component: CelebrationPage,
});

const routeTree = rootRoute.addChildren([landingRoute, celebrationRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
