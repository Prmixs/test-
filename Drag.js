var offsetX = 0;
var offsetY = 0;
function Drag(attrach) {
    this.div = document.getElementById(attrach);
    _this = this;
    this.div.onmousedown = function (ev) {
        _this.Mousedown(ev);
    };
    document.onmouseup = this.MouseUp;
}
Drag.prototype.Mousemove = function (ev) {
    var e = ev || window.event;
    this.div.style.left = e.clientX - this.offsetX + "px";
    this.div.style.top = e.clientY - this.offsetY + 'px';
}
Drag.prototype.MouseUp = function () {
    document.onmousemove = null;
}
Drag.prototype.Mousedown = function (ev) {
    var e = ev || window.event;
    this.offsetX = e.clientX - this.div.offsetLeft;
    this.offsetY = e.clientY - this.div.offsetTop;
    var _this = this;
    document.onmousemove = function (ev) {
        _this.Mousemove(ev);
    };
}