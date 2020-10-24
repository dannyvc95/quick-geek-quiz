/**
 * This module is used just to request questions from an external api (https://opentdb.com/)
 * and also to provide some useful functions for testing and validation.
 * 
 * @author Daniel Valle
 */

const fetch = require('node-fetch');

/**
 * Validates that a questions amount is in a accepted range between 1 and 40.
 * @param {*} questionsAmount the number to validate
 */
const isValidQuestionsAmount = questionsAmount => {
  return questionsAmount >= 1 && questionsAmount <= 40;
}

/**
 * Requests questions from the external api and returns it as a promise.
 * @param {*} questionsAmount the number of questions to request
 */
const getQuestions = async questionsAmount => {
  try {
    const url = `https://opentdb.com/api.php?amount=${questionsAmount}&category=18&difficulty=easy`;
    const request = await fetch(url);
    const questions = await request.json();
    return proccessExternalApiJson(questions);
    
  } catch (err) {
    return err;
  }
}

/**
 * Remove all undesired information from the original response of the external api.
 * @param {*} externalJson the object with the external api response
 */
const proccessExternalApiJson = externalJson => {
  const questionsAmount = externalJson.results.length;
  let questionsArray = [];
  
  for (let i=0; i<questionsAmount; i++) {
    let currentQuestion = {
      question: externalJson.results[i].question,
      correct_answer: externalJson.results[i].correct_answer,
      incorrect_answers: externalJson.results[i].incorrect_answers
    };
    questionsArray.push(currentQuestion);
  }

  return {
    questions_amount: questionsAmount,
    questions: questionsArray
  };
}

module.exports = {
  isValidQuestionsAmount,
  getQuestions
}