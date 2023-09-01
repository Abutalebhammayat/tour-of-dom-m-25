console.log('Hi iam Abutaleb')

 // script tag dui vaba hoi css ar moton ee 
        // 1. script tag diya 
        // 2. script tag ar src diya ono file ar moda link koira .
        // 3.brogar ar moda jaoyao kora jay .
        // 4. js ar sokol ksj inspakt kora dakta hoi 
        /* 5. const tarpor akta value tarpor = sain do......
            ta nica daoya holo,(li.innerText) many holo li a majkana kotogula text asa ta show kora, aitar jai output asba ta dakta arry ar moton laglao arry na taky bola ....arry like objet.... */

 // option-1 : getElementsByTagName
    const licollection = document.getElementsByTagName('h1')
 // console.log(licollection);
    for(const li of licollection){
       //  console.log(li.innerText)
    }
 
// option-2 : getElementById 
    const lititle = document.getElementById('fruts-home')
    // console.log(lititle) ;

// option-3 : getElementsByClassName
        const placs = document.getElementsByClassName('placs-yone')
            for(const plac of placs){
                //  console.log(plac.innerText);
            }

//option-4 : querySelectorAll
        const kalnas = document.querySelectorAll('.Khalnagor li')
            //    console.log(kalnas) ;
            for(const kalna of kalnas ){
                //  console.log(kalna) ;
                }
//option-5 : querySelector
const dombabas = document.querySelector('.dombaba li')
// console.log(dombabas) ;