import { useState, useEffect } from 'react';
import { Item } from '../../../server/types/item'
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { NavBar } from './components/navbar/NavBar';

interface HomeItemCardProps {
  item: Item;
}

function HomeItemCard({ item }: HomeItemCardProps) {
  return (
    <div className="card">
      <img src={item.picture} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Price: ${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export const Home = () => {

  const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/home')
            .then(response => response.json())
            .then(data => {
                setItems(data.items);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

  return (
        <div>
            <Header/>
            <NavBar/>
            <div className='home-grid-container'>
                {items.map(item => (
                    <HomeItemCard key={item.id} item={item} />
                ))}
            </div>
            <Footer/>
        </div>
  );
};
