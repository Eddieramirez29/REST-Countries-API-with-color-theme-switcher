const button = document.getElementById("mode");
const containerCard = document.querySelector(".containerCard");



//Create new card that contains country information and flag
button.addEventListener("click", function()
{
    const div = document.createElement("div");
    const img = document.createElement('img');
    const div2 = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    // Asigna un id/class al nuevo elemento
    div.classList.add('card');
    img.id = "flag";
    div2.id = 'text';
    p1.id = "nameCountry";
    p2.id = "population";
    p3.id = "region";
    p4.id = "capital";

    //Estilos
    div.style.marginTop = "50px";
    div.style.borderRadius = "10px";

    //add content
    img.src = "./media/Flag_of_Germany.svg.png";
    p2.textContent = 'Population:';
    p3.textContent = 'Region:';
    p4.textContent = 'Capital:';

    //Append children
    containerCard.appendChild(div);
    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(p4);
})