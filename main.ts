let _1 = 0
let _2 = 1
let _3 = 0
basic.forever(function () {
    _3 = _1 + _2
    if (_1 + _2 == _3) {
        _1 = _2
        _2 = _3
    }
    basic.showNumber(_3)
})
