function OnOff(){
    let ligth = document.getElementById('ligthbulb')
    let on =  'C:\Users\NATAN\Desktop\front end\lampada\lampada-on.jpg'
   
    if(ligth.src.match('./lampada-on.jpg')){
       document.getElementById('ligthbulb').src = './lampada.jpg'
    }else{
        document.getElementById('ligthbulb').src = './lampada-on.jpg'
    }

}