# Wave Front-end Challenge

The purpose of this exercise is to create something that we can work on together during the onsite interview. We do this so that you get a chance to
collaborate with Wavers during the interview in a situation where you know something better than us (it's your code, after all!)

There isn't a hard deadline for this exercise; take as long as you need to complete it. However, in terms of total time spent actively
working on the challenge, we ask that you not spend more than a few hours, as we value your time and are happy to leave things open to
discussion in the on-site interview.

Please use whatever tools or frameworks you feel the most comfortable with.

Feel free to email [dev.careers@waveapps.com](dev.careers@waveapps.com) if you have any questions.

## Project Description

Imagine that this is the early days of Wave's history, and that we are prototyping a new invoicing system in Canada. Our prototype will be entirely API-driven and use a Javascript single-page app as the interface to our APIs.

One piece of the application will be a settings page where users can manage their customer information. Another team has provided a RESTful API to supply the data. We need you to start working on the client-side portion that will consume this API. For now, we would like to see some early front-end scaffolding to see how you would architect this.

The front-end prototype only needs to do the following:

- Retrieve the data from the GET endpoint
- Show a compact list of customers (in the JSON under the "customers" key)
- Let the user select a customer for editing, which shows a form with name, email, channel (value may be one of 'website', 'email', 'phone', 'word-of-mouth', 'other'), address, postal, city, province
- All fields are required. Empty values should present an error message if submitted.
- On form submit, log the JSON payload to console (no need to mock out server calls!)

The JSON will be available by calling GET https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json and can be retrieved using fetch, XHR, JQuery or whatever library you're familiar with.

Our desire is to approach this in a way that gives us composable, reusable code for use in later features and products. So some thought should be given to how this code could be expanded upon and repurposed. For now this will be a Canada only product and all addresses are assumed to be in Canada but we plan to roll this out to other countries later. 
Do not worry about making the UI pretty! Just make it functional. All we ask is that it be easy to add more styling later.

Use whatever framework, tooling, scaffolding, starter-kits you are comfortable with that feel appropriate to this challenge. At Wave, we have used Backbone, Angular, React with the emphasis being heavily on React for current work. Your application should be easy to run and browse, and should run on either Linux or Mac OS X. It should not require any non open-source software.

### Documentation:

Please modify `README.md` to add:

1. Instructions on how to build/run your application
1. A paragraph or two about what you are particularly proud of in your implementation, and why.

## Submission Instructions

1. Clone the repository.
1. Complete your project as described above within your local repository.
1. Ensure everything you want to commit is committed.
1. Create a git bundle: `git bundle create your_name_front_end.bundle --all`
1. Email the bundle file to [dev.careers@waveapps.com](dev.careers@waveapps.com)

## Evaluation

Evaluation of your submission will be based on the following criteria.

1. Did you follow the instructions for submission?
1. Did you document your build/run instructions and your explanation of what you are proud of?
1. Is the code written such that it can easily be repurposed, reused and expanded upon?
1. Were the various parts of the application and their roles easily identifiable to the reviewer?

## Instructions on how to build/run the application

### Setup `yarn install`

### Development `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Build `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Test `yarn test`

## What you are particularly proud of in your implementation, and why?

In reference to my past experience, I did some features to support the possible growth.
1. Separate the page from the list view and the update form
- It can be foreseen that more and more customer detail will be included when the application grows. My action can support more space for the layout when the update form is getting detailed.
- It may possible that more than 1 entry point to update the form. Separating the pages can reduce the workload on changing.
2. A confirmation modal
- Customer detail is always the top concern! A double check is good to avoid any careless mistake.
3. Technical part
- I try to break down every component. For example, I am rendering the same componet for the customer details on both homepage and the confirmation modal.
-Customer detail cards can be foreseen will appear in different places.
4. Navigator 
- I use the navigate function with (-1) to back to previous page.
- It support all entry points in the future but not just direct to the homepage.
5. Icon to Homepage
- It is a common practice by clicking the icon and back to homepage.