import React from 'react';
import ReactDOM from 'react-dom/client';
import 'fontawesome-4.7/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './statics/scss/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Routes from './routes';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes />
      </Router>
    </QueryClientProvider>
  </RecoilRoot>,
);