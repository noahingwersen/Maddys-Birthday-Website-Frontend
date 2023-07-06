import { useEffect, useState } from "react"
import { pb } from "../../../api/pocketBase"

const Message = ({userID, text}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            try {
            const userRecord = await pb.collection('users').getOne(userID)
            setUser(userRecord)
            } catch (error) {
                console.log(error)
            }
        }

        getUser()
    }, [userID])
    

  return (
    <div className="bg-gray-300 p-2 rounded-md">
        <h1>{user && user.name}</h1>
    </div>
  )
}
export default Message