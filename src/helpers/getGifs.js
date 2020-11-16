
export const getGifs = async ( category ) => {
    const apiKey = 'qMrVfTdIChv3GofVc5kfLghfsC2muGNf';
    const limit = 12;
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${apiKey}`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data
            .map( img => ({
                        id: img.id, 
                        title: img.title, 
                        url: img.images?.downsized_medium.url 
                    }));
    return( gifs );
}