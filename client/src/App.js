import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Uncomment import statement below after building queries and mutations
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
// code added below⤵️
import NotFound from './pages/NotFound';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  // code added below⤵️
  return (
    <ApolloProvider client={client}>
          {/* code added above⤴️ */}
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/matchup" 
            element={<Matchup />} 
          />
          <Route 
            path="/matchup/:id" 
            element={<Vote />} 
          />
          {/* code added below⤵️ */}
          <Route 
              path="*"
              element={<NotFound />}
            />
            {/* code added above⤴️ */}
        </Routes>
      </div>
    </Router>
     {/* code added below⤵️ */}
    </ApolloProvider>
    // code added above⤴️
  );
}

export default App;
