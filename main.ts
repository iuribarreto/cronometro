let tempo = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("OK")
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    if (tempo == 0) {
        tempo = input.runningTime()
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showNumber((input.runningTime() - tempo) / 1000)
        tempo = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.No)
        basic.pause(1)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showNumber((input.runningTime() - tempo) / 1000)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
