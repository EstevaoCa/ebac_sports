import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { RootReducer } from '../store'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.favorItens
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
