/**
 * The quiz-api will send a response with a requested number of questions, aimed for geeks and
 * tech enthusiasts. All questions are provided by the opentdb API (https://opentdb.com/).
 * 
 * @author Daniel Valle
 */
const express = require('express');
const quizApi = require('./quizApi');

const app = express();
app.use(express.json());

/**
 * The classic Hello, World endpoint
 */
app.get('/', (req, res) => {
  res.send('<h1>Hello, World</h1>');
});

/**
 * The Quiz-API endpoint
 */
app.get('/api/v1/quiz/:questionsAmount', async (req, res) => {
  const questionsAmount = req.params.questionsAmount;

  if (quizApi.isValidQuestionsAmount(questionsAmount)) {
    res.status(200).send(await quizApi.getQuestions(questionsAmount));
    
  } else {
    // response with a bad request status
    res.status(400).send('questions amount must be between 1 and 40');
  }
});

app.listen({ port: process.env.PORT }, () => console.log('server running...'));

module.exports = app;
