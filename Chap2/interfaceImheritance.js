var InterfaceNameSpace;
(function (InterfaceNameSpace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has ".concat(this.wheelCount));
        };
        ;
        Motorcycle.prototype.showNumberWheels = function () {
            console.log("moved motorcycle ".concat(this.wheelCount, " miles"));
        };
        ;
        Motorcycle.prototype.getFullName = function () {
            return "MC- " + this.name;
        };
        ;
        return Motorcycle;
    }());
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNameSpace || (InterfaceNameSpace = {}));
