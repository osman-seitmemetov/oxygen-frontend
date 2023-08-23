export const isEqualStartPathNames = (href: string, pathname: string) => {
    for (let i = 0; i < href.length; i++) {
        if(href[i] !== pathname[i]) return false;
    }

    return true;
}