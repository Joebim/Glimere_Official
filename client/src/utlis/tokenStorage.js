const TOKEN_KEY = process.env.REACT_APP_GLIMERE_TOKEN;

export function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  
export function getToken() {
return localStorage.getItem(TOKEN_KEY);
}
  
export function removeToken() {
localStorage.removeItem(TOKEN_KEY);
}