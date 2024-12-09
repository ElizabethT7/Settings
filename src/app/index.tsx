import { ThemeProvider } from "../ThemeProvider";
import { Settings } from "../pages/Settings";
import { Container } from "./Container";

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Settings />
      </Container>
    </ThemeProvider>
  );
}

export default App;
