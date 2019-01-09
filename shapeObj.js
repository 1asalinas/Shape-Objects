//Your code
let Rectangle = {
    length : 4,
    width : 10,

    perimeter : function(){
        let p = 2 * this.length + 2 * this.width;
        return p;
    },

    area : function(){
        let a = this.length * this.width;
        return a;
    }
}



let Square = {
    sidelength : 4,

    perimeter : function(){
        let p = this.sidelength * 4;
        return p;

    },
    
    area : function(){
        let a = Math.pow(this.sidelength, 2);
        return a;
    }
    
}



let Circle = {
    radius : 3,

    area : function(){
        let a = Math.PI * Math.pow(this.radius,2);
        return a;
    
    },

    circumference : function(){
        let c = 2 * Math.PI * this.radius;
        return c;
    }
}

//Dont forget about box and sphere

let box = {
    length : 6,
    width : 2,
    height : 3,

    volume : function(){
        let v = this.length * this.width * this.height;
        return v;
    },

    surfaceArea : function(){
        let s = 2 * (this.length * this.width) + 2 * (this.length * this.height) + 2 * (this.height * this.width);
        return s;
    }
}

let circle = {
    radius : 10,
//four thirds * pi * r cubed//
    volume : function(){

    },
// 4 * pi * r squared//
    surfaceArea : function(){

    }
}


//------------------------------------------------
//copy paste test code when you finish under here
