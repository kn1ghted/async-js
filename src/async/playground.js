export async function runCode() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch {
        throw new Error('API Not Found');
    }
    const url = 'https://domain-api-com';
  }
  