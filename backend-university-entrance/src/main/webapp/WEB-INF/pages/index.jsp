<%-- 
    Document   : index
    Created on : Aug 5, 2023, 1:38:31 PM
    Author     : nguye
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<section class="container">
    <div class="mt-1">
        <a href="<c:url value="/users" />" class="btn btn-info mt-1">Thêm sản phẩm</a>
    </div>
    <ul class="pagination mt-2 container">
        <li class="page-item"><a class="page-link" href="#">All</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
    </ul>
<table class="table table-hover container mt-1">
        <thead>
            <tr>
                <th>avatar</th>
                <th>Id</th>
                <th>userName</th>
                <th>password</th>
                <th>date</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${users}" var="u">
                <tr>
                    <td>
                        <img src="${u.avatar}" alt="${u.username}" width="120" />
                    </td>
                    <td>${u.id}</td>
                    <td>${u.username}</td>
                    <td>${u.password}</td>
                    <td>${u.dateOfBird}</td>
                    <td>
                        <a href="#" class="btn btn-success">update</a>
                        <button class="btn btn-danger" >delete</button>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</section>