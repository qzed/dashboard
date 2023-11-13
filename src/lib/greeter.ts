export function getGreetingString() {
    const greetings = [
        {
            "text": "Good night!",
            "from": 0,
            "to": 6
        },
        {
            "text": "Good morning!",
            "from": 6,
            "to": 12
        },
        {
            "text": "Good afternoon!",
            "from": 12,
            "to": 18
        },
        {
            "text": "Good evening!",
            "from": 18,
            "to": 24
        }
    ];

    const now = Math.floor(new Date().getHours());
    return greetings.find((greeting) => {
        return now >= greeting.from && now <= greeting.to;
    })?.text
}

export function getDateString() {
    const date = new Date();

    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}