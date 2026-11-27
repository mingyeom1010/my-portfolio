
// 현재 연도 자동 표시
const footer = document.querySelector("footer");

footer.innerHTML = `<p>© ${new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>`;

// TOP 버튼 생성
const topButton = document.createElement("button");

topButton.textContent = "TOP";

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.padding = "12px 18px";
topButton.style.backgroundColor = "#238636";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.borderRadius = "6px";
topButton.style.cursor = "pointer";

// 버튼 클릭 시 맨 위로 이동
topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 화면에 버튼 추가
document.body.appendChild(topButton);
