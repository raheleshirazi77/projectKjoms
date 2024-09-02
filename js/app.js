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
    event.preventDefault(); // jologiri az send form

    // show message signin
    document.getElementById('message').innerText = 'ثبت شدید';

    //clear form data
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
            // save or send for server!?
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

// show or hide checkbox
toggleCheckbox.addEventListener('change', function () {
    if (this.checked) {
        addressInputs.style.display = 'block';
    } else {
        addressInputs.style.display = 'none';
        messagePost.textContent = ''; // cleare mesages
    }
});

// send data
submitButton.addEventListener('click', function () {
    const city = document.getElementById('city').value;
    const county = document.getElementById('county').value;
    const street = document.getElementById('street').value;
    const postalCode = document.getElementById('postalCode').value;

    if (city && county && street && postalCode) {
        messagePost.textContent = 'اطلاعات ثبت شد.';
        // location send data for server
    } else {
        messagePost.textContent = 'لطفاً همه فیلدها را پر کنید.';
    }
});
// ------------------------------------------------------------------------------------
// add selecte options
document.getElementById('toggleButton').addEventListener('click', function () {
    const paymentDiv = document.getElementById('paymentDiv');
    paymentDiv.style.display = paymentDiv.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('paymentSelect').addEventListener('change', function () {
    const selectedValue = this.value;
    const extraButtons = document.getElementById('extraButtons');
    const amountDiv = document.getElementById('amountDiv');

    // نمایش دکمه‌ها
    if (selectedValue === 'zakat') {
        extraButtons.style.display = 'block';
    } else {
        extraButtons.style.display = 'none';
        amountDiv.style.display = 'none';
    }
});

// دکمه‌های سادات و غیر سادات
document.getElementById('sadatButton').addEventListener('click', function () {
    document.getElementById('amountDiv').style.display = 'block';
});

document.getElementById('ghairSadatButton').addEventListener('click', function () {
    document.getElementById('amountDiv').style.display = 'block';
});