<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>Please sign in</title>
<link
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
	crossorigin="anonymous">
<link
	href="https://getbootstrap.com/docs/4.0/examples/signin/signin.css"
	rel="stylesheet" crossorigin="anonymous" />
<script type="text/javascript"
	src="http://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=LuD4510VT451JFaJ_X2uQGFzEde4fJ_-F9vzRNGE2LjfFKZFrm1XfcLlRU5_zQj2NL2QZgk1jimDGeTs4TPpbA"
	charset="UTF-8"></script>
</head>
<body>


	<div class="container">
		<form class="form-signin" method="post"
			action="${pageContext.request.contextPath}/login">
			<h2 class="form-signin-heading">로그인화면</h2>
			<p>
				<c:if test="${not empty logoutMsg}">
					<div style="color:#0000ff"><h4><c:out value="${logoutMsg}"/></h4></div>
				</c:if>
				
				<c:if test="${not empty errorMsg}">
					<div style="color:#ff0000"><h4><c:out value="${errorMsg}"/></h4></div>
				</c:if>
				<input type="text" id="username" name="user_id" class="form-control"
					placeholder="아이디" required autofocus>
			</p>
			<p>
				<label for="password" class="sr-only">Password</label> <input
					type="password" id="password" name="user_password"
					class="form-control" placeholder="비밀번호" required>

			</p>
			<p></p>

			<input name="_csrf" type="hidden" value="${_csrf.token}" />
			<button class="btn btn-lg btn-primary btn-block" type="submit">로그인</button>
		</form>

		
	</div>
</body>
</html>