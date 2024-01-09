let text=document.querySelector('.para')
let btn=document.querySelector('button')
const hexaColor=()=>{     
let mera='0123456789abcdef'
let hexa=''


for(let i=0;i<6;i++){
     let index= Math.floor(Math.random()*mera.length)
     hexa=hexa + mera[index]

}
return '#' + hexa
}
document.body.style.background=hexaColor()
text.textContent=hexaColor()
document.body.appendChild(btn)
btn.addEventListener('click',()=>{
    document.body.style.background=hexaColor()
    text.textContent=hexaColor()
    
})





