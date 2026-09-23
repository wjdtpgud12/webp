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
