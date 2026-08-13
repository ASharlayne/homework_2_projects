const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    const status = contactForm.querySelector('.form-status');
    const controls = contactForm.querySelectorAll('input, textarea');

    const setFieldState = (control) => {
        const field = control.closest('.form-field') || control.closest('.contact-method-group');
        if (!field) return true;

        const invalid = control.type === 'radio'
            ? !contactForm.querySelector('input[name="reply-method"]:checked')
            : !control.checkValidity();

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
        const valid = Array.from(controls).every(setFieldState);

        if (valid) {
            status.textContent = 'Thanks! Your message is ready to send.';
            contactForm.reset();
        } else {
            status.textContent = '';
            contactForm.querySelector('[aria-invalid="true"]')?.focus();
        }
    });
}
