let strip = neopixel.create(DigitalPin.P3, 120, NeoPixelMode.RGB)
strip.clear()
for (let Index = 0; Index <= 9; Index++) {
    strip.setPixelColor(Index + 10, neopixel.colors(NeoPixelColors.Blue))
}
for (let Index = 0; Index <= 9; Index++) {
    strip.setPixelColor(Index + 20, neopixel.colors(NeoPixelColors.Red))
}
strip.show()
basic.forever(function () {
	
})
