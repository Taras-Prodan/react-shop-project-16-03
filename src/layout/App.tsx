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
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
