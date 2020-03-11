<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

</head>
<body>

	<c:forEach var="index" items="${collectionList}">
		<p>
			<c:out value="${index}">
			</c:out>
	</c:forEach>
	
	<p><a href ="${pageContext.request.contextPath}/">Home</a></p>
</body>
</html>