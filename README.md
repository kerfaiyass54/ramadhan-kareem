
# Ramadan Kareem - Animated Occasion Card

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

🌟 **Ramadan Kareem** is a beautifully animated occasion card designed to celebrate the holy month of Ramadan with vibrant visuals, interactive elements, and multilingual support. This project transforms your digital space with a dynamic, culturally rich experience that reflects the spirit of Ramadan.

---

## ✨ Features

✨ **Animated Confetti Effects** - Celebrate with beautiful confetti animations
🌍 **Multilingual Support** - Available in English, French, German, and Arabic
📖 **Interactive Quran & Prayer Sections** - Encourages spiritual growth
🎨 **Responsive Design** - Works beautifully on all devices
🎭 **Interactive UI Components** - Built with modern Radix UI primitives
🌙 **Dark/Light Mode** - Adaptive theming for all users
📱 **Mobile-Friendly** - Optimized for touch interfaces
🎨 **Customizable Themes** - Easy to adapt to different occasions
📚 **Comprehensive UI Library** - Includes 30+ reusable components

---

## 🛠️ Tech Stack

**Core Technologies:**
- TypeScript
- React 18
- Vite
- Tailwind CSS

**UI Components:**
- Radix UI (primitives for all interactive components)
- Lucide Icons
- Motion (for animations)
- Embla Carousel
- Recharts (for potential future charting)

**Internationalization:**
- i18next
- react-i18next

**State Management:**
- React Hook Form
- Zustand (potential for future state management)

**Additional Libraries:**
- Date-fns
- Sonner (for notifications)
- Vaul (for drawer components)

---

## 📦 Installation

### Prerequisites

Make sure you have the following installed on your system:
- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn
- A modern browser (Chrome, Firefox, Safari, Edge)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kerfaiyass54/ramadhan-kareem.git
   cd ramadhan-kareem
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm run dev
   ```

4. **Open in your browser:**
   Visit `http://localhost:5173` to see the application in action

### Alternative Installation Methods

**Using npm:**
```bash
npm install
npm run dev
```

**Using yarn:**
```bash
yarn install
yarn dev
```



### Customizing the App

To customize the content and messages:

1. Edit the translation files in `src/locales/` for multilingual support
2. Modify the `App.tsx` file to change the main content and layout
3. Update the `src/styles/` directory to adjust the theme and styling


---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup

1. Fork the repository
2. Clone your fork locally
3. Install dependencies using your preferred package manager
4. Create a new branch for your feature or bugfix

### Code Style Guidelines

- Use TypeScript for type safety
- Follow the existing code style and formatting
- Write clear, concise commit messages
- Add tests for new functionality
- Keep components focused and reusable

### Pull Request Process

1. Create a descriptive title for your PR
2. Provide a clear description of the changes
3. Reference any related issues
4. Ensure all tests pass
5. Get feedback from maintainers

### First Timers Welcome!

If you're new to contributing to open source, we have a special section in our [CONTRIBUTING.md](CONTRIBUTING.md) guide to help you get started.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


### Getting Help

- Join our [Discord community](https://discord.gg/your-server)
- Ask questions on our [GitHub Discussions](https://github.com/kerfaiyass54/ramadhan-kareem/discussions)
- Check our [FAQ](https://github.com/kerfaiyass54/ramadhan-kareem/wiki/FAQ)

### FAQ

**Q: Can I use this for commercial purposes?**
A: Yes, this project is licensed under the MIT License which allows for both personal and commercial use.

**Q: How can I customize the colors?**
A: Edit the theme variables in `src/styles/theme.css` or override them in your Tailwind config.

**Q: Can I add more languages?**
A: Absolutely! Just add a new translation file in the `src/locales/` directory and update the i18n configuration.



## 💡 Pro Tips

1. **Customizing the Confetti:**
   The confetti animation is in `App.tsx`. You can easily change colors, quantity, and timing by modifying the `useEffect` hook that creates the confetti particles.

2. **Adding New Languages:**
   Simply add a new JSON file in the `locales/` directory and update the i18n configuration in `i18n.js`.

3. **Performance Optimization:**
   The project uses Vite for fast builds and development. For production, run `pnpm run build` to create optimized assets.

4. **Accessibility:**
   All components follow accessibility best practices. You can test keyboard navigation and screen reader compatibility using browser developer tools.
