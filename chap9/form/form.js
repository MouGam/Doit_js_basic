var shippingInfo = document.querySelector('#shippingInfo');

shippingInfo.addEventListener('click',()=>{
    if(shippingInfo.checked){
        copyAll();
    }
})

function copyAll(){
    var allText = document.querySelectorAll('.input-box');
    var num = (allText.length)/2;
    for(var i=0;i<num;i++){
        if(allText[i].value)
            allText[i+num].value = allText[i].value;
    }
    
}