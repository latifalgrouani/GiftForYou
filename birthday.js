// Target Date: 1 Janvier 2026
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

function openGift() {
    const wrapper = document.getElementById("envelope-wrapper");
    const music = document.getElementById("music");
    const mainContent = document.getElementById("main-content");

    // 1. Play Music
    music.play().catch(e => console.log("Music click required"));

    // 2. Start Envelope Animation
    wrapper.classList.add("open");

    // 3. Reveal Surprise
    setTimeout(() => {
        wrapper.style.opacity = "0";
        wrapper.style.transform = "scale(0.8)";
        
        setTimeout(() => {
            wrapper.classList.add("d-none");
            mainContent.classList.remove("d-none");
            // Start Countdown
            startCountdown();
        }, 500);
    }, 2000);
}

function startCountdown() {
    const countdownEl = document.getElementById("countdown");
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(timer);
            countdownEl.innerHTML = "🎉 HAPPY BIRTHDAY MY BEST FRIEND 🎉";
            celebrate();
            return;
        }

        const d = Math.floor(distance / (1000*60*60*24));
        const h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        const m = Math.floor((distance % (1000*60*60)) / (1000*60));
        const s = Math.floor((distance % (1000*60)) / 1000);

        countdownEl.innerHTML = `${d}j ${h}h ${m}m ${s}s`;
    }, 1000);
}

function celebrate() {
    // Tfi l-chmo3
    document.querySelectorAll(".candle").forEach(c => {
        c.style.animation = "none";
        c.textContent = "💨";
    });

    // Fireworks
    setInterval(() => {
        const f = document.createElement("div");
        f.innerHTML = "✨";
        f.style.position = "absolute";
        f.style.left = Math.random() * 100 + "vw";
        f.style.top = "100vh";
        f.style.fontSize = "30px";
        f.style.zIndex = "1000";
        f.style.transition = "all 2s ease-out";
        document.body.appendChild(f);

        setTimeout(() => {
            f.style.top = Math.random() * 50 + "vh";
            f.style.opacity = "0";
            f.style.transform = "scale(4) rotate(360deg)";
        }, 100);

        setTimeout(() => f.remove(), 2000);
    }, 300);
}