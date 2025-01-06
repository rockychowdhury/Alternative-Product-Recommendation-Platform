import { useLoaderData, useLocation, useNavigate } from "react-router";
import Modal from "../../components/common/Modal";
import useUIContext from "../../hooks/useUIContext";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "../../utils/formatTimestamp";
import QueryDetails from "../../components/Queries/QueryDetails";
import Comments from "../../components/Queries/Comments";
import Recommendations from "../../components/Recommendations/Recommendations";

const QueryDetailsPage = () => {
    const [activeSection, setActiveSection] = useState('details');
    const query = useLoaderData();
    const { user, createdAt } = query
    const creationTime = formatDistanceToNow(createdAt);
    const { setOpenModal } = useUIContext();
    useEffect(() => {
        setOpenModal(true);
    }, [setOpenModal]);

    const location = useLocation();
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');
        if (section) setActiveSection(section);
        else setActiveSection('details');

    }, [location]);
const navigate = useNavigate();
    const callBack = () =>{
        setOpenModal(false);
        navigate(-1);
    }

    return (
        <div className="w-full">
            <Modal callBack={()=>{callBack()}}>
                <div className="lg:w-[1000px] h-screen lg:max-h-[800px] overflow-y-scroll scrollbar-custom">
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <img
                                src={user?.photo ? user.photo : 'https://via.placeholder.com/40'}
                                alt={user.name}
                                className="w-14 h-14 rounded-full"
                            />
                            <div className="ml-3">
                                <p className="font-medium text-zinc-900">{user.name}&apos;s Query</p>
                                <p className="text-sm text-zinc-700">{creationTime}</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <div>
                            <div className="border-b lg:space-x-10 border-gray-200">
                                <button onClick={() => setActiveSection('details')} className={`shrink-0 border-b-2 px-1 pb-2 font-semibold ${activeSection === 'details' ? 'text-action border-action' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'} `} > Details </button>
                                <button onClick={() => setActiveSection('recommendations')} className={`shrink-0 border-b-2 px-1 pb-2 font-semibold ${activeSection === 'recommendations' ? 'text-action border-action' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'} `} > Recommendations </button>
                                <button onClick={() => setActiveSection('comments')} className={`shrink-0 border-b-2 px-1 pb-2 font-semibold ${activeSection === 'comments' ? 'text-action border-action' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'} `} > Comments </button>
                            </div>
                            <div>
                                {
                                    activeSection === 'details' ? <QueryDetails query={query}></QueryDetails> : activeSection === 'comments' ? <Comments></Comments> : <Recommendations query={query}></Recommendations>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default QueryDetailsPage;