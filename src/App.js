import './App.scss'
import React, { Suspense } from 'react'
import Layout from './components/Layout/Layout'
import ProductPage from './pages/Product/Product'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import CartProvider from './store/cart-provider'
import Loader from './pages/Loader/Loader'
const LazyProductPage = React.lazy(() => import('./pages/Product/Product'))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.myFunction = this.myFunction.bind(this)
    this.state = { isLoading: true }
  }
  componentDidMount() {
    // setTimeout(() => {
    this.setState({ isLoading: false })
    // }, 500)
  }
  myFunction(e) {
    alert('The value of counter is ' + this.state.counter)
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <Suspense fallback={<Loader />}>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to={'/product/1'} />} />
              <Route path="/product/:id" element={<LazyProductPage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </Suspense>
    )
  }
}
export default App
