import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store.js';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList.jsx';
export const MyAppContext = createContext();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <MyAppContext.Provider value="Test" >
        <App /> <TodoList/>
      </MyAppContext.Provider>
    </Provider>
  </StrictMode>,
)
