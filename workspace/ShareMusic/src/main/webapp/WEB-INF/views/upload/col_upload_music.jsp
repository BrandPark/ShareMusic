<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>컬렉션 추가</title>
</head>
<body>
	<h3><c:out value="${pageContext.request.userPrincipal.name}"/>님</h3>
	<form method="post" action="${pageContext.request.contextPath}/upload/doUploadMusic">
		<table id="collection_table">
			<tr>
				<td>컬렉션 이름 : <input type="text" name="collectionName" placeholder="컬력센명" size="10"/></td>
			</tr>
			
			<tr>
				<td>노래 제목 : <input type="text" name="songList[0].musicName" placeholder="노래 제목" size="10"/></td>
				<td>가수명 : <input type="text" name="songList[0].singer" placeholder="가수명" size="10"/></td>
			</tr>
		</table>
		
		<input type="hidden" name="userId" value="<c:out value='${pageContext.request.userPrincipal.name}'/>"/>
		<input name="_csrf" type="hidden" value="${_csrf.token}" />
		<input type="button" value="곡 추가" onclick="addMusic();" />
		<input type="submit" value="등록" />
		
	</form>
	
<script type = "text/javascript">
/* 	$(document).ready(
			
			function() {
				var operForm = $("#insertMusicForm");
				
				$(".col-show-colletion").on("click",function(e){
					e.preventDefault();
					operForm.append("<input type='hidden' name='userId' value='"+$(this).attr("href")+"'>");
					operForm.attr("action","${pageContext.request.contextPath}/upload/showCollection");
					operForm.attr("method","post");
					operForm.submit();
				});
			}
	); */
	  
	   function addMusic()
	   {
		
		var objRow = document.all("collection_table").insertRow();
		
		var objCell_music_name = objRow.insertCell();
		objCell_music_name.innerHTML = "노래 제목 : <input type='text' name='songList[1].musicName' placeholder='노래 제목' size='10'/>";
		
		var objCell_singer = objRow.insertCell();
		objCell_singer.innerHTML  = "가수명 : <input type='text' name='songList[1].singer' placeholder='가수명' size='10'/>";
	
	   }
	  
</script>
</body>
</html>