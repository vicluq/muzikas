import { useState, useEffect } from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom'

const Search = () => {
  // Instanciat Item Sercive (ver exemplo das categorias)
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const searchHandler = () => {
    setSearchParams(createSearchParams({ query: search }))
  }

  useEffect(() => {
    const query = searchParams.get('query')
    // Pegar produtos da API
    // Passar query para a funcao
    // se tiver query, no item service adicionar `?query=${query}` no fim da URL do getItems
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
      <div className="product-list"></div>
    </div>
  )
}

export default Search
