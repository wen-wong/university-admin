export async function get() {
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
    ]

    return {
        status: 202,
        body: { guides }
    }
}