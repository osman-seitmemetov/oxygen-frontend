import React, {FC} from "react";
import {useProducts} from "@/webpages/Search/SearchItems/useProducts";
import SearchItems from "@/webpages/Search/SearchItems/SearchItems";
import {useRouter} from "next/router";


const SearchItemsContainer: FC = () => {
    const {products, isLoading} = useProducts();

    return (<SearchItems products={products?.data || []} isLoading={isLoading} />);
}

export default SearchItemsContainer;