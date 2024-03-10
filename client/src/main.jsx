import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client=new ApolloClient({
  uri:'http://localhost:8000/graphql',
  cache:new InMemoryCache(),
})

const query=`
  query GetTodos{
    getTodos {
      id
      title
      completed
      user {
        name
        phone
        email
      }
    }
  }
`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
