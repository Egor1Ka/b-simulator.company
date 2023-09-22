const fetchData = async <T>(
    url: string,
    method: string = 'GET',
    body: any = null, 
    headers: HeadersInit = {}, 
    mode: 'cors' | 'no-cors' | undefined = 'cors', 
): Promise<T> => {
    try {
        const options: RequestInit = {
            method,
            headers,
            mode,
            body: body && JSON.stringify(body),
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data: T = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(`Fetch error: ${error.message}`);
    }
};

export default fetchData;
