var stop = false;
function show_runtime() {
        var newDay = '2020/1/24 00:00:00';//目标日期
        var countDate = new Date(newDay);
        var now = new Date().getTime()
        gap = countDate - now;
        var second = 1000
        var minute = second * 60
        var hour = minute * 60
        var day = hour * 24
  
        var d = Math.floor(gap / day)
        var h = Math.floor((gap % day) / hour)
        var m = Math.floor((gap % hour) / minute)
        var s = Math.floor((gap % minute) / second)

        if(d,h,m,s < 0)//如果出现负数则停止计时器
        {
            stop = true;
        }else{
	    // 倒计时
        document.getElementById('day').innerText = d
        document.getElementById('hour').innerText = h
        document.getElementById('minute').innerText = m
        document.getElementById('second').innerText = s
        }
      }
      //显示春节祝福语
      function newyear() {
        document.getElementById('title').innerText = "Happy Spring Festival"
        document.getElementById('day').innerText = "春"
        document.getElementById('hour').innerText = "节"
        document.getElementById('minute').innerText = "快"
        document.getElementById('second').innerText = "乐"
    }
  
      var time = setInterval(() => {
        show_runtime()
        if (stop === true) {
            newyear();
            clearInterval(time);
        }
      }, 1000)
    
