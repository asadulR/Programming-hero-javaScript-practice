const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    // console.log(searchFieldValue)

    searchField.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data))
}




const displaySearchResult = meals => {
    console.log(meals)
    const searchResult = document.getElementById('search-result');
    // for(const meal of meals){
    //     console.log(meal);
    // }

}