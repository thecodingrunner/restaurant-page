export default function loadAbout() {
  const content = document.getElementById('content');
  const div = document.createElement('div');
  const heading = document.createElement('h1');
  div.classList.add('intro');
  content.appendChild(div);
  div.appendChild(heading);
  heading.textContent = "The Restaurant Contacts";
  const contact = document.createElement('p');
  contact.innerText = `Finn \n 12546046712 \n Email@gmail.con`;
  div.appendChild(contact);
  contact.classList.add('contact');
}