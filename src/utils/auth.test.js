import { describe, it, expect, beforeEach } from "vitest";
import { saveAuth, getToken, getAdminUser, clearAuth, isAuthenticated } from "./auth";

function makeToken(payload) {
  const base64url = (obj) =>
    btoa(JSON.stringify(obj)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return `${base64url({ alg: "none" })}.${base64url(payload)}.signature`;
}

describe("auth", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("is not authenticated when there is no token", () => {
    expect(isAuthenticated()).toBe(false);
  });

  it("is authenticated when the token has a future expiry", () => {
    const token = makeToken({ exp: Math.floor(Date.now() / 1000) + 3600 });
    saveAuth(token, { name: "Rayhan" });

    expect(isAuthenticated()).toBe(true);
    expect(getToken()).toBe(token);
    expect(getAdminUser()).toEqual({ name: "Rayhan" });
  });

  it("is not authenticated and clears storage when the token is expired", () => {
    const token = makeToken({ exp: Math.floor(Date.now() / 1000) - 10 });
    saveAuth(token, { name: "Rayhan" });

    expect(isAuthenticated()).toBe(false);
    expect(getToken()).toBeNull();
  });

  it("is not authenticated when the token is malformed", () => {
    saveAuth("not-a-real-jwt", { name: "Rayhan" });
    expect(isAuthenticated()).toBe(false);
  });

  it("clearAuth removes both the token and the admin user", () => {
    saveAuth(makeToken({ exp: Math.floor(Date.now() / 1000) + 3600 }), { name: "Rayhan" });
    clearAuth();

    expect(getToken()).toBeNull();
    expect(getAdminUser()).toBeNull();
  });
});
