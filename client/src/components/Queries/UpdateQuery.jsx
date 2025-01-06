
import Modal from '../common/Modal';
import CancelButton from '../buttons/CancelButton';
import useUIContext from '../../hooks/useUIContext';
import UpdateButton from '../buttons/UpdateButton';
import usePutData from '../../hooks/usePutData';
import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
const UpdateQuery = () => {
    const { setOpenModal, showToast } = useUIContext();
    const query = useLoaderData();
    const navigate = useNavigate();
    const { putData } = usePutData();
    const handleAddQuery = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const productName = form.get('productName');
        const productBrand = form.get('productBrand');
        const ProductImageURL = form.get('ProductImageURL');
        const title = form.get('title');
        const boycottingReason = form.get('boycottingReason');

        const updatedQuery = {
            productName,
            productBrand,
            ProductImageURL,
            title,
            boycottingReason,
            updatedAt: Date.now()
        }
        const res = await putData(`/queries/${query._id}`, updatedQuery);
        console.log(res);
        if (res.modifiedCount === 1) {
            setOpenModal(false);
            showToast('success', "Query Updated Successfully");
            navigate(-1);
        }
    }
    useEffect(() => {
        setOpenModal(true);
    }, [setOpenModal])
    return (
        <>
            <Modal>
                <div className='p-5 w-[500px]'>
                    <h1 className='font-semibold text-xl mb-5 text-center'>Update Query</h1>
                    <form className='space-y-4' onSubmit={handleAddQuery} action="">

                        <div>
                            <label htmlFor="product-name" className="block text-xs font-medium text-gray-700"> Product Name </label>
                            <input
                                type="text"
                                id="product-name"
                                name="productName"
                                defaultValue={query.productName}
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
                                defaultValue={query.productBrand}
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
                                defaultValue={query.ProductImageURL}
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
                                defaultValue={query.title}
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
                                defaultValue={query.boycottingReason}
                            ></textarea>
                        </div>

                        <div className='flex items-center justify-between'>
                            <button type='submit' className='w-1/2 font-bold'><UpdateButton></UpdateButton></button>
                            <button onClick={() => setOpenModal(false)} type='button'><CancelButton></CancelButton></button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};
export default UpdateQuery;