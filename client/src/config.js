// In development (local), this will be empty string '' because we typically use the Vite proxy.
// In production (Vercel), we must set VITE_API_URL in the Vercel project settings to point to our backend (e.g., https://my-api.onrender.com)
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export default API_BASE_URL;
