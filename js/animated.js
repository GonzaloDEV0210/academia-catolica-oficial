const nat_aquabebe = document.getElementById('nat_aquabebe');
const nat_menores_1 = document.getElementById('nat_menores_1');
const nat_menores_2 = document.getElementById('nat_menores_2');
const nat_adultos = document.getElementById('nat_adultos');
const natdet_aquabebe = document.getElementById('natdet_aquabebe');
const natdet_menores_1 = document.getElementById('natdet_menores_1');
const natdet_menores_2 = document.getElementById('natdet_menores_2');
const natdet_adultos = document.getElementById('natdet_adultos');

nat_aquabebe.addEventListener('mouseover', ()=>{
    natdet_aquabebe.classList.remove('320px:h-0');
    natdet_aquabebe.classList.add('320px:h-24');
});
nat_aquabebe.addEventListener('mouseout', ()=>{
    natdet_aquabebe.classList.add('320px:h-0');
    natdet_aquabebe.classList.remove('320px:h-24');
});

nat_menores_1.addEventListener('mouseover', ()=>{
    natdet_menores_1.classList.remove('320px:h-0');
    natdet_menores_1.classList.add('320px:h-24');
});
nat_menores_1.addEventListener('mouseout', ()=>{
    natdet_menores_1.classList.add('320px:h-0');
    natdet_menores_1.classList.remove('320px:h-24');
});

nat_menores_2.addEventListener('mouseover', ()=>{
    natdet_menores_2.classList.remove('320px:h-0');
    natdet_menores_2.classList.add('320px:h-24');
});
nat_menores_2.addEventListener('mouseout', ()=>{
    natdet_menores_2.classList.add('320px:h-0');
    natdet_menores_2.classList.remove('320px:h-24');
});

nat_adultos.addEventListener('mouseover', ()=>{
    natdet_adultos.classList.remove('320px:h-0');
    natdet_adultos.classList.add('320px:h-24');
});
nat_adultos.addEventListener('mouseout', ()=>{
    natdet_adultos.classList.add('320px:h-0');
    natdet_adultos.classList.remove('320px:h-24');
});