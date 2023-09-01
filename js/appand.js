const mainContaine = document.getElementById('main-containt') ;

const section = document.createElement('section')
const h1 = document.createElement('h1') ;
h1.innerText = 'welcome to my section'; 
section.appendChild(h1) ;

const ul = document.createElement('ul') ;
const li1 = document.createElement('li')
li1.innerText = 'Abutaleb';
ul.appendChild(li1) 

const li2 = document.createElement('li')
li2.innerText = 'Talha';
ul.appendChild(li2) 

const li3 = document.createElement('li')
li3.innerText = 'Ali';
ul.appendChild(li3) 

section.appendChild(ul);

mainContaine.appendChild(section);

const sectionWithshot = document.createElement('section')
sectionWithshot.innerHTML = `
<h3>my hosting file of use </h3>
<ul>
    <li>guman</li>
    <li>guman</li>
    <li>guman</li>
</ul>
`
mainContaine.appendChild(sectionWithshot) ;







