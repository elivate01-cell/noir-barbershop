import { Layout } from '@/components/Layout';
import { useHashRoute } from '@/hooks/useHashRoute';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { About } from '@/pages/About';
import { Gallery } from '@/pages/Gallery';
import { Contact } from '@/pages/Contact';

function App() {
  const { path, navigate } = useHashRoute();

  const renderPage = () => {
    switch (path) {
      case '/services':
        return <Services onNavigate={navigate} />;
      case '/about':
        return <About />;
      case '/gallery':
        return <Gallery />;
      case '/contact':
        return <Contact />;
      case '/':
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <Layout currentPath={path} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
}

export default App;
