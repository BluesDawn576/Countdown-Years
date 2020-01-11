function show_runtime()
{
    window.setTimeout("show_runtime()",1000);
    X=new Date("01/25/2020 00:00:00");
    Y=new Date();T=(X.getTime()-Y.getTime());
    M=24*60*60*1000;
    a=T/M;
    A=Math.floor(a);
    b=(a-A)*24;
    B=Math.floor(b);
    c=(b-B)*60;
    C=Math.floor((b-B)*60);
    D=Math.floor((c-C)*60);
    document.getElementById('day').innerText = A;
    document.getElementById('hour').innerText = B;
    document.getElementById('minute').innerText = C;
    document.getElementById('second').innerText = D;
}
show_runtime();
