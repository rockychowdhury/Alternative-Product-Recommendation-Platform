
import { useEffect, useState } from 'react';
import AddNewQueryButton from '../../components/buttons/AddNewQueryButton';
import NoDataFound from '../../components/common/NoDataFound';
import useAuth from '../../hooks/useAuth';
import Query from '../../components/Queries/Query';
import useUIContext from '../../hooks/useUIContext';
import AddQuery from '../../components/Queries/AddQuery';
import useAPIData from '../../hooks/useAPIData';
import Spinner from '../../components/common/Spinner';
import DropDown from '../../components/common/DropDown';
import SearchBar from '../../components/buttons/SearchBar';
const MyQueriesPage = () => {
    const [queries, setQueries] = useState([]);
    const [api, setApi] = useState('/my-queries');
    const { setOpenModal } = useUIContext();
    const { user } = useAuth();
    const { data, loading, error } = useAPIData({ API: api });

    const [selectedValues, setSelectedValues] = useState({
        sort: 'Newest',
        filter: 'All',
        column: "3"
    });
    const [gridColumn, setGridColumn] = useState('grid-cols-3');
    const handleSelectionChange = (key, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const sortOptions = ['Newest', 'Oldest', 'Recommendations'];
    const filterOptions = ['All', 'Category', 'Date Range', 'Recommendations'];
    const columnOptions = ["1", "2", "3", "4"];

    useEffect(() => {
        setGridColumn(`grid-cols-${selectedValues.column}`)
    }, [selectedValues.column])
    const first_name = user?.displayName.split(" ")[0];
    const message = <p>
        Hey <span className='text-action font-poppins font-bold'>{first_name}</span>, it looks like you haven’t added any queries yet.
        Ready to get started? 😊
    </p>;
    useEffect(() => {
        if (!loading && !error)
            setQueries(data)
    }, [data, loading, error]);
    const [search, setSearch] = useState();
    const handleSearch = () => {
        setApi(`/queries/?search=${search}`);
    }
    return (
        <div className='py-10 space-y-10'>
            {
                queries.length ?
                    <section className='space-y-10'>
                        <section className="relative bg-gradient-to-br from-orange-600 via-black to-black text-white mb-20 py-20">
                            <div className="container mx-auto px-6 text-center">
                                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
                                    Your Voice Shapes the Future
                                </h1>
                                <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                                    Every query you post is a step toward creating a world where better alternatives thrive.
                                    Dive into your past contributions, monitor their impact, and keep the conversation alive.
                                </p>
                                <p className="italic mb-12">
                                    &quot;The smallest question can spark the biggest change.&quot;
                                </p>
                                <button onClick={() => setOpenModal(true)}><AddNewQueryButton></AddNewQueryButton></button>
                            </div>
                            {/* Decorative Elements
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
                            <div className="absolute -bottom-8 right-0 w-48 h-48 bg-orange-500 rounded-full blur-3xl opacity-40 z-0"></div> */}
                        </section>
                        <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center justify-between'>
                            <h1 className="font-logo text-4xl">My Queries</h1>
                            <div> <SearchBar handleSearch={handleSearch} search={search} setSearch={setSearch}></SearchBar></div>
                            <div className='flex gap-4'>
                                <div><DropDown key={"filter"} selected={selectedValues.filter} options={filterOptions} setSelected={(value) => handleSelectionChange('filter', value)}></DropDown></div>
                                <div>
                                    <DropDown key={"sort"} selected={selectedValues.sort} options={sortOptions} setSelected={(value) => handleSelectionChange('sort', value)}></DropDown>
                                </div>
                                <div>
                                    <DropDown key={"column"} selected={selectedValues.column} options={columnOptions} setSelected={(value) => handleSelectionChange('column', value)}></DropDown>
                                </div>
                            </div>
                        </div>
                        <section>
                            <div className={`grid md:grid-cols-2 xl:${gridColumn}  gap-6`}>
                                {
                                    loading ? <Spinner></Spinner> :
                                        queries.map((query) => <Query query={query} personal={true} key={query._id}></Query>)
                                }
                            </div>
                        </section>
                    </section> :
                    <NoDataFound
                        message={message}>
                        <button onClick={() => setOpenModal(true)}><AddNewQueryButton></AddNewQueryButton></button>
                    </NoDataFound>
            }
            <AddQuery></AddQuery>
        </div>
    );
};

export default MyQueriesPage;