# Patient Health Questionnaire (PHQ-9)

[Live]
[Live]: <http://haikgregoryagdere.com/patient-health-questionnaire/>

## Local Deployment

To run this app on your local system, download this repository and run
```npm install```. In order to modify the application, run ```webpack```
or ```webpack --watch``` to recompile the modules in ```bundle.js```.

## Approach

### Components

My first step in approaching a React project is to sketch out the
components I will need as nested boxes representing the app's basic
structure. In this way I determined that I would need components for the
container (App), questionnaire page, questions, diagnosis/therapist
referral page, therapist contacts, and confirmation page.

### State

Assessing the necessary components informed me about the data I would
need to track through state. Most fundamentally, we need to know which
"page" the user is on, and the way I approached that problem was by
tracking whether or not the user had submitted the questionnaire, taking
him or her to the diagnosis/referral page, and if a therapist had been
contacted, bringing up the confirmation component.

Next, I considered the data that each major component needs to display.
Since the purpose of the app is to tell users where they stand on a
scale of depression severity, keeping track of the score is essential.
For the confirmation page, the selected therapist's info would need to
be displayed, so this too is tracked.

Finally state helps to handle errors by tracking whether the user has
submitted the questionnaire or contact form without completing it.

### User Interaction

To modify the views, click handlers were added on the radio inputs and
submit buttons. They manipulate components' state by changing the users'
scores as they answer questions, flagging whether the user has submitted
forms and answered questions, tracking therapist information when a
contact is selected, and toggling if error messages are displayed for
incomplete forms.

### Styling

I incorporated Bootstrap into my application for some basic styling.
Apart from its default options, I styled text with intuitive colors
(such as red for error messages), gave a contrasting background color to
contact information, and increased the column width of questionnaire
radio input choices so they would stack rather than display inline.
