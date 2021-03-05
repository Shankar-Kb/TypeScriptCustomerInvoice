type radiusType = number;

class Circle{
radius: radiusType;
color: string;

constructor(radiusValue: radiusType, colorValue: string){
this.radius = radiusValue;
this.color = colorValue;
}
toString(){
    return `Circle[radius=${this.radius}, color=${this.color}]`
}
getArea(){
    return Math.PI*(this.radius*this.radius);
}
getCircumference(){
    return 2*Math.PI*this.radius;
}

}

let c = new Circle(5, 'Red');
console.log(c.toString());
console.log(c.getArea());
console.log(c.getCircumference());