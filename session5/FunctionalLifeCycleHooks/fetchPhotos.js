const Authorization = "563492ad6f917000010000016f4a708db82341e084f8fea452c3f7f6";
const BASE_URL = "https://api.pexels.com/v1";

export function fetchPhotos(search) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await fetch(`${BASE_URL}/search?query=${search}&per_page=5&page=1`, {headers: {Authorization}});
            if(response.status !== 200) {
                throw new Error();
            }
            const data = await response.json();
            return resolve(data);
        } catch(error) {
            return reject(error);
        }
    })
}