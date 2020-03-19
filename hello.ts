import $ from 'jquery';

function Greeting(options: {name: string}) {
    $('#name').html(`Hello ${options.name}!`)
    $('#name').click(() => {
        alert(options.name)
    });
}

Greeting({
    name: 'Matt'
});
