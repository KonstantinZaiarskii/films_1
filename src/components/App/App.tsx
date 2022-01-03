import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppContent from "components/AppContent/AppContent";

import { StyledEngineProvider, createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme();

const App = () => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<BrowserRouter basename='/films'>
					<AppContent />
				</BrowserRouter>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};
export default App;
