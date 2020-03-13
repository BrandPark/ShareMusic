<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>파일 업로드 페이지</title>

</head>
<body>
	<form action="${pageContext.request.contextPath}/upload/doUploadImage" method="post" enctype="multipart/form-data">
		<input type="file" name="file">
		<input name="_csrf" type="hidden" value="${_csrf.token}" />
		<input type="submit" value="업로드">
		
	</form>
</body>
</html>