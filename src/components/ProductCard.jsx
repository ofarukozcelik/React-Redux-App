import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { deleteDataFunc } from "../redux/dataSlice";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc())
    setOpenEdit(false)
    navigate(`/?update=${dt?.id}`)

  }
  return (
    <div className="w-[250px] h-[300px] relative m-2 rounded-md">
      <img src={dt?.url} className="w-full h-full rounded-md" alt="" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price}$</div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className="absolute top-0 right-2">
        <BsThreeDots className="cursor-pointer" color="gray" size={25} />
      </div>
      {
        openEdit && (
          <div className="bg-black border-white rounded-sm text-white absolute top-5 right-2 p-2 text-xs">
            <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className="cursor-pointer">Sil</div>
            <div onClick={updateFunc} className="cursor-pointer">Güncelle</div>
          </div>
        )}
    </div>
  )
}

export default ProductCard