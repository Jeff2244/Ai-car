class Controls {
    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        //let the car listen to keyboard
        this.#addKeyboardListeners();
    }
    /*# makes it a private function in this class
    this function controls the car
    arrow function makes the 'this' refers to the class's 'this', not event's 'this'
    when value is set to true, the postion will be updated, hence move the car*/
    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
                case 'ArrowUp':
                    this.forward = true;
                    break;
                case 'ArrowDown':
                    this.reverse = true;
                    break;
            }
        };
        document.onkeyup = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
                case 'ArrowUp':
                    this.forward = false;
                    break;
                case 'ArrowDown':
                    this.reverse = false;
                    break;
            }
        };
    }
}
