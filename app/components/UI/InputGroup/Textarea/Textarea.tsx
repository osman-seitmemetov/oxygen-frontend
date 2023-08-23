import React, {FC, TextareaHTMLAttributes} from 'react';
import style from './Textarea.module.scss';
import {FieldError} from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    error?: FieldError
}

const Textarea: FC<TextareaProps> = ({error, className, inputMode = "text", ...rest}) => {
    return (
        <>
            <textarea
                className={`${style.textArea} ${error && style.textArea_error} ${className}`}
                {...rest}
            />

            {error && <div className={style.errorLog}>{error.message}</div>}
        </>
    );
}

export default Textarea;