import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ handleSearch, search, setSearch }) => {
    return (
        <div className="w-fit">
            <label className="flex items-center border border-action rounded-full px-4" htmlFor="">
                <input
                    defaultValue={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-none focus:outline-none focus:ring-0 active:outline-none"
                    type="text"
                    placeholder="What are you looking for?"
                />
                <button onClick={handleSearch}><FaSearch className="text-action"></FaSearch></button>
            </label>
        </div>
    );
};
SearchBar.propTypes = {
    handleSearch: PropTypes.func,
    setSearch: PropTypes.func,
    search: PropTypes.string
}
export default SearchBar;