<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
<h1>ShareMusic</h1>
   
	<c:choose>
	<c:when test="${pageContext.request.userPrincipal.name != null}">
		<h3><c:out value="${pageContext.request.userPrincipal.name}"/>님 안녕하세요</h3>
		<p><a class="col-show-colletion" href='<c:out value="${pageContext.request.userPrincipal.name}"/>'>내 컬렉션 리스트 조회</a></p>
		<p><a class="col-upload-music" href='<c:out value="${pageContext.request.userPrincipal.name}"/>'>직접 컬렉션 생성</a></p>
		<p><a class="col-upload-image" href='<c:out value="${pageContext.request.userPrincipal.name}"/>'>이미지로 컬렉션 생성</a></p>
		<p><a class="logout" href=''>Logout</a></p>
		
<%-- 		<form id="logout" action="<c:url value="/logout"/>" method="post">
			<input type="hidden" name= "${_csrf.parameterName}" value="${_csrf.token}"/>
		</form> --%>
		
		
		
		<form id="actionForm">
			<input type="hidden" name= "${_csrf.parameterName}" value="${_csrf.token}"/> 
		</form>
	</c:when>
	
	<c:otherwise>
		<p><a href ="${pageContext.request.contextPath}/member/login">Login</a></p>
		<p><a href ="${pageContext.request.contextPath}/member/showRegMember">회원가입</a></p>
	 </c:otherwise>
	</c:choose>
	
	<script type = "text/javascript">
	$(document).ready(
			
			function() {
				var operForm = $("#actionForm");
				
				$(".col-show-colletion").on("click",function(e){
					e.preventDefault();
					operForm.append("<input type='hidden' name='userId' value='"+$(this).attr("href")+"'>");
					operForm.attr("action","${pageContext.request.contextPath}/upload/showCollection");
					operForm.attr("method","post");
					operForm.submit();
				});
				
				
				$(".col-upload-music").on("click",function(e){
					e.preventDefault();
					operForm.append("<input type='hidden' name='userId' value='"+$(this).attr("href")+"'>");
					operForm.attr("action","${pageContext.request.contextPath}/upload/showUploadMusic");
					operForm.attr("method","post");
					operForm.submit();
				});
				
				$(".col-upload-image").on("click",function(e){
					e.preventDefault();
					operForm.append("<input type='hidden' name='userId' value='"+$(this).attr("href")+"'>");
					operForm.attr("action","${pageContext.request.contextPath}/upload/showUploadImage");
					operForm.attr("method","post");
					operForm.submit();
				});
				
				$(".logout").on("click",function(e){
					e.preventDefault();
					/* operForm.append("<input type='hidden' name='userId' value='"+$(this).attr("href")+"'>"); */
					operForm.attr("action","<c:url value="/logout"/>");
					operForm.attr("method","post");
					operForm.submit();
				});
				
				
			}
			
	);
</script>
</body>
</html>
