/* section captcha */
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

// ---------------------------------------------------------------------------------------------------------
/*
section vojohat:
signin data user vojohat :
*/
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // جلوگیری از ارسال فرم

    // نمایش پیام ثبت نام
    document.getElementById('message').innerText = 'ثبت شدید';

    // پاک کردن فرم
    this.reset();
});

/*
section vojohat:
selected radio button
*/
const buttons = document.querySelectorAll('.gender-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        const input = button.querySelector('input');
        input.checked = true;
    });
});
// -----------------------------------------------------------------------------------------------------
// checkbox Vojohat:
document.addEventListener('DOMContentLoaded', () => {
    const receiptCheckbox = document.getElementById('receiptCheckbox');
    const receiptForm = document.getElementById('receiptForm');

    receiptCheckbox.addEventListener('change', () => {
        if (receiptCheckbox.checked) {
            receiptForm.classList.add('active');
        } else {
            receiptForm.classList.remove('active');
        }
    });

    document.getElementById('submitBtn').addEventListener('click', () => {
        const address = document.getElementById('address').value;
        const province = document.getElementById('province').value;
        const county = document.getElementById('county').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const street = document.getElementById('street').value;
        const alley = document.getElementById('alley').value;

        if (address && province && county && phoneNumber && street && alley) {
            alert('اطلاعات با موفقیت ثبت شد.');
            // شما می‌توانید اطلاعات را به سرور ارسال کنید یا در جایی ذخیره کنید
            console.log({
                address,
                province,
                county,
                phoneNumber,
                street,
                alley
            });
        } else {
            alert('لطفاً تمام فیلدها را پر کنید.');
        }
    });
});
// ------------------------------------------------------------------------------------------------------------
const toggleCheckbox = document.getElementById('toggleCheckbox');
const addressInputs = document.getElementById('addressInputs');
const submitButton = document.getElementById('submitButton');
const messagePost = document.getElementById('message');

// نمایش و پنهان کردن div بر اساس وضعیت چک باکس
toggleCheckbox.addEventListener('change', function () {
    if (this.checked) {
        addressInputs.style.display = 'block';
    } else {
        addressInputs.style.display = 'none';
        messagePost.textContent = ''; // پاک کردن پیام
    }
});

// ارسال اطلاعات
submitButton.addEventListener('click', function () {
    const city = document.getElementById('city').value;
    const county = document.getElementById('county').value;
    const street = document.getElementById('street').value;
    const postalCode = document.getElementById('postalCode').value;

    if (city && county && street && postalCode) {
        messagePost.textContent = 'اطلاعات ثبت شد.';
        // اینجا می‌توانید اطلاعات را به سرور ارسال کنید
    } else {
        messagePost.textContent = 'لطفاً همه فیلدها را پر کنید.';
    }
});
// ------------------------------------------------------------------------------------
// add selecte options
const addNewButton = document.getElementById('addNewButton');
const newEntryDiv = document.getElementById('newEntryDiv');

addNewButton.addEventListener('click', () => {
    // تغییر وضعیت نمایش div
    if (newEntryDiv.classList.contains('hidden')) {
        newEntryDiv.classList.remove('hidden'); // نمایش div
    } else {
        newEntryDiv.classList.add('hidden'); // پنهان کردن div
    }
});