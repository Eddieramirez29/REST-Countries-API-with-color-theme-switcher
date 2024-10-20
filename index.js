const button = document.getElementById("mode");
const containerCard = document.querySelector(".containerCard");

const div = document.createElement("div");
div.classList.add('card');


const input = document.getElementById('input');
const countries = document.getElementById('countries');
const containerSearch = document.querySelector('.containerSearch');
const containerMenu = document.querySelector('.containerMenu');

//Get body
const body = document.body;
const header = document.querySelector('header');
let selectColor = 0;
let backgroundColorVariableDark = "hsl(209, 23%, 22%)";
let backgroundColorVariableDarker = "hsl(207, 26%, 17%)";

let colorLight = "white";
let colorDark = "black";

let counterFlags = 0;

button.addEventListener("click", function()
{
    switch(selectColor)
    {
        case 0:
            //Change background colors
            body.style.backgroundColor = backgroundColorVariableDarker;
            button.style.backgroundColor = backgroundColorVariableDarker;
            input.style.backgroundColor = backgroundColorVariableDark;
            containerSearch.style.backgroundColor = backgroundColorVariableDark;
            header.style.backgroundColor = backgroundColorVariableDark;
            containerMenu.style.backgroundColor = backgroundColorVariableDark;
            div.style.backgroundColor = backgroundColorVariableDark;
            countries.style.backgroundColor = backgroundColorVariableDark;
            //Change letter colors
            body.style.color = colorLight;
            button.style.color = colorLight;
            input.style.color = colorLight;
            containerSearch.style.color = colorLight;
            header.style.color = colorLight;
            containerMenu.style.color = colorLight;
            div.style.color = colorLight;
            countries.style.color = colorLight;


            backgroundColorVariableDarker = "white";
            backgroundColorVariableDark = "white";
            selectColor = 1;
        break;
        case 1:
            body.style.backgroundColor = backgroundColorVariableDarker;
            button.style.backgroundColor = backgroundColorVariableDarker;
            input.style.backgroundColor = backgroundColorVariableDark;
            containerSearch.style.backgroundColor = backgroundColorVariableDark;
            header.style.backgroundColor = backgroundColorVariableDark;
            containerMenu.style.backgroundColor = backgroundColorVariableDark;
            div.style.backgroundColor = backgroundColorVariableDark;
            countries.style.backgroundColor = backgroundColorVariableDark;

            body.style.color = colorDark;
            button.style.color = colorDark;
            input.style.color = colorDark;
            containerSearch.style.color = colorDark;
            header.style.color = colorDark;
            containerMenu.style.color = colorDark;
            div.style.color = colorDark;
            countries.style.color = colorDark;

            backgroundColorVariableDarker = "hsl(207, 26%, 17%";
            backgroundColorVariableDark = "hsl(209, 23%, 22%)";
            selectColor = 0;
        break;
    }
    
});

let Americas;
let americaCountries = [];
let regionsArray = [];
let region;
let population;
let counter = 0;

function extractFlags()
{
    return fetch("https://restcountries.com/v3.1/all")
    .then( response => {
        if (!response.ok)
        {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data =>
        {
            // console.log(data[15]);
            console.log(data[0]);
            // region = data[0].region;
            population = data[0].population;
            console.log(population);
            //This creates a new array called Americas
            Americas = data.filter(country => country.region === 'Americas');

            

            Americas.forEach(country => {
            americaCountries.push(country.name.common);
            regionsArray[counter] = (country.region);
            counter++;
        });
        counter = 0;


        }
    )
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}




//Create new card that contains country information and flag
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        
        extractFlags().then(() => { // Waits til extractFlags is complete
            region = regionsArray[counter];
            americaCountries.forEach(country =>
            {
            const img = document.createElement('img');
            const div2 = document.createElement('div');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const p4 = document.createElement('p');

            // Asigna un id/class al nuevo elemento
            const div = document.createElement("div");
            div.classList.add('card');
            
            img.id = "flag";
            div2.id = 'text';
            p1.id = "nameCountry";
            p2.id = "population";
            p3.id = "region";
            p4.id = "capital";

            //Styles
            div.style.marginTop = "25px";  
            div.style.marginBottom = "25px";
            div.style.borderRadius = "10px";

            //Add content
            img.src = "./media/Flag_of_Germany.svg.png";
            p2.textContent = 'Population: ' + population;
            // regions.forEach(region =>
            // {
            p3.textContent = 'Region: ' + region;
            counter++;
            // });
            
                p4.textContent = 'Capital: ' + country;
            

            //Append children
            containerCard.appendChild(div);
            div.appendChild(img);
            div.appendChild(div2);
            div2.appendChild(p1);
            div2.appendChild(p2);
            div2.appendChild(p3);
            div2.appendChild(p4);
        }); // Cerrado correctamente el then
    });
    }
}); // Cerrado correctamente el addEventListener