# DASS-2022-23-Team-33 
# Framework for Automated Student Assessment using NLP - Audio

## Description

The assessment and tracking of student learning on an ongoing day-to-day basis is a very time-consuming task for the teachers. To alleviate this administrative burden and allow for better organic learning environment in the classroom, the current work proposes to automate the test taking/grading process by using the audio of the student-teacher interactions during class, to perform this assessment.

The proposed system would use a set of natural language processing (NLP) modules (chosen from existing models), to detect when the teacher asks a question (from a predefined set of questions) and then evaluate the correctness of the corresponding student response. The system once functional and reliable, is meant to be integrated into a learning management system (LMS), to allow for easy grade tracking. The work shall start with a limited set of known questions with clear answers in the form of multiple choices or True/False. Based on progress of work, exploration into use of semantic matching for allowing rephrasing of the questions by the teacher may be carried out.

## Profile of Users

The UI developed is meant only for demonstrative purposes only, hence has one end-user with a specific use case - the dev team to demo to an audience. As such the user must be capable of using the system by providing input audio and receiving output evaluation, through a clean self-explanative UI.

The backend API for the assessment, is however meant to be compatible for future incorporation to a larger LMS system, as such must be very well documented in terms of expected input & output, deployment instructions, and finally the choice and performance of NLP models (to allow for future model adaptations).

## Feature highlights

The developed system requires the following features:

### Frontend/UI:
1. Enter input audio.
2. Perform API calls.
3. Display text generated and output evaluation.

### Backend/API:

1. Receive input audio.
2. Run ML inference models to convert audio to text, check if text matches with curated set of questions and answers, and finally generated output evaluation.
3. Send back output evaluation and converted text.

