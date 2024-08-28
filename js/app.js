const canvas = document.getElementById('captchaCanvas');
const ctx = canvas.getContext('2d');
const captchaInput = document.getElementById('captchaInput');
const refreshCaptcha = document.getElementById('refreshCaptcha');
const verifyCaptcha = document.getElementById('verifyCaptcha');
const message = document.getElementById('message');

let captchaText = '';

function generateCaptcha() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    captchaText = '';
    for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText(captchaText, 20, 40);

    // Draw random lines
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.stroke();
    }
}

function verifyCaptchaInput() {
    if (captchaInput.value === captchaText) {
        alert("کپچا با موفقیت تأیید شد (;")
    } else {
        alert(" لطفا دوباره امتحان کنید ):")

    }
}

refreshCaptcha.addEventListener('click', generateCaptcha);
verifyCaptcha.addEventListener('click', verifyCaptchaInput);

// Generate captcha on page load
generateCaptcha();
