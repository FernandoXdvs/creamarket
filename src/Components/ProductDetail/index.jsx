import { XMarkIcon } from '@heroicons/react/24/solid';
import './ProductDetail.css';

const ProductDetail = () => {
    return (
        <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalles</h2>
                <div className='cursor-pointer'>
                <XMarkIcon className='h6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
        </aside>
    );
}

export { ProductDetail };