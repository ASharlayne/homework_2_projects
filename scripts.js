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

    const setStatus = (message, isError) => {
        if (!status) return;

        status.textContent = message;
        status.classList.toggle('is-error', Boolean(isError));
    };

    const labelFor = (control) => {
        if (control.dataset.label) {
            return control.dataset.label;
        }

        const labelText = contactForm.querySelector(`label[for="${control.id}"]`)?.textContent.trim();

        if (!labelText) {
            console.warn(`Control "${control.name || control.id || control.type}" has no data-label or associated label; using a generic error message.`);
            return 'This field';
        }

        return labelText;
    };

    const errorFor = (control) => {
        if (control.type === 'radio') {
            return 'Choose a preferred reply method.';
        }

        const label = labelFor(control);

        if (control.validity.valueMissing) {
            return `${label} is required.`;
        }

        if (control.validity.typeMismatch && control.type === 'email') {
            return 'Enter a valid email address, like name@example.com.';
        }

        if (control.validity.tooShort) {
            return `${label} must be at least ${control.minLength} characters.`;
        }

        return `Enter a valid ${label.toLowerCase()}.`;
    };

    const setFieldState = (control) => {
        const invalid = control.type === 'radio'
            ? !contactForm.querySelector('input[name="reply-method"]:checked')
            : !control.checkValidity();

        const field = control.closest('.form-field') || control.closest('.contact-method-group');

        if (field) {
            const message = field.querySelector('.error-message');

            if (message) {
                message.textContent = invalid ? errorFor(control) : '';
            } else {
                console.warn(`Control "${control.name || control.id || control.type}" has no .error-message element; its validation message cannot be shown.`);
            }

            field.classList.toggle('has-error', invalid);
        } else {
            console.warn(`Control "${control.name || control.id || control.type}" has no .form-field or .contact-method-group wrapper; its error styling cannot be shown.`);
        }

        control.setAttribute('aria-invalid', invalid ? 'true' : 'false');
        return !invalid;
    };

    const clearFieldStates = () => {
        contactForm.querySelectorAll('.error-message').forEach((message) => {
            message.textContent = '';
        });
        contactForm.querySelectorAll('.has-error').forEach((field) => {
            field.classList.remove('has-error');
        });
        controls.forEach((control) => control.setAttribute('aria-invalid', 'false'));
    };

    controls.forEach((control) => {
        control.addEventListener('blur', () => setFieldState(control));
        control.addEventListener('input', () => setFieldState(control));
        control.addEventListener('change', () => setFieldState(control));
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const valid = controls.map((control) => setFieldState(control)).every(Boolean);

        if (valid) {
            setStatus('Thanks! Your message is ready to send.', false);
            contactForm.reset();
            clearFieldStates();
            return;
        }

        setStatus('Please fix the errors below and try again.', true);
        const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');

        if (firstInvalid) {
            firstInvalid.focus();
        }
    });
}
