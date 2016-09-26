/**
 * Created by Robert on 26-9-2016.
 */
var socket = io();

socket.on('connect',function () {
    console.log("connected to socket.io server")
})
