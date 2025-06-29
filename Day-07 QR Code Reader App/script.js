document.addEventListener('DOMContentLoaded', () => {
    const uploadContainer = document.querySelector('.container');
    const resultContainer = document.querySelector('.container2');
    const browseButton = document.querySelector('.brows');
    const uploadSpace = document.querySelector('.upload-space');
    const codeBox = document.querySelector('.code');
    const textarea = document.querySelector('.result textarea');
    const closeButton = document.querySelector('.buttons button:first-child');
    const copyButton = document.querySelector('.buttons button:last-child');

    // Show upload container on load
    uploadContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    // Create file input
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    browseButton.addEventListener('click', () => fileInput.click());

    // Handle file selection
    fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));
    uploadSpace.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadSpace.style.backgroundColor = '#cad8ff';
    });

    uploadSpace.addEventListener('dragleave', () => {
        uploadSpace.style.backgroundColor = '#cad8ffa2';
    });

    uploadSpace.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadSpace.style.backgroundColor = '#cad8ffa2';
        const file = e.dataTransfer.files[0];
        handleFile(file);
    });

    function handleFile(file) {
        if (!file || !file.type.startsWith('image/')) {
            alert('Please upload a valid image file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, canvas.width, canvas.height);

                if (code) {
                    showResult(img.src, code.data);
                } else {
                    alert('No QR code detected. Try another image.');
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }

    function showResult(imgSrc, data) {
        // Hide upload container and show result
        uploadContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        // Set QR image
        codeBox.style.backgroundImage = `url('${imgSrc}')`;
        codeBox.style.backgroundSize = 'cover';
        codeBox.style.backgroundPosition = 'center';

        // Set QR result text
        textarea.value = data;
    }

    closeButton.addEventListener('click', () => {
        resultContainer.style.display = 'none';
        uploadContainer.style.display = 'block';
        textarea.value = '';
        codeBox.style.backgroundImage = 'none';
    });

    copyButton.addEventListener('click', () => {
        textarea.select();
        document.execCommand('copy');
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 1500);
    });
});
