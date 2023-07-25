import {Provider} from 'react-redux'
import {store} from './store'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor} from './store/index'

import Main from './components/main/Main'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}
