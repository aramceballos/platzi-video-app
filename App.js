import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

import Home from './src/screens/Home';
import rootReducer from './src/reducers';
import LoadingIndicator from './src/components/LoadingIndicator';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {
  categories: [
    'Action',
    'Adventure',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Horror',
    'Musical',
  ],
  suggestions: [],
});
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingIndicator />} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
