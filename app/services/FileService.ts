import {axiosClassic} from "../api/interceptots";

export const FileService = {
    async upload(file: FormData, type: string) {
        return await axiosClassic.post<{fileName: string}>('http://localhost:5000/api/upload', {file: file.getAll('file')[0], fileType: type}, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }
}