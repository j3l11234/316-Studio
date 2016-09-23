<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>DEMO</title>
  
    <!-- Css -->
    <style>
      .text-red {
        color: red;
      }

      .text-yellow {
        color: yellow;
      }

      .box {
        width: 400px;
        height: 300px;
        background: #888888;
        border: 5px solid black;
        border-radius: 10px;
        text-align: center;
        color: #ffffff;
      }

      #btn-clickme {
        width: 300px;
        height: 100px;
        font-size: 20px;
      }
    </style>
  </head>
   
  <body>
    <p>这是一段示例文本</p>
    <p class="text-red">这是一段红色的示例文本</p>
    <p class="text-yellow">这是一段黄色的示例文本</p>
    
    </br>

    <div class="box">
      400X300(块级元素)</br>
      灰色背景</br>
      黑色边框</br>
      圆角矩形</br>
    </div>

    </br>
    </br>

    <button id="btn-clickme" onClick="clickMe()">点击我</button>

    <!-- JavaScrpt -->
    <script>
      function clickMe(){
        alert("你点击了按钮!");
        document.getElementById("btn-clickme").innerHTML="点击过我了";
      }
    </script>
  </body>
 
</html