function callWeatherReport(element){
  let city = element.parentElement.firstElementChild.innerText.substring(10)
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0681297bf49f1c0c27fb3b3fe7286117`).then((response) => {
    return response.json();
    //.then

  }).then((data) => {
    alert(`Current temperature is ${data.main.temp - 273.15} degree C`);

  }).catch((error) => {
    console.log(error);
  })
}
//fetch res-countries(data)
let restCountries = fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);


    
    let container = document.createElement("div");
    container.setAttribute("class", "container",);
    document.body.append(container);

    let node;
      
      data.forEach((element) => {
      node = document.createElement("div");
      node.classList.add("card", "text-center", "float-end", );
      node.setAttribute("style", " background-image: linear-gradient(white,grey);color:black ; font-family:Times New Roman, Times, serif; width: 20rem; margin: 3vw; height: 28rem;");
     
    
//card-header
let cardHeader;

      cardHeader = document.createElement("div");
      cardHeader.setAttribute("class", "card-header");
      cardHeader.innerText = element.name;
      node.appendChild(cardHeader);
//Image
let img;

      img = document.createElement("img");
      img.setAttribute("class", "card-img-top");
      img.setAttribute("style","height: 11rem;")
      img.setAttribute("src", element.flag);
      node.appendChild(img);
//card- body
let capital;

      cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "text-center");

      capital = document.createElement("p");
      capital.innerText = `Capital : ` + element.capital;
let Region;

      region = document.createElement("p");
      region.innerText = `Region : ` + element.region;

let countryCode;

      countryCode = document.createElement("p");
      countryCode.innerText = `Country code : ` + element.alpha3Code;

      cardBody.appendChild(capital);
      cardBody.appendChild(region);
      cardBody.appendChild(countryCode);
//Button
let Button;

      button = document.createElement("a");
      button.setAttribute("href", "#");
      button.setAttribute("onclick", "callWeatherReport(this)");
      button.classList.add("btn", "btn-secondary");
      button.innerText = `Click for weather`;
      cardBody.appendChild(button);

      node.appendChild(cardBody);

      container.appendChild(node);
    });

    document.body.append(container);
    })
  