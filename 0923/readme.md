<!DOCTYPE html> // CSS3 스타일 시트로 꾸민 웹 페이지
<html>
<head>
<meta charset="utf-8">
<title>스타일을 가진 웹 페이지</title>
<style>
/* CSS 스타일 시트 작성 */
body { background-color : mistyrose; }
h3 { color : purple; }
hr { border : 5px solid yellowgreen; }
span { color : blue; font-size : 20px; }
</style>
</head>
<body>
<h3>CSS 스타일 맛보기</h3>
<hr>
<p>나는 <span>웹 프로그래밍</span>을 좋아합니다.</p>
</body>
</html>

---- 
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>CSS 간단한 예제</title>
	<style>
		body {
			margin: 0;
			font-family: Arial, sans-serif;
			background-color: #f0f4f8;
			color: #333;
		}

		.card {
			width: 320px;
			margin: 80px auto;
			padding: 24px;
			text-align: center;
			background-color: white;
			border-radius: 12px;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		}

		h1 {
			color: #2563eb;
		}

		.button {
			display: inline-block;
			padding: 10px 20px;
			color: white;
			background-color: #2563eb;
			border-radius: 6px;
			text-decoration: none;
		}

		.button:hover {
			background-color: #1d4ed8;
		}
	</style>
</head>
<body>
	<main class="card">
		<h1>CSS 예제</h1>
		<p>간단한 카드와 버튼 스타일입니다.</p>
		<a class="button" href="#">확인</a>
	</main>
</body>
</html>





<style> 태그로 스타일 시트 만들기
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>&lt;style&gt; 태그로 스타일 만들기</title>
<style>
body {
background-color : linen;
color : blueviolet;
margin-left : 30px;
margin-right : 30px;
}
h3 {
text-align : center;
color : darkred;
}
</style>
</head>
<body>
<h3>정세형 </h3>
<hr>
<p>저는 소프트웨어학과 정세형입니다. 저는 운동과 게임을 좋아합니다
    . 김치 찌개와 치킨을 무척 좋아합니다.</p>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>&lt;style&gt; 속성에 스타일 만들기</title>
<style>
p { color : red; font-size : 15px; } /* 모든 p 태그에 적용 */
</style>
</head>
<body>
<h3>손 홍 민</h3>
<hr>
<p>오페라를 좋아하고</p>
<p>엘비스 프레슬리를 좋아하고</p>
<p style="color:blue">김치부침개를 좋아하고</p>
<p style="color:magenta; font-size:30px">축구를
좋아합니다.</p>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>&lt;link&gt; 태그로 스타일 파일 불러오기</title>
<link type="text/css" rel="stylesheet" href="mystyle.css">
</head>
<body>
<h3>소연재</h3>
<hr>
<p>저는 체조 선수 소연재입니다. 음악을 들으면서 책읽기를 좋아
합니다. 김치 찌개와 막국수 무척 좋아합니다.</p>
</body>
</html>

mystyle.css
/* mystyle.css */
body { background-color : linen; color : blueviolet;
margin-left : 30px; margin-right : 30px; }
h3 { text-align : center; color : darkred; }


<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<title>셀렉터 만들기</title>
<style>
h3 first letter, li { /* 태그 이름 셀렉터 */
color : brown;
}
div > div > strong { /* 자식 셀렉터 */
background : yellow;
}
ul strong { /* 자손 셀렉터 */
color : dodgerblue;
}
.warning { /* class 셀렉터 */
color : red;
}
body.main { /* class 셀렉터 */
background : aliceblue;
}
#list { /* id 셀렉터 */
background : mistyrose;
}
#list span{ /* 자손 셀렉터 */
color : forestgreen;
}
h3:first-letter { /* 가상 클래스 셀렉터 */
color : red;
}
li:hover { /* 가상 클래스 셀렉터 */
background : yellowgreen;
}
</style></head>
<body class="main">
<h3>Web Programming</h3>
<hr>
<div>
<div>2학기 <strong>학습 내용</strong>입니다.</div>
<ul id="list">
<li><span>HTML5</span></li>
<li><strong>CSS</strong></li>
<li>JAVASCRIPT</li>
</ul>
<div class="warning">60점 이하는 F</div>
</div>
</body>
</html>



