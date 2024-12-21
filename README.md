
# Blogin

A blogging site that allows general CRUD Operations as well as AI Integration

## Features
### a. Form Based Blog Creation ( AI Integrated ) :
    1. APIs used - api/ai/generate [POST], api/posts [POST]
    2. Allows user to add new blog with the help of AI.

### b. Summarise Blogs ( AI Integrated ) :
    1. APIs used - api/ai/summarise [POST], api/post/:id [GET]
    2. Gives the summary of the entire blog under 50 words

### c. Edit Blog :
    1. APIs used - api/post/:id [PUT]
    2. Uses the data to prefill the field before updating

### d. Delete Blog :
    1. APIs used - api/post/:id [DELETE]
    2. Delete the blog from the database

## Backend Github :
    https://github.com/Binit06/Blogin_Backend

## Database - MongoDB (M0 Cluster)

## To run :
    npm install
    npm run dev

## Video Demo :
    https://drive.google.com/file/d/1XCtqrldJgb_X6P_sjJ2QJc3YLeppVJK9/view?usp=sharing