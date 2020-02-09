Paged List with js
============

리스트 페이징, 검색, 정렬을 손쉽게 할 수 있도록 제작된 모듈.

<h2>Usage</h2>

<pre><code>
import PagedList from "pagedList.js";
  
let array = [1,2,3,4,5];
let opts = {pageLength: 10, scope: 10};
  
let list = new PagedList(array, opts);
list.data // return object array
</pre></code>


<h2>Options</h2><br>

* pageLength // 노출될 페이지 수<br>
* scope      // 페이징 범위<br>

<h2>Methods</h2><br>

| Name | Description |
| ------ | ------ |
| sort(objectKey, order) | 정렬(정렬 키, 정렬 순서) |
| filter(objectKey, filterKey) | 검색(검색 키, 검색어) |
| go(pageNumber) | 페이지 이동(페이지 번호) |
| first() | 첫 페이지 이동 |
| last() | 마지막 페이지 이동 |
| prev() | 이전 페이지 이동 |
| next() | 다음 페이지 이동 |


