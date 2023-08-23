import {FC} from "react"
import style from "./Recaptcha.module.scss"
import RecaptchaImg from "@/assets/img/recaptcha.png";
import Image from "next/image";

interface RecaptchaProps {
    className?: string,
}

const Recaptcha: FC<RecaptchaProps> = ({className}) => {
    return (
        <>
            <div className={style.recaptha} style={{backgroundImage: `url(${RecaptchaImg})`}}>
                <Image
                    alt="recaptcha"
                    src={RecaptchaImg.src}
                    width={380}
                    height={102}
                />
            </div>
        </>
    );
}

export default Recaptcha;