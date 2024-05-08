import Topbar from "./components/scenes/global/Topbar";
import { ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App(){
    const [theme, ColorMode] = useMode();


    return (
        <ColorModeContext.Provider value={ColorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <main className="content">
                        <Topbar/>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App