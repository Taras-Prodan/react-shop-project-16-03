import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import './ProductListItem.css'

type Props = {}
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
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPad Pro"
                        description="This is iPad Pro"
                        features="iPad"
                        capacity="128GB"
                        price="999"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 16"
                        description="This is iPhone 16"
                        features="phone"
                        capacity="248GB"
                        price="1300"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="Apple Watch"
                        description="This is Apple Watch"
                        features="Watch"
                        capacity="Up to 18 hours17"
                        price="400"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
