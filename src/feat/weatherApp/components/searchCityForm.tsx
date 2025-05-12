import {useRef} from "react";
import {newCitySearch, SearchCityFormProps} from "../types/weatherApp";


const SearchCityForm = ({setCityName}: SearchCityFormProps) => {
    const searchInput = useRef<HTMLInputElement>(null);

    const newCitySearch: newCitySearch = (event) => {
        event.preventDefault();
        if (!searchInput.current || searchInput.current.value.trim() === "") {
            return;
        }
        setCityName(searchInput.current.value);
        searchInput.current.value = "";
    }

    return (
        <form onSubmit={newCitySearch} className="weatherSearch">
            <input
                ref={searchInput}
                placeholder="Enter a City..."
                name="citySearch"
                className="weatherSearch__input"
            />
        </form>
    );
};

export default SearchCityForm;