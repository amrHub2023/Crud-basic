import { useAuth } from "../context/AuthContext";


export const PostPage =() => {
    const {user} = useAuth()
    console.log()
    return (
        <di> PostPage</di>
    )
}
    
