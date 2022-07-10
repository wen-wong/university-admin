export async function get({ params }) {
    const guides = [
        { id: 1, title: 'some text' },
        { id: 1, title: 'some text' },
        { id: 1, title: 'some text' },
        { id: 1, title: 'some text' },
        { id: 1, title: 'some text' },
        { id: 1, title: 'some text' },
        { id: 1, title: 'some text' },
        { id: 1, title: 'some text' },
        { id: 1, title: 'some text' }
    ];

    const guide = guides.find((g) => g.id == params.id);

    if (guide) {
        return {
            status: 200,
            body: { guide }
        }
    }

    return {
        status: 404
    }
}