const BASE_URL = "https://randomfox.ca/floof";
const foxBtn = document.getElementById("change-fox");
const foxImg = document.getElementById("fox");

const getFox = async () => {
    try{
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.image;
    } catch(e) {
        console.log(e.message);
    }
};

const loadImg = async() => {
    foxImg.src = await getFox();
};

foxBtn.addEventListener('click', loadImg);

loadImg();