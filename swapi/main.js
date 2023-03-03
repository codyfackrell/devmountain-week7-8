const button = document.querySelector("button");

const btnClick = () => {
    axios.get('https://swapi.dev/api/planets?search=Alderaan').then((res) => {
        const residents = res.data.results[0].residents

        for(let i = 0; i < residents.length; i++) {
            axios.get(residents[i]).then((res) => {
                const displayName = document.body.appendChild(document.createElement('h2'));
                displayName.textContent = res.data.name
            })
        }
    })
}

button.addEventListener('click', btnClick)