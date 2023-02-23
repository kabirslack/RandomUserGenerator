import { useState, useEffect } from "react"
import { Card, CardHeader, CardBody, CardFooter, Box } from '@chakra-ui/react'
export default function CardHolder() {

    const [imgs, setImgs] = useState('https://randomuser.me/api/portraits/women/91.jpg');
    const [nam, setName] = useState('Jhon');
    const [load, setLoad] = useState(true)
    useEffect(() => {
        fetch('https://randomuser.me/api/').then(e => e.json()).then(e => {
            let name = `${e.results[0].name.title} ${e.results[0].name.first} ${e.results[0].name.last}`;
            let picture = e.results[0].picture.large;
            setName(name);
            setImgs(picture);

        })

    }, [load])

    return (
        <Box maxW="360px" mx="auto" >
            <Card>
                <CardHeader>{nam}</CardHeader>
                <CardBody>
                    <img src={imgs} display='block' />

                    <button className="btnw" onClick={() => setLoad(!load)}>Generate New User</button>
                </CardBody>
            </Card>
        </Box>


    )
}