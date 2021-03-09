
function LimitDrag(id) {
    Drag.apply(this, [id]);
}
for (var attach in Drag.prototype) {
    LimitDrag.prototype[attach] = Drag.prototype[attach];
}
LimitDrag.prototype.Mousemove = function (ev) {
    var e = ev || window.event;
    var l = e.clientX - this.offsetX;

    if (l <= 0) {
        l = 0;
    }
    if (l >= windowWidth - this.div.offsetWidth) {
        l = windowWidth - this.div.offsetWidth;
    }
    var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight; var t = e.clientY - this.offsetY;
    if (t <= 0) {
        t = 0;
    }
    if (t >= windowHeight - this.div.offsetHeight) {
        t = windowHeight - this.div.offsetHeight;
    }
    this.div.style.left = l + 'px';
    this.div.style.top = t + 'px';
}