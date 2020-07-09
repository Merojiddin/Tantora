import React, { FC, useEffect } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import loadable from '@loadable/component';

import 'mobx-react-lite/batchingForReactDom';
import 'normalize.css';
import './App.scss';

import theme from 'theme';
import rootStore from 'stores/rootStore';
import { client } from 'client';
import { StoreProvider } from 'hooks/useStore';
import Loading from 'components/@common/Loading';
import Header from 'components/@common/Header';
import Footer from 'components/@common/Footer';

// loadable components
const LoadableHome = loadable(() => import('components/Home'), {
  fallback: <Loading />,
});
const LoadableExhibitions = loadable(() => import('components/Events'), {
  fallback: <Loading />,
});
const LoadableExhibition = loadable(() => import('components/Exhibiton'), {
  fallback: <Loading />,
});
const LoadableLogin = loadable(() => import('components/Login'), {
  fallback: <Loading />,
});
const LoadableAdmins = loadable(() => import('components/Admin'), {
  fallback: <Loading />,
});
const LoadableRegistration = loadable(() => import('components/Registration'), {
  fallback: <Loading />,
});
const LoadableMessages = loadable(() => import('components/Messages'), {
  fallback: <Loading />,
});
const LoadableVisitors = loadable(() => import('components/Visitors'), {
  fallback: <Loading />,
});
const LoadableExhibitors = loadable(() => import('components/Exhibitors'), {
  fallback: <Loading />,
});

const App: FC = observer(() => {
  const classes = useStyles();
  const { authStore } = rootStore;

  useEffect(() => {
    authStore.fetchMe();
  }, [authStore.authToken]);

  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <main className={classes.main}>
              <Switch>
                <Route path="/" exact={true}>
                  <LoadableHome />
                </Route>
                <Route path="/exhibitions">
                  <LoadableExhibitions />
                </Route>
                <Route path="/exhibition">
                  <LoadableExhibition />
                </Route>
                <Route path="/admins">
                  <LoadableAdmins />
                </Route>
                <Route path="/login">
                  <LoadableLogin />
                </Route>
                <Route path="/register">
                  <LoadableRegistration />
                </Route>
                <Route path="/messages">
                  <LoadableMessages />
                </Route>
                <Route path="/visitors">
                  <LoadableVisitors />
                </Route>
                <Route path="/exhibitors">
                  <LoadableExhibitors />
                </Route>
              </Switch>
            </main>
            <Footer />
          </Router>
        </ThemeProvider>
      </StoreProvider>
    </ApolloProvider>
  );
});

const useStyles = makeStyles({
  main: {
    minHeight: 'calc(100vh - 70px)',
  },
});

export default App;
