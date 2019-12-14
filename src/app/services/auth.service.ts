
export class AuthService {
    
    login() {
        localStorage.setItem('isLoggedIn', 'true');
    }

    logout() {
        localStorage.removeItem('isLoggedIn');
    }

    isAuth(){
        return localStorage.getItem('isLoggedIn') != null;
    }
}