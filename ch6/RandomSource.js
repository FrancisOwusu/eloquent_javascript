class RandomSource{
    
    #max; //private variable 
    constructor(max){
        this.#max = max;

    }

    getNumber(){
        return Math.floor(Math.random() * this.#max);
    }
}

