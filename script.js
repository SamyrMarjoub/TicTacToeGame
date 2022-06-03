let pick = true
$('#button-color').click(function () {
    pick = true
    $('#button-color').css('background-color', '#A8BFC9')
    $('#button-transparent').css('background', 'rgb(26, 42, 51, 1')
    $('#img_x_pick').attr('src', './images/icon-x-color.svg')
    $('#img_o_pick').attr('src', './images/icon-o-color.svg')

})
$('#button-transparent').click(function () {
    pick = false
    $('#button-color').css('background-color', 'rgb(26, 42, 51, 1')
    $('#button-transparent').css('background-color', '#A8BFC9')
    $('#img_x_pick').attr('src', './images/icon-x-color-black.svg')
    $('#img_o_pick').attr('src', './images/icon-o-color-white.svg')
})

$('#new-game-ia').click(function () {
    $('.first-tela').addClass('animacao')
    setTimeout(function () {
        $('.first-tela').hide()
        $('.second-tela').show('fast')
    }, 500)
})
$('#new-game-human').click(function () {
    $('.first-tela').addClass('animacao')
    setTimeout(function () {
        $('.first-tela').hide()
        $('.second-tela').show('fast')
    }, 500)
})