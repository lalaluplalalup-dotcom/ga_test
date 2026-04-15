let strip: neopixel.Strip = null
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    strip = neopixel.create(DigitalPin.P0, 118, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    strip.show()
})
basic.forever(function () {
	
})
