# 🏠 Orphanage Wishboard

This is a React-based web application that helps orphanages manage and track their wish list items. The app is designed to be simple and user-friendly, allowing staff members to easily add items, set budgets, and view top requested items.

## 🚀 Key Features

- 🧾 **Wish List Management**: Add, increment, or delete items with ease.
- 💸 **Budget Tracking**: Set and update the total budget. Real-time display of total spent and remaining budget.
- 🔝 **Top Requested Items**: Automatically tracks and displays the top 3 most requested items.
- 💾 **Persistent Storage**: Uses `localStorage` to ensure data (wish list and budget) persists across sessions.
- 📱 **Responsive Design**: Fully responsive, providing a smooth experience on both desktop and mobile devices.

## 🛠️ Technologies Used

- **React** (with JSX): For building the user interface.
- **TypeScript**: Ensuring type safety and improving maintainability.
- **Tailwind CSS**: For modern, responsive design.
- **Lucide React**: For high-quality icons and a polished look.
- **LocalStorage**: For data persistence across sessions.

## 📂 Folder Structure

```
src/
├── components/
│   ├── BudgetDisplay.tsx
│   ├── BudgetEntry.tsx
│   ├── ItemEntry.tsx
│   ├── Sidebar.tsx
│   └── WishList.tsx
├── App.tsx
└── index.tsx
```

## 💻 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anandhu2311c/wishboard.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🌍 Deployment

The app is ready for easy deployment using platforms like **Netlify** or **Vercel**. Just connect your repository, and the app will be automatically deployed and hosted.

## 🔮 Future Enhancements

- 🔒 Add user authentication for secure access.
- 🏷️ Implement categories or tags for better item organization.
- ⏰ Add due dates and reminders for wish list items.
- 📡 Integrate a backend API for centralized data management.

## 📚 Learnings and Best Practices

This project showcases modern web development practices, including **React hooks**, **TypeScript** for type safety, and a component-based architecture. The use of **Tailwind CSS** for responsive design and **localStorage** for data persistence makes it a scalable and user-friendly solution for managing resources in an orphanage.

---

**Developed by [Anandhu](https://github.com/anandhu2311c)**

