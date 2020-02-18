<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>tb_collection_1 노래리스트 출력 (테스트)</title>
</head>
<body>
	<c:forEach var="music" items="${collection}">
		<c:out value="${music}"></c:out><br/>
	</c:forEach>
</body>
</html>