import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { SidebarDrawerProvider } from "./context/SidebarDrawerContext"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {
  return (
    <div>
    <ApolloProvider client={client}>
      <SidebarDrawerProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SidebarDrawerProvider>
    </ApolloProvider>
    </div>
  )
}

export default App
