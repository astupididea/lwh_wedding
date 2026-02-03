const image1 = document.querySelector(".card .image1");
const image2 = document.querySelector(".card .image2");


// function toggleImage() {
//     setTimeout(function(){
//         image2.style.opacity = "1";
//         // image2.style.display = "block";
        
//         setTimeout(function(){
//             image2.style.opacity = "0";
//             // image2.style.display = "none";
            
//             // 다시 반복
//             toggleImage();
//         }, 2500);
        
//     }, 2500);
// }

// toggleImage();

// 타임아웃 한번 반복
setTimeout(function(){
    image2.style.opacity = "1";

    setTimeout(function(){
    image2.style.opacity = "0";

    }, 300);

}, 300);

// 이벤트 리스너
// image1.addEventListener('mouseenter', function(){
//     image2.style.display = "block";
// });

// image1.addEventListener('mouseleave', function(){
//     image2.style.display = "none";
// });


// 계좌번호

        const questions = document.querySelectorAll('.question');

        questions.forEach(question => {
            question.addEventListener('click', () => {
                const qnaItem = question.parentElement;
                
                // 현재 클릭한 항목이 이미 열려있는지 확인
                const isActive = qnaItem.classList.contains('active');
                
                // (선택사항) 다른 모든 항목 닫기
                // document.querySelectorAll('.qna-item').forEach(item => {
                //     item.classList.remove('active');
                // });
                
                // 현재 항목 토글
                if (isActive) {
                    qnaItem.classList.remove('active');
                } else {
                    qnaItem.classList.add('active');
                }
            });
        });
