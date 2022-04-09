class UI
{
    
static addFilmToUI(NewFilm)
{
    const FilmList = document.getElementById("films");

    FilmList.innerHTML += 
    `
    <tr>
    <td><img src="${NewFilm.Url}" class="img-fluid img-thumbnail"></td>
    <td>${NewFilm.Title}</td>
    <td>${NewFilm.Director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    <tr>

    `;
}

static clearInputs (Element1,Element2,Element3)
{
    Element1.value = "";
    Element2.value = "";
    Element3.value = "";
}

static DisplayMessage (Message , type)
{
    const CardBody = document.querySelectorAll(".card-body")[0];
    // Alert Divi Oluşturma

    const Div = document.createElement("div");

    Div.className = `aler alert-${type}`;
    Div.textContent = Message;

    CardBody.appendChild(Div);

    setTimeout(function()
    {
        Div.remove();
    },2000);
}

static DeleteFilmFromUI(element)
{
    element.parentElement.parentElement.remove();
}

static ClearAllFilmsFromUI()
{
    const FilmList = document.getElementById("films");

    // çocuk olduğu sürece sile sile git
    while(FilmList.firstElementChild !== null)
    {
        FilmList.firstElementChild.remove();
    }
}

}
