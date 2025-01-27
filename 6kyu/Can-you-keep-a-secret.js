import * as stream from "stream";

function createSecretHolder(secret) {
    return new SecretHolder(secret);
}

class SecretHolder {
    #secret;
    constructor(secret) {
        this.#secret = secret;
    }
    set(secret){
        this.#secret = secret;
    }
    get(){
        return this.#secret;
    }
}
const sh = createSecretHolder(4);
console.log("sh", sh)
console.log("sh", sh.get())
sh.set(5)
console.log("sh get", sh.get())