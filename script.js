document.addEventListener('DOMContentLoaded', () => {

    const searchText = document.getElementById('city-input');
    const searchButton = document.querySelector('.btn.btn-lg.btn-dark');
    const searchCity = document.getElementById('city-name');
    const weatherText = document.getElementById('weather-type');
    const tempText=document.getElementById('temp');
    const minTempText=document.getElementById('min-temp');
    const maxTempText=document.getElementById('max-temp');
   
    
        searchButton.addEventListener("click", () => {
            let cityValue=getCity();
        
            getWeatherDeatils(cityValue)
        })

        const getCity = () =>{
    
            return searchText.value;
        }
        
        
        const getWeatherDeatils = async (city) => 
        {
           
            let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '480cc469f6mshdfc740ddc62b508p11eb08jsne7d26f8e4a48',
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                showWeatherinApp(result.cloud_pct,result.temp,result.min_temp,result.max_temp)
            } catch (error) {
                console.error(error);
            }
        }

        const showWeatherinApp = (cpct,temp,min,max) =>{
            searchCity.innerText=getCity();
            tempText.innerText=temp
            minTempText.innerText=min
            maxTempText.innerText=max
            cpct >50 ? weatherText.innerText='Cloudy':weatherText.innerText='Sunny'

        }
      });
     





