let folder="Anh/Bai13/";
function change(so){
    let chuc=Math.floor(so/10);
    let donVi=so%10;
    return '<img src="../'+folder+"0"+chuc+'.gif">'+
            '<img src="../'+folder+"0"+donVi+'.gif">'
}
function greeting(gio){
    if(gio<12){
        return "Chào buổi sáng";
    }
    else if(gio<18){
        return "Chào buổi chiều";
    }
    else{
        return "Chào buổi tối";
    }
}
function update(){
    let date=new Date();
    let gio=date.getHours();
    let phut=date.getMinutes();
    let giay=date.getSeconds();
    document.getElementById("clock").innerHTML=change(gio)+
        '<img src="../'+folder+'haicham.gif">'+
        change(phut)+
        '<img src="../'+folder+'haicham.gif">'+
        change(giay);
    document.getElementById("greeting").textContent=greeting(gio);
}
document.addEventListener("DOMContentLoaded",function(){
    update();
    setInterval(update,1000);
});