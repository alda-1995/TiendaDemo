import { BiCartAlt } from 'react-icons/bi'
import useShoppingCart from "../hooks/useShoppingCart";

export default function BtnCartInfo(){
    const { cartItems } = useShoppingCart();
    return(
        <div className="relative">
            <BiCartAlt className='text-white h3'/>
            <div className='flex items-center justify-center text-primary absolute top-[-50%] right-[-50%] h-[20px] w-[20px] rounded-full bg-white p-small'>{cartItems.length}</div>
        </div>
    )
}