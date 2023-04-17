import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from "./lib/apollo"
import HomePage from './Pages/HomePage';
import PostPage from './Pages/PostPage';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import "./styles.css"
function App() {
  return (
    <ApolloProvider client={client} >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </ApolloProvider>



// </Switch>
  );
}

export default App;
