!function(e){function i(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var n={};i.m=e,i.c=n,i.d=function(e,n,o){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="",i(i.s=1)}([function(e,i){e.exports=require("electron")},function(e,i,n){"use strict";var o=n(2),t=(function(e){e&&e.__esModule}(o),n(0)),r=(t.webFrame,t.remote);console.log(r.getGlobal("author")),$("html").addClass(process.platform),n(3)},function(e,i){},function(e,i,n){"use strict";n(4),n(5),n(6),n(7),n(8)},function(e,i,n){"use strict";var o=n(0),t=o.ipcRenderer;t.on("mainWindow_maximize",function(e,i){$(".window-title").removeClass("window-maximize"),$(".window-title").addClass("window-restore")}),t.on("mainWindow_unmaximize",function(e,i){$(".window-title").removeClass("window-restore"),$(".window-title").addClass("window-maximize")})},function(e,i,n){"use strict";var o=n(0),t=(o.ipcRenderer,o.remote),r=function(e){e.preventDefault(),t.BrowserWindow.getFocusedWindow().minimize()},d=function(e){e.preventDefault(),t.BrowserWindow.getFocusedWindow().isMaximized()?t.BrowserWindow.getFocusedWindow().restore():t.BrowserWindow.getFocusedWindow().maximize()},s=function(e){e.preventDefault(),t.BrowserWindow.getFocusedWindow().close()},a=function(e){$("#app").append(e),t.BrowserWindow.getFocusedWindow().isMaximized()?$(".window-title").addClass("window-restore"):$(".window-title").addClass("window-maximize"),$(".title-control.minimize").click(r),$(".title-control.window-state").click(d),$(".title-control.close").click(s)};$("<div></div>").load("./app/renderer-process/main-window/views/window-title.html",a)},function(e,i,n){"use strict";var o=n(0),t=(o.ipcRenderer,o.remote,function(e){$("#app").append(e)});$("<div></div>").load("./app/renderer-process/main-window/views/toolbar.html",t)},function(e,i,n){"use strict";var o=n(0),t=(o.ipcRenderer,o.remote,function(e){$("#app").append(e)});$("<div></div>").load("./app/renderer-process/main-window/views/viewer.html",t)},function(e,i,n){"use strict";var o=n(0),t=(o.ipcRenderer,o.remote,function(e){$("#app").append(e)});$("<div></div>").load("./app/renderer-process/main-window/views/thumbnail-bar.html",t)}]);