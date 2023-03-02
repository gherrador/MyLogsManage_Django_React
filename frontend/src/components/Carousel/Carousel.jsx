import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import image1 from '../../assets/giphy.gif'
import image2 from '../../assets/giphy2.gif'
import image3 from '../../assets/dashboard.gif'
function CarouselHome()
{
    var items = [
        {
            id: "1",
            name: "gif1",
            image: image1
        },        
        {
            id: "2",
            name: "gif2",
            image: image2
        },
        {
            id: "3",
            name: "gif3",
            image: image3
        },
    ]

    return (
        <Carousel indicators={false} duration={200}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default CarouselHome