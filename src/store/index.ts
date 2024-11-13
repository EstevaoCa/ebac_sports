import { configureStore } from '@reduxjs/toolkit'
import favoritosReducer from './reducers/favoritos'
import carrinhoReducer from './reducers/carrinho'
import { api } from '../services/api'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
