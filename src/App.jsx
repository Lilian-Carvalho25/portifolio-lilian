import RouterApp from "./Routers";
import { useTheme } from "./ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div style={{
      background: theme.background,
      color: theme.text,
      backgroundImage: theme.backgroundImage,
      backgroundSize: 'cover',
      width: '100vw',
      minHeight: '100vh'
    }}>
      <RouterApp />
    </div>
  );
}

export default App;
