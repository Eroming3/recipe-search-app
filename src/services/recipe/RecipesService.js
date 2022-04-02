async function GetRecipes(query,id,key) {
    const data = await fetch('https://api.edamam.com/search?q=' + query + '&app_id=' + id + '&app_key=' + key);
    return await data.json();  
}

export {
    GetRecipes
}