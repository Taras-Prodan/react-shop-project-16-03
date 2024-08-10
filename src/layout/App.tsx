import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import Main from './Main'
import Footer from './Footer'
import 'styles/layout.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type CartDataType = {
    totalCount: number
    totalPrice: number
}

type Props = {
    totalCount: number
    totalPrice: number
}

const CartHeader = (props: Props) => {
    return (
        <div>
            <div>{props.totalCount}</div>
            <div>{props.totalPrice}$</div>
        </div>
    )
}
const App = () => {
    const [cartData, setCartData] = useState<CartDataType>({
        totalCount: 0,
        totalPrice: 0,
    })

    const appProductToCart = (count: number, price: number) => {
        setCartData((prevCartData) => ({
            totalCount: prevCartData.totalCount + count,
            totalPrice: prevCartData.totalPrice + count * price,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <button onClick={() => appProductToCart(5, 1000)}>
                {' '}
                Add to cart (5, 1000$)
            </button>
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
