"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountService = /** @class */ (function () {
    function AccountService(logservice) {
        this.logservice = logservice;
        this.accounts = [
            {
                name: 'Master Account',
                status: 'active'
            },
            {
                name: 'Testaccount',
                status: 'inactive'
            },
            {
                name: 'Hidden Account',
                status: 'unknown'
            }
        ];
    }
    AccountService.prototype.onAccountAdded = function (sName, status) {
        //console.log(sName, status);
        this.accounts.push({ name: sName, status: status });
        this.logservice.LogStatus(status);
    };
    AccountService.prototype.onStatusChanged = function (id, newStatus) {
        this.accounts[id].status = newStatus;
        this.logservice.LogStatus(status);
    };
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=accounts.service.js.map