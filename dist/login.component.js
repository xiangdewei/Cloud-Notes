"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (email, pwd) {
        this.loginService.login(email, pwd).then(function (result) {
            if (result) {
                window.location.href = "/home";
            }
            else {
                alert("login failed, please check your user name or pwd");
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            template: "\n    <form>\n\t<div class=\"form-group\">\n\t\t<label for=\"exampleInputEmail1\">Email address</label>\n\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\" #email>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"exampleInputPassword1\">Password</label>\n\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" #pwd>\n\t</div>\n\t<button type=\"button\" (click)=\"login(email.value,pwd.value)\" class=\"btn btn-default\">Login</button>\n</form>"
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map