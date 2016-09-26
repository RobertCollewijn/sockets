/**
 * Created by Robert on 26-9-2016.
 */
var socket = io();

socket.on('connect',function () {
    console.log("connected to socket.io server")
})

socket.on('message',function (message) {
    console.log('new message');
    var timestampMoment = moment.utc(message.timestamp);
    console.log((message.text));
    jQuery('.messages').append('<p><strong>'+  timestampMoment.local().format('HH:mm:ss') + ': </strong>' + message.text + '</p>')
})

// handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit',function (event) {
    event.preventDefault();

    var $message = $form.find('input[name=message]');
    socket.emit('message',{text:$message.val()});

    $message.val("")
});


