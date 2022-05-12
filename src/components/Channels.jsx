import { useEffect, useState } from "react";
import { GetChannelsByCategory } from "../services/ChannelServices";
import ItemMap from "./ItemMap";


const Channels = (props) => {

    const [channels, setChannels] = useState([])

    useEffect(()=> {
        const handleChannels = async () => {
            const data = await GetChannelsByCategory(props.categoryId)
            setChannels(data.channels)
        }
        handleChannels()
    }, [])

    return (
        <ItemMap items={channels} basePath='/explore/channels/' />
    )
}

export default Channels