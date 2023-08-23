import React, { FC } from 'react';
import style from './AddFileItem.module.scss';
import TypeTXT from "@/assets/img/type-txt.png";
import TypeDOCX from "@/assets/img/type-docx.png";
import TypePDF from "@/assets/img/type-pdf.png";
import TypeJPG from "@/assets/img/type-jpg.png";
import TypeHTML from "@/assets/img/type-html.png";
import TypeEXE from "@/assets/img/type-exe.png";
import TypeDefault from "@/assets/img/type-default.png";
// import TypeDOC from "@/assets/img/type-doc.png";
import {FileTypes} from "./AddFileItemEnums";
import Image from "next/image";

interface AddFileItemProps {
    file: File
}

const AddFileItem: FC<AddFileItemProps> = ({file}) => {
    let typeImg;
    if(file.type === FileTypes.TXT) {
        typeImg = TypeTXT;
    } else if(file.type === FileTypes.PDF) {
        typeImg = TypePDF;
    } else if(file.type === FileTypes.JPG) {
        typeImg = TypeJPG;
    } else if(file.type === FileTypes.HTML) {
        typeImg = TypeHTML;
    } else if(file.type === FileTypes.EXE) {
        typeImg = TypeEXE;
    } else if(file.type === FileTypes.DOCX) {
        typeImg = TypeDOCX;
    } else {
        typeImg = TypeDefault;
    }

    return (
        <div className={style.item}>
            <Image
                className={style.icon}
                src={typeImg}
                width={26}
                height={26}
            />
            <span>{file.name}</span>
        </div>
    );
}

export default AddFileItem;