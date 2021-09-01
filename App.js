import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ApplicationContainer from './src/navigation/navigation';
import {store, persistor} from './src/redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <ApplicationContainer/>
      </PersistGate>
    </Provider>
  );
}

