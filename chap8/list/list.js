window.addEventListener('keypress', (key)=>{
    if(key.charCode === 13){
        enlistButtonClick();
    }
})

function enlistButtonClick(){

    var namelist = document.querySelector('#namelist');

    var enlist_input = document.querySelector("#enlist_input");
    console.log(enlist_input);

    if(enlist_input.value){
        //여기부터
        var nElement = document.createElement('p');
        var tNode = document.createTextNode(enlist_input.value);
        nElement.appendChild(tNode);
        //여기까지 nElement를 태그 p이고 내부 텍스트가 input.value인 노드로 만드는것
        
        var temp = document.createTextNode(" ");
        nElement.appendChild(temp);

    //삭제하는 노드 추가
        //삭제 노드 만들기
        var dElement = document.createElement('span');
        var dText = document.createTextNode('삭제');
        dElement.appendChild(dText);

        //삭제노드에 class넣어주기
        dElement.setAttribute('class', 'delete');
        
        //삭제노드에 색깔 넣어주기
        dElement.style.cssText = "color:gray";

    //삭제노드에 마우스 올리면 색 변하게 만들기
        //올리면
        dElement.onmouseover = ()=>{
            dElement.style.cssText = "color:black";
        };
        //내리면 or 평상시
        dElement.onmouseout = ()=>{
            dElement.style.cssText = "color:gray";
        };

    //삭제노드 클릭하면 없애기
        dElement.onclick = ()=>{
            console.log(dElement.parentElement.parentElement);
            dElement.parentElement.parentElement.removeChild(dElement.parentElement);
        }

        //삭제노드를 nElement의 자식노드로 넣어주기
        nElement.appendChild(dElement);

    //namelist div의 자식노드로 만들어주기
        namelist.appendChild(nElement);

    //input내부 텍스트 삭제
        enlist_input.value = "";
    }
}