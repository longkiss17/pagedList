Paged List with js
============

리스트 페이징, 검색, 정렬을 손쉽게 할 수 있도록 제작된 모듈.

<h2>#Usage</h2> <br>
<code>
>>
import PagedList from "pagedList.js";<br /> 
let list = new PagedList(array, opts);<br /> 
list.data // return object array>>
</code>

<h2>Options</h2><br>

pageLength // 노출될 페이지 수<br>
scope      // 페이징 범위<br>

<h2>Methods</h2><br>
sort(objectKey, order);           // 정렬(정렬 키, 정렬 순서)<br>
filter(objectKey, filterKey);     // 검색(검색 키, 검색어)<br>
go(pageNumber);                   // 페이지 이동(페이지 번호)<br>
first()                           // 첫 페이지 이동<br>
last()                            // 마지막 페이지 이동<br>
prev()                            // 이전 페이지 이동<br>
next()                            // 다음 페이지 이동<br>
