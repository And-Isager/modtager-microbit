radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 6) {
        while (LYD == 0) {
            basic.showIcon(IconNames.No)
            music.playTone(196, music.beat(BeatFraction.Whole))
        }
        basic.showString("EMPTY")
        basic.showIcon(IconNames.No)
        LYD += -1
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (receivedNumber == 4) {
        while (LYD == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
            music.playTone(196, music.beat(BeatFraction.Whole))
        }
        LYD += -1
    }
    if (receivedNumber == 5) {
        while (LYD == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            music.playTone(196, music.beat(BeatFraction.Whole))
        }
        LYD += -1
    }
})
function gørNoget () {
	
}
input.onButtonPressed(Button.A, function () {
    LYD += 1
    basic.showIcon(IconNames.Yes)
})
let LYD = 0
radio.setGroup(0)
music.setVolume(100)
basic.showIcon(IconNames.Yes)
LYD = 0
