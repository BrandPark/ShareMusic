<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>파일 업로드 페이지</title>

</head>
<body>
	<form action="${pageContext.request.contextPath}/upload/doUploadImage" method="post" enctype="multipart/form-data">
		<input type="hidden" name="userId" value="<c:out value='${pageContext.request.userPrincipal.name}'/>"/>
		<div>컬렉션 이름 : <input type="text" name="collectionName" placeholder="컬력센명" size="10"/></div>
		<input type="file" name="file">
		<input name="_csrf" type="hidden" value="${_csrf.token}" />
		<input type="submit" value="등록">
	</form>
</body>
</html>