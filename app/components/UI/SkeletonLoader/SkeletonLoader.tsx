import {FC} from "react";
import Skeleton, {SkeletonProps} from "react-loading-skeleton";
import {useTheme} from "next-themes";

const SkeletonLoader: FC<SkeletonProps> = ({className, ...rest}) => {
    const {theme} = useTheme();
    const baseColor = theme === 'dark' ? '#727272' : '#E4E4E4';
    const highlightColor = theme === 'dark' ? '#888888' : '#D5D5D5';

    return (
        <Skeleton
            {...rest}
            baseColor={baseColor}
            highlightColor={highlightColor}
            className={className}
        />
    );
};

export default SkeletonLoader;