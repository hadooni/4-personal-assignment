import { AuthProvider } from "./api/AuthContext";
import UserContextProvider from "./context/UserContext";
import AppRouter from "./shared/Router";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <UserContextProvider>
          <AppRouter />
        </UserContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
