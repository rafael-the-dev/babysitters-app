
import { FilterContextProvider } from "src/context"
import Search from "src/components/search-form";

const Container = () => {
    
    return (
        <main className="px-5 pt-4">
            <FilterContextProvider>
                <Search />
            </FilterContextProvider>
        </main>
    );
};

export default Container;