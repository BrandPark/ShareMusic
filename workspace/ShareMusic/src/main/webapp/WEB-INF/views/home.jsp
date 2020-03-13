<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>ShareMusic</h1>
   
	<c:choose>
	<c:when test="${pageContext.request.userPrincipal.name != null}">
		<h3><c:out value="${pageContext.request.userPrincipal.name}"/>님 안녕하세요</h3>
		<p><a id ="col-list" href ="${pageContext.request.contextPath}/upload/showCollection?userId=<c:out value="${pageContext.request.userPrincipal.name}"/>">노래 리스트 출력 테스트</a></p>
		<p><a href ="${pageContext.request.contextPath}/upload/showUploadMusic">직접 음악 넣기 테스트</a></p>
		<p><a href ="${pageContext.request.contextPath}/upload/showUploadImage">이미지로 테스트</a></p>
		<p><a href ="javascript:document.getElementById('logout').submit()">Logout</a></p>
		
		<form id="logout" action="<c:url value="/logout"/>" method="post">
			<input type="hidden" name= "${_csrf.parameterName}" value="${_csrf.token}"/>
		</form>
		
		
		
		<form id="actionForm">
		<input type="hidden" name= "ID" value=''/>
				<%-- 	
					<input type='hidden' id='bno' name='bno' value='<c:out value="${board.bno}"/>'> 
					<input type='hidden' name='pageNum' value='<c:out value="${cri.pageNum}"/>'>
					<input type='hidden' name='amount' value='<c:out value="${cri.amount}"/>'>
					<input type="hidden" name='type' value='<c:out value="${cri.type}"/>'>
					<input type="hidden" name='keyword' value='<c:out value="${cri.keyword}"/>'> 
				--%>
		</form>
	</c:when>
	
	<c:otherwise>
		<p><a href ="${pageContext.request.contextPath}/member/login">Login</a></p>
		<p><a href ="${pageContext.request.contextPath}/member/showRegMember">회원가입</a></p>
	 </c:otherwise>
	</c:choose>
	
	<script type = "text/javascript">
/* $(document).ready(function(){
	var operForm = $("#actionForm");
	
	$("#col-list").on("click",function(e){
		e.preventDefault();
		operForm.attr("action","/upload/showCollection?
				${pageContext.request.userPrincipal.name}").submit();
	}); */
	
/* 	$("button[data-oper='list']").on("click",function(e){
		operForm.find("#bno").remove();
		operForm.attr("action","/board/list")
		operForm.submit();
	});	 */
/* }); */
</script>
</body>
</html>
