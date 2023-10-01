//============================================
// async/await
//============================================
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // console.log(data.results[0].urls.regular);

    //insert img in div
    ShowImg(data);
  }

//============================================
  function ShowImg(data){
    const img0 = document.createElement('img');
    img0.classList.add('gallery-img')
    img0.src = data.results[0].urls.regular;
    img0.alt = `image0`;
    let image0 = document.querySelector(".image0");
    image0.append(img0);

    const img1 = document.createElement('img');
    img1.classList.add('gallery-img')
    img1.src = data.results[1].urls.regular;
    img1.alt = `image1`;
    let image1 = document.querySelector(".image1");
    image1.append(img1);

    const img2 = document.createElement('img');
    img2.classList.add('gallery-img')
    img2.src = data.results[2].urls.regular;
    img2.alt = `image2`;
    let image2 = document.querySelector(".image2");
    image2.append(img2);

    const img3 = document.createElement('img');
    img3.classList.add('gallery-img')
    img3.src = data.results[3].urls.regular;
    img3.alt = `image3`;
    let image3 = document.querySelector(".image3");
    image3.append(img3);

    const img4 = document.createElement('img');
    img4.classList.add('gallery-img')
    img4.src = data.results[4].urls.regular;
    img4.alt = `image4`;
    let image4 = document.querySelector(".image4");
    image4.append(img4);

    const img5 = document.createElement('img');
    img5.classList.add('gallery-img')
    img5.src = data.results[5].urls.regular;
    img5.alt = `image5`;
    let image5 = document.querySelector(".image5");
    image5.append(img5);  

}

//=========================================================
const url0 = 'https://api.unsplash.com/search/photos?';
let url1 = 'query='
const url2 =  'per_page=6&orientation=landscape&client_id=LzsEkQl4eSmZMOuqoqLRuUpjVqjAtjdJrkm8V-R6wyw'
// const url = 'https://api.unsplash.com/search/photos?query=spring&per_page=6&orientation=landscape&client_id=LzsEkQl4eSmZMOuqoqLRuUpjVqjAtjdJrkm8V-R6wyw';
let url = url0 + url1 + 'like!' + '&' + url2;

getData();
//=========================================================
const search = document.getElementById("mysearch");
search.focus();

search.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {

        let image0 = document.querySelector(".image0");
        // image0.append(img0);
        //image0.remove();
        // console.log(search.value);
        url = url0 + url1 + String(search.value) + '&' + url2;
        getData();
    }
});

// console.log(search.value);
//=========================================================


