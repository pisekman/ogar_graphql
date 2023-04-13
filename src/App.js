import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from "./lib/apollo"
import HomePage from './Pages/HomePage';
import PostPage from './Pages/PostPage';

function App() {
  return (
    <ApolloProvider client={client} >
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
        </Routes>

      </BrowserRouter>

    </ApolloProvider>



// </Switch>
  );
}

export default App;
