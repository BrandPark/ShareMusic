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
		<p><a class="logout" href="javascript:document.getElementById('logout').submit()">Logout</a></p>
		
		 		
		<form id="logout" action="<c:url value="/logout"/>" method="post">
			<input type="hidden" name= "${_csrf.parameterName}" value="${_csrf.token}"/>
		</form>
		 
		
		<form id="actionForm">
			<input type="hidden" name= "${_csrf.parameterName}" value="${_csrf.token}"/> 
		</form>
	</c:when>
	
	<c:otherwise>
		<p><a href ="${pageContext.request.contextPath}/member/login">Login</a></p>
	 </c:otherwise>
	</c:choose>
	
<!--
<script type = "text/javascript">
	$(document).ready(
			
			function() {
				var operForm = $("#actionForm");
				
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
-->
</body>
</html>
