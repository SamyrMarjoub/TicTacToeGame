let bola = true
let cont = 2
let scorex = 0
let scoreo = 0
let tie = 0
let cond = false
let img1 = document.querySelector('.img')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')
let img5 = document.querySelector('.img5')
let img6 = document.querySelector('.img6')
let img7 = document.querySelector('.img7')
let img8 = document.querySelector('.img8')
let img9 = document.querySelector('.img9')
let img1O = false
let img1X = false
let img2O = false
let img2X = false
let img3O = false
let img3X = false
let img4O = false
let img4X = false
let img5O = false
let img5X = false
let img6O = false
let img6X = false
let img7O = false
let img7X = false
let img8O = false
let img8X = false
let img9O = false
let img9X = false

$('document').ready(function () {
    $('.first-tela').addClass('animacao2')
    setTimeout(function () {
        $('.first-tela').removeClass('animacao2')
    }, 1000)
})

$('#button-color').click(function () {
    bola = true
    $('#button-color').css('background-color', '#A8BFC9')
    $('#button-transparent').css('background', 'rgb(26, 42, 51, 1')
    $('#img_x_pick').attr('src', './images/icon-x-color.svg')
    $('#img_o_pick').attr('src', './images/icon-o-color.svg')

})
$('#button-transparent').click(function () {
    bola = false
    $('#button-color').css('background-color', 'rgb(26, 42, 51, 1')
    $('#button-transparent').css('background-color', '#A8BFC9')
    $('#img_x_pick').attr('src', './images/icon-x-color-black.svg')
    $('#img_o_pick').attr('src', './images/icon-o-color-white.svg')
})

$('#new-game-human').click(function () {
    $('.first-tela').addClass('animacao')
    setTimeout(function () {
        $('.first-tela').hide()
        $('.second-tela').show('fast')
    }, 500)

})

