<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>
	<p><a href ="${pageContext.request.contextPath}/getCollection">노래 리스트 출력 테스트</a></p>
	<p><a href ="${pageContext.request.contextPath}/upload/uploadMusic">직접 음악 넣기 테스트</a></p>
	<p><a href ="${pageContext.request.contextPath}/upload/uploadImage">이미지로 테스트</a></p>
</body>
</html>
