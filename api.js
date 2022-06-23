const loadNews = async() => {
    const date = new Date();
    let year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
    const response = await fetch("https://videogames-news2.p.rapidapi.com/videogames_news/recent", {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '35b232ebc6msh11d00524cffaec5p14ee45jsnc18fa69ad6f9',
            'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
        }
    });
    console.log(response);
    const results = await response.json();
    console.log(results);
    let data = '';
    for (i = 0; i < results.length; i++) {
        const color = ['info','success','warning','danger'];
        j = i;
        if(j%4===0){
            j = 0;
        }else if(j%4===1){
            j = 1;
        }else if(j%4===2){
            j = 2;
        }else if(j%4===3){
            j = 3;
        }
        data = data + 
        `
        <div class="col">
            <div class="card bg-transparent shadow border-bottom border-0 border-${color[j]} h-100" onclick="location.href='${results[i].link}';">
                <img src="${results[i].image}" class="card-img dark-img h-80" alt="image">
                <div class="card-img-overlay">
                    <h5 class="card-title text-light">${results[i].title}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text text-limit">${results[i].description}</p>
                    <a href="${results[i].link}">Read more..</a>
                    <p class="card-text"><small class="text-muted">${results[i].date}</small></p>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("loadButton").style.display = "block";
    document.getElementById("newsList").innerHTML = data;
}

const loadMoreNews = async() => {
    const response = await fetch("https://videogames-news2.p.rapidapi.com/videogames_news/recent", {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '35b232ebc6msh11d00524cffaec5p14ee45jsnc18fa69ad6f9',
            'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
        }
    });

    console.log(response);
    const results = await response.json();
    console.log(results);
    let data = '';
    for (i = 0; i < results.length; i++) {
        const color = ['info','success','warning','danger'];
        j = i;
        if(j%4===0){
            j = 0;
        }else if(j%4===1){
            j = 1;
        }else if(j%4===2){
            j = 2;
        }else if(j%4===3){
            j = 3;
        }
        data = data + 
        `
        <div class="col">
            <div class="card bg-transparent shadow border-bottom border-0 border-${color[j]} h-100" onclick="location.href='${results[i].link}';">
                <img src="${results[i].image}" class="card-img dark-img h-80" alt="image">
                <div class="card-img-overlay">
                    <h5 class="card-title text-light">${results[i].title}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text text-limit">${results[i].description}</p>
                    <a href="${results[i].link}">Read more..</a>
                    <p class="card-text"><small class="text-muted">${results[i].date}</small></p>
                </div>
            </div>
        </div>
        `
    }

    var newsList = document.getElementById("newsList");
    var newNewsList = document.createElement("div");
    newNewsList.innerHTML = data;

    while (newNewsList.firstChild) {
        newsList.appendChild(newNewsList.firstChild);
    }
}

const searchNews = async() => {
    const inputSearch = document.getElementById("search").value;
    console.log(inputSearch);
    const response = await fetch(`https://videogames-news2.p.rapidapi.com/videogames_news/search_news?query=${inputSearch}`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '676fc9beb6mshfa04cae328b8583p126a0ajsn678b8d9dee7f',
            'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
        }
    });
    console.log(response);
    const results = await response.json();
    console.log(results);
    let data = '';
    for (i = 0; i < results.length; i++) {
        const color = ['info','success','warning','danger'];
        j = i;
        if(j%4===0){
            j = 0;
        }else if(j%4===1){
            j = 1;
        }else if(j%4===2){
            j = 2;
        }else if(j%4===3){
            j = 3;
        }
        data = data + 
        `
        <div class="col">
            <div class="card bg-transparent shadow border-bottom border-0 border-${color[j]} h-100" onclick="location.href='${results[i].link}';">
                <img src="${results[i].image}" class="card-img dark-img h-80" alt="image">
                <div class="card-img-overlay">
                    <h5 class="card-title text-light">${results[i].title}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text text-limit">${results[i].description}</p>
                    <a href="${results[i].link}">Read more..</a>
                    <p class="card-text"><small class="text-muted">${results[i].date}</small></p>
                </div>
            </div>
        </div>
        `
    }
    const newsResultList = document.getElementById("newsResultList");
    document.getElementById("newsResult").style.display = "block";
    
    newsResultList.innerHTML = data;
}