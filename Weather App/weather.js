let city = document.getElementById('city')
let type = document.getElementById('type')
let temp = document.getElementById('temp')
let image = document.getElementById('img')
let input = document.getElementById('inp')
let API_key = 'a91200c71c1c5b33501a66a027a050e9';

const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=Metric`)
    console.log(getData)
    let jsonData = await getData.json()
    console.log(jsonData)
    console.log(jsonData.name)

    if (jsonData.cod == '400'){
        alert('Please Enter Location')
        image.src='error1.png'
        city.innerHTML=''
        temp.innerHTML=''
        type.innerHTML=''
    }
    if (jsonData.cod == '404'){
        alert('Please Enter Write Location')
        image.src='error2.png'
        city.innerHTML=
        temp.innerHTML=''
        type.innerHTML=''
    }
    city.innerHTML=jsonData.name
    temp.innerHTML=Math.floor(jsonData.main.temp)+'°C'
    type.innerHTML=jsonData.weather[0].main

    if(type.innerHTML == 'Clouds'){
        image.src='./images/cloud.png'
    }else if(type.innerHTML == 'Clear'){
        image.src='./images/clear.png'
    }else if(type.innerHTML == 'Rain'){
        image.src='./images/Rain.png'
    }else if(type.innerHTML == 'Snow'){
        image.src='./images/snow.png'
    }else if(type.innerHTML == 'Haze'){
        image.src='./images/haze.png'
    }else if(type.innerHTML == 'Strom'){
        image.src='./images/strom.png'
    }else if(type.innerHTML == 'Mist'){
        image.src='./images/mist.png'
    }
    input.value=''
}
function myfunc(){
    search=(input.value)
    data(search)
}
