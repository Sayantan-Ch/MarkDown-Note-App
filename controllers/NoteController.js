const fs = require("fs").promises;
const path = require("path");
const Note = require("../models/Note");
const MarkdownIt = require("markdown-it");
// const fetch = require("node-fetch");
const md = require("markdown-it");

const checkGrammar = async (req, res) => {
  const { text } = req.body;
  try {
    // const response = await fetch("https://api.grammarbot.io/v2/check", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     text,
    //     language: "en-US",
    //   }),
    // });
    
    res.json({text:"No error"});
  } catch (error) {
    res.status(500).json({ error: "Grammar check failed" });
  }
};

const saveNote = async (req, res) => {
  const { title } = req.body;
  const file_path = req.file ? req.file.path : null;
  try {
    const result = Note.createNote(title, file_path);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: "Failed to save note" });
  }
};

const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note_filePath = await Note.getNote(id);
    if (note_filePath) {
      const content = await fs.readFile(
        path.join(__dirname, "..", note_filePath),
        "utf-8"
      );
      const htmlContent = md.render(content);
      res.send(htmlContent);
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to render note" });
  }
};

module.exports = {
  checkGrammar,
  saveNote,
  getNote,
};
