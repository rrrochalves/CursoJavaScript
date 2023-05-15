if(!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(cb) {
        return this.map(cb).reduce((dest, array) => dest.concat(array), []);
    }
}