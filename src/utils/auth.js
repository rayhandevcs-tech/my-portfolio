const TOKEN_KEY = "admin_token";
const ADMIN_KEY = "admin_user";

function getTokenPayload(token) {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch {
    return null;
  }
}

export function saveAuth(token, admin) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getAdminUser() {
  const raw = localStorage.getItem(ADMIN_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ADMIN_KEY);
}

export function isAuthenticated() {
  const token = getToken();
  if (!token) return false;

  const payload = getTokenPayload(token);
  if (!payload) return false;

  // exp is seconds since epoch; Date.now() is ms
  if (payload.exp && payload.exp < Date.now() / 1000) {
    clearAuth();
    return false;
  }

  return true;
}