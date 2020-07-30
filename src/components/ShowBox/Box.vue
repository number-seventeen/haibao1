<template>
    <div class="mian"> 
        <div class="more">更多后续请关注</div>    
        <div class="big_box">  
            <div class="content_box left" v-on:mouseover="video_play(3)" v-on:mouseout="video_pause(3)">
                <iframe src="../../../static/video1.html" scrolling="no" border="0" width="480" height="270" frameBorder="0"/>

                <div class="make" >
                    <el-button round>立即制作</el-button>
                </div>
                <div class="bottom_box" >
                    <div class="w_title">
                        海报视频
                    </div>
                    <div class="w_tip">
                       新模版 
                    </div>
                    <div class="w_conten">
                        自定义背景图，替换视频素材，更改文字，一键生成。
                    </div>
                </div>
            </div>



            <div class="content_box right"  v-on:mouseover="video_play(8)" v-on:mouseout="video_pause(8)">
                <iframe src="../../../static/video2.html" width="480" height="270" scrolling="no" frameBorder="0" />
                <div class="make" >
                    <el-button round>立即制作</el-button>
                </div>
                <div class="bottom_box">
                    <div class="w_title">
                        视频包装
                    </div>
                    <div class="w_tip " style="background:sandybrown;">
                       新功能 
                    </div>
                    <div class="w_conten">
                        自定义背景图，替换视频素材，更改文字，一键生成。
                    </div>
                </div>
            </div> 


        </div>
    </div>
</template>

<script>
import video from 'vue-video-player';
export default {  
    data(){
        return{
           
        }
    },
    methods:{
        video_play(dex){           
            var video1=document.getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName('video')[0];
            var video2=document.getElementsByTagName("iframe")[1].contentWindow.document.getElementsByTagName('video')[0];
            var show=document.getElementsByClassName("content_box")
            var hide=document.getElementsByClassName("bottom_box")
            if (dex==3&&show[0].className=="content_box left") {
                video1.play();
                if (hide[0].className="bottom_box") {
                    hide[0].setAttribute("style"," opacity:0; transition:opacity 0.5s;")
                    hide[0].previousElementSibling.setAttribute("style"," opacity:1; transition:opacity 1s;")    
                }
            }
            if (dex==8) {
                video2.play()
                if(hide[1].className="bottom_box"){
                    hide[1].setAttribute("style"," opacity:0; transition:opacity 0.5s;")
                    hide[1].previousElementSibling.setAttribute("style"," opacity:1; transition:opacity 1s;")
                }
            }
     

    },
        video_pause(dex){
            var video1=document.getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName('video')[0];
            var video2=document.getElementsByTagName("iframe")[1].contentWindow.document.getElementsByTagName('video')[0];
            var show=document.getElementsByClassName("content_box")
            var hide=document.getElementsByClassName("bottom_box")
            if (!video1.paused||!video2.paused) {
                video1.currentTime=0    
                video1.pause()
                hide[0].setAttribute("style"," opacity:1; transition:opacity 1s;")
                hide[0].previousElementSibling.setAttribute("style"," opacity:0; transition:opacity 0.3s;")
                
    
                    
                
            }
            if(!video2.paused||!video1.paused) {
                video2.currentTime=0 
                video2.pause()
                hide[1].setAttribute("style"," opacity:1; transition:opacity 1s;")
                hide[1].previousElementSibling.setAttribute("style"," opacity:0; transition:opacity 0.3s;")
            }
            
        }
    }
   

    
}
</script>

<style scoped >

.big_box{
    position: absolute; 
    width: 100%;
    min-width:1100px;
    min-height:411px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    
}
.content_box{
    width: 480px;
    height: 360px;
    float: left;
    border: gray 1px solid;
    border-radius: 7px;
    flex-shrink: 0;
    
  
    
}
.left{
    margin-right: 100px;
   
    
    
}

body{
    height: 100%;
    
    
}
iframe{
    margin: 0; 
    padding: 0;
    
}
.bottom_box{
    border-radius: 0 0 5px 5px;
    width: 480px;
    height: 90px;
    margin-top: -5px;  
    background:white; 
}
.w_title{
    font-size: 18px;
    width: 80px;
    padding-top: 15px;
    margin-left: 20px;
    

}
.w_conten{
    font-size: 14px;
    color:gray;
    width: 340px;
    margin-top:10px;
    margin-left: 20px;
    font-weight: 340;
}
.w_tip{
    font-size: 14px;
    font-weight: 300;
    width:52px;
    height: 24px;
    background: crimson;
    text-align: center;
    line-height: 24px;
    border-radius: 0 4px 0 4px;
    color:white;
    float: right;
    margin-top: -30px;
    margin-right: 5px;
}
.make{
    float: left;
    background:white;
    width: 480px;
    height: 90px;
    border-radius: 0 0 5px 5px;
    margin-top:-5px;
    opacity: 0; 
    position:absolute;
    text-align: center;
    font-size: 12px;  
    
}
 
    
    

.el-button{
    width: 100px;
    height: 40px;
    background:#18A689;
    color:white;
    margin-top: 25px;
    border:#18A689 1px solid;
    margin-left: 0;
    opacity:0.95;
    font-size: 14px;
    font-weight: 300;
    border-radius: 4px;
  
}
.more{
    width: 120px;
    height: 40px;
    float: left;
    position: fixed;
    top: 80%;
    left: 45.5%;
    text-align: center;
 
}

</style>