import { useEffect, useState } from "react";
import { GetChannelsByCategory } from "../services/GroupServices";
import ItemMap from "./ItemMap";


const Channels = (props) => {

    const [channels, setChannels] = useState([])

    useEffect(()=> {
        const handleChannels = () => {
            
        }
    })

    return (
        <ItemMap items={channels} basePath='/explore/channels/' />
    )
}

export default Channels