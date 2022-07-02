import "./app1.css"

let $jia = $('#jiaHao')
let $jian = $('#jianHao')
let $chu = $('#chuHao')
let $cheng = $('#chengHao')
let n = parseInt(localStorage.getItem('n'))
$('#shuZi').text(n)

function XXX(){
    $('#shuZi').text(n)
    localStorage.setItem('n',n)
}

$jia.on('click',()=>{
   n+=10;
   XXX();
})

$jian.on('click',()=>{
    n-=10;
    XXX();
})

$chu.on('click',()=>{
    n/=2;
    XXX();
})

$cheng.on('click',()=>{
    n*=2;
    XXX();
})
