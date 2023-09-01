import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminArticles.module.scss";
import {useArticles} from "@/webpages/AdminArticles/useArticles";
import AdminArticleItem from "@/webpages/AdminArticles/AdminArticleItem/AdminArticleItem";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import SkeletonLoader from "@/components/UI/SkeletonLoader/SkeletonLoader";
import Modal from "@/UI/modals/Modal/Modal";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ButtonGroup from "@/UI/buttons/ButtonGroup/ButtonGroup";


const AdminArticles: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data, isLoading,
        deleteAsync, searchTerm, handleSearch
    } = useArticles();
    const articles = data?.data;

    return (
        <Admin title={` > Статьи`}>
            <SecondaryButton
                link="/admin/articles/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >Создать статью</SecondaryButton>

            <HeaderSearch
                isPlaceholderLeft
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск статей"
            />

            {
                isLoading
                    ? <div className={styles.articles}>
                        <SkeletonLoader
                            count={5}
                            style={{
                                height: 90,
                                width: '100%',
                                marginBottom: 20,
                                borderRadius: 10
                            }}
                        />
                    </div>
                    : articles && <div>
                    <div className={styles.articles}>
                        {
                            articles.map(article => (
                                <AdminArticleItem
                                    article={article}
                                    key={article.id}
                                    setActiveModal={setActiveModal}
                                    removeHandler={deleteAsync}
                                    activeModal={activeModal}
                                />
                            ))
                        }
                    </div>
                </div>
            }
        </Admin>
    );
}

export default AdminArticles;

