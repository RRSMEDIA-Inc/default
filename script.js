const generatePassword = () => {
    const length = document.getElementById('length').value;
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_-+=<>?';

    const allChars = lowercase + uppercase + numbers + symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('result').textContent = password;
};

document.getElementById('generate').addEventListener('click', generatePassword);
