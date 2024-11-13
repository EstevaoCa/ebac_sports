import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoSlice = {
  favorItens: Produto[]
}

const initialState: FavoritoSlice = {
  favorItens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavoritos: (state, action: PayloadAction<Produto>) => {
      const favoritosCarrinho = action.payload

      const produtoExiste = state.favorItens.find(
        (p) => p.id === favoritosCarrinho.id
      )

      if (produtoExiste) {
        state.favorItens.filter((p) => p.id !== favoritosCarrinho.id)
      } else {
        state.favorItens.push(favoritosCarrinho)
      }
    }
  }
})

export const { toggleFavoritos } = favoritoSlice.actions
export default favoritoSlice.reducer
