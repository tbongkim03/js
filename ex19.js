// 1. 특정 버튼 클릭 시 오랜지 부착, 기존 오랜지 클래스가 있던 버튼 오랜지 삭제
// 버튼 누르면
// 모든 버튼에 붙은 오랜지 클래스명 제거
// 버튼 0 에 오랜지 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// div 0 에 show 클래스명 추가

var tabButton = document.querySelectorAll('.tab-button');
var list = document.querySelector('.list').children;
// var container = document.querySelector(".container").children;
var contents = document.querySelectorAll('.tab-content');

// 이렇게 줄일 수 있다니..
for (let i = 0; i < list.length; i++) {
    tabButton[i].addEventListener('click', function(){
        tabButton.forEach(el => {
            el.className = 'tab-button';
        });
        contents.forEach(el => {
            el.className = 'tab-content';
        });
        tabButton[i].classList.add("orange");
        contents[i].classList.add("show");
    });
}