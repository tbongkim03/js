// 1. 특정 버튼 클릭 시 오랜지 부착, 기존 오랜지 클래스가 있던 버튼 오랜지 삭제
// 버튼 누르면
// 모든 버튼에 붙은 오랜지 클래스명 제거
// 버튼 0 에 오랜지 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// div 0 에 show 클래스명 추가

var btn0 = document.querySelectorAll('.tab-button')[0];
var btn1 = document.querySelectorAll('.tab-button')[1];
var btn2 = document.querySelectorAll('.tab-button')[2];

var list = document.querySelector('.list').children;
var container = document.querySelector(".container").children;

var tab0 = document.querySelectorAll('.tab-content')[0];
var tab1 = document.querySelectorAll('.tab-content')[1];
var tab2 = document.querySelectorAll('.tab-content')[2];    

btn0.addEventListener('click', function(){
    for (let i = 0; i < list.length; i++) {
        list.item(i).classList.remove("orange");
    }
    for (let j = 0; j < container.length; j++) {
        container.item(j).classList.remove("show");
    }
    btn0.classList.add("orange");
    tab0.classList.add("show");
});
btn1.addEventListener('click', function(){
    for (let i = 0; i < list.length; i++) {
        list.item(i).classList.remove("orange");
    }
    for (let j = 0; j < container.length; j++) {
        container.item(j).classList.remove("show");
    }
    btn1.classList.add("orange");
    tab1.classList.add("show");
});
btn2.addEventListener('click', function(){
    for (let i = 0; i < list.length; i++) {
        list.item(i).classList.remove("orange");
    }
    for (let j = 0; j < container.length; j++) {
        container.item(j).classList.remove("show");
    }
    btn2.classList.add("orange");
    tab2.classList.add("show");
});