function getCookie(key) {
    var name = key + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null; 
}

export async function addCustomer(url, data){
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await response.json();

    } catch (error) {
        console.log(error)
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

export async function loginCustomer(url,data){
    try {
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }) 
        return await response.json();

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

export async function currentUser(url){
    const token =  getCookie("token");
    try {
        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        const response = await fetch(url,{
            method:'GET',
            headers:headers,
        })
        return response;
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}






