# pagedList.js
Paged List with js

리스트 페이징, 검색, 정렬을 손쉽게 할 수 있도록 제작된 모듈.

Usage

import PagedList from "pagedList.js";
let list = new PagedList(array, opts);
list.data // return object array


Options
pageLength // 노출될 페이지 수
scope      // 페이징 범위


Methods
sort(objectKey, order);           // 정렬(정렬 키, 정렬 순서)
filter(objectKey, filterKey);     // 검색(검색 키, 검색어)
go(pageNumber);                   // 페이지 이동(페이지 번호)
first()                           // 첫 페이지 이동
last()                            // 마지막 페이지 이동
prev()                            // 이전 페이지 이동
next()                            // 다음 페이지 이동
