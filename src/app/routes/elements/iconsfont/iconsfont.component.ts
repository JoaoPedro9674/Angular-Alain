import { NzMessageService } from 'ng-zorro-antd';
import { Component, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ColorsService } from '@core/services/colors.service';

@Component({
    selector: 'app-iconsfont',
    templateUrl: './iconsfont.component.html',
    styleUrls: ['./iconsfont.component.scss']
})
export class IconsFontComponent {
    data = [
        {
            title: 'antd: Directional Icons',
            prefix: 'anticon anticon-',
            tpl: '<i class="anticon anticon-{0}"></i>',
            list: [
                { "k": "step-backward" }, { "k": "step-forward" }, { "k": "fast-backward" }, { "k": "fast-forward" }, { "k": "shrink" }, { "k": "arrows-alt" }, { "k": "down" }, { "k": "up" }, { "k": "left" }, { "k": "right" }, { "k": "caret-up" }, { "k": "caret-down" }, { "k": "caret-left" }, { "k": "caret-right" }, { "k": "up-circle" }, { "k": "down-circle" }, { "k": "left-circle" }, { "k": "right-circle" }, { "k": "up-circle-o" }, { "k": "down-circle-o" }, { "k": "right-circle-o" }, { "k": "left-circle-o" }, { "k": "double-right" }, { "k": "double-left" }, { "k": "verticle-left" }, { "k": "verticle-right" }, { "k": "forward" }, { "k": "backward" }, { "k": "rollback" }, { "k": "enter" }, { "k": "retweet" }, { "k": "swap" }, { "k": "swap-left" }, { "k": "swap-right" }, { "k": "arrow-up" }, { "k": "arrow-down" }, { "k": "arrow-left" }, { "k": "arrow-right" }, { "k": "play-circle" }, { "k": "play-circle-o" }, { "k": "up-square" }, { "k": "down-square" }, { "k": "left-square" }, { "k": "right-square" }, { "k": "up-square-o" }, { "k": "down-square-o" }, { "k": "left-square-o" }, { "k": "right-square-o" }, { "k": "login" }, { "k": "logout" }, { "k": "menu-fold" }, { "k": "menu-unfold" }
            ]
        },
        {
            title: 'antd: Suggested Icons',
            prefix: 'anticon anticon-',
            tpl: '<i class="anticon anticon-{0}"></i>',
            list: [
                { "k": "question" }, { "k": "question-circle-o" }, { "k": "question-circle" }, { "k": "plus" }, { "k": "plus-circle-o" }, { "k": "plus-circle" }, { "k": "pause" }, { "k": "pause-circle-o" }, { "k": "pause-circle" }, { "k": "minus" }, { "k": "minus-circle-o" }, { "k": "minus-circle" }, { "k": "plus-square" }, { "k": "plus-square-o" }, { "k": "minus-square" }, { "k": "minus-square-o" }, { "k": "info" }, { "k": "info-circle-o" }, { "k": "info-circle" }, { "k": "exclamation" }, { "k": "exclamation-circle-o" }, { "k": "exclamation-circle" }, { "k": "close" }, { "k": "close-circle" }, { "k": "close-circle-o" }, { "k": "close-square" }, { "k": "close-square-o" }, { "k": "check" }, { "k": "check-circle" }, { "k": "check-circle-o" }, { "k": "check-square" }, { "k": "check-square-o" }, { "k": "clock-circle-o" }, { "k": "clock-circle" }
            ]
        },
        {
            title: 'antd: Application Icons',
            prefix: 'anticon anticon-',
            tpl: '<i class="anticon anticon-{0}"></i>',
            list: [
                { "k": "android" }, { "k": "android-o" }, { "k": "apple" }, { "k": "apple-o" }, { "k": "windows" }, { "k": "windows-o" }, { "k": "ie" }, { "k": "chrome" }, { "k": "github" }, { "k": "aliwangwang" }, { "k": "aliwangwang-o" }, { "k": "dingding" }, { "k": "dingding-o" }
            ]
        },
        {
            title: 'antd: Application Icons',
            prefix: 'anticon anticon-',
            tpl: '<i class="anticon anticon-{0}"></i>',
            list: [
                { "k": "lock" }, { "k": "unlock" }, { "k": "area-chart" }, { "k": "pie-chart" }, { "k": "bar-chart" }, { "k": "dot-chart" }, { "k": "bars" }, { "k": "book" }, { "k": "calendar" }, { "k": "cloud" }, { "k": "cloud-download" }, { "k": "code" }, { "k": "code-o" }, { "k": "copy" }, { "k": "credit-card" }, { "k": "delete" }, { "k": "desktop" }, { "k": "download" }, { "k": "edit" }, { "k": "ellipsis" }, { "k": "file" }, { "k": "file-text" }, { "k": "file-unknown" }, { "k": "file-pdf" }, { "k": "file-excel" }, { "k": "file-jpg" }, { "k": "file-ppt" }, { "k": "file-add" }, { "k": "folder" }, { "k": "folder-open" }, { "k": "folder-add" }, { "k": "hdd" }, { "k": "frown" }, { "k": "frown-o" }, { "k": "meh" }, { "k": "meh-o" }, { "k": "smile" }, { "k": "smile-o" }, { "k": "inbox" }, { "k": "laptop" }, { "k": "appstore-o" }, { "k": "appstore" }, { "k": "line-chart" }, { "k": "link" }, { "k": "mail" }, { "k": "mobile" }, { "k": "notification" }, { "k": "paper-clip" }, { "k": "picture" }, { "k": "poweroff" }, { "k": "reload" }, { "k": "search" }, { "k": "setting" }, { "k": "share-alt" }, { "k": "shopping-cart" }, { "k": "tablet" }, { "k": "tag" }, { "k": "tag-o" }, { "k": "tags" }, { "k": "tags-o" }, { "k": "to-top" }, { "k": "upload" }, { "k": "user" }, { "k": "video-camera" }, { "k": "home" }, { "k": "loading" }, { "k": "loading-3-quarters" }, { "k": "cloud-upload-o" }, { "k": "cloud-download-o" }, { "k": "cloud-upload" }, { "k": "cloud-o" }, { "k": "star-o" }, { "k": "star" }, { "k": "heart-o" }, { "k": "heart" }, { "k": "environment" }, { "k": "environment-o" }, { "k": "eye" }, { "k": "eye-o" }, { "k": "camera" }, { "k": "camera-o" }, { "k": "save" }, { "k": "team" }, { "k": "solution" }, { "k": "phone" }, { "k": "filter" }, { "k": "exception" }, { "k": "export" }, { "k": "customer-service" }, { "k": "qrcode" }, { "k": "scan" }, { "k": "like" }, { "k": "like-o" }, { "k": "dislike" }, { "k": "dislike-o" }, { "k": "message" }, { "k": "pay-circle" }, { "k": "pay-circle-o" }, { "k": "calculator" }, { "k": "pushpin" }, { "k": "pushpin-o" }, { "k": "bulb" }, { "k": "select" }, { "k": "switcher" }, { "k": "rocket" }, { "k": "bell" }, { "k": "disconnect" }, { "k": "database" }, { "k": "compass" }, { "k": "barcode" }, { "k": "hourglass" }, { "k": "key" }, { "k": "flag" }, { "k": "layout" }, { "k": "printer" }, { "k": "sound" }, { "k": "usb" }, { "k": "skin" }, { "k": "tool" }, { "k": "sync" }, { "k": "wifi" }, { "k": "car" }, { "k": "schedule" }, { "k": "user-add" }, { "k": "user-delete" }, { "k": "usergroup-add" }, { "k": "usergroup-delete" }, { "k": "man" }, { "k": "woman" }, { "k": "shop" }, { "k": "gift" }, { "k": "idcard" }, { "k": "medicine-box" }, { "k": "red-envelope" }, { "k": "coffee" }, { "k": "copyright" }, { "k": "trademark" }, { "k": "safety" }, { "k": "wallet" }, { "k": "bank" }, { "k": "trophy" }, { "k": "contacts" }, { "k": "global" }, { "k": "shake" }, { "k": "api" }, { "k": "fork" }
            ]
        },
        {
            title: 'antd: Brand and Logos',
            prefix: 'anticon anticon-',
            tpl: '<i class="anticon anticon-{0}"></i>',
            list: [
                { "k": "android" }, { "k": "android-o" }, { "k": "apple" }, { "k": "apple-o" }, { "k": "windows" }, { "k": "windows-o" }, { "k": "ie" }, { "k": "chrome" }, { "k": "github" }, { "k": "aliwangwang" }, { "k": "aliwangwang-o" }, { "k": "dingding" }, { "k": "dingding-o" }
            ]
        },
        {
            title: 'Simple Line icons',
            prefix: 'icon-',
            tpl: '<i class="icon-{0}"></i>',
            list: [
                { "k": "user" }, { "k": "people" }, { "k": "user-female" }, { "k": "user-follow" }, { "k": "user-following" }, { "k": "user-unfollow" }, { "k": "login" }, { "k": "logout" }, { "k": "emotsmile" }, { "k": "phone" }, { "k": "call-end" }, { "k": "call-in" }, { "k": "call-out" }, { "k": "map" }, { "k": "location-pin" }, { "k": "direction" }, { "k": "directions" }, { "k": "compass" }, { "k": "layers" }, { "k": "menu" }, { "k": "list" }, { "k": "options-vertical" }, { "k": "options" }, { "k": "arrow-down" }, { "k": "arrow-left" }, { "k": "arrow-right" }, { "k": "arrow-up" }, { "k": "arrow-up-circle" }, { "k": "arrow-left-circle" }, { "k": "arrow-right-circle" }, { "k": "arrow-down-circle" }, { "k": "check" }, { "k": "clock" }, { "k": "plus" }, { "k": "close" }, { "k": "trophy" }, { "k": "screen-smartphone" }, { "k": "screen-desktop" }, { "k": "plane" }, { "k": "notebook" }, { "k": "mustache" }, { "k": "mouse" }, { "k": "magnet" }, { "k": "energy" }, { "k": "disc" }, { "k": "cursor" }, { "k": "cursor-move" }, { "k": "crop" }, { "k": "chemistry" }, { "k": "speedometer" }, { "k": "shield" }, { "k": "screen-tablet" }, { "k": "magic-wand" }, { "k": "hourglass" }, { "k": "graduation" }, { "k": "ghost" }, { "k": "game-controller" }, { "k": "fire" }, { "k": "eyeglass" }, { "k": "envelope-open" }, { "k": "envelope-letter" }, { "k": "bell" }, { "k": "badge" }, { "k": "anchor" }, { "k": "wallet" }, { "k": "vector" }, { "k": "speech" }, { "k": "puzzle" }, { "k": "printer" }, { "k": "present" }, { "k": "playlist" }, { "k": "pin" }, { "k": "picture" }, { "k": "handbag" }, { "k": "globe-alt" }, { "k": "globe" }, { "k": "folder-alt" }, { "k": "folder" }, { "k": "film" }, { "k": "feed" }, { "k": "drop" }, { "k": "drawar" }, { "k": "docs" }, { "k": "doc" }, { "k": "diamond" }, { "k": "cup" }, { "k": "calculator" }, { "k": "bubbles" }, { "k": "briefcase" }, { "k": "book-open" }, { "k": "basket-loaded" }, { "k": "basket" }, { "k": "bag" }, { "k": "action-undo" }, { "k": "action-redo" }, { "k": "wrench" }, { "k": "umbrella" }, { "k": "trash" }, { "k": "tag" }, { "k": "support" }, { "k": "frame" }, { "k": "size-fullscreen" }, { "k": "size-actual" }, { "k": "shuffle" }, { "k": "share-alt" }, { "k": "share" }, { "k": "rocket" }, { "k": "question" }, { "k": "pie-chart" }, { "k": "pencil" }, { "k": "note" }, { "k": "loop" }, { "k": "home" }, { "k": "grid" }, { "k": "graph" }, { "k": "microphone" }, { "k": "music-tone-alt" }, { "k": "music-tone" }, { "k": "earphones-alt" }, { "k": "earphones" }, { "k": "equalizer" }, { "k": "like" }, { "k": "dislike" }, { "k": "control-start" }, { "k": "control-rewind" }, { "k": "control-play" }, { "k": "control-pause" }, { "k": "control-forward" }, { "k": "control-end" }, { "k": "volume-1" }, { "k": "volume-2" }, { "k": "volume-off" }, { "k": "calendar" }, { "k": "bulb" }, { "k": "chart" }, { "k": "ban" }, { "k": "bubble" }, { "k": "camrecorder" }, { "k": "camera" }, { "k": "cloud-download" }, { "k": "cloud-upload" }, { "k": "envelope" }, { "k": "eye" }, { "k": "flag" }, { "k": "heart" }, { "k": "info" }, { "k": "key" }, { "k": "link" }, { "k": "lock" }, { "k": "lock-open" }, { "k": "magnifier" }, { "k": "magnifier-add" }, { "k": "magnifier-remove" }, { "k": "paper-clip" }, { "k": "paper-plane" }, { "k": "power" }, { "k": "refresh" }, { "k": "reload" }, { "k": "settings" }, { "k": "star" }, { "k": "symble-female" }, { "k": "symbol-male" }, { "k": "target" }, { "k": "credit-card" }, { "k": "paypal" }, { "k": "social-tumblr" }, { "k": "social-twitter" }, { "k": "social-facebook" }, { "k": "social-instagram" }, { "k": "social-linkedin" }, { "k": "social-pinterest" }, { "k": "social-github" }, { "k": "social-gplus" }, { "k": "social-reddit" }, { "k": "social-skype" }, { "k": "social-dribbble" }, { "k": "social-behance" }, { "k": "social-foursqare" }, { "k": "social-soundcloud" }, { "k": "social-spotify" }, { "k": "social-stumbleupon" }, { "k": "social-youtube" }, { "k": "social-dropbox" }
            ]
        },
        {
            title: 'fa: Web Application Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "adjust" }, { "k": "anchor" }, { "k": "archive" }, { "k": "area-chart" }, { "k": "arrows" }, { "k": "arrows-h" }, { "k": "arrows-v" }, { "k": "asterisk" }, { "k": "at" }, { "k": "automobile", "a": true }, { "k": "ban" }, { "k": "bank", "a": true }, { "k": "bar-chart" }, { "k": "bar-chart-o", "a": true }, { "k": "barcode" }, { "k": "bars" }, { "k": "beer" }, { "k": "bell" }, { "k": "bell-o" }, { "k": "bell-slash" }, { "k": "bell-slash-o" }, { "k": "bicycle" }, { "k": "binoculars" }, { "k": "birthday-cake" }, { "k": "bolt" }, { "k": "bomb" }, { "k": "book" }, { "k": "bookmark" }, { "k": "bookmark-o" }, { "k": "briefcase" }, { "k": "bug" }, { "k": "building" }, { "k": "building-o" }, { "k": "bullhorn" }, { "k": "bullseye" }, { "k": "bus" }, { "k": "cab", "a": true }, { "k": "calculator" }, { "k": "calendar" }, { "k": "calendar-o" }, { "k": "camera" }, { "k": "camera-retro" }, { "k": "car" }, { "k": "caret-square-o-down" }, { "k": "caret-square-o-left" }, { "k": "caret-square-o-right" }, { "k": "caret-square-o-up" }, { "k": "cc" }, { "k": "certificate" }, { "k": "check" }, { "k": "check-circle" }, { "k": "check-circle-o" }, { "k": "check-square" }, { "k": "check-square-o" }, { "k": "child" }, { "k": "circle" }, { "k": "circle-o" }, { "k": "circle-o-notch" }, { "k": "circle-thin" }, { "k": "clock-o" }, { "k": "close", "a": true }, { "k": "cloud" }, { "k": "cloud-download" }, { "k": "cloud-upload" }, { "k": "code" }, { "k": "code-fork" }, { "k": "coffee" }, { "k": "cog" }, { "k": "cogs" }, { "k": "comment" }, { "k": "comment-o" }, { "k": "comments" }, { "k": "comments-o" }, { "k": "compass" }, { "k": "copyright" }, { "k": "credit-card" }, { "k": "crop" }, { "k": "crosshairs" }, { "k": "cube" }, { "k": "cubes" }, { "k": "cutlery" }, { "k": "dashboard", "a": true }, { "k": "database" }, { "k": "desktop" }, { "k": "dot-circle-o" }, { "k": "download" }, { "k": "edit", "a": true }, { "k": "ellipsis-h" }, { "k": "ellipsis-v" }, { "k": "envelope" }, { "k": "envelope-o" }, { "k": "envelope-square" }, { "k": "eraser" }, { "k": "exchange" }, { "k": "exclamation" }, { "k": "exclamation-circle" }, { "k": "exclamation-triangle" }, { "k": "external-link" }, { "k": "external-link-square" }, { "k": "eye" }, { "k": "eye-slash" }, { "k": "eyedropper" }, { "k": "fax" }, { "k": "female" }, { "k": "fighter-jet" }, { "k": "file-archive-o" }, { "k": "file-audio-o" }, { "k": "file-code-o" }, { "k": "file-excel-o" }, { "k": "file-image-o" }, { "k": "file-movie-o", "a": true }, { "k": "file-pdf-o" }, { "k": "file-photo-o", "a": true }, { "k": "file-picture-o", "a": true }, { "k": "file-powerpoint-o" }, { "k": "file-sound-o", "a": true }, { "k": "file-video-o" }, { "k": "file-word-o" }, { "k": "file-zip-o", "a": true }, { "k": "film" }, { "k": "filter" }, { "k": "fire" }, { "k": "fire-extinguisher" }, { "k": "flag" }, { "k": "flag-checkered" }, { "k": "flag-o" }, { "k": "flash", "a": true }, { "k": "flask" }, { "k": "folder" }, { "k": "folder-o" }, { "k": "folder-open" }, { "k": "folder-open-o" }, { "k": "frown-o" }, { "k": "futbol-o" }, { "k": "gamepad" }, { "k": "gavel" }, { "k": "gear", "a": true }, { "k": "gears", "a": true }, { "k": "gift" }, { "k": "glass" }, { "k": "globe" }, { "k": "graduation-cap" }, { "k": "group", "a": true }, { "k": "hdd-o" }, { "k": "headphones" }, { "k": "heart" }, { "k": "heart-o" }, { "k": "history" }, { "k": "home" }, { "k": "image", "a": true }, { "k": "inbox" }, { "k": "info" }, { "k": "info-circle" }, { "k": "institution", "a": true }, { "k": "key" }, { "k": "keyboard-o" }, { "k": "language" }, { "k": "laptop" }, { "k": "leaf" }, { "k": "legal", "a": true }, { "k": "lemon-o" }, { "k": "level-down" }, { "k": "level-up" }, { "k": "life-bouy", "a": true }, { "k": "life-buoy", "a": true }, { "k": "life-ring" }, { "k": "life-saver", "a": true }, { "k": "lightbulb-o" }, { "k": "line-chart" }, { "k": "location-arrow" }, { "k": "lock" }, { "k": "magic" }, { "k": "magnet" }, { "k": "mail-forward", "a": true }, { "k": "mail-reply", "a": true }, { "k": "mail-reply-all", "a": true }, { "k": "male" }, { "k": "map-marker" }, { "k": "meh-o" }, { "k": "microphone" }, { "k": "microphone-slash" }, { "k": "minus" }, { "k": "minus-circle" }, { "k": "minus-square" }, { "k": "minus-square-o" }, { "k": "mobile" }, { "k": "mobile-phone", "a": true }, { "k": "money" }, { "k": "moon-o" }, { "k": "mortar-board", "a": true }, { "k": "music" }, { "k": "navicon", "a": true }, { "k": "newspaper-o" }, { "k": "paint-brush" }, { "k": "paper-plane" }, { "k": "paper-plane-o" }, { "k": "paw" }, { "k": "pencil" }, { "k": "pencil-square" }, { "k": "pencil-square-o" }, { "k": "phone" }, { "k": "phone-square" }, { "k": "photo", "a": true }, { "k": "picture-o" }, { "k": "pie-chart" }, { "k": "plane" }, { "k": "plug" }, { "k": "plus" }, { "k": "plus-circle" }, { "k": "plus-square" }, { "k": "plus-square-o" }, { "k": "power-off" }, { "k": "print" }, { "k": "puzzle-piece" }, { "k": "qrcode" }, { "k": "question" }, { "k": "question-circle" }, { "k": "quote-left" }, { "k": "quote-right" }, { "k": "random" }, { "k": "recycle" }, { "k": "refresh" }, { "k": "remove", "a": true }, { "k": "reorder", "a": true }, { "k": "reply" }, { "k": "reply-all" }, { "k": "retweet" }, { "k": "road" }, { "k": "rocket" }, { "k": "rss" }, { "k": "rss-square" }, { "k": "search" }, { "k": "search-minus" }, { "k": "search-plus" }, { "k": "send", "a": true }, { "k": "send-o", "a": true }, { "k": "share" }, { "k": "share-alt" }, { "k": "share-alt-square" }, { "k": "share-square" }, { "k": "share-square-o" }, { "k": "shield" }, { "k": "shopping-cart" }, { "k": "sign-in" }, { "k": "sign-out" }, { "k": "signal" }, { "k": "sitemap" }, { "k": "sliders" }, { "k": "smile-o" }, { "k": "soccer-ball-o", "a": true }, { "k": "sort" }, { "k": "sort-alpha-asc" }, { "k": "sort-alpha-desc" }, { "k": "sort-amount-asc" }, { "k": "sort-amount-desc" }, { "k": "sort-asc" }, { "k": "sort-desc" }, { "k": "sort-down", "a": true }, { "k": "sort-numeric-asc" }, { "k": "sort-numeric-desc" }, { "k": "sort-up", "a": true }, { "k": "space-shuttle" }, { "k": "spinner" }, { "k": "spoon" }, { "k": "square" }, { "k": "square-o" }, { "k": "star" }, { "k": "star-half" }, { "k": "star-half-empty", "a": true }, { "k": "star-half-full", "a": true }, { "k": "star-half-o" }, { "k": "star-o" }, { "k": "suitcase" }, { "k": "sun-o" }, { "k": "support", "a": true }, { "k": "tablet" }, { "k": "tachometer" }, { "k": "tag" }, { "k": "tags" }, { "k": "tasks" }, { "k": "taxi" }, { "k": "terminal" }, { "k": "thumb-tack" }, { "k": "thumbs-down" }, { "k": "thumbs-o-down" }, { "k": "thumbs-o-up" }, { "k": "thumbs-up" }, { "k": "ticket" }, { "k": "times" }, { "k": "times-circle" }, { "k": "times-circle-o" }, { "k": "tint" }, { "k": "toggle-down", "a": true }, { "k": "toggle-left", "a": true }, { "k": "toggle-off" }, { "k": "toggle-on" }, { "k": "toggle-right", "a": true }, { "k": "toggle-up", "a": true }, { "k": "trash" }, { "k": "trash-o" }, { "k": "tree" }, { "k": "trophy" }, { "k": "truck" }, { "k": "tty" }, { "k": "umbrella" }, { "k": "university" }, { "k": "unlock" }, { "k": "unlock-alt" }, { "k": "unsorted", "a": true }, { "k": "upload" }, { "k": "user" }, { "k": "users" }, { "k": "video-camera" }, { "k": "volume-down" }, { "k": "volume-off" }, { "k": "volume-up" }, { "k": "warning", "a": true }, { "k": "wheelchair" }, { "k": "wifi" }, { "k": "wrench" }
            ]
        },
        {
            title: 'fa: File Type Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "file" }, { "k": "file-archive-o" }, { "k": "file-audio-o" }, { "k": "file-code-o" }, { "k": "file-excel-o" }, { "k": "file-image-o" }, { "k": "file-movie-o", "a": true }, { "k": "file-o" }, { "k": "file-pdf-o" }, { "k": "file-photo-o", "a": true }, { "k": "file-picture-o", "a": true }, { "k": "file-powerpoint-o" }, { "k": "file-sound-o", "a": true }, { "k": "file-text" }, { "k": "file-text-o" }, { "k": "file-video-o" }, { "k": "file-word-o" }, { "k": "file-zip-o", "a": true }
            ]
        },
        {
            title: 'fa: Spinner Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            tip: `These icons work great with the <code>fa-spin</code> class.`,
            list: [
                { "k": "circle-o-notch" }, { "k": "cog" }, { "k": "gear", "a": true }, { "k": "refresh" }, { "k": "spinner" }
            ]
        },
        {
            title: 'fa: Form Control Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "check-square" }, { "k": "check-square-o" }, { "k": "circle" }, { "k": "circle-o" }, { "k": "dot-circle-o" }, { "k": "minus-square" }, { "k": "minus-square-o" }, { "k": "plus-square" }, { "k": "plus-square-o" }, { "k": "square" }, { "k": "square-o" }
            ]
        },
        {
            title: 'fa: Payment Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "cc-amex" }, { "k": "cc-discover" }, { "k": "cc-mastercard" }, { "k": "cc-paypal" }, { "k": "cc-stripe" }, { "k": "cc-visa" }, { "k": "credit-card" }, { "k": "google-wallet" }, { "k": "paypal" }
            ]
        },
        {
            title: 'fa: Chart Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "area-chart" }, { "k": "bar-chart" }, { "k": "bar-chart-o", "a": true }, { "k": "line-chart" }, { "k": "pie-chart" }
            ]
        },
        {
            title: 'fa: Currency Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "bitcoin", "a": true }, { "k": "btc" }, { "k": "cny", "a": true }, { "k": "dollar", "a": true }, { "k": "eur" }, { "k": "euro", "a": true }, { "k": "gbp" }, { "k": "ils" }, { "k": "inr" }, { "k": "jpy" }, { "k": "krw" }, { "k": "money" }, { "k": "rmb", "a": true }, { "k": "rouble", "a": true }, { "k": "rub" }, { "k": "ruble", "a": true }, { "k": "rupee", "a": true }, { "k": "shekel", "a": true }, { "k": "sheqel", "a": true }, { "k": "try" }, { "k": "turkish-lira", "a": true }, { "k": "usd" }, { "k": "won", "a": true }, { "k": "yen", "a": true }
            ]
        },
        {
            title: 'fa: Text Editor Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "align-center" }, { "k": "align-justify" }, { "k": "align-left" }, { "k": "align-right" }, { "k": "bold" }, { "k": "chain", "a": true }, { "k": "chain-broken" }, { "k": "clipboard" }, { "k": "columns" }, { "k": "copy", "a": true }, { "k": "cut", "a": true }, { "k": "dedent", "a": true }, { "k": "eraser" }, { "k": "file" }, { "k": "file-o" }, { "k": "file-text" }, { "k": "file-text-o" }, { "k": "files-o" }, { "k": "floppy-o" }, { "k": "font" }, { "k": "header" }, { "k": "indent" }, { "k": "italic" }, { "k": "link" }, { "k": "list" }, { "k": "list-alt" }, { "k": "list-ol" }, { "k": "list-ul" }, { "k": "outdent" }, { "k": "paperclip" }, { "k": "paragraph" }, { "k": "paste", "a": true }, { "k": "repeat" }, { "k": "rotate-left", "a": true }, { "k": "rotate-right", "a": true }, { "k": "save", "a": true }, { "k": "scissors" }, { "k": "strikethrough" }, { "k": "subscript" }, { "k": "superscript" }, { "k": "table" }, { "k": "text-height" }, { "k": "text-width" }, { "k": "th" }, { "k": "th-large" }, { "k": "th-list" }, { "k": "underline" }, { "k": "undo" }, { "k": "unlink", "a": true }
            ]
        },
        {
            title: 'fa: Directional Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "angle-double-down" }, { "k": "angle-double-left" }, { "k": "angle-double-right" }, { "k": "angle-double-up" }, { "k": "angle-down" }, { "k": "angle-left" }, { "k": "angle-right" }, { "k": "angle-up" }, { "k": "arrow-circle-down" }, { "k": "arrow-circle-left" }, { "k": "arrow-circle-o-down" }, { "k": "arrow-circle-o-left" }, { "k": "arrow-circle-o-right" }, { "k": "arrow-circle-o-up" }, { "k": "arrow-circle-right" }, { "k": "arrow-circle-up" }, { "k": "arrow-down" }, { "k": "arrow-left" }, { "k": "arrow-right" }, { "k": "arrow-up" }, { "k": "arrows" }, { "k": "arrows-alt" }, { "k": "arrows-h" }, { "k": "arrows-v" }, { "k": "caret-down" }, { "k": "caret-left" }, { "k": "caret-right" }, { "k": "caret-square-o-down" }, { "k": "caret-square-o-left" }, { "k": "caret-square-o-right" }, { "k": "caret-square-o-up" }, { "k": "caret-up" }, { "k": "chevron-circle-down" }, { "k": "chevron-circle-left" }, { "k": "chevron-circle-right" }, { "k": "chevron-circle-up" }, { "k": "chevron-down" }, { "k": "chevron-left" }, { "k": "chevron-right" }, { "k": "chevron-up" }, { "k": "hand-o-down" }, { "k": "hand-o-left" }, { "k": "hand-o-right" }, { "k": "hand-o-up" }, { "k": "long-arrow-down" }, { "k": "long-arrow-left" }, { "k": "long-arrow-right" }, { "k": "long-arrow-up" }, { "k": "toggle-down", "a": true }, { "k": "toggle-left", "a": true }, { "k": "toggle-right", "a": true }, { "k": "toggle-up", "a": true }
            ]
        },
        {
            title: 'fa: Video Player Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "arrows-alt" }, { "k": "backward" }, { "k": "compress" }, { "k": "eject" }, { "k": "expand" }, { "k": "fast-backward" }, { "k": "fast-forward" }, { "k": "forward" }, { "k": "pause" }, { "k": "play" }, { "k": "play-circle" }, { "k": "play-circle-o" }, { "k": "step-backward" }, { "k": "step-forward" }, { "k": "stop" }, { "k": "youtube-play" }
            ]
        },
        {
            title: 'fa: Brand Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "adn" }, { "k": "android" }, { "k": "angellist" }, { "k": "apple" }, { "k": "behance" }, { "k": "behance-square" }, { "k": "bitbucket" }, { "k": "bitbucket-square" }, { "k": "bitcoin", "a": true }, { "k": "btc" }, { "k": "cc-amex" }, { "k": "cc-discover" }, { "k": "cc-mastercard" }, { "k": "cc-paypal" }, { "k": "cc-stripe" }, { "k": "cc-visa" }, { "k": "codepen" }, { "k": "css3" }, { "k": "delicious" }, { "k": "deviantart" }, { "k": "digg" }, { "k": "dribbble" }, { "k": "dropbox" }, { "k": "drupal" }, { "k": "empire" }, { "k": "facebook" }, { "k": "facebook-square" }, { "k": "flickr" }, { "k": "foursquare" }, { "k": "ge", "a": true }, { "k": "git" }, { "k": "git-square" }, { "k": "github" }, { "k": "github-alt" }, { "k": "github-square" }, { "k": "gittip" }, { "k": "google" }, { "k": "google-plus" }, { "k": "google-plus-square" }, { "k": "google-wallet" }, { "k": "hacker-news" }, { "k": "html5" }, { "k": "instagram" }, { "k": "ioxhost" }, { "k": "joomla" }, { "k": "jsfiddle" }, { "k": "lastfm" }, { "k": "lastfm-square" }, { "k": "linkedin" }, { "k": "linkedin-square" }, { "k": "linux" }, { "k": "maxcdn" }, { "k": "meanpath" }, { "k": "openid" }, { "k": "pagelines" }, { "k": "paypal" }, { "k": "pied-piper" }, { "k": "pied-piper-alt" }, { "k": "pinterest" }, { "k": "pinterest-square" }, { "k": "qq" }, { "k": "ra", "a": true }, { "k": "rebel" }, { "k": "reddit" }, { "k": "reddit-square" }, { "k": "renren" }, { "k": "share-alt" }, { "k": "share-alt-square" }, { "k": "skype" }, { "k": "slack" }, { "k": "slideshare" }, { "k": "soundcloud" }, { "k": "spotify" }, { "k": "stack-exchange" }, { "k": "stack-overflow" }, { "k": "steam" }, { "k": "steam-square" }, { "k": "stumbleupon" }, { "k": "stumbleupon-circle" }, { "k": "tencent-weibo" }, { "k": "trello" }, { "k": "tumblr" }, { "k": "tumblr-square" }, { "k": "twitch" }, { "k": "twitter" }, { "k": "twitter-square" }, { "k": "vimeo-square" }, { "k": "vine" }, { "k": "vk" }, { "k": "wechat", "a": true }, { "k": "weibo" }, { "k": "weixin" }, { "k": "windows" }, { "k": "wordpress" }, { "k": "xing" }, { "k": "xing-square" }, { "k": "yahoo" }, { "k": "yelp" }, { "k": "youtube" }, { "k": "youtube-play" }, { "k": "youtube-square" }
            ]
        },
        {
            title: 'fa: Medical Icons',
            prefix: 'fa fa-',
            tpl: '<i class="fa fa-{0}"></i>',
            list: [
                { "k": "ambulance" }, { "k": "h-square" }, { "k": "hospital-o" }, { "k": "medkit" }, { "k": "plus-square" }, { "k": "stethoscope" }, { "k": "user-md" }, { "k": "wheelchair" }
            ]
        }
    ];

    constructor(private msg: NzMessageService, @Inject(DOCUMENT) private dom: Document, private _el: ElementRef) { }

    copy(group: any, item: any) {
        let copyTextArea = null as HTMLTextAreaElement;
        try {
            copyTextArea = this.dom.createElement('textarea');
            copyTextArea.style.height = '0px';
            copyTextArea.style.opacity = '0';
            copyTextArea.style.width = '0px';
            this.dom.body.appendChild(copyTextArea);
            copyTextArea.value = group.tpl.replace(`{0}`, item.k);
            copyTextArea.select();
            this.dom.execCommand('copy');
            this.msg.success(`Copied Success!`);
        } finally {
            if (copyTextArea && copyTextArea.parentNode) {
                copyTextArea.parentNode.removeChild(copyTextArea);
            }
        }
    }
}
