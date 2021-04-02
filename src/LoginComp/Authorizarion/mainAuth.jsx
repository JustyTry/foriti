import decodeJwt from 'jwt-decode';

const authProvider = {
    // authentication
    login: ( username, password ) =>  {
        const request = new Request('http://localhost:5000/check_admins', {
            method: 'POST',
            body: JSON.stringify({"login": username, "password": password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json().then(json => {
                    localStorage.setItem('auth', JSON.stringify(json.data))
                    return json.data.access
                
                }) 
                .catch(e => Promise.reject())
            })
            
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject({ redirectTo: '/log' });
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity:() => {
        try {
            const { id, subject, role } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, subject, role });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
};

export default authProvider;