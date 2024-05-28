# MarkDown-Note-App
The app employs Node.js for server-side logic, Express.js for routing, Multer for handling file uploads, and Sequelize ORM for interacting with the PostgreSQL database. It offers endpoints for checking grammar, saving notes, and rendering notes in HTML format.

# Markdown Note-taking App

Markdown Note-taking App is a web application designed for users who prefer Markdown syntax for note-taking. It provides functionalities to create, edit, save, and render Markdown notes into HTML format. The application is built using Node.js, Express.js, PostgreSQL, and various text processing libraries.

## Features

- **Grammar Checking**: Check the grammar of the notes.
- **Save Note**: Save Markdown notes.
- **Render Note**: Render Markdown notes into HTML format.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/markdown-note-taking-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd markdown-note-taking-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up PostgreSQL database and configure database connection in `config/database.js`.

5. Start the server:

   ```bash
   npm start
   ```

6. The server will be running on `http://localhost:3000` by default.

## Usage

### Endpoints

- **Check Grammar**: POST `/api/check-grammar`
- **Save Note**: POST `/api/save-note`
- **Render Note**: GET `/api/render-note/:id`


## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Multer
- Sequelize

### Contributors

- [Your Name](https://github.com/Sayantan-Ch)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Multer](https://github.com/expressjs/multer)
- [Sequelize](https://sequelize.org/)
- [Markdown Guide](https://www.markdownguide.org/)

Feel free to contribute to this project by submitting pull requests or reporting issues. Happy note-taking! 📝✨
