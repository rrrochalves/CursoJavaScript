class HttpService {
    
    get(url) {
        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }

    post(url, dado) {
        return fetch(url, {
            headers: {"Content-type" : "application/json"},
            method: "post",
            body: Json.stringify(dado)
        }).then(res => this._handleErrors(res));
    }

    _handleErrors(res) {
        if(!res.ok) throw new Error(res.statusText);
        return res; 
    }
}