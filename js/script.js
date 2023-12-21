const answers = [
    "Unfortunately our source is sleeping",
];

const answerElement = document.getElementById("answer");

function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

function shakeMagic8Ball() {
    // API Gateway endpoint URL
    // Paste here your API Gateway URL
    const apiUrl = 'https://fooobar-your-aws-url.execute-api.foobar-eu-2.amazonaws.com/prod/answer'; 

    // Make a GET request to the Lambda function through API Gateway
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Display the answer from the Lambda function
            answerElement.textContent = data.body;
        })
        .catch(error => {
            answerElement.textContent = getRandomAnswer();
            console.error('Error:', error);
        });
};
