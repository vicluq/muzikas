import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/auth'
import { useParams, Link } from 'react-router-dom'
import ItemService from '../../../services/api/item.service'
import { Item } from '../../../types/item'

const SingleProduct = () => {
  const { user, isSupplier } = useContext(AuthContext)
  const { id } = useParams<{ id: any }>() // Id do produto pra dar get nele (url param)
  const [product, setProduct] = useState<Item | null>(null) // Ajustar tipagens
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState(false)

  const itemService = new ItemService()

  let isProductSupplier = isSupplier && user?.id === product?.supplierId // Checa se o user eh fornecedor desse

  const getProduct = async () => {
    let response: any = null

    try {
      response = await itemService.get(id)
      if (response.errorType) {
        setFeedback(response.message)
        setError(true)
      } else {
        setProduct(response)
      }
    } catch (e) {
      setFeedback(response.message)
      setError(true)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      {isProductSupplier ? (
        <div>
          <Link to={`/product/edit/${id}`}>Editar Produto</Link>
        </div>
      ) : null}
      {product ? <div>{product.name}</div> : <div>Esse produto não existe</div>}
    </div>
  )
}

export default SingleProduct
