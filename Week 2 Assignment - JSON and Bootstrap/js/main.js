//  Name: Erick Diaz    Date: 10/21/23


const faqList = document.getElementById("faq-list");
// A JSON array containing JSON objects with 'question' and 'answer' key:value pairs
const faqData = [
    {
        "question": "What is World of Warcraft (WoW)?",
        "answer": "World of Warcraft is a massively multiplayer online role-playing game (MMORPG) developed by Blizzard Entertainment."
    },
    {
        "question": "What are the playable factions in WoW?",
        "answer": "The playable factions in WoW are the Alliance and the Horde, which are in a constant state of war with each other."
    },
    {
        "question": "What is the maximum level in WoW?",
        "answer": "As of the latest expansion, the maximum level in WoW is 60, though this may change with future updates."
    },
    {
        "question": "What are the primary roles in WoW?",
        "answer": "The primary roles in WoW are Tank, Healer, and Damage Dealer (DPS), each serving a different function in group gameplay."
    }
];

// Iterate through the faqData JSON array and generate HTML elements
faqData.forEach((item, index) => {
    faqList.innerHTML += `
    <div class="col-md-6">
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title text-primary">${item.question}</h5>
                <p class="card-text">${item.answer}</p>
            </div>
        </div>
    </div>
    `;
});