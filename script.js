let slider= document.querySelector(".slider");
let status=false;
slider.addEventListener("click",()=>{
    if (status==false){
        slider.style.justifyContent="end";
        const basic=document.querySelector('#rateB');
        const professional=document.querySelector('#rateP');
        const master=document.querySelector('#rateM');
        basic.innerHTML="19.99"
        professional.innerHTML="24.99"
        master.innerHTML="39.99"
        status=true;
    }
    else{
        slider.style.justifyContent="start";
        const basic=document.querySelector('#rateB');
        const professional=document.querySelector('#rateP');
        const master=document.querySelector('#rateM');
        basic.innerHTML="199.99"
        professional.innerHTML="249.99"
        master.innerHTML="399.99"
        status=false;
    }
})