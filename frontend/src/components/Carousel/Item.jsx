import { Paper } from '@mui/material'

function Item(props)
{
    return (
        <Paper>
            <img style={{width:"450px", height:"400px"}} src={props.item.image} alt={props.item.name} />
        </Paper>
    )
}

export default Item