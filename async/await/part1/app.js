let favNumber = 2;

let url =  "http://numbersapi.com"


async function getData(){
    let res = await axios.get(`${url}/${favNumber}?json`)
    let listRes = await axios.get(`${url}/1..4,9?json`)
    
    for(i=0; i<4; i++){
        let arrRes = await axios.get(`${url}/${favNumber}?json`)
        $("#result").append(`<p>${arrRes.data.text}</p>`)
    }


    console.log(res.data)
    console.log(listRes.data)
}


getData()
