import './App.scss'
import React from 'react'
import Layout from './components/Layout/Layout'
import ProductPage from './pages/Product/Product'
import { Route, Routes, useNavigate } from 'react-router'

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
      <Layout>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Layout>
    )
  }
}
export default App
