import { Button, Card, CardContent, Typography, TextField } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'
type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    count: number
}

const ProductListItem = ({
    title,
    description,
    capacity,
    price,
    type,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const onDecrementClick = () => {
        setCount((prevCount) => prevCount - 1)
    }

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
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <h3 className="product-title">{title}</h3>
                    <p className="product-description">{description}</p>
                    <div className="product-features">Type: {type}</div>

                    <div className="product-capacity">Capacity: {capacity}</div>
                    <div className="product-price"> $ {price}</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={onDecrementClick}
                            disabled={count <= 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={count} />
                        <Button variant="outlined" onClick={onIncrementClick}>
                            +
                        </Button>
                    </div>
                    <div className="btns-wrapper">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductListItem
