sub main(launchArgs)

    ' Create MainScene
    screen = CreateObject("roSGScreen")
    m.port = CreateObject("roMessagePort")
    screen.SetMessagePort(m.port)
    scene = screen.CreateScene("MainScene")
    screen.Show()
    ' vscode_rdb_on_device_component_entry

    ' Add and Observe exitChannel field
    scene.ObserveField("exitChannel", m.port)

    ' Start app with launch parameters
    scene.setField("launchArgs", launchArgs)

    ' create roInput context for handling roInputEvent messages
    input = CreateObject("roInput")
    input.setMessagePort(m.port)

    ' Main Loop
    while true
        msg = Wait(0, m.port)
        msgType = Type(msg)
        if msgType = "roSGScreenEvent"
            if msg.IsScreenClosed()
                return
            end if

        else if msgType = "roSGNodeEvent"
            field = msg.getField()
            data = msg.getData()
            if field = "exitChannel" and data = true
                exit while
            end if

        else if msgType = "roInputEvent"
            ' Handle deep linking roInputEvent
            inputArgs = msg.getInfo()
            scene.setField("inputArgs", inputArgs)
        end if
    end while

    screen.Close()
end sub

