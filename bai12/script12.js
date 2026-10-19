let print=document.getElementById("print");
print.addEventListener("click", function() {
    let day=Number(document.getElementById("inputday").value);
    let month=Number(document.getElementById("inputmonth").value);
    let year=Number(document.getElementById("inputyear").value);

    let date=new Date(year,month-1,day);
    let dsWD=[
        "Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"
    ];
    let hours=new Date().getHours();
    let greeting="";
    if(hours<12){
        greeting="Chào buổi sáng";
    }
    else if(hours<18){
        greeting="Chào buổi chiều";
    }
    else{
        greeting="Chào buổi tối";
    }
    document.getElementById("day").textContent=date.getDate();
    document.getElementById("month").textContent="Tháng "+(date.getMonth()+1);
    document.getElementById("year").textContent=date.getFullYear();
    document.getElementById("weekday").textContent=dsWD[date.getDay()]
    document.getElementById("greeting").textContent=greeting;
});
