function japanruby(e){function t(e,t,a){a=void 0==a?"*":"{"+a+"}";var n=new RegExp("(.[ゅょゃュョャ]?){"+t+"}((.[ゅょゃュョャ]?)"+a+")"),r=n.exec(e)[2];return r}if(e.indexOf("!")>=0)return e=e.replace(/!(.*?)\((.*?)\)/g,"<rt></rt>$1<rt>$2</rt>"),"<ruby>"+e+"</ruby>";if(e.indexOf("@")>=0){var a=/(.*)@(\d)/g,n=a.exec(e);if(!n)return e;var r=n[1],s=n[2];return e=0==s?t(r,0,1)+"<span class='accent'>"+t(r,1)+"</span>":1==s?"<span class='accent'>"+t(r,0,1)+"</span>"+t(r,s):t(r,0,1)+"<span class='accent'>"+t(r,1,s-1)+"</span>"+t(r,s)}return e}function supports_html5_storage(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}function settheme(e){var t=basethemeurl+e+".min.css";$('link[title="theme"]').attr("href",t),supports_storage&&(localStorage.theme=e)}$(document).ready(function(){function e(){1==n?(a.hide(),t.removeClass("is-open"),t.addClass("is-closed"),n=!1):(a.show(),t.removeClass("is-closed"),t.addClass("is-open"),n=!0)}document.addEventListener("keyup",function(e){27==e.keyCode&&$(".search-overlay").length&&close_search()});var t=$(".hamburger"),a=$(".overlay"),n=!1;if(t.click(function(){e()}),$('[data-toggle="offcanvas"]').click(function(){$("#wrapper").toggleClass("toggled")}),$("table").addClass("table"),$(".theme-link").click(function(e){e.preventDefault(),settheme($(this).attr("data-theme"))}),supports_storage){var r=localStorage.theme;r&&settheme(r)}else $("#theme-dropdown").hide()});var supports_storage=supports_html5_storage();!function(){for(var e=document.links,t=0,a=e.length;t<a;t++)e[t].hostname!=window.location.hostname&&(e[t].target="_blank",e[t].className+=" externalLink")}();