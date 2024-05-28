const express = require('express');
const multer = require('multer');
const noteController = require('../controllers/NoteController');

const router = express.Router();

// Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/check-grammar', noteController.checkGrammar);
router.post('/save-note', upload.single('file'), noteController.saveNote);
router.get('/render-note/:id', noteController.getNote);

module.exports = router;
