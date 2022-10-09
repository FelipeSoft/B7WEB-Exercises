const c = (el) => document.querySelector(el);

c('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    var input = c('#searchInput').value;

    if(input !== ''){
        clearInfo();
        showWarning('Carregando...')
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=042d2a654301a472f733edd7410acc4c&units=metric&lang=pt_br`
        var request = await fetch(url);
        var json = await request.json();
        console.log(json);
        if(json.cod == 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg,
                temp: json.main.temp,
                icon: json.weather[0].icon
            })
        } else {
            clearInfo();
            showWarning('Não foi possível encontrar esta localização.')
        }
    }

});

function showInfo(json){
    showWarning('');
    c('.resultado').style.display = 'block';
    c('.titulo').innerHTML = `${json.name}, ${json.country}`;
    c('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    c('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.icon}@2x.png`);
    c('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
    c('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`;
}

function showWarning(message){
    c('.aviso').innerHTML = message;
}

function clearInfo(){
    c('.resultado').style.display = 'none';
}