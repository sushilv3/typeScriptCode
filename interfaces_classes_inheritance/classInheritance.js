var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
var DerivedFromBase = /** @class */ (function (_super) {
    __extends(DerivedFromBase, _super);
    function DerivedFromBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DerivedFromBase;
}(BaseClass));
var BaseClassWithConst = /** @class */ (function () {
    function BaseClassWithConst(id) {
        this.id = id;
    }
    return BaseClassWithConst;
}());
var DerivedClassWithConst = /** @class */ (function (_super) {
    __extends(DerivedClassWithConst, _super);
    function DerivedClassWithConst(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    return DerivedClassWithConst;
}(BaseClassWithConst));
