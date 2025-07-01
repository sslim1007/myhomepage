// 이 파일은 헤더에 필요한 자바스크립트 코드를 넣는 곳이에요.
// 지금은 특별한 기능이 없어서 비어 있어요.
// 나중에 메뉴를 누르면 화면이 이동하거나, 로그인 기능을 추가할 때 여기에 코드를 넣을 수 있어요.

// 히어로 캐러셀(슬라이드) 기능 만들기
// 슬라이드들을 모두 찾아요 (이미지와 문구가 들어있는 부분)
const slides = document.querySelectorAll('.slide');
// 왼쪽, 오른쪽 화살표 버튼을 찾아요
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');
let current = 0; // 현재 보여주는 슬라이드 번호 (0부터 시작해요)
let timer; // 자동 넘김 타이머를 저장해요

// 슬라이드를 보여주는 함수
function showSlide(idx) {
  // 모든 슬라이드를 안 보이게 해요
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });
  // idx번째 슬라이드만 보이게 해요
  slides[idx].classList.add('active');
}

// 다음 슬라이드로 넘어가는 함수
function nextSlide() {
  // 현재 번호를 1 늘려요. 마지막이면 다시 처음으로 돌아가요.
  current = (current + 1) % slides.length;
  showSlide(current);
}
// 이전 슬라이드로 가는 함수
function prevSlide() {
  // 현재 번호를 1 줄여요. 0보다 작아지면 마지막 슬라이드로 가요.
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// 오른쪽 버튼을 누르면 다음 슬라이드로!
rightBtn.addEventListener('click', () => {
  nextSlide();
  resetTimer(); // 버튼 누르면 자동 넘김 타이머도 다시 시작해요
});
// 왼쪽 버튼을 누르면 이전 슬라이드로!
leftBtn.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

// 3초마다 자동으로 다음 슬라이드로 넘어가요
function startTimer() {
  timer = setInterval(nextSlide, 3000); // 3초마다 nextSlide 함수 실행
}
function resetTimer() {
  clearInterval(timer); // 기존 타이머를 멈추고
  startTimer(); // 다시 시작해요
}

// 처음에 첫 슬라이드를 보여주고, 자동 넘김 시작!
showSlide(current);
startTimer();

// 제품 섹션 더보기 버튼 기능 만들기
// 모든 더보기 버튼을 찾아요
const moreBtns = document.querySelectorAll('.more-btn');
moreBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // 버튼이 속한 제품 설명 부분을 찾아요
    const desc = btn.parentElement;
    const shortText = desc.querySelector('.desc-short');
    const fullText = desc.querySelector('.desc-full');
    // 만약 전체 설명이 안 보이면 전체 설명을 보여줘요
    if (fullText.style.display === 'none') {
      shortText.style.display = 'none'; // 짧은 설명 숨기기
      fullText.style.display = 'block'; // 전체 설명 보이기
      btn.textContent = '닫기'; // 버튼 글씨를 '닫기'로 바꿔요
    } else {
      shortText.style.display = 'block'; // 짧은 설명 보이기
      fullText.style.display = 'none'; // 전체 설명 숨기기
      btn.textContent = '더보기'; // 버튼 글씨를 '더보기'로 바꿔요
    }
  });
});

// 인사말(브랜드 히스토리) 더보기 버튼 기능 만들기
const greetingMoreBtn = document.querySelector('.greeting-more-btn');
if (greetingMoreBtn) {
  greetingMoreBtn.addEventListener('click', function() {
    // 버튼이 속한 인사말 부분을 찾아요
    const msgBox = greetingMoreBtn.parentElement;
    const shortText = msgBox.querySelector('.greeting-short');
    const fullText = msgBox.querySelector('.greeting-full');
    // 전체 인사말이 안 보이면 전체를 보여줘요
    if (fullText.style.display === 'none') {
      shortText.style.display = 'none'; // 4줄 숨기기
      fullText.style.display = 'block'; // 전체 인사말 보이기
      greetingMoreBtn.textContent = '닫기'; // 버튼 글씨를 '닫기'로
    } else {
      shortText.style.display = 'block'; // 4줄 보이기
      fullText.style.display = 'none'; // 전체 인사말 숨기기
      greetingMoreBtn.textContent = '더보기'; // 버튼 글씨를 '더보기'로
    }
  });
}

// Q&A 질문 제출 시 자동 댓글 기능 만들기
const qaForm = document.querySelector('.qa-form');
const qaReply = document.querySelector('.qa-reply');
if (qaForm && qaReply) {
  qaForm.addEventListener('submit', function(e) {
    e.preventDefault(); // 폼이 새로고침되지 않게 막아요
    // 입력값을 모두 비워요
    qaForm.reset();
    // 접수 메시지를 보여줘요
    qaReply.style.display = 'block';
    // 3초 후 메시지를 다시 숨겨요
    setTimeout(function() {
      qaReply.style.display = 'none';
    }, 3000);
  });
} 