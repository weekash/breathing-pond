import { HashRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';
import { AuthProvider } from './hooks/useAuth';
dayjs.extend(relativeTime);

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </AuthProvider>
  )
}

export default App
