import { pb } from '../../../api/pocketBase'

const Picture = ({ record }) => {
  return (
    <img
      className="w-full object-contain"
      src={pb.getFileUrl(record, record.image)}
    />
  )
}
export default Picture
