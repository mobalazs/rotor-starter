sub RunUserInterface(args)

    #if unittest
        testInit = GetGlobalAA().Lookup("Rooibos_init")
        if testInit <> invalid
            testInit("RooibosScene")
        end if
        return
    #end if

    screen = CreateObject("roSGScreen")
    m.port = CreateObject("roMessagePort")
    screen.SetMessagePort(m.port)
    scene = screen.CreateScene("MainScene")
    screen.Show()
    ' vscode_rdb_on_device_component_entry

    scene.ObserveField("exitChannel", m.port)
    scene.launch_args = args

    ' create roInput viewModelState for handling roInputEvent messages
    input = CreateObject("roInput")
    input.setMessagePort(m.port)

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
            ' roInputEvent deep linking, pass arguments to the scene
            scene.input_args = msg.getInfo()
        end if
    end while
end sub
