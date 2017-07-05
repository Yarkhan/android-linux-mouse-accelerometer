# Android Linux Mouse Accelerometer

## Controls mouse cursor with xdotool and android phone

I was bored and found this little [App](https://play.google.com/store/apps/details?id=de.lorenz_fenster.sensorstreamgps)
on Google Play, then decided that I wanted to control
my spaceplanes on Kerbal Space Program with my Android phone.

All this programs does is accessing accelerometer data streamed from the app through UDP,
and using `xdotool` to move the mouse on the screen
### Requirements
This program requires `xdotool` and `node` to be installed on your system.

### Running
In your phone, set the IP of your machine. Review the config file. Then on a terminal
`node main.js`.

### Usage

By default, the program will treat your phone like a
[Joystick](https://en.wikipedia.org/wiki/Joystick), hold your phone in portrait mode with
it's screen facing your left. The cursor should be drifting close to the center of your
screen (due accelerometers being unprecise)

Should you want to have your cursor controlled again by the mouse, just stop moving your
phone around (place it in the table) or stop streaming data from the phone to the computer.


### Config File
These are the default settings found in config.json
```javascript
{
    // Width and height of your screen
    "screenWidth": 1600,
    "screenHeight": 800,

    // A multiplier for sensibility. Keep between 1.0 and 3.0
    "sensitivityX": 1.0,
    "sensitivityY": 2.0,

    // How fast should the cursor move between frames
    // keep between 0.01 and 0.1
    "easeX": 0.1,
    "easeY": 0.1,

    // which accelerometer will be translated to the mouse axis
    // by default it interprets the position of your phone as a Joystick
    // but can easily changed to be a steering wheel by setting axisX to "y"
    // and axisY to "z"
    "axisX": "z",
    "axisY": "x",
    // if you want to invert X and Y axis
    "invertX": false,
    "invertY": true,
    // port where the program will be listening to your phone
    "port": 5555
}

```

Preciso de um emprego para parar de perder tempo com essas coisas e perder tempo
com outras coisas.
