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
    document.getElementById('copy').disabled = false;
};

const copyToClipboard = () => {
    const password = document.getElementById('result').textContent;

    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Password copied to clipboard!');
};

document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyToClipboard);
