import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

import { Product } from '../../app/models/product'

interface Props {
  product: Product
}

function ProductCard({ product }: Props) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={product.pictureUrl}></Avatar>
      </ListItemAvatar>
      <ListItemText>
        {product.name} - {product.price}
      </ListItemText>
    </ListItem>
  )
}

export default ProductCard
