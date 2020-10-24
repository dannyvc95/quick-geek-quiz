# quick-geek-quiz

Hi there, with the **quick-geek-api** you will be able to get some cool questions made for geeks.

## Get started

Use this API is simple, you just need to tell us how many questions do you want as you see in the url bellow, and we'll do everything else 😉.
 
 ```
 https://quick-geek-quiz.herokuapp.com/api/v1/quiz/<number_of_questions_here>
 ```
 <hr>
 
 For instance, if you want just 1 question, the url should looks like this:
 
  ```
 https://quick-geek-quiz.herokuapp.com/api/v1/quiz/1
 ```
 
 And you will receive your questions in a json format just like the example bellow:

```json
{
  "questions_amount": 1,
  "questions": [
  {
    "question": "HTML stands for Hypertext Markup Language.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
  }
  ]
}
```

Go and enjoy it!
