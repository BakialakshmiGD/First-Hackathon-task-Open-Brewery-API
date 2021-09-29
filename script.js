async  function Api_data(){
    try{
    const url="https://api.openbrewerydb.org/breweries";
    await fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(users){
        getData(users);
    })
    }
    catch(error){
        alert(error);
    };
}
function getData(users){
   let container = document.querySelector("#content");
   container.innerHTML = "";

   let table = document.createElement("table");
    users.forEach(function (inputs){
    let row = table.insertRow();
        let name = row.insertCell();
        name.innerHTML = inputs.name;
        let brewery_type = row.insertCell();
        brewery_type.innerHTML = inputs.brewery_type; 
        let address_2 = row.insertCell();
        address_2.innerHTML = inputs.address_2;
        let address_3 = row.insertCell();
        address_3.innerHTML = inputs.address_3;
        let website_url = row.insertCell();
        website_url.innerHTML = inputs.website_url;
        let phone = row.insertCell();
        phone.innerHTML = inputs.phone
    });

    container.appendChild(table);
}








