import { useState, useEffect} from "react";
import Post from "./Post";

const PostMap = ({ items, user, setUpdate }) => {


    useEffect(()=> {

    }, [])

        return (
            <div className="Post-grid">
                {
                    items.map((item)=> (
                        <Post item={item} user={user} setUpdate={setUpdate}/>
                    ))
                }
            </div>
        )
}

export default PostMap