$('.q1').click(function () {
    if (img1.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            q1T = true
            $('.q1').children().attr('src', './images/icon-x.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-o-color-white.svg')
            img1X = true
        } else {
            $('.q1').children().attr('src', './images/icon-o.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-x-color.svg')
            img1O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        if (img1X && img2X && img3X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q2').css('background-color', '#31c3bd')
            $('.q3').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img4X && img7X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q4').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img5X && img9X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img7X && img8X && img9X) {
            $('.q7').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img2X && img5X && img8X) {
            $('.q2').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img5X && img7X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img4X && img5X && img6X) {
            $('.q4').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img6X && img9X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        }
        ++scorex
        cond = true
        $('#x-score').html(scorex)
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        if (img1O && img2O && img3O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q2').css('background-color', '#f2b137')
            $('.q3').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img4O && img7O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q4').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img5O && img9O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img7O && img8O && img9O) {
            $('.q7').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img2O && img5O && img8O) {
            $('.q2').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img5O && img7O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img4O && img5O && img6O) {
            $('.q4').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img6O && img9O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        }
        ++scoreo
        cond = true
        $('#o-score').html(scoreo)
    }
    if (img1.classList.contains('img-width') && img2.classList.contains('img-width')
        && img3.classList.contains('img-width') && img4.classList.contains('img-width')
        && img5.classList.contains('img-width') && img6.classList.contains('img-width')
        && img7.classList.contains('img-width') && img8.classList.contains('img-width')
        && img9.classList.contains('img-width')) {
        if (cond) {
            return
        }
        ++tie
        $('.ties').html(tie)
    }
})
$('.q2').click(function () {
    if (img2.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q2').children().attr('src', './images/icon-x.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-o-color-white.svg')
            img2X = true
        } else {
            $('.q2').children().attr('src', './images/icon-o.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-x-color.svg')
            img2O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        if (img1X && img2X && img3X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q2').css('background-color', '#31c3bd')
            $('.q3').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img4X && img7X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q4').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img5X && img9X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img7X && img8X && img9X) {
            $('.q7').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img2X && img5X && img8X) {
            $('.q2').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img5X && img7X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img4X && img5X && img6X) {
            $('.q4').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img6X && img9X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        }
        ++scorex
        cond = true
        $('#x-score').html(scorex)
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        if (img1O && img2O && img3O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q2').css('background-color', '#f2b137')
            $('.q3').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img4O && img7O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q4').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img5O && img9O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img7O && img8O && img9O) {
            $('.q7').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img2O && img5O && img8O) {
            $('.q2').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img5O && img7O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img4O && img5O && img6O) {
            $('.q4').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img6O && img9O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        }

        ++scoreo
        cond = true
        $('#o-score').html(scoreo)
    }
    if (img1.classList.contains('img-width') && img2.classList.contains('img-width')
        && img3.classList.contains('img-width') && img4.classList.contains('img-width')
        && img5.classList.contains('img-width') && img6.classList.contains('img-width')
        && img7.classList.contains('img-width') && img8.classList.contains('img-width')
        && img9.classList.contains('img-width')) {
        if (cond) {
            return
        }
        ++tie
        $('.ties').html(tie)
    }
})
$('.q3').click(function () {
    if (img3.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q3').children().attr('src', './images/icon-x.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-o-color-white.svg')
            img3X = true
        } else {
            $('.q3').children().attr('src', './images/icon-o.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-x-color.svg')
            img3O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        if (img1X && img2X && img3X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q2').css('background-color', '#31c3bd')
            $('.q3').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img4X && img7X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q4').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img5X && img9X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img7X && img8X && img9X) {
            $('.q7').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img2X && img5X && img8X) {
            $('.q2').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img5X && img7X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img4X && img5X && img6X) {
            $('.q4').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img6X && img9X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        }
        ++scorex
        cond = true
        $('#x-score').html(scorex)
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        if (img1O && img2O && img3O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q2').css('background-color', '#f2b137')
            $('.q3').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img4O && img7O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q4').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img5O && img9O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img7O && img8O && img9O) {
            $('.q7').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img2O && img5O && img8O) {
            $('.q2').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img5O && img7O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img4O && img5O && img6O) {
            $('.q4').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img6O && img9O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        }

        ++scoreo
        cond = true
        $('#o-score').html(scoreo)
    }
    if (img1.classList.contains('img-width') && img2.classList.contains('img-width')
        && img3.classList.contains('img-width') && img4.classList.contains('img-width')
        && img5.classList.contains('img-width') && img6.classList.contains('img-width')
        && img7.classList.contains('img-width') && img8.classList.contains('img-width')
        && img9.classList.contains('img-width')) {
        if (cond) {
            return
        }
        ++tie
        $('.ties').html(tie)
    }
})
$('.q4').click(function () {
    if (img4.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q4').children().attr('src', './images/icon-x.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-o-color-white.svg')
            img4X = true
        } else {
            $('.q4').children().attr('src', './images/icon-o.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-x-color.svg')
            img4O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        if (img1X && img2X && img3X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q2').css('background-color', '#31c3bd')
            $('.q3').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img4X && img7X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q4').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img5X && img9X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img7X && img8X && img9X) {
            $('.q7').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img2X && img5X && img8X) {
            $('.q2').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img5X && img7X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img4X && img5X && img6X) {
            $('.q4').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img6X && img9X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        }
        ++scorex
        cond = true
        $('#x-score').html(scorex)
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        if (img1O && img2O && img3O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q2').css('background-color', '#f2b137')
            $('.q3').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img4O && img7O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q4').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img5O && img9O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img7O && img8O && img9O) {
            $('.q7').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img2O && img5O && img8O) {
            $('.q2').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img5O && img7O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img4O && img5O && img6O) {
            $('.q4').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img6O && img9O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        }
        ++scoreo
        cond = true
        $('#o-score').html(scoreo)
    }
    if (img1.classList.contains('img-width') && img2.classList.contains('img-width')
        && img3.classList.contains('img-width') && img4.classList.contains('img-width')
        && img5.classList.contains('img-width') && img6.classList.contains('img-width')
        && img7.classList.contains('img-width') && img8.classList.contains('img-width')
        && img9.classList.contains('img-width')) {
        if (cond) {
            return
        }
        ++tie
        $('.ties').html(tie)
    }
})
$('.q5').click(function () {
    if (img5.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q5').children().attr('src', './images/icon-x.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-o-color-white.svg')
            img5X = true
        } else {
            $('.q5').children().attr('src', './images/icon-o.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-x-color.svg')
            img5O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        if (img1X && img2X && img3X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q2').css('background-color', '#31c3bd')
            $('.q3').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img4X && img7X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q4').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img5X && img9X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img7X && img8X && img9X) {
            $('.q7').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img2X && img5X && img8X) {
            $('.q2').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img5X && img7X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img4X && img5X && img6X) {
            $('.q4').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img6X && img9X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        }
        ++scorex
        cond = true
        $('#x-score').html(scorex)
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        if (img1O && img2O && img3O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q2').css('background-color', '#f2b137')
            $('.q3').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img4O && img7O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q4').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img5O && img9O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img7O && img8O && img9O) {
            $('.q7').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img2O && img5O && img8O) {
            $('.q2').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img5O && img7O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img4O && img5O && img6O) {
            $('.q4').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img6O && img9O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        }
        ++scoreo
        cond = true
        $('#o-score').html(scoreo)
    }
    if (img1.classList.contains('img-width') && img2.classList.contains('img-width')
        && img3.classList.contains('img-width') && img4.classList.contains('img-width')
        && img5.classList.contains('img-width') && img6.classList.contains('img-width')
        && img7.classList.contains('img-width') && img8.classList.contains('img-width')
        && img9.classList.contains('img-width')) {
        if (cond) {
            return
        }
        ++tie
        $('.ties').html(tie)
    }
})
$('.q6').click(function () {
    if (img6.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q6').children().attr('src', './images/icon-x.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-o-color-white.svg')
            img6X = true
        } else {
            $('.q6').children().attr('src', './images/icon-o.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-x-color.svg')
            img6O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        if (img1X && img2X && img3X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q2').css('background-color', '#31c3bd')
            $('.q3').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img4X && img7X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q4').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img5X && img9X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img7X && img8X && img9X) {
            $('.q7').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img2X && img5X && img8X) {
            $('.q2').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img5X && img7X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img4X && img5X && img6X) {
            $('.q4').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img6X && img9X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        }
        ++scorex
        cond = true
        $('#x-score').html(scorex)
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        if (img1O && img2O && img3O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q2').css('background-color', '#f2b137')
            $('.q3').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img4O && img7O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q4').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img5O && img9O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img7O && img8O && img9O) {
            $('.q7').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img2O && img5O && img8O) {
            $('.q2').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img5O && img7O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img4O && img5O && img6O) {
            $('.q4').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img6O && img9O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        }
        ++scoreo
        cond = true
        $('#o-score').html(scoreo)
    }
    if (img1.classList.contains('img-width') && img2.classList.contains('img-width')
        && img3.classList.contains('img-width') && img4.classList.contains('img-width')
        && img5.classList.contains('img-width') && img6.classList.contains('img-width')
        && img7.classList.contains('img-width') && img8.classList.contains('img-width')
        && img9.classList.contains('img-width')) {
        if (cond) {
            return
        }
        ++tie
        $('.ties').html(tie)
    }
})
$('.q7').click(function () {
    if (img7.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q7').children().attr('src', './images/icon-x.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-o-color-white.svg')
            img7X = true
        } else {
            $('.q7').children().attr('src', './images/icon-o.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-x-color.svg')
            img7O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        if (img1X && img2X && img3X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q2').css('background-color', '#31c3bd')
            $('.q3').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img4X && img7X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q4').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img5X && img9X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img7X && img8X && img9X) {
            $('.q7').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img2X && img5X && img8X) {
            $('.q2').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img5X && img7X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img4X && img5X && img6X) {
            $('.q4').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img6X && img9X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        }
        ++scorex
        cond = true
        $('#x-score').html(scorex)
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        if (img1O && img2O && img3O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q2').css('background-color', '#f2b137')
            $('.q3').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img4O && img7O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q4').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img5O && img9O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img7O && img8O && img9O) {
            $('.q7').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img2O && img5O && img8O) {
            $('.q2').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img5O && img7O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img4O && img5O && img6O) {
            $('.q4').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img6O && img9O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        }
        ++scoreo
        cond = true
        $('#o-score').html(scoreo)
    }
    if (img1.classList.contains('img-width') && img2.classList.contains('img-width')
        && img3.classList.contains('img-width') && img4.classList.contains('img-width')
        && img5.classList.contains('img-width') && img6.classList.contains('img-width')
        && img7.classList.contains('img-width') && img8.classList.contains('img-width')
        && img9.classList.contains('img-width')) {
        if (cond) {
            return
        }
        ++tie
        $('.ties').html(tie)
    }
})
$('.q8').click(function () {
    if (img8.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q8').children().attr('src', './images/icon-x.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-o-color-white.svg')
            img8X = true
        } else {
            $('.q8').children().attr('src', './images/icon-o.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-x-color.svg')
            img8O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        if (img1X && img2X && img3X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q2').css('background-color', '#31c3bd')
            $('.q3').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img4X && img7X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q4').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img5X && img9X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img7X && img8X && img9X) {
            $('.q7').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img2X && img5X && img8X) {
            $('.q2').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img5X && img7X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img4X && img5X && img6X) {
            $('.q4').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img6X && img9X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        }
        ++scorex
        cond = true
        $('#x-score').html(scorex)
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        if (img1O && img2O && img3O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q2').css('background-color', '#f2b137')
            $('.q3').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img4O && img7O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q4').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img5O && img9O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img7O && img8O && img9O) {
            $('.q7').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img2O && img5O && img8O) {
            $('.q2').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img5O && img7O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img4O && img5O && img6O) {
            $('.q4').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img6O && img9O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        }
        ++scoreo
        cond = true
        $('#o-score').html(scoreo)
    }
    if (img1.classList.contains('img-width') && img2.classList.contains('img-width')
        && img3.classList.contains('img-width') && img4.classList.contains('img-width')
        && img5.classList.contains('img-width') && img6.classList.contains('img-width')
        && img7.classList.contains('img-width') && img8.classList.contains('img-width')
        && img9.classList.contains('img-width')) {
        if (cond) {
            return
        }
        ++tie
        $('.ties').html(tie)
    }
})
$('.q9').click(function () {
    if (img9.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q9').children().attr('src', './images/icon-x.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-o-color-white.svg')
            img9X = true
        } else {
            $('.q9').children().attr('src', './images/icon-o.svg').addClass('img-width')
            $('.img-turn').attr('src', './images/icon-x-color.svg')
            img9O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        if (img1X && img2X && img3X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q2').css('background-color', '#31c3bd')
            $('.q3').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img4X && img7X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q4').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img1X && img5X && img9X) {
            $('.q1').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q1').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img7X && img8X && img9X) {
            $('.q7').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        } else if (img2X && img5X && img8X) {
            $('.q2').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q8').css('background-color', '#31c3bd')
            $('.q2').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q8').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img5X && img7X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q7').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q7').children().attr('src', './images/icon-x-win.svg')
        } else if (img4X && img5X && img6X) {
            $('.q4').css('background-color', '#31c3bd')
            $('.q5').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q4').children().attr('src', './images/icon-x-win.svg')
            $('.q5').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
        } else if (img3X && img6X && img9X) {
            $('.q3').css('background-color', '#31c3bd')
            $('.q6').css('background-color', '#31c3bd')
            $('.q9').css('background-color', '#31c3bd')
            $('.q3').children().attr('src', './images/icon-x-win.svg')
            $('.q6').children().attr('src', './images/icon-x-win.svg')
            $('.q9').children().attr('src', './images/icon-x-win.svg')
        }
        ++scorex
        cond = true
        $('#x-score').html(scorex)
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        if (img1O && img2O && img3O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q2').css('background-color', '#f2b137')
            $('.q3').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img4O && img7O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q4').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img1O && img5O && img9O) {
            $('.q1').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q1').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img7O && img8O && img9O) {
            $('.q7').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        } else if (img2O && img5O && img8O) {
            $('.q2').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q8').css('background-color', '#f2b137')
            $('.q2').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q8').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img5O && img7O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q7').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q7').children().attr('src', './images/icon-o-win.svg')
        } else if (img4O && img5O && img6O) {
            $('.q4').css('background-color', '#f2b137')
            $('.q5').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q4').children().attr('src', './images/icon-o-win.svg')
            $('.q5').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
        } else if (img3O && img6O && img9O) {
            $('.q3').css('background-color', '#f2b137')
            $('.q6').css('background-color', '#f2b137')
            $('.q9').css('background-color', '#f2b137')
            $('.q3').children().attr('src', './images/icon-o-win.svg')
            $('.q6').children().attr('src', './images/icon-o-win.svg')
            $('.q9').children().attr('src', './images/icon-o-win.svg')
        }
        ++scoreo
        cond = true
        $('#o-score').html(scoreo)
    }
    if (img1.classList.contains('img-width') && img2.classList.contains('img-width')
        && img3.classList.contains('img-width') && img4.classList.contains('img-width')
        && img5.classList.contains('img-width') && img6.classList.contains('img-width')
        && img7.classList.contains('img-width') && img8.classList.contains('img-width')
        && img9.classList.contains('img-width')) {
        if (cond) {
            return
        }
        ++tie
        $('.ties').html(tie)
    }
})
hover()
function hover() {
    $('.q1').mouseover(function () {
        if (img1.classList.contains('img-width')) {
            return
        }
        if (cont % 2 == 0) {
            $('.q1').css('background-image', 'url("./images/icon-x-outline.svg")')
            $('.q1').css('background-position', 'center')
            $('.q1').css('background-repeat', 'no-repeat')
            $('.q1').css('background-size', '50px')
        } else {
            $('.q1').css('background-image', 'url("./images/icon-o-outline.svg")')
            $('.q1').css('background-position', 'center')
            $('.q1').css('background-size', '50px')
            $('.q1').css('background-repeat', 'no-repeat')
        }
    })
    $('.q1').mouseout(function () {
        $('.q1').css('background-image', '')
    })
    $('.q2').mouseover(function () {
        if (img2.classList.contains('img-width')) {
            return
        }
        if (cont % 2 == 0) {
            $('.q2').css('background-image', 'url("./images/icon-x-outline.svg")')
            $('.q2').css('background-position', 'center')
            $('.q2').css('background-repeat', 'no-repeat')
            $('.q2').css('background-size', '50px')
        } else {
            $('.q2').css('background-image', 'url("./images/icon-o-outline.svg")')
            $('.q2').css('background-position', 'center')
            $('.q2').css('background-size', '50px')
            $('.q2').css('background-repeat', 'no-repeat')
        }
    })
    $('.q2').mouseout(function () {
        $('.q2').css('background-image', '')
    })
    $('.q3').mouseover(function () {
        if (img3.classList.contains('img-width')) {
            return
        }
        if (cont % 2 == 0) {
            $('.q3').css('background-image', 'url("./images/icon-x-outline.svg")')
            $('.q3').css('background-position', 'center')
            $('.q3').css('background-repeat', 'no-repeat')
            $('.q3').css('background-size', '50px')
        } else {
            $('.q3').css('background-image', 'url("./images/icon-o-outline.svg")')
            $('.q3').css('background-position', 'center')
            $('.q3').css('background-size', '50px')
            $('.q3').css('background-repeat', 'no-repeat')
        }
    })
    $('.q3').mouseout(function () {
        $('.q3').css('background-image', '')
    })


    $('.q4').mouseover(function () {
        if (img4.classList.contains('img-width')) {
            return
        }
        if (cont % 2 == 0) {
            $('.q4').css('background-image', 'url("./images/icon-x-outline.svg")')
            $('.q4').css('background-position', 'center')
            $('.q4').css('background-repeat', 'no-repeat')
            $('.q4').css('background-size', '50px')
        } else {
            $('.q4').css('background-image', 'url("./images/icon-o-outline.svg")')
            $('.q4').css('background-position', 'center')
            $('.q4').css('background-size', '50px')
            $('.q4').css('background-repeat', 'no-repeat')
        }
    })
    $('.q4').mouseout(function () {
        $('.q4').css('background-image', '')
    })

    $('.q5').mouseover(function () {
        if (img5.classList.contains('img-width')) {
            return
        }
        if (cont % 2 == 0) {
            $('.q5').css('background-image', 'url("./images/icon-x-outline.svg")')
            $('.q5').css('background-position', 'center')
            $('.q5').css('background-repeat', 'no-repeat')
            $('.q5').css('background-size', '50px')
        } else {
            $('.q5').css('background-image', 'url("./images/icon-o-outline.svg")')
            $('.q5').css('background-position', 'center')
            $('.q5').css('background-size', '50px')
            $('.q5').css('background-repeat', 'no-repeat')
        }
    })
    $('.q5').mouseout(function () {
        $('.q5').css('background-image', '')
    })
    $('.q6').mouseover(function () {
        if (img6.classList.contains('img-width')) {
            return
        }
        if (cont % 2 == 0) {
            $('.q6').css('background-image', 'url("./images/icon-x-outline.svg")')
            $('.q6').css('background-position', 'center')
            $('.q6').css('background-repeat', 'no-repeat')
            $('.q6').css('background-size', '50px')
        } else {
            $('.q6').css('background-image', 'url("./images/icon-o-outline.svg")')
            $('.q6').css('background-position', 'center')
            $('.q6').css('background-size', '50px')
            $('.q6').css('background-repeat', 'no-repeat')
        }
    })
    $('.q6').mouseout(function () {
        $('.q6').css('background-image', '')
    })

    $('.q7').mouseover(function () {
        if (img7.classList.contains('img-width')) {
            return
        }
        if (cont % 2 == 0) {
            $('.q7').css('background-image', 'url("./images/icon-x-outline.svg")')
            $('.q7').css('background-position', 'center')
            $('.q7').css('background-repeat', 'no-repeat')
            $('.q7').css('background-size', '50px')
        } else {
            $('.q7').css('background-image', 'url("./images/icon-o-outline.svg")')
            $('.q7').css('background-position', 'center')
            $('.q7').css('background-size', '50px')
            $('.q7').css('background-repeat', 'no-repeat')
        }
    })
    $('.q7').mouseout(function () {
        $('.q7').css('background-image', '')
    })
    $('.q8').mouseover(function () {
        if (img8.classList.contains('img-width')) {
            return
        }
        if (cont % 2 == 0) {
            $('.q8').css('background-image', 'url("./images/icon-x-outline.svg")')
            $('.q8').css('background-position', 'center')
            $('.q8').css('background-repeat', 'no-repeat')
            $('.q8').css('background-size', '50px')
        } else {
            $('.q8').css('background-image', 'url("./images/icon-o-outline.svg")')
            $('.q8').css('background-position', 'center')
            $('.q8').css('background-size', '50px')
            $('.q8').css('background-repeat', 'no-repeat')
        }
    })
    $('.q8').mouseout(function () {
        $('.q8').css('background-image', '')
    })

    $('.q9').mouseover(function () {
        if (img9.classList.contains('img-width')) {
            return
        }
        if (cont % 2 == 0) {
            $('.q9').css('background-image', 'url("./images/icon-x-outline.svg")')
            $('.q9').css('background-position', 'center')
            $('.q9').css('background-repeat', 'no-repeat')
            $('.q9').css('background-size', '50px')
        } else {
            $('.q9').css('background-image', 'url("./images/icon-o-outline.svg")')
            $('.q9').css('background-position', 'center')
            $('.q9').css('background-size', '50px')
            $('.q9').css('background-repeat', 'no-repeat')
        }
    })
    $('.q9').mouseout(function () {
        $('.q9').css('background-image', '')
    })
}

function restart() {
    $('.a').css('background-color', '#1f3641')
    $('.a').css('background-image', '')
    $('.a').children().attr('src', '').removeClass('img-width')
    cont = 2
    img1X = false
    img2X = false
    img3X = false
    img4X = false
    img5X = false
    img6X = false
    img7X = false
    img8X = false
    img9X = false
    img1O = false
    img2O = false
    img3O = false
    img4O = false
    img5O = false
    img6O = false
    img7O = false
    img8O = false
    img9O = false
}