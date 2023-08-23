import type {NextPage} from 'next'
import {GetStaticProps} from "next";
import About from "@/webpages/About/About";
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Meta from "@/lib/Meta/Meta";
import {AboutService} from "@/services/AboutService";
import {IAbout} from "@/models/IAbout";

const AboutPage: NextPage<{ about: IAbout }> = ({about}) => {
    return (
        <Meta title="О компании" description="">
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <About about={about}/>
            </div>
            <Footer/>
        </Meta>
    )
}

export default AboutPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {data: about} = await AboutService.get();

    return {
        props: {about}
    }
}