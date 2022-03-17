// JSON server : fake API server 
var fakeApiPost = "http://localhost:3000/posts"; 
var fakeApiCommnent = "http://localhost:3000/Comment"; 
var fakeApiprofile = "http://localhost:3000/profile";


fetch(fakeApiPost)
    .then(response => response.json())
    .then(value => {
        console.log(value)
        var htmls = '';
        value.forEach( x => { 
            htmls += `<h1>${x.title}</h1>
                        <p>${x.author}</p></br>
            `
        })
        document.querySelector('h1').innerHTML = htmls;
    })