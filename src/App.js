import React from 'react';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import apolloClient from './apollo/apollo-client';

import Home from './screens/Home';


function App() {
  return (
      <ApolloProvider client={apolloClient}>
          <Home />
      </ApolloProvider>
  );
}

export default App;
