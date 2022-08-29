fetch("https://random-word-api.herokuapp.com/word?number=1")
.then(response => response.json())
.then(data => {
    const characters = [...data[0]]
    console.log(characters)
})