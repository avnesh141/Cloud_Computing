let b;
let tim = document.getElementById('clock');
setInterval(() => {
    b = new Date();
    let h = b.getHours();
    let m = b.getMinutes();
    let s = b.getSeconds();
    if (h < 10)
    {
        h = "0" + h;
    }
    if (m < 10)
    {
        m = "0" + m;
    }
    if (s < 10)
    {
        s = "0" + s;
    }
    let d = b.getDay();
    let str;
    if (d == 0)
    {
        str = "SUNDAY";   
        }
    if (d == 1)
    {
        str = "MONDAY";   
        }
    if (d == 2)
    {
        str = "TUESDAY";   
        }
    if (d == 3)
    {
        str = "WEDNESDAY";   
        }
    if (d == 4)
    {
        str = "THURSDAY";   
        }
    if (d == 5)
    {
        str = "FRIDAY";   
        }
    if (d == 6)
    {
        str = "SATURDAY";   
        }
    let c = tim.innerHTML = `<div class="cl"></div>` + h + " : " + m + " : " + s + `<div class="cl">THURSDAY</div>`;
}, 1000);
