$(document).ready(function() {

    $('#submit-button').on('click', postData);


});

function postData() {
    event.preventDefault();

    var values = {};
    $.each($('#sql-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/people',
        data: values,
        success: function(data) {
            if(data) {
                // everything went ok
                console.log('from server:', data);
                getData();
            } else {
                console.log('error');
            }
        }
    });

}

function getData() {
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(data) {

            console.log(data);


        //loop over array of objects, display each object properties and values

            $.each(data, function(i, value) {
                console.log(value);
               $('.newAddress').append('<div class="person"></div>');
                var $el = $('.newAddress').children().last();
                $el.append('<h2>' + value.name + '</h2>');
                $el.append('<p>' + value.address + '</p>');
                $el.append('<p>' + value.city + ', ' + value.state + '  ' + value.zip_code + '</p>');
            })
        }
    });
}