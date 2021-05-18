    let favNumber = 2;

    let url =  "http://numbersapi.com"

    $.getJSON(`${url}/${favNumber}?json`)
        .then(data=>{
            console.log(data)
        })
    
    
    $.getJSON(`${url}/1..4,9?json`)
        .then(data=>{
            console.log(data)
        })

    for(i=0; i<4; i++){
        $.getJSON(`${url}/${favNumber}?json`)
        .then(data=>{
            $("#result").append(`<p>${data.text}</p>`)
        })
    }
        