const body = document.getElementById('body');
const close_modal_nat = document.getElementById('close_modal_nat');
const close_modal_tea = document.getElementById('close_modal_tea');
const close_modal_bal = document.getElementById('close_modal_bal');
const button_gal_nat = document.getElementById('button_gal_nat');
/* const button_gal_tea = document.getElementById('button_gal_tea');
const button_gal_bal = document.getElementById('button_gal_bal'); */
const modal_natacion = document.getElementById('modal_natacion');
const modal_teatro = document.getElementById('modal_teatro');
const modal_ballet = document.getElementById('modal_ballet');

button_gal_nat.addEventListener('click', ()=>{
    modal_natacion.classList.remove('hidden');
    modal_natacion.classList.add('overflow-y-auto')
    body.classList.add('overflow-hidden');
})

close_modal_nat.addEventListener('click', ()=>{
    modal_natacion.classList.add('hidden');
    body.classList.remove('overflow-hidden')
});

button_gal_tea.addEventListener('click', ()=>{
    modal_teatro.classList.remove('hidden');
    
    body.classList.add('overflow-hidden');
})

close_modal_tea.addEventListener('click', ()=>{
    modal_teatro.classList.add('hidden');
    body.classList.remove('overflow-hidden')
});

button_gal_bal.addEventListener('click', ()=>{
    modal_ballet.classList.remove('hidden');
    
    body.classList.add('overflow-hidden');
})

close_modal_bal.addEventListener('click', ()=>{
    modal_ballet.classList.add('hidden');
    body.classList.remove('overflow-hidden')
});
