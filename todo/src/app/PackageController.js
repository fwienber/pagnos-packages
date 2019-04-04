/**
 * pagnos
 * pagnos
 * Copyright (C) 2019 Thorsten Suckow-Homberg https://github.com/sencha-community-days/pagnos
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

Ext.define("todo.app.PackageController", {

    extend : "Ext.app.Controller",

    requires : [
        'todo.view.MainView'
    ],

    postLaunchHook : function() {


        return {
            navigation : [{
                text : 'ToDos',
                key  : "todos",
                leaf : true,
                mainView : 'todo.view.MainView',
                moduleNavigation : [{
                    text : 'Add ToDo'
                }, {
                    text : 'View ToDo List'
                }]
            }]
        };

    }



});