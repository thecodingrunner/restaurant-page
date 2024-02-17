export default function loadMenu() {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    const heading = document.createElement('h1');
    div.classList.add('intro');

    // page specific
    const starters = document.createElement('h2');
    const mains = document.createElement('h2');
    const desserts = document.createElement('h2');
    
    heading.textContent = "The Restaurant Menu Page";
    starters.textContent = "Starters";
    mains.textContent = "Mains";
    desserts.textContent = "Desserts";

    // add inner div element
    content.appendChild(div);
    div.appendChild(heading);

    //starters section
    div.appendChild(starters);

    // Generic creation of menu item (copy and paste to make multiple)
    const item1 = document.createElement('div');
    const item1text = document.createElement('div');
    const name1 = document.createElement('h3');
    const description1 = document.createElement('p');
    // adding content to item
    name1.textContent = "Sorbet";
    description1.textContent = "Platter cleansing fresh sorbet";
    const image1 = new Image();
    image1.src = "../src/sorbet.jpg";
    // appending item contents together
    div.appendChild(item1);
    item1.appendChild(item1text);
    item1text.appendChild(name1);
    item1text.appendChild(description1);
    item1.appendChild(image1);
    // adding classes/styling to item
    item1.classList.add('intro');
    item1.classList.add('item');
    image1.classList.add('menuImage');



    // Generic creation of menu item (copy and paste to make multiple)
    const item2 = document.createElement('div');
    const item2text = document.createElement('div');
    const name2 = document.createElement('h3');
    const description2 = document.createElement('p');
    // adding content to item
    name2.textContent = "Salad";
    description2.textContent = "Everyone loves a bit of salad... Right!?";
    const image2 = new Image();
    image2.src = "../src/salad.jpg";
    // appending item contents together
    div.appendChild(item2);
    item2.appendChild(item2text);
    item2text.appendChild(name2);
    item2text.appendChild(description2);
    item2.appendChild(image2);
    // adding classes/styling to item
    item2.classList.add('intro');
    item2.classList.add('item');
    image2.classList.add('menuImage');



    div.appendChild(mains);

    // Generic creation of menu item (copy and paste to make multiple)
    const item3 = document.createElement('div');
    const item3text = document.createElement('div');
    const name3 = document.createElement('h3');
    const description3 = document.createElement('p');
    // adding content to item
    name3.textContent = "Mousaka";
    description3.textContent = "Everyones favourite Mousaaaaakkka";
    const image3 = new Image();
    image3.src = "../src/sorbet.jpg";
    // appending item contents together
    div.appendChild(item3);
    item3.appendChild(item3text);
    item3text.appendChild(name3);
    item3text.appendChild(description3);
    item3.appendChild(image3);
    // adding classes/styling to item
    item3.classList.add('intro');
    item3.classList.add('item');
    image3.classList.add('menuImage');



    div.appendChild(desserts);
}
