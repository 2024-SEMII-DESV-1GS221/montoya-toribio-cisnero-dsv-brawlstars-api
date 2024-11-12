const EVENTS_URL = 'https://api.brawlify.com/v1/events';

const getEvents = async () => {
    const eventResponse = await fetch(`${EVENTS_URL}`)
    const eventsData = await eventResponse.json();
    return eventsData;
}

const renderEvents = (template, events) => {
    const {active, upcoming} = events;
    const html = `
        // TODO
    `;
    template.innerHTML += html;
}

export {
    getEvents,
    renderEvents,
}