import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


export default function BtnCartInfo() {
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.cantidad, 0);
  
    return (
        <Link to={'carrito'}>
            <div className="relative">
                <BiCartAlt className='text-white text-[30px]' />
                <div className='flex items-center justify-center text-primary absolute top-0 translate-y-[-50%] translate-x-[-50%] left-0 h-[25px] w-[25px] rounded-full bg-white p-small'>{totalItems}</div>
            </div>
        </Link>
    )
}