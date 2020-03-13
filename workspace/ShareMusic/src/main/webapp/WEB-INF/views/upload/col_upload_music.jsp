<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>tb_collection_1 노래 집어넣기(test)</title>
</head>
<body>
	<form method="post" action="${pageContext.request.contextPath}/upload/doUploadMusic">
		<table>
			<tr>
				<td>노래 이름 :</td>	
				<td><input type="text" name="musicName" size="10"/></td>
			</tr>
			<tr>
				<td>가수 :</td>	
				<td><input type="text" name="singer" size="10"/></td>
			</tr>
			<tr>
				<td>
					<input type="hidden" name="userId" value="user00"/>
					<input name="_csrf" type="hidden" value="${_csrf.token}" />
					<input type="submit" value="등록" />
				</td>
			</tr>
		</table>
		
	</form>
</body>
</html>