basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        motorbit.forward(100)
    } else if (pins.digitalReadPin(DigitalPin.P10) == 1) {
        motorbit.back(100)
    } else {
        motorbit.brake()
    }
})
