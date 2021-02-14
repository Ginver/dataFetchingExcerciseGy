console.log(axios);

async function displayStarWars() {
    // console.log(Hi!)
    const response = await axios.get("https://swapi.dev/api/people/"
    );
    console.log("RES:", response.data.results);
    const warsOfStars = document.getElementById("starWars");
    console.log(warsOfStars);

    for (const result of response.data.results) {
        console.log(result);
        const starWarsList = document.createElement("li");

        starWarsList.textContent = `${result.name} - ${result.height} - ${result.skin_color}`
        console.log(starWarsList);

        warsOfStars.appendChild(starWarsList);
    }
}

displayStarWars();

