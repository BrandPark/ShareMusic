<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>tb_collection 노래리스트 출력 (테스트)</title>
</head>
<body>
	<table>

		<c:forEach var="collection" items="${collection_list}">
			<tr>
				<td><c:out value="${collection.userId}"></c:out></td>
				<td><c:out value="${collection.collectionName}"></c:out></td>
			<c:forEach var="song" items="${collection.songList}">
					<td><c:out value="${song.musicName}"></c:out></td>
					<td><c:out value="${song.singer}"></c:out></td>
			</c:forEach>
			</tr>
		</c:forEach>

	</table>
	<a href="${pageContext.request.contextPath}/">메인화면으로가기</a>
</body>
</html>