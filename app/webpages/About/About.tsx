import {FC} from "react";
import style from './About.module.scss';
import Container from "../../components/Container/Container";
import PictureAboutUs from "../../components/pictures/PictureAboutUs";
import parse from "html-react-parser";
import {IAbout} from "@/models/IAbout";

const About: FC<{ about: IAbout }> = ({about}) => {
    return (
        <section className={style.about}>
            {
                about && <Container className={style.container}>
                    <PictureAboutUs className={style.img}/>
                    <h1 className={style.title + " h1"}>{about.title}</h1>

                    <div className={style.text}>
                        {parse(about.text)}
                    </div>
                </Container>
            }
        </section>
    );
}

export default About;