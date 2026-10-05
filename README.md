# ✈️ PT Rute Cemerlang Travel — Official Corporate Portal

A premium, modern, and fully responsive corporate travel portal built for **PT Rute Cemerlang Travel**, specializing in professional visit visa assistance, destination guides, and seamless client communication.

---

## 🌟 Key Features

* **Brand-Aligned Aesthetics:** Custom color palette featuring Deep Navy (`#0A2540`) and Teal (`#00A8B5`) matching the official corporate identity.
* **Multilingual Support (EN/ID):** Seamless site-wide language toggling between English and Indonesian using `react-i18next`.
* **Interactive UI/UX:** Smooth animations and transitions powered by **Framer Motion**.
* **Responsive Navigation & Footer:** Styled with custom pill-shaped elements, neon sign icons (WhatsApp, Location, Email, Instagram, TikTok, Facebook), and working contact links.
* **Modern Tech Stack:** Built with performance and scalability in mind using Vite, React, and Tailwind CSS.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React.js (with Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Internationalization:** `react-i18next` / `i18next`
* **Icons:** `lucide-react` & Custom SVGs

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx       # Responsive navigation with gradient & language switcher
│   ├── Home.jsx         # Hero, Services, Destinations & About sections
│   └── Footer.jsx       # Corporate footer with contact info & social links
├── locales/
│   ├── en.json          # English translations
│   └── id.json          # Indonesian translations
├── i18n.js              # i18next configuration
├── App.jsx              # Main layout wrapper
└── main.jsx             # Application entry point