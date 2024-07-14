import { Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <div>
            <Typography variant="h4" component={'h1'}>
                ProductsList
            </Typography>
            <ProductListItem />
        </div>
    )
}

export default ProductsList
