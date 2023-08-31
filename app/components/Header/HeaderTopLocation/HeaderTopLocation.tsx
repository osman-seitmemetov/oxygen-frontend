import {FC, useState} from "react";
import LocationIcon from "@/assets/img/location-icon.svg";
import styles from "./HeaderTopLocation.module.scss";
import Image from "next/image";
import LocationModal from "@/UI/modals/LocationModal/LocationModal";


interface HeaderTopLocationProps {}

const HeaderTopLocation: FC<HeaderTopLocationProps> = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <div onClick={() => {setActive(true)}} className={styles.location}>
                <Image
                    src={LocationIcon}
                    alt="icon"
                    className={styles.location__icon}
                    width={16}
                    height={16}
                />
                <span>Севастополь</span>
            </div>

            <LocationModal active={active} setActive={setActive} />
        </>
    );
};

export default HeaderTopLocation;