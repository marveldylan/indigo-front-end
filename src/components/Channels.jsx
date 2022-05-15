import { useEffect, useState } from "react";
import ItemMap from "./ItemMap";


const Channels = ({id, getChannels}) => {

    const [channels, setChannels] = useState([])

    useEffect(()=> {
        const handleChannels = async () => {
            const data = await getChannels(id)
            setChannels(data.channels)
        }
        handleChannels()
    }, [])

    return (
        <ItemMap items={channels} basePath='/channels/' />
    )
}

export default Channels