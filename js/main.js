const btn = document.querySelector('#send');

btn.addEventListener('click', (e) =>{
    e.preventDefault();

    const cep_input = document.querySelector('#cep');
    const cep = cep_input.value;
    
    //console.log(cep)

    getCepApi(cep)
    cep_input.value = ''

})

async function getCepApi(cep){

    //pego o api/url:
    const responde = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //transformo em objeto:
    const data = await responde.json()

    //pego os campos do HTML:
    const city = document.querySelector('#city');
    const uf = document.querySelector('#uf');
    const ddd = document.querySelector('#ddd');

    //realoco conforme o objeto:
    city.innerHTML = data.localidade;
    uf.innerHTML = data.uf;
    ddd.innerHTML = `(+${data.ddd})`;

    //console.log(data.uf)
}