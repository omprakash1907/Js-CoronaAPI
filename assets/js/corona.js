const cities = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
]

function weather() {

    var city = document.getElementById('cityName').value

    $.ajax({
        url: `https://data.covid19india.org/data.json`,
        dataType: 'json',
        method: 'GET',
        success: function (res) {
         
                for(var i=0;i<res.statewise.length;i++){
                    if(city == res.statewise[i].state){
                        document.getElementById('city').innerHTML = city;
                        document.getElementById('Confirmed').innerHTML = res.statewise[i].confirmed;
                        document.getElementById('active').innerHTML = res.statewise[i].active;
                        document.getElementById('recovered').innerHTML = res.statewise[i].recovered;
                        document.getElementById('death').innerHTML = res.statewise[i].deaths;
                    }

                }
                
                
        
        }
    })
}

weather()

function search(e){
    const value = e.value.toUpperCase()
    const searchList = document.querySelector('#search-list')
    searchList.innerHTML = ''

    if(value.length>0){
        cities.forEach(city=>{
            const upperCity = city.toUpperCase()
            if(upperCity.startsWith(value)){
                searchList.innerHTML += `<li><button onclick="selectOption(this)" class="border-0 bg-transparent text-white mb-2 w-75 text-start">${city}</button> <i class="fa-solid fa-forward"></i></li>`
                document.querySelector('#search-box').style.display = "block"
            } 
            
        })
    }


}

function selectOption(e) {
    const cityInput = document.getElementById('cityName')
    cityInput.value = e.innerHTML;
    document.querySelector('#search-box').style.display = "none"
    document.querySelector('#result').style.display = "block"
    weather()
}