export const separateByCommas = (arrStr: string[]) => {
    let convertedStr = "";

    for (let i = 0; i < arrStr.length; i++) {
        if(i == 0) {
            convertedStr = arrStr[i];
        } else {
            convertedStr =  convertedStr + ", " + arrStr[i]
        }
    }

    return convertedStr;
}