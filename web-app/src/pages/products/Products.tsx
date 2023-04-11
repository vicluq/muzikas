import { useContext, useState, useEffect } from 'react'

import { Header } from '../components/header/Header'
import { Links } from '../components/links/Links'
import { CreateProduct } from './createProduct/CreateProduct'
import { EditProduct } from './editProduct/EditProduct'
import { AuthContext } from '../../context/auth'
import { AddItem, Item } from './../../types/item'
import ItemService from '../../services/api/item.service'
import { useNavigate } from 'react-router-dom'

import './Products.css'

import plus from './assets/Plus.png'
import magnifyingGlass from './assets/magnifying-glass.png'
import nothingHere from './assets/nadaAqui.png'

export const Products = () => {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState(false)
  const [items, setItems] = useState<Item[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedCreate, setSelectedCreate] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(false);

  const navigate = useNavigate()

  const { user } = useContext(AuthContext)
  const itemService = new ItemService(user?.token!)

  if (!user) {
    navigate('/supplier/login')
  } else if (user && !user?.cnpj) {
    navigate('/home')
  }

  const getItems = async () => {
    setLoading(true)
    let response: any = null

    try {
      response = await itemService.getAll(search, user?.id)
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

    setLoading(false)
  }

  const createHandler = async (data: AddItem) => {
    setLoading(true)
    let response: any = null

    try {
      response = await itemService.add(data)
      setFeedback(response.message)
      if (response.errorType) setError(true)
    } catch (e) {
      setFeedback(response.message)
      setError(true)
    }

    setLoading(false)
  }

  const updateHandler = async (id: number, data: Partial<AddItem>) => {
    setLoading(true)
    let response: any = null

    try {
      response = await itemService.update(id, data)
      setFeedback(response.message)
      if (response.errorType) setError(true)

      setItems(() => {
        const index = items.findIndex((item) => item.id === id)
        const newItem = [...items]
        newItem[index] = { ...newItem[index], ...data }
        setSelectedId(null)
        return newItem
      })
    } catch (e) {
      setFeedback(response.message)
      setError(true)
    }

    setLoading(false)
  }

  const deleteHandler = async (id: number) => {
    setLoading(true)
    let response: any = null

    try {
      response = await itemService.delete(id)
      setFeedback(response.message)
      if (response.errorType) setError(true)
      setItems(() => {
        return items.filter((item) => item.id !== id)
      })
    } catch (e) {
      setFeedback(response.message)
      setError(true)
    }

    setLoading(false)
  }

  function isSelectedCreate() {
    setSelectedCreate(true);
  }

  function isSelectedEdit() {
    setSelectedEdit(true);
  }

  function recieveId(a: number){
    setSelectedId(a)
    return(a)
  }


  function callCreateItem() {
    setSelectedEdit(false)
    return (
      <CreateProduct
        createHandler={createHandler}
      />
    )
  }

  function callEditItem() {
    if (selectedEdit) {
      setSelectedCreate(false)
      return (
        <EditProduct
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
          item={items.find(cat => cat.id === selectedId)}
        />
      )
    }
  }

  function tradeFromProducts() {
    if (selectedCreate === true){
      return (callCreateItem());
    }
    else {
      return (callEditItem());
    }
  }

  return (
    <div>
      <Header />
      <Links />
      <div className="products-main-div">
        <div className="products-box">
          <div className="products-left-col">
            <div className="products-left-header">
              <div className="products-left-header-first-line">
                <h2>Produtos</h2>
                <button onClick={isSelectedCreate} data-cy="add">
                  <img src={plus} />
                </button>
              </div>
              <div className="products-line" />
            </div>
            <div className="products-search-bar" data-cy="search-input">
              <input type="text"></input>
              <button data-cy="search">
                <img src={magnifyingGlass} />
              </button>
            </div>
            <div className="products">
              {search
                ? items
                  .filter((item) => item.name.includes(search))
                  .map((item) => (
                    <button
                      className="product-div"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        borderBottom: '2px var(--Gray)',
                      }}
                    >
                      <div className="product-div-left">
                        <img src={item.picture} />
                      </div>

                      <div className="product-div-right">
                        <h3
                          style={{
                            color: 'var(--Purple-Primary)',
                            padding: '2px 0 0 0',
                          }}
                        >
                          {item.name}
                        </h3>
                        <h3
                          style={{
                            color: '#000000',
                            padding: '2px 0 0 0',
                          }}
                        >
                          {item.price}
                        </h3>
                        <div className="products-none">
                          {recieveId(item.id)}
                        </div>
                      </div>
                    </button>
                  ))
                : items.map((item) => (
                    <button
                      className="product-div"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        borderBottom: '2px var(--Gray)',
                      }}
                    >
                      <div className="product-div-left">
                        <img src={item.picture} />
                      </div>

                      <div className="product-div-right">
                        <h3
                          style={{
                            color: 'var(--Purple-Primary)',
                            padding: '2px 0 0 0',
                          }}
                        >
                          {item.name}
                        </h3>
                        <h3
                          style={{
                            color: '#000000',
                            padding: '2px 0 0 0',
                          }}
                        >
                          {item.price}
                        </h3>
                        <div className="products-none">
                          {recieveId(item.id)}
                        </div>
                      </div>
                    </button>
                ))}
            </div>
          </div>

          <div className="products-middle-line" />

          <div className="products-right-col">{tradeFromProducts()}</div>
        </div>
      </div>
    </div>
  )
}