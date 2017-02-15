<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: dorsa
  Date: 2/15/17
  Time: 2:05 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>home</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="<c:url value="/resources/jquery-ui.js"/> "></script>
    <script src="<c:url value="/resources/chat-window.js"/> "></script>
    <script src="<c:url value="/resources/jquery.cometd.js"/> "></script>
    <script src="<c:url value="/resources/jquery.cometd-ack.js"/> "></script>
    <script src="<c:url value="/resources/jquery.cometd-binary.js"/> "></script>
    <script src="<c:url value="/resources/jquery.cometd-reload.js"/> "></script>
    <script src="<c:url value="/resources/jquery.cometd-timestamp.js"/> "></script>
    <script src="<c:url value="/resources/jquery.cometd-timesync.js"/> "></script>
</head>
<body>
<div id='members'></div>
</body>
</html>
