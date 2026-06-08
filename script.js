const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
let outputDiv = document.getElementById("output");
let errorDiv = document.querySelector(".error");
let loadingDiv = document.createElement('div');
let downloadBtn = document.getElementById("download-images-button");

downloadBtn.addEventListener('click', getData);

function Promise1(){
    return new Promise((resolve, reject) => {
        fetch(`${images[0].url}`).then((response) => {
            resolve(images[0].url);
        }).catch((error) => {
            console.log(error);
        })
    })
    
}

function Promise2(){
    return new Promise((resolve, reject) => {
        fetch(`${images[1].url}`).then((response) => {
            resolve(images[1].url);
        }).catch((error) => {
            console.log(error);
        })
    })
    
}

function Promise3(){
    return new Promise((resolve, reject) => {
        fetch(`${images[2].url}`).then((response) => {
            resolve(images[2].url);
        }).catch((error) => {
            console.log(error);
        })
    })
}

function downloadImage(){
    loadingDiv.textContent = "loading..."
    loadingDiv.setAttribute("id", "loading");
    outputDiv.appendChild(loadingDiv);
    return Promise.all([Promise1(), Promise2(), Promise3()]);
}

function getData(){
    downloadImage().then((response) => {
        console.log(response);
        loadingDiv.remove();
        response.forEach((elem) => {
            let img = document.createElement('img');
            img.setAttribute("src", elem);
            outputDiv.appendChild(img);
        })
    }).catch((error) => {
        loadingDiv.remove();    
        let errorDiv = document.createElement('div');
        errorDiv.setAttribute("id", "error");
        errorDiv.textContent = "Something went wrong";
        outputDiv.appendChild(errorDiv);
        console.log(error);
    })
}

