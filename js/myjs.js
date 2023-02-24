let btn = document.querySelector('#btn')    //按钮
let txts =document.querySelector('#txts')   //输入框
let ultxt = document.querySelector(".ul-txt") //ul标签
btn.addEventListener('click',()=>{
    let li = document.createElement('li') //创建li标签
    if(txts.value !== "" && txts.value !== null){
        li.innerHTML = txts.value
        ultxt.appendChild(li)
    } else {
        alert("你还没有输入任何内容哦!")
    }
})