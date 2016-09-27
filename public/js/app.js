/**
 * Created by Robert on 26-9-2016.
 */
var socket = io();
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

console.log(name+' wants to join room ' + room);
jQuery('.room-title').html(room);
socket.on('connect',function () {
    console.log("connected to socket.io server");
    socket.emit('joinRoom',{
        name: name,
        room: room
    })
})

socket.on('message',function (message) {
    console.log('new message');
    var timestampMoment = moment.utc(message.timestamp);
    var $message = jQuery('.messages');

    $message.append('<p><strong>'+ message.name + ' ' +  timestampMoment.local().format('HH:mm:ss') + ': </strong>');
    $message.append('<p>'  + message.text + '</p>')

})

// handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit',function (event) {
    event.preventDefault();

    var $message = $form.find('input[name=message]');
    socket.emit('message',{
        name:name,
        text:$message.val()
    });

    $message.val("")
});


