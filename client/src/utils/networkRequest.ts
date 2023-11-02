export async function networkRequest(endpoint: string, options?: any) {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_SERVER_BASE_URL}${endpoint}`,
            options
        );
        const data = await res.json();

        return data;
    } catch (error) {
        console.log('Network Error: ', error);
    }
}
