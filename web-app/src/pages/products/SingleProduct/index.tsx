import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/auth';
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
      const { user, isSupplier } = useContext(AuthContext);
      const { id } = useParams(); // Id do produto pra dar get nele (url param)

      const [product, setProduct] = useState<any>(null); // Ajustar tipagens
      let isProductSupplier = isSupplier && user?.id === product.supplierId; // Checa se o user eh fornecedor desse

      const getProduct = async () => {
            // 1. Deve criar o Item.service
            // 2. importar e instanciar ele
            // 3. puxar o produto aqui a partir do id
      }

      useEffect(() => {
            getProduct();
      }, []);

      return (
            <h1>Single Product Page</h1>
      )
};

export default SingleProduct;