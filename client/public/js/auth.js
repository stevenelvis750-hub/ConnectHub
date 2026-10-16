
const authStyles = `
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    color: #f4f5ff;
    background:
        radial-gradient(ellipse at top, #25204a 0%, transparent 55%),
        #0b0d17;
}

.auth-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 16px;
}

.auth-card {
    width: 100%;
    max-width: 440px;
    padding: 36px;
    border: 1px solid #303249;
    border-radius: 22px;
    background: rgba(20, 22, 39, 0.96);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
}

.brand {
    display: inline-block;
    margin-bottom: 28px;
    color: #ffffff;
    font-size: 27px;
    font-weight: 800;
    text-decoration: none;
}

.brand span {
    color: #8b7cff;
}

.auth-heading h1 {
    margin-bottom: 10px;
    font-size: 27px;
}

.auth-heading p,
.auth-footer {
    color: #a9adc5;
    line-height: 1.6;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 25px;
}

label {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 600;
}

input {
    width: 100%;
    padding: 13px 14px;
    color: #ffffff;
    background: #101221;
    border: 1px solid #353951;
    border-radius: 10px;
    outline: none;
    font-size: 15px;
}

input:focus {
    border-color: #8b7cff;
    box-shadow: 0 0 0 3px rgba(139, 124, 255, 0.15);
}

button {
    margin-top: 18px;
    padding: 14px;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    background: linear-gradient(135deg, #7865ff, #9a65f6);
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s, opacity 0.2s;
}

button:hover {
    transform: translateY(-2px);
}

button:disabled {
    opacity: 0.65;
    cursor: wait;
}

#formMessage {
    min-height: 20px;
    font-size: 14px;
    line-height: 1.5;
}

.auth-footer {
    margin-top: 24px;
    text-align: center;
    font-size: 14px;
}

.auth-footer a {
    color: #a99cff;
    font-weight: 700;
    text-decoration: none;
}

@media (max-width: 480px) {
    .auth-card {
        padding: 25px 20px;
    }

    .auth-heading h1 {
        font-size: 23px;
    }
}
`;

const authStyleElement = document.createElement("style");
authStyleElement.textContent = authStyles;
document.head.appendChild(authStyleElement);
