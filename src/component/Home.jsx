import Banner from "./Banner";
import CardDisplay from "./Card";
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, SimpleGrid, Text } from '@chakra-ui/react'

const Home = () => {
    return <div><div className="banner">
        <Banner />
        <div className="home-section" style={{margin:"10px 20px"}}>
            <SimpleGrid spacing={3} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                <CardDisplay src ="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/4/29/2/HUHH2015-Privacy_Chilco_1.jpg.rend.hgtvcom.1280.853.suffix/1430362328380.jpeg" title='log cabin' description='nice sunny cabin in capetown for couples' price='330' />
                <CardDisplay src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/6e/d2/b8/sala-beach-house-view.jpg?w=700&h=-1&s=1" title='log cabin' description='nice sunny cabin in capetown for couples' price='330' />
                <CardDisplay src="https://sola-images.s3.us-west-2.amazonaws.com/wp-content/uploads/2020/07/02160841/Michigan_600_news.jpg" title='log cabin' description='nice sunny cabin in capetown for couples' price='330' />
            </SimpleGrid>
        </div>
    </div>
    </div>
}

export default Home;