# Website 07 – QR Code Reader App 📷🔍

![QR Code Reader Screenshot](./assets/Final%20Gif.gif)

[🌐 Visit QR Code Reader App](https://ranim-k.github.io/Web-Projects/Day-07%20QR%20Code%20Reader%20App/)

This is the **seventh project** in a 10-website development journey using **HTML**, **CSS**, and **JavaScript**.

---

## 📌 Overview

An intuitive and minimalistic **QR Code Reader App** that allows users to upload image files containing QR codes. The app scans the QR code using the powerful `jsQR` library and displays the decoded result instantly.

**Features:**
- Drag & Drop or browse QR code image files
- Instant QR code scanning via canvas
- Result displayed with:
  - Preview of the uploaded QR image
  - Decoded QR content in a styled textarea
- Copy result to clipboard with one click
- Clean transition between upload and result views

---

## 💡 Purpose

This project is focused on practicing **file handling**, **canvas manipulation**, and **third-party library integration** with JavaScript:

- Reading and validating image files using `FileReader`
- Rendering image to a `<canvas>` for pixel data extraction
- Using `jsQR` to decode QR codes from image data
- Creating seamless UI transitions between upload and result views
- Implementing copy-to-clipboard functionality for scanned content

---

## 🛠 Tools Used

- **HTML5** – for semantic structure and layout  
- **CSS3** – for styling, layout, and visual transitions  
- **JavaScript** – for file processing, QR scanning, and interactivity  
- **[jsQR](https://github.com/cozmo/jsQR)** – JavaScript QR code scanner library (from canvas image data)

---

## 🚀 How It Works

1. Users can either drag & drop a QR image or use the "Browse Files" button.
2. The app reads the image, renders it into a canvas, and processes pixel data.
3. `jsQR` scans the canvas for a QR code and returns the result.
4. The decoded result is displayed alongside a preview of the image.
5. Users can copy the result or return to scan another code.

---

## 📁 File Structure

```
📦 qr-code-reader-app/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── qr-reader-preview.gif (optional demo gif/screenshot)
```

---

## 🧠 What You’ll Learn

- Handling file uploads in JavaScript
- Working with the `<canvas>` API for image processing
- Using third-party libraries (like `jsQR`) effectively
- DOM manipulation and dynamic content rendering
- Improving UX with container transitions and visual feedback

![QR Code Reader App Screenshot](./assets/qr-reader-preview.gif)


**🔗 Try it out with your own QR code images and see the magic happen!**
