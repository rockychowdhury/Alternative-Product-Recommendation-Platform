
import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import AddRecoButton from '../buttons/AddRecoButton';
import usePostData from '../../hooks/usePostData';
import CancelButton from '../buttons/CancelButton';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const AddRecommendation = ({ query, setRecommender }) => {
    const { user } = useAuth();
    const { postData } = usePostData();

    const handleAddRecommendation = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const recommendedProductName = form.get('productName');
        const recommendedProductBrand = form.get('productBrand');
        const recommendedProductImageURL = form.get('ProductImageURL');
        const recommendationTitle = form.get('title');
        const recommendationReason = form.get('reason');
        const recommendation = {
            recommendedProductName, recommendedProductBrand, recommendedProductImageURL, recommendationTitle, recommendationReason,
            user: {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL
            },
            createdAt: Date.now(),
            updatedAt: null,
            query: {
                _id: query?._id,
                title: query?.title,
                product: query?.productName,
                user: query?.user
            }
        }
        if (query.title) await postData('/recommendations', recommendation);
        // if (!loading)
        //     // console.log(response, error);
        // console.log(recommendation);
        setRecommender(false);
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (!user && !user?.email) {
            navigate('/auth/login')
        }
    }, [navigate, user]);
    return (
        <div className='p-5 w-[500px]'>
            <h1 className='font-semibold text-xl mb-5 text-center'>Share Your Recommendation!</h1>
            <form className='space-y-4' onSubmit={handleAddRecommendation} action="">

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700"> Recommendation Title </label>
                    <textarea
                        className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                        rows="4"
                        id="title"
                        name="title"
                        placeholder="What's your recommendation? For example, 'A better alternative for professional photography'."
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="product-name" className="block text-xs font-medium text-gray-700"> Recommended Product Name </label>
                    <input
                        type="text"
                        id="product-name"
                        name="productName"
                        placeholder="Samsung Galaxy S23"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="product-brand" className="block text-xs font-medium text-gray-700"> Recommended Product Brand </label>
                    <input
                        type="text"
                        id="product-brand"
                        name="productBrand"
                        placeholder="Samsung"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="imgURL" className="block text-xs font-medium text-gray-700"> Product Image URL </label>
                    <input
                        type="url"
                        id="imgURL"
                        name="ProductImageURL"
                        placeholder="Enter a URL for the recommended product's image."
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700"> Why Do You Recommend This? </label>
                    <textarea
                        id="reason"
                        className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                        rows="4"
                        name="reason"
                        placeholder="This product offers great value for money and similar features."
                    ></textarea>
                </div>

                <div className='flex items-center justify-between'>
                    <button type='submit'><AddRecoButton></AddRecoButton></button>
                    <button type='button' onClick={() => { setRecommender(false) }}> <CancelButton></CancelButton> </button>
                </div>
            </form>
        </div>

    );
};
AddRecommendation.propTypes = {
    query: PropTypes.object,
    setRecommender: PropTypes.func
}
export default AddRecommendation;