function A(){
    try {
        throw 'New Error!!!!!'
    } catch (error) {
        console.log(error);
    }
}

A();