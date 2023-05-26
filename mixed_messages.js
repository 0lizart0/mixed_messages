const positiveQuotes = ['Grow through what you go through!', 'Stay close to people who feel like sunshine!', 'We can not become what we want by remaining what we are.', 'Focus on the step in front of you, not the whole staircase', 'Girl, you totally got this', 'Just because things could\'ve been different it doesn\'t mean they\'d be better', 'You only have one life to live. Make sure it\'s yours!', 'Do something today your future self will thank you for.'];

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'brown', 'black', 'white', 'gray', 'gold', 'silver', 'navy', 'blue', 'sky blue', 'lime green', 'teal', 'indigo', 'magenta', 'violet', 'khaki', 'salmon', 'crimson', 'lavender', 'plum', 'blue violet', 'olive', 'cyan', 'maroon', 'beige'];

const animals = [{name: 'bee', properties: 'Communication, love, success, wisdom, wealth, hard work, protection and chastity'}, {name: 'butterfly', properties: 'Joy, romance, celebration, transformation, spirituality, creativity, and peace'}, {name: 'black swan', properties: 'empathy, freedom, joy, dignity, loyalty and exposition'}, {name: 'cat', properties: 'Magic, curiosity, affection, observational-skills, secretive, supernatural, and mystery'}, {name: 'dog', properties: 'Loyalty, bravery, friends, affection, protection, communication, patience, and devotion'}, {name: 'dolphin', properties: 'Harmony, defensive, assistance, resurgence, lively and strength'}, {name: 'dragon', properties: 'Transformation, defensive, motivational, authoritative, magical and strength'}, {name: 'elephant', properties: 'Strength, loyalty, determination, confidence, honor, pride, dignity, and royalty'}, {name: 'frog', properties: 'Transformation, sensitivity, peace, fertility, cleansing, rebirth, peace and power'}, {name: 'jaguar', properties: 'Power, loyalty, speed, strength, grace, knowledge, fertility and rejuvenation'}, {name: 'lizard', properties: 'Imagination, spirituality, sensitivity, adaptability, ego, intrusion, and quick-witted'}, {name: 'panda', properties: ''}, {name: 'penguin', properties: 'Adaptability, balance, determination, willpower, diplomacy, inner-sight, and solitude'}, {name: 'sheep', properties: 'Compassion, peace, purity, courage, progress, level-headed and humble'}, {name: 'turtle', properties: 'Wisdom, patience, speed, endurance, fertility, longevity, protection and peace'}, {name: 'wolf', properties: 'Protection, partnership, loyalty, compassion, spirituality, togetherness, and power'}, {name: 'whale', properties: 'Wisdom, power, strength, self-reliance, protection, bravery and ancestry'}];

const drinks = ['Iced Coffee', 'Iced Latte', 'Hot Chocolate', 'Matcha Latte', 'Herbal Tea', 'Peppermint Tea', 'Vanilla Tea', 'Water', 'Mate', 'Lemonade', 'Coffe with Milk'];

const activities = ['Read a book!', 'Paint a little!', 'Learn a new skill!', 'Play some guitar!', 'Sing a song!', 'Lay in the sun!', 'Cuddle in a blanket!', 'Call a friend!'];

function moodFactory(quote, color, animal, drink, activity){ return {
    quote,
    color, 
    animal,
    drink,
    activity,
}
};

function randomStuff(arr){
    const num = Math.floor(Math.random() * (arr.length -1));
    return arr[num]
};

function printMood(){
    const mood = moodFactory(randomStuff(positiveQuotes), randomStuff(colors), randomStuff(animals), randomStuff(drinks), randomStuff(activities));

    console.log('Your quote of the day: ' + mood.quote);
    console.log('Your color of the day: ' + mood.color);
    console.log('Your spirit animal: ' + mood.animal.name);
    console.log('Properties of the ' + mood.animal.name + ': ' + mood.animal.properties);
    console.log('What beverage to enjoy today: ' + mood.drink);
    console.log('What you can do to relax today: ' + mood.activity);
};

printMood();