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



# toss-assignment

> 토스팀 데이터시각화 과제 - 이용철

안녕하세요. 이용철입니다.

토스팀 데이터시각화 과제 진행하면서 zeplin을 처음 사용해봤는데요.  
zeplin에서 사용된 font(TDSiOS)를 찾지 못해 과제에는 반영하지 못했습니다.

프로젝트는 아래와 같이 스크립트 실행 후 localhost:8080 접속하면 확인하실 수 있습니다.
혹시 다른 이유로 실행이 안되거나 확인이 불가할 경우 말씀주시면 어떻게든 방법을 찾아 빠르게 대응해드리겠습니다.

감사합니다.
이용철 드림.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
