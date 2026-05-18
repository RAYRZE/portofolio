# RRZE Portfolio  

**Personal portfolio website** showcasing my work, skills, and contact information.  
Built with **HTML**, **CSS**, and **JavaScript** – fully responsive and includes a working contact form powered by **EmailJS**.  

🔗 **Live demo:** *(https://rayrze.github.io/portofolio/)*  

---

## ✨ Features  

- 📱 Fully responsive design (mobile, tablet, desktop)  
- 👤 **About page** with bio and skill highlights  
- 📬 **Contact form** that sends real emails via EmailJS  
- 🖼️ **Project showcase** section with image cards  
- 💬 Inspirational quote section  
- 🔗 Social media links (Twitter, GitHub)  
- 🧭 Consistent navigation across all pages  

---

## 🛠️ Technologies Used  

| Frontend     | Services/Tools      |
|--------------|---------------------|
| HTML5        | EmailJS (email API) |
| CSS3         | Font Awesome (icons)|
| JavaScript   | Custom CSS reset    |
| Flexbox/Grid | Google Fonts (Segoe)|

---

## 📁 Project Structure  

```
portfolio/
├── index.html               # Homepage (hero, projects, quotes)
├── about.html               # About me + skills section
├── contact.html             # Contact form + contact info
├── frontend/
│   └── style.css            # All styles (responsive, components)
├── backend/
│   └── script.js            # EmailJS logic + form handling
├── assets/                  # Images (avatar, project screenshots)
│   ├── avatar.png
│   ├── project 1.png
│   ├── 271333.jpg
│   ├── twitter-brands-solid-full.svg
│   ├── github-brands-solid-full.svg
│   └── linkedin-brands-solid-full.svg
└── README.md
```

> **Note:** The `assets` folder contains placeholder images – replace them with your own.

---

## 🚀 Setup & Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/RAYRZE/your-portfolio-repo.git
   cd your-portfolio-repo
   ```

2. **No build step required** – just open any `.html` file directly in your browser.  
   *Recommended: use Live Server extension for best experience.*

3. **Configure EmailJS** (see next section) – otherwise the contact form will not work.

---

## 📧 EmailJS Configuration  

The contact form uses EmailJS to send messages to your email.  
You need to replace the **public key**, **service ID**, and **template ID** inside `backend/script.js`.

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an **email service** (e.g., Gmail, Outlook)
3. Create an **email template** with variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. Copy your **Public Key**, **Service ID**, and **Template ID**
5. Open `backend/script.js` and update these lines:

```javascript
emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY",   // replace
});

// inside form submit handler:
await emailjs.send(
  "YOUR_SERVICE_ID",    // replace
  "YOUR_TEMPLATE_ID",   // replace
  data
);
```

> **⚠️ Security tip:** For production, move the public key to environment variables or use a backend proxy. The current key is exposed client-side.

---

## 🎨 Customization  

- **Change profile image** – replace `assets/avatar.png`  
- **Update projects** – edit the `.project-card` blocks inside `index.html`  
- **Modify skills** – change content in `about.html` (`.skills-box` elements)  
- **Social links** – update URLs in all footer sections and `contact.html`  
- **Color scheme** – adjust CSS variables/colors in `style.css` (primary color: `#0c4a6e`)

---

## 📱 Responsive Breakpoints  

| Device     | Max-width |
|------------|-----------|
| Tablet     | 900px     |
| Mobile     | 600px     |

All layout stacks vertically and font sizes scale smoothly using `clamp()`.

---

## 🙋‍♂️ Author  

**RRZE** – beginner frontend developer  
- Twitter: [@RAYRZE](https://x.com/RAYRZE)  
- GitHub: [RAYRZE](https://github.com/RAYRZE)  

---

## 📄 License  

This project is open source and available under the [MIT License](LICENSE).  
Feel free to use, modify, and distribute it for your own portfolio.

---

> *“Life is not a problem to be solved, but a reality to be experienced.”* – Søren Kierkegaard