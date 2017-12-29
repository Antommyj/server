// write a function to retrieve a blob of json
// make an ajax request! use the 'fetch' function.
// API Address: https://rallycoding.herokuapp.com/api/music_albums


// Old way of using asynchronous function
// function fetch_albums(){
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//         .then((res) => res.json())
//         .then((json) => console.log(json))
// }

// New way of using the async function
const fetch_albums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
};

// Call this function fetch_albums()