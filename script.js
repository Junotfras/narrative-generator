// Select elements
const form = document.getElementById('story-form');
const formCard = document.getElementById('form-card');
const resultCard = document.getElementById('story-result');
const storyContent = document.getElementById('story-content');
const resetBtn = document.getElementById('reset-btn');

// Handle Submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload

    // Gather values
    const animal1 = document.getElementById('animal-1').value;
    const animal2 = document.getElementById('animal-2').value;
    const animal3 = document.getElementById('animal-3').value;
    const adj1 = document.getElementById('adj-1').value;
    const verb1 = document.getElementById('verb-1').value;
    const num1 = document.getElementById('num-1').value;
    const speed = document.getElementById('speed').value;
    const quote = document.getElementById('quote').value;
    const message = document.getElementById('message').value;
    
    // Get radio value
    const radioSelection = document.querySelector('input[name="answer"]:checked').value;
    const friendshipStatus = radioSelection === 'yes' ? 'best friends' : 'arch-enemies';

    // The Story Template
    const story = `
        <p>
            One day, a <strong>${adj1}</strong> <strong>${animal1}</strong> was <strong>${verb1}</strong> 
            down the street. Suddenly, it saw a <strong>${animal2}</strong> moving <strong>${speed}</strong> than expected!
        </p>
        <p>
            They called their friend, a <strong>${animal3}</strong>, who brought <strong>${num1}</strong> snacks to share. 
            Even though they were <strong>${friendshipStatus}</strong>, they all agreed on one thing:
        </p>
        <p><em>"${quote}"</em></p>
        <hr style="border-color: rgba(255,255,255,0.1); margin: 15px 0;">
        <p><strong>Moral of the story:</strong> ${message}</p>
    `;

    // Display
    storyContent.innerHTML = story;
    
    // Animation: Hide Form, Show Result
    formCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
});

// Reset Button
resetBtn.addEventListener('click', () => {
    resultCard.classList.add('hidden');
    formCard.classList.remove('hidden');
    form.reset();
});
