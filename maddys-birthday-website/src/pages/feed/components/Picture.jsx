import { pb } from "../../../api/pocketBase"

const Picture = ({user, id, collectionID, image, time}) => {
    const userAvatar = pb.getFileUrl(user, user.avatar)
    const dateOptions = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}
    const timestamp = time.toLocaleDateString('en-US', dateOptions)

    return (
        <div className="bg-gray-300 p-4 my-8 rounded-md flex flex-col w-[450px]">
            <div className="flex flex-row mb-4">
                <img className="h-20 w-20 rounded-full object-cover me-4" src={userAvatar}/>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-2xl">{user.name}</h1>
                    <p className="text-gray-500">{timestamp}</p>
                </div>
            </div>
            <img className="w-full object-contain" src={pb.getFileUrl({id: id, collectionId: collectionID}, image)}/>
        </div>
      )
}
export default Picture