import { useEffect, useState } from 'react';
import AddNewQueryButton from '../../components/buttons/AddNewQueryButton';
import NoDataFound from '../../components/common/NoDataFound';
import Query from '../../components/Queries/Query';
import useAPIData from '../../hooks/useAPIData';
import Spinner from '../../components/common/Spinner';
import DropDown from '../../components/common/DropDown';
import SearchBar from '../../components/buttons/SearchBar';
import { Link } from 'react-router';
const QueriesPage = () => {
    const [queries, setQueries] = useState([]);
    const [api, setApi] = useState('/queries');
    const { data, loading, error } = useAPIData({ API: api });

    const [selectedValues, setSelectedValues] = useState({
        sort: 'Newest',
        filter: 'All',
        column: "3"
    });

    const handleSelectionChange = (key, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const sortOptions = ['Newest', 'Oldest', 'Recommendations'];
    const filterOptions = ['All', 'Category', 'Date Range', 'Recommendations'];
    const columnOptions = ["1", "2", "3", "4"];


    const message = <p>
        Hey there! 👋 It seems there aren’t any queries yet. <br />
        Curious about something? Feel free to explore or start a <span className='text-action'>Query</span>. 😊
    </p>;
    useEffect(() => {
        if (!loading && !error)
            setQueries(data)
    }, [data, loading, error]);
    // useEffect(()=>{
    //     const classList = document.getElementById('query-container')?.classList;
    //     // console.log(classList);
    // },[]);
    const [search, setSearch] = useState();
    const handleSearch = () => {
        setApi(`/queries/?search=${search}`);
    }
    return (
        <div className='py-10 space-y-10'>
            {
                queries?.length ?
                    <section className='space-y-10'>
                        <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center justify-between'>
                            <h1 className="font-logo text-4xl">Queries For You</h1>
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
                            <div id='query-container' className={`grid md:grid-cols-2 lg:grid-cols-${selectedValues.column} gap-6`}>
                                {
                                    loading ? <Spinner></Spinner> :
                                        queries.map((query) => <Query query={query} key={query._id}></Query>)
                                }
                            </div>
                        </section>
                    </section> :
                    <NoDataFound
                        message={message}>
                        <Link to='/my-queries'><AddNewQueryButton></AddNewQueryButton></Link>
                    </NoDataFound>
            }
        </div>
    );
};

export default QueriesPage;
