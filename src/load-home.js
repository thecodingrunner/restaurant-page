export default function loadHome() {
    console.log('testing2')
    const content = document.getElementById('content');
    const div = document.createElement('div')
    const heading = document.createElement('h1');
    const description = document.createElement('p');
    heading.textContent = "The Restaurant";
    description.textContent = "The grand and very long description for the restaurant will be written here. I just cant be bothered to describe it yet.";
    content.appendChild(div);
    div.appendChild(heading);
    div.appendChild(description);
    div.classList.add('intro');

    // hours
    const hours = document.createElement('h1');
    hours.textContent = 'Hours';
    const timetable = document.createElement('p');
    timetable.innerText = `Sunday: 8am - 8pm \n Monday: 6am - 6pm \n Tuesday: 6am - 6pm \n Wednesday: 6am - 6pm \n Thursday: 6am - 10pm \n Friday: 6am - 10pm \n Saturday: 8am - 10pm`;
    div.appendChild(hours);
    div.appendChild(timetable);
    timetable.classList.add('timetable');
}