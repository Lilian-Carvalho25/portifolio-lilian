import RouterApp from "./Routers";
import { useTheme } from "./ThemeContext";

function App() {

  const { theme } = useTheme();

  return (
    <body style={{
      background: theme.background,
      color: theme.text,
      backgroundImage: theme.backgroundImage,
      backgroundSize: 'cover',
      width: '100vw'
    }}>
      <RouterApp />
    </body>
  )
}

export default App
