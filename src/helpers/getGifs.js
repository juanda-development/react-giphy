export const getGifs = async ( category ) => {
    const API_KEY ='j7GY5mX719k1OWFij75Tc7B5DXvDKLNu';   
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(category)}&limit=10`);
    const {data} = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            url: img.images.downsized.url,
            title: img.title
        }
    })
    return gifs;
           
}