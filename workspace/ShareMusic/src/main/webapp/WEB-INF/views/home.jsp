<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>
	<c:forEach var="listarray" items="${li}">
		<p><c:out value="${listarray}"> </c:out>
	</c:forEach> 
	<p><a href ="${pageContext.request.contextPath}/insertMusic">직접 음악 넣기 테스트</a></p>
	<p><a href ="${pageContext.request.contextPath}/getCollection">노래 리스트 출력 테스트</a></p>
	<p><a href ="${pageContext.request.contextPath}/upload/uploadForm">파일 업로드 테스트</a></p>
</body>
</html>
