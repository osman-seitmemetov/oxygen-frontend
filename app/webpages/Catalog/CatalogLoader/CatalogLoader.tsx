import React, {FC} from "react";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


interface CatalogProps {
}

const Catalog: FC<CatalogProps> = () => {

    return (
        <>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
            <SkeletonLoader borderRadius={10} height={130}/>
        </>
    );
}

export default Catalog;