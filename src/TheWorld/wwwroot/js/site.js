// site.js

(function () {
//    $

//    var ele = $("#username");
//    ele.text("Ali Mourad");

//    var main = $("#main");
//    main.on("mouseenter", function () {
//        main.style = "background-color: #888";
//    });
//    main.on("mouseleave", function () {
//        main.style["background-color"] = "";
//    });

//    var menuItems = $("ul.menu li a");
//    menuItems.on("click", function () {
//        var me = $(this);
//    alert(me.text());
    //});

    var $sidebarAndWrapper = $("#sidebar,#wrapper");

    // logic to implement hide-sidebar class and then logic to change toggle button text
    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        } else {
            $(this).text("Hide Sidebar");
        }
    });
}) ();