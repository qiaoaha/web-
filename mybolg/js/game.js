var man1=0;
var man2=0;
var man3=0;
var i=0;
var s=["敦品励学,才德并懋——北方工业大学","千里之行，始于足下。——老子","少年易学老难成，一寸光阴不可轻。——朱熹","敏而好学，不耻下问。——孔子","海内存知已，天涯若比邻。——王勃"];

        window.onload = function(){ 
             var audio = document.getElementById('music');
                 audio.pause();//打开页面时无音乐
                }
  
                
        function play1() {
           
            var audio = document.getElementById('music');
            if (man1==3) {
                alert("小花：好感度+1");
                audio.play();
                man1=0;
                document.getElementById('man').style.background="#a9d5c6";
            }else{
                man1++;
                alert("小花：“小姐请自重”");
                audio.pause();
                audio.currentTime = 0;//音乐从头播放
               }
               
        }
        function play2() {
            var audio = document.getElementById('music');
            if (man2==1) {
                alert("蔺櫂声：好感+1");
                audio.play();
                man2=0;
                document.getElementById('man').style.background="#bcdceb";
            }else{
                man2++;
                alert("芜湖");
                audio.pause();
                audio.currentTime = 0;//音乐从头播放
               }
            
          }
        function play3() {
          
            alert(s[i]);
            i++;
            if(i>=5)
            i=0;
            
        }

 
		

