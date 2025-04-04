// 1. 특정 버튼 클릭 시 오랜지 부착, 기존 오랜지 클래스가 있던 버튼 오랜지 삭제
// 버튼 누르면
// 모든 버튼에 붙은 오랜지 클래스명 제거
// 버튼 0 에 오랜지 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// div 0 에 show 클래스명 추가

var tabButton = document.querySelectorAll('.tab-button');
var list = document.querySelector('.list');
var contents = document.querySelectorAll('.tab-content');

// 이벤트 버블링을 이용해서 부모태그도 클릭됨
list.addEventListener('click', function(e){
    var id = e.target.dataset.id;
    탭열기(id);
});

function 탭열기(i) {
    tabButton.forEach(el => {
        el.className = 'tab-button';
    });
    contents.forEach(el => {
        el.className = 'tab-content';
    });
    tabButton[i].classList.add("orange");
    contents[i].classList.add("show");
}

