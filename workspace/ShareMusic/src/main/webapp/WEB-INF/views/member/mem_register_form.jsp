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
	<h1>회원가입</h1>
	<form action="${pageContext.request.contextPath}/member/doRegMember" method="post">
		 <table>
			<tr>
				<td>아이디 :</td>	
				<td><input type="text" name="userId" size="10"/></td><!--아이디 10자로 제한 -->
			</tr>
			<tr>
				<td>비밀번호 :</td>	
				<td><input type="password" name="userPw" size="10"/></td><!--패스워드 10자로 제한 -->
			</tr>
			
			<tr>
				<td>이메일 :</td>	
				<td><input type="text" name="userEmail"/></td>
			</tr>
			
			<tr>
				<td>
					<input type="hidden" name="_csrf"  value="${_csrf.token}" />
					<input type="submit" value="가입" />
				</td>
			</tr>
		</table>
	</form>
</body>
</html>