class Storage
{
    static addFilmToStorage(NewFilm)
{
    let Films = this.StorageControl();

    Films.push(NewFilm);

    localStorage.setItem("Films" ,JSON.stringify(Films));
}

// Değer Storage da varmı Kontrolü
    static StorageControl()
{
    
    let Films;

    if(localStorage.getItem("Films") == null)
    {
        Films = [];
    }

    else
    {
        Films = JSON.parse(localStorage.getItem("Films"));
    }

    return Films;
}

//Storage dan veri Silme
static DeleteFilmFromStorage(FilmTitle)
{
    let Films = this.StorageControl();

    Films.forEach(function(film,index){
        if(film.Title === FilmTitle){
            Films.splice(index,1);
        }
    });

    localStorage.setItem("Films" , JSON.stringify(Films));
}

static ClearAllFilmsFromStorage()
{
    localStorage.removeItem("Films");
}
}

