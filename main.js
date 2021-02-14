console.log(axios);

async function displayStarWars() {
    // console.log(Hi!)
    const response = await axios.get("https://swapi.dev/api/people/"
    );

}

displayStarWars();

