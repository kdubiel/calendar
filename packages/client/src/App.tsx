import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { AppStore } from 'interfaces';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from 'redux';
import { ThemeProvider } from 'styled-components';
import { Light, MaterialUITheme } from 'themes';
import GlobalStyles from './globalStyles';
import Routes from './routes';

interface Props {
  store: Store<AppStore>;
  history: History;
}

const App: React.FC<Props> = ({ store, history }) => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={Light}>
          <MuiThemeProvider theme={MaterialUITheme}>
            <CssBaseline />
            <ToastContainer />
            <ConnectedRouter history={history}>
              <Routes />
            </ConnectedRouter>
          </MuiThemeProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
