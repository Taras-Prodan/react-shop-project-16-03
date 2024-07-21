import { Button, Card, CardContent, Typography } from '@mui/material'
import './ProductListItem.css'

type Props = {
    title: string
    description: string
    features: string
    capacity: string
    price: string
}

const ProductListItem = ({
    title,
    description,
    capacity,
    price,
    features,
}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{
                    marginBottom: '30px',
                }}
            ></Typography>
            <Card variant="outlined" className="product-list-item">
                <CardContent>
                    <h3 className="product-title">{title}</h3>
                    <p className="product-description">{description}</p>
                    <div className="product-features">Type: {features}</div>
                    <div className="product-capacity">Capacity: {capacity}</div>
                    <div className="product-price">{price} $</div>
                    <div className="btns-wrapper">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductListItem
