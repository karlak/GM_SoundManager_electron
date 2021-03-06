(function() {
    "use strict";
    var _Mathabs = Math.abs,
        _NumberparseInt = Number.parseInt,
        _NumberparseFloat = Number.parseFloat,
        _NumberisNaN = Number.isNaN,
        _NumberisFinite = Number.isFinite,
        _Mathround = Math.round,
        _Mathsqrt = Math.sqrt,
        _Mathpow = Math.pow,
        _Mathtan = Math.tan,
        _Mathsin = Math.sin,
        _Mathcos = Math.cos,
        _MathPI = Math.PI,
        _Mathmax = Math.max,
        _Mathmin = Math.min,
        _createClass = function() {
            function o(n, u) {
                for (var m = 0, w; m < u.length; m++) w = u[m], w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(n, w.key, w)
            }
            return function(n, u, m) {
                return u && o(n.prototype, u), m && o(n, m), n
            }
        }(),
        _slicedToArray = function() {
            function o(n, u) {
                var m = [],
                    w = !0,
                    k = !1,
                    _;
                try {
                    for (var A = n[Symbol.iterator](), C; !(w = (C = A.next())
                            .done) && (m.push(C.value), !(u && m.length === u)); w = !0);
                } catch (S) {
                    k = !0, _ = S
                } finally {
                    try {
                        !w && A["return"] && A["return"]()
                    } finally {
                        if (k) throw _
                    }
                }
                return m
            }
            return function(n, u) {
                if (Array.isArray(n)) return n;
                if (Symbol.iterator in Object(n)) return o(n, u);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        _templateObject = _taggedTemplateLiteral(["", ""], ["", ""]),
        _templateObject2 = _taggedTemplateLiteral(["\n    <template>\n      <link rel=\"stylesheet\" href=\"", "\">\n      <style>:host{width:100%;height:100%;display:block}#main,#sidebar{position:relative}#main{display:flex;flex-flow:row;height:100%;width:100%}#sidebar{width:270px;overflow:auto;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);z-index:100}#sidebar #header{padding:20px 0}#sidebar #header+hr{margin-top:-1px}#sidebar h1{margin:0 22px 0 104px;line-height:1}#sidebar #nav{margin-bottom:20px;width:100%}#sidebar #nav .external-link-icon{margin:0;width:20px;height:20px}#sidebar #nav x-button{width:calc(100% + 60px);margin-left:-30px;padding:8px 30px;--ripple-background: white}#sidebar #nav x-button x-label{font-size:15px}#hide-sidebar-button,#show-sidebar-button{position:absolute;top:18px;left:11px;padding:0;width:32px;height:32px;min-height:32px}#show-sidebar-button{top:20px;z-index:10}#theme-section{padding:10px 0}#theme-section #theme-heading,#views #faq-view h4{margin-top:0}#theme-section x-select{width:100%}#theme-section #theme-select{margin-bottom:14px}#views,#views>.view{display:block;width:100%;height:100%}#views{min-width:20px;min-height:20px;position:relative;flex:1}#views>.view{box-sizing:border-box;overflow:auto}#views>.view:not([selected]){display:none!important}#views #about-view,#views>.view>article{padding:0 70px;margin:0 auto;max-width:780px;box-sizing:border-box}#views section{margin-bottom:35px}#views section[data-last-visible]+hr,#views section[hidden]+hr{display:none}#views section h3,#views section h4,#views section h5{position:relative}#views #about-view{color:#fff;width:100%;height:100vh;display:flex;align-items:center;padding:0 100px;margin:0;max-width:none}#about-view h1{font-size:170px;font-weight:700;margin:0 0 50px;padding:0;line-height:1}@media screen and (max-width:880px){#about-view h1{font-size:120px}}#about-view h2{font-size:27px;font-weight:400;line-height:1.05;color:rgba(255,255,255,.8);margin:0 0 20px;text-transform:none}#about-view h2 em{color:rgba(255,255,255,.95);font-style:normal;font-weight:700}#views #setup-view h3{margin-bottom:0}#views #setup-view h3 x-icon{width:40px;height:auto;display:inline-block;vertical-align:middle}#views #setup-view pre{display:block;white-space:pre;overflow:auto}#views #setup-view dd{margin:0 0 18px}#views #setup-view dd:last-of-type{margin:0}<\/style>\n\n      <main id=\"main\">\n        <x-button id=\"show-sidebar-button\" icon=\"menu\" skin=\"textured\">\n          <x-icon name=\"menu\"><\/x-icon>\n        <\/x-button>\n\n        <sidebar id=\"sidebar\">\n          <header id=\"header\">\n            <h1 id=\"logo\">Xel<\/h1>\n\n            <x-button id=\"hide-sidebar-button\" skin=\"textured\">\n              <x-icon name=\"chevron-left\"><\/x-icon>\n            <\/x-button>\n          <\/header>\n\n          <hr/>\n\n          <nav id=\"nav\">\n            <section>\n              <a href=\"/\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"info\"><\/x-icon>\n                  <x-label>About<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/setup\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"build\"><\/x-icon>\n                  <x-label>Setup<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/faq\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"question-answer\"><\/x-icon>\n                  <x-label>FAQ<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <a href=\"https://github.com/jarek-foksa/xel\" target=\"_blank\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"code\"><\/x-icon>\n                  <x-label>Source Code<\/x-label>\n                  <x-icon class=\"external-link-icon\" name=\"exit-to-app\"><\/x-icon>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"https://github.com/jarek-foksa/xel/issues\" target=\"_blank\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"bug-report\"><\/x-icon>\n                  <x-label>Bugs<\/x-label>\n                  <x-icon class=\"external-link-icon\" name=\"exit-to-app\"><\/x-icon>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"https://github.com/jarek-foksa/xel/commits\" target=\"_blank\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"event\"><\/x-icon>\n                  <x-label>Changelog<\/x-label>\n                  <x-icon class=\"external-link-icon\" name=\"exit-to-app\"><\/x-icon>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section id=\"theme-section\">\n              <div id=\"theme-subsection\">\n                <h3 id=\"theme-heading\">Theme<\/h3>\n\n                <x-select id=\"theme-select\">\n                  <x-menu>\n                    <x-menuitem value=\"galaxy\">\n                      <x-label>Galaxy<\/x-label>\n                    <\/x-menuitem>\n\n                    <x-menuitem value=\"macos\">\n                      <x-label>MacOS<\/x-label>\n                    <\/x-menuitem>\n\n                    <x-menuitem value=\"material\" selected=\"true\">\n                      <x-label>Material<\/x-label>\n                    <\/x-menuitem>\n\n                    <x-menuitem value=\"vanilla\">\n                      <x-label>Vanilla<\/x-label>\n                    <\/x-menuitem>\n                  <\/x-menu>\n                <\/x-select>\n              <\/div>\n\n              <div id=\"accent-color-subsection\">\n                <h3>Accent color<\/h3>\n\n                <x-select id=\"accent-color-select\">\n                  <x-menu id=\"accent-color-menu\"><\/x-menu>\n                <\/x-select>\n              <\/div>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Primitives<\/h3>\n\n              <a href=\"/elements/x-box\">\n                <x-button skin=\"nav\">\n                  <x-label>x-box<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-card\">\n                <x-button skin=\"nav\">\n                  <x-label>x-card<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-icon\">\n                <x-button skin=\"nav\">\n                  <x-label>x-icon<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-label\">\n                <x-button skin=\"nav\">\n                  <x-label>x-label<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-shortcut\">\n                <x-button skin=\"nav\">\n                  <x-label>x-shortcut<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-stepper\">\n                <x-button skin=\"nav\">\n                  <x-label>x-stepper<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-swatch\">\n                <x-button skin=\"nav\">\n                  <x-label>x-swatch<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Buttons<\/h3>\n\n              <a href=\"/elements/x-button\">\n                <x-button skin=\"nav\">\n                  <x-label>x-button<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-buttons\">\n                <x-button skin=\"nav\">\n                  <x-label>x-buttons<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Tabs<\/h3>\n\n              <a href=\"/elements/x-tabs\">\n                <x-button skin=\"nav\">\n                  <x-label>x-tabs<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-doctabs\">\n                <x-button skin=\"nav\">\n                  <x-label>x-doctabs<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Menus<\/h3>\n\n              <a href=\"/elements/x-menu\">\n                <x-button skin=\"nav\">\n                  <x-label>x-menu<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-menuitem\">\n                <x-button skin=\"nav\">\n                  <x-label>x-menuitem<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-menubar\">\n                <x-button skin=\"nav\">\n                  <x-label>x-menubar<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-contextmenu\">\n                <x-button skin=\"nav\">\n                  <x-label>x-contextmenu<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Modals<\/h3>\n\n              <a href=\"/elements/x-dialog\">\n                <x-button skin=\"nav\">\n                  <x-label>x-dialog<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-drawer\">\n                <x-button skin=\"nav\">\n                  <x-label>x-drawer<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-popover\">\n                <x-button skin=\"nav\">\n                  <x-label>x-popover<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Forms<\/h3>\n\n              <a href=\"/elements/x-checkbox\">\n                <x-button skin=\"nav\">\n                  <x-label>x-checkbox<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-radio\">\n                <x-button skin=\"nav\">\n                  <x-label>x-radio<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-switch\">\n                <x-button skin=\"nav\">\n                  <x-label>x-switch<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-select\">\n                <x-button skin=\"nav\">\n                  <x-label>x-select<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-colorselect\">\n                <x-button skin=\"nav\">\n                  <x-label>x-colorselect<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-input\">\n                <x-button skin=\"nav\">\n                  <x-label>x-input<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-numberinput\">\n                <x-button skin=\"nav\">\n                  <x-label>x-numberinput<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-taginput\">\n                <x-button skin=\"nav\">\n                  <x-label>x-taginput<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-textarea\">\n                <x-button skin=\"nav\">\n                  <x-label>x-textarea<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-slider\">\n                <x-button skin=\"nav\">\n                  <x-label>x-slider<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Progress<\/h3>\n\n              <a href=\"/elements/x-progressbar\">\n                <x-button skin=\"nav\">\n                  <x-label>x-progressbar<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-throbber\">\n                <x-button skin=\"nav\">\n                  <x-label>x-throbber<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n          <\/nav>\n        <\/sidebar>\n\n        <div id=\"views\"><\/div>\n      <\/main>\n    <\/template>\n  "], ["\n    <template>\n      <link rel=\"stylesheet\" href=\"", "\">\n      <style>:host{width:100%;height:100%;display:block}#main,#sidebar{position:relative}#main{display:flex;flex-flow:row;height:100%;width:100%}#sidebar{width:270px;overflow:auto;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);z-index:100}#sidebar #header{padding:20px 0}#sidebar #header+hr{margin-top:-1px}#sidebar h1{margin:0 22px 0 104px;line-height:1}#sidebar #nav{margin-bottom:20px;width:100%}#sidebar #nav .external-link-icon{margin:0;width:20px;height:20px}#sidebar #nav x-button{width:calc(100% + 60px);margin-left:-30px;padding:8px 30px;--ripple-background: white}#sidebar #nav x-button x-label{font-size:15px}#hide-sidebar-button,#show-sidebar-button{position:absolute;top:18px;left:11px;padding:0;width:32px;height:32px;min-height:32px}#show-sidebar-button{top:20px;z-index:10}#theme-section{padding:10px 0}#theme-section #theme-heading,#views #faq-view h4{margin-top:0}#theme-section x-select{width:100%}#theme-section #theme-select{margin-bottom:14px}#views,#views>.view{display:block;width:100%;height:100%}#views{min-width:20px;min-height:20px;position:relative;flex:1}#views>.view{box-sizing:border-box;overflow:auto}#views>.view:not([selected]){display:none!important}#views #about-view,#views>.view>article{padding:0 70px;margin:0 auto;max-width:780px;box-sizing:border-box}#views section{margin-bottom:35px}#views section[data-last-visible]+hr,#views section[hidden]+hr{display:none}#views section h3,#views section h4,#views section h5{position:relative}#views #about-view{color:#fff;width:100%;height:100vh;display:flex;align-items:center;padding:0 100px;margin:0;max-width:none}#about-view h1{font-size:170px;font-weight:700;margin:0 0 50px;padding:0;line-height:1}@media screen and (max-width:880px){#about-view h1{font-size:120px}}#about-view h2{font-size:27px;font-weight:400;line-height:1.05;color:rgba(255,255,255,.8);margin:0 0 20px;text-transform:none}#about-view h2 em{color:rgba(255,255,255,.95);font-style:normal;font-weight:700}#views #setup-view h3{margin-bottom:0}#views #setup-view h3 x-icon{width:40px;height:auto;display:inline-block;vertical-align:middle}#views #setup-view pre{display:block;white-space:pre;overflow:auto}#views #setup-view dd{margin:0 0 18px}#views #setup-view dd:last-of-type{margin:0}<\/style>\n\n      <main id=\"main\">\n        <x-button id=\"show-sidebar-button\" icon=\"menu\" skin=\"textured\">\n          <x-icon name=\"menu\"><\/x-icon>\n        <\/x-button>\n\n        <sidebar id=\"sidebar\">\n          <header id=\"header\">\n            <h1 id=\"logo\">Xel<\/h1>\n\n            <x-button id=\"hide-sidebar-button\" skin=\"textured\">\n              <x-icon name=\"chevron-left\"><\/x-icon>\n            <\/x-button>\n          <\/header>\n\n          <hr/>\n\n          <nav id=\"nav\">\n            <section>\n              <a href=\"/\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"info\"><\/x-icon>\n                  <x-label>About<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/setup\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"build\"><\/x-icon>\n                  <x-label>Setup<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/faq\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"question-answer\"><\/x-icon>\n                  <x-label>FAQ<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <a href=\"https://github.com/jarek-foksa/xel\" target=\"_blank\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"code\"><\/x-icon>\n                  <x-label>Source Code<\/x-label>\n                  <x-icon class=\"external-link-icon\" name=\"exit-to-app\"><\/x-icon>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"https://github.com/jarek-foksa/xel/issues\" target=\"_blank\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"bug-report\"><\/x-icon>\n                  <x-label>Bugs<\/x-label>\n                  <x-icon class=\"external-link-icon\" name=\"exit-to-app\"><\/x-icon>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"https://github.com/jarek-foksa/xel/commits\" target=\"_blank\">\n                <x-button skin=\"nav\">\n                  <x-icon name=\"event\"><\/x-icon>\n                  <x-label>Changelog<\/x-label>\n                  <x-icon class=\"external-link-icon\" name=\"exit-to-app\"><\/x-icon>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section id=\"theme-section\">\n              <div id=\"theme-subsection\">\n                <h3 id=\"theme-heading\">Theme<\/h3>\n\n                <x-select id=\"theme-select\">\n                  <x-menu>\n                    <x-menuitem value=\"galaxy\">\n                      <x-label>Galaxy<\/x-label>\n                    <\/x-menuitem>\n\n                    <x-menuitem value=\"macos\">\n                      <x-label>MacOS<\/x-label>\n                    <\/x-menuitem>\n\n                    <x-menuitem value=\"material\" selected=\"true\">\n                      <x-label>Material<\/x-label>\n                    <\/x-menuitem>\n\n                    <x-menuitem value=\"vanilla\">\n                      <x-label>Vanilla<\/x-label>\n                    <\/x-menuitem>\n                  <\/x-menu>\n                <\/x-select>\n              <\/div>\n\n              <div id=\"accent-color-subsection\">\n                <h3>Accent color<\/h3>\n\n                <x-select id=\"accent-color-select\">\n                  <x-menu id=\"accent-color-menu\"><\/x-menu>\n                <\/x-select>\n              <\/div>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Primitives<\/h3>\n\n              <a href=\"/elements/x-box\">\n                <x-button skin=\"nav\">\n                  <x-label>x-box<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-card\">\n                <x-button skin=\"nav\">\n                  <x-label>x-card<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-icon\">\n                <x-button skin=\"nav\">\n                  <x-label>x-icon<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-label\">\n                <x-button skin=\"nav\">\n                  <x-label>x-label<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-shortcut\">\n                <x-button skin=\"nav\">\n                  <x-label>x-shortcut<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-stepper\">\n                <x-button skin=\"nav\">\n                  <x-label>x-stepper<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-swatch\">\n                <x-button skin=\"nav\">\n                  <x-label>x-swatch<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Buttons<\/h3>\n\n              <a href=\"/elements/x-button\">\n                <x-button skin=\"nav\">\n                  <x-label>x-button<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-buttons\">\n                <x-button skin=\"nav\">\n                  <x-label>x-buttons<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Tabs<\/h3>\n\n              <a href=\"/elements/x-tabs\">\n                <x-button skin=\"nav\">\n                  <x-label>x-tabs<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-doctabs\">\n                <x-button skin=\"nav\">\n                  <x-label>x-doctabs<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Menus<\/h3>\n\n              <a href=\"/elements/x-menu\">\n                <x-button skin=\"nav\">\n                  <x-label>x-menu<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-menuitem\">\n                <x-button skin=\"nav\">\n                  <x-label>x-menuitem<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-menubar\">\n                <x-button skin=\"nav\">\n                  <x-label>x-menubar<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-contextmenu\">\n                <x-button skin=\"nav\">\n                  <x-label>x-contextmenu<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Modals<\/h3>\n\n              <a href=\"/elements/x-dialog\">\n                <x-button skin=\"nav\">\n                  <x-label>x-dialog<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-drawer\">\n                <x-button skin=\"nav\">\n                  <x-label>x-drawer<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-popover\">\n                <x-button skin=\"nav\">\n                  <x-label>x-popover<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Forms<\/h3>\n\n              <a href=\"/elements/x-checkbox\">\n                <x-button skin=\"nav\">\n                  <x-label>x-checkbox<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-radio\">\n                <x-button skin=\"nav\">\n                  <x-label>x-radio<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-switch\">\n                <x-button skin=\"nav\">\n                  <x-label>x-switch<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-select\">\n                <x-button skin=\"nav\">\n                  <x-label>x-select<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-colorselect\">\n                <x-button skin=\"nav\">\n                  <x-label>x-colorselect<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-input\">\n                <x-button skin=\"nav\">\n                  <x-label>x-input<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-numberinput\">\n                <x-button skin=\"nav\">\n                  <x-label>x-numberinput<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-taginput\">\n                <x-button skin=\"nav\">\n                  <x-label>x-taginput<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-textarea\">\n                <x-button skin=\"nav\">\n                  <x-label>x-textarea<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-slider\">\n                <x-button skin=\"nav\">\n                  <x-label>x-slider<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n\n            <hr/>\n\n            <section>\n              <h3>Progress<\/h3>\n\n              <a href=\"/elements/x-progressbar\">\n                <x-button skin=\"nav\">\n                  <x-label>x-progressbar<\/x-label>\n                <\/x-button>\n              <\/a>\n\n              <a href=\"/elements/x-throbber\">\n                <x-button skin=\"nav\">\n                  <x-label>x-throbber<\/x-label>\n                <\/x-button>\n              <\/a>\n            <\/section>\n          <\/nav>\n        <\/sidebar>\n\n        <div id=\"views\"><\/div>\n      <\/main>\n    <\/template>\n  "]),
        _templateObject3 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;width:100%;box-sizing:border-box;background:#fff;padding:14px;--selection-background: #B2D7FD}::selection{background:var(--selection-background)}#code{display:block;white-space:pre-wrap;overflow-x:auto;font-size:13px;line-height:18px;outline:none;background:0 0;padding:0}<\/style>\n      <link id=\"prism-theme\" rel=\"stylesheet\">\n      <code id=\"code\" class=\"language-html\"><\/code>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;width:100%;box-sizing:border-box;background:#fff;padding:14px;--selection-background: #B2D7FD}::selection{background:var(--selection-background)}#code{display:block;white-space:pre-wrap;overflow-x:auto;font-size:13px;line-height:18px;outline:none;background:0 0;padding:0}<\/style>\n      <link id=\"prism-theme\" rel=\"stylesheet\">\n      <code id=\"code\" class=\"language-html\"><\/code>\n    <\/template>\n  "]),
        _templateObject4 = _taggedTemplateLiteral(["\n    <template>\n      <link rel=\"stylesheet\" href=\"", "\">\n      <style>:host{display:block}#code-view{margin-top:25px}:host([compact]) #code-view{max-height:350px;overflow:scroll}<\/style>\n\n      <main>\n        <div id=\"live-view\"><\/div>\n        <xel-codeview id=\"code-view\"><\/xel-codeview>\n      <\/main>\n    <\/template>\n  "], ["\n    <template>\n      <link rel=\"stylesheet\" href=\"", "\">\n      <style>:host{display:block}#code-view{margin-top:25px}:host([compact]) #code-view{max-height:350px;overflow:scroll}<\/style>\n\n      <main>\n        <div id=\"live-view\"><\/div>\n        <xel-codeview id=\"code-view\"><\/xel-codeview>\n      <\/main>\n    <\/template>\n  "]),
        _templateObject5 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;color:currentColor;display:flex;align-items:center;justify-content:center;width:24px;height:24px}:host([hidden]){display:none}#svg{width:100%;height:100%;fill:currentColor;stroke:none;pointer-events:none}<\/style>\n      <svg id=\"svg\" preserveAspectRatio=\"none\" viewBox=\"0 0 100 100\" width=\"0px\" height=\"0px\"><\/svg>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;color:currentColor;display:flex;align-items:center;justify-content:center;width:24px;height:24px}:host([hidden]){display:none}#svg{width:100%;height:100%;fill:currentColor;stroke:none;pointer-events:none}<\/style>\n      <svg id=\"svg\" preserveAspectRatio=\"none\" viewBox=\"0 0 100 100\" width=\"0px\" height=\"0px\"><\/svg>\n    <\/template>\n  "]),
        _templateObject6 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{position:fixed;display:none;top:0;left:0;min-height:30px;z-index:1001;box-sizing:border-box;background:#fff;-webkit-app-region:no-drag;--orientation: vertical;--align: bottom;--arrow-size: 20px;--open-transition: 900 transform cubic-bezier(0.4, 0, 0.2, 1);--close-transition: 200 opacity cubic-bezier(0.4, 0, 0.2, 1)}:host(:focus){outline:none}:host([animating]),:host([opened]){display:flex}#arrow{position:fixed;box-sizing:border-box;content:\"\"}#arrow[data-align=bottom],#arrow[data-align=top]{width:var(--arrow-size);height:calc(var(--arrow-size)*.6);transform:translate(-50%,0)}#arrow[data-align=left],#arrow[data-align=right]{width:calc(var(--arrow-size)*.6);height:var(--arrow-size);transform:translate(0,-50%)}#arrow path{fill:pink;vector-effect:non-scaling-stroke;stroke-width:1}<\/style>\n\n      <svg id=\"arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path id=\"arrow-path\"><\/path>\n      <\/svg>\n\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{position:fixed;display:none;top:0;left:0;min-height:30px;z-index:1001;box-sizing:border-box;background:#fff;-webkit-app-region:no-drag;--orientation: vertical;--align: bottom;--arrow-size: 20px;--open-transition: 900 transform cubic-bezier(0.4, 0, 0.2, 1);--close-transition: 200 opacity cubic-bezier(0.4, 0, 0.2, 1)}:host(:focus){outline:none}:host([animating]),:host([opened]){display:flex}#arrow{position:fixed;box-sizing:border-box;content:\"\"}#arrow[data-align=bottom],#arrow[data-align=top]{width:var(--arrow-size);height:calc(var(--arrow-size)*.6);transform:translate(-50%,0)}#arrow[data-align=left],#arrow[data-align=right]{width:calc(var(--arrow-size)*.6);height:var(--arrow-size);transform:translate(0,-50%)}#arrow path{fill:pink;vector-effect:non-scaling-stroke;stroke-width:1}<\/style>\n\n      <svg id=\"arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path id=\"arrow-path\"><\/path>\n      <\/svg>\n\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject7 = _taggedTemplateLiteral(["\n    <template>\n      <style>\n        :host {\n          display: block;\n          position: fixed;\n          z-index: 1000;\n          top: 0;\n          left: 0;\n          width: 100vw;\n          height: 100vh;\n          touch-action: none;\n          will-change: opacity;\n          cursor: default;\n          background: rgba(0, 0, 0, 0.5);\n        }\n        :host([hidden]) {\n          display: none;\n        }\n      <\/style>\n    <\/template>\n  "], ["\n    <template>\n      <style>\n        :host {\n          display: block;\n          position: fixed;\n          z-index: 1000;\n          top: 0;\n          left: 0;\n          width: 100vw;\n          height: 100vh;\n          touch-action: none;\n          will-change: opacity;\n          cursor: default;\n          background: rgba(0, 0, 0, 0.5);\n        }\n        :host([hidden]) {\n          display: none;\n        }\n      <\/style>\n    <\/template>\n  "]),
        _templateObject8 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:flex;align-items:center;justify-content:center;width:fit-content;height:fit-content;box-sizing:border-box;opacity:1;position:relative;--trigger-effect: none;--ripple-background: currentColor;--ripple-opacity: 0.2;--arrow-width: 8px;--arrow-height: 8px;--arrow-margin: 0 0 0 4px;--arrow-d: path(\"M 11.699 19.846 L 49.822 57.886 L 87.945 19.846 L 99.657 31.557 L 49.822 81.392 L -0.013 31.557 Z\")}:host(:focus){outline:none}:host([mixed]){opacity:.75}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}#arrow{width:var(--arrow-width);height:var(--arrow-height);min-width:var(--arrow-width);margin:var(--arrow-margin);color:currentColor;d:var(--arrow-d)}#arrow path{fill:currentColor;d:inherit}#arrow[hidden]{display:none}#ripples,#ripples .ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border-radius:inherit}#ripples .ripple{width:200px;height:200px;background:var(--ripple-background);opacity:var(--ripple-opacity);border-radius:999px;transform:none;transition:all 800ms cubic-bezier(.4,0,.2,1);will-change:opacity,transform}<\/style>\n      <div id=\"ripples\"><\/div>\n      <slot><\/slot>\n\n      <svg id=\"arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path id=\"arrow-path\"><\/path>\n      <\/svg>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:flex;align-items:center;justify-content:center;width:fit-content;height:fit-content;box-sizing:border-box;opacity:1;position:relative;--trigger-effect: none;--ripple-background: currentColor;--ripple-opacity: 0.2;--arrow-width: 8px;--arrow-height: 8px;--arrow-margin: 0 0 0 4px;--arrow-d: path(\"M 11.699 19.846 L 49.822 57.886 L 87.945 19.846 L 99.657 31.557 L 49.822 81.392 L -0.013 31.557 Z\")}:host(:focus){outline:none}:host([mixed]){opacity:.75}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}#arrow{width:var(--arrow-width);height:var(--arrow-height);min-width:var(--arrow-width);margin:var(--arrow-margin);color:currentColor;d:var(--arrow-d)}#arrow path{fill:currentColor;d:inherit}#arrow[hidden]{display:none}#ripples,#ripples .ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border-radius:inherit}#ripples .ripple{width:200px;height:200px;background:var(--ripple-background);opacity:var(--ripple-opacity);border-radius:999px;transform:none;transition:all 800ms cubic-bezier(.4,0,.2,1);will-change:opacity,transform}<\/style>\n      <div id=\"ripples\"><\/div>\n      <slot><\/slot>\n\n      <svg id=\"arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path id=\"arrow-path\"><\/path>\n      <\/svg>\n    <\/template>\n  "]),
        _templateObject9 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:flex;flex-flow:row;align-items:center;justify-content:flex-start;box-sizing:border-box;width:fit-content}:host([hidden]){display:none}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:flex;flex-flow:row;align-items:center;justify-content:flex-start;box-sizing:border-box;width:fit-content}:host([hidden]){display:none}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject10 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;width:100%;min-width:20px;min-height:50px;box-sizing:border-box;margin:30px 0}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;width:100%;min-width:20px;min-height:50px;box-sizing:border-box;margin:30px 0}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject11 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;position:relative;margin:0 8px 0 0;width:24px;height:24px;box-sizing:border-box;border:2px solid currentColor;--checkmark-width: 100%;--checkmark-height: 100%;--checkmark-opacity: 0;--checkmark-d: path(\"M 0.01 0 L 100 0 L 100 100 L 0 100 L 0.01 0 Z M 95.364 22.552 L 86.211 12.636 L 36.933 65.648 L 13.621 40.644 L 4.467 50.49 L 36.933 85.416 L 95.364 22.552 Z\");--ripple-type: none;--ripple-background: currentColor;--ripple-opacity: 0.15}:host([mixed]),:host([toggled]){--checkmark-opacity: 1}:host([mixed]){--checkmark-d: path(\"M 0 0 L 100 0 L 100 100 L 0 100 Z M 87.033 42.592 L 12.967 42.592 L 12.967 57.408 L 87.033 57.408 Z\")}:host([disabled]){opacity:.4;pointer-events:none}:host([hidden]){display:none}:host(:focus){outline:none}#checkmark{position:absolute;top:0;left:0;width:var(--checkmark-width);height:var(--checkmark-height);opacity:var(--checkmark-opacity);d:var(--checkmark-d);transition-property:opacity;transition-timing-function:inherit;transition-duration:inherit}#checkmark path{fill:currentColor;d:inherit}#ripples,#ripples .ripple{position:absolute;top:0;left:0;width:100%;height:100%}#ripples{pointer-events:none}#ripples .ripple{background:var(--ripple-background);opacity:var(--ripple-opacity);z-index:-1;will-change:opacity,transform;border-radius:999px;transform:scale(2.6)}<\/style>\n      <div id=\"ripples\"><\/div>\n\n      <svg id=\"checkmark\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path><\/path>\n      <\/svg>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;position:relative;margin:0 8px 0 0;width:24px;height:24px;box-sizing:border-box;border:2px solid currentColor;--checkmark-width: 100%;--checkmark-height: 100%;--checkmark-opacity: 0;--checkmark-d: path(\"M 0.01 0 L 100 0 L 100 100 L 0 100 L 0.01 0 Z M 95.364 22.552 L 86.211 12.636 L 36.933 65.648 L 13.621 40.644 L 4.467 50.49 L 36.933 85.416 L 95.364 22.552 Z\");--ripple-type: none;--ripple-background: currentColor;--ripple-opacity: 0.15}:host([mixed]),:host([toggled]){--checkmark-opacity: 1}:host([mixed]){--checkmark-d: path(\"M 0 0 L 100 0 L 100 100 L 0 100 Z M 87.033 42.592 L 12.967 42.592 L 12.967 57.408 L 87.033 57.408 Z\")}:host([disabled]){opacity:.4;pointer-events:none}:host([hidden]){display:none}:host(:focus){outline:none}#checkmark{position:absolute;top:0;left:0;width:var(--checkmark-width);height:var(--checkmark-height);opacity:var(--checkmark-opacity);d:var(--checkmark-d);transition-property:opacity;transition-timing-function:inherit;transition-duration:inherit}#checkmark path{fill:currentColor;d:inherit}#ripples,#ripples .ripple{position:absolute;top:0;left:0;width:100%;height:100%}#ripples{pointer-events:none}#ripples .ripple{background:var(--ripple-background);opacity:var(--ripple-opacity);z-index:-1;will-change:opacity,transform;border-radius:999px;transform:scale(2.6)}<\/style>\n      <div id=\"ripples\"><\/div>\n\n      <svg id=\"checkmark\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path><\/path>\n      <\/svg>\n    <\/template>\n  "]),
        _templateObject12 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:fixed;width:0;height:0;z-index:1001}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:fixed;width:0;height:0;z-index:1001}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject13 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{position:fixed;left:50%;top:0;width:600px;height:auto;min-height:100px;padding:0;box-sizing:border-box;z-index:999999;display:block;outline:none;--backdrop-color: rgba(0, 0, 0, 0.5);--origin: center}:host([offscreen]){opacity:0;pointer-events:none;top:-10000}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{position:fixed;left:50%;top:0;width:600px;height:auto;min-height:100px;padding:0;box-sizing:border-box;z-index:999999;display:block;outline:none;--backdrop-color: rgba(0, 0, 0, 0.5);--origin: center}:host([offscreen]){opacity:0;pointer-events:none;top:-10000}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject14 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:flex;align-items:center;position:relative;width:100%;height:100%;max-width:200px;flex:1 0 0;transition-property:max-width,padding,order;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);cursor:default;padding:0 4px 0 16px;user-select:none;touch-action:pan-y;box-sizing:border-box;overflow:hidden;contain:strict;will-change:max-width;z-index:0;-webkit-app-region:no-drag;--ripple-type: none;--ripple-background: currentColor;--ripple-opacity: 0.2;--selection-indicator-height: 3px;--selection-indicator-color: var(--accent-color);--close-button-position: static;--close-button-left: 0;--close-button-right: initial;--close-button-width: 18px;--close-button-height: 18px;--close-button-margin: 0 0 0 auto;--close-button-opacity: 0.8;--close-button-path-d: path(\"M 74.355 30.551 L 69.449 25.645 L 50 45.094 L 30.551 25.645 L 25.645 30.551 L 45.094 50 L 25.645 69.449 L 30.551 74.355 L 50 54.906 L 69.449 74.355 L 74.355 69.449 L 54.906 50 Z\")}:host([edited]){--close-button-path-d: path(\"M 68.107 50 C 68.107 60 60 68.107 50 68.107 C 40 68.107 31.893 60 31.893 50 C 31.893 40 40 31.893 50 31.893 C 60 31.893 68.107 40 68.107 50 Z\")}:host(:focus){outline:none}:host([closing]){pointer-events:none}:host([selected]){z-index:1}:host([disabled]){pointer-events:none;opacity:.5}#close-button{display:flex;align-items:center;justify-content:center;position:var(--close-button-position);left:var(--close-button-left);right:var(--close-button-right);width:var(--close-button-width);height:var(--close-button-height);margin:var(--close-button-margin);opacity:var(--close-button-opacity);padding:1px}#close-button:hover{background:rgba(0,0,0,.08);opacity:1}#close-button-path{pointer-events:none;d:var(--close-button-path-d);fill:currentColor}#ripples{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:-1;contain:strict}#ripples .ripple,#selection-indicator{position:absolute;left:0;pointer-events:none}#ripples .ripple{top:0;height:200px;background:var(--ripple-background);opacity:var(--ripple-opacity);border-radius:999px;will-change:opacity,transform;width:200px}#selection-indicator{display:none;bottom:0;width:100%;height:var(--selection-indicator-height);background:var(--selection-indicator-color)}:host([selected]) #selection-indicator{display:block}:host-context(x-doctabs[animatingindicator]) #selection-indicator{display:none}<\/style>\n\n      <div id=\"ripples\"><\/div>\n      <div id=\"selection-indicator\"><\/div>\n\n      <slot><\/slot>\n\n      <svg id=\"close-button\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path id=\"close-button-path\"><\/path>\n      <\/svg>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:flex;align-items:center;position:relative;width:100%;height:100%;max-width:200px;flex:1 0 0;transition-property:max-width,padding,order;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);cursor:default;padding:0 4px 0 16px;user-select:none;touch-action:pan-y;box-sizing:border-box;overflow:hidden;contain:strict;will-change:max-width;z-index:0;-webkit-app-region:no-drag;--ripple-type: none;--ripple-background: currentColor;--ripple-opacity: 0.2;--selection-indicator-height: 3px;--selection-indicator-color: var(--accent-color);--close-button-position: static;--close-button-left: 0;--close-button-right: initial;--close-button-width: 18px;--close-button-height: 18px;--close-button-margin: 0 0 0 auto;--close-button-opacity: 0.8;--close-button-path-d: path(\"M 74.355 30.551 L 69.449 25.645 L 50 45.094 L 30.551 25.645 L 25.645 30.551 L 45.094 50 L 25.645 69.449 L 30.551 74.355 L 50 54.906 L 69.449 74.355 L 74.355 69.449 L 54.906 50 Z\")}:host([edited]){--close-button-path-d: path(\"M 68.107 50 C 68.107 60 60 68.107 50 68.107 C 40 68.107 31.893 60 31.893 50 C 31.893 40 40 31.893 50 31.893 C 60 31.893 68.107 40 68.107 50 Z\")}:host(:focus){outline:none}:host([closing]){pointer-events:none}:host([selected]){z-index:1}:host([disabled]){pointer-events:none;opacity:.5}#close-button{display:flex;align-items:center;justify-content:center;position:var(--close-button-position);left:var(--close-button-left);right:var(--close-button-right);width:var(--close-button-width);height:var(--close-button-height);margin:var(--close-button-margin);opacity:var(--close-button-opacity);padding:1px}#close-button:hover{background:rgba(0,0,0,.08);opacity:1}#close-button-path{pointer-events:none;d:var(--close-button-path-d);fill:currentColor}#ripples{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:-1;contain:strict}#ripples .ripple,#selection-indicator{position:absolute;left:0;pointer-events:none}#ripples .ripple{top:0;height:200px;background:var(--ripple-background);opacity:var(--ripple-opacity);border-radius:999px;will-change:opacity,transform;width:200px}#selection-indicator{display:none;bottom:0;width:100%;height:var(--selection-indicator-height);background:var(--selection-indicator-color)}:host([selected]) #selection-indicator{display:block}:host-context(x-doctabs[animatingindicator]) #selection-indicator{display:none}<\/style>\n\n      <div id=\"ripples\"><\/div>\n      <div id=\"selection-indicator\"><\/div>\n\n      <slot><\/slot>\n\n      <svg id=\"close-button\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path id=\"close-button-path\"><\/path>\n      <\/svg>\n    <\/template>\n  "]),
        _templateObject15 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:flex;align-items:center;width:100%;position:relative;--open-button-width: 24px;--open-button-height: 24px;--open-button-margin: 0 10px;--open-button-path-d: path(\"M 79 54 L 54 54 L 54 79 L 46 79 L 46 54 L 21 54 L 21 46 L 46 46 L 46 21 L 54 21 L 54 46 L 79 46 L 79 54 Z\")}:host(:focus){outline:none}:host([disabled]){opacity:.5;pointer-events:none}#open-button{display:flex;align-items:center;justify-content:center;width:var(--open-button-width);height:var(--open-button-height);margin:var(--open-button-margin);order:9999;opacity:.7;color:inherit;-webkit-app-region:no-drag}#open-button:hover{opacity:1}#open-button-path{d:var(--open-button-path-d);fill:currentColor}#selection-indicator-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none}#selection-indicator{position:absolute;width:100%;bottom:0;left:0}<\/style>\n\n      <slot><\/slot>\n\n      <div id=\"selection-indicator-container\">\n        <div id=\"selection-indicator\" hidden><\/div>\n      <\/div>\n\n      <svg id=\"open-button\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path id=\"open-button-path\"><\/path>\n      <\/svg>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:flex;align-items:center;width:100%;position:relative;--open-button-width: 24px;--open-button-height: 24px;--open-button-margin: 0 10px;--open-button-path-d: path(\"M 79 54 L 54 54 L 54 79 L 46 79 L 46 54 L 21 54 L 21 46 L 46 46 L 46 21 L 54 21 L 54 46 L 79 46 L 79 54 Z\")}:host(:focus){outline:none}:host([disabled]){opacity:.5;pointer-events:none}#open-button{display:flex;align-items:center;justify-content:center;width:var(--open-button-width);height:var(--open-button-height);margin:var(--open-button-margin);order:9999;opacity:.7;color:inherit;-webkit-app-region:no-drag}#open-button:hover{opacity:1}#open-button-path{d:var(--open-button-path-d);fill:currentColor}#selection-indicator-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none}#selection-indicator{position:absolute;width:100%;bottom:0;left:0}<\/style>\n\n      <slot><\/slot>\n\n      <div id=\"selection-indicator-container\">\n        <div id=\"selection-indicator\" hidden><\/div>\n      <\/div>\n\n      <svg id=\"open-button\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path id=\"open-button-path\"><\/path>\n      <\/svg>\n    <\/template>\n  "]),
        _templateObject16 = _taggedTemplateLiteral(["<x-doctab><x-label>Untitled<\/x-label><\/x-doctab>"], ["<x-doctab><x-label>Untitled<\/x-label><\/x-doctab>"]),
        _templateObject17 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;position:fixed!important;box-sizing:border-box;margin:auto;will-change:transform;z-index:1001;transition-property:transform;transition-duration:.25s;transition-timing-function:cubic-bezier(0,0,.2,1);--backdrop-color: rgba(0, 0, 0, 0)}:host([offscreen]){display:none!important}:host([position=\"left\"]),:host([position=\"right\"]){width:280px;height:100%;top:0;bottom:0;left:0;right:auto}:host([position=\"right\"]){left:auto;right:0}:host([position=\"bottom\"]),:host([position=\"top\"]){width:100%;height:280px;top:0;bottom:auto;left:0;right:0}:host([position=\"bottom\"]){top:auto;bottom:0}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;position:fixed!important;box-sizing:border-box;margin:auto;will-change:transform;z-index:1001;transition-property:transform;transition-duration:.25s;transition-timing-function:cubic-bezier(0,0,.2,1);--backdrop-color: rgba(0, 0, 0, 0)}:host([offscreen]){display:none!important}:host([position=\"left\"]),:host([position=\"right\"]){width:280px;height:100%;top:0;bottom:0;left:0;right:auto}:host([position=\"right\"]){left:auto;right:0}:host([position=\"bottom\"]),:host([position=\"top\"]){width:100%;height:280px;top:0;bottom:auto;left:0;right:0}:host([position=\"bottom\"]){top:auto;bottom:0}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject18 = _taggedTemplateLiteral(["<x-overlay id=\"overlay\"><\/x-overlay>"], ["<x-overlay id=\"overlay\"><\/x-overlay>"]),
        _templateObject19 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-start}:host([vertical]){flex-flow:column;align-items:flex-start;justify-content:center}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-start}:host([vertical]){flex-flow:column;align-items:flex-start;justify-content:center}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject20 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;line-height:1.2;user-select:none;box-sizing:border-box}:host(:hover){cursor:default}:host([disabled]){opacity:.5}:host([hidden]){display:none}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;line-height:1.2;user-select:none;box-sizing:border-box}:host(:hover){cursor:default}:host([disabled]){opacity:.5}:host([hidden]){display:none}<\/style>\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject21 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:none;top:0;left:0;width:fit-content;z-index:1001;box-sizing:border-box;background:#fff;cursor:default;-webkit-app-region:no-drag;--scrollbar-background: rgba(0, 0, 0, 0.2);--scrollbar-width: 6px;--open-transition: 100 transform cubic-bezier(0.4, 0, 0.2, 1);--close-transition: 200 opacity cubic-bezier(0.4, 0, 0.2, 1)}:host([animating]),:host([opened]){display:block}:host(:focus){outline:none}:host-context([debug]):host(:focus){outline:2px solid red}#main{width:100%;height:100%;overflow:auto;display:flex;flex-direction:column}::-webkit-scrollbar{max-width:var(--scrollbar-width);background:0 0}::-webkit-scrollbar-thumb{background-color:var(--scrollbar-background)}::-webkit-scrollbar-corner{display:none}<\/style>\n\n      <main id=\"main\" role=\"presentation\">\n        <slot id=\"slot\"><\/slot>\n      <\/main>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:none;top:0;left:0;width:fit-content;z-index:1001;box-sizing:border-box;background:#fff;cursor:default;-webkit-app-region:no-drag;--scrollbar-background: rgba(0, 0, 0, 0.2);--scrollbar-width: 6px;--open-transition: 100 transform cubic-bezier(0.4, 0, 0.2, 1);--close-transition: 200 opacity cubic-bezier(0.4, 0, 0.2, 1)}:host([animating]),:host([opened]){display:block}:host(:focus){outline:none}:host-context([debug]):host(:focus){outline:2px solid red}#main{width:100%;height:100%;overflow:auto;display:flex;flex-direction:column}::-webkit-scrollbar{max-width:var(--scrollbar-width);background:0 0}::-webkit-scrollbar-thumb{background-color:var(--scrollbar-background)}::-webkit-scrollbar-corner{display:none}<\/style>\n\n      <main id=\"main\" role=\"presentation\">\n        <slot id=\"slot\"><\/slot>\n      <\/main>\n    <\/template>\n  "]),
        _templateObject22 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:flex;align-items:center;width:100%;height:fit-content;overflow:auto;box-sizing:border-box}:host([disabled]){pointer-events:none;opacity:.6}#overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;touch-action:none}#overlay[hidden]{display:none}#overlay path{fill:red;fill-rule:evenodd;opacity:0;pointer-events:all}<\/style>\n\n      <svg id=\"overlay\" hidden>\n        <path id=\"overlay-path\"><\/path>\n      <\/svg>\n\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:flex;align-items:center;width:100%;height:fit-content;overflow:auto;box-sizing:border-box}:host([disabled]){pointer-events:none;opacity:.6}#overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;touch-action:none}#overlay[hidden]{display:none}#overlay path{fill:red;fill-rule:evenodd;opacity:0;pointer-events:all}<\/style>\n\n      <svg id=\"overlay\" hidden>\n        <path id=\"overlay-path\"><\/path>\n      <\/svg>\n\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject23 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:flex;flex-flow:row;align-items:center;position:relative;box-sizing:border-box;cursor:default;user-select:none;contain:layout style;--trigger-effect: ripple;--ripple-background: currentColor;--ripple-opacity: 0.1;--checkmark-d: path(\"M 37.497 65.117 L 21.228 48.849 L 15.689 54.35 L 37.497 76.158 L 84.311 29.343 L 78.811 23.842 Z\");--checkmark-width: 24px;--checkmark-height: 24px;--checkmark-margin: 0 12px 0 0}:host([hidden]){display:none}:host([disabled]){pointer-events:none;opacity:.6}:host(:focus){outline:none}:host-context([debug]):host(:focus){outline:2px solid red}#ripples,#ripples .ripple{position:absolute;top:0;left:0;pointer-events:none}#ripples{z-index:0;contain:strict;overflow:hidden;width:100%;height:100%}#ripples .ripple{width:200px;height:200px;background:var(--ripple-background);opacity:var(--ripple-opacity);border-radius:999px;transform:none;transition:all 800ms cubic-bezier(.4,0,.2,1);will-change:opacity,transform}#checkmark{color:inherit;display:none;transition:transform .2s cubic-bezier(.4,0,.2,1);align-self:center;width:var(--checkmark-width);height:var(--checkmark-height);margin:var(--checkmark-margin);d:var(--checkmark-d)}:host([selected]) #checkmark{display:flex;transform:scale(0);transform-origin:50% 50%}:host([selected=\"true\"]) #checkmark{display:flex;transform:scale(1)}#checkmark path{d:inherit;fill:currentColor}#arrow-icon{display:flex;width:16px;height:16px;transform:scale(1.1);align-self:center;margin-left:15px;margin-right:-8px;color:inherit}#arrow-icon[hidden]{display:none}<\/style>\n\n      <div id=\"ripples\"><\/div>\n\n      <svg id=\"checkmark\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path><\/path>\n      <\/svg>\n\n      <slot><\/slot>\n      <x-icon id=\"arrow-icon\" name=\"play-arrow\" hidden><\/x-icon>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:flex;flex-flow:row;align-items:center;position:relative;box-sizing:border-box;cursor:default;user-select:none;contain:layout style;--trigger-effect: ripple;--ripple-background: currentColor;--ripple-opacity: 0.1;--checkmark-d: path(\"M 37.497 65.117 L 21.228 48.849 L 15.689 54.35 L 37.497 76.158 L 84.311 29.343 L 78.811 23.842 Z\");--checkmark-width: 24px;--checkmark-height: 24px;--checkmark-margin: 0 12px 0 0}:host([hidden]){display:none}:host([disabled]){pointer-events:none;opacity:.6}:host(:focus){outline:none}:host-context([debug]):host(:focus){outline:2px solid red}#ripples,#ripples .ripple{position:absolute;top:0;left:0;pointer-events:none}#ripples{z-index:0;contain:strict;overflow:hidden;width:100%;height:100%}#ripples .ripple{width:200px;height:200px;background:var(--ripple-background);opacity:var(--ripple-opacity);border-radius:999px;transform:none;transition:all 800ms cubic-bezier(.4,0,.2,1);will-change:opacity,transform}#checkmark{color:inherit;display:none;transition:transform .2s cubic-bezier(.4,0,.2,1);align-self:center;width:var(--checkmark-width);height:var(--checkmark-height);margin:var(--checkmark-margin);d:var(--checkmark-d)}:host([selected]) #checkmark{display:flex;transform:scale(0);transform-origin:50% 50%}:host([selected=\"true\"]) #checkmark{display:flex;transform:scale(1)}#checkmark path{d:inherit;fill:currentColor}#arrow-icon{display:flex;width:16px;height:16px;transform:scale(1.1);align-self:center;margin-left:8px;color:inherit}#arrow-icon[hidden]{display:none}<\/style>\n\n      <div id=\"ripples\"><\/div>\n\n      <svg id=\"checkmark\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n        <path><\/path>\n      <\/svg>\n\n      <slot><\/slot>\n      <x-icon id=\"arrow-icon\" name=\"play-arrow\" hidden><\/x-icon>\n    <\/template>\n  "]),
        _templateObject24 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;box-sizing:border-box;height:4px;width:100%;position:relative;contain:strict;overflow:hidden;background:#acece6;cursor:default;--bar-background: #3B99FB;--bar-box-shadow: 0px 0px 0px 1px #3385DB}#indeterminate-bars{width:100%;height:100%}#determinate-bar{width:0%;box-shadow:var(--bar-box-shadow);transition:width .4s ease-in-out}#determinate-bar,#primary-indeterminate-bar,#secondary-indeterminate-bar{position:absolute;top:0;left:0;bottom:0;height:100%;background:var(--bar-background);will-change:left,right}<\/style>\n\n      <div id=\"determinate-bar\"><\/div>\n\n      <div id=\"indeterminate-bars\">\n        <div id=\"primary-indeterminate-bar\"><\/div>\n        <div id=\"secondary-indeterminate-bar\"><\/div>\n      <\/div>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;box-sizing:border-box;height:4px;width:100%;position:relative;contain:strict;overflow:hidden;background:#acece6;cursor:default;--bar-background: #3B99FB;--bar-box-shadow: 0px 0px 0px 1px #3385DB}#indeterminate-bars{width:100%;height:100%}#determinate-bar{width:0%;box-shadow:var(--bar-box-shadow);transition:width .4s ease-in-out}#determinate-bar,#primary-indeterminate-bar,#secondary-indeterminate-bar{position:absolute;top:0;left:0;bottom:0;height:100%;background:var(--bar-background);will-change:left,right}<\/style>\n\n      <div id=\"determinate-bar\"><\/div>\n\n      <div id=\"indeterminate-bars\">\n        <div id=\"primary-indeterminate-bar\"><\/div>\n        <div id=\"secondary-indeterminate-bar\"><\/div>\n      <\/div>\n    <\/template>\n  "]),
        _templateObject25 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;width:30px;height:30px;box-sizing:border-box}:host([type=\"ring\"]){color:#4285f4}:host([type=\"spin\"]){color:#404040}#main,svg{width:100%;height:100%}svg{color:inherit}<\/style>\n      <main id=\"main\"><\/main>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;width:30px;height:30px;box-sizing:border-box}:host([type=\"ring\"]){color:#4285f4}:host([type=\"spin\"]){color:#404040}#main,svg{width:100%;height:100%}svg{color:inherit}<\/style>\n      <main id=\"main\"><\/main>\n    <\/template>\n  "]),
        _templateObject26 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;position:relative;border:3px solid #000;width:20px;height:20px;border-radius:99px;--dot-color: black;--dot-transform: scale(0);--dot-box-shadow: none}:host([toggled]){--dot-transform: scale(0.6)}:host(:focus){outline:none}:host([disabled]){opacity:.4;pointer-events:none}:host([hidden]){display:none}#dot,#main{width:100%;height:100%;border-radius:99px}#main{display:flex;align-items:center;justify-content:center}#dot{background:var(--dot-color);box-shadow:var(--dot-box-shadow);transform:var(--dot-transform);transition:all .15s ease-in-out}:host([mixed][toggled]) #dot{height:33%;border-radius:0}<\/style>\n\n      <main id=\"main\">\n        <div id=\"dot\"><\/div>\n      <\/main>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;position:relative;border:3px solid #000;width:20px;height:20px;border-radius:99px;--dot-color: black;--dot-transform: scale(0);--dot-box-shadow: none}:host([toggled]){--dot-transform: scale(0.6)}:host(:focus){outline:none}:host([disabled]){opacity:.4;pointer-events:none}:host([hidden]){display:none}#dot,#main{width:100%;height:100%;border-radius:99px}#main{display:flex;align-items:center;justify-content:center}#dot{background:var(--dot-color);box-shadow:var(--dot-box-shadow);transform:var(--dot-transform);transition:all .15s ease-in-out}:host([mixed][toggled]) #dot{height:33%;border-radius:0}<\/style>\n\n      <main id=\"main\">\n        <div id=\"dot\"><\/div>\n      <\/main>\n    <\/template>\n  "]),
        _templateObject27 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;width:fit-content;height:fit-content;max-width:100%;box-sizing:border-box;outline:none;font-size:15px;user-select:none;--arrow-width: 13px;--arrow-height: 13px;--arrow-min-width: 13px;--arrow-margin: 0 2px 0 11px;--arrow-color: currentColor;--arrow-d: path(\"M 24.75 41.33 L 50 16.14 L 75.25 41.33 L 83.01 33.68 L 50 0.63 L 17 33.628 Z M 17 66.372 L 50 99.372 L 83.001 66.372 L 75.245 58.617 L 50 83.807 L 24.755 58.617 Z\")}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}:host(:hover){cursor:default}#button{display:flex;flex-flow:row;align-items:center;justify-content:flex-start;flex:1;width:100%;height:100%}#button>x-label{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#button>#arrow-container{margin:0 0 0 auto;z-index:999}#button>#arrow-container #arrow{display:flex;width:var(--arrow-width);height:var(--arrow-height);min-width:var(--arrow-min-width);margin:var(--arrow-margin);color:var(--arrow-color);d:var(--arrow-d)}#button>#arrow-container #arrow path{fill:currentColor;d:inherit}<\/style>\n\n      <div id=\"button\">\n        <div id=\"arrow-container\">\n          <svg id=\"arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n            <path><\/path>\n          <\/svg>\n        <\/div>\n      <\/div>\n\n      <slot><\/slot>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;width:fit-content;height:fit-content;max-width:100%;box-sizing:border-box;outline:none;font-size:15px;user-select:none;--arrow-width: 13px;--arrow-height: 13px;--arrow-min-width: 13px;--arrow-margin: 0 2px 0 11px;--arrow-color: currentColor;--arrow-d: path(\"M 24.75 41.33 L 50 16.14 L 75.25 41.33 L 83.01 33.68 L 50 0.63 L 17 33.628 Z M 17 66.372 L 50 99.372 L 83.001 66.372 L 75.245 58.617 L 50 83.807 L 24.755 58.617 Z\")}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}:host(:hover){cursor:default}#button{display:flex;flex-flow:row;align-items:center;justify-content:flex-start;flex:1;width:100%;height:100%}#button>x-label{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#button>#arrow-container{margin:0 0 0 auto;z-index:999}#button>#arrow-container #arrow{display:flex;width:var(--arrow-width);height:var(--arrow-height);min-width:var(--arrow-min-width);margin:var(--arrow-margin);color:var(--arrow-color);d:var(--arrow-d)}#button>#arrow-container #arrow path{fill:currentColor;d:inherit}<\/style>\n\n      <div id=\"button\">\n        <div id=\"arrow-container\">\n          <svg id=\"arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n            <path><\/path>\n          <\/svg>\n        <\/div>\n      <\/div>\n\n      <slot><\/slot>\n    <\/template>\n  "]),
        _templateObject28 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:inline-block;box-sizing:border-box;font-size:14px;line-height:1}<\/style>\n      <main id=\"main\"><\/main>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:inline-block;box-sizing:border-box;font-size:14px;line-height:1}<\/style>\n      <main id=\"main\"><\/main>\n    <\/template>\n  "]),
        _templateObject29 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;width:22px;height:22px;cursor:default;box-sizing:border-box;overflow:hidden}#main{width:100%;height:100%;position:relative}#selected-icon{display:none;position:absolute;left:calc(50% - 8px);top:calc(50% - 8px);width:16px;height:16px;color:#fff}:host([showicon]:hover) #selected-icon{display:block;opacity:.6}:host([showicon][selected]) #selected-icon{display:block;opacity:1}:host([showicon][value=\"#FFFFFF\"]) #selected-icon{fill:gray}<\/style>\n\n      <main id=\"main\">\n        <x-icon id=\"selected-icon\" name=\"send\"><\/x-icon>\n      <\/main>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;width:22px;height:22px;cursor:default;box-sizing:border-box;overflow:hidden}#main{width:100%;height:100%;position:relative}#selected-icon{display:none;position:absolute;left:calc(50% - 8px);top:calc(50% - 8px);width:16px;height:16px;color:#fff}:host([showicon]:hover) #selected-icon{display:block;opacity:.6}:host([showicon][selected]) #selected-icon{display:block;opacity:1}:host([showicon][value=\"#FFFFFF\"]) #selected-icon{fill:gray}<\/style>\n\n      <main id=\"main\">\n        <x-icon id=\"selected-icon\" name=\"send\"><\/x-icon>\n      <\/main>\n    <\/template>\n  "]),
        _templateObject30 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;width:30px;height:18px;margin:0 8px 0 0;box-sizing:border-box;display:flex;--focus-ring-color: currentColor;--focus-ring-opacity: 0.2;--focus-ring-width: 10px;--focus-ring-transition-duration: 0.15s;--ripple-type: none;--ripple-background: currentColor;--ripple-opacity: 0.2;--thumb-color: currentColor;--thumb-size: 20px;--thumb-border-radius: 999px;--track-height: 65%;--track-color: currentColor;--track-opacity: 0.5;--track-border-radius: 999px}:host([disabled]){opacity:.5;pointer-events:none}:host(:focus){outline:none}#main{width:100%;height:100%;position:relative}#track{width:100%;height:var(--track-height);background:var(--track-color);opacity:var(--track-opacity);border-radius:var(--track-border-radius)}#thumb{position:absolute;left:0;width:var(--thumb-size);height:var(--thumb-size);background:var(--thumb-color);border-radius:var(--thumb-border-radius);transition:left .2s cubic-bezier(.4,0,.2,1)}:host([toggled]) #thumb{left:calc(100% - var(--thumb-size))}:host([mixed]) #thumb{left:calc(50% - var(--thumb-size)/2)}#focus-ring{position:absolute;top:50%;left:50%;width:var(--thumb-size);height:var(--thumb-size);transform:translate(-50%,-50%);background:0 0;border:0 solid var(--focus-ring-color);border-radius:999px;opacity:var(--focus-ring-opacity);transition:border-width var(--focus-ring-transition-duration) cubic-bezier(.4,0,.2,1)}:host(:focus) #thumb #focus-ring{border-width:var(--focus-ring-width)}#ripples .ripple{position:absolute;top:50%;left:50%;width:calc(var(--thumb-size) + 22px);height:calc(var(--thumb-size) + 22px);transform:translate(-50%,-50%);background:var(--ripple-background);border-radius:999px;opacity:var(--ripple-opacity)}<\/style>\n\n      <x-box id=\"main\">\n        <div id=\"track\"><\/div>\n\n        <div id=\"thumb\">\n          <div id=\"focus-ring\"><\/div>\n          <div id=\"ripples\"><\/div>\n        <\/div>\n      <\/x-box>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;width:30px;height:18px;margin:0 8px 0 0;box-sizing:border-box;display:flex;--focus-ring-color: currentColor;--focus-ring-opacity: 0.2;--focus-ring-width: 10px;--focus-ring-transition-duration: 0.15s;--ripple-type: none;--ripple-background: currentColor;--ripple-opacity: 0.2;--thumb-color: currentColor;--thumb-size: 20px;--thumb-border-radius: 999px;--track-height: 65%;--track-color: currentColor;--track-opacity: 0.5;--track-border-radius: 999px}:host([disabled]){opacity:.5;pointer-events:none}:host(:focus){outline:none}#main{width:100%;height:100%;position:relative}#track{width:100%;height:var(--track-height);background:var(--track-color);opacity:var(--track-opacity);border-radius:var(--track-border-radius)}#thumb{position:absolute;left:0;width:var(--thumb-size);height:var(--thumb-size);background:var(--thumb-color);border-radius:var(--thumb-border-radius);transition:left .2s cubic-bezier(.4,0,.2,1)}:host([toggled]) #thumb{left:calc(100% - var(--thumb-size))}:host([mixed]) #thumb{left:calc(50% - var(--thumb-size)/2)}#focus-ring{position:absolute;top:50%;left:50%;width:var(--thumb-size);height:var(--thumb-size);transform:translate(-50%,-50%);background:0 0;border:0 solid var(--focus-ring-color);border-radius:999px;opacity:var(--focus-ring-opacity);transition:border-width var(--focus-ring-transition-duration) cubic-bezier(.4,0,.2,1)}:host(:focus) #thumb #focus-ring{border-width:var(--focus-ring-width)}#ripples .ripple{position:absolute;top:50%;left:50%;width:calc(var(--thumb-size) + 22px);height:calc(var(--thumb-size) + 22px);transform:translate(-50%,-50%);background:var(--ripple-background);border-radius:999px;opacity:var(--ripple-opacity)}<\/style>\n\n      <x-box id=\"main\">\n        <div id=\"track\"><\/div>\n\n        <div id=\"thumb\">\n          <div id=\"focus-ring\"><\/div>\n          <div id=\"ripples\"><\/div>\n        <\/div>\n      <\/x-box>\n    <\/template>\n  "]),
        _templateObject31 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;width:100%;position:relative;box-sizing:border-box;--focus-ring-color: currentColor;--focus-ring-opacity: 1;--focus-ring-width: 10px;--focus-ring-transition-duration: 0.15s;--thumb-width: 20px;--thumb-height: 20px;--thumb-d: path(\"M 50 50 m -50 0 a 50 50 0 1 0 100 0 a 50 50 0 1 0 -100 0\");--thumb-transform: none;--thumb-color: gray;--thumb-border-width: 1px;--thumb-border-color: rgba(0, 0, 0, 0.2);--tick-color: rgba(0, 0, 0, 0.4);--track-height: 2px;--track-color: gray;--track-tint-color: black}:host(:focus){outline:none}:host(:hover){cursor:default}:host([disabled]){pointer-events:none;opacity:.4}#tracks{position:absolute;width:100%;height:var(--track-height);top:calc((var(--thumb-height)/2) - var(--track-height)/2)}#tracks #normal-track{position:absolute;width:100%;height:100%;background:var(--track-color);border-radius:10px}#tracks #tint-track{position:absolute;width:0%;height:100%;background:var(--track-tint-color)}#thumbs{position:relative;width:calc(100% - var(--thumb-width));height:100%}#thumbs .thumb{position:relative;left:0;width:var(--thumb-width);height:var(--thumb-height);display:block;box-sizing:border-box;overflow:visible;transform:var(--thumb-transform);transition:transform .2s ease-in-out;will-change:transform;d:var(--thumb-d)}#thumbs .thumb .shape{d:inherit;fill:var(--thumb-color);stroke:var(--thumb-border-color);stroke-width:var(--thumb-border-width);vector-effect:non-scaling-stroke}#thumbs .thumb .focus-ring{d:inherit;fill:none;stroke:var(--focus-ring-color);stroke-width:0;opacity:var(--focus-ring-opacity);vector-effect:non-scaling-stroke;transition:stroke-width var(--focus-ring-transition-duration) cubic-bezier(.4,0,.2,1)}:host(:focus) #thumbs .thumb .focus-ring{stroke-width:var(--focus-ring-width)}#ticks{width:calc(100% - var(--thumb-width));height:5px;margin:0 0 3px;position:relative;margin-left:calc(var(--thumb-width)/2)}#ticks:empty{display:none}#ticks .tick{position:absolute;width:1px;height:100%;background:var(--tick-color)}#labels{position:relative;width:calc(100% - var(--thumb-width));height:14px;margin-left:calc(var(--thumb-width)/2);font-size:12px}:host(:empty) #labels{display:none}::slotted(x-label){position:absolute;transform:translateX(-50%)}<\/style>\n\n      <div id=\"tracks\">\n        <div id=\"normal-track\"><\/div>\n        <div id=\"tint-track\"><\/div>\n      <\/div>\n\n      <div id=\"thumbs\">\n        <svg id=\"start-thumb\" class=\"thumb\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" style=\"left: 0%;\">\n          <path class=\"focus-ring\"><\/path>\n          <path class=\"shape\"><\/path>\n        <\/svg>\n      <\/div>\n\n      <div id=\"ticks\"><\/div>\n\n      <div id=\"labels\">\n        <slot><\/slot>\n      <\/div>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;width:100%;position:relative;box-sizing:border-box;--focus-ring-color: currentColor;--focus-ring-opacity: 1;--focus-ring-width: 10px;--focus-ring-transition-duration: 0.15s;--thumb-width: 20px;--thumb-height: 20px;--thumb-d: path(\"M 50 50 m -50 0 a 50 50 0 1 0 100 0 a 50 50 0 1 0 -100 0\");--thumb-transform: none;--thumb-color: gray;--thumb-border-width: 1px;--thumb-border-color: rgba(0, 0, 0, 0.2);--tick-color: rgba(0, 0, 0, 0.4);--track-height: 2px;--track-color: gray;--track-tint-color: black}:host(:focus){outline:none}:host(:hover){cursor:default}:host([disabled]){pointer-events:none;opacity:.4}#tracks{position:absolute;width:100%;height:var(--track-height);top:calc((var(--thumb-height)/2) - var(--track-height)/2)}#tracks #normal-track{position:absolute;width:100%;height:100%;background:var(--track-color);border-radius:10px}#tracks #tint-track{position:absolute;width:0%;height:100%;background:var(--track-tint-color)}#thumbs{position:relative;width:calc(100% - var(--thumb-width));height:100%}#thumbs .thumb{position:relative;left:0;width:var(--thumb-width);height:var(--thumb-height);display:block;box-sizing:border-box;overflow:visible;transform:var(--thumb-transform);transition:transform .2s ease-in-out;will-change:transform;d:var(--thumb-d)}#thumbs .thumb .shape{d:inherit;fill:var(--thumb-color);stroke:var(--thumb-border-color);stroke-width:var(--thumb-border-width);vector-effect:non-scaling-stroke}#thumbs .thumb .focus-ring{d:inherit;fill:none;stroke:var(--focus-ring-color);stroke-width:0;opacity:var(--focus-ring-opacity);vector-effect:non-scaling-stroke;transition:stroke-width var(--focus-ring-transition-duration) cubic-bezier(.4,0,.2,1)}:host(:focus) #thumbs .thumb .focus-ring{stroke-width:var(--focus-ring-width)}#ticks{width:calc(100% - var(--thumb-width));height:5px;margin:0 0 3px;position:relative;margin-left:calc(var(--thumb-width)/2)}#ticks:empty{display:none}#ticks .tick{position:absolute;width:1px;height:100%;background:var(--tick-color)}#labels{position:relative;width:calc(100% - var(--thumb-width));height:14px;margin-left:calc(var(--thumb-width)/2);font-size:12px}:host(:empty) #labels{display:none}::slotted(x-label){position:absolute;transform:translateX(-50%)}<\/style>\n\n      <div id=\"tracks\">\n        <div id=\"normal-track\"><\/div>\n        <div id=\"tint-track\"><\/div>\n      <\/div>\n\n      <div id=\"thumbs\">\n        <svg id=\"start-thumb\" class=\"thumb\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" style=\"left: 0%;\">\n          <path class=\"focus-ring\"><\/path>\n          <path class=\"shape\"><\/path>\n        <\/svg>\n      <\/div>\n\n      <div id=\"ticks\"><\/div>\n\n      <div id=\"labels\">\n        <slot><\/slot>\n      <\/div>\n    <\/template>\n  "]),
        _templateObject32 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:flex;flex-flow:row;align-items:center;justify-content:center;height:100%;width:fit-content;--button-color: rgba(0, 0, 0, 0.6);--button-border-left: none;--pressed-button-color: white;--pressed-button-background: rgba(0, 0, 0, 0.3);--increment-arrow-width: 11px;--increment-arrow-height: 11px;--increment-arrow-path-d: path(\"M 24.381 69.236 L 49.998 43.258 L 76.104 69.128 L 68.759 76.474 L 49.995 57.708 L 31.242 76.46 L 24.381 69.236 Z\" );--decrement-arrow-width: 11px;--decrement-arrow-height: 11px;--decrement-arrow-path-d: path(\"M 24.381 32.156 L 49.998 58.134 L 76.104 32.264 L 68.759 24.918 L 49.995 43.684 L 31.242 24.932 L 24.381 32.156 Z\" )}:host(:hover){cursor:default}#decrement-button,#increment-button{display:flex;align-items:center;justify-content:center;width:100%;height:100%;user-select:none;box-sizing:border-box;color:var(--button-color);border-left:var(--button-border-left)}#decrement-button[data-pressed],#increment-button[data-pressed]{color:var(--pressed-button-color);background:var(--pressed-button-background)}:host([disabled=\"\"]) #decrement-button,:host([disabled=\"\"]) #increment-button,:host([disabled=\"decrement\"]) #decrement-button,:host([disabled=\"increment\"]) #increment-button{opacity:.3;pointer-events:none}#decrement-arrow,#increment-arrow{width:var(--increment-arrow-width);height:var(--increment-arrow-height);pointer-events:none}#decrement-arrow{width:var(--decrement-arrow-width);height:var(--decrement-arrow-height)}#increment-arrow-path{d:var(--increment-arrow-path-d);fill:currentColor}#decrement-arrow-path{d:var(--decrement-arrow-path-d);fill:currentColor}<\/style>\n\n      <div id=\"decrement-button\" class=\"button\">\n        <svg id=\"decrement-arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n          <path id=\"decrement-arrow-path\"><\/path>\n        <\/svg>\n      <\/div>\n\n      <div id=\"increment-button\" class=\"button\">\n        <svg id=\"increment-arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n          <path id=\"increment-arrow-path\"><\/path>\n        <\/svg>\n      <\/div>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:flex;flex-flow:row;align-items:center;justify-content:center;height:100%;width:fit-content;--button-color: rgba(0, 0, 0, 0.6);--button-border-left: none;--pressed-button-color: white;--pressed-button-background: rgba(0, 0, 0, 0.3);--increment-arrow-width: 11px;--increment-arrow-height: 11px;--increment-arrow-path-d: path(\"M 24.381 69.236 L 49.998 43.258 L 76.104 69.128 L 68.759 76.474 L 49.995 57.708 L 31.242 76.46 L 24.381 69.236 Z\" );--decrement-arrow-width: 11px;--decrement-arrow-height: 11px;--decrement-arrow-path-d: path(\"M 24.381 32.156 L 49.998 58.134 L 76.104 32.264 L 68.759 24.918 L 49.995 43.684 L 31.242 24.932 L 24.381 32.156 Z\" )}:host(:hover){cursor:default}#decrement-button,#increment-button{display:flex;align-items:center;justify-content:center;width:100%;height:100%;user-select:none;box-sizing:border-box;color:var(--button-color);border-left:var(--button-border-left)}#decrement-button[data-pressed],#increment-button[data-pressed]{color:var(--pressed-button-color);background:var(--pressed-button-background)}:host([disabled=\"\"]) #decrement-button,:host([disabled=\"\"]) #increment-button,:host([disabled=\"decrement\"]) #decrement-button,:host([disabled=\"increment\"]) #increment-button{opacity:.3;pointer-events:none}#decrement-arrow,#increment-arrow{width:var(--increment-arrow-width);height:var(--increment-arrow-height);pointer-events:none}#decrement-arrow{width:var(--decrement-arrow-width);height:var(--decrement-arrow-height)}#increment-arrow-path{d:var(--increment-arrow-path-d);fill:currentColor}#decrement-arrow-path{d:var(--decrement-arrow-path-d);fill:currentColor}<\/style>\n\n      <div id=\"decrement-button\" class=\"button\">\n        <svg id=\"decrement-arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n          <path id=\"decrement-arrow-path\"><\/path>\n        <\/svg>\n      <\/div>\n\n      <div id=\"increment-button\" class=\"button\">\n        <svg id=\"increment-arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n          <path id=\"increment-arrow-path\"><\/path>\n        <\/svg>\n      <\/div>\n    <\/template>\n  "]),
        _templateObject33 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{position:relative;display:flex;width:100%;height:100%;box-sizing:border-box;justify-content:flex-start}:host([centered]){margin:0 auto;justify-content:center}:host([centered]) ::slotted(x-tab){flex:0}#selection-indicator{position:absolute;width:100%;height:fit-content;bottom:0;left:0;pointer-events:none}<\/style>\n      <slot><\/slot>\n      <div id=\"selection-indicator\" hidden><\/div>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{position:relative;display:flex;width:100%;height:100%;box-sizing:border-box;justify-content:flex-start}:host([centered]){margin:0 auto;justify-content:center}:host([centered]) ::slotted(x-tab){flex:0}#selection-indicator{position:absolute;width:100%;height:fit-content;bottom:0;left:0;pointer-events:none}<\/style>\n      <slot><\/slot>\n      <div id=\"selection-indicator\" hidden><\/div>\n    <\/template>\n  "]),
        _templateObject34 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{position:relative;display:flex;align-items:center;justify-content:center;height:100%;box-sizing:border-box;cursor:default;user-select:none;--menu-position: below;--trigger-effect: none;--ripple-background: currentColor;--ripple-opacity: 0.2;--arrow-width: 9px;--arrow-height: 9px;--arrow-margin: 1px 0 0 3px;--arrow-d: path(\"M 11.699 19.846 L 49.822 57.886 L 87.945 19.846 L 99.657 31.557 L 49.822 81.392 L -0.013 31.557 Z\");--selection-indicator-height: 3px;--selection-indicator-background: white}:host(:focus){outline:none}#content{display:inherit;flex-flow:inherit;align-items:inherit;z-index:100}#arrow{width:var(--arrow-width);height:var(--arrow-height);margin:var(--arrow-margin);color:currentColor;d:var(--arrow-d)}#arrow-path{fill:currentColor;d:inherit}#ripples,#ripples .ripple,#selection-indicator{width:100%;position:absolute;left:0}#ripples{z-index:0;top:0;height:100%;overflow:hidden;pointer-events:none}#ripples .ripple{top:0;width:200px;height:200px;background:var(--ripple-background);opacity:var(--ripple-opacity);border-radius:999px;transform:none;transition:all 800ms cubic-bezier(.4,0,.2,1);will-change:opacity,transform;pointer-events:none}#selection-indicator{display:none;height:var(--selection-indicator-height);background:var(--selection-indicator-background);bottom:0}:host([selected]) #selection-indicator{display:block}:host-context([animatingindicator]) #selection-indicator{display:none}<\/style>\n\n      <div id=\"ripples\"><\/div>\n      <div id=\"selection-indicator\"><\/div>\n\n      <div id=\"content\">\n        <slot><\/slot>\n\n        <svg id=\"arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" hidden>\n          <path id=\"arrow-path\"><\/path>\n        <\/svg>\n      <\/div>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{position:relative;display:flex;align-items:center;justify-content:center;height:100%;box-sizing:border-box;cursor:default;user-select:none;--menu-position: below;--trigger-effect: none;--ripple-background: currentColor;--ripple-opacity: 0.2;--arrow-width: 9px;--arrow-height: 9px;--arrow-margin: 1px 0 0 3px;--arrow-d: path(\"M 11.699 19.846 L 49.822 57.886 L 87.945 19.846 L 99.657 31.557 L 49.822 81.392 L -0.013 31.557 Z\");--selection-indicator-height: 3px;--selection-indicator-background: white}:host(:focus){outline:none}#content{display:inherit;flex-flow:inherit;align-items:inherit;z-index:100}#arrow{width:var(--arrow-width);height:var(--arrow-height);margin:var(--arrow-margin);color:currentColor;d:var(--arrow-d)}#arrow-path{fill:currentColor;d:inherit}#ripples,#ripples .ripple,#selection-indicator{width:100%;position:absolute;left:0}#ripples{z-index:0;top:0;height:100%;overflow:hidden;pointer-events:none}#ripples .ripple{top:0;width:200px;height:200px;background:var(--ripple-background);opacity:var(--ripple-opacity);border-radius:999px;transform:none;transition:all 800ms cubic-bezier(.4,0,.2,1);will-change:opacity,transform;pointer-events:none}#selection-indicator{display:none;height:var(--selection-indicator-height);background:var(--selection-indicator-background);bottom:0}:host([selected]) #selection-indicator{display:block}:host-context([animatingindicator]) #selection-indicator{display:none}<\/style>\n\n      <div id=\"ripples\"><\/div>\n      <div id=\"selection-indicator\"><\/div>\n\n      <div id=\"content\">\n        <slot><\/slot>\n\n        <svg id=\"arrow\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" hidden>\n          <path id=\"arrow-path\"><\/path>\n        <\/svg>\n      <\/div>\n    <\/template>\n  "]),
        _templateObject35 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;position:relative;max-width:140px;height:24px;box-sizing:border-box;color:#000;background:#fff;--selection-color: currentColor;--selection-background: #B2D7FD;--inner-padding: 0}:host(:focus){z-index:10}:host(:hover){cursor:text}:host([invalid]){--selection-color: white;--selection-background: #d50000}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}::selection{color:var(--selection-color);background:var(--selection-background)}#input,#main{width:100%;height:100%}#main{display:flex;align-items:center}#input{margin-right: var(--input-margin-right);padding:var(--inner-padding);box-sizing:border-box;color:inherit;background:0 0;border:none;outline:none;font-family:inherit;font-size:inherit;font-weight:inherit;cursor:inherit}:host(:not(:focus)) ::selection{color:inherit;background:0 0}:host([invalid])::before{position:absolute;left:0;top:26px;box-sizing:border-box;color:#d50000;font-family:inherit;font-size:11px;line-height:1.2;white-space:pre;content:attr(invalid-hint)}<\/style>\n\n      <main id=\"main\">\n        <slot><\/slot>\n        <input id=\"input\" spellcheck=\"false\"><\/input>\n      <\/main>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;position:relative;max-width:140px;height:24px;box-sizing:border-box;color:#000;background:#fff;--selection-color: currentColor;--selection-background: #B2D7FD;--inner-padding: 0}:host(:focus){z-index:10}:host(:hover){cursor:text}:host([invalid]){--selection-color: white;--selection-background: #d50000}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}::selection{color:var(--selection-color);background:var(--selection-background)}#input,#main{width:100%;height:100%}#main{display:flex;align-items:center}#input{padding:var(--inner-padding);box-sizing:border-box;color:inherit;background:0 0;border:none;outline:none;font-family:inherit;font-size:inherit;font-weight:inherit;cursor:inherit}:host(:not(:focus)) ::selection{color:inherit;background:0 0}:host([invalid])::before{position:absolute;left:0;top:26px;box-sizing:border-box;color:#d50000;font-family:inherit;font-size:11px;line-height:1.2;white-space:pre;content:attr(invalid-hint)}<\/style>\n\n      <main id=\"main\">\n        <slot><\/slot>\n        <input id=\"input\" spellcheck=\"false\"><\/input>\n      <\/main>\n    <\/template>\n  "]),
        _templateObject36 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;position:relative;width:100px;height:24px;box-sizing:border-box;color:#000;--selection-color: currentColor;--selection-background: #B2D7FD;--inner-padding: 0}:host(:hover){cursor:text}:host([invalid]){--selection-color: white;--selection-background: #d50000}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}::selection{color:var(--selection-color);background:var(--selection-background)}#editor-container,#main{display:flex;align-items:center;height:100%}#editor-container{width:100%;padding:var(--inner-padding);box-sizing:border-box;overflow:hidden}#editor{width:100%;overflow:auto;color:inherit;background:0 0;border:none;outline:none;font-family:inherit;font-size:inherit;line-height:10;white-space:nowrap}#editor::-webkit-scrollbar{display:none}#editor::after,#editor::before{content:attr(data-prefix);pointer-events:none}#editor::after{content:attr(data-suffix)}:host(:focus) #editor::after,:host(:focus) #editor::before,:host([empty]) #editor::after,:host([empty]) #editor::before{content:\"\"}<\/style>\n\n      <main id=\"main\">\n        <div id=\"editor-container\">\n          <div id=\"editor\" contenteditable=\"plaintext-only\" spellcheck=\"false\"><\/div>\n        <\/div>\n\n        <slot><\/slot>\n      <\/main>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;position:relative;width:100px;height:24px;box-sizing:border-box;color:#000;--selection-color: currentColor;--selection-background: #B2D7FD;--inner-padding: 0}:host(:hover){cursor:text}:host([invalid]){--selection-color: white;--selection-background: #d50000}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}::selection{color:var(--selection-color);background:var(--selection-background)}#editor-container,#main{display:flex;align-items:center;height:100%}#editor-container{width:100%;padding:var(--inner-padding);box-sizing:border-box;overflow:hidden}#editor{width:100%;overflow:auto;color:inherit;background:0 0;border:none;outline:none;font-family:inherit;font-size:inherit;line-height:10;white-space:nowrap}#editor::-webkit-scrollbar{display:none}#editor::after,#editor::before{content:attr(data-prefix);pointer-events:none}#editor::after{content:attr(data-suffix)}:host(:focus) #editor::after,:host(:focus) #editor::before,:host([empty]) #editor::after,:host([empty]) #editor::before{content:\"\"}<\/style>\n\n      <main id=\"main\">\n        <div id=\"editor-container\">\n          <div id=\"editor\" contenteditable=\"plaintext-only\" spellcheck=\"false\"><\/div>\n        <\/div>\n\n        <slot><\/slot>\n      <\/main>\n    <\/template>\n  "]),
        _templateObject37 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:flex;align-items:center;position:relative;box-sizing:border-box;min-height:24px;background:#fff;border:1px solid #bfbfbf;font-size:12px;--close-button-path-d: path(\"M 25 16 L 50 41 L 75 16 L 84 25 L 59 50 L 84 75 L 75 84 L 50 59 L 25 84 L 16 75 L 41 50 L 16 25 Z\");--selection-color: currentColor;--selection-background: #B2D7FD;--tag-background: rgba(0, 0, 0, 0.04);--tag-border: 1px solid #cccccc;--tag-color: currentColor}:host(:focus){outline:1px solid #00f}:host([invalid]){--selection-color: white;--selection-background: #d50000}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}::selection{color:var(--selection-color);background:var(--selection-background)}#items,#main{display:flex;flex-wrap:wrap}#main{width:100%;height:100%;min-height:inherit;justify-content:flex-start;align-items:flex-start;align-content:flex-start;cursor:text}#items{padding:2px}.item{height:100%;margin:2px;padding:0 3px 0 6px;display:flex;line-height:1.2;align-items:center;justify-content:center;background:var(--tag-background);border:var(--tag-border);color:var(--tag-color);font-size:inherit;cursor:default;user-select:none}.item#editable-item{color:inherit;outline:none;background:0 0;border:1px solid transparent;flex-grow:1;align-items:center;justify-content:flex-start;white-space:pre;cursor:text;user-select:text}.item .close-button{color:inherit;opacity:.8;width:11px;height:11px;vertical-align:middle;margin-left:4px}.item .close-button:hover{background:rgba(0,0,0,.1);opacity:1}.item .close-button-path{fill:currentColor;d:var(--close-button-path-d)}<\/style>\n\n      <main id=\"main\">\n        <div id=\"items\">\n          <span id=\"editable-item\" class=\"item\" spellcheck=\"false\"><\/span>\n        <\/div>\n        <slot><\/slot>\n      <\/main>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:flex;align-items:center;position:relative;box-sizing:border-box;min-height:24px;background:#fff;border:1px solid #bfbfbf;font-size:12px;--close-button-path-d: path(\"M 25 16 L 50 41 L 75 16 L 84 25 L 59 50 L 84 75 L 75 84 L 50 59 L 25 84 L 16 75 L 41 50 L 16 25 Z\");--selection-color: currentColor;--selection-background: #B2D7FD;--tag-background: rgba(0, 0, 0, 0.04);--tag-border: 1px solid #cccccc;--tag-color: currentColor}:host(:focus){outline:1px solid #00f}:host([invalid]){--selection-color: white;--selection-background: #d50000}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}::selection{color:var(--selection-color);background:var(--selection-background)}#items,#main{display:flex;flex-wrap:wrap}#main{width:100%;height:100%;min-height:inherit;justify-content:flex-start;align-items:flex-start;align-content:flex-start;cursor:text}#items{padding:2px}.item{height:100%;margin:2px;padding:0 3px 0 6px;display:flex;line-height:1.2;align-items:center;justify-content:center;background:var(--tag-background);border:var(--tag-border);color:var(--tag-color);font-size:inherit;cursor:default;user-select:none}.item#editable-item{color:inherit;outline:none;background:0 0;border:1px solid transparent;flex-grow:1;align-items:center;justify-content:flex-start;white-space:pre;cursor:text;user-select:text}.item .close-button{color:inherit;opacity:.8;width:11px;height:11px;vertical-align:middle;margin-left:4px}.item .close-button:hover{background:rgba(0,0,0,.1);opacity:1}.item .close-button-path{fill:currentColor;d:var(--close-button-path-d)}<\/style>\n\n      <main id=\"main\">\n        <div id=\"items\">\n          <span id=\"editable-item\" class=\"item\" spellcheck=\"false\"><\/span>\n        <\/div>\n        <slot><\/slot>\n      <\/main>\n    <\/template>\n  "]),
        _templateObject38 = _taggedTemplateLiteral(["\n    <template>\n      <style>:host{display:block;position:relative;width:100%;min-height:100px;box-sizing:border-box;background:#fff;color:#000;--selection-color: currentColor;--selection-background: #B2D7FD;--inner-padding: 0}:host(:hover){cursor:text}:host([invalid]){--selection-color: white;--selection-background: #d50000}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}::selection{color:var(--selection-color);background:var(--selection-background)}::-webkit-scrollbar{max-width:6px;max-height:6px;background:0 0}::-webkit-scrollbar-track{border-radius:25px}::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.2);border-radius:25px}::-webkit-scrollbar-corner{display:none}#main{display:flex;flex-flow:column;height:100%;min-height:inherit}#editor{flex:1;padding:var(--inner-padding);box-sizing:border-box;color:inherit;background:0 0;border:none;outline:none;font-family:inherit;font-size:inherit;overflow:auto}:host([invalid])::before{position:absolute;left:0;bottom:-20px;box-sizing:border-box;color:#d50000;font-family:inherit;font-size:11px;line-height:1.2;white-space:pre;content:attr(invalid-hint) \" \"}<\/style>\n\n      <main id=\"main\">\n        <slot><\/slot>\n        <div id=\"editor\" contenteditable=\"plaintext-only\" spellcheck=\"false\"><\/div>\n      <\/main>\n    <\/template>\n  "], ["\n    <template>\n      <style>:host{display:block;position:relative;width:100%;min-height:100px;box-sizing:border-box;background:#fff;color:#000;--selection-color: currentColor;--selection-background: #B2D7FD;--inner-padding: 0}:host(:hover){cursor:text}:host([invalid]){--selection-color: white;--selection-background: #d50000}:host([disabled]){pointer-events:none;opacity:.5}:host([hidden]){display:none}::selection{color:var(--selection-color);background:var(--selection-background)}::-webkit-scrollbar{max-width:6px;max-height:6px;background:0 0}::-webkit-scrollbar-track{border-radius:25px}::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.2);border-radius:25px}::-webkit-scrollbar-corner{display:none}#main{display:flex;flex-flow:column;height:100%;min-height:inherit}#editor{flex:1;padding:var(--inner-padding);box-sizing:border-box;color:inherit;background:0 0;border:none;outline:none;font-family:inherit;font-size:inherit;overflow:auto}:host([invalid])::before{position:absolute;left:0;bottom:-20px;box-sizing:border-box;color:#d50000;font-family:inherit;font-size:11px;line-height:1.2;white-space:pre;content:attr(invalid-hint) \" \"}<\/style>\n\n      <main id=\"main\">\n        <slot><\/slot>\n        <div id=\"editor\" contenteditable=\"plaintext-only\" spellcheck=\"false\"><\/div>\n      <\/main>\n    <\/template>\n  "]);

    function _toArray(o) {
        return Array.isArray(o) ? o : Array.from(o)
    }

    function _possibleConstructorReturn(o, n) {
        if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n && ("object" == typeof n || "function" == typeof n) ? n : o
    }

    function _inherits(o, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        o.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(o, n) : o.__proto__ = n)
    }

    function _CustomElement() {
        return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }
    Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype), Object.setPrototypeOf(_CustomElement, HTMLElement);

    function _taggedTemplateLiteral(o, n) {
        return Object.freeze(Object.defineProperties(o, {
            raw: {
                value: Object.freeze(n)
            }
        }))
    }

    function _toConsumableArray(o) {
        if (Array.isArray(o)) {
            for (var n = 0, u = Array(o.length); n < o.length; n++) u[n] = o[n];
            return u
        }
        return Array.from(o)
    }

    function _classCallCheck(o, n) {
        if (!(o instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    window.Xel = {
        utils: {},
        classes: {}
    }, !1 === MouseEvent.prototype.hasOwnProperty("pointerType") && Object.defineProperty(MouseEvent.prototype, "pointerType", {
        get: function() {
            return this.sourceCapabilities.firesTouchEvents ? "touch" : "mouse"
        }
    }); {
        var setPointerCapture = Element.prototype.setPointerCapture;
        Element.prototype.setPointerCapture = function(o) {
            var n = this;
            setPointerCapture.call(this, o);
            var u = getComputedStyle(this)
                .cursor,
                m = document.createElement("style");
            m.textContent = "body, * { cursor: " + u + " !important; user-select: none !important; }", document.head.append(m);
            var w = function k() {
                window.removeEventListener("pointerup", k, !0), n.removeEventListener("lostpointercapture", k), m.remove()
            };
            window.addEventListener("pointerup", w, !0), this.addEventListener("lostpointercapture", w)
        }
    } {
        var Animation = document.createElement("div")
            .animate({})
            .constructor;
        Object.defineProperty(Animation.prototype, "finished", {
            get: function() {
                var n = this;
                return new Promise(function(u) {
                    "finished" === n.playState ? u() : n.addEventListener("finish", function() {
                        return u()
                    }, {
                        once: !0
                    })
                })
            }
        })
    }
    Node.prototype.append || (Node.prototype.append = function(o) {
        this.appendChild(o)
    }), Node.prototype.prepend || (Node.prototype.prepend = function(o) {
        this.insertBefore(o, this.firstElementChild)
    }), Node.prototype.before || (Node.prototype.before = function(o) {
        this.parentElement.insertBefore(o, this)
    }), Node.prototype.after || (Node.prototype.after = function(o) {
        this.parentElement.insertBefore(o, this.nextElementSibling)
    }), Node.prototype.replace || (Node.prototype.replace = function(o) {
        this.parentNode.replaceChild(o, this)
    }), Node.prototype.closest || (Node.prototype.closest = function(o) {
        return this.parentNode ? this.parentNode.closest(o) : null
    }); {
        try {
            new SVGPoint
        } catch (o) {
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                _SVGPoint = new Proxy(window.SVGPoint, {
                    construct: function(u, m) {
                        var w = svg.createSVGPoint(),
                            k = _slicedToArray(m, 2),
                            _ = k[0],
                            A = k[1];
                        return _ && (w.x = _), A && (w.y = A), w
                    }
                });
            window.SVGPoint = _SVGPoint
        }
        SVGPoint.fromPoint || (SVGPoint.fromPoint = function(o) {
            return o ? new SVGPoint(o.x, o.y) : new SVGPoint
        }), SVGPoint.prototype.toString || (SVGPoint.prototype.toString = function() {
            return "point(" + this.x + ", " + this.y + ")"
        }), window.DOMPoint || (window.DOMPoint = SVGPoint)
    } {
        try {
            new SVGRect
        } catch (o) {
            var _svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                _SVGRect = new Proxy(window.SVGRect, {
                    construct: function(u, m) {
                        var w = _svg.createSVGRect(),
                            k = _slicedToArray(m, 4),
                            _ = k[0],
                            A = k[1],
                            C = k[2],
                            S = k[3];
                        return _ && (w.x = _), A && (w.y = A), C && (w.width = C), S && (w.height = S), w
                    }
                });
            window.SVGRect = _SVGRect
        }
        SVGRect.fromRect || (SVGRect.fromRect = function(o) {
            return o ? new SVGRect(o.x, o.y, o.width, o.height) : new SVGRect
        }), !1 === SVGRect.prototype.hasOwnProperty("top") && Object.defineProperty(SVGRect.prototype, "top", {
            enumerable: !0,
            get: function() {
                return _Mathmin(this.y, this.y + this.height)
            }
        }), !1 === SVGRect.prototype.hasOwnProperty("right") && Object.defineProperty(SVGRect.prototype, "right", {
            enumerable: !0,
            get: function() {
                return _Mathmax(this.x, this.x + this.width)
            }
        }), !1 === SVGRect.prototype.hasOwnProperty("bottom") && Object.defineProperty(SVGRect.prototype, "bottom", {
            enumerable: !0,
            get: function() {
                return _Mathmax(this.y, this.y + this.height)
            }
        }), !1 === SVGRect.prototype.hasOwnProperty("left") && Object.defineProperty(SVGRect.prototype, "left", {
            enumerable: !0,
            get: function() {
                return _Mathmin(this.x, this.x + this.width)
            }
        }), window.ClientRect && (!1 === window.ClientRect.prototype.hasOwnProperty("x") && Object.defineProperty(window.ClientRect.prototype, "x", {
            get: function() {
                return this.left
            },
            set: function(n) {
                this.left = n
            }
        }), !1 === window.ClientRect.prototype.hasOwnProperty("y") && Object.defineProperty(window.ClientRect.prototype, "y", {
            get: function() {
                return this.top
            },
            set: function(n) {
                this.top = n
            }
        })), window.DOMRect || (window.DOMRect = SVGRect)
    } {
        var _svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            SVGMatrix = new Proxy(window.SVGMatrix, {
                construct: function(n, u) {
                    var m = _svg2.createSVGMatrix();
                    if (u[0] !== void 0)
                        if (Array.isArray(u[0]) && 6 === u[0].length) {
                            var w = _slicedToArray(u[0], 6),
                                k = w[0],
                                _ = w[1],
                                A = w[2],
                                C = w[3],
                                S = w[4],
                                E = w[5];
                            m.a = k, m.b = _, m.c = A, m.d = C, m.e = S, m.f = E
                        } else throw new TypeError("Invalid argument passed to SVGMatrix constructor.");
                    return m
                }
            });
        window.SVGMatrix = SVGMatrix, SVGMatrix.fromMatrix = function(o) {
            var n = o.a,
                u = o.b,
                m = o.c,
                w = o.d,
                k = o.e,
                _ = o.f;
            return new SVGMatrix([n, u, m, w, k, _])
        }, SVGMatrix.prototype.transformPoint = function(o) {
            var n = new SVGPoint;
            return n.x = this.a * o.x + this.c * o.y + this.e, n.y = this.b * o.x + this.d * o.y + this.f, n
        }, SVGMatrix.prototype.determinant = function() {
            var o = this.a * this.d - this.b * this.c;
            return o
        }, SVGMatrix.prototype.isIdentity = function() {
            return 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d && 0 === this.e && 0 === this.f
        }, SVGMatrix.prototype.multiplySelf = function(o) {
            var n = this.a * o.a + this.c * o.b,
                u = this.b * o.a + this.d * o.b,
                m = this.a * o.c + this.c * o.d,
                w = this.b * o.c + this.d * o.d,
                k = this.a * o.e + this.c * o.f + this.e,
                _ = this.b * o.e + this.d * o.f + this.f;
            return this.a = n, this.b = u, this.c = m, this.d = w, this.e = k, this.f = _, this
        }, SVGMatrix.prototype.preMultiplySelf = function(o) {
            var n = o.a * this.a + o.c * this.b,
                u = o.b * this.a + o.d * this.b,
                m = o.a * this.c + o.c * this.d,
                w = o.b * this.c + o.d * this.d,
                k = o.a * this.e + o.c * this.f + o.e,
                _ = o.b * this.e + o.d * this.f + o.f;
            return this.a = n, this.b = u, this.c = m, this.d = w, this.e = k, this.f = _, this
        }, SVGMatrix.prototype.translateSelf = function(o, n) {
            return this.multiplySelf({
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: o,
                f: n
            }), this
        }, SVGMatrix.prototype._translateOriginSelf = function(o, n) {
            return this.e = this.e + o * this.a + n * this.c, this.f = this.f + o * this.b + n * this.d, this
        }, SVGMatrix.prototype._translateOrigin = function(o, n) {
            var u = new SVGMatrix;
            return u.a = this.a, u.b = this.b, u.c = this.c, u.d = this.d, u.e = this.e + o * this.a + n * this.c, u.f = this.f + o * this.b + n * this.d, u
        }, SVGMatrix.prototype.scaleSelf = function(o, n, u) {
            void 0 === n && (n = 0), void 0 === u && (u = 0);
            return this._translateOriginSelf(n, u), this.multiplySelf({
                a: o,
                b: 0,
                c: 0,
                d: o,
                e: 0,
                f: 0
            }), this._translateOriginSelf(-n, -u), this
        }, SVGMatrix.prototype.scaleNonUniformSelf = function(o, n, u, m) {
            void 0 === n && (n = 1), void 0 === u && (u = 0), void 0 === m && (m = 0);
            var w = {
                a: o,
                b: 0,
                c: 0,
                d: n,
                e: 0,
                f: 0
            };
            return this._translateOriginSelf(u, m), this.multiplySelf(w), this._translateOriginSelf(-u, -m), this
        }, SVGMatrix.prototype.rotate = function(o, n, u) {
            void 0 === n && (n = 0), void 0 === u && (u = 0);
            var m = _MathPI * o / 180,
                w = _Mathcos(m),
                k = _Mathsin(m),
                A = this._translateOrigin(n, u);
            return A.multiplySelf({
                a: w,
                b: k,
                c: -k,
                d: w,
                e: 0,
                f: 0
            }), A._translateOriginSelf(-n, -u), A
        }, SVGMatrix.prototype.rotateSelf = function(o, n, u) {
            void 0 === n && (n = 0), void 0 === u && (u = 0);
            var m = _MathPI * o / 180,
                w = _Mathcos(m),
                k = _Mathsin(m);
            return this._translateOriginSelf(n, u), this.multiplySelf({
                a: w,
                b: k,
                c: -k,
                d: w,
                e: 0,
                f: 0
            }), this._translateOriginSelf(-n, -u), this
        }, SVGMatrix.prototype.skewXSelf = function(o) {
            var u = {
                a: 1,
                b: 0,
                c: _Mathtan(_MathPI * o / 180),
                d: 1,
                e: 0,
                f: 0
            };
            return this.multiplySelf(u), this
        }, SVGMatrix.prototype.skewYSelf = function(o) {
            var u = {
                a: 1,
                b: _Mathtan(_MathPI * o / 180),
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            return this.multiplySelf(u), this
        }, SVGMatrix.prototype.invertSelf = function() {
            var n = this.determinant();
            if (0 !== n) {
                var u = this.d / n,
                    m = -this.b / n,
                    w = -this.c / n,
                    k = this.a / n,
                    _ = (this.c * this.f - this.d * this.e) / n,
                    A = (this.b * this.e - this.a * this.f) / n;
                this.a = u, this.b = m, this.c = w, this.d = k, this.e = _, this.f = A
            }
            return this
        }, SVGMatrix.prototype.toString = function() {
            return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.e + ", " + this.f + ")"
        }, !1 === SVGMatrix.prototype.hasOwnProperty("is2D") && Object.defineProperty(SVGMatrix.prototype, "is2D", {
            enumerable: !0,
            get: function() {
                return !0
            }
        }), window.DOMMatrix || (window.DOMMatrix = SVGMatrix)
    } {
        var StringScanner = function() {
            function o(n) {
                _classCallCheck(this, o), this.text = n, this.cursor = 0, this.line = 1, this.column = 1, this._storedPosition = {
                    cursor: 0,
                    line: 1,
                    column: 1
                }
            }
            return _createClass(o, [{
                key: "read",
                value: function() {
                    for (var u = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, m = "", w = this.cursor, k = 0, _; k < u && (_ = this.text[w + k], void 0 !== _); k += 1) m += _, this.cursor += 1, "\n" === _ ? (this.line += 1, this.column = 1) : this.column += 1;
                    return "" === m ? null : m
                }
            }, {
                key: "peek",
                value: function() {
                    for (var u = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, m = "", w = 0, k; w < u && (k = this.text[this.cursor + w], void 0 !== k); w += 1) m += k;
                    return "" === m ? null : m
                }
            }, {
                key: "storePosition",
                value: function() {
                    var u = this.cursor,
                        m = this.line,
                        w = this.column;
                    this._storedPosition = {
                        cursor: u,
                        line: m,
                        column: w
                    }
                }
            }, {
                key: "restorePosition",
                value: function() {
                    var u = this._storedPosition,
                        m = u.cursor,
                        w = u.line,
                        k = u.column;
                    this.cursor = m, this.line = w, this.column = k
                }
            }]), o
        }();
        Xel.classes.StringScanner = StringScanner
    } {
        var templateElement = document.createElement("template"),
            html = function(n) {
                for (var u = [], m = 0; m < n.length; m += 1) u.push(n[m]), void 0 !== (arguments.length <= m + 1 ? void 0 : arguments[m + 1]) && u.push(arguments.length <= m + 1 ? void 0 : arguments[m + 1]);
                var w = u.join("");
                templateElement.innerHTML = w;
                var k = document.importNode(templateElement.content, !0);
                return 1 === k.children.length ? k.firstElementChild : k
            },
            _svg3 = function(n) {
                for (var u = [], m = 0; m < n.length; m += 1) u.push(n[m]), void 0 !== (arguments.length <= m + 1 ? void 0 : arguments[m + 1]) && u.push(arguments.length <= m + 1 ? void 0 : arguments[m + 1]);
                var w = "<svg id=\"x-stub\" xmlns=\"http://www.w3.org/2000/svg\">" + u.join("") + "<\/svg>";
                templateElement.innerHTML = w;
                var k = document.importNode(templateElement.content, !0),
                    _ = k.querySelector("svg#x-stub");
                if (1 === _.children.length) return _.firstElementChild;
                for (var A = [].concat(_toConsumableArray(_.childNodes)), C = 0, S; C < A.length; C++) S = A[C], k.appendChild(S);
                return _.remove(), k
            },
            createElement = function(n) {
                var u = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : null,
                    m = n.split(":"),
                    w = null;
                if (1 === m.length) {
                    var k = _slicedToArray(m, 1),
                        _ = k[0];
                    w = null === u ? document.createElement(_) : document.createElement(_, u)
                } else if (2 === m.length) {
                    var A = _slicedToArray(m, 2),
                        C = A[0],
                        S = A[1];
                    "svg" === C && (w = document.createElementNS("http://www.w3.org/2000/svg", S))
                }
                return w
            },
            closest = function o(n, u) {
                var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0,
                    w = n.closest(u);
                return m && !w && n.getRootNode()
                    .host ? o(n.getRootNode()
                        .host, u) : w
            },
            generateUniqueID = function(n) {
                for (var u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "", m = 1, w;;) {
                    if (w = u + m, null === n.querySelector("#" + w)) return w;
                    m += 1
                }
            };
        Xel.utils.element = {
            html: html,
            svg: _svg3,
            createElement: createElement,
            closest: closest,
            generateUniqueID: generateUniqueID
        }
    } {
        var max = _Mathmax,
            _pow = _Mathpow,
            _sqrt = _Mathsqrt,
            _PI = _MathPI,
            round = function(n) {
                var u = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 0,
                    m = _pow(10, u);
                return _Mathround(n * m) / m
            },
            normalize = function(n, u) {
                var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Infinity,
                    w = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return null !== w && (n = round(n, w)), n < u ? n = u : n > m && (n = m), n
            },
            getPrecision = function(n) {
                if (!isFinite(n)) return 0;
                for (var u = 1, m = 0; _Mathround(n * u) / u !== n;) u *= 10, m += 1;
                return m
            },
            getDistanceBetweenPoints = function(n, u) {
                var m = u.x - n.x;
                m *= m;
                var w = u.y - n.y;
                w *= w;
                var k = _sqrt(m + w);
                return k
            },
            degToRad = function(n) {
                return _PI * n / 180
            };
        Xel.utils.math = {
            round: round,
            normalize: normalize,
            getPrecision: getPrecision,
            getDistanceBetweenPoints: getDistanceBetweenPoints,
            degToRad: degToRad
        }
    } {
        var _isFinite = _NumberisFinite,
            _isNaN = _NumberisNaN,
            _parseFloat = _NumberparseFloat,
            capitalize = function(n) {
                return n.charAt(0)
                    .toUpperCase() + n.substr(1)
            },
            replaceAll = function(n, u, m) {
                return n.split(u)
                    .join(m)
            },
            isDOMWhitespace = function(n) {
                return !/[^\t\n\r ]/.test(n)
            },
            isNumeric = function(n) {
                var u = _parseFloat(n);
                return !1 === _isNaN(u) && _isFinite(u)
            };
        Xel.utils.string = {
            capitalize: capitalize,
            replaceAll: replaceAll,
            isDOMWhitespace: isDOMWhitespace,
            isNumeric: isNumeric
        }
    } {
        var _Xel$utils$element = Xel.utils.element,
            _createElement = _Xel$utils$element.createElement,
            _svg4 = _Xel$utils$element.svg,
            _replaceAll = Xel.utils.string.replaceAll,
            materialIconsURL = "https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite",
            materialIconsCategories = ["action", "alert", "av", "communication", "content", "device", "editor", "file", "hardware", "image", "maps", "navigation", "notification", "places", "social", "toggle"],
            generateMaterialIconsSVG = function() {
                return new Promise(async function(n) {
                    var u = _createElement("svg:svg");
                    u.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = materialIconsCategories[Symbol.iterator](), A; !(m = (A = _.next())
                                .done); m = !0) {
                            var C = A.value,
                                S = await fetch(materialIconsURL + "/svg-sprite-" + C + "-symbol.svg"),
                                E = await S.text(),
                                L = _svg4(_templateObject, E)
                                .querySelector("svg"),
                                D = _createElement("svg:g");
                            D.setAttribute("data-category", C), u.append(D);
                            for (var R = [].concat(_toConsumableArray(L.children)), P = 0, B; P < R.length; P++)
                                if (B = R[P], "symbol" === B.localName) {
                                    var M = B;
                                    M.id = M.id.substring(3, M.id.length - 5), M.id = _replaceAll(M.id, "_", "-"), "3d-rotation" === M.id && (M.id = "rotate-3d"), D.append(M)
                                }
                        }
                    } catch (O) {
                        w = !0, k = O
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    var I = u.outerHTML,
                        T = new Blob([I], {
                            type: "text/plain;charset=utf-8"
                        }),
                        N = URL.createObjectURL(T);
                    window.open(N), n(I)
                })
            };
        Xel.utils.icon = {
            generateMaterialIconsSVG: generateMaterialIconsSVG
        }
    } {
        var sleep = function(n) {
                return new Promise(function(u) {
                    setTimeout(function() {
                        return u()
                    }, n)
                })
            },
            getTimeStamp = function() {
                return Date.now()
            },
            throttle = function(n) {
                var u = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 500,
                    m = arguments[2],
                    w = null,
                    k = null,
                    _ = null,
                    A = 0,
                    C = function() {
                        A = new Date, k = null, _ = n.apply(m, w)
                    };
                return function() {
                    for (var L = arguments.length, D = Array(L), R = 0; R < L; R++) D[R] = arguments[R];
                    var P = new Date,
                        B = u - (P - A);
                    return w = D, 0 >= B ? (clearTimeout(k), k = null, A = P, _ = n.apply(m, w)) : !k && (k = setTimeout(C, B)), _
                }
            },
            debounce = function(n, u, m) {
                var w = 3 < arguments.length && arguments[3] !== void 0 && arguments[3],
                    k = null,
                    _ = null;
                return function() {
                    for (var S = arguments.length, E = Array(S), L = 0; L < S; L++) E[L] = arguments[L];
                    var R = w && !k;
                    return clearTimeout(k), k = setTimeout(function() {
                        k = null, w || (_ = n.apply(m, E))
                    }, u), R && (_ = n.apply(m, E)), _
                }
            };
        Xel.utils.time = {
            sleep: sleep,
            getTimeStamp: getTimeStamp,
            throttle: throttle,
            debounce: debounce
        }
    } {
        var _Xel$utils$math = Xel.utils.math,
            _normalize = _Xel$utils$math.normalize,
            _round = _Xel$utils$math.round,
            min = _Mathmin,
            _max = _Mathmax,
            floor = Math.floor,
            _parseFloat2 = _NumberparseFloat,
            _parseInt = _NumberparseInt,
            namedColors = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            },
            rgbToHsl = function(n, u, m) {
                n /= 255, u /= 255, m /= 255;
                var w = _max(n, u, m),
                    k = min(n, u, m),
                    _, A, C;
                if (_ = A = C = (w + k) / 2, w === k) _ = A = 0;
                else {
                    var S = w - k;
                    if (A = 0.5 < C ? S / (2 - w - k) : S / (w + k), w === n) {
                        var E;
                        E = u < m ? 6 : 0, _ = (u - m) / S + E
                    } else w === u ? _ = (m - n) / S + 2 : w === m && (_ = (n - u) / S + 4)
                }
                return _ = _normalize(360 * (_ / 6), 0, 360, 0), A = _normalize(100 * A, 0, 100, 1), C = _normalize(100 * C, 0, 100, 1), [_, A, C]
            },
            hslToRgb = function(n, u, m) {
                n /= 360, u /= 100, m /= 100;
                var w, k, _;
                if (0 === u) w = k = _ = m;
                else {
                    var A = function(L, D, R) {
                            return 0 > R && (R += 1), 1 < R && (R -= 1), R < 1 / 6 ? L + 6 * (D - L) * R : R < 1 / 2 ? D : R < 2 / 3 ? L + 6 * ((D - L) * (2 / 3 - R)) : L
                        },
                        C, S;
                    C = 0.5 > m ? m * (1 + u) : m + u - m * u, S = 2 * m - C, w = A(S, C, n + 1 / 3), k = A(S, C, n), _ = A(S, C, n - 1 / 3)
                }
                return w = _normalize(255 * w, 0, 255, 0), k = _normalize(255 * k, 0, 255, 0), _ = _normalize(255 * _, 0, 255, 0), [w, k, _]
            },
            rgbToHsv = function(n, u, m) {
                n /= 255, u /= 255, m /= 255;
                var w = _max(n, u, m),
                    k = min(n, u, m),
                    _ = 0,
                    A = 0,
                    C = w,
                    S = w - k;
                return A = 0 === w ? 0 : S / w, w === k ? _ = 0 : (w === n ? _ = (u - m) / S + (u < m ? 6 : 0) : w === u ? _ = (m - n) / S + 2 : w === m && (_ = (n - u) / S + 4), _ /= 6), _ *= 360, A *= 100, C *= 100, [_, A, C]
            },
            hsvToRgb = function(n, u, m) {
                n /= 360, u /= 100, m /= 100;
                var w = floor(6 * n),
                    k = 6 * n - w,
                    _ = m * (1 - u),
                    A = m * (1 - k * u),
                    C = m * (1 - (1 - k) * u),
                    S = 0,
                    E = 0,
                    L = 0;
                return 0 == w % 6 ? (S = m, E = C, L = _) : 1 == w % 6 ? (S = A, E = m, L = _) : 2 == w % 6 ? (S = _, E = m, L = C) : 3 == w % 6 ? (S = _, E = A, L = m) : 4 == w % 6 ? (S = C, E = _, L = m) : 5 == w % 6 && (S = m, E = _, L = A), S *= 255, E *= 255, L *= 255, [S, E, L]
            },
            hslToHsv = function(n, u, m) {
                n /= 360, u /= 100, m = 2 * (m / 100), u *= 1 >= m ? m : 2 - m;
                var w = n,
                    k, _;
                return k = 0 === m + u ? 0 : 2 * u / (m + u), _ = (m + u) / 2, w = 360 * w, k = 100 * _max(0, min(1, k)), _ = 100 * _max(0, min(1, _)), [w, k, _]
            },
            hsvToHsl = function(n, u, m) {
                n /= 360, u /= 100, m /= 100;
                var w = n,
                    k = (2 - u) * m,
                    _ = u * m;
                return 1 >= k ? 0 == k ? _ = 0 : _ /= k : 2 == k ? _ = 0 : _ /= 2 - k, k /= 2, w = 360 * w, _ = 100 * _max(0, min(1, _)), k = 100 * _max(0, min(1, k)), [w, _, k]
            },
            parseColor = function(n) {
                var u = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "rgba";
                n = n.trim();
                var m = tokenizeColor(n),
                    w = null,
                    k = null;
                if (7 === m.length && "rgb(" === m[0].text && "NUM" === m[1].type && "," === m[2].text && "NUM" === m[3].type && "," === m[4].text && "NUM" === m[5].type && ")" === m[6].text) w = [_parseFloat2(m[1].text), _parseFloat2(m[3].text), _parseFloat2(m[5].text), 1];
                else if (7 === m.length && "rgb(" === m[0].text && "PERCENTAGE" === m[1].type && "," === m[2].text && "PERCENTAGE" === m[3].type && "," === m[4].text && "PERCENTAGE" === m[5].type && ")" === m[6].text) w = [255 * (_parseFloat2(m[1].text) / 100), 255 * (_parseFloat2(m[3].text) / 100), 255 * (_parseFloat2(m[5].text) / 100), 1];
                else if (9 === m.length && "rgba(" === m[0].text && "NUM" === m[1].type && "," === m[2].text && "NUM" === m[3].type && "," === m[4].text && "NUM" === m[5].type && "," === m[6].text && "NUM" === m[7].type && ")" === m[8].text) w = [_parseFloat2(m[1].text), _parseFloat2(m[3].text), _parseFloat2(m[5].text), _parseFloat2(m[7].text)];
                else if (9 === m.length && "rgb(" === m[0].text && "PERCENTAGE" === m[1].type && "," === m[2].text && "PERCENTAGE" === m[3].type && "," === m[4].text && "PERCENTAGE" === m[5].type && "," === m[6].text && "NUM" === m[7].type && ")" === m[8].text) w = [255 * (_parseFloat2(m[1].text) / 100), 255 * (_parseFloat2(m[3].text) / 100), 255 * (_parseFloat2(m[5].text) / 100), _parseFloat2(m[7].text)];
                else if (7 === m.length && "hsl(" === m[0].text && "NUM" === m[1].type && "," === m[2].text && "PERCENTAGE" === m[3].type && "," === m[4].text && "PERCENTAGE" === m[5].type && ")" === m[6].text) k = [_parseFloat2(m[1].text), _parseFloat2(m[3].text), _parseFloat2(m[5].text), 1];
                else if (9 === m.length && "hsla(" === m[0].text && "NUM" === m[1].type && "," === m[2].text && "PERCENTAGE" === m[3].type && "," === m[4].text && "PERCENTAGE" === m[5].type && "," === m[6].text && "NUM" === m[7].type && ")" === m[8].text) k = [_parseFloat2(m[1].text), _parseFloat2(m[3].text), _parseFloat2(m[5].text), _parseFloat2(m[7].text)];
                else if ("HEX" === m[0].type && m[1] === void 0) {
                    var _ = m[0].text.substring(1),
                        A, C, S;
                    3 === _.length ? (A = _[0] + _[0], C = _[1] + _[1], S = _[2] + _[2]) : (A = _[0] + _[1], C = _[2] + _[3], S = _[4] + _[5]), w = [_parseInt(A, 16), _parseInt(C, 16), _parseInt(S, 16), 1]
                } else namedColors[n] && (w = [namedColors[n][0], namedColors[n][1], namedColors[n][2], 1]);
                if (w) {
                    var E = w,
                        L = _slicedToArray(E, 4),
                        D = L[0],
                        R = L[1],
                        P = L[2],
                        B = L[3];
                    if (D = _normalize(D, 0, 255, 0), R = _normalize(R, 0, 255, 0), P = _normalize(P, 0, 255, 0), B = _normalize(B, 0, 1, 2), "hsla" === u) {
                        var M = rgbToHsl(D, R, P),
                            I = _slicedToArray(M, 3),
                            T = I[0],
                            N = I[1],
                            O = I[2];
                        return [T, N, O, B]
                    }
                    if ("hsva" === u) {
                        var V = rgbToHsv(D, R, P),
                            F = _slicedToArray(V, 3),
                            H = F[0],
                            K = F[1],
                            W = F[2];
                        return [H, K, W, B]
                    }
                    return [D, R, P, B]
                }
                if (k) {
                    var X = k,
                        U = _slicedToArray(X, 4),
                        Z = U[0],
                        Y = U[1],
                        G = U[2],
                        $ = U[3];
                    if (Z = _normalize(Z, 0, 360, 0), Y = _normalize(Y, 0, 100, 1), G = _normalize(G, 0, 100, 1), $ = _normalize($, 0, 1, 2), "hsla" === u) return [Z, Y, G, $];
                    if ("hsva" === u) {
                        var Q = hslToHsv(Z, Y, G),
                            J = _slicedToArray(Q, 3),
                            ee = J[0],
                            te = J[1],
                            ie = J[2];
                        return [ee, te, ie, $]
                    }
                    var oe = hslToRgb(Z, Y, G),
                        ne = _slicedToArray(oe, 3),
                        re = ne[0],
                        ae = ne[1],
                        le = ne[2];
                    return [re, ae, le, $]
                }
                throw new Error("Invalid color string: \"" + n + "\"")
            },
            serializeColor = function(n) {
                var u = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "rgba",
                    m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : "hex",
                    w = null;
                if (["rgb", "rgba", "rgb%", "rgba%", "hex"].includes(m)) {
                    var k, _, A, C;
                    if ("rgba" === u) {
                        var S = _slicedToArray(n, 4);
                        k = S[0], _ = S[1], A = S[2], C = S[3]
                    } else if ("hsla" === u) {
                        var E = hslToRgb.apply(void 0, _toConsumableArray(n)),
                            L = _slicedToArray(E, 3);
                        k = L[0], _ = L[1], A = L[2], C = n[3]
                    } else if ("hsva" === u) {
                        var D = hsvToRgb.apply(void 0, _toConsumableArray(n)),
                            R = _slicedToArray(D, 3);
                        k = R[0], _ = R[1], A = R[2], C = n[3]
                    }
                    if ("rgb%" === m || "rgba%" === m ? (k = _normalize(100 * (k / 255), 0, 100, 1), _ = _normalize(100 * (_ / 255), 0, 100, 1), A = _normalize(100 * (A / 255), 0, 100, 1), C = _normalize(C, 0, 1, 2)) : (k = _normalize(k, 0, 255, 0), _ = _normalize(_, 0, 255, 0), A = _normalize(A, 0, 255, 0), C = _normalize(C, 0, 1, 2)), "rgb" === m) w = "rgb(" + k + ", " + _ + ", " + A + ")";
                    else if ("rgba" === m) w = "rgba(" + k + ", " + _ + ", " + A + ", " + C + ")";
                    else if ("rgb%" === m) w = "rgb(" + k + "%, " + _ + "%, " + A + "%)";
                    else if ("rgba%" === m) w = "rgb(" + k + "%, " + _ + "%, " + A + "%, " + C + ")";
                    else if ("hex" === m) {
                        var P = k.toString(16),
                            B = _.toString(16),
                            M = A.toString(16);
                        1 === P.length && (P = "0" + P), 1 === B.length && (B = "0" + B), 1 === M.length && (M = "0" + M), w = "#" + P + B + M
                    }
                } else if ("hsl" === m || "hsla" === m) {
                    var I, T, N, O;
                    if ("hsla" === u) {
                        var V = _slicedToArray(n, 4);
                        I = V[0], T = V[1], N = V[2], O = V[3]
                    } else if ("hsva" === u) {
                        var F = hsvToHsl.apply(void 0, _toConsumableArray(n)),
                            H = _slicedToArray(F, 3);
                        I = H[0], T = H[1], N = H[2], O = n[3]
                    } else if ("rgba" === u) {
                        var K = rgbToHsl.apply(void 0, _toConsumableArray(n)),
                            W = _slicedToArray(K, 3);
                        I = W[0], T = W[1], N = W[2], O = n[3]
                    }
                    I = _normalize(I, 0, 360, 0), T = _normalize(T, 0, 100, 1), N = _normalize(N, 0, 100, 1), O = _normalize(O, 0, 1, 2), "hsl" === m ? w = "hsl(" + I + ", " + T + "%, " + N + "%)" : "hsla" === m && (w = "hsla(" + I + ", " + T + "%, " + N + "%, " + O + ")")
                }
                return w
            },
            tokenizeColor = function(n) {
                for (var u = Xel.classes.StringScanner, m = [], w = new u(n.toLowerCase()), k = function() {
                        var A = w.read();
                        (function() {
                            if ("r" === A || "h" === A) {
                                var C = A;
                                if ("rgb(" === A + w.peek(3) ? C += w.read(3) : "rgba(" === A + w.peek(4) ? C += w.read(4) : "hsl(" === A + w.peek(3) ? C += w.read(3) : "hsla(" === A + w.peek(4) && (C += w.read(4)), C !== A) return void m.push({
                                    type: "FUNCTION",
                                    text: C
                                })
                            }
                            if ("#" === A) {
                                if (isHexColorString(A + w.peek(6))) {
                                    var S = A + w.read(6);
                                    return void m.push({
                                        type: "HEX",
                                        text: S
                                    })
                                }
                                if (isHexColorString(A + w.peek(3))) return text = A + w.read(3), void m.push({
                                    type: "HEX",
                                    text: text
                                })
                            }
                            if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-"].includes(A)) {
                                for (var E = A;
                                    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(w.peek());) E += w.read();
                                return void("%" === w.peek() ? (E += w.read(), m.push({
                                    type: "PERCENTAGE",
                                    text: E
                                })) : m.push({
                                    type: "NUM",
                                    text: E
                                }))
                            }
                            /\u0009|\u000a|\u000c|\u000d|\u0020/.test(A) || m.push({
                                type: "CHAR",
                                text: A
                            })
                        })()
                    }; null !== w.peek();) k();
                return m
            },
            formatColorString = function(n, u) {
                var m = u.startsWith("hsl") ? "hsla" : "rgba",
                    w = parseColor(n, m),
                    k = serializeColor(w, m, u);
                return k
            },
            isHexColorString = function(n) {
                if (n = n.toLowerCase(), "#" !== n[0]) return !1;
                if (4 !== n.length && 7 !== n.length) return !1;
                n = n.substring(1);
                var u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
                    m = !0,
                    w = !1,
                    k;
                try {
                    for (var _ = n[Symbol.iterator](), A, C; !(m = (A = _.next())
                            .done); m = !0)
                        if (C = A.value, !u.includes(C)) return !1
                } catch (S) {
                    w = !0, k = S
                } finally {
                    try {
                        !m && _.return && _.return()
                    } finally {
                        if (w) throw k
                    }
                }
                return !0
            },
            isValidColorString = function(n) {
                try {
                    parseColor(n)
                } catch (u) {
                    return !1
                }
                return !0
            },
            generateWheelSpectrumImage = function(n) {
                var u = document.createElement("canvas"),
                    m = u.getContext("2d"),
                    w = m.createImageData(n, n),
                    k = w.data,
                    _ = n / 2,
                    A = 0;
                u.width = n, u.height = n;
                for (var C = 0; C < n; C++)
                    for (var S = 0; S < n; S++) {
                        var E = S - _,
                            L = C - _,
                            D = pow(E, 2) + pow(L, 2),
                            R = 360 * ((atan2(L, E) + PI) / (2 * PI)),
                            P = 100 * (sqrt(D) / _),
                            B = hsvToRgb(R, P, 100),
                            M = _slicedToArray(B, 3),
                            I = M[0],
                            T = M[1],
                            N = M[2],
                            O = D > pow(_, 2) ? 0 : 255;
                        k[A++] = I, k[A++] = T, k[A++] = N, k[A++] = O
                    }
                m.putImageData(w, 0, 0), window.open(u.toDataURL("image/png"))
            };
        Xel.utils.color = {
            rgbToHsl: rgbToHsl,
            hslToRgb: hslToRgb,
            rgbToHsv: rgbToHsv,
            hsvToRgb: hsvToRgb,
            hslToHsv: hslToHsv,
            hsvToHsl: hsvToHsl,
            parseColor: parseColor,
            serializeColor: serializeColor,
            formatColorString: formatColorString,
            isHexColorString: isHexColorString,
            isValidColorString: isValidColorString,
            generateWheelSpectrumImage: generateWheelSpectrumImage
        }
    } {
        var _parseColor = Xel.utils.color.parseColor,
            _html = Xel.utils.element.html,
            _capitalize = Xel.utils.string.capitalize,
            _sleep = Xel.utils.time.sleep,
            theme = document.querySelector("link[href*=\".theme.css\"]")
            .getAttribute("href"),
            colorSchemesByTheme = {
                galaxy: {
                    blue: "hsl(215, 95%, 63%)",
                    green: "hsl(85, 48%, 45%)",
                    red: "hsl(345, 55%, 48%)",
                    purple: "hsl(290, 40%, 55%)",
                    orange: "hsl(20, 55%, 52%)",
                    yellowgreen: "hsl(68, 55%, 40%)"
                },
                macos: {
                    blue: "hsl(211, 96.7%, 52.9%)",
                    green: "hsl(88, 35%, 46%)",
                    red: "hsl(344, 65%, 45%)",
                    purple: "hsl(290, 40%, 46%)",
                    yellowgreen: "hsl(61, 28%, 45%)"
                },
                material: {},
                vanilla: {
                    blue: "hsl(211, 86%, 57%)",
                    green: "hsl(88, 35%, 46%)",
                    red: "hsl(344, 65%, 45%)",
                    purple: "hsl(290, 40%, 46%)",
                    yellowgreen: "hsl(61, 28%, 45%)"
                }
            },
            shadowTemplate = _html(_templateObject2, theme),
            XelAppElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(shadowTemplate.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return window.addEventListener("load", function() {
                        return u._onWindowLoad()
                    }), window.addEventListener("popstate", function(S) {
                        return u._onPopState(S)
                    }), window.addEventListener("beforeunload", function(S) {
                        return u._onWindowUnload(S)
                    }), u._shadowRoot.addEventListener("click", function(S) {
                        return u._onShadowRootClick(S)
                    }), u["#hide-sidebar-button"].addEventListener("click", function(S) {
                        return u._onHideNavButtonClick(S)
                    }), u["#show-sidebar-button"].addEventListener("click", function(S) {
                        return u._onShowNavButtonClick(S)
                    }), u["#theme-select"].addEventListener("change", function() {
                        return u._onThemeSelectChange()
                    }), u["#accent-color-select"].addEventListener("change", function() {
                        return u._onAccentColorSelectChange()
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        history.scrollRestoration = "manual", null === history.state && history.replaceState(null, null, window.location.href), this._updateNavButtons(), this._updateViews(), this._updateThemeSection(), this._applyAccentColor()
                    }
                }, {
                    key: "_onThemeSelectChange",
                    value: async function() {
                        sessionStorage.setItem("theme", this["#theme-select"].value), await _sleep(800), location.reload()
                    }
                }, {
                    key: "_onAccentColorSelectChange",
                    value: function() {
                        sessionStorage.setItem("accentColorName", this["#accent-color-select"].value), this._applyAccentColor()
                    }
                }, {
                    key: "_onWindowLoad",
                    value: function() {
                        var m = this,
                            w = parseInt(sessionStorage.getItem("selectedViewScrollTop") || "0"),
                            k = this["#views"].querySelector(".view[selected]");
                        k ? k.scrollTop = w : _sleep(100)
                            .then(function() {
                                k = m["#views"].querySelector(".view[selected]"), k.scrollTop = w
                            })
                    }
                }, {
                    key: "_onWindowUnload",
                    value: function() {
                        var w = this["#views"].querySelector(".view[selected]");
                        sessionStorage.setItem("selectedViewScrollTop", w.scrollTop)
                    }
                }, {
                    key: "_onPopState",
                    value: function() {
                        this._updateNavButtons(), this._updateViews()
                    }
                }, {
                    key: "_onShadowRootClick",
                    value: function(m) {
                        var w = m.ctrlKey,
                            k = m.shiftKey,
                            _ = m.metaKey,
                            A = m.target;
                        if (!1 === w && !1 === k && !1 === _) {
                            var C = A.closest("a");
                            if (C) {
                                var S = new URL(C.href);
                                location.origin === S.origin && (m.preventDefault(), location.pathname !== S.pathname && (history.pushState(null, null, C.href), this._updateNavButtons(), this._updateViews()))
                            }
                        }
                    }
                }, {
                    key: "_onHideNavButtonClick",
                    value: function(m) {
                        0 === m.button && this._hideSidebar()
                    }
                }, {
                    key: "_onShowNavButtonClick",
                    value: function(m) {
                        0 === m.button && this._showSidebar()
                    }
                }, {
                    key: "_showSidebar",
                    value: function() {
                        var m = this;
                        return new Promise(async function() {
                            m["#sidebar"].hidden = !1;
                            var k = getComputedStyle(m["#sidebar"]),
                                _ = k.width,
                                A = k.height,
                                C = k.marginLeft,
                                S = "0px" === C && "auto" !== _ ? "-" + _ : C,
                                L = m["#sidebar"].animate({
                                    marginLeft: [S, "0px"]
                                }, {
                                    duration: 250,
                                    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
                                });
                            m["#sidebar"].style.marginLeft = "0", m._currentAnimation = L
                        })
                    }
                }, {
                    key: "_hideSidebar",
                    value: function() {
                        var m = this;
                        return new Promise(async function() {
                            m["#sidebar"].hidden = !1;
                            var k = getComputedStyle(m["#sidebar"]),
                                _ = k.width,
                                A = k.height,
                                C = k.marginLeft,
                                S = "0px" === C && "auto" !== _ ? "0px" : C,
                                E = "-" + _,
                                L = m["#sidebar"].animate({
                                    marginLeft: [S, E]
                                }, {
                                    duration: 250,
                                    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
                                });
                            m["#sidebar"].style.marginLeft = E, m._currentAnimation = L, await L.finished, m._currentAnimation === L && (m["#sidebar"].hidden = !0)
                        })
                    }
                }, {
                    key: "_applyAccentColor",
                    value: function() {
                        var m = sessionStorage.getItem("accentColorName");
                        if (null !== m) {
                            var w = document.querySelector("link[href*=\".theme.css\"]")
                                .getAttribute("href"),
                                k = w.substring(w.lastIndexOf("/") + 1, w.length - 10),
                                _ = colorSchemesByTheme[k][m];
                            if (!_) {
                                var A = Object.keys(colorSchemesByTheme[k]);
                                0 < A.length && (_ = colorSchemesByTheme[k][A[0]])
                            }
                            if (_) {
                                var C = _parseColor(_, "hsla"),
                                    S = _slicedToArray(C, 3),
                                    E = S[0],
                                    L = S[1],
                                    D = S[2];
                                document.body.style.setProperty("--accent-color-h", E), document.body.style.setProperty("--accent-color-s", L + "%"), document.body.style.setProperty("--accent-color-l", D + "%")
                            }
                        }
                    }
                }, {
                    key: "_updateNavButtons",
                    value: function() {
                        var m = !0,
                            w = !1,
                            k;
                        try {
                            for (var _ = this["#nav"].querySelectorAll("x-button")[Symbol.iterator](), A; !(m = (A = _.next())
                                    .done); m = !0) {
                                var C = A.value,
                                    S = C.closest("a");
                                if (S) {
                                    var E = new URL(S);
                                    E.origin === location.origin && E.pathname === location.pathname ? C.setAttribute("toggled", "") : C.removeAttribute("toggled")
                                }
                            }
                        } catch (L) {
                            w = !0, k = L
                        } finally {
                            try {
                                !m && _.return && _.return()
                            } finally {
                                if (w) throw k
                            }
                        }
                    }
                }, {
                    key: "_updateViews",
                    value: async function() {
                        var m = this["#views"].querySelector(".view[selected]");
                        if (!m || m.dataset.pathname !== location.pathname) {
                            var w = this["#views"].querySelector("[data-pathname=\"" + location.pathname + "\"]");
                            if (!w) {
                                var k = "/" === location.pathname ? "/about" : location.pathname,
                                    A = await fetch("/node_modules/xel/docs" + k + ".html"),
                                    C = await A.text();
                                w = _html(_templateObject, C), w.setAttribute("data-pathname", location.pathname), this["#views"].append(w)
                            }
                            document.querySelector("title")
                                .textContent = "/" === location.pathname ? "Xel" : "Xel - " + w.querySelector("h2")
                                .textContent; {
                                var S = this["#views"].querySelector("[data-pathname=\"" + location.pathname + "\"]"),
                                    E = this["#views"].querySelector(".view[selected]");
                                if (E) {
                                    if (E === S) return;
                                    E.removeAttribute("selected")
                                }
                                S.setAttribute("selected", "")
                            } {
                                var L = document.querySelector("link[href*=\".theme.css\"]")
                                    .getAttribute("href"),
                                    D = L.substring(L.lastIndexOf("/") + 1, L.length - 10),
                                    R = !0,
                                    P = !1,
                                    B;
                                try {
                                    for (var M = w.querySelectorAll("section")[Symbol.iterator](), I, T; !(R = (I = M.next())
                                            .done); R = !0) T = I.value, T.hasAttribute("data-themes") && !1 === T.getAttribute("data-themes")
                                        .includes(D) && (T.hidden = !0)
                                } catch (K) {
                                    P = !0, B = K
                                } finally {
                                    try {
                                        !R && M.return && M.return()
                                    } finally {
                                        if (P) throw B
                                    }
                                }
                                var N = w.querySelectorAll("section:not([hidden])");
                                if (0 < N.length) {
                                    var O = N[N.length - 1];
                                    O.setAttribute("data-last-visible", "")
                                }
                            }
                            for (var V = [].concat(_toConsumableArray(this["#views"].children)), F = 0, H; F < V.length; F++) H = V[F], !1 === H.hasAttribute("animating") && !1 === H.hasAttribute("selected") && H.remove()
                        }
                    }
                }, {
                    key: "_updateThemeSection",
                    value: function() {
                        var m = document.querySelector("link[href*=\".theme.css\"]")
                            .getAttribute("href"),
                            w = m.substring(m.lastIndexOf("/") + 1, m.length - 10); {
                            var k = !0,
                                _ = !1,
                                A;
                            try {
                                for (var C = this["#theme-select"].querySelectorAll("x-menuitem")[Symbol.iterator](), S, E; !(k = (S = C.next())
                                        .done); k = !0) E = S.value, E.setAttribute("selected", E.getAttribute("value") === w ? "true" : "false")
                            } catch (Z) {
                                _ = !0, A = Z
                            } finally {
                                try {
                                    !k && C.return && C.return()
                                } finally {
                                    if (_) throw A
                                }
                            }
                        }
                        if ("material" === w) this["#accent-color-subsection"].hidden = !0;
                        else {
                            var L = sessionStorage.getItem("accentColorName"),
                                D = Object.keys(colorSchemesByTheme[w]),
                                R = "",
                                P = !0,
                                B = !1,
                                M;
                            try {
                                for (var I = Object.entries(colorSchemesByTheme[w])[Symbol.iterator](), T; !(P = (T = I.next())
                                        .done); P = !0) {
                                    var N = _slicedToArray(T.value, 2),
                                        O = N[0],
                                        V = N[1];
                                    R += "\n              <x-menuitem value=\"" + O + "\" selected=\"true\">\n                <x-swatch value=\"" + V + "\"><\/x-swatch>\n                <x-label>" + _capitalize(O) + "<\/x-label>\n              <\/x-menuitem>\n            "
                                }
                            } catch (Z) {
                                B = !0, M = Z
                            } finally {
                                try {
                                    !P && I.return && I.return()
                                } finally {
                                    if (B) throw M
                                }
                            }
                            this["#accent-color-menu"].innerHTML = R, null === L && 0 < D.length && (L = D[0], sessionStorage.setItem("accentColorName", L)), !1 === D.includes(L) && (0 < D.length ? (L = D[0], sessionStorage.setItem("accentColorName", L)) : L = null);
                            var F = !0,
                                H = !1,
                                K;
                            try {
                                for (var W = this["#accent-color-select"].querySelectorAll("x-menuitem")[Symbol.iterator](), X, U; !(F = (X = W.next())
                                        .done); F = !0) U = X.value, U.setAttribute("selected", U.getAttribute("value") === L ? "true" : "false")
                            } catch (Z) {
                                H = !0, K = Z
                            } finally {
                                try {
                                    !F && W.return && W.return()
                                } finally {
                                    if (H) throw K
                                }
                            }
                            this["#accent-color-subsection"].hidden = !1
                        }
                    }
                }]), n
            }(_CustomElement);
        customElements.define("xel-app", XelAppElement)
    } {
        var _html2 = Xel.utils.element.html,
            _shadowTemplate = _html2(_templateObject3),
            XelCodeViewElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate.content, !0)), u._value = "", u._observer = new MutationObserver(function() {
                        return u._update()
                    }), u._observer.observe(u, {
                        childList: !0,
                        attributes: !1,
                        characterData: !0,
                        subtree: !0
                    });
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        var m = document.querySelector("link[href*=\".theme.css\"]")
                            .getAttribute("href"),
                            w = m.endsWith("galaxy.theme.css") ? "tomorrow" : "coy";
                        this["#prism-theme"].setAttribute("href", "node_modules/prismjs/themes/prism-" + w + ".css"), this._update()
                    }
                }, {
                    key: "_update",
                    value: function() {
                        this["#code"].textContent = this.textContent, "" !== this["#code"].textContent && Prism.highlightElement(this["#code"], !0)
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._value
                    },
                    set: function(m) {
                        this._value = m
                    }
                }]), n
            }(_CustomElement);
        customElements.define("xel-codeview", XelCodeViewElement)
    } {
        var _html3 = Xel.utils.element.html,
            _Xel$utils$string = Xel.utils.string,
            _isDOMWhitespace = _Xel$utils$string.isDOMWhitespace,
            _replaceAll2 = _Xel$utils$string.replaceAll,
            _theme3 = document.querySelector("link[href*=\".theme.css\"]")
            .getAttribute("href"),
            counter = 0,
            _shadowTemplate2 = _html3(_templateObject4, _theme3),
            XelDemoElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate2.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), _createClass(n, null, [{
                    key: "observedAttributes",
                    get: function() {
                        return ["name"]
                    }
                }]), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this["#code-view"].textContent = this._getDemoHTML()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "name" === m && this._update()
                    }
                }, {
                    key: "_getDemoHTML",
                    value: function() {
                        var m = document.createElement("div"),
                            w = this.querySelector("template");
                        if (!w) return "";
                        var k = document.importNode(w.content, !0); {
                            var _ = k.cloneNode(!0);
                            window["shadowRoot" + counter] = this["#live-view"];
                            var A = _.querySelector("script");
                            if (A) {
                                var C = _replaceAll2(A.textContent, "document", "window.shadowRoot" + counter);
                                C = "{" + C + "}", A.textContent = C
                            }
                            counter += 1, this["#live-view"].append(_)
                        }
                        var S = !0,
                            E = !1,
                            L;
                        try {
                            for (var D = k.childNodes[Symbol.iterator](), R, P; !(S = (R = D.next())
                                    .done); S = !0) P = R.value, m.append(P.cloneNode(!0))
                        } catch (de) {
                            E = !0, L = de
                        } finally {
                            try {
                                !S && D.return && D.return()
                            } finally {
                                if (E) throw L
                            }
                        }
                        var B = !0,
                            M = !1,
                            I;
                        try {
                            for (var T = m.querySelectorAll("*")[Symbol.iterator](), N, O; !(B = (N = T.next())
                                    .done); B = !0)
                                if (O = N.value, O.localName.startsWith("x-"))
                                    for (var V = [].concat(_toConsumableArray(O.attributes)), F = 0; F < V.length; F++) {
                                        var H = V[F],
                                            K = H.name,
                                            W = H.value;
                                        ("tabindex" === K || "role" === K || K.startsWith("aria")) && O.removeAttribute(K)
                                    }
                        } catch (de) {
                            M = !0, I = de
                        } finally {
                            try {
                                !B && T.return && T.return()
                            } finally {
                                if (M) throw I
                            }
                        }
                        var X = m.innerHTML;
                        X = _replaceAll2(X, "=\"\"", ""), X = _replaceAll2(X, "demo", "document");
                        var U = X.split("\n");
                        _isDOMWhitespace(U[0]) && U.shift(), _isDOMWhitespace(U[U.length - 1]) && U.pop(); {
                            var Z = Infinity,
                                Y = !0,
                                G = !1,
                                $;
                            try {
                                for (var Q = U[Symbol.iterator](), J, ee; !(Y = (J = Q.next())
                                        .done); Y = !0)
                                    if (ee = J.value, !1 === _isDOMWhitespace(ee)) {
                                        var te = 0,
                                            ie = !0,
                                            oe = !1,
                                            ne = void 0;
                                        try {
                                            for (var re = ee[Symbol.iterator](), ae, le; !(ie = (ae = re.next())
                                                    .done) && (le = ae.value, " " === le); ie = !0) te += 1
                                        } catch (de) {
                                            oe = !0, ne = de
                                        } finally {
                                            try {
                                                !ie && re.return && re.return()
                                            } finally {
                                                if (oe) throw ne
                                            }
                                        }
                                        te < Z && (Z = te)
                                    }
                            } catch (de) {
                                G = !0, $ = de
                            } finally {
                                try {
                                    !Y && Q.return && Q.return()
                                } finally {
                                    if (G) throw $
                                }
                            }
                            U = U.map(function(de) {
                                return de.substring(Z)
                            })
                        }
                        var se = U.join("\n");
                        return se
                    }
                }, {
                    key: "compact",
                    get: function() {
                        return this.hasAttribute("compact")
                    },
                    set: function(m) {
                        m ? this.setAttribute("compact", "") : this.removeAttribute("compact")
                    }
                }]), n
            }(_CustomElement);
        customElements.define("xel-demo", XelDemoElement)
    } {
        var _Xel$utils$element2 = Xel.utils.element,
            _html4 = _Xel$utils$element2.html,
            _svg5 = _Xel$utils$element2.svg,
            _shadowTemplate3 = _html4(_templateObject5),
            XIconElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate3.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "attributeChangedCallback",
                    value: function(m, w, k) {
                        w === k || ("name" === m ? this._update() : "iconset" === m && this._update())
                    }
                }, {
                    key: "_update",
                    value: async function() {
                        if ("" === this.name) this["#svg"].innerHTML = "";
                        else if (this.iconset.startsWith("http") && new URL(this.iconset)
                            .origin !== window.location.origin) {
                            var m = await this._getSymbol(this.name, this.iconset);
                            m && (this["#svg"].innerHTML = m.outerHTML + "<use href=\"#" + this.name + "\" width=\"100%\" height=\"100%\"><\/use>")
                        } else {
                            var w = this.iconset + "#" + this.name;
                            this["#svg"].innerHTML = "<use href=\"" + w + "\" width=\"100%\" height=\"100%\"><\/use>"
                        }
                    }
                }, {
                    key: "_getSymbol",
                    value: function(m, w) {
                        return new Promise(async function(k) {
                            var _ = null,
                                A = n._cache || [];
                            if (n._cache || (n._cache = A), A[w]) _ = A[w];
                            else {
                                var C;
                                try {
                                    C = await fetch(w)
                                } catch (L) {
                                    C = null
                                }
                                if (C && C.ok) try {
                                    var S = await C.text();
                                    _ = _svg5(_templateObject, S), A[w] = _
                                } catch (L) {}
                            }
                            if (_) {
                                var E = _.querySelector("#" + m);
                                E && k(E)
                            }
                        })
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this.hasAttribute("name") ? this.getAttribute("name") : ""
                    },
                    set: function(m) {
                        this.setAttribute("name", m)
                    }
                }, {
                    key: "iconset",
                    get: function() {
                        return !1 === this.hasAttribute("iconset") || "" === this.getAttribute("iconset")
                            .trim() ? "node_modules/xel/images/icons.svg" : this.getAttribute("iconset")
                    },
                    set: function(m) {
                        this.setAttribute("iconset", m)
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["name", "iconset"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-icon", XIconElement)
    } {
        var _html5 = Xel.utils.element.html,
            _sleep2 = Xel.utils.time.sleep,
            _shadowTemplate4 = _html5(_templateObject6),
            XPopoverElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate4.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.tabIndex = -1
                    }
                }, {
                    key: "open",
                    value: function(m) {
                        var w = this;
                        return new Promise(async function(k) {
                            var _ = getComputedStyle(w),
                                A = _.getPropertyValue("--align")
                                .trim(),
                                C = parseFloat(_.marginTop),
                                S = parseFloat(_.marginBottom),
                                E = parseFloat(_.marginLeft),
                                L = parseFloat(_.marginRight),
                                D = 0,
                                R = 0,
                                P = 5,
                                B = 2;
                            w.style.left = "0px", w.style.top = "0px", w.style.width = null, w.style.height = null, w.setAttribute("opened", ""); {
                                var M = w.getBoundingClientRect();
                                (0 !== M.top || 0 !== M.left) && (D = -M.left, R = -M.top)
                            } {
                                var I = getComputedStyle(w),
                                    T = I.backgroundColor,
                                    N = I.borderColor,
                                    O = I.borderWidth;
                                w["#arrow"].setAttribute("data-align", A), w["#arrow-path"].style.fill = T, w["#arrow-path"].style.stroke = N, w["#arrow-path"].style.strokeWidth = O + "px"
                            }
                            if ("bottom" === A) {
                                var V = m.getBoundingClientRect(),
                                    F = w.getBoundingClientRect(),
                                    H = w["#arrow"].getBoundingClientRect(),
                                    K = parseFloat(getComputedStyle(w)
                                        .borderWidth);
                                if (w.style.top = V.bottom + H.height + B + R + "px", w["#arrow"].style.top = V.bottom + B + K + R + "px", w["#arrow-path"].style.d = "path(\"M 0 100, L 50 0, L 100 100\")", F = w.getBoundingClientRect(), F.bottom + P > window.innerHeight) {
                                    var W = window.innerHeight - F.top - P,
                                        X = parseFloat(getComputedStyle(w)
                                            .minHeight);
                                    W >= X && (w.style.height = W + "px", F = w.getBoundingClientRect())
                                }
                                if (F.bottom + P > window.innerHeight && (w.style.top = V.top - B - H.height - F.height + R + "px", w["#arrow"].style.top = V.top - B - H.height - K + R + "px", w["#arrow-path"].style.d = "path(\"M 0 0, L 50 100, L 100 0\")", F = w.getBoundingClientRect()), 0 > F.top - P) {
                                    var U = V.top - B - H.height - P,
                                        Z = parseFloat(getComputedStyle(w)
                                            .minHeight);
                                    U >= Z && (w.style.top = P + R + "px", w.style.height = U + "px", F = w.getBoundingClientRect())
                                }
                                0 > F.top - P && (w.style.top = V.bottom + H.height + B + R + "px", w["#arrow"].style.top = V.bottom + B + K + R + "px", w["#arrow-path"].style.d = "path(\"M 0 100, L 50 0, L 100 100\")")
                            } else if ("top" === A) {
                                var Y = m.getBoundingClientRect(),
                                    G = w.getBoundingClientRect(),
                                    $ = w["#arrow"].getBoundingClientRect(),
                                    Q = parseFloat(getComputedStyle(w)
                                        .borderWidth);
                                if (w.style.top = Y.top - B - $.height - G.height + R + "px", w["#arrow"].style.top = Y.top - B - $.height - Q + R + "px", w["#arrow-path"].style.d = "path(\"M 0 0, L 50 100, L 100 0\")", G = w.getBoundingClientRect(), 0 > G.top - P) {
                                    var J = Y.top - B - $.height - P,
                                        ee = parseFloat(getComputedStyle(w)
                                            .minHeight);
                                    J >= ee && (w.style.top = P + R + "px", w.style.height = J + "px", G = w.getBoundingClientRect())
                                }
                                if (0 > G.top - P && (w.style.top = Y.bottom + $.height + B + R + "px", w["#arrow"].style.top = Y.bottom + B + Q + R + "px", w["#arrow-path"].style.d = "path(\"M 0 100, L 50 0, L 100 100\")", G = w.getBoundingClientRect()), G.bottom + P > window.innerHeight) {
                                    var te = window.innerHeight - G.top - P,
                                        ie = parseFloat(getComputedStyle(w)
                                            .minHeight);
                                    te >= ie && (w.style.height = te + "px", G = w.getBoundingClientRect())
                                }
                                G.bottom + P > window.innerHeight && (w.style.top = Y.top - B - $.height - G.height + R + "px", w["#arrow"].style.top = Y.top - B - $.height - Q + R + "px", w["#arrow-path"].style.d = "path(\"M 0 0, L 50 100, L 100 0\")", G = w.getBoundingClientRect())
                            } else if ("left" === A) {
                                var oe = m.getBoundingClientRect(),
                                    ne = w.getBoundingClientRect(),
                                    re = w["#arrow"].getBoundingClientRect(),
                                    ae = parseFloat(getComputedStyle(w)
                                        .borderWidth);
                                if (w.style.left = oe.left - B - re.width - ne.width + D + "px", w["#arrow"].style.left = oe.left - re.width - B - ae + D + "px", w["#arrow-path"].style.d = "path(\"M 0 0, L 100 50, L 00 100\")", ne = w.getBoundingClientRect(), 0 > ne.left - P) {
                                    var le = oe.left - B - re.height - P,
                                        se = parseFloat(getComputedStyle(w)
                                            .minWidth);
                                    le >= se && (w.style.left = P + D + "px", w.style.width = le + "px", ne = w.getBoundingClientRect())
                                }
                                if (0 > ne.left - P && (w.style.left = oe.right + re.height + B + D + "px", w["#arrow"].style.top = oe.right + B + ae + D + "px", w["#arrow-path"].style.d = "path(\"M 0 100, L 50 0, L 100 100\")", ne = w.getBoundingClientRect()), ne.right + P > window.innerWidth) {
                                    var de = window.innerWidth - ne.left - P,
                                        ue = parseFloat(getComputedStyle(w)
                                            .minWidth);
                                    de >= ue && (w.style.width = de + "px", ne = w.getBoundingClientRect())
                                }
                                ne.right + P > window.innerWidth && (w.style.left = oe.left - B - re.width - ne.width + D + "px", w["#arrow"].style.elft = oe.left - B - re.width - ae + D + "px", w["#arrow-path"].style.d = "path(\"M 0 0, L 100 50, L 00 100\")", ne = w.getBoundingClientRect())
                            } else if ("right" === A) {
                                var ce = m.getBoundingClientRect(),
                                    pe = w.getBoundingClientRect(),
                                    he = w["#arrow"].getBoundingClientRect(),
                                    be = parseFloat(getComputedStyle(w)
                                        .borderWidth);
                                if (w.style.left = ce.right + he.width + B + D + "px", w["#arrow"].style.left = ce.right + B + be + D + "px", w["#arrow-path"].style.d = "path(\"M 100 0, L 0 50, L 100 100\")", pe = w.getBoundingClientRect(), pe.right + P > window.innerWidth) {
                                    var ge = window.innerWidth - pe.left - P,
                                        me = parseFloat(getComputedStyle(w)
                                            .minWidth);
                                    ge >= me && (w.style.width = ge + "px", pe = w.getBoundingClientRect())
                                }
                                if (pe.right + P > window.innerWidth && (w.style.left = ce.left - B - he.width - pe.width + D + "px", w["#arrow"].style.left = ce.left - B - he.width - be + D + "px", w["#arrow-path"].style.d = "path(\"M 0 0, L 50 100, L 100 0\")", pe = w.getBoundingClientRect()), 0 > pe.left - P) {
                                    var ve = ce.left - B - he.width - P,
                                        xe = parseFloat(getComputedStyle(w)
                                            .minWidth);
                                    ve >= xe && (w.style.left = P + D + "px", w.style.width = ve + "px", pe = w.getBoundingClientRect())
                                }
                                0 > pe.left - P && (w.style.left = ce.right + he.width + B + D + "px", w["#arrow"].style.left = ce.right + B + be + D + "px", w["#arrow-path"].style.d = "path(\"M 100 0, L 0 50, L 100 100\")")
                            }
                            if ("bottom" === A || "top" === A) {
                                var ye = m.getBoundingClientRect(),
                                    fe = w.getBoundingClientRect(),
                                    we = w["#arrow"].getBoundingClientRect();
                                w.style.left = ye.left + ye.width / 2 - fe.width / 2 + D + "px", w["#arrow"].style.left = ye.left + ye.width / 2 + D + "px", fe = w.getBoundingClientRect(), 0 > fe.left - P && (w.style.left = P + D + "px", fe = w.getBoundingClientRect()), fe.right + P > window.innerWidth && (w.style.left = window.innerWidth - P - fe.width + D + "px", fe = w.getBoundingClientRect()), fe.left < P && (w.style.left = P + D + "px", w.style.width = window.innerWidth - P - P + "px")
                            } else if ("left" === A || "right" === A) {
                                var ke = m.getBoundingClientRect(),
                                    Ae = w.getBoundingClientRect();
                                if (w.style.top = ke.top + ke.height / 2 - Ae.height / 2 + R + "px", w["#arrow"].style.top = ke.top + ke.height / 2 + R + C + "px", Ae = w.getBoundingClientRect(), 0 > Ae.top - P && (w.style.top = P + R + C + "px", Ae = w.getBoundingClientRect()), Ae.bottom + P > window.innerHeight) {
                                    var Ce = Ae.bottom + P - window.innerHeight;
                                    w.style.top = Ae.top - Ce + R + "px", Ae = w.getBoundingClientRect()
                                }
                                Ae.top < P && (w.style.top = P + R + "px", w.style.height = window.innerHeight - P - P + "px")
                            } {
                                var Se = getComputedStyle(w)
                                    .getPropertyValue("--open-transition"),
                                    Ee = w._parseTransistion(Se),
                                    Le = _slicedToArray(Ee, 3),
                                    De = Le[0],
                                    Re = Le[1],
                                    Pe = Le[2];
                                "transform" === De && (await w.animate({
                                        transform: ["scale(1, 0)", "scale(1, 1)"],
                                        transformOrigin: ["0 0", "0 0"]
                                    }, {
                                        duration: Re,
                                        easing: Pe
                                    })
                                    .finished)
                            }
                            w.dispatchEvent(new CustomEvent("open", {
                                bubbles: !0,
                                detail: w
                            })), k()
                        })
                    }
                }, {
                    key: "close",
                    value: function() {
                        var m = this;
                        return new Promise(async function(w) {
                            if (m.opened) {
                                m.removeAttribute("opened"), m.setAttribute("animating", ""), m.dispatchEvent(new CustomEvent("close", {
                                    bubbles: !0,
                                    detail: m
                                }));
                                var k = getComputedStyle(m)
                                    .getPropertyValue("--close-transition"),
                                    _ = m._parseTransistion(k),
                                    A = _slicedToArray(_, 3),
                                    C = A[0],
                                    S = A[1],
                                    E = A[2];
                                "opacity" === C && (await m.animate({
                                        opacity: ["1", "0"]
                                    }, {
                                        duration: S,
                                        easing: E
                                    })
                                    .finished), m.removeAttribute("animating")
                            }
                            w()
                        })
                    }
                }, {
                    key: "_parseTransistion",
                    value: function(m) {
                        var w = m.trim()
                            .split(" "),
                            k = _toArray(w),
                            _ = k[0],
                            A = k[1],
                            C = k.slice(2),
                            S = parseFloat(_),
                            E = C.join(" ");
                        return [A, S, E]
                    }
                }, {
                    key: "opened",
                    get: function() {
                        return this.hasAttribute("opened")
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-popover", XPopoverElement)
    } {
        var _html6 = Xel.utils.element.html,
            _shadowTemplate5 = _html6(_templateObject7),
            XOverlayElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    return u._ownerElement = null, u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate5.content, !0)), u.addEventListener("wheel", function(m) {
                        return m.preventDefault()
                    }), u.addEventListener("pointerdown", function(m) {
                        return m.preventDefault()
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "show",
                    value: function() {
                        var m = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
                        this.style.top = "0px", this.style.left = "0px", this.ownerElement.before(this), this.hidden = !1;
                        var w = this.getBoundingClientRect(),
                            k = 0,
                            _ = 0;
                        (0 !== w.top || 0 !== w.left) && (k = -w.top, _ = -w.left), document.body.scrollHeight > document.body.clientHeight && (document.body.style.overflow = "hidden"); {
                            var A = parseFloat(getComputedStyle(this.ownerElement)
                                .zIndex);
                            this.style.zIndex = A - 1
                        }
                        if (this.style.top = k + "px", this.style.left = _ + "px", m) {
                            var C = this.animate({
                                opacity: ["0", "1"]
                            }, {
                                duration: 100,
                                easing: "ease-out"
                            });
                            return C.finished
                        }
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var m = this,
                            w = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
                        if (w) {
                            var k = this.animate({
                                opacity: ["1", "0"]
                            }, {
                                duration: 100,
                                easing: "ease-in"
                            });
                            return k.finished.then(function() {
                                document.body.style.overflow = null, m.remove()
                            }), k.finished
                        }
                        document.body.style.overflow = null, this.remove()
                    }
                }, {
                    key: "ownerElement",
                    get: function() {
                        return this._ownerElement ? this._ownerElement : document.body.firstElementChild
                    },
                    set: function(m) {
                        this._ownerElement = m
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-overlay", XOverlayElement)
    } {
        var _max2 = _Mathmax,
            _Xel$utils$element3 = Xel.utils.element,
            _createElement2 = _Xel$utils$element3.createElement,
            _html7 = _Xel$utils$element3.html,
            _closest = _Xel$utils$element3.closest,
            _sleep3 = Xel.utils.time.sleep,
            easing = "cubic-bezier(0.4, 0, 0.2, 1)",
            _shadowTemplate6 = _html7(_templateObject8),
            XButtonElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate6.content, !0)), u["#overlay"] = _createElement2("x-overlay"), u["#overlay"].style.background = "rgba(0, 0, 0, 0)";
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "button"), this.setAttribute("aria-disabled", this.disabled), this.parentElement && "a" === this.parentElement.localName && -1 !== this.parentElement.tabIndex && (this.parentElement.tabIndex = -1), this._updateArrowVisibility()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        var w = this.querySelector(":scope > x-menu, :scope > x-popover");
                        w && (w.hasAttribute("closing") || w.contains(m.target)) || (m.target === this["#overlay"] ? this._onOverlayPointerDown(m) : this._onButtonPointerDown(m))
                    }
                }, {
                    key: "_onClick",
                    value: function(m) {
                        var w = this.querySelector(":scope > x-menu, :scope > x-popover");
                        w && w.hasAttribute("closing") || m.target === this["#overlay"] || m.target.closest("x-popover") || (m.target.closest("x-menu") ? m.target.closest("x-menuitem") && this._onMenuItemClick(m) : this._onButtonClick(m))
                    }
                }, {
                    key: "_onOverlayPointerDown",
                    value: function() {
                        this._collapse()
                    }
                }, {
                    key: "_onButtonPointerDown",
                    value: async function(m) {
                        var w = this;
                        if (!1 === this.matches(":focus")) {
                            event.preventDefault();
                            var k = _closest(this.parentNode, "*[tabindex]:not(a)");
                            k && k.focus()
                        }
                        if (0 === m.button) {
                            if (this._expand(), this.setPointerCapture(m.pointerId), !1 === this.isExpandable()) {
                                var _ = Date.now(),
                                    A = !0,
                                    C = async function U() {
                                        window.removeEventListener("pointerup", U), w.removeEventListener("lostpointercapture", U), A = !1;
                                        var Z = Date.now() - _,
                                            Y = 100;
                                        Z < Y && (await _sleep3(Y - Z)), w.removeAttribute("pressed")
                                    };
                                window.addEventListener("pointerup", C), this.addEventListener("lostpointercapture", C), async function() {
                                    w.ownerButtons ? 0 === w.ownerButtons.tracking || 2 === w.ownerButtons.tracking ? await _sleep3(10) : 1 === w.ownerButtons.tracking && (!1 === w.toggled || w.mixed) && (await _sleep3(10)) : w.togglable && (await _sleep3(10)), A && w.setAttribute("pressed", "")
                                }()
                            } {
                                var S = getComputedStyle(this)
                                    .getPropertyValue("--trigger-effect")
                                    .trim();
                                if ("ripple" === S) {
                                    var E = this["#ripples"].getBoundingClientRect(),
                                        L = 1.5 * _max2(E.width, E.height),
                                        D = m.clientY - E.y - L / 2,
                                        R = m.clientX - E.x - L / 2,
                                        P = new Promise(function(U) {
                                            return w.addEventListener("lostpointercapture", U, {
                                                once: !0
                                            })
                                        }),
                                        B = !0;
                                    !1 === this.isExpandable() && (this.ownerButtons ? 0 === this.ownerButtons.tracking || 2 === this.ownerButtons.tracking ? B = !1 : 1 === this.ownerButtons.tracking && !1 === this.toggled && (B = !1) : this.togglable && (B = !1));
                                    var M = _createElement2("div");
                                    M.setAttribute("class", "ripple pointer-down-ripple"), M.setAttribute("style", "width: " + L + "px; height: " + L + "px; top: " + D + "px; left: " + R + "px;"), this["#ripples"].append(M), this["#ripples"].style.contain = "strict";
                                    var I = M.animate({
                                        transform: ["scale3d(0, 0, 0)", "none"]
                                    }, {
                                        duration: 300,
                                        easing: easing
                                    });
                                    if (await P, B) {
                                        await I.finished;
                                        var T = M.animate({
                                            opacity: [getComputedStyle(M)
                                                .opacity, "0"
                                            ]
                                        }, {
                                            duration: 300,
                                            easing: easing
                                        });
                                        await T.finished
                                    }
                                    M.remove()
                                } else if ("unbounded-ripple" === S) {
                                    var N = this["#ripples"].getBoundingClientRect(),
                                        O = 1.25 * N.height,
                                        V = N.y + N.height / 2 - N.y - O / 2,
                                        F = N.x + N.width / 2 - N.x - O / 2,
                                        H = new Promise(function(U) {
                                            return w.addEventListener("lostpointercapture", U, {
                                                once: !0
                                            })
                                        }),
                                        K = _createElement2("div");
                                    K.setAttribute("class", "ripple pointer-down-ripple"), K.setAttribute("style", "width: " + O + "px; height: " + O + "px; top: " + V + "px; left: " + F + "px;"), this["#ripples"].append(K), this["#ripples"].style.contain = "none", K.hidden = !0, await _sleep3(20), K.hidden = !1;
                                    var W = K.animate({
                                        transform: ["scale(0)", "scale(1)"]
                                    }, {
                                        duration: 200,
                                        easing: easing
                                    });
                                    await H, await W.finished;
                                    var X = K.animate({
                                        opacity: [getComputedStyle(K)
                                            .opacity, "0"
                                        ]
                                    }, {
                                        duration: 200,
                                        easing: easing
                                    });
                                    await X.finished, K.remove()
                                }
                            }
                        }
                    }
                }, {
                    key: "_onButtonClick",
                    value: async function() {
                        var w = this.querySelector(":scope > x-menu, :scope > x-popover");
                        if (!(w && w.hasAttribute("closing")) && (this.togglable && (this.removeAttribute("pressed"), this.toggled = !this.toggled, this.dispatchEvent(new CustomEvent("toggle"))), null === this["#ripples"].querySelector(".pointer-down-ripple"))) {
                            var k = getComputedStyle(this)
                                .getPropertyValue("--trigger-effect")
                                .trim();
                            if ("ripple" === k) {
                                var _ = this["#ripples"].getBoundingClientRect(),
                                    A = 1.5 * _max2(_.width, _.height),
                                    C = _.y + _.height / 2 - _.y - A / 2,
                                    S = _.x + _.width / 2 - _.x - A / 2,
                                    E = !0;
                                this.ownerButtons ? 0 === this.ownerButtons.tracking || 2 === this.ownerButtons.tracking ? E = !1 : 1 === this.ownerButtons.tracking && !0 === this.toggled && (E = !1) : this.togglable && (E = !1);
                                var L = _createElement2("div");
                                L.setAttribute("class", "ripple click-ripple"), L.setAttribute("style", "width: " + A + "px; height: " + A + "px; top: " + C + "px; left: " + S + "px;"), this["#ripples"].append(L), this["#ripples"].style.contain = "strict";
                                var D = L.animate({
                                    transform: ["scale3d(0, 0, 0)", "none"]
                                }, {
                                    duration: 300,
                                    easing: easing
                                });
                                if (E) {
                                    await D.finished;
                                    var R = L.animate({
                                        opacity: [getComputedStyle(L)
                                            .opacity, "0"
                                        ]
                                    }, {
                                        duration: 300,
                                        easing: easing
                                    });
                                    await R.finished
                                }
                                L.remove()
                            } else if ("unbounded-ripple" === k) {
                                var P = this["#ripples"].getBoundingClientRect(),
                                    B = 1.35 * P.height,
                                    M = P.y + P.height / 2 - P.y - B / 2,
                                    I = P.x + P.width / 2 - P.x - B / 2,
                                    T = _createElement2("div");
                                T.setAttribute("class", "ripple"), T.setAttribute("style", "width: " + B + "px; height: " + B + "px; top: " + M + "px; left: " + I + "px;"), this["#ripples"].append(T), this["#ripples"].style.contain = "none", await T.animate({
                                        transform: ["scale3d(0, 0, 0)", "none"]
                                    }, {
                                        duration: 300,
                                        easing: easing
                                    })
                                    .finished, await T.animate({
                                        opacity: [getComputedStyle(T)
                                            .opacity, "0"
                                        ]
                                    }, {
                                        duration: 300,
                                        easing: easing
                                    })
                                    .finished, T.remove()
                            }
                        }
                    }
                }, {
                    key: "_onMenuItemClick",
                    value: async function(m) {
                        var w = m.target.closest("x-menuitem"),
                            k = this.querySelector(":scope > x-menu");
                        k.hasAttribute("closing") || this._collapse(w.whenTriggerEnd)
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        if ("Enter" === m.code || "Space" === m.code || "ArrowDown" === m.code) {
                            var w = this.querySelector("x-menu"),
                                k = this.querySelector("x-popover");
                            w ? !1 === w.opened && (m.preventDefault(), this._expand()
                                .then(function() {
                                    return w.focusFirstMenuItem()
                                })) : k ? !1 === k.opened && (m.preventDefault(), this._expand()) : (m.preventDefault(), this.click())
                        } else if ("Escape" === m.code) {
                            var _ = this.querySelector("x-menu"),
                                A = this.querySelector("x-popover");
                            _ ? _.opened && (m.preventDefault(), this._collapse()) : A && A.opened && (m.preventDefault(), this._collapse())
                        } else if ("ArrowUp" === m.code) {
                            var C = this.querySelector("x-menu"),
                                S = this.querySelector("x-popover");
                            C && (m.preventDefault(), this._expand()
                                .then(function() {
                                    return C.focusLastMenuItem()
                                }))
                        }
                    }
                }, {
                    key: "_expand",
                    value: function() {
                        var m = this;
                        return new Promise(async function(w) {
                            if (m._canExpandMenu()) {
                                var k = m.querySelector("x-menu");
                                k && (m._wasFocusedBeforeExpanding = m.matches(":focus"), m.setAttribute("expanded", ""), m["#overlay"].ownerElement = k, m["#overlay"].show(!1), await k.openNextToElement(m, "vertical", 3), k.focus())
                            } else if (m._canExpandPopover()) {
                                var _ = m.querySelector("x-popover");
                                _ && (m._wasFocusedBeforeExpanding = m.matches(":focus"), m.setAttribute("expanded", ""), m["#overlay"].ownerElement = _, m["#overlay"].show(!1), await _.open(m), _.focus())
                            }
                            w()
                        })
                    }
                }, {
                    key: "_collapse",
                    value: function() {
                        var m = this,
                            w = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                        return new Promise(async function(k) {
                            var _ = null;
                            if (m._canCollapseMenu() ? _ = m.querySelector("x-menu") : m._canCollapsePopover() && (_ = m.querySelector("x-popover")), _) {
                                if (_.setAttribute("closing", ""), await w, await _.close(), m["#overlay"].hide(!1), m.removeAttribute("expanded"), m._wasFocusedBeforeExpanding) m.focus();
                                else {
                                    var A = _closest(m.parentNode, "[tabindex]");
                                    A && A.focus()
                                }
                                _.removeAttribute("closing")
                            }
                            k()
                        })
                    }
                }, {
                    key: "isExpandable",
                    value: function() {
                        return null !== this.querySelector(":scope > x-menu x-menuitem, :scope > x-popover")
                    }
                }, {
                    key: "_canExpandMenu",
                    value: function() {
                        if (this.disabled) return !1;
                        var m = this.querySelector(":scope > x-menu"),
                            w = this.querySelector(":scope > x-menu x-menuitem");
                        return null !== m && null !== w && !m.hasAttribute("opened") && !m.hasAttribute("closing")
                    }
                }, {
                    key: "_canExpandPopover",
                    value: function() {
                        if (this.disabled) return !1;
                        var m = this.querySelector("x-popover");
                        return null !== m && !m.hasAttribute("opened") && !m.hasAttribute("closing")
                    }
                }, {
                    key: "_canCollapseMenu",
                    value: function() {
                        if (this.disabled) return !1;
                        var m = this.querySelector(":scope > x-menu");
                        return null !== m && m.opened
                    }
                }, {
                    key: "_canCollapsePopover",
                    value: function() {
                        if (this.disabled) return !1;
                        var m = this.querySelector("x-popover");
                        return null !== m && !0 === m.opened
                    }
                }, {
                    key: "_updateArrowVisibility",
                    value: function() {
                        var m = this.querySelector("x-menu"),
                            w = this.querySelector("x-popover");
                        this["#arrow"].style.display = null === m && null === w ? "none" : null
                    }
                }, {
                    key: "ownerButtons",
                    get: function() {
                        if (this.parentElement) {
                            if ("x-buttons" === this.parentElement.localName) return this.parentElement;
                            if ("x-box" === this.parentElement.localName && "x-buttons" === this.parentElement.parentElement.localName) return this.parentElement.parentElement
                        }
                        return null
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : null
                    },
                    set: function(m) {
                        null === m ? this.removeAttribute("value") : this.setAttribute("value", m)
                    }
                }, {
                    key: "toggled",
                    get: function() {
                        return this.hasAttribute("toggled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("toggled", "") : this.removeAttribute("toggled")
                    }
                }, {
                    key: "togglable",
                    get: function() {
                        return this.hasAttribute("togglable")
                    },
                    set: function(m) {
                        m ? this.setAttribute("togglable", "") : this.removeAttribute("togglable")
                    }
                }, {
                    key: "skin",
                    get: function() {
                        return this.getAttribute("skin")
                    },
                    set: function(m) {
                        null === m ? this.removeAttribute("skin") : this.setAttribute("skin", m)
                    }
                }, {
                    key: "mixed",
                    get: function() {
                        return this.hasAttribute("mixed")
                    },
                    set: function(m) {
                        m ? this.setAttribute("mixed", "") : this.removeAttribute("mixed")
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }, {
                    key: "expanded",
                    get: function() {
                        return this.hasAttribute("expanded")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-button", XButtonElement)
    } {
        var _html8 = Xel.utils.element.html,
            _sleep4 = Xel.utils.time.sleep,
            isArray = Array.isArray,
            _shadowTemplate7 = _html8(_templateObject9),
            XButtonsElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    return u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate7.content, !0)), u.addEventListener("click", function(m) {
                        return u._onClick(m)
                    }, !0), u.addEventListener("keydown", function(m) {
                        return u._onKeyDown(m)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        var m = !0,
                            w = !1,
                            k;
                        try {
                            for (var _ = this.children[Symbol.iterator](), A, C; !(m = (A = _.next())
                                    .done); m = !0)
                                if (C = A.value, "x-button" === C.localName) {
                                    var S = getComputedStyle(C)
                                        .boxShadow;
                                    "none" === S ? this.removeAttribute("hasboxshadow") : this.setAttribute("hasboxshadow", "");
                                    break
                                }
                        } catch (E) {
                            w = !0, k = E
                        } finally {
                            try {
                                !m && _.return && _.return()
                            } finally {
                                if (w) throw k
                            }
                        }
                    }
                }, {
                    key: "_onClick",
                    value: function(m) {
                        if (0 === m.button) {
                            var w = m.target.closest("x-button"),
                                k = w && !1 === w.disabled && !1 === w.isExpandable();
                            if (k) {
                                var _ = this._getButtons()
                                    .filter(function(N) {
                                        return N !== w
                                    });
                                if (0 === this.tracking) {
                                    w.mixed ? w.mixed = !1 : (w.toggled = !w.toggled, w.mixed = !1);
                                    var A = !0,
                                        C = !1,
                                        S;
                                    try {
                                        for (var E = _[Symbol.iterator](), L, D; !(A = (L = E.next())
                                                .done); A = !0) D = L.value, D.toggled = !1, D.mixed = !1
                                    } catch (N) {
                                        C = !0, S = N
                                    } finally {
                                        try {
                                            !A && E.return && E.return()
                                        } finally {
                                            if (C) throw S
                                        }
                                    }
                                    this.dispatchEvent(new CustomEvent("toggle", {
                                        bubbles: !0,
                                        detail: w
                                    }))
                                } else if (1 !== this.tracking) 2 === this.tracking && (w.mixed ? w.mixed = !1 : w.toggled = !w.toggled, this.dispatchEvent(new CustomEvent("toggle", {
                                    bubbles: !0,
                                    detail: w
                                })));
                                else if (!1 === w.toggled || !0 === w.mixed) {
                                    w.toggled = !0, w.mixed = !1;
                                    var R = !0,
                                        P = !1,
                                        B;
                                    try {
                                        for (var M = _[Symbol.iterator](), I, T; !(R = (I = M.next())
                                                .done); R = !0) T = I.value, T.toggled = !1, T.mixed = !1
                                    } catch (N) {
                                        P = !0, B = N
                                    } finally {
                                        try {
                                            !R && M.return && M.return()
                                        } finally {
                                            if (P) throw B
                                        }
                                    }
                                    this.dispatchEvent(new CustomEvent("toggle", {
                                        bubbles: !0,
                                        detail: w
                                    }))
                                }
                            }
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        var w = m.key;
                        if ("ArrowRight" === w) {
                            var k = [].concat(_toConsumableArray(this.children))
                                .find(function(A) {
                                    return A.matches(":focus")
                                });
                            k.nextElementSibling ? k.nextElementSibling.focus() : k !== k.parentElement.firstElementChild && k.parentElement.firstElementChild.focus()
                        } else if ("ArrowLeft" === w) {
                            var _ = [].concat(_toConsumableArray(this.children))
                                .find(function(A) {
                                    return A.matches(":focus")
                                });
                            _.previousElementSibling ? _.previousElementSibling.focus() : _ !== _.parentElement.lastElementChild && _.parentElement.lastElementChild.focus()
                        }
                    }
                }, {
                    key: "_getButtons",
                    value: function() {
                        return [].concat(_toConsumableArray(this.querySelectorAll(":scope > x-button, :scope > x-box > x-button")))
                    }
                }, {
                    key: "tracking",
                    get: function() {
                        return this.hasAttribute("tracking") ? parseInt(this.getAttribute("tracking")) : -1
                    },
                    set: function(m) {
                        this.setAttribute("tracking", m)
                    }
                }, {
                    key: "value",
                    get: function() {
                        if (2 === this.tracking) {
                            var m = this._getButtons()
                                .filter(function(k) {
                                    return k.toggled
                                });
                            return m.map(function(k) {
                                    return k.value
                                })
                                .filter(function(k) {
                                    return void 0 != k
                                })
                        }
                        if (1 === this.tracking || 0 === this.tracking) {
                            var w = this._getButtons()
                                .find(function(k) {
                                    return k.toggled
                                });
                            return w && void 0 !== w.value ? w.value : null
                        }
                        return -1 === this.tracking ? null : void 0
                    },
                    set: function(m) {
                        if (2 === this.tracking) {
                            var w = this._getButtons();
                            if (isArray(m)) {
                                var k = !0,
                                    _ = !1,
                                    A;
                                try {
                                    for (var C = w[Symbol.iterator](), S, E; !(k = (S = C.next())
                                            .done); k = !0) E = S.value, E.toggled = m.includes(E.value)
                                } catch (W) {
                                    _ = !0, A = W
                                } finally {
                                    try {
                                        !k && C.return && C.return()
                                    } finally {
                                        if (_) throw A
                                    }
                                }
                            } else {
                                var L = !0,
                                    D = !1,
                                    R;
                                try {
                                    for (var P = w[Symbol.iterator](), B, M; !(L = (B = P.next())
                                            .done); L = !0) M = B.value, M.toggled = M.value === m
                                } catch (W) {
                                    D = !0, R = W
                                } finally {
                                    try {
                                        !L && P.return && P.return()
                                    } finally {
                                        if (D) throw R
                                    }
                                }
                            }
                        } else if (1 === this.tracking || 0 === this.tracking) {
                            var I = this._getButtons(),
                                T = I.find(function(W) {
                                    return W.value === m
                                }),
                                N = !0,
                                O = !1,
                                V;
                            try {
                                for (var F = I[Symbol.iterator](), H, K; !(N = (H = F.next())
                                        .done); N = !0) K = H.value, K.toggled = K === T
                            } catch (W) {
                                O = !0, V = W
                            } finally {
                                try {
                                    !N && F.return && F.return()
                                } finally {
                                    if (O) throw V
                                }
                            }
                        }
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-buttons", XButtonsElement)
    } {
        var _html9 = Xel.utils.element.html,
            _shadowTemplate8 = _html9(_templateObject10),
            XCardElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate8.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), n
            }(_CustomElement);
        customElements.define("x-card", XCardElement)
    } {
        var _Xel$utils$element4 = Xel.utils.element,
            _createElement3 = _Xel$utils$element4.createElement,
            _closest2 = _Xel$utils$element4.closest,
            _html10 = _Xel$utils$element4.html,
            _easing = "cubic-bezier(0.4, 0, 0.2, 1)",
            _shadowTemplate9 = _html10(_templateObject11),
            XCheckboxElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate9.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "checkbox"), this.setAttribute("aria-checked", this.mixed ? "mixed" : this.toggled), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "toggled" === m ? this._onToggledAttributeChange() : "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onToggledAttributeChange",
                    value: function() {
                        this.setAttribute("aria-toggled", this.mixed ? "mixed" : this.toggled)
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        if (!1 === this.matches(":focus")) {
                            m.preventDefault();
                            var w = _closest2(this.parentNode, "[tabindex]");
                            w && w.focus()
                        } {
                            var k = getComputedStyle(this)
                                .getPropertyValue("--ripple-type")
                                .trim();
                            if ("unbounded" === k) {
                                var _ = _createElement3("div");
                                _.setAttribute("class", "ripple pointer-down-ripple"), this["#ripples"].append(_);
                                var A = _.animate({
                                    transform: ["scale(0)", "scale(2.6)"]
                                }, {
                                    duration: 200,
                                    easing: _easing
                                });
                                this.setPointerCapture(m.pointerId), this.addEventListener("lostpointercapture", async function() {
                                    await A.finished;
                                    var C = _.animate({
                                        opacity: [getComputedStyle(_)
                                            .opacity, "0"
                                        ]
                                    }, {
                                        duration: 200,
                                        easing: _easing
                                    });
                                    await C.finished, _.remove()
                                }, {
                                    once: !0
                                })
                            }
                        }
                    }
                }, {
                    key: "_onClick",
                    value: async function() {
                        if (this.mixed ? this.mixed = !1 : this.toggled = !this.toggled, this.dispatchEvent(new CustomEvent("change", {
                                bubbles: !0
                            })), null === this["#ripples"].querySelector(".pointer-down-ripple")) {
                            var w = getComputedStyle(this)
                                .getPropertyValue("--ripple-type")
                                .trim();
                            if ("unbounded" === w) {
                                var k = _createElement3("div");
                                k.setAttribute("class", "ripple"), this["#ripples"].append(k), await k.animate({
                                        transform: ["scale(0)", "scale(2.6)"]
                                    }, {
                                        duration: 300,
                                        easing: _easing
                                    })
                                    .finished, await k.animate({
                                        opacity: [getComputedStyle(k)
                                            .opacity, "0"
                                        ]
                                    }, {
                                        duration: 300,
                                        easing: _easing
                                    })
                                    .finished, k.remove()
                            }
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        ("Enter" === m.code || "Space" === m.code) && (m.preventDefault(), this.click())
                    }
                }, {
                    key: "toggled",
                    get: function() {
                        return this.hasAttribute("toggled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("toggled", "") : this.removeAttribute("toggled")
                    }
                }, {
                    key: "mixed",
                    get: function() {
                        return this.hasAttribute("mixed")
                    },
                    set: function(m) {
                        m ? this.setAttribute("mixed", "") : this.removeAttribute("mixed")
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["toggled", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-checkbox", XCheckboxElement)
    } {
        var _Xel$utils$element5 = Xel.utils.element,
            _createElement4 = _Xel$utils$element5.createElement,
            _html11 = _Xel$utils$element5.html,
            _closest3 = _Xel$utils$element5.closest,
            debug = !0,
            _shadowTemplate10 = _html11(_templateObject12),
            XContextMenuElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    return u._parentElement = null, u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate10.content, !0)), u["#overlay"] = _createElement4("x-overlay"), u["#overlay"].style.background = "rgba(0, 0, 0, 0)", u["#overlay"].addEventListener("contextmenu", function(m) {
                        return u._onOverlayContextMenu(m)
                    }), u["#overlay"].addEventListener("pointerdown", function(m) {
                        return u._onOverlayPointerDown(m)
                    }), window.addEventListener("blur", function() {
                        return u._onBlur()
                    }), u.addEventListener("blur", function() {
                        return u._onBlur()
                    }), u.addEventListener("keydown", function(m) {
                        return u._onKeyDown(m)
                    }, !0), u.addEventListener("click", function(m) {
                        return u._onClick(m)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        var m = this;
                        if (!this.hasAttribute("manual")) {
                            this._parentElement = this.parentElement || this.parentNode.host, this._parentElement.addEventListener("contextmenu", this._parentContextMenuListener = function(w) {
                                m._onParentContextMenu(w)
                            })
                        }
                    }
                }, {
                    key: "disconnectedCallback",
                    value: function() {
                        this._parentElement.removeEventListener("contextmenu", this._parentContextMenuListener), this._parentElement = null
                    }
                }, {
                    key: "_onBlur",
                    value: function() {}
                }, {
                    key: "_onParentContextMenu",
                    value: function(m) {
                        !1 === this.disabled && (m.preventDefault(), this.open(m.clientX, m.clientY))
                    }
                }, {
                    key: "_onOverlayContextMenu",
                    value: function(m) {
                        var w = this;
                        m.preventDefault(), m.stopImmediatePropagation(), this.close()
                            .then(function() {
                                var k = w.parentElement.getRootNode()
                                    .elementFromPoint(m.clientX, m.clientY);
                                k && w.parentElement.contains(k) && w.open(m.clientX, m.clientY)
                            })
                    }
                }, {
                    key: "_onOverlayPointerDown",
                    value: function(m) {
                        var w = this;
                        if (w.contains(m.target))
                            return;

                        this.close()
                    }
                }, {
                    key: "_onClick",
                    value: async function() {
                        var m = event.target.closest("x-menuitem");
                        if (m && !1 === m.disabled) {
                            var w = m.querySelector("x-menu");
                            w ? w.opened ? w.close() : w.openNextToElement(m, "horizontal") : (this.setAttribute("closing", ""), await m.whenTriggerEnd, await this.close(), this.removeAttribute("closing"))
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        if ("Escape" === m.key) {
                            var w = this.querySelector("x-menu");
                            w.opened && (m.preventDefault(), this.close())
                        } else if ("Tab" === m.key) {
                            m.preventDefault(), m.stopPropagation();
                            var k = this.querySelector("x-menu");
                            k.focusNextMenuItem()
                        }
                    }
                }, {
                    key: "open",
                    value: function(m, w, parentNode) {
                        this.myParentNode = parentNode;
                        var k = this.querySelector("x-menu");
                        !1 === k.opened && (k.openAtPoint(m, w) /*, this["#overlay"].ownerElement = k, this["#overlay"].show(!1)*/ , k.focus())
                        this.myEventListener = (event) => this._onOverlayPointerDown(event)
                        document.body.addEventListener('pointerdown', this.myEventListener, true)
                    }
                }, {
                    key: "close",
                    value: function() {
                        var m = this;
                        document.body.removeEventListener("pointerdown", this.myEventListener, true);
                        return new Promise(async function(w) {
                            var k = m.querySelector("x-menu");
                            await k.close(false) /*, m["#overlay"].hide(!1)*/ ;
                            var _ = _closest3(m.parentNode, "[tabindex]");
                            if (m.myParentNode != null)
                                _ = _closest3(m.myParentNode, "[tabindex]");
                            _ && _.focus();
                            w()
                        })
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-contextmenu", XContextMenuElement)
    } {
        var _Xel$utils$element6 = Xel.utils.element,
            _createElement5 = _Xel$utils$element6.createElement,
            _html12 = _Xel$utils$element6.html,
            _shadowTemplate11 = _html12(_templateObject13),
            XDialogElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate11.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u["#overlay"] = _createElement5("x-overlay"), u["#overlay"].ownerElement = u, u["#overlay"].addEventListener("click", function(S) {
                        return u._onOverlayClick(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("role", "dialog"), this.setAttribute("tabindex", "-1"), !1 === this.opened && this.setAttribute("offscreen", "")
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m, w, k) {
                        w === k || "opened" === m && this._onOpenedAttributeChange()
                    }
                }, {
                    key: "_onOpenedAttributeChange",
                    value: function() {
                        this.opened ? this._open() : this._close()
                    }
                }, {
                    key: "_onOverlayClick",
                    value: function() {
                        this.opened = !1
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        if ("Escape" === m.key) this.opened = !1;
                        else if ("Tab" === m.key) {
                            var w = [].concat(_toConsumableArray(this.querySelectorAll("*")))
                                .filter(function(A) {
                                    return 0 <= A.tabIndex
                                });
                            if (0 < w.length) {
                                var k = w[0],
                                    _ = w[w.length - 1];
                                !1 === m.shiftKey ? m.target === _ && (m.preventDefault(), k.focus()) : !0 === m.shiftKey && m.target === k && (m.preventDefault(), _.focus())
                            }
                        }
                    }
                }, {
                    key: "_open",
                    value: async function() {
                        this._initiallyFocusedElement = this.getRootNode()
                            .querySelector(":focus");
                        var m = getComputedStyle(this),
                            w = m.getPropertyValue("--origin")
                            .trim(),
                            k = m.getPropertyValue("--backdrop-color");
                        "center" === w ? (this.style.transform = "perspective(1px) translate(-50%, -50%)", this.style.top = "50%") : "top" === w && (this.style.transform = "perspective(1px) translate(-50%, -0%)"), this["#overlay"].style.background = k, this.setAttribute("opened", ""), this.removeAttribute("offscreen"), this["#overlay"].show(!0);
                        var _ = this.getBoundingClientRect(),
                            A = this.animate({
                                top: ["-" + _.height + "px", m.top]
                            }, {
                                duration: 300,
                                easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
                            });
                        await A.finished;
                        var C = [].concat(_toConsumableArray(this.querySelectorAll("*"))),
                            S = C.reverse()
                            .find(function(E) {
                                return 0 <= E.tabIndex
                            });
                        S && S.focus()
                    }
                }, {
                    key: "_close",
                    value: async function() {
                        var m = getComputedStyle(this),
                            w = m.getPropertyValue("--origin")
                            .trim(),
                            k = this.getBoundingClientRect();
                        this.removeAttribute("opened");
                        var _ = this.animate({
                            top: [m.top, "-" + (k.height + 20) + "px"]
                        }, {
                            duration: 300,
                            easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
                        });
                        await _.finished, this.setAttribute("offscreen", ""), this["#overlay"].hide(!0), this._initiallyFocusedElement && this._initiallyFocusedElement.focus(), this.dispatchEvent(new CustomEvent("close"))
                    }
                }, {
                    key: "opened",
                    get: function() {
                        return this.hasAttribute("opened")
                    },
                    set: function(m) {
                        m ? this.setAttribute("opened", "") : this.removeAttribute("opened")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["opened"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-dialog", XDialogElement)
    } {
        var _Xel$utils$element7 = Xel.utils.element,
            _createElement6 = _Xel$utils$element7.createElement,
            _html13 = _Xel$utils$element7.html,
            _closest4 = _Xel$utils$element7.closest,
            _sleep5 = Xel.utils.time.sleep,
            _max3 = _Mathmax,
            _easing2 = "cubic-bezier(0.4, 0, 0.2, 1)",
            _shadowTemplate12 = _html13(_templateObject14),
            XDocTabElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate12.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u["#close-button"].addEventListener("pointerdown", function(S) {
                        return u._onCloseButtonPointerDown(S)
                    }), u["#close-button"].addEventListener("click", function(S) {
                        return u._onCloseButtonClick(S)
                    }), u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.selected ? "0" : "-1"), this.setAttribute("role", "tab"), this.setAttribute("aria-selected", this.selected), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m, w, k) {
                        w === k || ("selected" === m ? this._onSelectedAttributeChange() : "disabled" === m && this._onDisabledAttributeChange())
                    }
                }, {
                    key: "_onSelectedAttributeChange",
                    value: function() {
                        this.setAttribute("aria-selected", this.selected), this.setAttribute("tabindex", this.selected ? "0" : "-1")
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("aria-disabled", this.disabled), this.setAttribute("tabindex", this.selected ? "0" : "-1")
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        var w = this;
                        if (!1 === this.matches(":focus")) {
                            event.preventDefault();
                            var k = _closest4(this.parentNode, "[tabindex]");
                            k && k.focus()
                        }
                        if (0 === m.button) {
                            {
                                var _ = Date.now();
                                this.setAttribute("pressed", ""), this.setPointerCapture(m.pointerId), this.addEventListener("lostpointercapture", async function() {
                                    if (!0 === w.selected) {
                                        var B = Date.now() - _,
                                            M = 100;
                                        B < M && (await _sleep5(M - B))
                                    }
                                    w.removeAttribute("pressed")
                                }, {
                                    once: !0
                                })
                            } {
                                var A = getComputedStyle(this)
                                    .getPropertyValue("--ripple-type")
                                    .trim();
                                if ("bounded" === A) {
                                    var C = this["#ripples"].getBoundingClientRect(),
                                        S = 1.5 * _max3(C.width, C.height),
                                        E = m.clientY - C.y - S / 2,
                                        L = m.clientX - C.x - S / 2,
                                        D = _createElement6("div");
                                    D.setAttribute("class", "ripple pointer-down-ripple"), D.setAttribute("style", "width: " + S + "px; height: " + S + "px; top: " + E + "px; left: " + L + "px;"), this["#ripples"].append(D);
                                    var R = D.animate({
                                        transform: ["scale(0)", "scale(1)"]
                                    }, {
                                        duration: 300,
                                        easing: _easing2
                                    });
                                    this.ownerTabs.setPointerCapture(m.pointerId), this.ownerTabs.addEventListener("lostpointercapture", async function() {
                                        await R.finished;
                                        var P = getComputedStyle(D)
                                            .opacity,
                                            B = D.animate({
                                                opacity: [P, "0"]
                                            }, {
                                                duration: 300,
                                                easing: _easing2
                                            });
                                        await B.finished, D.remove()
                                    }, {
                                        once: !0
                                    })
                                }
                            }
                        }
                    }
                }, {
                    key: "_onClick",
                    value: async function(m) {
                        if (0 === m.button && null === this["#ripples"].querySelector(".pointer-down-ripple")) {
                            var w = getComputedStyle(this)
                                .getPropertyValue("--ripple-type")
                                .trim();
                            if ("bounded" === w) {
                                var k = this["#ripples"].getBoundingClientRect(),
                                    _ = 1.5 * _max3(k.width, k.height),
                                    A = k.y + k.height / 2 - k.y - _ / 2,
                                    C = k.x + k.width / 2 - k.x - _ / 2,
                                    S = _createElement6("div");
                                S.setAttribute("class", "ripple click-ripple"), S.setAttribute("style", "width: " + _ + "px; height: " + _ + "px; top: " + A + "px; left: " + C + "px;"), this["#ripples"].append(S);
                                var E = S.animate({
                                    transform: ["scale(0)", "scale(1)"]
                                }, {
                                    duration: 300,
                                    easing: _easing2
                                });
                                await E.finished;
                                var L = getComputedStyle(S)
                                    .opacity,
                                    D = S.animate({
                                        opacity: [L, "0"]
                                    }, {
                                        duration: 300,
                                        easing: _easing2
                                    });
                                await D.finished, S.remove()
                            }
                        }
                    }
                }, {
                    key: "_onCloseButtonPointerDown",
                    value: function(m) {
                        0 !== m.button || m.stopPropagation()
                    }
                }, {
                    key: "_onCloseButtonClick",
                    value: function(m) {
                        if (0 === m.button) {
                            m.stopPropagation();
                            var w = new CustomEvent("close", {
                                bubbles: !0,
                                cancelable: !0,
                                detail: this
                            });
                            this.dispatchEvent(w), !1 === w.defaultPrevented && this.ownerTabs.closeTab(this)
                        }
                    }
                }, {
                    key: "ownerTabs",
                    get: function() {
                        return this.closest("x-doctabs")
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : ""
                    },
                    set: function(m) {
                        this.setAttribute("value", m)
                    }
                }, {
                    key: "selected",
                    get: function() {
                        return this.hasAttribute("selected")
                    },
                    set: function(m) {
                        m ? this.setAttribute("selected", "") : this.removeAttribute("selected")
                    }
                }, {
                    key: "edited",
                    get: function() {
                        return this.hasAttribute("edited")
                    },
                    set: function(m) {
                        m ? this.setAttribute("edited", "") : this.removeAttribute("edited")
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        !0 === m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["selected", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-doctab", XDocTabElement)
    } {
        var _html14 = Xel.utils.element.html,
            _getDistanceBetweenPoints = Xel.utils.math.getDistanceBetweenPoints,
            _sleep6 = Xel.utils.time.sleep,
            abs = _Mathabs,
            _parseInt2 = _NumberparseInt,
            _shadowTemplate13 = _html14(_templateObject15),
            XDocTabsElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._waitingForTabToClose = !1, u._waitingForPointerMoveAfterClosingTab = !1, u._shadowRoot = u.attachShadow({
                        mode: "closed",
                        delegatesFocus: !0
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate13.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u["#open-button"].addEventListener("click", function(S) {
                        return u._onOpenButtonClick(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "openTab",
                    value: function(m) {
                        var w = this,
                            k = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0;
                        return new Promise(async function(_, A) {
                            var C = w.querySelectorAll("x-doctab");
                            if (C.length >= w.maxTabs) A("Can't open more than " + w.maxTabs + " tabs.");
                            else {
                                var S = 0,
                                    E = !0,
                                    L = !1,
                                    D;
                                try {
                                    for (var R = w.children[Symbol.iterator](), P; !(E = (P = R.next())
                                            .done); E = !0) {
                                        var B = P.value,
                                            M = _parseInt2(B.style.order);
                                        !_NumberisNaN(M) && M > S && (S = M)
                                    }
                                } catch (I) {
                                    L = !0, D = I
                                } finally {
                                    try {
                                        !E && R.return && R.return()
                                    } finally {
                                        if (L) throw D
                                    }
                                }
                                m.style.order = S, !1 === k ? (m.style.transition = "none", m.style.maxWidth = null, m.style.padding = null, w.append(m), m.focus(), _(m)) : !0 === k && (m.style.transition = null, m.style.maxWidth = "0px", m.style.padding = "0px", m.setAttribute("opening", ""), w.append(m), await _sleep6(30), m.addEventListener("transitionend", function() {
                                    m.removeAttribute("opening"), _(m)
                                }, {
                                    once: !0
                                }), m.style.maxWidth = null, m.style.padding = null, m.focus())
                            }
                        })
                    }
                }, {
                    key: "closeTab",
                    value: function(m) {
                        var w = this,
                            k = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0;
                        return new Promise(async function(_) {
                            var A = w.getTabsByScreenIndex()
                                .filter(function(W) {
                                    return !1 === W.hasAttribute("closing")
                                }),
                                C = m.getBoundingClientRect()
                                .width,
                                S = w._getTabScreenIndex(m);
                            if (m.setAttribute("closing", ""), S < A.length - 1) {
                                var E = !0,
                                    L = !1,
                                    D;
                                try {
                                    for (var R = w.children[Symbol.iterator](), P, B; !(E = (P = R.next())
                                            .done); E = !0) B = P.value, !1 === B.hasAttribute("closing") && (B.style.transition = "none", B.style.maxWidth = C + "px")
                                } catch (W) {
                                    L = !0, D = W
                                } finally {
                                    try {
                                        !E && R.return && R.return()
                                    } finally {
                                        if (L) throw D
                                    }
                                }
                            }
                            if (m.style.transition = k ? null : "none", m.style.maxWidth = "0px", m.style.pointerEvents = "none", w._waitingForTabToClose = !0, m.selected) {
                                var M = A[A.indexOf(m) - 1],
                                    I = A[A.indexOf(m) + 1];
                                m.selected = !1, I ? I.selected = !0 : M && (M.selected = !0)
                            }
                            if (m.matches(":focus")) {
                                var T = w.querySelector("x-doctab[selected]");
                                T ? T.focus() : w.focus()
                            }
                            if (m.style.maxWidth = "0px", m.style.padding = "0px", k && (await _sleep6(150)), m.remove(), w._waitingForTabToClose = !1, m.removeAttribute("closing"), _(), !w._waitingForPointerMoveAfterClosingTab) {
                                w._waitingForPointerMoveAfterClosingTab = !0, await w._whenPointerMoved(3), w._waitingForPointerMoveAfterClosingTab = !1;
                                var N = !0,
                                    O = !1,
                                    V;
                                try {
                                    for (var F = w.children[Symbol.iterator](), H, K; !(N = (H = F.next())
                                            .done); N = !0) K = H.value, K.style.transition = null, K.style.maxWidth = null, K.style.order = w._getTabScreenIndex(K)
                                } catch (W) {
                                    O = !0, V = W
                                } finally {
                                    try {
                                        !N && F.return && F.return()
                                    } finally {
                                        if (O) throw V
                                    }
                                }
                            }
                        })
                    }
                }, {
                    key: "selectPreviousTab",
                    value: function() {
                        var m = this.getTabsByScreenIndex(),
                            w = this.querySelector("x-doctab[selected]") || this.querySelector("x-doctab"),
                            k = this._getPreviousTabOnScreen(w);
                        return w && k ? (w.tabIndex = -1, w.selected = !1, k.tabIndex = 0, k.selected = !0, k) : null
                    }
                }, {
                    key: "selectNextTab",
                    value: function() {
                        var m = this.getTabsByScreenIndex(),
                            w = this.querySelector("x-doctab[selected]") || this.querySelector("x-doctab:last-of-type"),
                            k = this._getNextTabOnScreen(w);
                        return w && k ? (w.tabIndex = -1, w.selected = !1, k.tabIndex = 0, k.selected = !0, k) : null
                    }
                }, {
                    key: "moveSelectedTabLeft",
                    value: function() {
                        var m = this.querySelector("x-doctab[selected]"),
                            w = this._getTabScreenIndex(m),
                            k = !0,
                            _ = !1,
                            A;
                        try {
                            for (var C = this.children[Symbol.iterator](), S, E; !(k = (S = C.next())
                                    .done); k = !0) E = S.value, E.style.order = this._getTabScreenIndex(E)
                        } catch (T) {
                            _ = !0, A = T
                        } finally {
                            try {
                                !k && C.return && C.return()
                            } finally {
                                if (_) throw A
                            }
                        }
                        if (0 === _parseInt2(m.style.order)) {
                            var L = !0,
                                D = !1,
                                R;
                            try {
                                for (var P = this.children[Symbol.iterator](), B, M; !(L = (B = P.next())
                                        .done); L = !0) M = B.value, M.style.order = M === m ? this.childElementCount - 1 : _parseInt2(M.style.order) - 1
                            } catch (T) {
                                D = !0, R = T
                            } finally {
                                try {
                                    !L && P.return && P.return()
                                } finally {
                                    if (D) throw R
                                }
                            }
                        } else {
                            var I = this._getTabWithScreenIndex(w - 1);
                            I.style.order = _parseInt2(I.style.order) + 1, m.style.order = _parseInt2(m.style.order) - 1
                        }
                    }
                }, {
                    key: "moveSelectedTabRight",
                    value: function() {
                        var m = this.querySelector("x-doctab[selected]"),
                            w = this._getTabScreenIndex(m),
                            k = !0,
                            _ = !1,
                            A;
                        try {
                            for (var C = this.children[Symbol.iterator](), S, E; !(k = (S = C.next())
                                    .done); k = !0) E = S.value, E.style.order = this._getTabScreenIndex(E)
                        } catch (T) {
                            _ = !0, A = T
                        } finally {
                            try {
                                !k && C.return && C.return()
                            } finally {
                                if (_) throw A
                            }
                        }
                        if (_parseInt2(m.style.order) === this.childElementCount - 1) {
                            var L = !0,
                                D = !1,
                                R;
                            try {
                                for (var P = this.children[Symbol.iterator](), B, M; !(L = (B = P.next())
                                        .done); L = !0) M = B.value, M.style.order = M === m ? 0 : _parseInt2(M.style.order) + 1
                            } catch (T) {
                                D = !0, R = T
                            } finally {
                                try {
                                    !L && P.return && P.return()
                                } finally {
                                    if (D) throw R
                                }
                            }
                        } else {
                            var I = this._getTabWithScreenIndex(w + 1);
                            I.style.order = _parseInt2(I.style.order) - 1, m.style.order = _parseInt2(m.style.order) + 1
                        }
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        0 === m.button && !this._waitingForTabToClose && m.target.closest("x-doctab") && this._onTabPointerDown(m)
                    }
                }, {
                    key: "_onTabPointerDown",
                    value: function(m) {
                        var w = this;
                        if (!1 !== m.isPrimary) {
                            var A = m.target.closest("x-doctab"),
                                C = this.querySelector("x-doctab[selected]"),
                                S = !0,
                                E = !1,
                                k, _, L;
                            try {
                                for (var D = this.querySelectorAll("x-doctab")[Symbol.iterator](), R, P; !(S = (R = D.next())
                                        .done); S = !0) P = R.value, P === A ? !1 === P.selected && (P.selected = !0, this.dispatchEvent(new CustomEvent("select"))) : P.selected = !1, P.tabIndex = P === A ? 0 : -1
                            } catch (M) {
                                E = !0, L = M
                            } finally {
                                try {
                                    !S && D.return && D.return()
                                } finally {
                                    if (E) throw L
                                }
                            }
                            var B = this._animateSelectionIndicator(C, A);
                            this.setPointerCapture(m.pointerId), this.addEventListener("pointermove", k = function(I) {
                                I.isPrimary && 1 < abs(I.clientX - m.clientX) && (w.removeEventListener("pointermove", k), w.removeEventListener("lostpointercapture", _), B.finish(), w._onTabDragStart(m, A))
                            }), this.addEventListener("lostpointercapture", _ = function() {
                                w.removeEventListener("pointermove", k), w.removeEventListener("lostpointercapture", _)
                            })
                        }
                    }
                }, {
                    key: "_onTabDragStart",
                    value: function(m, w) {
                        var k = this,
                            _ = w.getBoundingClientRect(),
                            A = this.getBoundingClientRect(),
                            C = Symbol(),
                            S = Symbol(),
                            E = Symbol();
                        w.style.zIndex = 999, this["#open-button"].style.opacity = "0";
                        var L = !0,
                            D = !1,
                            R;
                        try {
                            for (var P = this.children[Symbol.iterator](), B; !(L = (B = P.next())
                                    .done); L = !0) {
                                var M = B.value,
                                    I = this._getTabScreenIndex(M);
                                M[S] = I, M[C] = I, M[E] = M.getBoundingClientRect()
                                    .left - A.left, M !== w && (M.style.transition = "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)")
                            }
                        } catch (V) {
                            D = !0, R = V
                        } finally {
                            try {
                                !L && P.return && P.return()
                            } finally {
                                if (D) throw R
                            }
                        }
                        var T = function V(F, H) {
                                if (H > F + 1)
                                    for (var K = F; K < H; K += 1) V(K, K + 1);
                                else if (H < F - 1)
                                    for (var W = F; W > H; W -= 1) V(W, W - 1);
                                else {
                                    var X = !0,
                                        U = !1,
                                        Z;
                                    try {
                                        for (var Y = k.children[Symbol.iterator](), G, $; !(X = (G = Y.next())
                                                .done); X = !0)
                                            if ($ = G.value, $ !== w) {
                                                $[S] === H && ($[S] = F);
                                                for (var Q = -$[E], J = 0; J < $[S]; J += 1) Q += _.width;
                                                $.style.transform = 0 === Q ? null : "translate(" + Q + "px)"
                                            }
                                    } catch (ee) {
                                        U = !0, Z = ee
                                    } finally {
                                        try {
                                            !X && Y.return && Y.return()
                                        } finally {
                                            if (U) throw Z
                                        }
                                    }
                                }
                            },
                            N = function(F) {
                                if (F.isPrimary) {
                                    var H = F.clientX - m.clientX;
                                    0 >= H + w[E] ? H = -w[E] : H + w[E] + _.width > A.width && (H = A.width - w[E] - _.width), w.style.transform = "translate(" + H + "px)";
                                    var K = k._getTabScreenIndex(w);
                                    if (K !== w[S]) {
                                        var W = w[S];
                                        w[S] = K, T(W, w[S])
                                    }
                                }
                            };
                        this.addEventListener("pointermove", N), this.addEventListener("lostpointercapture", async function V() {
                            k.removeEventListener("pointermove", N), k.removeEventListener("lostpointercapture", V);
                            for (var H = -w[E], K = 0; K < w[S]; K += 1) H += _.width;
                            w.style.transition = "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)", w.style.transform = "translate(" + H + "px)", w[C] !== w[S] && k.dispatchEvent(new CustomEvent("rearrange")), await _sleep6(150), w.style.zIndex = null, k["#open-button"].style.opacity = null;
                            var W = !0,
                                X = !1,
                                U;
                            try {
                                for (var Z = k.children[Symbol.iterator](), Y, G; !(W = (Y = Z.next())
                                        .done); W = !0) G = Y.value, G.style.transition = "none", G.style.transform = "translate(0px, 0px)", G.style.order = G[S]
                            } catch ($) {
                                X = !0, U = $
                            } finally {
                                try {
                                    !W && Z.return && Z.return()
                                } finally {
                                    if (X) throw U
                                }
                            }
                        })
                    }
                }, {
                    key: "_onOpenButtonClick",
                    value: function(m) {
                        if (0 === m.button) {
                            var w = new CustomEvent("open", {
                                cancelable: !0
                            });
                            if (this.dispatchEvent(w), !1 === w.defaultPrevented) {
                                var k = _html14(_templateObject16);
                                k.style.order = this.childElementCount, this.openTab(k);
                                var _ = !0,
                                    A = !1,
                                    C;
                                try {
                                    for (var S = this.children[Symbol.iterator](), E, L; !(_ = (E = S.next())
                                            .done); _ = !0) L = E.value, L.selected = L === k
                                } catch (D) {
                                    A = !0, C = D
                                } finally {
                                    try {
                                        !_ && S.return && S.return()
                                    } finally {
                                        if (A) throw C
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        if (!(m.ctrlKey || m.altKey || m.metaKey || m.shiftKey))
                            if ("Enter" === m.code || "Space" === m.code) {
                                var w = this.querySelector("x-doctab[tabindex=\"0\"]"),
                                    k = this.querySelector("x-doctab[selected]");
                                m.preventDefault(), w.click(), w !== k && (k.selected = !1, w.selected = !0, this._animateSelectionIndicator(k, w))
                            } else if ("ArrowLeft" === m.code) {
                            var _ = this.getTabsByScreenIndex(),
                                A = this.querySelector("x-doctab[tabindex=\"0\"]"),
                                C = this._getPreviousTabOnScreen(A);
                            C && (m.preventDefault(), A.tabIndex = -1, C.tabIndex = 0, C.focus())
                        } else if ("ArrowRight" === m.code) {
                            var S = this.getTabsByScreenIndex(),
                                E = this.querySelector("x-doctab[tabindex=\"0\"]"),
                                L = this._getNextTabOnScreen(E);
                            L && (m.preventDefault(), E.tabIndex = -1, L.tabIndex = 0, L.focus())
                        }
                    }
                }, {
                    key: "_whenPointerMoved",
                    value: function() {
                        var m = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3;
                        return new Promise(function(w) {
                            var C = null,
                                S = function() {
                                    window.removeEventListener("pointermove", k), window.removeEventListener("pointerout", _), window.removeEventListener("blur", A)
                                },
                                k, _, A;
                            window.addEventListener("pointermove", k = function(L) {
                                if (null == C) C = {
                                    x: L.clientX,
                                    y: L.clientY
                                };
                                else {
                                    var D = {
                                        x: L.clientX,
                                        y: L.clientY
                                    };
                                    _getDistanceBetweenPoints(C, D) >= m && (S(), w())
                                }
                            }), window.addEventListener("pointerout", _ = function(L) {
                                null === L.toElement && (S(), w())
                            }), window.addEventListener("blur", A = function() {
                                S(), w()
                            })
                        })
                    }
                }, {
                    key: "_animateSelectionIndicator",
                    value: function(m, w) {
                        var k = this,
                            _ = this.getBoundingClientRect(),
                            A = m ? m.getBoundingClientRect() : null,
                            C = w.getBoundingClientRect(),
                            S = getComputedStyle(w);
                        null === A && (A = DOMRect.fromRect(C), A.x += A.width / 2, A.width = 0), this["#selection-indicator"].style.height = S.getPropertyValue("--selection-indicator-height"), this["#selection-indicator"].style.background = S.getPropertyValue("--selection-indicator-color"), this["#selection-indicator"].hidden = !1, this.setAttribute("animatingindicator", "");
                        var E = this["#selection-indicator"].animate([{
                            bottom: A.bottom - _.bottom + "px",
                            left: A.left - _.left + "px",
                            width: A.width + "px"
                        }, {
                            bottom: C.bottom - _.bottom + "px",
                            left: C.left - _.left + "px",
                            width: C.width + "px"
                        }], {
                            duration: 200,
                            iterations: 1,
                            delay: 0,
                            easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
                        });
                        return E.finished.then(function() {
                            k["#selection-indicator"].hidden = !0, k.removeAttribute("animatingindicator")
                        }), E
                    }
                }, {
                    key: "_moveSelectedTabRight",
                    value: function() {}
                }, {
                    key: "getTabsByScreenIndex",
                    value: function() {
                        var m = Symbol(),
                            w = !0,
                            k = !1,
                            _;
                        try {
                            for (var A = this.children[Symbol.iterator](), C, S; !(w = (C = A.next())
                                    .done); w = !0) S = C.value, S[m] = this._getTabScreenIndex(S)
                        } catch (E) {
                            k = !0, _ = E
                        } finally {
                            try {
                                !w && A.return && A.return()
                            } finally {
                                if (k) throw _
                            }
                        }
                        return [].concat(_toConsumableArray(this.children))
                            .sort(function(E, L) {
                                return E[m] > L[m]
                            })
                    }
                }, {
                    key: "_getTabScreenIndex",
                    value: function(m) {
                        var w = m.getBoundingClientRect(),
                            k = this.getBoundingClientRect();
                        if (w.left - k.left < w.width / 2) return 0;
                        for (var _ = w.width / 2, A = 1; A < this.maxTabs; A += 1) {
                            if (w.left - k.left >= _ && w.left - k.left < _ + w.width) return A > this.childElementCount - 1 ? this.childElementCount - 1 : A;
                            _ += w.width
                        }
                    }
                }, {
                    key: "_getTabWithScreenIndex",
                    value: function(m) {
                        var w = !0,
                            k = !1,
                            _;
                        try {
                            for (var A = this.children[Symbol.iterator](), C, S; !(w = (C = A.next())
                                    .done); w = !0)
                                if (S = C.value, this._getTabScreenIndex(S) === m) return S
                        } catch (E) {
                            k = !0, _ = E
                        } finally {
                            try {
                                !w && A.return && A.return()
                            } finally {
                                if (k) throw _
                            }
                        }
                        return null
                    }
                }, {
                    key: "_getPreviousTabOnScreen",
                    value: function(m) {
                        for (var w = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0, k = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !0, _ = this.getTabsByScreenIndex(), A = _.indexOf(m), C = null, S = A - 1, E; 0 <= S; S -= 1)
                            if (E = _[S], w && E.disabled) continue;
                            else {
                                C = E;
                                break
                            }
                        if (k && null === C)
                            for (var L = _.length - 1, D; L > A; L -= 1)
                                if (D = _[L], w && D.disabled) continue;
                                else {
                                    C = D;
                                    break
                                }
                        return C
                    }
                }, {
                    key: "_getNextTabOnScreen",
                    value: function(m) {
                        for (var w = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0, k = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !0, _ = this.getTabsByScreenIndex(), A = _.indexOf(m), C = null, S = A + 1, E; S < _.length; S += 1)
                            if (E = _[S], w && E.disabled) continue;
                            else {
                                C = E;
                                break
                            }
                        if (k && null === C)
                            for (var L = 0, D; L < A; L += 1)
                                if (D = _[L], w && D.disabled) continue;
                                else {
                                    C = D;
                                    break
                                }
                        return C
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        !0 === m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }, {
                    key: "maxTabs",
                    get: function() {
                        return this.hasAttribute("maxtabs") ? _parseInt2(this.getAttribute("maxtabs")) : 20
                    },
                    set: function(m) {
                        this.setAttribute("maxtabs", m)
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-doctabs", XDocTabsElement)
    } {
        var _html15 = Xel.utils.element.html,
            _sleep7 = Xel.utils.time.sleep,
            _parseFloat3 = _NumberparseFloat,
            _shadowTemplate14 = _html15(_templateObject17),
            XDrawerElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate14.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u["#overlay"] = _html15(_templateObject18), u["#overlay"].ownerElement = u, u["#overlay"].addEventListener("click", function(S) {
                        return u._onOverlayClick(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        !1 === this.hasAttribute("position") && this.setAttribute("position", "left"), !1 === this.opened && this.setAttribute("offscreen", "")
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "opened" === m && this._onOpenedAttributeChange()
                    }
                }, {
                    key: "_onOpenedAttributeChange",
                    value: function() {
                        this.opened ? this._open() : this._close()
                    }
                }, {
                    key: "_onOverlayClick",
                    value: function() {
                        this.opened = !1
                    }
                }, {
                    key: "_open",
                    value: function() {
                        var m = this;
                        return new Promise(async function(w) {
                            m["#overlay"].style.background = getComputedStyle(m)
                                .getPropertyValue("--backdrop-color"), m["#overlay"].show(!0); {
                                m.removeAttribute("offscreen");
                                var k = getComputedStyle(m),
                                    _ = k.width,
                                    A = k.height,
                                    C = k.marginLeft,
                                    S = null;
                                if ("auto" === C && (C = "0px"), "left" === m.position ? S = [{
                                        transform: "translateX(-" + _ + ")"
                                    }, {
                                        transform: "translateX(0px)"
                                    }] : "right" === m.position ? S = [{
                                        transform: "translateX(" + _ + ")"
                                    }, {
                                        transform: "translateX(0px)"
                                    }] : "top" === m.position ? S = [{
                                        transform: "translateY(-" + A + ")"
                                    }, {
                                        transform: "translateY(0px)"
                                    }] : "bottom" === m.position && (S = [{
                                        transform: "translateY(" + A + ")"
                                    }, {
                                        transform: "translateY(0px)"
                                    }]), S) {
                                    var E = k.transitionTimingFunction,
                                        L = k.transitionDuration,
                                        D = k.transitionDelay,
                                        R = m.animate(S, {
                                            duration: 1e3 * _parseFloat3(L),
                                            delay: 1e3 * _parseFloat3(D),
                                            easing: E,
                                            iterations: 1
                                        });
                                    m._currentAnimation = R, await R.finished
                                }
                            }
                            w()
                        })
                    }
                }, {
                    key: "_close",
                    value: function() {
                        var m = this;
                        return new Promise(async function(w) {
                            m["#overlay"].hide(!0); {
                                var k = getComputedStyle(m),
                                    _ = k.width,
                                    A = k.height,
                                    C = k.marginLeft,
                                    S = null;
                                if ("left" === m.position ? S = [{
                                        transform: "translateX(0px)"
                                    }, {
                                        transform: "translateX(-" + _ + ")"
                                    }] : "right" === m.position ? S = [{
                                        transform: "translateX(0px)"
                                    }, {
                                        transform: "translateX(" + _ + ")"
                                    }] : "top" === m.position ? S = [{
                                        transform: "translateY(0px)"
                                    }, {
                                        transform: "translateY(-" + A + ")"
                                    }] : "bottom" === m.position && (S = [{
                                        transform: "translateY(0px)"
                                    }, {
                                        transform: "translateY(" + A + ")"
                                    }]), S) {
                                    var E = k.transitionTimingFunction,
                                        L = k.transitionDuration,
                                        D = k.transitionDelay,
                                        R = m.animate(S, {
                                            duration: 1e3 * _parseFloat3(L),
                                            delay: 1e3 * _parseFloat3(D),
                                            easing: E,
                                            iterations: 1
                                        });
                                    m._currentAnimation = R, await R.finished, m._currentAnimation === R && m.setAttribute("offscreen", "")
                                }
                            }
                            w()
                        })
                    }
                }, {
                    key: "opened",
                    get: function() {
                        return this.hasAttribute("opened")
                    },
                    set: function(m) {
                        m ? this.setAttribute("opened", "") : this.removeAttribute("opened")
                    }
                }, {
                    key: "position",
                    get: function() {
                        return this.getAttribute("position") || "left"
                    },
                    set: function(m) {
                        this.setAttribute("position", m)
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["opened"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-drawer", XDrawerElement)
    } {
        var _html16 = Xel.utils.element.html,
            _shadowTemplate15 = _html16(_templateObject19),
            XBoxElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    return u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate15.content, !0)), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "vertical",
                    get: function() {
                        return this.hasAttribute("vertical")
                    },
                    set: function(m) {
                        m ? this.setAttribute("vertical", "") : this.removeAttribute("vertical")
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-box", XBoxElement)
    } {
        var _Xel$utils$element8 = Xel.utils.element,
            _generateUniqueID = _Xel$utils$element8.generateUniqueID,
            _html17 = _Xel$utils$element8.html,
            _shadowTemplate16 = _html17(_templateObject20),
            XLabelElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    return u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate16.content, !0)), u.addEventListener("click", function(m) {
                        return u._onClick(m)
                    }), u
                }
                return _inherits(n, o), _createClass(n, null, [{
                    key: "observedAttributes",
                    get: function() {
                        return ["for"]
                    }
                }]), _createClass(n, [{
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "for" === m && this._onForAttributeChange()
                    }
                }, {
                    key: "_onClick",
                    value: function() {
                        if (this.for && !1 === this.disabled) {
                            var w = this.getRootNode()
                                .querySelector("#" + this.for);
                            w && w.click()
                        }
                    }
                }, {
                    key: "_onForAttributeChange",
                    value: function() {
                        var m = this.getRootNode(),
                            w = m.querySelector("#" + this.for);
                        w && (!this.id && (this.id = _generateUniqueID(m, "label-")), w.setAttribute("aria-labelledby", this.id))
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : null
                    },
                    set: function(m) {
                        null === m ? this.removeAttribute("value") : this.setAttribute("value", m)
                    }
                }, {
                    key: "for",
                    get: function() {
                        return this.getAttribute("for")
                    },
                    set: function(m) {
                        this.setAttribute("for", m)
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-label", XLabelElement)
    } {
        var _Xel$utils$time = Xel.utils.time,
            _sleep8 = _Xel$utils$time.sleep,
            _getTimeStamp = _Xel$utils$time.getTimeStamp,
            _Xel$utils$element9 = Xel.utils.element,
            _closest5 = _Xel$utils$element9.closest,
            _html18 = _Xel$utils$element9.html,
            _abs = _Mathabs,
            windowWhitespace = 7,
            _shadowTemplate17 = _html18(_templateObject21),
            XMenuElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._delayPoints = [], u._delayTimeoutID = null, u._lastDelayPoint = null, u._lastScrollTop = 0, u._isPointerOverMenuBlock = !1, u._expandWhenScrolled = !1, u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate17.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("pointerover", function(S) {
                        return u._onPointerOver(S)
                    }), u.addEventListener("pointerout", function(S) {
                        return u._onPointerOut(S)
                    }), u.addEventListener("pointermove", function(S) {
                        return u._onPointerMove(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u.addEventListener("wheel", function(S) {
                        return u._onWheel(S)
                    }, {
                        passive: !0
                    }), u["#main"].addEventListener("scroll", function(S) {
                        return u._onScroll(S)
                    }, {
                        passive: !0
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("role", "menu"), this.setAttribute("aria-hidden", !this.opened), this.setAttribute("tabindex", "0")
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "opened" === m && this._onOpenedAttributeChange()
                    }
                }, {
                    key: "_onOpenedAttributeChange",
                    value: function() {
                        this.setAttribute("aria-hidden", !this.opened)
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        (m.target === this || "hr" === m.target.localName) && m.stopPropagation()
                    }
                }, {
                    key: "_onPointerOver",
                    value: function(m) {
                        var w = this;
                        if (!(this._isClosing() || "mouse" !== m.pointerType) && m.target.closest("x-menu") === this) {
                            !1 === this._isPointerOverMenuBlock && this._onMenuBlockPointerEnter(); {
                                var k = m.target.closest("x-menuitem");
                                k && !1 === k.disabled && k.closest("x-menu") === this ? !1 === k.matches(":focus") && this._delay(async function() {
                                    var _ = w.querySelector(":scope > x-menuitem:focus");
                                    if (_) {
                                        var A = _.querySelector("x-menu");
                                        A && A.close()
                                    }
                                    k.focus();
                                    var C = k.closest("x-menu"),
                                        S = k.querySelector("x-menu"),
                                        E = [].concat(_toConsumableArray(w.querySelectorAll(":scope > x-menuitem")))
                                        .filter(function(T) {
                                            return T !== k
                                        });
                                    S && (await _sleep8(60), k.matches(":focus") && !1 === S.opened && S.openNextToElement(k, "horizontal"));
                                    var L = !0,
                                        D = !1,
                                        R;
                                    try {
                                        for (var P = E[Symbol.iterator](), B; !(L = (B = P.next())
                                                .done); L = !0) {
                                            var M = B.value,
                                                I = M.querySelector("x-menu");
                                            I && I.close()
                                        }
                                    } catch (T) {
                                        D = !0, R = T
                                    } finally {
                                        try {
                                            !L && P.return && P.return()
                                        } finally {
                                            if (D) throw R
                                        }
                                    }
                                }) : this._delay(function() {
                                    w.focus()
                                })
                            }
                        }
                    }
                }, {
                    key: "_onPointerOut",
                    value: function(m) {
                        m.relatedTarget && _closest5(m.relatedTarget, "x-menu") === this || !0 !== this._isPointerOverMenuBlock || this._onMenuBlockPointerLeave()
                    }
                }, {
                    key: "_onMenuBlockPointerEnter",
                    value: function() {
                        this._isClosing() || (this._isPointerOverMenuBlock = !0, this._clearDelay())
                    }
                }, {
                    key: "_onMenuBlockPointerLeave",
                    value: function() {
                        this._isClosing() || (this._isPointerOverMenuBlock = !1, this._clearDelay(), this.focus())
                    }
                }, {
                    key: "_onPointerMove",
                    value: function(m) {
                        this._delayPoints.push({
                            x: m.clientX,
                            y: m.clientY
                        }), 3 < this._delayPoints.length && this._delayPoints.shift()
                    }
                }, {
                    key: "_onWheel",
                    value: function(m) {
                        this._isPointerOverMenuBlock = m.target.closest("x-menu") === this
                    }
                }, {
                    key: "_onScroll",
                    value: function() {
                        if (this._expandWhenScrolled) {
                            var w = this["#main"].scrollTop - this._lastScrollTop;
                            if (this._lastScrollTop = this["#main"].scrollTop, 100 < _getTimeStamp() - this._openedTimestamp) {
                                var k = this.getBoundingClientRect();
                                if (0 > w) this.style.height = k.bottom + _abs(w) <= window.innerHeight - windowWhitespace ? k.height + _abs(w) + "px" : window.innerHeight - k.top - windowWhitespace + "px";
                                else if (0 < w) {
                                    var _ = getComputedStyle(this),
                                        A = _.top,
                                        C = _.left,
                                        S = _.height;
                                    k.top - _abs(w) >= windowWhitespace ? (this.style.top = parseFloat(A) - _abs(w) + "px", this.style.height = parseFloat(S) + _abs(w) + "px", this["#main"].scrollTop = 0, this._lastScrollTop = 0) : (this.style.top = windowWhitespace + "px", this.style.height = window.innerHeight - k.top - windowWhitespace + "px")
                                }
                            }
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        if (this._isClosing()) m.preventDefault(), m.stopPropagation();
                        else if ("ArrowUp" === m.key) m.preventDefault(), m.stopPropagation(), this.focusPreviousMenuItem();
                        else if ("ArrowDown" === m.key) m.preventDefault(), m.stopPropagation(), this.focusNextMenuItem();
                        else if ("ArrowRight" === m.code || "Enter" === m.code || "Space" === m.code) {
                            var w = this.querySelector("x-menuitem:focus");
                            if (w) {
                                var k = w.querySelector("x-menu");
                                if (k) {
                                    m.preventDefault(), m.stopPropagation(), !1 === k.opened && k.openNextToElement(w, "horizontal");
                                    var _ = k.querySelector("x-menuitem:not([disabled]):not([hidden])");
                                    _ && _.focus()
                                }
                            }
                        } else if ("ArrowLeft" === m.code) {
                            var A = this.querySelector("x-menuitem:focus");
                            if (A) {
                                var C = A.closest("x-menu"),
                                    S = C.closest("x-menuitem");
                                S && S.closest("x-menu") && (m.preventDefault(), m.stopPropagation(), S.focus(), this.close())
                            }
                        }
                    }
                }, {
                    key: "openOverElement",
                    value: function(m, w) {
                        var k = this;
                        return new Promise(async function(_) {
                            var A = k.querySelectorAll(":scope > x-menuitem");
                            if (0 < A.length) {
                                k._expandWhenScrolled = !0, k._openedTimestamp = _getTimeStamp(), k._resetInlineStyles(), k.setAttribute("opened", "");
                                var C = [].concat(_toConsumableArray(A))
                                    .find(function(U) {
                                        return U.contains(w)
                                    }) || A[0],
                                    S = k.getBoundingClientRect(),
                                    E = m.getBoundingClientRect(),
                                    L = w.getBoundingClientRect(),
                                    D = 0,
                                    R = 0;
                                C.focus(), (0 !== S.top || 0 !== S.left) && (D = -S.left, R = -S.top), k.style.left = E.x - (L.x - S.x) + D + "px", k.style.top = E.y - (L.y - S.y) + R + "px", S = k.getBoundingClientRect(), S.left < windowWhitespace && (k.style.left = windowWhitespace + D + "px", S = k.getBoundingClientRect()); {
                                    var P = windowWhitespace - S.top;
                                    0 < P && (k.style.height = S.bottom - windowWhitespace + "px", k.style.top = windowWhitespace + R + "px", k["#main"].scrollTop = 9999, S = k.getBoundingClientRect())
                                } {
                                    if (S.bottom + windowWhitespace > window.innerHeight) {
                                        var B = S.bottom - window.innerHeight,
                                            M = S.height - B - windowWhitespace;
                                        k.style.height = M + "px"
                                    }
                                    if (S.right + windowWhitespace > window.innerWidth) {
                                        var I = S.right - window.innerWidth,
                                            T = S.width - I - windowWhitespace;
                                        k.style.width = T + "px"
                                    }
                                } {
                                    var N = getComputedStyle(k)
                                        .getPropertyValue("--open-transition"),
                                        O = k._parseTransistion(N),
                                        V = _slicedToArray(O, 3),
                                        F = V[0],
                                        H = V[1],
                                        K = V[2];
                                    if ("transform" === F) {
                                        var W = k.getBoundingClientRect(),
                                            X = E.y + E.height / 2 - W.top;
                                        await k.animate({
                                                transform: ["scaleY(0)", "scaleY(1)"],
                                                transformOrigin: ["0 " + X + "px", "0 " + X + "px"]
                                            }, {
                                                duration: H,
                                                easing: K
                                            })
                                            .finished
                                    }
                                }
                                k.dispatchEvent(new CustomEvent("open", {
                                    bubbles: !0,
                                    detail: k
                                }))
                            }
                            _()
                        })
                    }
                }, {
                    key: "openOverLabel",
                    value: function(m) {
                        var w = this;
                        return new Promise(async function(k) {
                            var _ = w.querySelectorAll(":scope > x-menuitem");
                            if (0 < _.length) {
                                w._resetInlineStyles(), w.setAttribute("opened", ""), w._expandWhenScrolled = !0, w._openedTimestamp = _getTimeStamp();
                                var A = [].concat(_toConsumableArray(_))
                                    .find(function(S) {
                                        var E = S.querySelector("x-label");
                                        return E && E.textContent === m.textContent
                                    });
                                A || (A = _[0]);
                                var C = A.querySelector("x-label");
                                await w.openOverElement(m, C)
                            }
                            k()
                        })
                    }
                }, {
                    key: "openNextToElement",
                    value: async function(m) {
                        var w = this,
                            k = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "horizontal",
                            _ = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        return new Promise(async function(A) {
                            w._expandWhenScrolled = !1, w._openedTimestamp = _getTimeStamp(), w._resetInlineStyles(), w.setAttribute("opened", ""), w.dispatchEvent(new CustomEvent("open", {
                                bubbles: !0,
                                detail: w
                            })), "x-menuitem" === m.localName && m.setAttribute("expanded", "");
                            var C = m.getBoundingClientRect(),
                                S = w.getBoundingClientRect(),
                                E = 0,
                                L = 0;
                            if ((0 !== S.top || 0 !== S.left) && (E = -S.left, L = -S.top), "horizontal" === k) {
                                w.style.top = C.top + L + "px", w.style.left = C.left + C.width + _ + E + "px";
                                var D = "right"; {
                                    var R = w.getBoundingClientRect();
                                    R.width > window.innerWidth - 10 && (w.style.width = window.innerWidth - 10 + "px"), R.height > window.innerHeight - 10 && (w.style.height = window.innerHeight - 10 + "px")
                                } {
                                    var P = w.getBoundingClientRect();
                                    P.left + P.width + windowWhitespace > window.innerWidth && (C.left > P.width + windowWhitespace ? (w.style.left = C.left - P.width + E + "px", D = "left") : C.left > window.innerWidth - (C.left + C.width) ? (w.style.left = windowWhitespace + E + "px", D = "left") : (w.style.left = window.innerWidth - P.width - windowWhitespace + E + "px", D = "right"))
                                } {
                                    var B = w.getBoundingClientRect();
                                    if (B.top + B.height + windowWhitespace > window.innerHeight) {
                                        var M = B.top + B.height + windowWhitespace - window.innerHeight;
                                        w.style.top = B.top - M + L + "px"
                                    }
                                } {
                                    var I = getComputedStyle(w)
                                        .getPropertyValue("--open-transition"),
                                        T = w._parseTransistion(I),
                                        N = _slicedToArray(T, 3),
                                        O = N[0],
                                        V = N[1],
                                        F = N[2];
                                    "transform" === O && (await w.animate({
                                            transform: ["scale(0, 0)", "scale(1, 1)"],
                                            transformOrigin: ["left" == D ? "100% 0" : "0 0", "left" == D ? "100% 0" : "0 0"]
                                        }, {
                                            duration: V,
                                            easing: F
                                        })
                                        .finished)
                                }
                            } else if ("vertical" === k) {
                                w.style.top = C.top + C.height + _ + L + "px", w.style.left = C.left + E + "px";
                                var H = "bottom"; {
                                    var K = w.getBoundingClientRect();
                                    K.width > window.innerWidth - 10 && (w.style.width = window.innerWidth - 10 + "px"), K.height > window.innerHeight - 10 && (w.style.height = window.innerHeight - 10 + "px")
                                }
                                if ("x-menubar" === m.parentElement.localName) {
                                    var W = w.getBoundingClientRect();
                                    W.top + W.height + windowWhitespace > window.innerHeight && (w.style.height = window.innerHeight - (C.top + C.height) - 10 + "px")
                                } else {
                                    var X = w.getBoundingClientRect();
                                    X.top + X.height + windowWhitespace > window.innerHeight && (C.top > X.height + windowWhitespace ? (w.style.top = C.top - X.height - _ + L + "px", H = "top") : C.top > window.innerHeight - (C.top + C.height) ? (w.style.top = windowWhitespace + L + "px", H = "top") : (w.style.top = window.innerHeight - X.height - windowWhitespace + L + "px", H = "bottom"))
                                } {
                                    var U = w.getBoundingClientRect();
                                    U.left + U.width + windowWhitespace > window.innerWidth && (w.style.left = C.left + C.width - U.width + E + "px")
                                } {
                                    var Z = w.getBoundingClientRect();
                                    Z.left < windowWhitespace && (w.style.left = windowWhitespace + E + "px")
                                } {
                                    var Y = getComputedStyle(w)
                                        .getPropertyValue("--open-transition"),
                                        G = w._parseTransistion(Y),
                                        $ = _slicedToArray(G, 3),
                                        Q = $[0],
                                        J = $[1],
                                        ee = $[2];
                                    "transform" === Q && (await w.animate({
                                            transform: ["scale(1, 0)", "scale(1, 1)"],
                                            transformOrigin: ["top" == H ? "0 100%" : "0 0", "top" == H ? "0 100%" : "0 0"]
                                        }, {
                                            duration: J,
                                            easing: ee
                                        })
                                        .finished)
                                }
                            }
                            A()
                        })
                    }
                }, {
                    key: "openAtPoint",
                    value: function(m, w) {
                        var k = this;
                        return new Promise(async function(_) {
                            k._expandWhenScrolled = !1, k._openedTimestamp = _getTimeStamp(), k._resetInlineStyles(), k.setAttribute("opened", ""), k.dispatchEvent(new CustomEvent("open", {
                                bubbles: !0,
                                detail: k
                            }));
                            var A = k.getBoundingClientRect(),
                                C = 0,
                                S = 0;
                            (0 !== A.top || 0 !== A.left) && (C = -A.left, S = -A.top), k.style.left = m + C + "px", k.style.top = w + S + "px", A = k.getBoundingClientRect(), A.right + windowWhitespace > window.innerWidth && (m -= A.width, k.style.left = m + C + "px", A = k.getBoundingClientRect()), A.bottom + windowWhitespace > window.innerHeight && (w = w + window.innerHeight - (A.top + A.height) - windowWhitespace, k.style.top = w + S + "px", A = k.getBoundingClientRect(), A.top < windowWhitespace && (w = windowWhitespace, k.style.top = w + S + "px", k.style.height = window.innerHeight - windowWhitespace - windowWhitespace + "px")); {
                                var E = getComputedStyle(k)
                                    .getPropertyValue("--open-transition"),
                                    L = k._parseTransistion(E),
                                    D = _slicedToArray(L, 3),
                                    R = D[0],
                                    P = D[1],
                                    B = D[2];
                                "transform" === R && (await k.animate({
                                        transform: ["scale(0)", "scale(1)"],
                                        transformOrigin: ["0 0", "0 0"]
                                    }, {
                                        duration: 80,
                                        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
                                    })
                                    .finished)
                            }
                            _()
                        })
                    }
                }, {
                    key: "close",
                    value: function() {
                        var m = this,
                            w = 0,
                            w2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
                        return new Promise(async function(k) {
                            if (m.opened) {
                                m.removeAttribute("opened"), m.dispatchEvent(new CustomEvent("close", {
                                    bubbles: !0,
                                    detail: m
                                }));
                                var _ = m.closest("x-menuitem");
                                if (_ && _.removeAttribute("expanded"), w) {
                                    m.setAttribute("animating", "");
                                    var A = getComputedStyle(m)
                                        .getPropertyValue("--close-transition"),
                                        C = m._parseTransistion(A),
                                        S = _slicedToArray(C, 3),
                                        E = S[0],
                                        L = S[1],
                                        D = S[2];
                                    "opacity" === E && (await m.animate({
                                            opacity: ["1", "0"]
                                        }, {
                                            duration: L,
                                            easing: D
                                        })
                                        .finished), m.removeAttribute("animating")
                                }
                                var R = !0,
                                    P = !1,
                                    B;
                                try {
                                    for (var M = m.querySelectorAll(":scope > x-menuitem")[Symbol.iterator](), I; !(R = (I = M.next())
                                            .done); R = !0) {
                                        var T = I.value,
                                            N = T.querySelector("x-menu[opened]");
                                        N && N.close()
                                    }
                                } catch (O) {
                                    P = !0, B = O
                                } finally {
                                    try {
                                        !R && M.return && M.return()
                                    } finally {
                                        if (P) throw B
                                    }
                                }
                            }
                            k()
                        })
                    }
                }, {
                    key: "focusNextMenuItem",
                    value: function() {
                        var m = this.querySelector(":scope > x-menuitem:focus, :scope > x-menuitem[expanded]");
                        if (m) {
                            for (var w = null, k = m.nextElementSibling; k; k = k.nextElementSibling)
                                if ("x-menuitem" === k.localName && !1 === k.disabled && !1 === k.hidden) {
                                    w = k;
                                    break
                                }
                            if (null === w) {
                                var _ = !0,
                                    A = !1,
                                    C;
                                try {
                                    for (var S = m.parentElement.children[Symbol.iterator](), E, L; !(_ = (E = S.next())
                                            .done); _ = !0)
                                        if (L = E.value, "x-menuitem" === L.localName && !1 === L.disabled && !1 === L.hidden) {
                                            w = L;
                                            break
                                        }
                                } catch (R) {
                                    A = !0, C = R
                                } finally {
                                    try {
                                        !_ && S.return && S.return()
                                    } finally {
                                        if (A) throw C
                                    }
                                }
                            }
                            if (w) {
                                w.focus();
                                var D = m.querySelector("x-menu");
                                D && D.close()
                            }
                        } else this.focusFirstMenuItem()
                    }
                }, {
                    key: "focusPreviousMenuItem",
                    value: function() {
                        var m = this.querySelector(":scope > x-menuitem:focus, :scope > x-menuitem[expanded]");
                        if (m) {
                            for (var w = null, k = m.previousElementSibling; k; k = k.previousElementSibling)
                                if ("x-menuitem" === k.localName && !1 === k.disabled && !1 === k.hidden) {
                                    w = k;
                                    break
                                }
                            if (null === w) {
                                var _ = !0,
                                    A = !1,
                                    C;
                                try {
                                    for (var S = [].concat(_toConsumableArray(m.parentElement.children))
                                            .reverse()[Symbol.iterator](), E, L; !(_ = (E = S.next())
                                            .done); _ = !0)
                                        if (L = E.value, "x-menuitem" === L.localName && !1 === L.disabled && !1 === L.hidden) {
                                            w = L;
                                            break
                                        }
                                } catch (R) {
                                    A = !0, C = R
                                } finally {
                                    try {
                                        !_ && S.return && S.return()
                                    } finally {
                                        if (A) throw C
                                    }
                                }
                            }
                            if (w) {
                                w.focus();
                                var D = m.querySelector("x-menu");
                                D && D.close()
                            }
                        } else this.focusLastMenuItem()
                    }
                }, {
                    key: "focusFirstMenuItem",
                    value: function() {
                        var m = this.querySelectorAll("x-menuitem:not([disabled]):not([hidden])"),
                            w = m[0] || null;
                        w && w.focus()
                    }
                }, {
                    key: "focusLastMenuItem",
                    value: function() {
                        var m = this.querySelectorAll("x-menuitem:not([disabled]):not([hidden])"),
                            w = 0 < m.length ? m[m.length - 1] : null;
                        w && w.focus()
                    }
                }, {
                    key: "_delay",
                    value: function(m) {
                        var w = this,
                            k = 75,
                            A = 0; {
                            var S = this._delayPoints[this._delayPoints.length - 1],
                                E = this._delayPoints[0],
                                L = this.querySelector("x-menu[opened]");
                            if (L && S) {
                                E || (E = S);
                                var D = this.getBoundingClientRect(),
                                    R = {
                                        x: D.left,
                                        y: D.top - k
                                    },
                                    P = {
                                        x: D.left + D.width,
                                        y: R.y
                                    },
                                    B = {
                                        x: D.left,
                                        y: D.top + D.height + k
                                    },
                                    M = {
                                        x: D.left + D.width,
                                        y: B.y
                                    },
                                    I = !0;
                                if ((E.x < D.left || E.x > M.x || E.y < D.top || E.y > M.y) && (I = !1), this._lastDelayPoint && S.x === this._lastDelayPoint.x && S.y === this._lastDelayPoint.y && (I = !1), I) {
                                    var T, N;
                                    T = P, N = M;
                                    var O = function(X, U) {
                                            return (U.y - X.y) / (U.x - X.x)
                                        },
                                        V = O(S, T),
                                        F = O(S, N),
                                        H = O(E, T),
                                        K = O(E, N);
                                    V < H && F > K ? (this._lastDelayPoint = S, A = 300) : this._lastDelayPoint = null
                                }
                            }
                        }
                        0 < A ? this._delayTimeoutID = setTimeout(function() {
                            w._delay(m)
                        }, A) : m()
                    }
                }, {
                    key: "_clearDelay",
                    value: function() {
                        this._delayTimeoutID && (clearTimeout(this._delayTimeoutID), this._delayTimeoutID = null)
                    }
                }, {
                    key: "_resetInlineStyles",
                    value: function() {
                        this.style.position = "fixed", this.style.top = "0px", this.style.left = "0px", this.style.width = null, this.style.height = null, this.style.minWidth = null, this.style.maxWidth = null
                    }
                }, {
                    key: "_isClosing",
                    value: function() {
                        return this.matches("*[closing], *[closing] x-menu")
                    }
                }, {
                    key: "_parseTransistion",
                    value: function(m) {
                        var w = m.trim()
                            .split(" "),
                            k = _toArray(w),
                            _ = k[0],
                            A = k[1],
                            C = k.slice(2),
                            S = parseFloat(_),
                            E = C.join(" ");
                        return [A, S, E]
                    }
                }, {
                    key: "opened",
                    get: function() {
                        return this.hasAttribute("opened")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["opened"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-menu", XMenuElement)
    } {
        var _html19 = Xel.utils.element.html,
            _sleep9 = Xel.utils.time.sleep,
            _debug = !1,
            _shadowTemplate18 = _html19(_templateObject22),
            XMenuBarElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._expanded = !1, u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate18.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("focusout", function(S) {
                        return u._onFocusOut(S)
                    }), u._shadowRoot.addEventListener("pointerover", function(S) {
                        return u._onShadowRootPointerOver(S)
                    }), u._shadowRoot.addEventListener("click", function(S) {
                        return u._onShadowRootClick(S)
                    }), u._shadowRoot.addEventListener("wheel", function(S) {
                        return u._onShadowRootWheel(S)
                    }), u._shadowRoot.addEventListener("keydown", function(S) {
                        return u._onShadowRootKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        var m = this;
                        this.setAttribute("role", "menubar"), this.setAttribute("aria-disabled", this.disabled), window.addEventListener("orientationchange", this._orientationChangeListener = function() {
                            m._onOrientationChange()
                        })
                    }
                }, {
                    key: "disconnectedCallback",
                    value: function() {
                        window.removeEventListener("orientationchange", this._orientationChangeListener)
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "_onFocusOut",
                    value: function(m) {
                        (null === m.relatedTarget || !1 === this.contains(m.relatedTarget)) && !1 == _debug && this._collapseMenubarItems()
                    }
                }, {
                    key: "_onOrientationChange",
                    value: function() {
                        this._collapseMenubarItems()
                    }
                }, {
                    key: "_onShadowRootWheel",
                    value: function(m) {
                        var w = this.querySelector("x-menu[opened]");
                        w && !1 === w.contains(m.target) && m.preventDefault()
                    }
                }, {
                    key: "_onShadowRootClick",
                    value: async function(m) {
                        if (!this.hasAttribute("closing")) {
                            var w = m.target.closest("x-menuitem"),
                                k = m.target.closest("x-menu");
                            if (w && !1 === w.disabled && (!k || k.contains(w))) {
                                var _ = w.querySelector("x-menu");
                                w.parentElement === this ? _ && (_.opened ? this._collapseMenubarItems() : this._expandMenubarItem(w)) : _ ? _.opened && !1 === _.opened && _.openNextToElement(w, "horizontal") : (this.setAttribute("closing", ""), await w.whenTriggerEnd, await this._collapseMenubarItems(), this.removeAttribute("closing"))
                            } else m.target === this["#overlay-path"] && (this._collapseMenubarItems(), m.preventDefault(), m.stopPropagation())
                        }
                    }
                }, {
                    key: "_onShadowRootPointerOver",
                    value: function(m) {
                        if (!this.hasAttribute("closing")) {
                            var w = m.target.closest("x-menuitem");
                            null === m.target.closest("x-menu") && w && w.parentElement === this && this._expanded && "mouse" === m.pointerType && (!1 === w.hasAttribute("expanded") ? this._expandMenubarItem(w) : w.focus())
                        }
                    }
                }, {
                    key: "_onShadowRootKeyDown",
                    value: function(m) {
                        if (this.hasAttribute("closing")) m.stopPropagation(), m.preventDefault();
                        else if ("Enter" === m.code || "Space" === m.code) {
                            var w = this.querySelector(":scope > x-menuitem:focus");
                            w && (m.preventDefault(), w.click())
                        } else if ("Escape" === m.code) this._expanded && (m.preventDefault(), this._collapseMenubarItems());
                        else if ("Tab" === m.code) {
                            var k = this.querySelector(":scope > x-menuitem:focus, :scope > x-menuitem[expanded]");
                            if (k) {
                                k.focus();
                                var _ = k.querySelector(":scope > x-menu");
                                _ && (_.tabIndex = -1, _.close()
                                    .then(function() {
                                        _.tabIndex = -1
                                    }))
                            }
                        } else if ("ArrowRight" === m.code) this._expandNextMenubarItem();
                        else if ("ArrowLeft" === m.code) this._expandPreviousMenubarItem();
                        else if ("ArrowDown" === m.code) {
                            var A = this.querySelector("x-menuitem:focus > x-menu");
                            A && (m.preventDefault(), A.focusFirstMenuItem())
                        } else if ("ArrowUp" === m.code) {
                            var C = this.querySelector("x-menuitem:focus > x-menu");
                            C && (m.preventDefault(), C.focusLastMenuItem())
                        }
                    }
                }, {
                    key: "_expandMenubarItem",
                    value: function(m) {
                        var w = m.querySelector(":scope > x-menu");
                        if (w && !1 === w.opened) {
                            m.focus(), this._expanded = !0, this.style.touchAction = "none"; {
                                w.openNextToElement(m, "vertical");
                                var k = this.querySelectorAll(":scope > x-menuitem > x-menu"),
                                    _ = [].concat(_toConsumableArray(k))
                                    .filter(function(T) {
                                        return T !== w
                                    }),
                                    A = !0,
                                    C = !1,
                                    S;
                                try {
                                    for (var E = _[Symbol.iterator](), L, D; !(A = (L = E.next())
                                            .done); A = !0) D = L.value, D && D.close(!1)
                                } catch (T) {
                                    C = !0, S = T
                                } finally {
                                    try {
                                        !A && E.return && E.return()
                                    } finally {
                                        if (C) throw S
                                    }
                                }
                            } {
                                var R = this.getBoundingClientRect(),
                                    P = R.x,
                                    B = R.y,
                                    M = R.width,
                                    I = R.height;
                                this["#overlay-path"].setAttribute("d", "\n            M 0 0\n            L " + window.innerWidth + " 0\n            L " + window.innerWidth + " " + window.innerHeight + "\n            L 0 " + window.innerHeight + "\n            L 0 0\n            M " + P + " " + B + "\n            L " + (P + M) + " " + B + "\n            L " + (P + M) + " " + (B + I) + "\n            L " + P + " " + (B + I) + "\n          "), this["#overlay"].removeAttribute("hidden")
                            }
                        }
                    }
                }, {
                    key: "_collapseMenubarItems",
                    value: function() {
                        var m = this;
                        return new Promise(async function(w) {
                            m._expanded = !1, m.style.touchAction = null, m["#overlay"].setAttribute("hidden", ""), m["#overlay-path"].setAttribute("d", ""); {
                                var k = m.querySelectorAll(":scope > x-menuitem > x-menu[opened]"),
                                    _ = !0,
                                    A = !1,
                                    C;
                                try {
                                    for (var S = k[Symbol.iterator](), E, L; !(_ = (E = S.next())
                                            .done); _ = !0) L = E.value, await L.close(!0)
                                } catch (R) {
                                    A = !0, C = R
                                } finally {
                                    try {
                                        !_ && S.return && S.return()
                                    } finally {
                                        if (A) throw C
                                    }
                                }
                            }
                            var D = m.querySelector("x-menuitem:focus");
                            D && D.blur(), w()
                        })
                    }
                }, {
                    key: "_expandPreviousMenubarItem",
                    value: function() {
                        var m = [].concat(_toConsumableArray(this.querySelectorAll(":scope > x-menuitem:not([disabled])"))),
                            w = this.querySelector(":focus")
                            .closest("x-menubar > x-menuitem");
                        if (1 < m.length && w) {
                            var k = m.indexOf(w),
                                _ = m[k - 1] || m[m.length - 1];
                            this._expandMenubarItem(_)
                        }
                    }
                }, {
                    key: "_expandNextMenubarItem",
                    value: function() {
                        var m = [].concat(_toConsumableArray(this.querySelectorAll(":scope > x-menuitem:not([disabled])"))),
                            w = this.querySelector(":focus")
                            .closest("x-menubar > x-menuitem");
                        if (w && 1 < m.length) {
                            var k = m.indexOf(w),
                                _ = m[k + 1] || m[0];
                            this._expandMenubarItem(_)
                        }
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-menubar", XMenuBarElement)
    } {
        var _Xel$utils$element10 = Xel.utils.element,
            _createElement7 = _Xel$utils$element10.createElement,
            _html20 = _Xel$utils$element10.html,
            _sleep10 = Xel.utils.time.sleep,
            _max4 = _Mathmax,
            _easing8 = "cubic-bezier(0.4, 0, 0.2, 1)",
            _shadowTemplate19 = _html20(_templateObject23),
            XMenuItemElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._observer = new MutationObserver(function() {
                        return u._update()
                    }), u._blinking = !1, u._triggerEndCallbacks = [], u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate19.content, !0)), u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    });
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this._observer.observe(this, {
                            childList: !0,
                            attributes: !1,
                            characterData: !1,
                            subtree: !1
                        }), this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "menuitem"), this.setAttribute("aria-disabled", this.disabled), this._update()
                    }
                }, {
                    key: "disconnectedCallback",
                    value: function() {
                        this._observer.disconnect()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "_onPointerDown",
                    value: async function(m) {
                        var w = this;
                        if (0 !== m.button) return !1;
                        if (this.matches("[closing] x-menuitem")) return event.preventDefault(), void event.stopPropagation();
                        event.stopPropagation(); {
                            var k = getComputedStyle(this)
                                .getPropertyValue("--trigger-effect")
                                .trim();
                            if ("ripple" === k) {
                                var _ = this["#ripples"].getBoundingClientRect(),
                                    A = 1.5 * _max4(_.width, _.height),
                                    C = m.clientY - _.y - A / 2,
                                    S = m.clientX - _.x - A / 2,
                                    E = new Promise(function(O) {
                                        return w.addEventListener("lostpointercapture", O, {
                                            once: !0
                                        })
                                    }),
                                    L = _createElement7("div");
                                L.setAttribute("class", "ripple pointer-down-ripple"), L.setAttribute("style", "width: " + A + "px; height: " + A + "px; top: " + C + "px; left: " + S + "px;"), this["#ripples"].append(L), this.setPointerCapture(m.pointerId);
                                var D = L.animate({
                                    transform: ["scale3d(0, 0, 0)", "none"]
                                }, {
                                    duration: 300,
                                    easing: _easing8
                                });
                                await E, await D.finished;
                                var R = L.animate({
                                    opacity: [getComputedStyle(L)
                                        .opacity, "0"
                                    ]
                                }, {
                                    duration: 300,
                                    easing: _easing8
                                });
                                if (await R.finished, L.remove(), 0 === this["#ripples"].childElementCount) {
                                    var P = !0,
                                        B = !1,
                                        M;
                                    try {
                                        for (var I = this._triggerEndCallbacks[Symbol.iterator](), T, N; !(P = (T = I.next())
                                                .done); P = !0) N = T.value, N()
                                    } catch (O) {
                                        B = !0, M = O
                                    } finally {
                                        try {
                                            !P && I.return && I.return()
                                        } finally {
                                            if (B) throw M
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "_onClick",
                    value: async function(m) {
                        if (!(0 < m.button || m.target.closest("x-menuitem") !== this || m.target.closest("x-menu") !== this.closest("x-menu") || this.matches("[closing] x-menuitem"))) {
                            var w = getComputedStyle(this)
                                .getPropertyValue("--trigger-effect")
                                .trim();
                            if ("ripple" === w) {
                                if (null === this["#ripples"].querySelector(".pointer-down-ripple")) {
                                    var k = this["#ripples"].getBoundingClientRect(),
                                        _ = 1.5 * _max4(k.width, k.height),
                                        A = k.y + k.height / 2 - k.y - _ / 2,
                                        C = k.x + k.width / 2 - k.x - _ / 2,
                                        S = _createElement7("div");
                                    S.setAttribute("class", "ripple click-ripple"), S.setAttribute("style", "width: " + _ + "px; height: " + _ + "px; top: " + A + "px; left: " + C + "px;"), this["#ripples"].append(S);
                                    var E = S.animate({
                                        transform: ["scale3d(0, 0, 0)", "none"]
                                    }, {
                                        duration: 300,
                                        easing: _easing8
                                    });
                                    await E.finished;
                                    var L = S.animate({
                                        opacity: [getComputedStyle(S)
                                            .opacity, "0"
                                        ]
                                    }, {
                                        duration: 300,
                                        easing: _easing8
                                    });
                                    if (await L.finished, S.remove(), 0 === this["#ripples"].childElementCount) {
                                        var D = !0,
                                            R = !1,
                                            P;
                                        try {
                                            for (var B = this._triggerEndCallbacks[Symbol.iterator](), M, I; !(D = (M = B.next())
                                                    .done); D = !0) I = M.value, I()
                                        } catch (K) {
                                            R = !0, P = K
                                        } finally {
                                            try {
                                                !D && B.return && B.return()
                                            } finally {
                                                if (R) throw P
                                            }
                                        }
                                    }
                                }
                            } else if ("blink" === w) {
                                this._blinking = !0, this.parentElement.focus(), await _sleep10(50), this.focus(), await _sleep10(50), this._blinking = !0;
                                var T = !0,
                                    N = !1,
                                    O;
                                try {
                                    for (var V = this._triggerEndCallbacks[Symbol.iterator](), F, H; !(T = (F = V.next())
                                            .done); T = !0) H = F.value, H()
                                } catch (K) {
                                    N = !0, O = K
                                } finally {
                                    try {
                                        !T && V.return && V.return()
                                    } finally {
                                        if (N) throw O
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        ("Enter" === m.code || "Space" === m.code) && (m.preventDefault(), !this.querySelector("x-menu") && (m.stopPropagation(), this.click()))
                    }
                }, {
                    key: "_update",
                    value: function() {
                        if ("x-menubar" === this.parentElement.localName) this["#arrow-icon"].hidden = !0;
                        else {
                            var m = this.querySelector("x-menu");
                            this["#arrow-icon"].hidden = !m
                        }
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : null
                    },
                    set: function(m) {
                        this.value !== m && (null === m ? this.removeAttribute("value") : this.setAttribute("value", m))
                    }
                }, {
                    key: "selected",
                    get: function() {
                        return !1 === this.hasAttribute("selected") ? null : "false" !== this.getAttribute("selected")
                    },
                    set: function(m) {
                        this.selected !== m && (null === m ? this.removeAttribute("selected") : !1 === m ? this.setAttribute("selected", "false") : this.setAttribute("selected", "true"))
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }, {
                    key: "whenTriggerEnd",
                    get: function() {
                        var m = this;
                        return new Promise(function(w) {
                            0 === m["#ripples"].childElementCount && !1 === m._blinking ? w() : m._triggerEndCallbacks.push(w)
                        })
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-menuitem", XMenuItemElement)
    } {
        var _html21 = Xel.utils.element.html,
            _normalize2 = Xel.utils.math.normalize,
            _shadowTemplate20 = _html21(_templateObject24),
            XProgressbarElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate20.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this._update()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m, w, k) {
                        w === k || ("value" === m ? this._update() : "disabled" === m && this._update())
                    }
                }, {
                    key: "_update",
                    value: function() {
                        if (this["#determinate-bar"].style.width = null === this.value || -1 === this.value || this.disabled ? "0%" : 100 * (this.value / this.max) + "%", !(null !== this.value && -1 !== this.value || this.disabled)) this._indeterminateAnimations || (this._indeterminateAnimations = [this["#primary-indeterminate-bar"].animate([{
                            left: "-35%",
                            right: "100%",
                            offset: 0
                        }, {
                            left: "100%",
                            right: "-90%",
                            offset: 0.6
                        }, {
                            left: "100%",
                            right: "-90%",
                            offset: 1
                        }], {
                            duration: 2e3,
                            easing: "ease-in-out",
                            iterations: Infinity
                        }), this["#secondary-indeterminate-bar"].animate([{
                            left: "-100%",
                            right: "100%",
                            offset: 0
                        }, {
                            left: "110%",
                            right: "-30%",
                            offset: 0.8
                        }, {
                            left: "110%",
                            right: "-30%",
                            offset: 1
                        }], {
                            duration: 2e3,
                            delay: 1e3,
                            easing: "ease-in-out",
                            iterations: Infinity
                        })]);
                        else if (this._indeterminateAnimations) {
                            var m = !0,
                                w = !1,
                                k;
                            try {
                                for (var _ = this._indeterminateAnimations[Symbol.iterator](), A, C; !(m = (A = _.next())
                                        .done); m = !0) C = A.value, C.cancel()
                            } catch (S) {
                                w = !0, k = S
                            } finally {
                                try {
                                    !m && _.return && _.return()
                                } finally {
                                    if (w) throw k
                                }
                            }
                            this._indeterminateAnimations = null
                        }
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? parseFloat(this.getAttribute("value")) : null
                    },
                    set: function(m) {
                        null === m ? this.removeAttribute("value") : this.setAttribute("value", m)
                    }
                }, {
                    key: "max",
                    get: function() {
                        return this.hasAttribute("max") ? parseFloat(this.getAttribute("max")) : 1
                    },
                    set: function(m) {
                        this.setAttribute("max", m)
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["value", "max", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-progressbar", XProgressbarElement)
    } {
        var _html22 = Xel.utils.element.html,
            _shadowTemplate21 = _html22(_templateObject25),
            XThrobberElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate21.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this._update()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m, w, k) {
                        w === k || "type" === m && this._update()
                    }
                }, {
                    key: "_update",
                    value: async function() {
                        var m = await fetch("node_modules/xel/images/" + this.type + "-throbber.svg"),
                            w = await m.text();
                        this["#main"].innerHTML = w, !1 === this.hasAttribute("type") && this.setAttribute("type", this.type)
                    }
                }, {
                    key: "type",
                    get: function() {
                        return this.hasAttribute("type") ? this.getAttribute("type") : "ring"
                    },
                    set: function(m) {
                        this.setAttribute("type", m)
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["type"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-throbber", XThrobberElement)
    } {
        var _Xel$utils$element11 = Xel.utils.element,
            _html23 = _Xel$utils$element11.html,
            _closest6 = _Xel$utils$element11.closest,
            _shadowTemplate22 = _html23(_templateObject26),
            XRadioElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate22.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.closest("x-radios") || this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "radio"), this.setAttribute("aria-checked", this.toggled), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "toggled" === m ? this._onToggledAttributeChange() : "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onToggledAttributeChange",
                    value: function() {
                        this.setAttribute("aria-checked", this.toggled)
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "_onClick",
                    value: function() {
                        this.closest("x-radios") || (this.toggled && this.mixed ? this.mixed = !1 : (this.mixed = !1, this.toggled = !this.toggled), this.dispatchEvent(new CustomEvent("change", {
                            bubbles: !0
                        })))
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        if (!1 === this.matches(":focus")) {
                            m.preventDefault();
                            var w = _closest6(this.parentNode, "[tabindex]");
                            w && w.focus()
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        ("Enter" === m.code || "Space" === m.code) && (m.preventDefault(), this.click())
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : null
                    },
                    set: function(m) {
                        null === m ? this.removeAttribute("value") : this.setAttribute("value", m)
                    }
                }, {
                    key: "toggled",
                    get: function() {
                        return this.hasAttribute("toggled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("toggled", "") : this.removeAttribute("toggled")
                    }
                }, {
                    key: "mixed",
                    get: function() {
                        return this.hasAttribute("mixed")
                    },
                    set: function(m) {
                        m ? this.setAttribute("mixed", "") : this.removeAttribute("mixed")
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["toggled", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-radio", XRadioElement)
    } {
        var XRadiosElement = function(o) {
            function n() {
                _classCallCheck(this, n);
                var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                    .call(this));
                return u._shadowRoot = u.attachShadow({
                    mode: "closed"
                }), u._shadowRoot.innerHTML = "<slot><\/slot>", u.addEventListener("click", function(m) {
                    return u._onClick(m)
                }, !0), u.addEventListener("keydown", function(m) {
                    return u._onKeyDown(m)
                }), u
            }
            return _inherits(n, o), _createClass(n, [{
                key: "connectedCallback",
                value: function() {
                    var m = this;
                    this.setAttribute("role", "radiogroup");
                    var w = [].concat(_toConsumableArray(this.querySelectorAll("x-radio")))
                        .filter(function(D) {
                            return D.closest("x-radios") === m
                        }),
                        k = w.find(function(D) {
                            return D.toggled && !D.disabled
                        }) || w.find(function(D) {
                            return !D.disabled
                        }),
                        _ = !0,
                        A = !1,
                        C;
                    try {
                        for (var S = w[Symbol.iterator](), E, L; !(_ = (E = S.next())
                                .done); _ = !0) L = E.value, L.setAttribute("tabindex", L === k ? "0 " : "-1"), L.setAttribute("aria-checked", L === k)
                    } catch (D) {
                        A = !0, C = D
                    } finally {
                        try {
                            !_ && S.return && S.return()
                        } finally {
                            if (A) throw C
                        }
                    }
                }
            }, {
                key: "_onClick",
                value: function(m) {
                    var w = this,
                        k = "x-radio" === m.target.localName ? m.target : null;
                    if (k && !k.toggled && !k.disabled && 0 === m.button) {
                        var _ = [].concat(_toConsumableArray(this.querySelectorAll("x-radio"))),
                            A = _.filter(function(P) {
                                return P.closest("x-radios") === w && P !== k
                            });
                        if (!1 === k.toggled || !0 === k.mixed) {
                            k.toggled = !0, k.mixed = !1, k.tabIndex = 0;
                            var C = !0,
                                S = !1,
                                E;
                            try {
                                for (var L = A[Symbol.iterator](), D, R; !(C = (D = L.next())
                                        .done); C = !0) R = D.value, R.toggled = !1, R.tabIndex = -1
                            } catch (P) {
                                S = !0, E = P
                            } finally {
                                try {
                                    !C && L.return && L.return()
                                } finally {
                                    if (S) throw E
                                }
                            }
                            this.dispatchEvent(new CustomEvent("toggle", {
                                bubbles: !0,
                                detail: k
                            }))
                        }
                    }
                }
            }, {
                key: "_onKeyDown",
                value: function(m) {
                    var w = this,
                        k = m.key;
                    if ("ArrowDown" === k || "ArrowRight" === k) {
                        var _ = [].concat(_toConsumableArray(this.querySelectorAll("x-radio"))),
                            A = _.filter(function(I) {
                                return !1 === I.disabled && I.closest("x-radios") === w
                            }),
                            C = _.find(function(I) {
                                return I.matches(":focus")
                            });
                        if (C) {
                            var S = A.indexOf(C),
                                E = 1 < A.length ? A[S + 1] || A[0] : null;
                            E && (m.preventDefault(), E.focus(), E.tabIndex = 0, C.tabIndex = -1)
                        }
                    } else if ("ArrowUp" === k || "ArrowLeft" === k) {
                        var L = [].concat(_toConsumableArray(this.querySelectorAll("x-radio"))),
                            D = L.filter(function(I) {
                                return !1 === I.disabled && I.closest("x-radios") === w
                            }),
                            R = L.find(function(I) {
                                return I.matches(":focus")
                            });
                        if (R) {
                            var P = D.indexOf(R),
                                B = D[D.length - 1],
                                M = 1 < D.length ? D[P - 1] || B : null;
                            M && (m.preventDefault(), M.focus(), M.tabIndex = 0, R.tabIndex = -1)
                        }
                    }
                }
            }]), n
        }(_CustomElement);
        customElements.define("x-radios", XRadiosElement)
    } {
        var _Xel$utils$element12 = Xel.utils.element,
            _createElement8 = _Xel$utils$element12.createElement,
            _html24 = _Xel$utils$element12.html,
            _closest7 = _Xel$utils$element12.closest,
            _Xel$utils$time2 = Xel.utils.time,
            _sleep11 = _Xel$utils$time2.sleep,
            _throttle = _Xel$utils$time2.throttle,
            _debug2 = !1,
            windowPadding = 7,
            $itemChild = Symbol(),
            _shadowTemplate23 = _html24(_templateObject27),
            XSelectElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._wasFocusedBeforeExpanding = !1, u._observer = new MutationObserver(function(S) {
                        return u._onMutation(S)
                    }), u._updateButtonTh300 = _throttle(u._updateButton, 300, u), u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate23.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u["#overlay"] = _createElement8("x-overlay"), u["#overlay"].style.opacity = "0", u["#overlay"].ownerElement = u, u["#overlay"].addEventListener("click", function(S) {
                        return u._onOverlayClick(S)
                    }), u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        var m = this;
                        this._observer.observe(this, {
                                childList: !0,
                                attributes: !0,
                                characterData: !0,
                                subtree: !0
                            }), this._updateAccessabiltyAttributes(), _debug2, _sleep11(500)
                            .then(function() {
                                return m._updateButtonTh300()
                            })
                    }
                }, {
                    key: "disconnectedCallback",
                    value: function() {
                        this._observer.disconnect()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "_onMutation",
                    value: function(m) {
                        var w = !0,
                            k = !1,
                            _;
                        try {
                            for (var A = m[Symbol.iterator](), C, S; !(w = (C = A.next())
                                    .done); w = !0) S = C.value, "attributes" === S.type && "x-menuitem" === S.target.localName && "selected" === S.attributeName && this._updateButtonTh300()
                        } catch (E) {
                            k = !0, _ = E
                        } finally {
                            try {
                                !w && A.return && A.return()
                            } finally {
                                if (k) throw _
                            }
                        }
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        m.target.closest("x-menu") || !1 !== this.matches(":focus") || m.preventDefault()
                    }
                }, {
                    key: "_onClick",
                    value: function(m) {
                        if (0 === m.button)
                            if (this._canExpand()) this._expand();
                            else if (this._canCollapse()) {
                            var w = m.target.closest("x-menuitem");
                            if (w) {
                                var k = this.value,
                                    _ = w.value,
                                    A = !0,
                                    C = !1,
                                    S;
                                try {
                                    for (var E = this.querySelectorAll("x-menuitem")[Symbol.iterator](), L, D; !(A = (L = E.next())
                                            .done); A = !0) D = L.value, D.selected = D === w
                                } catch (R) {
                                    C = !0, S = R
                                } finally {
                                    try {
                                        !A && E.return && E.return()
                                    } finally {
                                        if (C) throw S
                                    }
                                }
                                k !== _ && this.dispatchEvent(new CustomEvent("change", {
                                    bubbles: !0,
                                    detail: {
                                        oldValue: k,
                                        newValue: _
                                    }
                                })), this._collapse(w.whenTriggerEnd)
                            }
                        }
                    }
                }, {
                    key: "_onOverlayClick",
                    value: function() {
                        this._collapse()
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        this.querySelector(":scope > x-menu");
                        "Enter" === m.key || "Space" === m.key || "ArrowUp" === m.key || "ArrowDown" === m.key ? this._canExpand() && (m.preventDefault(), this._expand()) : "Escape" === m.key && this._canCollapse() && (m.preventDefault(), this._collapse())
                    }
                }, {
                    key: "_expand",
                    value: function() {
                        var m = this;
                        if (!1 !== this._canExpand()) {
                            this._wasFocusedBeforeExpanding = this.matches(":focus"), this["#overlay"].show(!1), window.addEventListener("resize", this._resizeListener = function() {
                                m._collapse()
                            }), window.addEventListener("blur", this._blurListener = function() {
                                m._collapse()
                            });
                            var w = this.querySelector(":scope > x-menu"); {
                                var k = null,
                                    _ = !0,
                                    A = !1,
                                    C;
                                try {
                                    for (var S = w.querySelectorAll("x-menuitem")[Symbol.iterator](), E, L; !(_ = (E = S.next())
                                            .done); _ = !0) L = E.value, null === L.selected ? L.selected = !1 : !0 === L.selected && (null == k ? k = L : L.selected = !1)
                                } catch (O) {
                                    A = !0, C = O
                                } finally {
                                    try {
                                        !_ && S.return && S.return()
                                    } finally {
                                        if (A) throw C
                                    }
                                }
                            } {
                                var D = w.querySelector("x-menuitem[selected=\"true\"]");
                                if (D) {
                                    var R = this["#button"].querySelector("x-label") || this["#button"].firstElementChild,
                                        P = R[$itemChild];
                                    w.openOverElement(R, P)
                                } else {
                                    var B = w.querySelector("x-menuitem")
                                        .firstElementChild;
                                    w.openOverElement(this["#button"], B)
                                }
                            } {
                                var M = w.getBoundingClientRect(),
                                    I = this["#button"].getBoundingClientRect(),
                                    T = parseFloat(getComputedStyle(this)
                                        .paddingRight);
                                M.right - T < I.right && (w.style.minWidth = I.right - M.left + T + "px")
                            } {
                                var N = this.getBoundingClientRect();
                                N.right + windowPadding > window.innerWidth && (this.style.maxWidth = window.innerWidth - N.left - windowPadding + "px")
                            }
                        }
                    }
                }, {
                    key: "_collapse",
                    value: async function() {
                        var m = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                        if (!1 !== this._canCollapse()) {
                            var w = this.querySelector(":scope > x-menu");
                            if (w.setAttribute("closing", ""), await m, this["#overlay"].hide(!1), this._wasFocusedBeforeExpanding) this.focus();
                            else {
                                var k = _closest7(this.parentNode, "[tabindex]");
                                k && k.focus()
                            }
                            window.removeEventListener("resize", this._resizeListener), window.removeEventListener("blur", this._blurListener), await w.close(), w.removeAttribute("closing")
                        }
                    }
                }, {
                    key: "_canExpand",
                    value: function() {
                        if (this.disabled) return !1;
                        var m = this.querySelector(":scope > x-menu"),
                            w = m.querySelector("x-menuitem");
                        return null !== m && !1 === m.opened && !1 === m.hasAttribute("closing") && null !== w
                    }
                }, {
                    key: "_canCollapse",
                    value: function() {
                        if (this.disabled) return !1;
                        var m = this.querySelector(":scope > x-menu"),
                            w = m.querySelector("x-menuitem");
                        return null !== m && !0 === m.opened && !1 === m.hasAttribute("closing")
                    }
                }, {
                    key: "_updateButton",
                    value: function() {
                        var m = this.querySelector(":scope > x-menu x-menuitem[selected=\"true\"]"),
                            w = this["#arrow-container"];
                        if (this["#button"].innerHTML = "", m) {
                            var k = !0,
                                _ = !1,
                                A;
                            try {
                                for (var C = m.children[Symbol.iterator](), S; !(k = (S = C.next())
                                        .done); k = !0) {
                                    var E = S.value,
                                        L = E.cloneNode(!0);
                                    if (L[$itemChild] = E, L.removeAttribute("id"), L.removeAttribute("style"), L.style.marginLeft = getComputedStyle(E)
                                        .marginLeft, ["x-icon", "x-swatch", "img", "svg"].includes(E.localName)) {
                                        var D = getComputedStyle(E),
                                            R = D.width,
                                            P = D.height,
                                            B = D.border;
                                        L.style.width = R, L.style.height = P, L.style.minWidth = R, L.style.border = B
                                    }
                                    this["#button"].append(L)
                                }
                            } catch (M) {
                                _ = !0, A = M
                            } finally {
                                try {
                                    !k && C.return && C.return()
                                } finally {
                                    if (_) throw A
                                }
                            }
                        }
                        this["#button"].append(w)
                    }
                }, {
                    key: "_updateAccessabiltyAttributes",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "button"), this.setAttribute("aria-disabled", this.disabled);
                        var m = this.querySelector(":scope > x-menu");
                        if (m) {
                            m.setAttribute("role", "listbox");
                            var w = !0,
                                k = !1,
                                _;
                            try {
                                for (var A = m.querySelectorAll("x-listitem")[Symbol.iterator](), C, S; !(w = (C = A.next())
                                        .done); w = !0) S = C.value, S.setAttribute("role", "option")
                            } catch (E) {
                                k = !0, _ = E
                            } finally {
                                try {
                                    !w && A.return && A.return()
                                } finally {
                                    if (k) throw _
                                }
                            }
                        }
                    }
                }, {
                    key: "value",
                    get: function() {
                        var m = this.querySelector("x-menuitem[selected=\"true\"]");
                        return m ? m.value : null
                    },
                    set: function(m) {
                        var w = !0,
                            k = !1,
                            _;
                        try {
                            for (var A = this.querySelectorAll("x-menuitem")[Symbol.iterator](), C, S; !(w = (C = A.next())
                                    .done); w = !0) S = C.value, S.selected = S.value === m && null !== m
                        } catch (E) {
                            k = !0, _ = E
                        } finally {
                            try {
                                !w && A.return && A.return()
                            } finally {
                                if (k) throw _
                            }
                        }
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-select", XSelectElement)
    } {
        var _html25 = Xel.utils.element.html,
            isAppleDevice = navigator.platform.startsWith("Mac") || ["iPhone", "iPad"].includes(navigator.platform),
            modKeys = ["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Symbol", "SymbolLock"],
            _shadowTemplate24 = _html25(_templateObject28),
            XShortcutElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate24.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "value" === m && this._update()
                    }
                }, {
                    key: "_update",
                    value: function() {
                        var m = "",
                            w = this.value,
                            k = this.modKeys,
                            _ = this.normalKey;
                        if (isAppleDevice) {
                            k.includes("Meta") && (m += "^"), k.includes("Alt") && (m += "\u2325"), k.includes("Shift") && (m += "\u21E7"), k.includes("Control") && (m += "\u2318"), k.includes("Symbol") && (m += "\u263A");
                            void 0 !== _ && (m += {
                                ArrowUp: "\u2191",
                                ArrowDown: "\u2193",
                                ArrowLeft: "\u2190",
                                ArrowRight: "\u2192",
                                Backspace: "\u2326"
                            }[_] || _)
                        } else {
                            var C = [];
                            k.includes("Control") && C.push("Ctrl"), k.includes("Alt") && C.push("Alt"), k.includes("Meta") && C.push("Meta"), k.includes("Shift") && C.push("Shift"), k.includes("Symbol") && C.push("Symbol");
                            null !== _ && C.push({
                                ArrowUp: "Up",
                                ArrowDown: "Down",
                                ArrowLeft: "Left",
                                ArrowRight: "Right"
                            }[_] || _), m = C.join("+")
                        }
                        this["#main"].textContent = m
                    }
                }, {
                    key: "value",
                    get: function() {
                        var m = [];
                        if (this.hasAttribute("value")) {
                            var w = this.getAttribute("value")
                                .replace("++", "+PLUS")
                                .split("+");
                            w = w.map(function(k) {
                                    return k.trim()
                                        .replace("PLUS", "+")
                                })
                                .filter(function(k) {
                                    return "" !== k
                                }), m = w
                        }
                        return m
                    },
                    set: function(m) {
                        this.setAttribute("value", m.join("+"))
                    }
                }, {
                    key: "modKeys",
                    get: function() {
                        return this.value.filter(function(m) {
                            return modKeys.includes(m)
                        })
                    }
                }, {
                    key: "normalKey",
                    get: function() {
                        var m = this.value.find(function(w) {
                            return !1 === modKeys.includes(w)
                        });
                        return void 0 === m ? null : m
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["value"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-shortcut", XShortcutElement)
    } {
        var _html26 = Xel.utils.element.html,
            _shadowTemplate25 = _html26(_templateObject29),
            XSwatchElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate25.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this._update()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "value" === m && this._update()
                    }
                }, {
                    key: "_update",
                    value: function() {
                        this["#main"].style.background = this.value
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : "white"
                    },
                    set: function(m) {
                        this.setAttribute("value", m)
                    }
                }, {
                    key: "selected",
                    get: function() {
                        return this.hasAttribute("selected")
                    },
                    set: function(m) {
                        m ? this.setAttribute("selected", "") : this.removeAttribute("selected")
                    }
                }, {
                    key: "showicon",
                    get: function() {
                        return this.hasAttribute("showicon")
                    },
                    set: function(m) {
                        m ? this.setAttribute("showicon", "") : this.removeAttribute("showicon")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-swatch", XSwatchElement)
    } {
        var _Xel$utils$element13 = Xel.utils.element,
            _createElement9 = _Xel$utils$element13.createElement,
            _html27 = _Xel$utils$element13.html,
            _closest8 = _Xel$utils$element13.closest,
            _easing9 = "cubic-bezier(0.4, 0, 0.2, 1)",
            _shadowTemplate26 = _html27(_templateObject30),
            XSwitchElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate26.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "switch"), this.setAttribute("aria-checked", this.mixed ? "mixed" : this.toggled), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "toggled" === m ? this._onToggledAttributeChange() : "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onToggledAttributeChange",
                    value: function() {
                        this.setAttribute("aria-checked", this.mixed ? "mixed" : this.toggled)
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        if (!1 === this.matches(":focus")) {
                            m.preventDefault();
                            var w = _closest8(this.parentNode, "[tabindex]");
                            w && w.focus()
                        } {
                            var k = getComputedStyle(this)
                                .getPropertyValue("--ripple-type")
                                .trim();
                            if ("unbounded" === k) {
                                var _ = _createElement9("div");
                                _.setAttribute("class", "ripple"), this["#ripples"].append(_);
                                var A = _.animate({
                                    transform: ["translate(-50%, -50%) scale(0)", "translate(-50%, -50%) scale(1)"]
                                }, {
                                    duration: 200,
                                    easing: _easing9
                                });
                                this.setPointerCapture(m.pointerId), this.addEventListener("lostpointercapture", async function() {
                                    await A.finished;
                                    var C = _.animate({
                                        opacity: [getComputedStyle(_)
                                            .opacity, "0"
                                        ]
                                    }, {
                                        duration: 200,
                                        easing: _easing9
                                    });
                                    await C.finished, _.remove()
                                }, {
                                    once: !0
                                })
                            }
                        }
                    }
                }, {
                    key: "_onClick",
                    value: async function(m) {
                        if (this.mixed ? this.mixed = !1 : this.toggled = !this.toggled, this.dispatchEvent(new CustomEvent("change")), !1 === m.isTrusted) {
                            var w = getComputedStyle(this)
                                .getPropertyValue("--ripple-type")
                                .trim();
                            if ("unbounded" === w) {
                                var k = _createElement9("div");
                                k.setAttribute("class", "ripple"), this["#ripples"].append(k), await k.animate({
                                        transform: ["translate(-50%, -50%) scale(0)", "translate(-50%, -50%) scale(1)"]
                                    }, {
                                        duration: 200,
                                        easing: _easing9
                                    })
                                    .finished, await k.animate({
                                        opacity: [getComputedStyle(k)
                                            .opacity, "0"
                                        ]
                                    }, {
                                        duration: 200,
                                        easing: _easing9
                                    })
                                    .finished, k.remove()
                            }
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        ("Enter" === m.code || "Space" === m.code) && (m.preventDefault(), this.click())
                    }
                }, {
                    key: "toggled",
                    get: function() {
                        return this.hasAttribute("toggled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("toggled", "") : this.removeAttribute("toggled")
                    }
                }, {
                    key: "mixed",
                    get: function() {
                        return this.hasAttribute("mixed")
                    },
                    set: function(m) {
                        m ? this.setAttribute("mixed", "") : this.removeAttribute("mixed")
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["toggled", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-switch", XSwitchElement)
    } {
        var _Xel$utils$element14 = Xel.utils.element,
            _html28 = _Xel$utils$element14.html,
            _closest9 = _Xel$utils$element14.closest,
            _Xel$utils$math2 = Xel.utils.math,
            _normalize3 = _Xel$utils$math2.normalize,
            _round2 = _Xel$utils$math2.round,
            _getPrecision = _Xel$utils$math2.getPrecision,
            _throttle2 = Xel.utils.time.throttle,
            getClosestMultiple = function(n, u) {
                return _round2(_round2(n / u) * u, _getPrecision(u))
            },
            _shadowTemplate27 = _html28(_templateObject31),
            XSliderElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate27.content, !0)), u._observer = new MutationObserver(function(S) {
                        return u._onMutation(S)
                    }), u._updateTicks500ms = _throttle2(u._updateTicks, 500, u);
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u._shadowRoot.addEventListener("pointerdown", function(S) {
                        return u._onShadowRootPointerDown(S)
                    }), u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "attributeChangedCallback",
                    value: function(m, w, k) {
                        w === k || "value" === m && this._onValueAttributeChange()
                    }
                }, {
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled), this.setAttribute("value", this.value), this._observer.observe(this, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                            attributeFilter: ["value"],
                            characterData: !1
                        }), this._update()
                    }
                }, {
                    key: "disconnectedCallback",
                    value: function() {
                        this._observer.disconnect()
                    }
                }, {
                    key: "_onValueAttributeChange",
                    value: function() {
                        this._updateTracks(), this._updateThumbs()
                    }
                }, {
                    key: "_onMutation",
                    value: function(m) {
                        var w = !0,
                            k = !1,
                            _;
                        try {
                            for (var A = m[Symbol.iterator](), C, S; !(w = (C = A.next())
                                    .done); w = !0) {
                                if (S = C.value, "attributes" === S.type && S.target === this) return;
                                this._updateTicks500ms()
                            }
                        } catch (E) {
                            k = !0, _ = E
                        } finally {
                            try {
                                !w && A.return && A.return()
                            } finally {
                                if (k) throw _
                            }
                        }
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        if (!1 === this.matches(":focus")) {
                            m.preventDefault();
                            var w = _closest9(this.parentNode, "[tabindex]");
                            w && w.focus()
                        }
                    }
                }, {
                    key: "_onShadowRootPointerDown",
                    value: function(m) {
                        var w = this;
                        if (0 === m.button && !1 !== m.isPrimary) {
                            var k = this["#thumbs"].getBoundingClientRect(),
                                _ = this["#start-thumb"],
                                A = _.getBoundingClientRect(),
                                E = !1,
                                C, S;
                            this.setPointerCapture(m.pointerId);
                            var L = function(R) {
                                var B = R - k.x - A.width / 2;
                                B = _normalize3(B, 0, k.width);
                                var M = B / k.width * (w.max - w.min) + w.min;
                                M = getClosestMultiple(M, w.step), w.value !== M && (w.value = M, !1 == E && (E = !0, w.dispatchEvent(new CustomEvent("changestart", {
                                    bubbles: !0
                                }))), w.dispatchEvent(new CustomEvent("change", {
                                    bubbles: !0
                                })))
                            };
                            event.target.closest(".thumb") !== _ && L(m.clientX, !0), this.addEventListener("pointermove", C = function(R) {
                                R.isPrimary && L(R.clientX, !1)
                            }), this.addEventListener("lostpointercapture", S = function() {
                                w.removeEventListener("pointermove", C), w.removeEventListener("lostpointercapture", S), E && w.dispatchEvent(new CustomEvent("changeend", {
                                    bubbles: !0
                                }))
                            })
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        if ("ArrowLeft" === m.code || "ArrowDown" === m.code) {
                            m.preventDefault(), this.dispatchEvent(new CustomEvent("changestart", {
                                bubbles: !0
                            }));
                            var w = this.value;
                            this.value -= m.shiftKey ? 10 * this.step : this.step, w !== this.value && this.dispatchEvent(new CustomEvent("change", {
                                bubbles: !0
                            })), this.dispatchEvent(new CustomEvent("changeend", {
                                bubbles: !0
                            }))
                        } else if ("ArrowRight" === m.code || "ArrowUp" === m.code) {
                            m.preventDefault(), this.dispatchEvent(new CustomEvent("changestart", {
                                bubbles: !0
                            }));
                            var k = this.value;
                            this.value += m.shiftKey ? 10 * this.step : this.step, k !== this.value && this.dispatchEvent(new CustomEvent("change", {
                                bubbles: !0
                            })), this.dispatchEvent(new CustomEvent("changeend", {
                                bubbles: !0
                            }))
                        }
                    }
                }, {
                    key: "_update",
                    value: function() {
                        this._updateTracks(), this._updateThumbs(), this._updateTicks()
                    }
                }, {
                    key: "_updateTracks",
                    value: function() {
                        var m = 100 * ((this.value - this.min) / (this.max - this.min)),
                            w = 100 * (((0 < this.min ? this.min : 0) - this.min) / (this.max - this.min));
                        m >= w ? (this["#tint-track"].style.left = w + "%", this["#tint-track"].style.width = m - w + "%") : (this["#tint-track"].style.left = m + "%", this["#tint-track"].style.width = w - m + "%")
                    }
                }, {
                    key: "_updateThumbs",
                    value: function() {
                        this["#start-thumb"].style.left = 100 * ((this.value - this.min) / (this.max - this.min)) + "%"
                    }
                }, {
                    key: "_updateTicks",
                    value: function() {
                        this["#ticks"].innerHTML = "";
                        var m = !0,
                            w = !1,
                            k;
                        try {
                            for (var _ = this.querySelectorAll(":scope > x-label")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                    .done); m = !0) C = A.value, C.style.left = 100 * ((C.value - this.min) / (this.max - this.min)) + "%", this["#ticks"].insertAdjacentHTML("beforeend", "<div class=\"tick\" style=\"left: " + C.style.left + "\"><\/div>")
                        } catch (S) {
                            w = !0, k = S
                        } finally {
                            try {
                                !m && _.return && _.return()
                            } finally {
                                if (w) throw k
                            }
                        }
                    }
                }, {
                    key: "min",
                    get: function() {
                        return this.hasAttribute("min") ? parseFloat(this.getAttribute("min")) : 0
                    },
                    set: function(m) {
                        this.setAttribute("min", m)
                    }
                }, {
                    key: "max",
                    get: function() {
                        return this.hasAttribute("max") ? parseFloat(this.getAttribute("max")) : 100
                    },
                    set: function(m) {
                        this.setAttribute("max", m)
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? parseFloat(this.getAttribute("value")) : this.max >= this.min ? this.min + (this.max - this.min) / 2 : this.min
                    },
                    set: function(m) {
                        m = _normalize3(m, this.min, this.max), this.setAttribute("value", m)
                    }
                }, {
                    key: "step",
                    get: function() {
                        return this.hasAttribute("step") ? parseFloat(this.getAttribute("step")) : 1
                    },
                    set: function(m) {
                        this.setAttribute("step", m)
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["value"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-slider", XSliderElement)
    } {
        var _html29 = Xel.utils.element.html,
            _sleep12 = Xel.utils.time.sleep,
            _shadowTemplate28 = _html29(_templateObject32),
            XStepperElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate28.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u._shadowRoot.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.hasAttribute("disabled") && (this["#increment-button"].removeAttribute("data-pressed"), this["#decrement-button"].removeAttribute("data-pressed"))
                    }
                }, {
                    key: "_onPointerDown",
                    value: async function(m) {
                        var w = this,
                            k = m.target.closest(".button"),
                            _ = null;
                        if (k === this["#increment-button"] ? _ = "increment" : k === this["#decrement-button"] && (_ = "decrement"), 0 === m.button && null !== _) {
                            {
                                var A = Date.now();
                                k.setAttribute("data-pressed", ""), this.setPointerCapture(m.pointerId), this.addEventListener("lostpointercapture", async function() {
                                    var D = Date.now() - A,
                                        R = 100;
                                    D < R && (await _sleep12(R - D)), k.removeAttribute("data-pressed")
                                }, {
                                    once: !0
                                })
                            } {
                                var C = null,
                                    S = Date.now(),
                                    E = m.shiftKey;
                                this.dispatchEvent(new CustomEvent(_ + "start", {
                                    bubbles: !0
                                })), this.dispatchEvent(new CustomEvent(_, {
                                    bubbles: !0,
                                    detail: {
                                        shiftKey: E
                                    }
                                })), this.addEventListener("lostpointercapture", async function() {
                                    clearInterval(C), w.dispatchEvent(new CustomEvent(_ + "end", {
                                        bubbles: !0
                                    }))
                                }, {
                                    once: !0
                                }), C = setInterval(function() {
                                    500 < Date.now() - S && w.dispatchEvent(new CustomEvent(_, {
                                        bubbles: !0,
                                        detail: {
                                            shiftKey: E
                                        }
                                    }))
                                }, 100)
                            }
                        }
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return !!this.hasAttribute("disabled") && ("increment" === this.getAttribute("disabled") ? "increment" : "decrement" !== this.getAttribute("disabled") || "decrement")
                    },
                    set: function(m) {
                        !0 === m ? this.setAttribute("disabled", "") : !1 === m ? this.removeAttribute("disabled") : this.setAttribute("disabled", m)
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-stepper", XStepperElement)
    } {
        var _Xel$utils$element15 = Xel.utils.element,
            _createElement10 = _Xel$utils$element15.createElement,
            _html30 = _Xel$utils$element15.html,
            _closest10 = _Xel$utils$element15.closest,
            _shadowTemplate29 = _html30(_templateObject33),
            XTabsElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._wasFocusedBeforeExpanding = !1, u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate29.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u["#overlay"] = _createElement10("x-overlay"), u["#overlay"].style.background = "rgba(0, 0, 0, 0)", u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("role", "tablist")
                    }
                }, {
                    key: "_onClick",
                    value: function(m) {
                        if (0 === m.button)
                            if (m.target.closest("x-overlay")) this._collapse();
                            else if (m.target.closest("x-menu")) {
                            var w = m.target.closest("x-menuitem");
                            if (w && !1 === w.disabled) {
                                var k = w.querySelector("x-menu");
                                k ? k.opened ? k.close() : k.openNextToElement(w, "horizontal") : this._collapse(w.whenTriggerEnd)
                            }
                        } else if (m.target.closest("x-tab")) {
                            var _ = this.querySelectorAll("x-tab"),
                                A = m.target.closest("x-tab"),
                                C = this.querySelector("x-tab[selected]"),
                                S = A.querySelector(":scope > x-menu");
                            if (A !== C)
                                if (S) this._expand(A);
                                else {
                                    var E = !0,
                                        L = !1,
                                        D;
                                    try {
                                        for (var R = _[Symbol.iterator](), P, B; !(E = (P = R.next())
                                                .done); E = !0) B = P.value, B.selected = B === A
                                    } catch (M) {
                                        L = !0, D = M
                                    } finally {
                                        try {
                                            !E && R.return && R.return()
                                        } finally {
                                            if (L) throw D
                                        }
                                    }
                                    this._animateSelectionIndicator(C, A), this.dispatchEvent(new CustomEvent("change", {
                                        bubbles: !0
                                    }))
                                }
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        if ("Enter" === m.code || "Space" === m.code) {
                            var w = m.target,
                                k = w.querySelector("x-menu"),
                                _ = w.querySelector("x-label");
                            k ? k.opened ? (this._collapse(), m.preventDefault()) : (this._expand(w), m.preventDefault()) : (m.preventDefault(), w.click())
                        } else if ("Escape" === m.code) {
                            var A = m.target.closest("x-tab"),
                                C = A.querySelector("x-menu");
                            C && this._collapse()
                        } else if ("ArrowLeft" === m.code) {
                            var S = [].concat(_toConsumableArray(this.querySelectorAll("x-tab:not([disabled])"))),
                                E = this.querySelector("x-tab[tabindex=\"0\"]"),
                                L = m.target,
                                D = this.querySelector("x-menu[opened]");
                            if (m.preventDefault(), D);
                            else if (E && 0 < S.length) {
                                var R = S.indexOf(E),
                                    P = S[R - 1] || S[S.length - 1];
                                E.tabIndex = -1, P.tabIndex = 0, P.focus()
                            }
                        } else if ("ArrowRight" === m.code) {
                            var B = [].concat(_toConsumableArray(this.querySelectorAll("x-tab:not([disabled])"))),
                                M = this.querySelector("x-tab[tabindex=\"0\"]"),
                                I = m.target,
                                T = this.querySelector("x-menu[opened]");
                            if (m.preventDefault(), T);
                            else if (M && 0 < B.length) {
                                var N = B.indexOf(M),
                                    O = B[N + 1] || B[0];
                                M.tabIndex = -1, O.tabIndex = 0, O.focus()
                            }
                        } else if ("ArrowUp" === m.code) {
                            var V = m.target.closest("x-tab"),
                                F = V.querySelector("x-menu");
                            if (F)
                                if (m.preventDefault(), F.opened) {
                                    var H = F.querySelector(":scope > x-menuitem:last-of-type:not([disabled])");
                                    H && H.focus()
                                } else this._expand(V)
                        } else if ("ArrowDown" === m.code) {
                            var K = m.target.closest("x-tab"),
                                W = K.querySelector("x-menu");
                            if (W)
                                if (m.preventDefault(), W.opened) {
                                    var X = W.querySelector(":scope > x-menuitem:not([disabled])");
                                    X && X.focus()
                                } else this._expand(K)
                        }
                    }
                }, {
                    key: "_expand",
                    value: function(m) {
                        var w = this;
                        return new Promise(async function(k) {
                            var _ = m.querySelector(":scope > x-menu"),
                                A = m.querySelector("x-label");
                            if (_) {
                                w._wasFocusedBeforeExpanding = null !== w.querySelector("*:focus");
                                var C = "over" === getComputedStyle(m)
                                    .getPropertyValue("--menu-position")
                                    .trim(),
                                    S = C ? _.openOverLabel(A) : _.openNextToElement(m, "vertical", 3);
                                m.setAttribute("expanded", ""), _.addEventListener("close", function() {
                                    var E = w.querySelectorAll("x-tab"),
                                        L = m;
                                    if (w._wasFocusedBeforeExpanding) {
                                        var D = !0,
                                            R = !1,
                                            P;
                                        try {
                                            for (var B = E[Symbol.iterator](), M, I; !(D = (M = B.next())
                                                    .done); D = !0) I = M.value, I.tabIndex = I === L ? 0 : -1
                                        } catch (W) {
                                            R = !0, P = W
                                        } finally {
                                            try {
                                                !D && B.return && B.return()
                                            } finally {
                                                if (R) throw P
                                            }
                                        }
                                        L.focus()
                                    } else {
                                        var T = !0,
                                            N = !1,
                                            O;
                                        try {
                                            for (var V = E[Symbol.iterator](), F, H; !(T = (F = V.next())
                                                    .done); T = !0) H = F.value, H.tabIndex = H.selected ? 0 : -1
                                        } catch (W) {
                                            N = !0, O = W
                                        } finally {
                                            try {
                                                !T && V.return && V.return()
                                            } finally {
                                                if (N) throw O
                                            }
                                        }
                                        var K = _closest10(w.parentNode, "[tabindex]");
                                        K && K.focus()
                                    }
                                }, {
                                    once: !0
                                }), await S, m.querySelector("*:focus") || _.focus(), w["#overlay"].ownerElement = _, w["#overlay"].show(!1)
                            }
                            k()
                        })
                    }
                }, {
                    key: "_collapse",
                    value: function(m) {
                        var w = this;
                        return new Promise(async function() {
                            var _ = w.querySelector("x-menu[opened]");
                            if (_ && !_.hasAttribute("closing")) {
                                var A = w.querySelectorAll("x-tab"),
                                    C = _.closest("x-tab");
                                _.setAttribute("closing", ""), await m, await _.close(), w["#overlay"].hide(!1), _.removeAttribute("closing"), C.removeAttribute("expanded")
                            }
                        })
                    }
                }, {
                    key: "_animateSelectionIndicator",
                    value: function(m, w) {
                        var k = this;
                        return new Promise(async function(_) {
                            var A = k.getBoundingClientRect(),
                                C = m ? m.getBoundingClientRect() : null,
                                S = w.getBoundingClientRect(),
                                E = getComputedStyle(w);
                            if (null === C && (C = DOMRect.fromRect(S), C.x += C.width / 2, C.width = 0), k["#selection-indicator"].style.height = E.getPropertyValue("--selection-indicator-height"), "0px" !== k["#selection-indicator"].style.height) {
                                k["#selection-indicator"].style.background = E.getPropertyValue("--selection-indicator-background"), k["#selection-indicator"].hidden = !1, k.setAttribute("animatingindicator", "");
                                var L = k["#selection-indicator"].animate([{
                                    bottom: C.bottom - A.bottom + "px",
                                    left: C.left - A.left + "px",
                                    width: C.width + "px"
                                }, {
                                    bottom: S.bottom - A.bottom + "px",
                                    left: S.left - A.left + "px",
                                    width: S.width + "px"
                                }], {
                                    duration: 100,
                                    iterations: 1,
                                    delay: 0,
                                    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)"
                                });
                                await L.finished, k["#selection-indicator"].hidden = !0, k.removeAttribute("animatingindicator")
                            }
                            _()
                        })
                    }
                }, {
                    key: "value",
                    get: function() {
                        var m = this.querySelector("x-tab[selected]");
                        return m ? m.value : null
                    },
                    set: function(m) {
                        var w = [].concat(_toConsumableArray(this.querySelectorAll("x-tab"))),
                            k = null === m ? null : w.find(function(D) {
                                return D.value === m
                            }),
                            _ = !0,
                            A = !1,
                            C;
                        try {
                            for (var S = w[Symbol.iterator](), E, L; !(_ = (E = S.next())
                                    .done); _ = !0) L = E.value, L.selected = L === k
                        } catch (D) {
                            A = !0, C = D
                        } finally {
                            try {
                                !_ && S.return && S.return()
                            } finally {
                                if (A) throw C
                            }
                        }
                    }
                }, {
                    key: "centered",
                    get: function() {
                        return this.hasAttribute("centered")
                    },
                    set: function(m) {
                        !0 === m ? this.setAttribute("centered", "") : this.removeAttribute("centered")
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-tabs", XTabsElement)
    } {
        var _max5 = _Mathmax,
            _Xel$utils$element16 = Xel.utils.element,
            _createElement11 = _Xel$utils$element16.createElement,
            _html31 = _Xel$utils$element16.html,
            _closest11 = _Xel$utils$element16.closest,
            _sleep13 = Xel.utils.time.sleep,
            _easing10 = "cubic-bezier(0.4, 0, 0.2, 1)",
            _shadowTemplate30 = _html31(_templateObject34),
            XTabElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate30.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.selected ? "0" : "-1"), this.setAttribute("role", "tab"), this.setAttribute("aria-selected", this.selected), this.setAttribute("aria-disabled", this.disabled), this._updateArrowVisibility()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "selected" === m ? this._onSelectedAttributeChange() : "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onSelectedAttributeChange",
                    value: function() {
                        this.setAttribute("aria-selected", this.selected), this.setAttribute("tabindex", this.selected ? "0" : "-1")
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("aria-disabled", this.disabled), this.setAttribute("tabindex", this.selected ? "0" : "-1")
                    }
                }, {
                    key: "_onPointerDown",
                    value: async function(m) {
                        var w = this;
                        if (!1 === this.matches(":focus") && !event.target.closest("x-menu, x-popup")) {
                            event.preventDefault();
                            var k = _closest11(this.parentNode, "[tabindex]");
                            k && k.focus()
                        }
                        if (!(0 !== m.button || this.querySelector("x-menu"))) {
                            {
                                var _ = Date.now();
                                this.setAttribute("pressed", ""), this.setPointerCapture(m.pointerId), this.addEventListener("lostpointercapture", async function() {
                                    if (!0 === w.selected) {
                                        var T = Date.now() - _,
                                            N = 100;
                                        T < N && (await _sleep13(N - T))
                                    }
                                    w.removeAttribute("pressed")
                                }, {
                                    once: !0
                                })
                            } {
                                var A = getComputedStyle(this)
                                    .getPropertyValue("--trigger-effect")
                                    .trim();
                                if ("ripple" === A) {
                                    var C = this["#ripples"].getBoundingClientRect(),
                                        S = 1.5 * _max5(C.width, C.height),
                                        E = m.clientY - C.y - S / 2,
                                        L = m.clientX - C.x - S / 2,
                                        D = new Promise(function(I) {
                                            return w.addEventListener("lostpointercapture", I, {
                                                once: !0
                                            })
                                        }),
                                        R = _createElement11("div");
                                    R.setAttribute("class", "ripple pointer-down-ripple"), R.setAttribute("style", "width: " + S + "px; height: " + S + "px; top: " + E + "px; left: " + L + "px;"), this["#ripples"].append(R), this.setPointerCapture(m.pointerId), R.hidden = !0, await _sleep13(10), R.hidden = !1;
                                    var P = R.animate({
                                        transform: ["scale(0)", "scale(1)"]
                                    }, {
                                        duration: 300,
                                        easing: _easing10
                                    });
                                    await D, await P.finished;
                                    var B = getComputedStyle(R)
                                        .opacity,
                                        M = R.animate({
                                            opacity: [B, "0"]
                                        }, {
                                            duration: 300,
                                            easing: _easing10
                                        });
                                    await M.finished, R.remove()
                                }
                            }
                        }
                    }
                }, {
                    key: "_onClick",
                    value: async function() {
                        if (null === this["#ripples"].querySelector(".pointer-down-ripple") && !this.querySelector("x-menu")) {
                            var w = getComputedStyle(this)
                                .getPropertyValue("--trigger-effect")
                                .trim();
                            if ("ripple" === w) {
                                var k = this["#ripples"].getBoundingClientRect(),
                                    _ = 1.5 * _max5(k.width, k.height),
                                    A = k.y + k.height / 2 - k.y - _ / 2,
                                    C = k.x + k.width / 2 - k.x - _ / 2,
                                    S = _createElement11("div");
                                S.setAttribute("class", "ripple click-ripple"), S.setAttribute("style", "width: " + _ + "px; height: " + _ + "px; top: " + A + "px; left: " + C + "px;"), this["#ripples"].append(S);
                                var E = S.animate({
                                    transform: ["scale(0)", "scale(1)"]
                                }, {
                                    duration: 300,
                                    easing: _easing10
                                });
                                await E.finished;
                                var L = getComputedStyle(S)
                                    .opacity,
                                    D = S.animate({
                                        opacity: [L, "0"]
                                    }, {
                                        duration: 300,
                                        easing: _easing10
                                    });
                                await D.finished, S.remove()
                            }
                        }
                    }
                }, {
                    key: "_updateArrowVisibility",
                    value: function() {
                        var m = this.querySelector("x-menu"),
                            w = this.querySelector("x-popover");
                        this["#arrow"].style.display = null === m && null === w ? "none" : null
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : ""
                    },
                    set: function(m) {
                        this.setAttribute("value", m)
                    }
                }, {
                    key: "selected",
                    get: function() {
                        return this.hasAttribute("selected")
                    },
                    set: function(m) {
                        m ? this.setAttribute("selected", "") : this.removeAttribute("selected")
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["selected", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-tab", XTabElement)
    } {
        var _html32 = Xel.utils.element.html,
            _isValidColorString = Xel.utils.color.isValidColorString,
            _shadowTemplate31 = _html32(_templateObject35),
            XInputElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed",
                        delegatesFocus: !0
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate31.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("focusin", function() {
                        return u._onFocusIn()
                    }), u.addEventListener("focusout", function() {
                        return u._onFocusOut()
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u["#input"].addEventListener("change", function() {
                        return u._onInputChange()
                    }), u["#input"].addEventListener("input", function(S) {
                        return u._onInputInput(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "input"), this.setAttribute("aria-disabled", this.disabled), this._update()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "type" === m ? this._onTypeAttributeChange() : "value" === m ? this._onValueAttributeChange() : "spellcheck" === m ? this._onSpellcheckAttributeChange() : "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "selectAll",
                    value: function() {
                        this["#input"].select()
                    }
                }, {
                    key: "validate",
                    value: function() {
                        var m = !0,
                            w = "";
                        return this.value.length < this.minLength ? (m = !1, w = "Entered text is too short") : this.value.length > this.maxLength ? (m = !1, w = "Entered text is too long") : this.required && 0 === this.value.length && !0 === this.visited ? (m = !1, w = "This field is required") : "email" === this.type && !1 === this["#input"].validity.valid ? (m = !1, w = "Invalid e-mail address") : "url" === this.type && !1 === this["#input"].validity.valid ? (m = !1, w = "Invalid URL") : "color" === this.type && !1 === _isValidColorString(this["#input"].value) && (m = !1, w = "Invalid color"), {
                            valid: m,
                            hint: w
                        }
                    }
                }, {
                    key: "_onTypeAttributeChange",
                    value: function() {
                        this["#input"].type = "color" === this.type ? "text" : this.type
                    }
                }, {
                    key: "_onValueAttributeChange",
                    value: function() {
                        this.value = this.hasAttribute("value") ? this.getAttribute("value") : "", this.matches(":focus") && document.execCommand("selectAll"), this._update()
                    }
                }, {
                    key: "_onSpellcheckAttributeChange",
                    value: function() {
                        this["#input"].spellcheck = this.spellcheck
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled), this["#input"].disabled = this.disabled
                    }
                }, {
                    key: "_onFocusIn",
                    value: function() {
                        this.visited = !0, this.dispatchEvent(new CustomEvent("textinputmodestart", {
                            bubbles: !0,
                            composed: !0
                        }))
                    }
                }, {
                    key: "_onFocusOut",
                    value: function() {
                        this.dispatchEvent(new CustomEvent("textinputmodeend", {
                            bubbles: !0,
                            composed: !0
                        })), this._updateInvalidState()
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        //"Enter" === m.key && (document.execCommand("selectAll"), this._updateInvalidState())
                    }
                }, {
                    key: "_onInputInput",
                    value: function(m) {
                        this.instantValidation ? this._updateInvalidState() : this.invalid && this._updateInvalidState(), m.stopPropagation(), this._updateEmptyState(), this.dispatchEvent(new CustomEvent("input", {
                            bubbles: !0
                        }))
                    }
                }, {
                    key: "_onInputChange",
                    value: function() {
                        this._updateInvalidState(), this.dispatchEvent(new CustomEvent("change", {
                            bubbles: !0
                        }))
                    }
                }, {
                    key: "_update",
                    value: function() {
                        this._updateInvalidState(), this._updateEmptyState()
                    }
                }, {
                    key: "_updateInvalidState",
                    value: function() {
                        if (this.visited) {
                            var m = this.validate(),
                                w = m.valid,
                                k = m.hint;
                            w ? (this.removeAttribute("invalid"), this.removeAttribute("invalid-hint")) : (this.setAttribute("invalid", ""), this.setAttribute("invalid-hint", k))
                        }
                    }
                }, {
                    key: "_updateEmptyState",
                    value: function() {
                        0 === this.value.length ? this.setAttribute("empty", "") : this.removeAttribute("empty")
                    }
                }, {
                    key: "type",
                    get: function() {
                        return this.hasAttribute("type") ? this.getAttribute("type") : "text"
                    },
                    set: function(m) {
                        this.setAttribute("type", m)
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this["#input"].value
                    },
                    set: function(m) {
                        this["#input"].value !== m && (this.matches(":focus") ? (this["#input"].selectionStart = 0, this["#input"].selectionEnd = this["#input"].value.length, document.execCommand("insertText", !1, m)) : this["#input"].value = m, this._update())
                    }
                }, {
                    key: "instantValidation",
                    get: function() {
                        return this.hasAttribute("instantvalidation")
                    },
                    set: function(m) {
                        !0 === m ? this.setAttribute("instantvalidation", "") : this.removeAttribute("instantvalidation")
                    }
                }, {
                    key: "spellcheck",
                    get: function() {
                        return this.hasAttribute("spellcheck")
                    },
                    set: function(m) {
                        m ? this.setAttribute("spellcheck", "") : this.removeAttribute("spellcheck")
                    }
                }, {
                    key: "minLength",
                    get: function() {
                        return this.hasAttribute("minlength") ? parseInt(this.getAttribute("minlength")) : 0
                    },
                    set: function(m) {
                        this.setAttribute("minlength", m)
                    }
                }, {
                    key: "maxLength",
                    get: function() {
                        return this.hasAttribute("maxlength") ? parseInt(this.getAttribute("maxlength")) : Infinity
                    },
                    set: function(m) {
                        this.setAttribute("maxlength", m)
                    }
                }, {
                    key: "required",
                    get: function() {
                        return this.hasAttribute("required")
                    },
                    set: function(m) {
                        m ? this.setAttribute("required", "") : this.removeAttribute("required")
                    }
                }, {
                    key: "visited",
                    get: function() {
                        return this.hasAttribute("visited")
                    },
                    set: function(m) {
                        m ? this.setAttribute("visited", "") : this.removeAttribute("visited")
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }, {
                    key: "invalid",
                    get: function() {
                        return this.hasAttribute("invalid")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["type", "value", "spellcheck", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-input", XInputElement)
    } {
        var _isFinite2 = _NumberisFinite,
            _html33 = Xel.utils.element.html,
            _isNumeric = Xel.utils.string.isNumeric,
            _debounce = Xel.utils.time.debounce,
            _Xel$utils$math3 = Xel.utils.math,
            _normalize4 = _Xel$utils$math3.normalize,
            _getPrecision2 = _Xel$utils$math3.getPrecision,
            numericKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+", ",", "."],
            _shadowTemplate32 = _html33(_templateObject36),
            XNumberInputElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._isDragging = !1, u._isChangeStart = !1, u._isArrowKeyDown = !1, u._isBackspaceKeyDown = !1, u._isStepperButtonDown = !1, u._maybeDispatchChangeEndEvent = _debounce(u._maybeDispatchChangeEndEvent, 500, u), u._shadowRoot = u.attachShadow({
                        mode: "closed",
                        delegatesFocus: !0
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate32.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u._shadowRoot.addEventListener("pointerdown", function(S) {
                        return u._onShadowRootPointerDown(S)
                    }), u._shadowRoot.addEventListener("wheel", function(S) {
                        return u._onWheel(S)
                    }), u["#editor"].addEventListener("paste", function(S) {
                        return u._onPaste(S)
                    }), u["#editor"].addEventListener("input", function(S) {
                        return u._onEditorInput(S)
                    }), u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u.addEventListener("keyup", function(S) {
                        return u._onKeyUp(S)
                    }), u.addEventListener("keypress", function(S) {
                        return u._onKeyPress(S)
                    }), u.addEventListener("incrementstart", function(S) {
                        return u._onStepperIncrementStart(S)
                    }), u.addEventListener("decrementstart", function(S) {
                        return u._onStepperDecrementStart(S)
                    }), u.addEventListener("focusin", function(S) {
                        return u._onFocusIn(S)
                    }), u.addEventListener("focusout", function(S) {
                        return u._onFocusOut(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "input"), this.setAttribute("aria-disabled", this.disabled), this._update()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "value" === m ? this._onValueAttributeChange() : "min" === m ? this._onMinAttributeChange() : "max" === m ? this._onMaxAttributeChange() : "prefix" === m ? this._onPrefixAttributeChange() : "suffix" === m ? this._onSuffixAttributeChange() : "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "_onValueAttributeChange",
                    value: function() {
                        this._update()
                    }
                }, {
                    key: "_onMinAttributeChange",
                    value: function() {
                        this._updateStepper()
                    }
                }, {
                    key: "_onMaxAttributeChange",
                    value: function() {
                        this._updateStepper()
                    }
                }, {
                    key: "_onPrefixAttributeChange",
                    value: function() {
                        this["#editor"].setAttribute("data-prefix", this.prefix)
                    }
                }, {
                    key: "_onSuffixAttributeChange",
                    value: function() {
                        this["#editor"].setAttribute("data-suffix", this.suffix)
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled), this["#editor"].disabled = this.disabled
                    }
                }, {
                    key: "_onFocusIn",
                    value: function() {
                        document.execCommand("selectAll"), this.dispatchEvent(new CustomEvent("textinputmodestart", {
                            bubbles: !0,
                            composed: !0
                        })), this.visited = !0
                    }
                }, {
                    key: "_onFocusOut",
                    value: function() {
                        this._shadowRoot.getSelection()
                            .collapse(this["#main"]), this._commitEditorChanges(), this.dispatchEvent(new CustomEvent("textinputmodeend", {
                                bubbles: !0,
                                composed: !0
                            }))
                    }
                }, {
                    key: "_onEditorInput",
                    value: function() {
                        this._updateState(), this._updateStepper()
                    }
                }, {
                    key: "_onWheel",
                    value: function(m) {
                        this.matches(":focus") && (m.preventDefault(), this._maybeDispatchChangeStartEvent(), 0 < m.wheelDeltaX || 0 < m.wheelDeltaY ? (this._increment(m.shiftKey), this.dispatchEvent(new CustomEvent("change", {
                            bubbles: !0
                        }))) : (this._decrement(m.shiftKey), this.dispatchEvent(new CustomEvent("change", {
                            bubbles: !0
                        }))), this._maybeDispatchChangeEndEvent())
                    }
                }, {
                    key: "_onClick",
                    value: function(m) {
                        m.preventDefault()
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        "x-stepper" === m.target.localName && m.preventDefault()
                    }
                }, {
                    key: "_onShadowRootPointerDown",
                    value: function(m) {
                        var w = this;
                        if (0 !== m.button || !1 === m.isPrimary) return void m.preventDefault();
                        if (m.target === this["#editor"] && !1 === this["#editor"].matches(":focus")) {
                            m.preventDefault();
                            var k = this.value,
                                _ = null,
                                A, C;
                            this.style.cursor = "col-resize", this["#editor"].setPointerCapture(m.pointerId), this["#editor"].addEventListener("pointermove", A = function(E) {
                                if (E.clientX !== _ && !1 !== E.isPrimary) {
                                    !1 === w._isDragging && (w._isDragging = !0, w._isChangeStart = !0, w.dispatchEvent(new CustomEvent("changestart", {
                                        bubbles: !0
                                    }))), _ = E.clientX;
                                    var L = E.clientX - m.clientX,
                                        D = k + L * w.step;
                                    D = _normalize4(D, w.min, w.max, _getPrecision2(w.step)), w.value = D, w.dispatchEvent(new CustomEvent("change", {
                                        bubbles: !0
                                    }))
                                }
                            }), this["#editor"].addEventListener("lostpointercapture", C = function() {
                                w["#editor"].removeEventListener("pointermove", A), w["#editor"].removeEventListener("lostpointercapture", C), w.style.cursor = null, !0 === w._isDragging ? (w._isDragging = !1, w._isChangeStart = !1, w.dispatchEvent(new CustomEvent("changeend", {
                                    detail: w.value !== k,
                                    bubbles: !0
                                }))) : (w["#editor"].focus(), document.execCommand("selectAll"))
                            })
                        }
                    }
                }, {
                    key: "_onStepperIncrementStart",
                    value: function() {
                        var w = this,
                            k, _;
                        this._isStepperButtonDown = !0, this.addEventListener("increment", k = function(C) {
                            w._maybeDispatchChangeStartEvent(), w._increment(C.detail.shiftKey), w.dispatchEvent(new CustomEvent("change", {
                                bubbles: !0
                            })), w._maybeDispatchChangeEndEvent(), w._update()
                        }), this.addEventListener("incrementend", _ = function() {
                            w._isStepperButtonDown = !1, w.removeEventListener("increment", k), w.removeEventListener("incrementend", _)
                        })
                    }
                }, {
                    key: "_onStepperDecrementStart",
                    value: function() {
                        var w = this,
                            k, _;
                        this._isStepperButtonDown = !0, this.addEventListener("decrement", k = function(C) {
                            w._maybeDispatchChangeStartEvent(), w._decrement(C.detail.shiftKey), w.dispatchEvent(new CustomEvent("change", {
                                bubbles: !0
                            })), w._maybeDispatchChangeEndEvent(), w._update()
                        }), this.addEventListener("decrementend", _ = function() {
                            w._isStepperButtonDown = !1, w.removeEventListener("decrement", k), w.removeEventListener("decrementend", _)
                        })
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        "ArrowDown" === m.code ? (m.preventDefault(), this._isArrowKeyDown = !0, this._maybeDispatchChangeStartEvent(), this._decrement(m.shiftKey), this.dispatchEvent(new CustomEvent("change", {
                            bubbles: !0
                        })), this._maybeDispatchChangeEndEvent(), this._update()) : "ArrowUp" === m.code ? (m.preventDefault(), this._isArrowKeyDown = !0, this._maybeDispatchChangeStartEvent(), this._increment(m.shiftKey), this.dispatchEvent(new CustomEvent("change", {
                            bubbles: !0
                        })), this._maybeDispatchChangeEndEvent(), this._update()) : "Backspace" === m.code ? this._isBackspaceKeyDown = !0 : "Enter" === m.code && (this._commitEditorChanges(), document.execCommand("selectAll"))
                    }
                }, {
                    key: "_onKeyUp",
                    value: function(m) {
                        "ArrowDown" === m.code ? (this._isArrowKeyDown = !1, this._maybeDispatchChangeEndEvent()) : "ArrowUp" === m.code ? (this._isArrowKeyDown = !1, this._maybeDispatchChangeEndEvent()) : "Backspace" === m.code && (this._isBackspaceKeyDown = !1)
                    }
                }, {
                    key: "_onKeyPress",
                    value: function(m) {
                        !1 === numericKeys.includes(m.key) && m.preventDefault()
                    }
                }, {
                    key: "_onPaste",
                    value: function(m) {
                        m.preventDefault();
                        var w = m.clipboardData.getData("text/plain")
                            .trim();
                        _isNumeric(w) && document.execCommand("insertText", !1, w)
                    }
                }, {
                    key: "validate",
                    value: function() {
                        var m = !0;
                        return this.value < this.min ? m = !1 : this.value > this.max ? m = !1 : this.required && null === this.value && !0 === this.visited && (m = !1), m
                    }
                }, {
                    key: "_maybeDispatchChangeStartEvent",
                    value: function() {
                        this._isChangeStart || (this._isChangeStart = !0, this.dispatchEvent(new CustomEvent("changestart", {
                            bubbles: !0
                        })))
                    }
                }, {
                    key: "_maybeDispatchChangeEndEvent",
                    value: function() {
                        !this._isChangeStart || this._isArrowKeyDown || this._isBackspaceKeyDown || this._isStepperButtonDown || (this._isChangeStart = !1, this.dispatchEvent(new CustomEvent("changeend", {
                            bubbles: !0
                        })))
                    }
                }, {
                    key: "_commitEditorChanges",
                    value: function() {
                        var m = "" === this["#editor"].textContent.trim() ? null : parseFloat(this["#editor"].textContent);
                        m !== this.value && (this.dispatchEvent(new CustomEvent("changestart", {
                            bubbles: !0
                        })), this.value = m, this.dispatchEvent(new CustomEvent("change", {
                            bubbles: !0
                        })), this.dispatchEvent(new CustomEvent("changeend", {
                            bubbles: !0
                        })))
                    }
                }, {
                    key: "_increment",
                    value: function() {
                        var m = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                            w = this.value,
                            k = this.value;
                        k += m ? 10 * this.step : this.step, k = _normalize4(k, this.min, this.max, _getPrecision2(this.step)), w !== k && (this.value = k), this.matches(":focus") && document.execCommand("selectAll"), this._updateState()
                    }
                }, {
                    key: "_decrement",
                    value: function() {
                        var m = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                            w = this.value,
                            k = this.value;
                        k -= m ? 10 * this.step : this.step, k = _normalize4(k, this.min, this.max, _getPrecision2(this.step)), w !== k && (this.value = k), this.matches(":focus") && document.execCommand("selectAll"), this._updateState()
                    }
                }, {
                    key: "_update",
                    value: function() {
                        this._updateEditorTextContent(), this._updateState(), this._updateStepper()
                    }
                }, {
                    key: "_updateEditorTextContent",
                    value: function() {
                        this["#editor"].textContent = this.hasAttribute("value") ? this.getAttribute("value")
                            .trim() : ""
                    }
                }, {
                    key: "_updateState",
                    value: function() {
                        var m = this.validate();
                        m ? this.removeAttribute("invalid") : this.setAttribute("invalid", ""), null === this.value ? this.setAttribute("empty", "") : this.removeAttribute("empty")
                    }
                }, {
                    key: "_updateStepper",
                    value: function() {
                        var m = this.querySelector("x-stepper");
                        if (m) {
                            var w = this.value > this.min,
                                k = this.value < this.max;
                            !0 == k && !0 == w ? m.removeAttribute("disabled") : !1 == k && !1 == w ? m.setAttribute("disabled", "") : !1 == k ? m.setAttribute("disabled", "increment") : !1 == w && m.setAttribute("disabled", "decrement")
                        }
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? parseFloat(this.getAttribute("value")) : null
                    },
                    set: function(m) {
                        null === m ? this.removeAttribute("value") : this.setAttribute("value", m)
                    }
                }, {
                    key: "min",
                    get: function() {
                        return this.hasAttribute("min") ? parseFloat(this.getAttribute("min")) : -Infinity
                    },
                    set: function(m) {
                        _isFinite2(m) ? this.setAttribute("min", m) : this.removeAttribute("min")
                    }
                }, {
                    key: "max",
                    get: function() {
                        return this.hasAttribute("max") ? parseFloat(this.getAttribute("max")) : Infinity
                    },
                    set: function(m) {
                        _isFinite2(m) ? this.setAttribute("max", m) : this.removeAttribute("max")
                    }
                }, {
                    key: "mixed",
                    get: function() {
                        return this.hasAttribute("mixed")
                    },
                    set: function(m) {
                        m ? this.setAttribute("mixed", "") : this.removeAttribute("mixed")
                    }
                }, {
                    key: "precision",
                    get: function() {
                        return this.hasAttribute("precision") ? parseFloat(this.getAttribute("precision")) : 20
                    },
                    set: function(m) {
                        this.setAttribute("precision", m)
                    }
                }, {
                    key: "step",
                    get: function() {
                        return this.hasAttribute("step") ? parseFloat(this.getAttribute("step")) : 1
                    },
                    set: function() {
                        this.setAttribute("step", step)
                    }
                }, {
                    key: "prefix",
                    get: function() {
                        return this.hasAttribute("prefix") ? this.getAttribute("prefix") : ""
                    },
                    set: function(m) {
                        this.setAttribute("prefix", m)
                    }
                }, {
                    key: "suffix",
                    get: function() {
                        return this.hasAttribute("suffix") ? this.getAttribute("suffix") : ""
                    },
                    set: function(m) {
                        this.setAttribute("suffix", m)
                    }
                }, {
                    key: "required",
                    get: function() {
                        return this.hasAttribute("required")
                    },
                    set: function(m) {
                        m ? this.setAttribute("required", "") : this.removeAttribute("required")
                    }
                }, {
                    key: "visited",
                    get: function() {
                        return this.hasAttribute("visited")
                    },
                    set: function(m) {
                        m ? this.setAttribute("visited", "") : this.removeAttribute("visited")
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["value", "min", "max", "prefix", "suffix", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-numberinput", XNumberInputElement)
    } {
        var _html34 = Xel.utils.element.html,
            _shadowTemplate33 = _html34(_templateObject37),
            XTagInputElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed",
                        delegatesFocus: !0
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate33.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("focusin", function() {
                        return u._onFocusIn()
                    }), u.addEventListener("focusout", function() {
                        return u._onFocusOut()
                    }), u._shadowRoot.addEventListener("pointerdown", function(S) {
                        return u._onShadowRootPointerDown(S)
                    }), u._shadowRoot.addEventListener("click", function(S) {
                        return u._onShadowRootClick(S)
                    }), u["#editable-item"].addEventListener("keydown", function(S) {
                        return u._onInputKeyDown(S)
                    }), u["#editable-item"].addEventListener("input", function() {
                        return u._onInputInput()
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "input"), this.setAttribute("aria-disabled", this.disabled), this._update()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m, w, k) {
                        w === k || ("value" === m ? this._onValueAttributeChange() : "spellcheck" === m ? this._onSpellcheckAttributeChange() : "disabled" === m && this._onDisabledAttributeChange())
                    }
                }, {
                    key: "validateTag",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "_onValueAttributeChange",
                    value: function() {
                        this._update()
                    }
                }, {
                    key: "_onSpellcheckAttributeChange",
                    value: function() {
                        this["#editable-item"].spellcheck = this.spellcheck
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "_onFocusIn",
                    value: function() {
                        this.dispatchEvent(new CustomEvent("textinputmodestart", {
                            bubbles: !0,
                            composed: !0
                        }))
                    }
                }, {
                    key: "_onFocusOut",
                    value: function() {
                        this._commitInput(), this["#editable-item"].removeAttribute("contenteditable"), this.dispatchEvent(new CustomEvent("textinputmodeend", {
                            bubbles: !0,
                            composed: !0
                        })), this.hasAttribute("invalid") && (this["#editable-item"].textContent = "", this.removeAttribute("invalid"))
                    }
                }, {
                    key: "_onShadowRootPointerDown",
                    value: function(m) {
                        if (m.target === this["#main"] || m.target === this["#items"]) {
                            m.preventDefault(), this["#editable-item"].setAttribute("contenteditable", "");
                            var w = new Range;
                            w.selectNodeContents(this["#editable-item"]), w.collapse(!1);
                            var k = window.getSelection();
                            k.removeAllRanges(), k.addRange(w)
                        } else if (m.target.matches(".item, .item > *")) {
                            var _ = m.target.closest(".item"),
                                A = m.target.closest(".close-button");
                            _ === this["#editable-item"] || A || (m.preventDefault(), m.stopPropagation(), this["#editable-item"].focus(), this._commitInput())
                        }
                    }
                }, {
                    key: "_onShadowRootClick",
                    value: function(m) {
                        m.target.closest(".close-button") && this._onCloseButtonClick(m)
                    }
                }, {
                    key: "_onCloseButtonClick",
                    value: function(m) {
                        var w = m.target.closest(".item");
                        this.value = this.value.filter(function(k) {
                            return k !== w.getAttribute("data-tag")
                        }), this.dispatchEvent(new CustomEvent("change"))
                    }
                }, {
                    key: "_onInputKeyDown",
                    value: function(m) {
                        if ("Enter" === m.key) m.preventDefault(), this._commitInput();
                        else if ("Backspace" === m.key) {
                            var w = this["#editable-item"].textContent;
                            0 === w.length && (this.value = this.value.slice(0, this.value.length - 1), this.dispatchEvent(new CustomEvent("change")))
                        }
                    }
                }, {
                    key: "_onInputInput",
                    value: function() {
                        var m = this["#editable-item"].textContent;
                        m.includes(this.delimiter) && this._commitInput(), this._updatePlaceholderVisibility(), this.hasAttribute("invalid") && this._updateValidityState(), this.dispatchEvent(new CustomEvent("input"))
                    }
                }, {
                    key: "_commitInput",
                    value: function() {
                        if (this._updateValidityState(), !1 === this.hasAttribute("invalid")) {
                            var m = this["#editable-item"].textContent.trim();
                            if (this["#editable-item"].textContent = "", 0 < m.length && !1 === this.value.includes(m)) {
                                var w = this.value.filter(function(k) {
                                    return k !== m
                                });
                                this.value = [].concat(_toConsumableArray(w), [m]), this.dispatchEvent(new CustomEvent("change"))
                            }
                        }
                    }
                }, {
                    key: "_update",
                    value: function() {
                        for (var m = [].concat(_toConsumableArray(this["#items"].children)), w = 0, k; w < m.length; w++) k = m[w], k !== this["#editable-item"] && k.remove();
                        var _ = !0,
                            A = !1,
                            C;
                        try {
                            for (var S = this.value[Symbol.iterator](), E, L; !(_ = (E = S.next())
                                    .done); _ = !0) L = E.value, this["#editable-item"].insertAdjacentHTML("beforebegin", "\n          <div class=\"item\" data-tag=\"" + L + "\">\n            <label>" + this.prefix + L + "<\/label>\n            <svg class=\"close-button\" viewBox=\"0 0 100 100\"><path class=\"close-button-path\"><\/path><\/svg>\n          <\/div>\n        ")
                        } catch (D) {
                            A = !0, C = D
                        } finally {
                            try {
                                !_ && S.return && S.return()
                            } finally {
                                if (A) throw C
                            }
                        }
                        this._updatePlaceholderVisibility()
                    }
                }, {
                    key: "_updateValidityState",
                    value: function() {
                        var m = this["#editable-item"].textContent.trim();
                        !0 === this.validateTag(m) || 0 === m.length ? this.removeAttribute("invalid") : this.setAttribute("invalid", "")
                    }
                }, {
                    key: "_updatePlaceholderVisibility",
                    value: function() {
                        var m = this.querySelector(":scope > x-label");
                        m && (m.hidden = 0 < this.value.length || 0 < this["#editable-item"].textContent.length)
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value")
                            .split(this.delimiter)
                            .map(function(m) {
                                return m.trim()
                            })
                            .filter(function(m) {
                                return "" !== m
                            }) : []
                    },
                    set: function(m) {
                        0 === m.length ? this.removeAttribute("value") : this.setAttribute("value", m.join(this.delimiter))
                    }
                }, {
                    key: "delimiter",
                    get: function() {
                        return this.hasAttribute("delimiter") ? this.getAttribute("delimiter") : ","
                    },
                    set: function(m) {
                        this.setAttribute("delimiter", m)
                    }
                }, {
                    key: "spellcheck",
                    get: function() {
                        return this.hasAttribute("spellcheck")
                    },
                    set: function(m) {
                        m ? this.setAttribute("spellcheck", "") : this.removeAttribute("spellcheck")
                    }
                }, {
                    key: "prefix",
                    get: function() {
                        return this.hasAttribute("prefix") ? this.getAttribute("prefix") : ""
                    },
                    set: function(m) {
                        "" === m ? this.removeAttribute("prefix") : this.setAttribute("prefix", m)
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["value", "spellcheck", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-taginput", XTagInputElement)
    } {
        var _html35 = Xel.utils.element.html,
            _shadowTemplate34 = _html35(_templateObject38),
            XTextareaElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._shadowRoot = u.attachShadow({
                        mode: "closed",
                        delegatesFocus: !0
                    }), u._shadowRoot.append(document.importNode(_shadowTemplate34.content, !0));
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("focusin", function() {
                        return u._onFocusIn()
                    }), u.addEventListener("focusout", function() {
                        return u._onFocusOut()
                    }), u["#editor"].addEventListener("click", function(S) {
                        return u._onEditorClick(S)
                    }), u["#editor"].addEventListener("input", function() {
                        return u._onEditorInput()
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("role", "input"), this.setAttribute("aria-disabled", this.disabled), this._updateEmptyState()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "value" === m ? this._onValueAttributeChange() : "spellcheck" === m ? this._onSpellcheckAttributeChange() : "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "validate",
                    value: function() {
                        var m = !0,
                            w = "";
                        return this.value.length < this.minLength ? (m = !1, w = "Entered text is too short") : this.value.length > this.maxLength ? (m = !1, w = "Entered text is too long") : this.required && 0 === this.value.length && !0 === this.visited && (m = !1, w = "This field is required"), {
                            valid: m,
                            hint: w
                        }
                    }
                }, {
                    key: "_onValueAttributeChange",
                    value: function() {
                        this.value = this.hasAttribute("value") ? this.getAttribute("value") : "", this.matches(":focus") && document.execCommand("selectAll")
                    }
                }, {
                    key: "_onSpellcheckAttributeChange",
                    value: function() {
                        this["#editor"].spellcheck = this.spellcheck
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled), this["#editor"].disabled = this.disabled
                    }
                }, {
                    key: "_onEditorClick",
                    value: function(m) {
                        4 <= m.detail && document.execCommand("selectAll")
                    }
                }, {
                    key: "_onEditorInput",
                    value: function() {
                        this.dispatchEvent(new CustomEvent("input", {
                            bubbles: !0
                        })), this._updateEmptyState(), this.invalid && this._updateValidityState()
                    }
                }, {
                    key: "_onFocusIn",
                    value: function() {
                        this.visited = !0, this._focusInValue = this.value, this.dispatchEvent(new CustomEvent("textinputmodestart", {
                            bubbles: !0,
                            composed: !0
                        }))
                    }
                }, {
                    key: "_onFocusOut",
                    value: function() {
                        this.dispatchEvent(new CustomEvent("textinputmodeend", {
                                bubbles: !0,
                                composed: !0
                            })), this._shadowRoot.getSelection()
                            .collapse(this["#main"]), this._updateValidityState(), !1 === this.invalid && this.value !== this._focusInValue && this.dispatchEvent(new CustomEvent("change", {
                                bubbles: !0
                            }))
                    }
                }, {
                    key: "_updateValidityState",
                    value: function() {
                        var m = this.validate(),
                            w = m.valid,
                            k = m.hint;
                        w ? (this.removeAttribute("invalid"), this.removeAttribute("invalid-hint")) : (this.setAttribute("invalid", ""), this.setAttribute("invalid-hint", k))
                    }
                }, {
                    key: "_updateEmptyState",
                    value: function() {
                        0 === this.value.length ? this.setAttribute("empty", "") : this.removeAttribute("empty")
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this["#editor"].textContent
                    },
                    set: function(m) {
                        this["#editor"].textContent = m
                    }
                }, {
                    key: "spellcheck",
                    get: function() {
                        return this.hasAttribute("spellcheck")
                    },
                    set: function(m) {
                        m ? this.setAttribute("spellcheck", "") : this.removeAttribute("spellcheck")
                    }
                }, {
                    key: "minLength",
                    get: function() {
                        return this.hasAttribute("minlength") ? parseInt(this.getAttribute("minlength")) : 0
                    },
                    set: function(m) {
                        this.setAttribute("minlength", m)
                    }
                }, {
                    key: "maxLength",
                    get: function() {
                        return this.hasAttribute("maxlength") ? parseInt(this.getAttribute("maxlength")) : Infinity
                    },
                    set: function(m) {
                        this.setAttribute("maxlength", m)
                    }
                }, {
                    key: "required",
                    get: function() {
                        return this.hasAttribute("required")
                    },
                    set: function(m) {
                        m ? this.setAttribute("required", "") : this.removeAttribute("required")
                    }
                }, {
                    key: "visited",
                    get: function() {
                        return this.hasAttribute("visited")
                    },
                    set: function(m) {
                        m ? this.setAttribute("visited", "") : this.removeAttribute("visited")
                    }
                }, {
                    key: "invalid",
                    get: function() {
                        return this.hasAttribute("invalid")
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["value", "spellcheck", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-textarea", XTextareaElement)
    } {
        var _Xel$utils$color = Xel.utils.color,
            _parseColor4 = _Xel$utils$color.parseColor,
            _serializeColor = _Xel$utils$color.serializeColor,
            _hsvToRgb5 = _Xel$utils$color.hsvToRgb,
            _createElement12 = Xel.utils.element.createElement,
            _Xel$utils$math4 = Xel.utils.math,
            _round3 = _Xel$utils$math4.round,
            _normalize5 = _Xel$utils$math4.normalize,
            _degToRad = _Xel$utils$math4.degToRad,
            _PI2 = _MathPI,
            _sqrt2 = _Mathsqrt,
            _atan = Math.atan2,
            sin = _Mathsin,
            cos = _Mathcos,
            _pow2 = _Mathpow,
            _debug3 = !1,
            shadowHTML = "\n    <style>:host{display:block;width:100%;user-select:none}:host([hidden]){display:none}#huesat-slider{display:flex;position:relative;width:100%;height:auto;touch-action:pinch-zoom}#huesat-image{width:100%;height:100%;border-radius:999px;pointer-events:none}#huesat-marker{position:absolute;top:0%;left:0%;width:var(--marker-size);height:var(--marker-size);transform:translate(calc(var(--marker-size)/-2),calc(var(--marker-size)/-2));box-sizing:border-box;background:rgba(0,0,0,.3);border:3px solid #fff;border-radius:999px;box-shadow:0 0 3px #000;--marker-size: 20px}#value-slider{width:100%;height:28px;margin-top:10px;padding:0 calc(var(--marker-width)/2);box-sizing:border-box;border:1px solid #cecece;border-radius:2px;touch-action:pan-y;--marker-width: 18px}#value-slider-track{width:100%;height:100%;position:relative;display:flex;align-items:center}#value-slider-marker{left:0%;background:rgba(0,0,0,.2);box-shadow:0 0 3px #000;box-sizing:border-box;transform:translateX(calc((var(--marker-width)/2)*-1));border:3px solid #fff;width:var(--marker-width);height:32px;position:absolute}#alpha-slider{display:none;width:100%;height:28px;margin-top:14px;padding:0 calc(var(--marker-width)/2);box-sizing:border-box;border:1px solid #cecece;border-radius:2px;touch-action:pan-y;--marker-width: 18px}:host([alphaslider]) #alpha-slider{display:block}#alpha-slider-track{width:100%;height:100%;position:relative;display:flex;align-items:center}#alpha-slider-marker{left:0%;background:rgba(0,0,0,.2);box-shadow:0 0 3px #000;box-sizing:border-box;transform:translateX(calc((var(--marker-width)/2)*-1));border:3px solid #fff;width:var(--marker-width);height:32px;position:absolute}<\/style>\n\n    <x-box vertical>\n      <div id=\"huesat-slider\">\n        <img id=\"huesat-image\" src=\"node_modules/xel/images/wheel-spectrum.png\"><\/img>\n        <div id=\"huesat-marker\"><\/div>\n      <\/div>\n\n      <div id=\"value-slider\">\n        <div id=\"value-slider-track\">\n          <div id=\"value-slider-marker\"><\/div>\n        <\/div>\n      <\/div>\n\n      <div id=\"alpha-slider\">\n        <div id=\"alpha-slider-track\">\n          <div id=\"alpha-slider-marker\"><\/div>\n        <\/div>\n      <\/div>\n    <\/x-box>\n  ",
            XWheelColorPickerElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._h = 0, u._s = 0, u._v = 100, u._a = 1, u._isDraggingHuesatMarker = !1, u._isDraggingValueSliderMarker = !1, u._isDraggingAlphaSliderMarker = !1, u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.innerHTML = shadowHTML;
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u["#huesat-slider"].addEventListener("pointerdown", function(S) {
                        return u._onHuesatSliderPointerDown(S)
                    }), u["#value-slider"].addEventListener("pointerdown", function(S) {
                        return u._onValueSliderPointerDown(S)
                    }), u["#alpha-slider"].addEventListener("pointerdown", function(S) {
                        return u._onAlphaSliderPointerDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, null, [{
                    key: "observedAttributes",
                    get: function() {
                        return ["value"]
                    }
                }]), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this._update()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m, w, k) {
                        w === k || "value" === m && this._onValueAttributeChange()
                    }
                }, {
                    key: "_onValueAttributeChange",
                    value: function() {
                        if (!1 === this._isDraggingHuesatMarker && !1 === this._isDraggingValueSliderMarker && !1 === this._isDraggingAlphaSliderMarker) {
                            var m = _parseColor4(this.value, "hsva"),
                                w = _slicedToArray(m, 4),
                                k = w[0],
                                _ = w[1],
                                A = w[2],
                                C = w[3];
                            this._h = k, this._s = _, this._v = A, this._a = C, this._update()
                        }
                    }
                }, {
                    key: "_onHuesatSliderPointerDown",
                    value: function(m) {
                        var w = this;
                        if (0 === m.button) {
                            var A = this["#huesat-slider"].getBoundingClientRect(),
                                k, _;
                            this._isDraggingHuesatMarker = !0, this.dispatchEvent(new CustomEvent("changestart", {
                                bubbles: !0
                            })), this["#huesat-slider"].style.cursor = "default", this["#huesat-slider"].setPointerCapture(m.pointerId);
                            var C = function(E, L) {
                                var D = A.width / 2,
                                    R = E - A.left - D,
                                    P = L - A.top - D,
                                    B = _pow2(R, 2) + _pow2(P, 2),
                                    M = _atan(P, R);
                                B > _pow2(D, 2) && (R = D * cos(M), P = D * sin(M), B = _pow2(R, 2) + _pow2(P, 2), M = _atan(P, R)), w._h = _round3(360 * ((M + _PI2) / (2 * _PI2)), 3), w._s = _round3(100 * (_sqrt2(B) / D), 3), w.value = _serializeColor([w._h, w._s, w._v, w._a], "hsva", "hsla"), w.dispatchEvent(new CustomEvent("change", {
                                    bubbles: !0
                                })), w._updateHuesatMarker(), w._updateValueSliderBackground(), w._updateAlphaSliderBackground()
                            };
                            C(m.clientX, m.clientY), this["#huesat-slider"].addEventListener("pointermove", k = function(E) {
                                C(E.clientX, E.clientY)
                            }), this["#huesat-slider"].addEventListener("lostpointercapture", _ = function() {
                                w["#huesat-slider"].removeEventListener("pointermove", k), w["#huesat-slider"].removeEventListener("lostpointercapture", _), w["#huesat-slider"].style.cursor = null, w.dispatchEvent(new CustomEvent("changeend", {
                                    bubbles: !0
                                })), w._isDraggingHuesatMarker = !1
                            })
                        }
                    }
                }, {
                    key: "_onValueSliderPointerDown",
                    value: function(m) {
                        var w = this;
                        if (0 === m.button) {
                            var k = this["#value-slider-track"].getBoundingClientRect(),
                                _, A;
                            this._isDraggingValueSliderMarker = !0, this["#value-slider"].style.cursor = "default", this["#value-slider"].setPointerCapture(m.pointerId), this.dispatchEvent(new CustomEvent("changestart", {
                                bubbles: !0
                            }));
                            var C = function(E) {
                                var L = 100 - 100 * ((E - k.x) / k.width);
                                L = _normalize5(L, 0, 100, 2), L !== w._v && (w._v = L, w.value = _serializeColor([w._h, w._s, w._v, w._a], "hsva", "hsla"), w._updateValueSliderMarker(), w._updateAlphaSliderBackground(), w.dispatchEvent(new CustomEvent("change", {
                                    bubbles: !0
                                })))
                            };
                            C(m.clientX), this["#value-slider"].addEventListener("pointermove", _ = function(E) {
                                C(E.clientX)
                            }), this["#value-slider"].addEventListener("lostpointercapture", A = function() {
                                w["#value-slider"].removeEventListener("pointermove", _), w["#value-slider"].removeEventListener("lostpointercapture", A), w["#value-slider"].style.cursor = null, w.dispatchEvent(new CustomEvent("changeend", {
                                    bubbles: !0
                                })), w._isDraggingValueSliderMarker = !1
                            })
                        }
                    }
                }, {
                    key: "_onAlphaSliderPointerDown",
                    value: function(m) {
                        var w = this;
                        if (0 === m.button) {
                            var k = this["#alpha-slider-track"].getBoundingClientRect(),
                                _, A;
                            this._isDraggingAlphaSliderMarker = !0, this["#alpha-slider"].style.cursor = "default", this["#alpha-slider"].setPointerCapture(m.pointerId), this.dispatchEvent(new CustomEvent("changestart", {
                                bubbles: !0
                            }));
                            var C = function(E) {
                                var L = 1 - (E - k.x) / k.width;
                                L = _normalize5(L, 0, 1, 2), L !== w._a && (w._a = L, w.value = _serializeColor([w._h, w._s, w._v, w._a], "hsva", "hsla"), w._updateAlphaSliderMarker(), w.dispatchEvent(new CustomEvent("change", {
                                    bubbles: !0
                                })))
                            };
                            C(m.clientX), this["#alpha-slider"].addEventListener("pointermove", _ = function(E) {
                                C(E.clientX)
                            }), this["#alpha-slider"].addEventListener("lostpointercapture", A = function() {
                                w["#alpha-slider"].removeEventListener("pointermove", _), w["#alpha-slider"].removeEventListener("lostpointercapture", A), w["#alpha-slider"].style.cursor = null, w.dispatchEvent(new CustomEvent("changeend", {
                                    bubbles: !0
                                })), w._isDraggingAlphaSliderMarker = !1
                            })
                        }
                    }
                }, {
                    key: "_update",
                    value: function() {
                        this._updateHuesatMarker(), this._updateValueSliderMarker(), this._updateValueSliderBackground(), this._updateAlphaSliderMarker(), this._updateAlphaSliderBackground()
                    }
                }, {
                    key: "_updateHuesatMarker",
                    value: function() {
                        var m = this._h,
                            w = this._s,
                            k = 100,
                            _ = _degToRad(m),
                            A = w / 100 * k / 2,
                            C = {
                                x: k / 2,
                                y: k / 2
                            },
                            S = 100 * ((k - (C.x + A * cos(_))) / k),
                            E = 100 * ((C.y - A * sin(_)) / k);
                        this["#huesat-marker"].style.left = S + "%", this["#huesat-marker"].style.top = E + "%"
                    }
                }, {
                    key: "_updateValueSliderMarker",
                    value: function() {
                        this["#value-slider-marker"].style.left = 100 - _normalize5(this._v, 0, 100, 2) + "%"
                    }
                }, {
                    key: "_updateValueSliderBackground",
                    value: function() {
                        var w = _serializeColor([this._h, this._s, 100, 1], "hsva", "hex");
                        this["#value-slider"].style.background = "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))" + ", " + w
                    }
                }, {
                    key: "_updateAlphaSliderMarker",
                    value: function() {
                        this["#alpha-slider-marker"].style.left = _normalize5(100 * (1 - this._a), 0, 100, 2) + "%"
                    }
                }, {
                    key: "_updateAlphaSliderBackground",
                    value: function() {
                        var m = _hsvToRgb5(this._h, this._s, this._v)
                            .map(function(E) {
                                return _round3(E, 0)
                            }),
                            w = _slicedToArray(m, 3),
                            k = w[0],
                            _ = w[1],
                            A = w[2];
                        this["#alpha-slider"].style.background = "linear-gradient(to right, rgba(" + k + ", " + _ + ", " + A + ", 1), rgba(" + k + ", " + _ + ", " + A + ", 0))" + "," + "url(node_modules/xel/images/checkboard.png) repeat 0 0"
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : "hsla(0, 0%, 100%, 1)"
                    },
                    set: function(m) {
                        this.setAttribute("value", m)
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-wheelcolorpicker", XWheelColorPickerElement)
    } {
        var _Xel$utils$color2 = Xel.utils.color,
            _parseColor7 = _Xel$utils$color2.parseColor,
            _serializeColor2 = _Xel$utils$color2.serializeColor,
            _hsvToRgb6 = _Xel$utils$color2.hsvToRgb,
            _createElement13 = Xel.utils.element.createElement,
            _Xel$utils$math5 = Xel.utils.math,
            _round4 = _Xel$utils$math5.round,
            _normalize6 = _Xel$utils$math5.normalize,
            _debug4 = !1,
            _shadowHTML = "\n    <style>:host{display:block;width:100%;user-select:none}:host([hidden]){display:none}#hue-slider{width:100%;height:28px;padding:0 calc(var(--marker-width)/2);margin-bottom:14px;box-sizing:border-box;border-radius:2px;touch-action:pan-y;--marker-width: 18px;background:red}#hue-slider-track{width:100%;height:100%;position:relative;display:flex;align-items:center;background:linear-gradient(to right,red ,#ff0 ,#0f0 ,#0ff ,#00f ,#f0f ,red)}#hue-slider-marker{left:0%;background:rgba(0,0,0,.2);box-shadow:0 0 3px #000;box-sizing:border-box;transform:translateX(calc((var(--marker-width)/2)*-1));border:3px solid #fff;width:var(--marker-width);height:32px;position:absolute}#satlight-slider{width:100%;height:174px;border-radius:2px;position:relative;touch-action:pinch-zoom}#satlight-marker{position:absolute;top:0%;left:0%;width:var(--marker-size);height:var(--marker-size);transform:translate(calc(var(--marker-size)/-2),calc(var(--marker-size)/-2));box-sizing:border-box;background:rgba(0,0,0,.3);border:3px solid #fff;border-radius:999px;box-shadow:0 0 3px #000;--marker-size: 20px}#alpha-slider{display:none;width:100%;height:28px;margin-top:14px;padding:0 calc(var(--marker-width)/2);box-sizing:border-box;border:1px solid #cecece;border-radius:2px;touch-action:pan-y;--marker-width: 18px}:host([alphaslider]) #alpha-slider{display:block}#alpha-slider-track{width:100%;height:100%;position:relative;display:flex;align-items:center}#alpha-slider-marker{left:0%;background:rgba(0,0,0,.2);box-shadow:0 0 3px #000;box-sizing:border-box;transform:translateX(calc((var(--marker-width)/2)*-1));border:3px solid #fff;width:var(--marker-width);height:32px;position:absolute}<\/style>\n\n    <x-box vertical>\n      <div id=\"hue-slider\">\n        <div id=\"hue-slider-track\">\n          <div id=\"hue-slider-marker\"><\/div>\n        <\/div>\n      <\/div>\n\n      <div id=\"satlight-slider\">\n        <div id=\"satlight-marker\"><\/div>\n      <\/div>\n\n      <div id=\"alpha-slider\">\n        <div id=\"alpha-slider-track\">\n          <div id=\"alpha-slider-marker\"><\/div>\n        <\/div>\n      <\/div>\n    <\/x-box>\n  ",
            XRectColorPickerElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._h = 0, u._s = 0, u._v = 100, u._a = 1, u._isDraggingHueSliderMarker = !1, u._isDraggingSatlightMarker = !1, u._isDraggingAlphaSliderMarker = !1, u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.innerHTML = _shadowHTML;
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u["#hue-slider"].addEventListener("pointerdown", function(S) {
                        return u._onHueSliderPointerDown(S)
                    }), u["#satlight-slider"].addEventListener("pointerdown", function(S) {
                        return u._onSatlightSliderPointerDown(S)
                    }), u["#alpha-slider"].addEventListener("pointerdown", function(S) {
                        return u._onAlphaSliderPointerDown(S)
                    }), u
                }
                return _inherits(n, o), _createClass(n, null, [{
                    key: "observedAttributes",
                    get: function() {
                        return ["value"]
                    }
                }]), _createClass(n, [{
                    key: "connectedCallback",
                    value: function() {
                        this._update()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(m, w, k) {
                        w === k || "value" === m && this._onValueAttributeChange()
                    }
                }, {
                    key: "_onValueAttributeChange",
                    value: function() {
                        if (!1 === this._isDraggingHueSliderMarker && !1 === this._isDraggingSatlightMarker && !1 === this._isDraggingAlphaSliderMarker) {
                            var m = _parseColor7(this.value, "hsva"),
                                w = _slicedToArray(m, 4),
                                k = w[0],
                                _ = w[1],
                                A = w[2],
                                C = w[3];
                            this._h = k, this._s = _, this._v = A, this._a = C, this._update()
                        }
                    }
                }, {
                    key: "_onSatlightSliderPointerDown",
                    value: function(m) {
                        var w = this;
                        if (0 === m.button) {
                            var A = this["#satlight-slider"].getBoundingClientRect(),
                                k, _;
                            this._isDraggingSatlightMarker = !0, this.dispatchEvent(new CustomEvent("changestart", {
                                bubbles: !0
                            })), this["#satlight-slider"].setPointerCapture(m.pointerId);
                            var C = function(E, L) {
                                var D = 100 * ((E - A.left) / A.width),
                                    R = 100 * ((L - A.top) / A.height);
                                D = _normalize6(D, 0, 100, 2), R = _normalize6(R, 0, 100, 2), w._s = D, w._v = 100 - R, w.value = _serializeColor2([w._h, w._s, w._v, w._a], "hsva", "hsla"), w.dispatchEvent(new CustomEvent("change", {
                                    bubbles: !0
                                })), w._updateSatlightSliderMarker(), w._updateSatlightSliderBackground(), w._updateAlphaSliderBackground()
                            };
                            C(m.clientX, m.clientY), this["#satlight-slider"].addEventListener("pointermove", k = function(E) {
                                C(E.clientX, E.clientY)
                            }), this["#satlight-slider"].addEventListener("lostpointercapture", _ = function() {
                                w["#satlight-slider"].removeEventListener("pointermove", k), w["#satlight-slider"].removeEventListener("lostpointercapture", _), w.dispatchEvent(new CustomEvent("changeend", {
                                    bubbles: !0
                                })), w._isDraggingSatlightMarker = !1
                            })
                        }
                    }
                }, {
                    key: "_onHueSliderPointerDown",
                    value: function(m) {
                        var w = this;
                        if (0 === m.button) {
                            var k = this["#hue-slider-track"].getBoundingClientRect(),
                                _, A;
                            this._isDraggingHueSliderMarker = !0, this["#hue-slider"].setPointerCapture(m.pointerId), this.dispatchEvent(new CustomEvent("changestart", {
                                bubbles: !0
                            }));
                            var C = function(E) {
                                var L = 360 * ((E - k.x) / k.width);
                                L = _normalize6(L, 0, 360, 0), L !== w._h && (w._h = L, w.value = _serializeColor2([w._h, w._s, w._v, w._a], "hsva", "hsla"), w._updateHueSliderMarker(), w._updateSatlightSliderBackground(), w._updateSatlightSliderMarker(), w._updateAlphaSliderBackground(), w.dispatchEvent(new CustomEvent("change", {
                                    bubbles: !0
                                })))
                            };
                            C(m.clientX), this["#hue-slider"].addEventListener("pointermove", _ = function(E) {
                                C(E.clientX)
                            }), this["#hue-slider"].addEventListener("lostpointercapture", A = function() {
                                w["#hue-slider"].removeEventListener("pointermove", _), w["#hue-slider"].removeEventListener("lostpointercapture", A), w.dispatchEvent(new CustomEvent("changeend", {
                                    bubbles: !0
                                })), w._isDraggingHueSliderMarker = !1
                            })
                        }
                    }
                }, {
                    key: "_onAlphaSliderPointerDown",
                    value: function(m) {
                        var w = this;
                        if (0 === m.button) {
                            var k = this["#alpha-slider-track"].getBoundingClientRect(),
                                _, A;
                            this._isDraggingAlphaSliderMarker = !0, this["#alpha-slider"].setPointerCapture(m.pointerId), this.dispatchEvent(new CustomEvent("changestart", {
                                bubbles: !0
                            }));
                            var C = function(E) {
                                var L = 1 - (E - k.x) / k.width;
                                L = _normalize6(L, 0, 1, 2), L !== w._a && (w._a = L, w.value = _serializeColor2([w._h, w._s, w._v, w._a], "hsva", "hsla"), w._updateAlphaSliderMarker(), w.dispatchEvent(new CustomEvent("change", {
                                    bubbles: !0
                                })))
                            };
                            C(m.clientX), this["#alpha-slider"].addEventListener("pointermove", _ = function(E) {
                                C(E.clientX)
                            }), this["#alpha-slider"].addEventListener("lostpointercapture", A = function() {
                                w["#alpha-slider"].removeEventListener("pointermove", _), w["#alpha-slider"].removeEventListener("lostpointercapture", A), w.dispatchEvent(new CustomEvent("changeend", {
                                    bubbles: !0
                                })), w._isDraggingAlphaSliderMarker = !1
                            })
                        }
                    }
                }, {
                    key: "_update",
                    value: function() {
                        this._updateHueSliderMarker(), this._updateSatlightSliderMarker(), this._updateSatlightSliderBackground(), this._updateAlphaSliderMarker(), this._updateAlphaSliderBackground()
                    }
                }, {
                    key: "_updateHueSliderMarker",
                    value: function() {
                        this["#hue-slider-marker"].style.left = 100 * (_normalize6(this._h, 0, 360, 0) / 360) + "%"
                    }
                }, {
                    key: "_updateSatlightSliderMarker",
                    value: function() {
                        var m = 100 * (this._s / 100),
                            w = 100 - 100 * (this._v / 100);
                        this["#satlight-marker"].style.left = m + "%", this["#satlight-marker"].style.top = w + "%"
                    }
                }, {
                    key: "_updateSatlightSliderBackground",
                    value: function() {
                        var m = _serializeColor2([this._h, 100, 50, 1], "hsla", "hex");
                        this["#satlight-slider"].style.background = "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))" + ", " + "linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1))" + ", " + m
                    }
                }, {
                    key: "_updateAlphaSliderMarker",
                    value: function() {
                        this["#alpha-slider-marker"].style.left = _normalize6(100 * (1 - this._a), 0, 100, 2) + "%"
                    }
                }, {
                    key: "_updateAlphaSliderBackground",
                    value: function() {
                        var m = _hsvToRgb6(this._h, this._s, this._v)
                            .map(function(E) {
                                return _round4(E, 0)
                            }),
                            w = _slicedToArray(m, 3),
                            k = w[0],
                            _ = w[1],
                            A = w[2];
                        this["#alpha-slider"].style.background = "linear-gradient(to right, rgba(" + k + ", " + _ + ", " + A + ", 1), rgba(" + k + ", " + _ + ", " + A + ", 0))" + "," + "url(node_modules/xel/images/checkboard.png) repeat 0 0"
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : "hsla(0, 0%, 100%, 1)"
                    },
                    set: function(m) {
                        this.setAttribute("value", m)
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-rectcolorpicker", XRectColorPickerElement)
    } {
        var _Xel$utils$element17 = Xel.utils.element,
            _createElement14 = _Xel$utils$element17.createElement,
            _closest12 = _Xel$utils$element17.closest,
            _Xel$utils$color3 = Xel.utils.color,
            _formatColorString = _Xel$utils$color3.formatColorString,
            _parseColor10 = _Xel$utils$color3.parseColor,
            _serializeColor3 = _Xel$utils$color3.serializeColor,
            _debounce2 = Xel.utils.time.debounce,
            _shadowHTML2 = "\n    <style>:host{display:block;height:24px;width:40px;box-sizing:border-box;border:1px solid #969696;position:relative}:host([hidden]){display:none}:host([disabled]){pointer-events:none;opacity:.4}::slotted(x-popover){width:190px;height:auto;padding:12px}#input{display:flex;width:100%;height:100%;box-sizing:border-box;border:none;background:0 0;padding:0;opacity:0;-webkit-appearance:none}#input::-webkit-color-swatch-wrapper{padding:0}#input::-webkit-color-swatch{border:none}<\/style>\n    <style>:host { background: url(node_modules/xel/images/checkboard.png) repeat 0 0; }<\/style>\n    <input tabindex=\"-1\" id=\"input\" type=\"color\" value=\"#ffffff\">\n    <slot><\/slot>\n  ",
            XColorSelectElement = function(o) {
                function n() {
                    _classCallCheck(this, n);
                    var u = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u._inputChangeStarted = !1, u._onInputChangeDebouonced = _debounce2(u._onInputChangeDebouonced, 400, u), u._shadowRoot = u.attachShadow({
                        mode: "closed"
                    }), u._shadowRoot.innerHTML = _shadowHTML2, u["#overlay"] = _createElement14("x-overlay"), u["#overlay"].style.background = "rgba(0, 0, 0, 0)";
                    var m = !0,
                        w = !1,
                        k;
                    try {
                        for (var _ = u._shadowRoot.querySelectorAll("[id]")[Symbol.iterator](), A, C; !(m = (A = _.next())
                                .done); m = !0) C = A.value, u["#" + C.id] = C
                    } catch (S) {
                        w = !0, k = S
                    } finally {
                        try {
                            !m && _.return && _.return()
                        } finally {
                            if (w) throw k
                        }
                    }
                    return u.addEventListener("click", function(S) {
                        return u._onClick(S)
                    }), u.addEventListener("keydown", function(S) {
                        return u._onKeyDown(S)
                    }), u.addEventListener("pointerdown", function(S) {
                        return u._onPointerDown(S)
                    }), u.addEventListener("change", function(S) {
                        return u._onChange(S)
                    }), u["#input"].addEventListener("change", function() {
                        return u._onInputChange()
                    }), u
                }
                return _inherits(n, o), _createClass(n, [{
                    key: "attributeChangedCallback",
                    value: function(m) {
                        "value" === m ? this._onValueAttributeChange() : "disabled" === m && this._onDisabledAttributeChange()
                    }
                }, {
                    key: "connectedCallback",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled);
                        var m = this.querySelector("x-wheelcolorpicker, x-rectcolorpicker");
                        m && m.setAttribute("value", _formatColorString(this.value, "rgba")), this._updateInput()
                    }
                }, {
                    key: "_onValueAttributeChange",
                    value: function() {
                        this._inputChangeStarted || this._updateInput();
                        var m = this.querySelector("x-wheelcolorpicker, x-rectcolorpicker");
                        m && m.getAttribute("value") !== this.getAttribute("value") && m.setAttribute("value", this.getAttribute("value"))
                    }
                }, {
                    key: "_onDisabledAttributeChange",
                    value: function() {
                        this.setAttribute("tabindex", this.disabled ? "-1" : "0"), this.setAttribute("aria-disabled", this.disabled)
                    }
                }, {
                    key: "_onChange",
                    value: function(m) {
                        m.target !== this && (this.value = _formatColorString(m.target.value, "rgba"), this._updateInput())
                    }
                }, {
                    key: "_onInputChange",
                    value: function() {
                        !1 === this._inputChangeStarted && (this._inputChangeStarted = !0, this.dispatchEvent(new CustomEvent("changestart"))), this.dispatchEvent(new CustomEvent("change")), this._onInputChangeDebouonced()
                    }
                }, {
                    key: "_onInputChangeDebouonced",
                    value: function() {
                        this._inputChangeStarted && (this.value = this["#input"].value, this._inputChangeStarted = !1, this.dispatchEvent(new CustomEvent("changeend")))
                    }
                }, {
                    key: "_onPointerDown",
                    value: function(m) {
                        m.preventDefault()
                    }
                }, {
                    key: "_onClick",
                    value: function(m) {
                        if (m.target === this["#overlay"]) this._collapse();
                        else {
                            var w = this.querySelector("x-popover");
                            w && m.preventDefault(), w && !1 === w.hasAttribute("opened") && (m.preventDefault(), this._expand())
                        }
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(m) {
                        if ("Enter" === m.code || "Space" === m.code) {
                            var w = this.querySelector("x-popover");
                            m.preventDefault(), m.stopPropagation(), w ? this.hasAttribute("expanded") ? this._collapse() : this._expand() : this["#input"].click()
                        } else if ("Escape" === m.code) {
                            var k = this.querySelector("x-popover");
                            k && this.hasAttribute("expanded") && this._collapse()
                        } else "Tab" === m.code && this.hasAttribute("expanded") && m.preventDefault()
                    }
                }, {
                    key: "_expand",
                    value: async function() {
                        var m = this.querySelector("x-popover");
                        m && (this._wasFocusedBeforeExpanding = this.matches(":focus"), this.setAttribute("expanded", ""), this["#overlay"].ownerElement = m, this["#overlay"].show(!1), await m.open(this), m.focus())
                    }
                }, {
                    key: "_collapse",
                    value: async function() {
                        var m = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                            w = this.querySelector("x-popover");
                        if (w) {
                            if (w.setAttribute("closing", ""), await w.close(), this["#overlay"].hide(!1), this.removeAttribute("expanded"), this._wasFocusedBeforeExpanding) this.focus();
                            else {
                                var k = _closest12(this.parentNode, "[tabindex]");
                                k && k.focus()
                            }
                            w.removeAttribute("closing")
                        }
                    }
                }, {
                    key: "_updateInput",
                    value: function() {
                        var m = _parseColor10(this.value, "rgba"),
                            w = _slicedToArray(m, 4),
                            k = w[0],
                            _ = w[1],
                            A = w[2],
                            C = w[3];
                        this["#input"].value = _serializeColor3([k, _, A, C], "rgba", "hex"), this["#input"].style.opacity = C
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.hasAttribute("value") ? this.getAttribute("value") : "#ffffff"
                    },
                    set: function(m) {
                        this.setAttribute("value", m)
                    }
                }, {
                    key: "disabled",
                    get: function() {
                        return this.hasAttribute("disabled")
                    },
                    set: function(m) {
                        m ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["value", "disabled"]
                    }
                }]), n
            }(_CustomElement);
        customElements.define("x-colorselect", XColorSelectElement)
    }
})()
