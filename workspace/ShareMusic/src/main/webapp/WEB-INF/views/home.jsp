<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>
	<c:forEach var="listarray" items="${li}">
		<p><c:out value="${listarray}"> </c:out>
	</c:forEach> 
</body>
</html>
