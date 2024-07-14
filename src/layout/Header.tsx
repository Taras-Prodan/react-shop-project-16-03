import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import Logo from '../components/Logo/Logo'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'green' }}>
            <Container>
                <Toolbar>
                    <Logo />
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Products</Button>
                    <Button color="inherit">Payment</Button>
                    <Button color="inherit">Cart</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
