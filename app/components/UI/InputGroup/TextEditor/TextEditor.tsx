import React, {FC, TextareaHTMLAttributes, useEffect, useState} from 'react';
import styles from './TextEditor.module.scss';
import {ContentState, convertToRaw, EditorProps, EditorState} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import {Editor} from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {FieldError} from "react-hook-form";


interface TextEditorProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: FieldError
}

type TypeEditorPropsField = EditorProps & TextEditorProps;

interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
    onChange: (...event: any[]) => void,
    value: string
}

const TextEditor: FC<ITextEditor> = ({error, value, className, onChange, ...rest}) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        if (!isUpdated) {
            const defaultValue = value ? value : ''
            const blocksFromHtml = htmlToDraft(defaultValue)
            const contentState = ContentState.createFromBlockArray(
                blocksFromHtml.contentBlocks,
                blocksFromHtml.entityMap
            )
            const newEditorState = EditorState.createWithContent(contentState)
            setEditorState(newEditorState)
        }
    }, [value, isUpdated])

    const onEditorStateChange = (editorState: EditorState) => {
        setIsUpdated(true)
        setEditorState(editorState)

        return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }

    return (
        <>
            <div className={styles.wrapper}>
                <Editor
                    toolbarClassName={`${styles.toolbar} ${error && styles.toolbar_error}`}
                    editorClassName={`${styles.editor} ${error && styles.editor_error}`}
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    spellCheck
                    toolbar={{
                        // genders: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
                        options: ['inline', 'list', 'textAlign', 'emoji', 'history'],
                        inline: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
                        },
                        list: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['unordered', 'ordered', 'indent', 'outdent'],
                        },
                        textAlign: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['left', 'center', 'right', 'justify'],
                        },
                        emoji: {
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            emojis: [
                                '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                                '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                                '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                                '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                                '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                                '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                                '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                                '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                                '✅', '❎', '💯'
                            ],
                        },
                        history: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['undo', 'redo'],
                        }
                    }}
                />
            </div>

            {error && <div className={styles.errorLog}>{error.message}</div>}
        </>
    );
}

export default TextEditor;