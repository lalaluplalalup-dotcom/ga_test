strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
strip.show_rainbow(1, 360)
strip.show()

def on_forever():
    pass
basic.forever(on_forever)
