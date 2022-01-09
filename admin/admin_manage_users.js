function open_tabs() {
    document.getElementById("divt").className = "classs";
}

function close_tab() {

    document.getElementById("divt").className = "classs_close";
}

function dark() {
    document.body.style.backgroundImage = "url(images/dark_back.jpg)";
    document.getElementById("id1").style.backgroundColor = '#101010';
    document.getElementById("id2").style.backgroundColor = '#101010';
    document.getElementById("id3").style.backgroundColor = '#101010';
    document.getElementById("id4").style.backgroundColor = '#1F1F1F';
    document.getElementById("bottom_little_tab").style.backgroundColor = '#383838';
    document.getElementById("bu4").style.backgroundColor = '#383838';
    document.getElementById("bu4").style.border = "2px solid #707070";
    document.getElementById("p5").style.color = '#FFFFFF';
    document.getElementById("p4").style.color = '#FFFFFF';
    document.getElementById("bu1").style.backgroundColor = '#383838';
    document.getElementById("bu1").style.color = 'white';
    document.getElementById("bu1").style.border = "2px solid #707070";
    document.getElementById("bu2").style.backgroundColor = '#101010';
    document.getElementById("bu3").style.backgroundColor = '#101010';
    document.getElementById("input1").style.backgroundColor = '#515050';
    document.getElementById("notifications").style.backgroundColor = '#515050';
    document.getElementById("settings_").style.backgroundColor = '#515050';
    document.getElementById("divt").style.backgroundColor = '#1F1F1F';
    document.getElementById("bu8").style.backgroundColor = '#1F1F1F';
    document.getElementById("bu7").style.backgroundColor = '#1F1F1F';
    document.getElementById("all_dd_1").style.backgroundColor = '#343434';
    document.getElementById("all_dd_2").style.backgroundColor = '#343434';
    document.getElementById("all_dd_3").style.backgroundColor = '#343434';
    document.getElementById("all_dd_4").style.backgroundColor = '#343434';
    document.getElementById("all_dd_5").style.backgroundColor = '#343434';
    document.getElementById("p14").style.color = '#DBDBDB';
    document.getElementById("p101").style.color = '#DBDBDB';
    document.getElementById("p102").style.color = '#DBDBDB';
    document.getElementById("p103").style.color = '#DBDBDB';
    document.getElementById("p104").style.color = '#DBDBDB';
    document.getElementById("show_more").style.color = '#707070';
    document.getElementById("show_more").style.border = '2px solid #707070';
}

function white() {
    document.body.style.backgroundImage = "url(images/back.jpg)";
    document.getElementById("id1").style.backgroundColor = '#F2F5FD';
    document.getElementById("id2").style.backgroundColor = '#F2F5FD';
    document.getElementById("id3").style.backgroundColor = '#2D53DA';
    document.getElementById("id4").style.backgroundColor = '#1DCEF5';
    document.getElementById("bottom_little_tab").style.backgroundColor = '#3E65F2';
    document.getElementById("bu4").style.backgroundColor = '#3E65F2';
    document.getElementById("bu4").style.border = "2px solid #F2F5FD";
    document.getElementById("p5").style.color = '#000000';
    document.getElementById("p4").style.color = '#000000';
    document.getElementById("bu1").style.backgroundColor = '#FFFFFF';
    document.getElementById("bu1").style.color = '#101010';
    document.getElementById("bu1").style.border = "none";
    document.getElementById("bu2").style.backgroundColor = '#2D53DA';
    document.getElementById("bu3").style.backgroundColor = '#2D53DA';
    document.getElementById("input1").style.backgroundColor = '#FFFFFF';
    document.getElementById("notifications").style.backgroundColor = '#F2F5FD';
    document.getElementById("settings_").style.backgroundColor = '#F2F5FD';
    document.getElementById("divt").style.backgroundColor = '#2D53DA';
    document.getElementById("bu8").style.backgroundColor = '#2D53DA';
    document.getElementById("bu7").style.backgroundColor = '#2D53DA';
    document.getElementById("all_dd_1").style.backgroundColor = '#FFFFFF';
    document.getElementById("all_dd_2").style.backgroundColor = '#FFFFFF';
    document.getElementById("all_dd_3").style.backgroundColor = '#FFFFFF';
    document.getElementById("all_dd_4").style.backgroundColor = '#FFFFFF';
    document.getElementById("all_dd_5").style.backgroundColor = '#FFFFFF';
    document.getElementById("p14").style.color = '#000000';
    document.getElementById("p101").style.color = '#000000';
    document.getElementById("p102").style.color = '#000000';
    document.getElementById("p103").style.color = '#000000';
    document.getElementById("p104").style.color = '#000000';
    document.getElementById("show_more").style.color = '#476BEE';
    document.getElementById("show_more").style.border = '2px solid #476BEE';
}


function mobile_menu_() {
    document.getElementById("mobile_menu").style.display = "none";
    document.getElementById("mobile_menu_back").style.display = "none";
}

function mobile_menu_open() {
    document.getElementById("mobile_menu").style.display = "block";
    document.getElementById("mobile_menu_back").style.display = "block";
}

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();


function open_div() {
    document.getElementById("container").style.display = "block";
    document.getElementById("block").style.display = "block";
}

function close_div() {
    document.getElementById("container").style.display = "none";
    document.getElementById("block").style.display = "none";
}