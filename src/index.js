// write your code here
// get pics 
// place pics in div with id of ramen-menu
// DOMcontentLoaded (wait for page to load)
// create img tag inside of #ramen-menu div
// 

// const ramenForm = document.getElementById('new-ramen');
// ramenForm.addEventListener("submit", handleForm)

const ramenPic = document.querySelector('#ramen-menu').addEventListener('data', e => {
    imageUpload(e)
})

fetch ('http://localhost:3000/ramens')
    .then(response => response.json())
    .then (data => console.log(data));

function getImg () {
    document.querySelector('[#4]')
    let imgsrc = "./assets/ramen/gyukotsu.jpg"
    document.appendChild(imgsrc);
} 
console.log (getImg);
        

// document.querySelector('#ramen-menu');


// form submission for new ramen


// handleForm (e) ()=>
//     e.preventDefault();
//     const form = e.target;
//     const url = form.action;
//     const formData = new FormData(form);
//     const responseData = postFormData ({url, formData});
//     console.log ({responseData})