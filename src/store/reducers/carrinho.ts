import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type carrinhoSlice = {
  itens: Produto[]
}

const initialState: carrinhoSlice = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoDoCarrinho = action.payload

      const produtoExiste = state.itens.find(
        (produto) => produto.id === produtoDoCarrinho.id
      )

      if (produtoExiste) {
        alert('Produto Ja existente')
      } else {
        state.itens.push(produtoDoCarrinho)
      }
    }
  }
})

export const { adicionarCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
