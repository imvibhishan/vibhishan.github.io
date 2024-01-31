let input= document.querySelector('input')
let buttons=document.querySelectorAll('button')

let string=""
let arr=Array.from(buttons)
console.log(input,buttons,string,arr)

arr.forEach(button =>{
    button.addEventListener('click', (e)=> {
        if(e.target.innerHTML == '='){
            string=eval(string)
            input.value=string
        }else if(e.target.innerHTML == 'x'){
            string=string.slice(0,-1)
            input.value=string
        }else if(e.target.innerHTML == 'del'){
            string=""
            input.value=string
        }else{
            string += e.target.innerHTML
            input.value=string
        }
    })
})
