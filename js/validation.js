const modal = document.getElementById('modal');
const form = document.querySelector('form');
const fullNameInput = document.getElementById('full_name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const paymentMethodSelect = document.getElementById('payment_method');

// Функция для отображения ошибки
function showError(input, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.style.marginTop = '5px';
    errorElement.textContent = message;
    input.parentElement.insertBefore(errorElement, input.nextSibling);
}

// Удаляем все предыдущие сообщения об ошибках
function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
}

// Валидация ФИО
function validateFullName() {
    const fullName = fullNameInput.value.trim();
    const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
    if (!fullName) {
        showError(fullNameInput, 'Поле ФИО не должно быть пустым');
        return false;
    } else if (!namePattern.test(fullName)) {
        showError(fullNameInput, 'ФИО должно содержать только буквы и пробелы');
        return false;
    }
    return true;
}

// Валидация телефона
function validatePhone() {
    const phone = phoneInput.value.trim();
    const phonePattern = /^(\+7|8)?\d{10}$/;
    if (!phone) {
        showError(phoneInput, 'Поле Номер телефона не должно быть пустым');
        return false;
    } else if (!phonePattern.test(phone)) {
        showError(phoneInput, 'Введите номер телефона в формате +7 или 8 и 10 цифр, например, +79991234567');
        return false;
    }
    return true;
}

// Валидация Email
function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError(emailInput, 'Поле E-mail не должно быть пустым');
        return false;
    } else if (!emailPattern.test(email)) {
        showError(emailInput, 'Введите корректный адрес электронной почты');
        return false;
    }
    return true;
}

// Валидация способа оплаты
function validatePaymentMethod() {
    if (!paymentMethodSelect.value) {
        showError(paymentMethodSelect, 'Пожалуйста, выберите способ оплаты');
        return false;
    }
    return true;
}

// Функция для отображения модального окна с данными
function showModal() {
    modalFullName.textContent = fullNameInput.value;
    modalPhone.textContent = phoneInput.value;
    modalEmail.textContent = emailInput.value;
    modalPayment.textContent = paymentMethodSelect.options[paymentMethodSelect.selectedIndex].text;
    
    modal.style.display = 'block';
}

// Функция для скрытия модального окна при клике вне его области
function hideModal(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Обработчик отправки формы
form.addEventListener('submit', function(event) {
    clearErrors();

    const isFullNameValid = validateFullName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isPaymentMethodValid = validatePaymentMethod();

    if (isFullNameValid && isPhoneValid && isEmailValid && isPaymentMethodValid) {
        event.preventDefault();

        showModal();
    } else {
        event.preventDefault();
    }
});

window.addEventListener('click', hideModal);