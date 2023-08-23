import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Contacts from "@/webpages/Contacts/Contacts";
import Meta from "@/lib/Meta/Meta";

const ContactPage: NextPage = () => {
    return (
        <Meta title="Контакты" description="">
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Contacts />
            </div>
            <Footer/>
        </Meta>
    )
}

export default ContactPage;