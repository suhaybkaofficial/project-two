export default function currentUser(){
    const authUser = localStorage.getItem('authUser');
    return authUser ? JSON.parse(authUser) : []; 
}