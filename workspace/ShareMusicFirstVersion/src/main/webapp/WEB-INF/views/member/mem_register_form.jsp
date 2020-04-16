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
	<form action="${pageContext.request.contextPath}/member/doRegMember"
		method="post">
		<table>
			<tr>
				<td>아이디 :</td>
				<td><input type="text" name="userId" style = "text-align:center;" placeholder="아이디" size="10" /></td>
				<!--아이디 10자로 제한 -->
			</tr>
			<tr>
				<td>비밀번호 :</td>
				<td><input type="password" name="userPw" style = "text-align:center;" placeholder="비밀번호" size="10" /></td>
				<!--패스워드 10자로 제한 -->
			</tr>
			<tr>
				<td>이름 :</td>
				<td>
				<input type="text" name="userName" class="form-control" style = "text-align:center;" placeholder="이름" required autofocus></td>
			</tr>
			<tr>
				<td>이메일 :</td>
				<td><input type="text" name="userEmail" style = "text-align:center;" placeholder="이메일" /></td>
			</tr>
			<tr>
				<td>생년월일 : </td>
				<td><input type="text" name="userBirthYear" style = "text-align:center;" placeholder="출생년도(4자)" aria-label="출생년도(4자)" class="int" maxlength="4"> 
				년 
				<select name="userBirthMonth" style = "text-align:center;">
						<option selected="selected" value="">선택</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
				</select> 월 
				<select name="userBirthDay" style = "text-align:center;">
						<option selected="selected" value="">선택</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
						<option value="22">22</option>
						<option value="23">23</option>
						<option value="24">24</option>
						<option value="25">25</option>
						<option value="26">26</option>
						<option value="27">27</option>
						<option value="28">28</option>
						<option value="29">29</option>
						<option value="30">30</option>
						<option value="31">31</option>
				</select> 일</td>
			</tr>
			<tr>
				<td><input type="hidden" name="_csrf" value="${_csrf.token}" />
					<input type="submit" style = "text-align:center;" value="가입" /></td>
			</tr>
		</table>
	</form>
</body>
</html>