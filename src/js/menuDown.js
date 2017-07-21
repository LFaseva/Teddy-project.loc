/**
 * Created by lfase on 21.07.2017.
 */
window.onload = function (){
    var btn_menu = document.querySelector('.btn-menu');
    var menu_list = document.querySelector('.visible-menu');

    btn_menu.onclick = function() {
        menu_list.classList.toggle('menu');
    }

};