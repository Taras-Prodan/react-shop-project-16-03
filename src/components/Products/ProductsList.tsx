import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import './ProductListItem.css'
import { productsArray } from 'utils/productsArray'

type Props = {}

console.log(productsArray)

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{
                    marginBottom: '30px',
                }}
            ></Typography>
            <Grid container spacing={2}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        type,
                        description,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ProductListItem
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                count={0}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
