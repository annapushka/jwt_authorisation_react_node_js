import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Store from './store/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface IStore {
  store: Store
}

const store = new Store()

export const Context = createContext<IStore>({
  store
})
root.render(
  <React.StrictMode>
      <Context.Provider value={{ store }}>
          <App />
      </Context.Provider> 
  </React.StrictMode>
)
