import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productAction'


const HomeScreen = () => {

  const dispatch = useDispatch()

  const { loading, error, products } = useSelector(state => state.productList)

  useEffect(() => {

    dispatch(listProducts())

  }, [dispatch])

  if (error) return (
    <Message variant='danger'>
      Failed to load products
    </Message>
  )

  return (
    <>
      <h1>Latest Products</h1>
      { loading ?
        (
          <Loader />
        )
        :
        (
          <Row>
            {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
    </>
  )
}

export default HomeScreen
