import { Provider } from 'react-redux'
import store from './store'
import UserInfo from './userInfo'
import React from "react";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <UserInfo />
      </Provider>
    </div>
  )
}

export default App
