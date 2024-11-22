
# Students Management App

This React-based project allows users to view a list of students, add them to a favorites list, and remove them from the favorites. It includes routing and dynamic state management, and each student is displayed with their name and photo.

## Features

- Display a **List of Students** with their photos.
- Add students to a **Favorite Students** list.
- View and manage favorite students on a separate page.
- Remove students from the favorites list.
- Navigation between pages using `react-router-dom`.

---

## Demo

Here’s how the app works:

1. Navigate to the **List of Students** page to view all students.
2. Click the **Add to Favorite** button next to a student to add them to the favorites list.
3. Navigate to the **Favorite Students** page to view your selected favorites.
4. Click the **Remove** button next to a favorite student to remove them from the list.

---

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/Adhibhuvanasandhya/favstudientlist
   ```

2. Navigate to the project directory:
   ```bash
   cd students-management-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   https://favstudient-5jot.vercel.app/
   ```

---

## File Structure

```plaintext
src/
├── components/
│   ├ 
│   ├── StudentsList.js      # Displays the list of students
│   └── FavoriteStudents.js  # Displays the list of favorite students
├── assests/images/          # Contains student images
├── App.js                   # Main app component
├── index.js                 # Entry point of the application
└── styles.css               # Optional: Additional CSS for styling
```

---

## Technologies Used

- **React**: For building the UI components.
- **Tailwind CSS**: For styling the application.
- **React Router**: For managing navigation between pages.

---

## How to Contribute

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

Feel free to reach out for any queries:

- **Your Name**: Adhibhuvanasandhya
- **GitHub**: https://github.com/Adhibhuvanasandhya)
