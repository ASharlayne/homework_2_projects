const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    const status = contactForm.querySelector('.form-status');
    const controls = contactForm.querySelectorAll('input, textarea');

    const errorFor = (control) => {
        if (control.type === 'radio') {
            return 'Choose a preferred reply method.';
        }

        if (control.validity.valueMissing) {
            return `${control.dataset.label} is required.`;
        }

        if (control.validity.typeMismatch && control.type === 'email') {
            return 'Enter a valid email address, like name@example.com.';
        }

        if (control.validity.tooShort) {
            return `${control.dataset.label} must be at least ${control.minLength} characters.`;
        }

        return `Enter a valid ${control.dataset.label.toLowerCase()}.`;
    };

    const setFieldState = (control) => {
        const field = control.closest('.form-field') || control.closest('.contact-method-group');
        if (!field) return true;

        const invalid = control.type === 'radio'
            ? !contactForm.querySelector('input[name="reply-method"]:checked')
            : !control.checkValidity();

        const message = field.querySelector('.error-message');
        if (message) {
            message.textContent = invalid ? errorFor(control) : '';
        }

        field.classList.toggle('has-error', invalid);
        control.setAttribute('aria-invalid', invalid ? 'true' : 'false');
        return !invalid;
    };

    controls.forEach((control) => {
        control.addEventListener('blur', () => setFieldState(control));
        control.addEventListener('input', () => setFieldState(control));
        control.addEventListener('change', () => setFieldState(control));
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const valid = Array.from(controls).map(setFieldState).every(Boolean);

        if (valid) {
            status.textContent = 'Thanks! Your message is ready to send.';
            status.classList.remove('is-error');
            contactForm.reset();
            contactForm.querySelectorAll('.error-message').forEach((message) => {
                message.textContent = '';
            });
            contactForm.querySelectorAll('.has-error').forEach((field) => {
                field.classList.remove('has-error');
            });
            controls.forEach((control) => control.setAttribute('aria-invalid', 'false'));
        } else {
            status.textContent = 'Please fix the errors below and try again.';
            status.classList.add('is-error');
            contactForm.querySelector('[aria-invalid="true"]')?.focus();
        }
    });
}
