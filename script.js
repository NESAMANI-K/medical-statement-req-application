document.getElementById('medicalStatementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Simple form validation
    let isValid = true;
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('medicalStatementForm').reset();
    } else {
        alert('Please fill all the required fields.');
    }
});
