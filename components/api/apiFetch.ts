export async function apiFetch(query: string|null): Promise<any> {
    const response = await fetch(`https://swapi.dev/api/films/${query}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    })

    const responseData = await response.json()

    if (response.ok) {
        return responseData
    }
}
