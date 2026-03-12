const TOKEN_KEY = "admin_token";
const ADMIN_KEY = "admin_user";

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
  return Boolean(getToken());
}