import { useState, useEffect } from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom'
import ItemService from './../../services/api/item.service'
import { Item } from './../../types/item'

const Search = () => {
  // Instanciat Item Sercive (ver exemplo das categorias)
  const [items, setItems] = useState<Item[]>([])
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState(false)

  const searchHandler = () => {
    setSearchParams(createSearchParams({ query: search }))
  }

  const itemService = new ItemService()

  const getItems = async (query: any) => {
    let response: any = null

    try {
      response = await itemService.getAll(query)
      if (response.errorType) {
        setFeedback(response.message)
        setError(true)
      } else {
        setItems(response)
      }
    } catch (e) {
      setFeedback(response.message)
      setError(true)
    }
  }

  useEffect(() => {
    getItems(searchParams.get('query') || '');
  }, [searchParams])

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchHandler}>Buscar</button>
        </div>
        <div>
          <h2>Search results for "{searchParams.get('query')}"</h2>
        </div>
      </div>
      <div className="product-list">
        {items
          .map((item) => (
            <div>{item.name}</div>
          ))}
      </div>
    </div>
  )
}

export default Search
