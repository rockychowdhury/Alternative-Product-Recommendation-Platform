
import Modal from '../common/Modal';
import AddQueryButton from '../buttons/AddQueryButton';
import CancelButton from '../buttons/CancelButton';
import useUIContext from '../../hooks/useUIContext';
import useAuth from '../../hooks/useAuth';
import usePostData from '../../hooks/usePostData';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
const AddQuery = () => {
    const { setOpenModal,showToast } = useUIContext();
    const { postData } = usePostData();
    const { user } = useAuth();
    const navigate = useNavigate()
    const handleAddQuery = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const productName = form.get('productName');
        const productBrand = form.get('productBrand');
        const ProductImageURL = form.get('ProductImageURL');
        const title = form.get('title');
        const boycottingReason = form.get('boycottingReason');

        const query = {
            productName, productBrand, ProductImageURL, title, boycottingReason,
            user: {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL
            },
            createdAt: Date.now(),
            updatedAt: null,
            recommendationCount: 0
        }
        if (query.title) {
            const res = await postData('/queries', query);
            if(res.status ===201){
                showToast('success',"Query Posted successfully.");
                setOpenModal(false);
                navigate(0);
            }
        }
        // if (!loading)
            // console.log(response, error);
    }
    useEffect(()=>{
        if(!user&&!user?.email)
        {
            navigate('/auth/login')
        }
    },[navigate,user]);
    return (
        <>
            <Modal>
                <div className='lg:p-5  lg:w-[500px]'>
                    <h1 className='font-semibold text-xl mb-5 text-center'>Discover Better Options!</h1>
                    <form className='space-y-4 w-full' onSubmit={handleAddQuery} action="">

                        <div>
                            <label htmlFor="product-name" className="block text-xs font-medium text-gray-700"> Product Name </label>
                            <input
                                type="text"
                                id="product-name"
                                name="productName"
                                placeholder="Iphone 14"
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="product-brand" className="block text-xs font-medium text-gray-700"> Product Brand </label>
                            <input
                                type="text"
                                id="product-brand"
                                name="productBrand"
                                placeholder="Apple"
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="imgURL" className="block text-xs font-medium text-gray-700"> Product Image URL </label>
                            <input
                                type="url"
                                id="imgURL"
                                name="ProductImageURL"
                                placeholder="Enter a URL of the product image."
                                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700"> Title </label>
                            <textarea
                                className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                rows="4"
                                id="title"
                                name="title"
                                placeholder="Is there a better alternative with a similar camera?"
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="reason" className="block text-sm font-medium text-gray-700"> Boycotting Reason </label>
                            <textarea
                                id="reason"
                                className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                rows="4"
                                name="boycottingReason"
                                placeholder="Too Expensive."
                            ></textarea>
                        </div>

                        <div className='flex items-center justify-between'>
                            <button type='submit'><AddQueryButton></AddQueryButton></button>
                            <button onClick={() => setOpenModal(false)} type='button'><CancelButton></CancelButton></button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default AddQuery;