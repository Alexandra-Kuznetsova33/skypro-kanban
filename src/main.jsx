import { createRoot } from 'react-dom/client';
import Root from './App.jsx';
import { AuthProvider } from './context/AuthProvider';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Root />
  </AuthProvider>,
);
