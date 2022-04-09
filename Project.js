const Form = document.querySelector("#film-form");
const TitleElement = document.querySelector("#title");
const DirectorElement = document.querySelector("#director");
const UrlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const ClearAll = document.querySelector("#clear-films");


// Tüm Eventleri Çalıştırma
EventListener();

function EventListener()
{
    Form.addEventListener("submit" , addFilm);
    // Sayfa Yenilendiğinde Storage Dataları Sayfaya Gelsin
    document.addEventListener("DOMContentLoaded", function()
    {
        let Films = Storage.StorageControl();
        Films.forEach(Film => 
        {
            UI.addFilmToUI(Film);
        });
    });

    // Buttonlar filmleri Silme
    cardbody.addEventListener("click", DeleteFilm);

    // Tüm Filmleri Tek Butonla Silme

    ClearAll.addEventListener("click" , ClearAllFilms);
}

function addFilm(e)
{
    const Title = TitleElement.value;
    const Director = DirectorElement.value;
    const Url = UrlElement.value;

    if(Title == "" || Director == "" || Url == "")
    {
        // Title veya director veya url boş olursa hata mesajı yazdırt
        UI.DisplayMessage("Tüm Alanları Doldurun..." , "danger");
    }

    else
    {
        // Film Js yi Bağlama
        const NewFilm = new Film(Title,Director,Url);

        // Arayüze Film Ekleme
        UI.addFilmToUI(NewFilm);

        // Değerleri Storage a Atma
        Storage.addFilmToStorage(NewFilm);

        // Inputlar Dolu Olursa Button Ekleme
        UI.DisplayMessage("Film Başarıyla Eklendi" ,"success");
    }


    UI.clearInputs(TitleElement,UrlElement,DirectorElement);
    e.preventDefault();

}

function DeleteFilm(e)
{
    if(e.target.id === "delete-film")
        {
            UI.DeleteFilmFromUI(e.target);
            
            Storage.DeleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

            UI.DisplayMessage("Silme İşlemi Başarılı..." ,"success");
        }
}

function ClearAllFilms()
{
    if(confirm("Emin Misiniz ?"))
    {
        UI.ClearAllFilmsFromUI();
        Storage.ClearAllFilmsFromStorage();
        UI.DisplayMessage("Bütün Filmler Temizlendi...","success");
    }
    
}