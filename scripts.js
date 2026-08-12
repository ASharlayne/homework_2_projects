const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    const status = contactForm.querySelector('.form-status');
    const controls = Array.from(contactForm.querySelectorAll('input, textarea'));

    if (!status) {
        console.warn('Contact form is missing a .form-status element; submit feedback will not be announced.');
    }

    if (controls.length === 0) {
        console.warn('Contact form has no input or textarea controls to validate.');
    }

    const setStatus = (message) => {
        if (status) {
            status.textContent = message;
        }
    };

    const setFieldState = (control) => {
        const invalid = control.type === 'radio'
            ? !contactForm.querySelector('input[name="reply-method"]:checked')
            : !control.checkValidity();

        const field = control.closest('.form-field') || control.closest('.contact-method-group');

        if (field) {
            field.classList.toggle('has-error', invalid);
        } else {
            console.warn(`Control "${control.name || control.id || control.type}" has no .form-field or .contact-method-group wrapper; its error styling cannot be shown.`);
        }

        control.setAttribute('aria-invalid', invalid ? 'true' : 'false');
        return !invalid;
    };

    const clearFieldStates = () => {
        controls.forEach((control) => {
            const field = control.closest('.form-field') || control.closest('.contact-method-group');
            if (field) {
                field.classList.remove('has-error');
            }
            control.setAttribute('aria-invalid', 'false');
        });
    };

    controls.forEach((control) => {
        control.addEventListener('blur', () => setFieldState(control));
        control.addEventListener('input', () => setFieldState(control));
        control.addEventListener('change', () => setFieldState(control));
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const results = controls.map((control) => setFieldState(control));
        const valid = results.every(Boolean);

        if (valid) {
            setStatus('Thanks! Your message is ready to send.');
            contactForm.reset();
            clearFieldStates();
            return;
        }

        setStatus('Please fix the highlighted fields and try again.');
        const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');

        if (firstInvalid) {
            firstInvalid.focus();
        }
    });
}
