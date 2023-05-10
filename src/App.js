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
import Header from './Pages/Header';
import { Layout } from './Pages/Layout';
function App() {
  return (
    <ApolloProvider client={client} >
      <BrowserRouter>
        <Navbar />

        <Layout>


          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
          </Routes>
          <Footer />
        </Layout>


      </BrowserRouter>

    </ApolloProvider>



// </Switch>
  );
}

export default App;
