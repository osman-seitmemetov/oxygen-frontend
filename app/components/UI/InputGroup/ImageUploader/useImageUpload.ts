import React, {ChangeEvent, useCallback, useMemo, useState} from "react";
import {useMutation} from "react-query";
import {FileService} from "@/services/FileService";

type TypeUpload = (onChange: (...event: any[]) => void) => {
    uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>,
    isLoading: boolean,
    dragStartHandler: (e: React.DragEvent) => void,
    dragLeaveHandler: (e: React.DragEvent) => void,
    onDropHandler: (e: React.DragEvent) => Promise<void>,
    drag: boolean
}

export const useUpload: TypeUpload = (onChange) => {
    const [isLoading, setIsLoading] = useState(false);
    const [drag, setDrag] = useState(false);

    const {mutateAsync} = useMutation('upload file', (data: FormData) => FileService.upload(data, 'png'), {
        onSuccess: ({data}) => {
            onChange(data.fileName);
        },
        onError: (error) => {
            alert(error);
        }
    })

    const uploadFile = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        const files = e.target.files;
        if (!files?.length) return;

        const formData = new FormData();
        formData.append('file', files[0]);

        await mutateAsync(formData);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [mutateAsync])

    const dragStartHandler = (e: React.DragEvent) => {
        e.preventDefault();
        setDrag(true)
    }

    const dragLeaveHandler = (e: React.DragEvent) => {
        e.preventDefault();
        setDrag(false)
    }

    const onDropHandler = useCallback(async (e: React.DragEvent) => {
        e.preventDefault();
        setIsLoading(true);
        let files = e.dataTransfer.files;
        if (!files?.length) return;

        const formData = new FormData();
        formData.append('file', files[0]);

        await mutateAsync(formData);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        setDrag(false)
    }, [mutateAsync])

    return useMemo(() => ({
        uploadFile, isLoading, dragStartHandler, dragLeaveHandler, onDropHandler, drag
    }), [uploadFile, isLoading, dragStartHandler, dragLeaveHandler, onDropHandler, drag]);
}