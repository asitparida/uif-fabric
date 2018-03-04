import { Component, Input, ElementRef, ViewChild, Output, EventEmitter, ContentChild, Directive, forwardRef, Injectable, ContentChildren, QueryList, APP_INITIALIZER, ApplicationRef, Inject, InjectionToken, NgModule, NgProbeToken, NgZone, Optional, PLATFORM_ID, PLATFORM_INITIALIZER, RendererStyleFlags2, SecurityContext, Version, createPlatformFactory, getDebugNode, isDevMode, platformCore, setTestabilityGetter, ɵglobal, TemplateRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule, DOCUMENT, PlatformLocation, ɵPLATFORM_BROWSER_ID, ɵparseCookieValue } from '@angular/common';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule, FormsModule } from '@angular/forms';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

var UifButtonType;
(function (UifButtonType) {
    UifButtonType[UifButtonType["Default"] = 0] = "Default";
    UifButtonType[UifButtonType["Compound"] = 1] = "Compound";
})(UifButtonType || (UifButtonType = {}));

var UifCalloutDirectionalHint;
(function (UifCalloutDirectionalHint) {
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["TopLeftEdge"] = 1] = "TopLeftEdge";
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["TopCenter"] = 2] = "TopCenter";
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["TopRightEdge"] = 3] = "TopRightEdge";
    // TopAutoEdge,
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["BottomLeftEdge"] = 4] = "BottomLeftEdge";
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["BottomCenter"] = 5] = "BottomCenter";
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["BottomRightEdge"] = 6] = "BottomRightEdge";
    // BottomAutoEdge,
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["LeftTopEdge"] = 7] = "LeftTopEdge";
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["LeftCenter"] = 8] = "LeftCenter";
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["LeftBottomEdge"] = 9] = "LeftBottomEdge";
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["RightTopEdge"] = 10] = "RightTopEdge";
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["RightCenter"] = 11] = "RightCenter";
    UifCalloutDirectionalHint[UifCalloutDirectionalHint["RightBottomEdge"] = 12] = "RightBottomEdge";
})(UifCalloutDirectionalHint || (UifCalloutDirectionalHint = {}));
var UifCalloutTriggerHint;
(function (UifCalloutTriggerHint) {
    UifCalloutTriggerHint[UifCalloutTriggerHint["ClickInClickOut"] = 1] = "ClickInClickOut";
    UifCalloutTriggerHint[UifCalloutTriggerHint["FocusInBlurOut"] = 2] = "FocusInBlurOut";
    UifCalloutTriggerHint[UifCalloutTriggerHint["HoverInBlurOut"] = 3] = "HoverInBlurOut";
})(UifCalloutTriggerHint || (UifCalloutTriggerHint = {}));

var UIfColorPickerModel = /** @class */ (function () {
    function UIfColorPickerModel() {
    }
    return UIfColorPickerModel;
}());

var UifContextualMenuDirectionHint;
(function (UifContextualMenuDirectionHint) {
    UifContextualMenuDirectionHint[UifContextualMenuDirectionHint["Top"] = 1] = "Top";
    // Right = 2,
    UifContextualMenuDirectionHint[UifContextualMenuDirectionHint["Bottom"] = 3] = "Bottom";
    // Left = 4
})(UifContextualMenuDirectionHint || (UifContextualMenuDirectionHint = {}));

var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
var MonthFullname;
(function (MonthFullname) {
    MonthFullname["January"] = "January";
    MonthFullname["February"] = "February";
    MonthFullname["March"] = "March";
    MonthFullname["April"] = "April";
    MonthFullname["May"] = "May";
    MonthFullname["June"] = "June";
    MonthFullname["July"] = "July";
    MonthFullname["August"] = "August";
    MonthFullname["September"] = "September";
    MonthFullname["October"] = "October";
    MonthFullname["November"] = "November";
    MonthFullname["December"] = "December";
})(MonthFullname || (MonthFullname = {}));
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
var MonthShortname;
(function (MonthShortname) {
    MonthShortname["January"] = "Jan";
    MonthShortname["February"] = "Feb";
    MonthShortname["March"] = "Mar";
    MonthShortname["April"] = "Apr";
    MonthShortname["May"] = "May";
    MonthShortname["June"] = "Jun";
    MonthShortname["July"] = "Jul";
    MonthShortname["August"] = "Aug";
    MonthShortname["September"] = "Sep";
    MonthShortname["October"] = "Oct";
    MonthShortname["November"] = "Nov";
    MonthShortname["December"] = "Dec";
})(MonthShortname || (MonthShortname = {}));
var DateModel = /** @class */ (function () {
    function DateModel() {
        this.isInFocus = false;
        this.isHighlighted = false;
        this.isToday = false;
        this.disabled = false;
    }
    return DateModel;
}());
var WeekDayData = /** @class */ (function () {
    function WeekDayData() {
    }
    return WeekDayData;
}());


var Models = Object.freeze({
	get WeekDay () { return WeekDay; },
	get MonthFullname () { return MonthFullname; },
	get Month () { return Month; },
	get MonthShortname () { return MonthShortname; },
	DateModel: DateModel,
	WeekDayData: WeekDayData
});

var UifFacepileCard = /** @class */ (function () {
    function UifFacepileCard() {
        this.isOpen = false;
        this._uid = Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
        this.directionalHint = UifCalloutDirectionalHint.BottomCenter;
    }
    return UifFacepileCard;
}());

var UifIconFlip;
(function (UifIconFlip) {
    UifIconFlip[UifIconFlip["None"] = 0] = "None";
    UifIconFlip["Horizontal"] = "flip-horizontal";
    UifIconFlip["Vertical"] = "flip-vertical";
})(UifIconFlip || (UifIconFlip = {}));
var UifIconBadge;
(function (UifIconBadge) {
    UifIconBadge[UifIconBadge["None"] = 0] = "None";
    UifIconBadge["AlertBadge"] = "has-alert-badge";
    UifIconBadge["SuccessBadge"] = "has-success-badge";
    UifIconBadge["WarningBadge"] = "has-warning-badge";
})(UifIconBadge || (UifIconBadge = {}));
var UifIconDir;
(function (UifIconDir) {
    UifIconDir[UifIconDir["Up"] = 0] = "Up";
    UifIconDir["Down"] = "dir-down";
    UifIconDir["Left"] = "dir-left";
    UifIconDir["Right"] = "dir-right";
})(UifIconDir || (UifIconDir = {}));

var UifMessageType;
(function (UifMessageType) {
    UifMessageType["Default"] = "";
    UifMessageType["Success"] = "ms-MessageBar--success";
    UifMessageType["Error"] = "ms-MessageBar--error";
    UifMessageType["Blocked"] = "ms-MessageBar--blocked";
    UifMessageType["Warning"] = "ms-MessageBar--warning";
    UifMessageType["SevereWarning"] = "ms-MessageBar--severeWarning";
})(UifMessageType || (UifMessageType = {}));

var UifPanelSizeHint;
(function (UifPanelSizeHint) {
    UifPanelSizeHint["Default"] = "";
    UifPanelSizeHint["Medium"] = "ms-Panel--md";
    UifPanelSizeHint["Large"] = "ms-Panel--lg";
    UifPanelSizeHint["ExtraLarge"] = "ms-Panel--xl";
    UifPanelSizeHint["ExtraExtraLarge"] = "ms-Panel--xxl";
})(UifPanelSizeHint || (UifPanelSizeHint = {}));
var UifPanelDirectionHint;
(function (UifPanelDirectionHint) {
    UifPanelDirectionHint["Right"] = "ms-Panel--right";
    UifPanelDirectionHint["Left"] = "ms-Panel--left";
})(UifPanelDirectionHint || (UifPanelDirectionHint = {}));

var PeoplePickerGroup = /** @class */ (function () {
    function PeoplePickerGroup() {
        this.title = 'Contacts';
        this.poeplePickerItems = [];
    }
    return PeoplePickerGroup;
}());

var UifPersonaViewType;
(function (UifPersonaViewType) {
    UifPersonaViewType["Default"] = "";
    UifPersonaViewType["Tiny"] = "ms-Persona--tiny";
    UifPersonaViewType["ExtraSmall"] = "ms-Persona--xs";
    UifPersonaViewType["Small"] = "ms-Persona--sm";
    UifPersonaViewType["Large"] = "ms-Persona--lg";
    UifPersonaViewType["ExtraLarge"] = "ms-Persona--xl";
})(UifPersonaViewType || (UifPersonaViewType = {}));
var UifPersonaAvailabilityType;
(function (UifPersonaAvailabilityType) {
    UifPersonaAvailabilityType["Available"] = "ms-Persona--available";
    UifPersonaAvailabilityType["Away"] = "ms-Persona--away";
    UifPersonaAvailabilityType["Blocked"] = "ms-Persona--blocked";
    UifPersonaAvailabilityType["Busy"] = "ms-Persona--busy";
    UifPersonaAvailabilityType["DND"] = "ms-Persona--dnd";
    UifPersonaAvailabilityType["Offline"] = "ms-Persona--offline";
    UifPersonaAvailabilityType["Facepile"] = "ms-Persona--facepile";
})(UifPersonaAvailabilityType || (UifPersonaAvailabilityType = {}));
var PersonaItem = /** @class */ (function () {
    function PersonaItem() {
        this.availability = UifPersonaAvailabilityType.Offline;
        this.id = Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
    }
    return PersonaItem;
}());

var PersonMailItem = /** @class */ (function () {
    function PersonMailItem() {
    }
    return PersonMailItem;
}());
var PersonChatItem = /** @class */ (function () {
    function PersonChatItem() {
    }
    return PersonChatItem;
}());
var PersonPhoneItem = /** @class */ (function () {
    function PersonPhoneItem() {
    }
    return PersonPhoneItem;
}());
var OrgChartGroup = /** @class */ (function () {
    function OrgChartGroup() {
        this.orgItems = [];
    }
    return OrgChartGroup;
}());
var PersonaCard = /** @class */ (function () {
    function PersonaCard() {
        this.personalDetails = {};
        this.directionalHint = UifCalloutDirectionalHint.TopLeftEdge;
        this.isChatPaneActive = true;
        this.isMailPaneActive = false;
        this.isVideoPaneActive = false;
        this.isPhonePaneActive = false;
        this.isOrgPaneActive = false;
        this.isPhonePaneCollapsed = true;
        this.mailDetails = [];
        this.chatDetail = {};
        this.phoneDetails = [];
        this.videoDetail = {};
        this.orgChartGroups = [];
    }
    PersonaCard.prototype.activateChatPane = function () {
        this.isChatPaneActive = true;
        this.isMailPaneActive = false;
        this.isVideoPaneActive = false;
        this.isPhonePaneActive = false;
        this.isOrgPaneActive = false;
    };
    PersonaCard.prototype.activatePhonePane = function () {
        this.isChatPaneActive = false;
        this.isMailPaneActive = false;
        this.isVideoPaneActive = false;
        this.isPhonePaneActive = true;
        this.isOrgPaneActive = false;
    };
    PersonaCard.prototype.activateVideoPane = function () {
        this.isChatPaneActive = false;
        this.isMailPaneActive = false;
        this.isVideoPaneActive = true;
        this.isPhonePaneActive = false;
        this.isOrgPaneActive = false;
    };
    PersonaCard.prototype.activatMailPane = function () {
        this.isChatPaneActive = false;
        this.isMailPaneActive = true;
        this.isVideoPaneActive = false;
        this.isPhonePaneActive = false;
        this.isOrgPaneActive = false;
    };
    PersonaCard.prototype.activateOrgPane = function () {
        this.isChatPaneActive = false;
        this.isMailPaneActive = false;
        this.isVideoPaneActive = false;
        this.isPhonePaneActive = false;
        this.isOrgPaneActive = true;
    };
    return PersonaCard;
}());

var UifPivotType;
(function (UifPivotType) {
    UifPivotType["Regular"] = "";
    UifPivotType["Tabs"] = "ms-Pivot--tabs";
})(UifPivotType || (UifPivotType = {}));
var UifPivotSize;
(function (UifPivotSize) {
    UifPivotSize["Default"] = "";
    UifPivotSize["Large"] = "ms-Pivot--large";
})(UifPivotSize || (UifPivotSize = {}));

var UifRatingModel = /** @class */ (function () {
    function UifRatingModel() {
        this.marked = false;
        this.size = '16px';
        this.color = '#D0D0D0';
    }
    return UifRatingModel;
}());

var UifModalSize;
(function (UifModalSize) {
    UifModalSize["Default"] = "ms-Modal-custom-default";
    UifModalSize["Medium"] = "ms-Modal-custom-md";
    UifModalSize["Large"] = "ms-Modal-custom-large";
    UifModalSize["ExtraLarge"] = "ms-Modal-custom-xl";
})(UifModalSize || (UifModalSize = {}));

var UiFWizardNavigation;
(function (UiFWizardNavigation) {
    UiFWizardNavigation[UiFWizardNavigation["TopNavigation"] = 0] = "TopNavigation";
    UiFWizardNavigation[UiFWizardNavigation["BottomNavigation"] = 1] = "BottomNavigation";
    UiFWizardNavigation[UiFWizardNavigation["SideNavigation"] = 2] = "SideNavigation";
})(UiFWizardNavigation || (UiFWizardNavigation = {}));

var UifBreadcrumbComponent = /** @class */ (function () {
    function UifBreadcrumbComponent() {
        this.maxDisplayedItems = Number.MAX_SAFE_INTEGER;
        this.items = [];
        this.breadcrumbItems = [];
        this.breadcrumbItemsOverflowed = [];
        this.showOverflow = false;
        this.showOverflowContextMenu = false;
    }
    UifBreadcrumbComponent.prototype.ngOnChanges = function () {
        this.showOverflow = false;
        this.showOverflowContextMenu = false;
        this.breadcrumbItems = this._breadcrumbItems();
        this.breadcrumbItemsOverflowed = this._breadcrumbItemsOverflowed();
    };
    UifBreadcrumbComponent.prototype._breadcrumbItems = function () {
        var items = [].concat(this.items);
        this.maxDisplayedItems = this.maxDisplayedItems ? this.maxDisplayedItems : Number.MAX_SAFE_INTEGER;
        this.showOverflow = false;
        if (this.maxDisplayedItems < items.length) {
            items = items.slice(items.length - this.maxDisplayedItems, items.length);
            this.showOverflow = true;
        }
        return items;
    };
    UifBreadcrumbComponent.prototype._breadcrumbItemsOverflowed = function () {
        var items = [];
        this.maxDisplayedItems = this.maxDisplayedItems ? this.maxDisplayedItems : Number.MAX_SAFE_INTEGER;
        if (this.maxDisplayedItems < this.items.length) {
            items = this.items.slice(0, this.items.length - this.maxDisplayedItems - 1);
        }
        return items;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifBreadcrumbComponent.prototype, "maxDisplayedItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UifBreadcrumbComponent.prototype, "items", void 0);
    UifBreadcrumbComponent = __decorate([
        Component({
            selector: 'uif-breadcrumb',
            template: "<div class=\"ms-Breadcrumb\" [class.is-overflow]=\"showOverflow\">\n    <div class=\"ms-Breadcrumb-overflow\">\n        <div class=\"ms-Breadcrumb-overflowButton ms-Icon ms-Icon--More\" (click)=\"showOverflowContextMenu = !showOverflowContextMenu\"\n            tabindex=\"1\"></div>\n        <div class=\"ms-Breadcrumb-overflowMenu\" [class.is-open]=\"showOverflowContextMenu\">\n            <ul class=\"ms-ContextualMenu\" [class.is-open]=\"showOverflowContextMenu\">\n                <li class=\"ms-ContextualMenu-item\" *ngFor=\"let item of breadcrumbItemsOverflowed\">\n                    <a class=\"ms-ContextualMenu-link\" [attr.target]=\"item.openInNewTab ? '_blank': ''\" [attr.href]=\"item.href\" tabindex=\"2\">{{item.text}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <ul class=\"ms-Breadcrumb-list\">\n        <li class=\"ms-Breadcrumb-listItem\" *ngFor=\"let item of breadcrumbItems\">\n            <a class=\"ms-Breadcrumb-itemLink\" [attr.target]=\"item.openInNewTab ? '_blank': ''\" [attr.href]=\"item.href\" tabindex=\"0\">{{item.text}}</a>\n            <i class=\"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight\"></i>\n        </li>\n    </ul>\n</div>",
            styles: [".ms-Breadcrumb-chevron {\n  margin: 7px 4px 0 4px;\n  vertical-align: middle; }\n"]
        })
    ], UifBreadcrumbComponent);
    return UifBreadcrumbComponent;
}());

var UifButtonComponent = /** @class */ (function () {
    function UifButtonComponent(elRef) {
        this.elRef = elRef;
        this.primary = false;
        this.icon = null;
        this.disabled = false;
        this.outline = false;
    }
    UifButtonComponent.prototype.ngOnChanges = function (changes) {
        for (var prop in changes) {
            if (prop === 'disabled') {
                if (changes[prop]) {
                    var change = changes[prop];
                    if (change.currentValue) {
                        if (this.elRef && this.elRef.nativeElement) {
                            this.elRef.nativeElement.setAttribute('disabled', 'disabled');
                        }
                        else {
                            this.elRef.nativeElement.removeAttribute('disabled');
                        }
                    }
                }
            }
        }
    };
    Object.defineProperty(UifButtonComponent.prototype, "iconName", {
        get: function () {
            return this.icon ? 'ms-Icon--' + this.icon : '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifButtonComponent.prototype, "primary", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifButtonComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifButtonComponent.prototype, "outline", void 0);
    UifButtonComponent = __decorate([
        Component({
            selector: 'uif-button',
            template: "\n\t<button class=\"ms-Button\" [class.ms-Button--primary]=\"primary\" [class.has-icon]=\"icon\" [disabled]=\"disabled\" [class.is-outline]=\"outline\">\n\t\t<span class=\"ms-Button-icon\" [hidden]=\"!icon\">\n\t\t\t<i class=\"ms-Icon\" [ngClass]=\"iconName\"></i>\n\t\t</span>\n    \t<span class=\"ms-Button-label\"><ng-content></ng-content></span>\n\t</button>\n\t",
            styles: [
                ":host {\n  display: inline-block; }\n  :host[disabled] {\n    pointer-events: none; }\n\n.ms-Button.has-icon .ms-Button-icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px; }\n\n.ms-Button.is-outline {\n  background: none;\n  color: #106ebe;\n  border-color: #106ebe; }\n  .ms-Button.is-outline .ms-Button-label {\n    color: #106ebe; }\n  .ms-Button.is-outline:focus, .ms-Button.is-outline:hover, .ms-Button.is-outline:active {\n    background: rgba(0, 0, 0, 0.05); }\n\n.ms-Button.ms-Button--primary:not([disabled]) {\n  background: #0078d7; }\n  .ms-Button.ms-Button--primary:not([disabled]):focus, .ms-Button.ms-Button--primary:not([disabled]):hover, .ms-Button.ms-Button--primary:not([disabled]):active {\n    background: #005ca4; }\n  .ms-Button.ms-Button--primary:not([disabled]).has-icon .ms-Button-icon {\n    color: #fff; }\n\n.ms-Button.ms-Button--compound {\n  display: inline-block; }\n  .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) {\n    background: #0078d7; }\n    .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) span.ms-Button-label, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) span.ms-Button-icon, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) span.ms-Button-description {\n      color: #fff; }\n    .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]):focus, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]):hover, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]):active {\n      background: #005ca4; }\n"
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object])
    ], UifButtonComponent);
    return UifButtonComponent;
    var _a;
}());

var UifHeroButtonComponent = /** @class */ (function () {
    function UifHeroButtonComponent() {
        this.primary = false;
        this.icon = null;
        this.disabled = false;
    }
    Object.defineProperty(UifHeroButtonComponent.prototype, "iconName", {
        get: function () {
            return this.icon ? 'ms-Icon--' + this.icon : '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifHeroButtonComponent.prototype, "primary", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifHeroButtonComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifHeroButtonComponent.prototype, "disabled", void 0);
    UifHeroButtonComponent = __decorate([
        Component({
            selector: 'uif-hero-button',
            template: "\n\t<button class=\"ms-Button ms-Button--hero\" [class.has-icon]=\"icon\" [disabled]=\"disabled\" [hidden]=\"!icon\">\n\t\t<span class=\"ms-Button-icon\">\n\t\t\t<i class=\"ms-Icon\" [ngClass]=\"iconName\"></i>\n\t\t</span>\n    \t<span class=\"ms-Button-label\"><ng-content></ng-content></span>\n\t</button>\n\t",
            styles: [
                ":host {\n  display: inline-block; }\n  :host[disabled] {\n    pointer-events: none; }\n\n.ms-Button.has-icon .ms-Button-icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px; }\n\n.ms-Button.is-outline {\n  background: none;\n  color: #106ebe;\n  border-color: #106ebe; }\n  .ms-Button.is-outline .ms-Button-label {\n    color: #106ebe; }\n  .ms-Button.is-outline:focus, .ms-Button.is-outline:hover, .ms-Button.is-outline:active {\n    background: rgba(0, 0, 0, 0.05); }\n\n.ms-Button.ms-Button--primary:not([disabled]) {\n  background: #0078d7; }\n  .ms-Button.ms-Button--primary:not([disabled]):focus, .ms-Button.ms-Button--primary:not([disabled]):hover, .ms-Button.ms-Button--primary:not([disabled]):active {\n    background: #005ca4; }\n  .ms-Button.ms-Button--primary:not([disabled]).has-icon .ms-Button-icon {\n    color: #fff; }\n\n.ms-Button.ms-Button--compound {\n  display: inline-block; }\n  .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) {\n    background: #0078d7; }\n    .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) span.ms-Button-label, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) span.ms-Button-icon, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) span.ms-Button-description {\n      color: #fff; }\n    .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]):focus, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]):hover, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]):active {\n      background: #005ca4; }\n"
            ]
        })
    ], UifHeroButtonComponent);
    return UifHeroButtonComponent;
}());

var UifCompoundButtonComponent = /** @class */ (function () {
    function UifCompoundButtonComponent() {
        this.primary = false;
        this.description = '';
        this.disabled = false;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCompoundButtonComponent.prototype, "primary", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCompoundButtonComponent.prototype, "description", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCompoundButtonComponent.prototype, "disabled", void 0);
    UifCompoundButtonComponent = __decorate([
        Component({
            selector: 'uif-compound-button',
            template: "\n\t<button class=\"ms-Button ms-Button--compound\" [class.ms-Button--compoundPrimary]=\"primary\" [disabled]=\"disabled\">\n\t\t<span class=\"ms-Button-label\"><ng-content></ng-content></span>\n\t\t<span class=\"ms-Button-description\">{{description}}</span>\n\t</button>\n\t",
            styles: [
                ":host {\n  display: inline-block; }\n  :host[disabled] {\n    pointer-events: none; }\n\n.ms-Button.has-icon .ms-Button-icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px; }\n\n.ms-Button.is-outline {\n  background: none;\n  color: #106ebe;\n  border-color: #106ebe; }\n  .ms-Button.is-outline .ms-Button-label {\n    color: #106ebe; }\n  .ms-Button.is-outline:focus, .ms-Button.is-outline:hover, .ms-Button.is-outline:active {\n    background: rgba(0, 0, 0, 0.05); }\n\n.ms-Button.ms-Button--primary:not([disabled]) {\n  background: #0078d7; }\n  .ms-Button.ms-Button--primary:not([disabled]):focus, .ms-Button.ms-Button--primary:not([disabled]):hover, .ms-Button.ms-Button--primary:not([disabled]):active {\n    background: #005ca4; }\n  .ms-Button.ms-Button--primary:not([disabled]).has-icon .ms-Button-icon {\n    color: #fff; }\n\n.ms-Button.ms-Button--compound {\n  display: inline-block; }\n  .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) {\n    background: #0078d7; }\n    .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) span.ms-Button-label, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) span.ms-Button-icon, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]) span.ms-Button-description {\n      color: #fff; }\n    .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]):focus, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]):hover, .ms-Button.ms-Button--compound.ms-Button--compoundPrimary:not([disabled]):active {\n      background: #005ca4; }\n"
            ]
        })
    ], UifCompoundButtonComponent);
    return UifCompoundButtonComponent;
}());

function GetRandomInt() {
    return Math.floor(Math.random() * 1000000);
}
function GetScrollParent(node) {
    var isElement = node instanceof HTMLElement;
    var overflowY = isElement && window.getComputedStyle(node).overflowY;
    var isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
    if (!node) {
        return null;
    }
    else if (isScrollable && node.scrollHeight >= node.clientHeight) {
        return node;
    }
    return GetScrollParent(node.parentNode) || document.body;
}
var EventSubscribers = /** @class */ (function () {
    function EventSubscribers() {
        this.subscribers = [];
    }
    EventSubscribers.prototype.pushSubscriber = function (item) {
        var evt = this.subscribers.find(function (x) { return x.name === item.name; });
        if (evt) {
            if (evt.subscripiton) {
                evt.subscripiton.unsubscribe();
            }
            evt.subscripiton = item.subscripiton;
        }
        else {
            this.subscribers.push(item);
        }
    };
    EventSubscribers.prototype.clearSubscribers = function (id) {
        if (id === void 0) { id = null; }
        if (!id) {
            this.subscribers.forEach(function (item) {
                if (item.subscripiton) {
                    item.subscripiton.unsubscribe();
                    item.subscripiton = null;
                }
            });
        }
        else {
            this.subscribers.forEach(function (item) {
                if (item.name.localeCompare(id) === 0 && item.subscripiton) {
                    item.subscripiton.unsubscribe();
                    item.subscripiton = null;
                }
            });
        }
    };
    EventSubscribers.prototype.emptySubscribers = function () {
        this.clearSubscribers();
        this.subscribers = [];
    };
    return EventSubscribers;
}());

var UifOpenCalloutComponent = /** @class */ (function () {
    function UifOpenCalloutComponent(elementRef) {
        this.elementRef = elementRef;
        this.element = this.elementRef.nativeElement;
    }
    UifOpenCalloutComponent = __decorate([
        Component({
            selector: 'uif-open-callout, [uifOpenCallout]',
            styles: [
                ':host {display: inline-block; }'
            ],
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object])
    ], UifOpenCalloutComponent);
    return UifOpenCalloutComponent;
    var _a;
}());
var UifCalloutHeaderComponent = /** @class */ (function () {
    function UifCalloutHeaderComponent() {
    }
    UifCalloutHeaderComponent = __decorate([
        Component({
            selector: 'uif-callout-header',
            template: '<ng-content></ng-content>'
        })
    ], UifCalloutHeaderComponent);
    return UifCalloutHeaderComponent;
}());
var UifCalloutContentComponent = /** @class */ (function () {
    function UifCalloutContentComponent() {
    }
    UifCalloutContentComponent = __decorate([
        Component({
            selector: 'uif-callout-content',
            template: '<ng-content></ng-content>'
        })
    ], UifCalloutContentComponent);
    return UifCalloutContentComponent;
}());
var UifCalloutActionComponent = /** @class */ (function () {
    function UifCalloutActionComponent() {
    }
    UifCalloutActionComponent = __decorate([
        Component({
            selector: 'uif-callout-actions',
            template: '<ng-content></ng-content>'
        })
    ], UifCalloutActionComponent);
    return UifCalloutActionComponent;
}());

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof commonjsGlobal !== 'undefined' && commonjsGlobal;
var _root = __window || __global || __self;
var root_1 = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();


var root = {
	root: root_1
};

function isFunction(x) {
    return typeof x === 'function';
}
var isFunction_2 = isFunction;


var isFunction_1 = {
	isFunction: isFunction_2
};

var isArray_1 = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });


var isArray = {
	isArray: isArray_1
};

function isObject(x) {
    return x != null && typeof x === 'object';
}
var isObject_2 = isObject;


var isObject_1 = {
	isObject: isObject_2
};

// typeof any so that it we don't have to cast when comparing a result to the error object
var errorObject_1 = { e: {} };


var errorObject = {
	errorObject: errorObject_1
};

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject.errorObject.e = e;
        return errorObject.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
var tryCatch_2 = tryCatch;


var tryCatch_1 = {
	tryCatch: tryCatch_2
};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends$1(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
var UnsubscriptionError_2 = UnsubscriptionError;


var UnsubscriptionError_1 = {
	UnsubscriptionError: UnsubscriptionError_2
};

/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject.errorObject.e.errors) : [errorObject.errorObject.e]);
            }
        }
        if (isArray.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
var Subscription_2 = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}


var Subscription_1 = {
	Subscription: Subscription_2
};

var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};


var Observer = {
	empty: empty
};

var rxSubscriber = createCommonjsModule(function (module, exports) {

var Symbol = root.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;

});
var rxSubscriber_1 = rxSubscriber.rxSubscriber;
var rxSubscriber_2 = rxSubscriber.$$rxSubscriber;

var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends$2(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
var Subscriber_2 = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends$2(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));


var Subscriber_1 = {
	Subscriber: Subscriber_2
};

function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber.rxSubscriber]) {
            return nextOrObserver[rxSubscriber.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
var toSubscriber_2 = toSubscriber;


var toSubscriber_1 = {
	toSubscriber: toSubscriber_2
};

var observable = createCommonjsModule(function (module, exports) {

function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;

});
var observable_1 = observable.getSymbolObservable;
var observable_2 = observable.observable;
var observable_3 = observable.$$observable;

/* tslint:disable:no-empty */
function noop() { }
var noop_2 = noop;


var noop_1 = {
	noop: noop_2
};

/* tslint:enable:max-line-length */
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return pipeFromArray(fns);
}
var pipe_2 = pipe;
/* @internal */
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
var pipeFromArray_1 = pipeFromArray;


var pipe_1 = {
	pipe: pipe_2,
	pipeFromArray: pipeFromArray_1
};

/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable$$1 = new Observable();
        observable$$1.source = this;
        observable$$1.operator = operator;
        return observable$$1;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remove this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2.5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source || !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root.root.Rx && root.root.Rx.config && root.root.Rx.config.Promise) {
                PromiseCtor = root.root.Rx.config.Promise;
            }
            else if (root.root.Promise) {
                PromiseCtor = root.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable.observable] = function () {
        return this;
    };
    /* tslint:enable:max-line-length */
    /**
     * Used to stitch together functional operators into a chain.
     * @method pipe
     * @return {Observable} the Observable result of all of the operators having
     * been called in the order they were passed in.
     *
     * @example
     *
     * import { map, filter, scan } from 'rxjs/operators';
     *
     * Rx.Observable.interval(1000)
     *   .pipe(
     *     filter(x => x % 2 === 0),
     *     map(x => x + x),
     *     scan((acc, x) => acc + x)
     *   )
     *   .subscribe(x => console.log(x))
     */
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i - 0] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    /* tslint:enable:max-line-length */
    Observable.prototype.toPromise = function (PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root.root.Rx && root.root.Rx.config && root.root.Rx.config.Promise) {
                PromiseCtor = root.root.Rx.config.Promise;
            }
            else if (root.root.Promise) {
                PromiseCtor = root.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
var Observable_2 = Observable;


var Observable_1 = {
	Observable: Observable_2
};

var __extends$3 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var toString = Object.prototype.toString;
function isNodeStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isNodeList(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object NodeList]';
}
function isHTMLCollection(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object HTMLCollection]';
}
function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventObservable = (function (_super) {
    __extends$3(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
    }
    /* tslint:enable:max-line-length */
    /**
     * Creates an Observable that emits events of a specific type coming from the
     * given event target.
     *
     * <span class="informal">Creates an Observable from DOM events, or Node.js
     * EventEmitter events or others.</span>
     *
     * <img src="./img/fromEvent.png" width="100%">
     *
     * `fromEvent` accepts as a first argument event target, which is an object with methods
     * for registering event handler functions. As a second argument it takes string that indicates
     * type of event we want to listen for. `fromEvent` supports selected types of event targets,
     * which are described in detail below. If your event target does not match any of the ones listed,
     * you should use {@link fromEventPattern}, which can be used on arbitrary APIs.
     * When it comes to APIs supported by `fromEvent`, their methods for adding and removing event
     * handler functions have different names, but they all accept a string describing event type
     * and function itself, which will be called whenever said event happens.
     *
     * Every time resulting Observable is subscribed, event handler function will be registered
     * to event target on given event type. When that event fires, value
     * passed as a first argument to registered function will be emitted by output Observable.
     * When Observable is unsubscribed, function will be unregistered from event target.
     *
     * Note that if event target calls registered function with more than one argument, second
     * and following arguments will not appear in resulting stream. In order to get access to them,
     * you can pass to `fromEvent` optional project function, which will be called with all arguments
     * passed to event handler. Output Observable will then emit value returned by project function,
     * instead of the usual value.
     *
     * Remember that event targets listed below are checked via duck typing. It means that
     * no matter what kind of object you have and no matter what environment you work in,
     * you can safely use `fromEvent` on that object if it exposes described methods (provided
     * of course they behave as was described above). So for example if Node.js library exposes
     * event target which has the same method names as DOM EventTarget, `fromEvent` is still
     * a good choice.
     *
     * If the API you use is more callback then event handler oriented (subscribed
     * callback function fires only once and thus there is no need to manually
     * unregister it), you should use {@link bindCallback} or {@link bindNodeCallback}
     * instead.
     *
     * `fromEvent` supports following types of event targets:
     *
     * **DOM EventTarget**
     *
     * This is an object with `addEventListener` and `removeEventListener` methods.
     *
     * In the browser, `addEventListener` accepts - apart from event type string and event
     * handler function arguments - optional third parameter, which is either an object or boolean,
     * both used for additional configuration how and when passed function will be called. When
     * `fromEvent` is used with event target of that type, you can provide this values
     * as third parameter as well.
     *
     * **Node.js EventEmitter**
     *
     * An object with `addListener` and `removeListener` methods.
     *
     * **JQuery-style event target**
     *
     * An object with `on` and `off` methods
     *
     * **DOM NodeList**
     *
     * List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.
     *
     * Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes
     * it contains and install event handler function in every of them. When returned Observable
     * is unsubscribed, function will be removed from all Nodes.
     *
     * **DOM HtmlCollection**
     *
     * Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is
     * installed and removed in each of elements.
     *
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * clicks.subscribe(x => console.log(x));
     *
     * // Results in:
     * // MouseEvent object logged to console every time a click
     * // occurs on the document.
     *
     *
     * @example <caption>Use addEventListener with capture option</caption>
     * var clicksInDocument = Rx.Observable.fromEvent(document, 'click', true); // note optional configuration parameter
     *                                                                          // which will be passed to addEventListener
     * var clicksInDiv = Rx.Observable.fromEvent(someDivInDocument, 'click');
     *
     * clicksInDocument.subscribe(() => console.log('document'));
     * clicksInDiv.subscribe(() => console.log('div'));
     *
     * // By default events bubble UP in DOM tree, so normally
     * // when we would click on div in document
     * // "div" would be logged first and then "document".
     * // Since we specified optional `capture` option, document
     * // will catch event when it goes DOWN DOM tree, so console
     * // will log "document" and then "div".
     *
     * @see {@link bindCallback}
     * @see {@link bindNodeCallback}
     * @see {@link fromEventPattern}
     *
     * @param {EventTargetLike} target The DOM EventTarget, Node.js
     * EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to.
     * @param {string} eventName The event name of interest, being emitted by the
     * `target`.
     * @param {EventListenerOptions} [options] Options to pass through to addEventListener
     * @param {SelectorMethodSignature<T>} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEvent
     * @owner Observable
     */
    FromEventObservable.create = function (target, eventName, options, selector) {
        if (isFunction_1.isFunction(options)) {
            selector = options;
            options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        else {
            throw new TypeError('Invalid event target');
        }
        subscriber.add(new Subscription_1.Subscription(unsubscribe));
    };
    FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
            if (result === errorObject.errorObject) {
                subscriber.error(errorObject.errorObject.e);
            }
            else {
                subscriber.next(result);
            }
        } : function (e) { return subscriber.next(e); };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
}(Observable_1.Observable));
var FromEventObservable_2 = FromEventObservable;


var FromEventObservable_1 = {
	FromEventObservable: FromEventObservable_2
};

var fromEvent_1 = FromEventObservable_1.FromEventObservable.create;


var fromEvent = {
	fromEvent: fromEvent_1
};

Observable_1.Observable.fromEvent = fromEvent.fromEvent;

var UifCalloutComponent = /** @class */ (function () {
    function UifCalloutComponent(elementRef) {
        this.elementRef = elementRef;
        this.openCalloutComponent = UifOpenCalloutComponent;
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.elementIntialized = false;
        this.isTooltip = false;
        this.appendToBody = false;
        this.showHeader = true;
        this.showActions = true;
        this.headerClasses = '';
        this.contentClasses = '';
        this.calloutClasses = '';
        this.position = 'left';
        this.gap = 10;
        this.showArrow = true;
        this.showClose = false;
        this.directionalHint = UifCalloutDirectionalHint.TopCenter;
        this.triggerHint = UifCalloutTriggerHint.ClickInClickOut;
        this.onTextEllipsis = false;
        this.UifCalloutTriggerHints = UifCalloutTriggerHint;
        this.listeners = {};
        this.listenersPopulated = false;
        this.disableClicks = false;
        this.tabIndex = null;
        this.onDocumnetKeyUpListener = null;
        this.eventSubscribers = new EventSubscribers();
    }
    UifCalloutComponent.prototype.ngAfterContentInit = function () {
        this.nativeEl = this.elementRef.nativeElement;
        if (this.nativeEl) {
            this.nativeCalloutContainer = this.nativeEl.querySelector('.ms-ContextualHost');
            this.nativeCallout = this.nativeEl.querySelector('.ms-ContextualHost-main');
            this.nativeBeak = this.nativeEl.querySelector('.ms-Beak');
            this.calloutTriggerHandler = this.nativeEl.querySelector('uif-open-callout, [uifOpenCallout]');
        }
        if (this.msOpenCalloutTrigger.elementRef) {
            this.nativeCalloutTrigger = this.msOpenCalloutTrigger.elementRef.nativeElement;
        }
        this.elementIntialized = true;
        this.addListeners();
        if (this.isOpen) {
            this.openCallout();
        }
        else {
            this.closeCallout();
        }
    };
    UifCalloutComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.showArrow = JSON.parse(this.showArrow.toString());
        this.showClose = JSON.parse(this.showClose.toString());
        this.gap = parseInt(this.gap.toString(), 10);
        switch (+this.triggerHint) {
            case 2:
                this.triggerHint = UifCalloutTriggerHint.FocusInBlurOut;
                this.disableClicks = true;
                this.tabIndex = 0;
                break;
            case 3:
                this.triggerHint = UifCalloutTriggerHint.HoverInBlurOut;
                this.disableClicks = true;
                this.tabIndex = null;
                break;
            default:
                this.triggerHint = UifCalloutTriggerHint.ClickInClickOut;
                this.disableClicks = false;
                this.tabIndex = 0;
                break;
        }
        var isOpenPropChanged = false;
        var change;
        for (var prop in changes) {
            if (changes[prop]) {
                change = changes[prop];
                isOpenPropChanged = prop === 'isOpen';
                if (prop === 'triggerHint' && this.elementIntialized) {
                    this.addListeners();
                }
                if (prop === 'isOpen') {
                    if (change.currentValue) {
                        this.addDocumentListener();
                    }
                    else {
                        this.eventSubscribers.clearSubscribers('onKeyUpListener');
                    }
                }
            }
        }
        setTimeout(function () {
            if (isOpenPropChanged && !change.firstChange) {
                if (change.currentValue) {
                    _this.openCallout();
                }
                else {
                    _this.closeCallout();
                }
            }
            if (isOpenPropChanged && !_this.isOpen && _this.appendToBody) {
                if (_this.childInDOM) {
                    document.body.removeChild(_this.childInDOM);
                    _this.childInDOM = null;
                }
            }
        });
    };
    UifCalloutComponent.prototype.ngOnDestroy = function () {
        this.eventSubscribers.clearSubscribers();
    };
    UifCalloutComponent.prototype.clearDocumentListener = function () {
        this.eventSubscribers.clearSubscribers();
    };
    UifCalloutComponent.prototype.addDocumentListener = function () {
        var _this = this;
        this.eventSubscribers.pushSubscriber({
            name: 'onKeyUpListener',
            subscripiton: Observable_2.fromEvent(document, 'keyup')
                .subscribe(function ($event) {
                if ($event.key === 'Escape') {
                    _this.isOpen = false;
                    _this.isOpenChange.emit(_this.isOpen);
                }
            }),
            meta: 'document'
        });
    };
    UifCalloutComponent.prototype.openHandler = function () {
        this.open();
    };
    UifCalloutComponent.prototype.closeHandler = function () {
        this.close();
    };
    UifCalloutComponent.prototype.toggleHandler = function () {
        this.toggleCallout();
    };
    UifCalloutComponent.prototype.onScrollAndResize = function () {
        if (this.isOpen) {
            this.close();
        }
    };
    UifCalloutComponent.prototype.addListeners = function () {
        var _this = this;
        this.eventSubscribers.emptySubscribers();
        setTimeout(function () {
            switch (_this.triggerHint) {
                case UifCalloutTriggerHint.FocusInBlurOut:
                    {
                        _this.eventSubscribers.pushSubscriber({
                            name: 'onFocusListener',
                            subscripiton: Observable_2.fromEvent(_this.calloutTriggerHandler, 'focus', true)
                                .subscribe(function () {
                                _this.openHandler();
                            }),
                            meta: 'calloutTriggerHandler'
                        });
                        _this.eventSubscribers.pushSubscriber({
                            name: 'onBlurListener',
                            subscripiton: Observable_2.fromEvent(_this.calloutTriggerHandler, 'blur')
                                .subscribe(function () {
                                _this.closeHandler();
                            }),
                            meta: 'calloutTriggerHandler'
                        });
                        break;
                    }
                case UifCalloutTriggerHint.HoverInBlurOut:
                    {
                        _this.eventSubscribers.pushSubscriber({
                            name: 'onMouseOverListener',
                            subscripiton: Observable_2.fromEvent(_this.calloutTriggerHandler, 'mouseover')
                                .subscribe(function () {
                                _this.openHandler();
                            }),
                            meta: 'calloutTriggerHandler'
                        });
                        _this.eventSubscribers.pushSubscriber({
                            name: 'onMouseOutListener',
                            subscripiton: Observable_2.fromEvent(_this.calloutTriggerHandler, 'mouseout')
                                .subscribe(function () {
                                _this.closeHandler();
                            }),
                            meta: 'calloutTriggerHandler'
                        });
                        break;
                    }
                default:
                    {
                        _this.eventSubscribers.pushSubscriber({
                            name: 'onClickListener',
                            subscripiton: Observable_2.fromEvent(_this.calloutTriggerHandler, 'click')
                                .subscribe(function () {
                                _this.toggleHandler();
                            }),
                            meta: 'calloutTriggerHandler'
                        });
                        break;
                    }
            }
        });
    };
    UifCalloutComponent.prototype.initCallout = function () {
        if (this.nativeCalloutContainer) {
            this.nativeCalloutContainer.style.left = null;
            this.nativeCalloutContainer.style.bottom = null;
            this.nativeCalloutContainer.style.top = null;
            this.nativeCalloutContainer.style.right = null;
            this.nativeCalloutContainer.style.marginRight = null;
            this.nativeCalloutContainer.style.marginLeft = null;
            this.nativeCalloutContainer.style.marginTop = null;
            this.nativeCalloutContainer.style.marginBottom = null;
            this.nativeCalloutContainer.style.opacity = null;
        }
        if (this.nativeBeak) {
            this.nativeBeak.style.opacity = null;
            if (this.showArrow) {
                this.nativeBeak.style.left = null;
                this.nativeBeak.style.bottom = null;
                this.nativeBeak.style.top = null;
                this.nativeBeak.style.right = null;
                this.nativeBeak.style.marginRight = null;
                this.nativeBeak.style.marginLeft = null;
                this.nativeBeak.style.marginTop = null;
                this.nativeBeak.style.marginBottom = null;
            }
        }
        if (this.msCalloutMain) {
            this.msCalloutMain.nativeElement.style.maxWidth = null;
        }
    };
    UifCalloutComponent.prototype.open = function () {
        if (this.onTextEllipsis) {
            var parent = this.nativeEl.parentElement;
            if (parent) {
                var parentProps = parent.getBoundingClientRect();
                var calloutTriggerProps = this.nativeCalloutTrigger.getBoundingClientRect();
                if (parentProps.width >= calloutTriggerProps.width) {
                    return;
                }
            }
        }
        if (!this.isOpen) {
            this.isOpen = true;
            this.isOpenChange.emit(this.isOpen);
        }
    };
    UifCalloutComponent.prototype.openCallout = function () {
        var _this = this;
        if (this.appendToBody) {
            this.childInDOM = this.msCalloutHost.nativeElement;
            document.body.appendChild(this.childInDOM);
        }
        else {
            this.childInDOM = this.msCalloutHost.nativeElement;
            this.msCalloutContainer.nativeElement.appendChild(this.childInDOM);
        }
        this.nativeCalloutContainer.classList.add('is-open');
        setTimeout(function () {
            _this.initCallout();
            if (_this.maxWidth) {
                _this.msCalloutMain.nativeElement.style.maxWidth = _this.maxWidth;
            }
            var calloutProps = _this.nativeCallout.getBoundingClientRect();
            var calloutTriggerProps;
            if (_this.onTextEllipsis) {
                calloutTriggerProps = _this.nativeEl.parentElement.getBoundingClientRect();
            }
            else {
                calloutTriggerProps = _this.nativeCalloutTrigger.getBoundingClientRect();
            }
            var calloutBeakProps = _this.nativeBeak.getBoundingClientRect();
            switch (parseInt(_this.directionalHint.toString(), 10)) {
                case UifCalloutDirectionalHint.TopLeftEdge:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = 30;
                        var appendToBodyAdjustLeft = _this.appendToBody ? calloutTriggerProps.left : 0;
                        var appendToBodyAdjustBottom = _this.appendToBody ? calloutTriggerProps.top - calloutTriggerProps.height : 0;
                        _this.nativeCalloutContainer.style.left = appendToBodyAdjustLeft + 0 + 'px';
                        _this.nativeCalloutContainer.style.bottom =
                            appendToBodyAdjustBottom + (calloutTriggerProps.height + beakAdjust) + 'px';
                        _this.nativeBeak.style.left = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.bottom = '0';
                        _this.nativeBeak.style.marginBottom = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.TopCenter:
                    {
                        var leftAdjust = (calloutProps.width - calloutTriggerProps.width) / 2;
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = (calloutProps.width - calloutBeakProps.width) / 2;
                        var appendToBodyAdjustLeft = _this.appendToBody ?
                            calloutTriggerProps.left - leftAdjust : -leftAdjust;
                        var appendToBodyAdjustBottom = _this.appendToBody ?
                            window.innerHeight - calloutTriggerProps.bottom + calloutTriggerProps.height + beakAdjust
                            : (calloutTriggerProps.height + beakAdjust);
                        _this.nativeCalloutContainer.style.left = appendToBodyAdjustLeft + 'px';
                        _this.nativeCalloutContainer.style.bottom =
                            appendToBodyAdjustBottom + 'px';
                        _this.nativeBeak.style.left = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.bottom = '0';
                        _this.nativeBeak.style.marginBottom = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.TopRightEdge:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = 30;
                        var appendToBodyAdjustRight = _this.appendToBody ? window.innerWidth - calloutTriggerProps.right : 0;
                        var appendToBodyAdjustBottom = _this.appendToBody ? calloutTriggerProps.top - calloutTriggerProps.height : 0;
                        _this.nativeCalloutContainer.style.right = appendToBodyAdjustRight + 0 + 'px';
                        _this.nativeCalloutContainer.style.bottom =
                            appendToBodyAdjustBottom + (calloutTriggerProps.height + beakAdjust) + 'px';
                        _this.nativeBeak.style.right = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.bottom = '0';
                        _this.nativeBeak.style.marginBottom = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.BottomCenter:
                    {
                        var leftAdjust = (calloutProps.width - calloutTriggerProps.width) / 2;
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = (calloutProps.width - calloutBeakProps.width) / 2;
                        var appendToBodyAdjustLeft = _this.appendToBody ? calloutTriggerProps.left : 0;
                        var appendToBodyAdjustTop = _this.appendToBody ? calloutTriggerProps.top : 0;
                        _this.nativeCalloutContainer.style.left = appendToBodyAdjustLeft + (-leftAdjust) + 'px';
                        _this.nativeCalloutContainer.style.top =
                            appendToBodyAdjustTop + (calloutTriggerProps.height + beakAdjust) + 'px';
                        _this.nativeBeak.style.left = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.top = '0';
                        _this.nativeBeak.style.marginTop = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.BottomLeftEdge:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = 30;
                        var appendToBodyAdjustLeft = _this.appendToBody ? calloutTriggerProps.left : 0;
                        var appendToBodyAdjustTop = _this.appendToBody ? calloutTriggerProps.top : 0;
                        _this.nativeCalloutContainer.style.left = appendToBodyAdjustLeft + 0 + 'px';
                        _this.nativeCalloutContainer.style.top =
                            appendToBodyAdjustTop + (calloutTriggerProps.height + beakAdjust) + 'px';
                        _this.nativeBeak.style.left = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.top = '0';
                        _this.nativeBeak.style.marginTop = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.BottomRightEdge:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = 30;
                        var appendToBodyAdjustRight = _this.appendToBody ? window.innerWidth - calloutTriggerProps.right : 0;
                        var appendToBodyAdjustTop = _this.appendToBody ? calloutTriggerProps.top : 0;
                        _this.nativeCalloutContainer.style.right = appendToBodyAdjustRight + 0 + 'px';
                        _this.nativeCalloutContainer.style.top =
                            appendToBodyAdjustTop + (calloutTriggerProps.height + beakAdjust) + 'px';
                        _this.nativeBeak.style.right = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.top = '0';
                        _this.nativeBeak.style.marginTop = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.LeftCenter:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = (calloutProps.height - calloutBeakProps.height) / 2;
                        var appendToBodyAdjustLeft = _this.appendToBody ? calloutTriggerProps.left : 0;
                        var appendToBodyAdjustMarginTop = _this.appendToBody ? -(calloutProps.height / 2) + (calloutTriggerProps.height / 2) + 'px' : '-50%';
                        _this.nativeCalloutContainer.style.left = appendToBodyAdjustLeft + (-(calloutProps.width + beakAdjust)) + 'px';
                        _this.nativeCalloutContainer.style.marginTop = appendToBodyAdjustMarginTop;
                        _this.nativeBeak.style.right = '0';
                        _this.nativeBeak.style.top = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.marginRight = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.LeftTopEdge:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = 12;
                        var appendToBodyAdjustLeft = _this.appendToBody ? calloutTriggerProps.left : 0;
                        var appendToBodyAdjustTop = _this.appendToBody ? calloutTriggerProps.top : 0;
                        _this.nativeCalloutContainer.style.left = appendToBodyAdjustLeft + (-(calloutProps.width + beakAdjust)) + 'px';
                        _this.nativeCalloutContainer.style.top = appendToBodyAdjustTop + 0 + 'px';
                        _this.nativeBeak.style.right = '0';
                        _this.nativeBeak.style.top = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.marginRight = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.LeftBottomEdge:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = 12;
                        var appendToBodyAdjustLeft = _this.appendToBody ? calloutTriggerProps.left : 0;
                        var appendToBodyAdjustTop = _this.appendToBody ? calloutTriggerProps.top - calloutTriggerProps.height : 0;
                        _this.nativeCalloutContainer.style.left = appendToBodyAdjustLeft + (-(calloutProps.width + beakAdjust)) + 'px';
                        _this.nativeCalloutContainer.style.bottom = appendToBodyAdjustTop + 'px';
                        _this.nativeBeak.style.right = '0';
                        _this.nativeBeak.style.bottom = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.marginRight = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.RightCenter:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = (calloutProps.height - calloutBeakProps.height) / 2;
                        var appendToBodyAdjustRight = _this.appendToBody ?
                            window.innerWidth - calloutTriggerProps.right - calloutProps.width - beakAdjust : -(calloutProps.width + beakAdjust);
                        var appendToBodyAdjustMarginTop = _this.appendToBody ? -(calloutProps.height / 2) + (calloutTriggerProps.height / 2) + 'px' : '-50%';
                        _this.nativeCalloutContainer.style.right = appendToBodyAdjustRight + 'px';
                        _this.nativeCalloutContainer.style.marginTop = appendToBodyAdjustMarginTop;
                        _this.nativeBeak.style.left = '0';
                        _this.nativeBeak.style.top = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.marginLeft = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.RightTopEdge:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = 12;
                        var appendToBodyAdjustRight = _this.appendToBody ?
                            window.innerWidth - calloutTriggerProps.right - calloutProps.width - beakAdjust : -(calloutProps.width + beakAdjust);
                        var appendToBodyAdjustTop = _this.appendToBody ? calloutTriggerProps.top : 0;
                        _this.nativeCalloutContainer.style.right = appendToBodyAdjustRight + 'px';
                        _this.nativeCalloutContainer.style.top = appendToBodyAdjustTop + 'px';
                        _this.nativeBeak.style.left = '0';
                        _this.nativeBeak.style.top = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.marginLeft = -beakPositionAdjust + 'px';
                        break;
                    }
                case UifCalloutDirectionalHint.RightBottomEdge:
                    {
                        var beakAdjustForCallout = 14;
                        var beakPositionAdjust = 9;
                        var beakAdjust = _this.showArrow ? _this.gap + beakAdjustForCallout : _this.gap;
                        var beakLeftAdjust = 12;
                        var appendToBodyAdjustRight = _this.appendToBody ?
                            window.innerWidth - calloutTriggerProps.right - calloutProps.width - beakAdjust : -(calloutProps.width + beakAdjust);
                        var appendToBodyAdjustTop = _this.appendToBody ?
                            calloutTriggerProps.top - calloutTriggerProps.height : 0;
                        _this.nativeCalloutContainer.style.right = appendToBodyAdjustRight + 'px';
                        _this.nativeCalloutContainer.style.bottom = appendToBodyAdjustTop + 'px';
                        _this.nativeBeak.style.left = '0';
                        _this.nativeBeak.style.bottom = beakLeftAdjust + 'px';
                        _this.nativeBeak.style.marginLeft = -beakPositionAdjust + 'px';
                        break;
                    }
            }
            _this.nativeCalloutContainer.style.opacity = '1';
            if (_this.showArrow) {
                _this.nativeBeak.style.opacity = '1';
            }
        });
        if (this.appendToBody) {
            this.scrollElm = GetScrollParent(this.elementRef.nativeElement);
            if (this.scrollElm) {
                this.eventSubscribers.pushSubscriber({
                    name: 'onScrollListener',
                    subscripiton: Observable_2.fromEvent(document, 'scroll')
                        .debounceTime(100)
                        .subscribe(function ($event) {
                        _this.onScrollAndResize();
                    }),
                    meta: 'scrollElm'
                });
                this.eventSubscribers.pushSubscriber({
                    name: 'onResizeListener',
                    subscripiton: Observable_2.fromEvent(document, 'resize')
                        .debounceTime(100)
                        .subscribe(function ($event) {
                        _this.onScrollAndResize();
                    }),
                    meta: 'scrollElm'
                });
            }
            this.eventSubscribers.pushSubscriber({
                name: 'onScrollListener',
                subscripiton: Observable_2.fromEvent(document, 'scroll')
                    .debounceTime(100)
                    .subscribe(function ($event) {
                    _this.onScrollAndResize();
                }),
                meta: 'document'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onResizeListener',
                subscripiton: Observable_2.fromEvent(window, 'resize')
                    .debounceTime(100)
                    .subscribe(function ($event) {
                    _this.onScrollAndResize();
                }),
                meta: 'window'
            });
        }
    };
    UifCalloutComponent.prototype.close = function () {
        if (this.isOpen) {
            this.isOpen = false;
            this.isOpenChange.emit(this.isOpen);
        }
    };
    UifCalloutComponent.prototype.closeCallout = function () {
        this.initCallout();
        if (this.nativeCalloutContainer) {
            this.nativeCalloutContainer.classList.remove('is-open');
        }
        if (this.appendToBody) {
            var scrollAndResizeHandler = this.listeners['onScrollAndResize'];
            document.removeEventListener('scroll', scrollAndResizeHandler);
            window.removeEventListener('resize', scrollAndResizeHandler);
            if (this.childInDOM) {
                document.body.removeChild(this.childInDOM);
                this.childInDOM = null;
            }
        }
    };
    UifCalloutComponent.prototype.toggleCallout = function () {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_a = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _a || Object)
    ], UifCalloutComponent.prototype, "isOpenChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "isTooltip", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "appendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "showHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "showActions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "headerClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "contentClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "calloutClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "position", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "gap", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "showArrow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "showClose", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_b = typeof UifCalloutDirectionalHint !== "undefined" && UifCalloutDirectionalHint) === "function" && _b || Object)
    ], UifCalloutComponent.prototype, "directionalHint", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_c = typeof UifCalloutTriggerHint !== "undefined" && UifCalloutTriggerHint) === "function" && _c || Object)
    ], UifCalloutComponent.prototype, "triggerHint", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "onTextEllipsis", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "maxWidth", void 0);
    __decorate([
        ViewChild('msCalloutMain'),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "msCalloutMain", void 0);
    __decorate([
        ViewChild('msCalloutHost'),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "msCalloutHost", void 0);
    __decorate([
        ViewChild('msCalloutContainer'),
        __metadata("design:type", Object)
    ], UifCalloutComponent.prototype, "msCalloutContainer", void 0);
    __decorate([
        ContentChild(UifOpenCalloutComponent),
        __metadata("design:type", typeof (_d = typeof UifOpenCalloutComponent !== "undefined" && UifOpenCalloutComponent) === "function" && _d || Object)
    ], UifCalloutComponent.prototype, "msOpenCalloutTrigger", void 0);
    UifCalloutComponent = __decorate([
        Component({
            selector: 'uif-callout',
            template: "<span class=\"ms-callout-container\" #msCalloutContainer>\n    <div class=\"ms-ContextualHost is-positioned\" [class.is-open]=\"isOpen\" [class.is-append-to-body]=\"appendToBody\" #msCalloutHost>\n        <div class=\"ms-ContextualHost-main\" #msCalloutMain>\n            <button class=\"ms-Callout-close\" [hidden]=\"!showClose\" (click)=\"close()\">\n                <i class=\"ms-Icon ms-Icon--Clear\"></i>\n            </button>\n            <div class=\"ms-Callout\" [ngClass]=\"calloutClasses\" [class.is-tooltip]=\"isTooltip\">\n                <div class=\"ms-Callout-main\">\n                    <div class=\"ms-Callout-header\" *ngIf=\"showHeader\" [ngClass]=\"headerClasses\">\n                        <p class=\"ms-Callout-title\">\n                            <ng-content select=\"uif-callout-header\"></ng-content>\n                        </p>\n                    </div>\n                    <div class=\"ms-Callout-inner\" [ngClass]=\"contentClasses\">\n                        <div class=\"ms-Callout-content\">\n                            <p class=\"ms-Callout-subText\">\n                                <ng-content select=\"uif-callout-content\"></ng-content>\n                            </p>\n                        </div>\n                        <div class=\"ms-Callout-actions\" *ngIf=\"showActions\">\n                            <ng-content select=\"uif-callout-actions\"></ng-content>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"ms-Beak\" [hidden]=\"!showArrow\"></div>\n    </div>\n</span>\n<span class=\"ms-Callout-button\" data-tag=\"call-out-trigger\" [attr.tabIndex]=\"tabIndex\">\n    <ng-content select=\"uif-open-callout, [uifOpenCallout]\"></ng-content>\n</span>",
            styles: [
                ".ms-Callout-button {\n  outline: none; }\n\n.ms-callout-container {\n  position: relative; }\n\n.ms-ContextualHost {\n  opacity: 0;\n  text-align: left;\n  transition: opacity 0.367s ease-in 0s; }\n  .ms-ContextualHost.is-open {\n    display: inline-block !important; }\n  .ms-ContextualHost.is-append-to-body {\n    position: fixed; }\n  .ms-ContextualHost .ms-ContextualHost-main {\n    display: block; }\n  .ms-ContextualHost .ms-ContextualHost-beak {\n    margin-top: 12px; }\n  .ms-ContextualHost .ms-Beak {\n    opacity: 0;\n    box-shadow: 0 0 13px -5px #3c3c3c;\n    position: absolute;\n    width: 28px;\n    height: 28px;\n    background: #fff;\n    border: 1px solid #eaeaea;\n    box-sizing: border-box;\n    transform: rotate(45deg);\n    z-index: 0;\n    outline: 1px solid transparent; }\n\n.disableClicks {\n  pointer-events: none; }\n\n.ms-Callout .ms-Callout-header {\n  padding: 36px 28px 12px; }\n\n.ms-Callout .ms-Callout-subText {\n  font-weight: 400; }\n\n.ms-Callout.is-tooltip {\n  width: auto;\n  max-width: calc(100vw - 60px); }\n  .ms-Callout.is-tooltip .ms-Callout-main .ms-Callout-inner {\n    padding: 12px; }\n"
            ]
        }),
        __metadata("design:paramtypes", [typeof (_e = typeof ElementRef !== "undefined" && ElementRef) === "function" && _e || Object])
    ], UifCalloutComponent);
    return UifCalloutComponent;
    var _a, _b, _c, _d, _e;
}());

var __extends$4 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends$4(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
var ObjectUnsubscribedError_2 = ObjectUnsubscribedError;


var ObjectUnsubscribedError_1 = {
	ObjectUnsubscribedError: ObjectUnsubscribedError_2
};

var __extends$5 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends$5(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
var SubjectSubscription_2 = SubjectSubscription;


var SubjectSubscription_1 = {
	SubjectSubscription: SubjectSubscription_2
};

var __extends$6 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends$6(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends$6(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
var Subject_2 = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends$6(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

var UifContextMenuService = /** @class */ (function () {
    function UifContextMenuService() {
        this.multiSelected = new Subject_2();
        this.onMultiSelectionCheck = this.multiSelected.asObservable();
    }
    UifContextMenuService.prototype.checkForMultiSelection = function (currentId) {
        this.multiSelected.next(currentId);
    };
    UifContextMenuService = __decorate([
        Injectable()
    ], UifContextMenuService);
    return UifContextMenuService;
}());
var UifContextualMenuTriggerDirective = /** @class */ (function () {
    function UifContextualMenuTriggerDirective(elRef) {
        this.elRef = elRef;
    }
    UifContextualMenuTriggerDirective = __decorate([
        Directive({
            selector: '[menuTrigger]',
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object])
    ], UifContextualMenuTriggerDirective);
    return UifContextualMenuTriggerDirective;
    var _a;
}());
var UifContextualMenuItemComponent = /** @class */ (function () {
    function UifContextualMenuItemComponent(contextMenuService) {
        this.contextMenuService = contextMenuService;
        this.tabIndex = 0;
        this.selected = false;
        this.disabled = false;
        this.hasSubMenu = false;
        this.subMenuOpen = false;
        this.id = Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
    }
    UifContextualMenuItemComponent.prototype.onSelectionChange = function () {
        if (!this.disabled) {
            if (!this.hasSubMenu) {
                this.selected = !this.selected;
                this.contextMenuService.checkForMultiSelection(this.id);
            }
            else {
                this.subMenuOpen = !this.subMenuOpen;
                this.subMenu.isOpen = !this.subMenu.isOpen;
            }
        }
    };
    UifContextualMenuItemComponent.prototype.ngOnChanges = function () {
        if (this.disabled) {
            this.tabIndex = -1;
        }
    };
    UifContextualMenuItemComponent.prototype.ngAfterContentInit = function () {
        if (this.subMenu) {
            this.hasSubMenu = true;
            this.subMenu.isOpen = false;
            this.subMenu.isSubMenu = true;
        }
    };
    UifContextualMenuItemComponent.prototype.closeSubMenu = function () {
        if (this.hasSubMenu) {
            this.subMenu.isOpen = false;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifContextualMenuItemComponent.prototype, "tabIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifContextualMenuItemComponent.prototype, "selected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifContextualMenuItemComponent.prototype, "disabled", void 0);
    __decorate([
        ContentChild(forwardRef(function () { return UifContextualMenuComponent; })),
        __metadata("design:type", typeof (_a = typeof UifContextualMenuComponent !== "undefined" && UifContextualMenuComponent) === "function" && _a || Object)
    ], UifContextualMenuItemComponent.prototype, "subMenu", void 0);
    UifContextualMenuItemComponent = __decorate([
        Component({
            selector: '[menuItem], menu-item',
            template: "\n\t<li class=\"ms-ContextualMenu-item\" (click)=\"onSelectionChange()\" [class.ms-ContextualMenu-item--hasMenu]=\"hasSubMenu\">\n\t\t<a class=\"ms-ContextualMenu-link\" [attr.tabIndex]=\"tabIndex\" [class.is-selected]=\"selected\" [class.is-disabled]=\"disabled\">\n\t\t\t<ng-content></ng-content>\n\t\t</a>\n\t\t<i class=\"ms-ContextualMenu-subMenuIcon ms-Icon ms-Icon--ChevronRight\" [hidden]=\"!hasSubMenu\"></i>\n\t\t<ng-content select=\"uif-contextualmenu\"></ng-content>\n\t</li>\n\t"
        }),
        __metadata("design:paramtypes", [UifContextMenuService])
    ], UifContextualMenuItemComponent);
    return UifContextualMenuItemComponent;
    var _a;
}());
var UifContextualMenuItemDividerComponent = /** @class */ (function () {
    function UifContextualMenuItemDividerComponent() {
    }
    UifContextualMenuItemDividerComponent = __decorate([
        Component({
            selector: '[menuItemDivider], menu-item-divider',
            template: "\n\t<li class=\"ms-ContextualMenu-item ms-ContextualMenu-item--divider\"></li>\n\t"
        })
    ], UifContextualMenuItemDividerComponent);
    return UifContextualMenuItemDividerComponent;
}());
var UifContextualMenuItemHeaderComponent = /** @class */ (function () {
    function UifContextualMenuItemHeaderComponent() {
    }
    UifContextualMenuItemHeaderComponent = __decorate([
        Component({
            selector: '[menuItemHeader], menu-item-header',
            template: "\n\t<li class=\"ms-ContextualMenu-item ms-ContextualMenu-item--header\"><ng-content></ng-content></li>\n\t"
        })
    ], UifContextualMenuItemHeaderComponent);
    return UifContextualMenuItemHeaderComponent;
}());

var UifContextualMenuComponent = /** @class */ (function () {
    function UifContextualMenuComponent(elementRef, contextMenuService) {
        this.elementRef = elementRef;
        this.contextMenuService = contextMenuService;
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isMultiSelect = false;
        this.directionHint = UifContextualMenuDirectionHint.Bottom;
        this.UifContextualMenuDirectionHints = UifContextualMenuDirectionHint;
        this.isSubMenu = false;
        this.onDocumnetKeyUpListener = null;
    }
    UifContextualMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextMenuService.onMultiSelectionCheck.subscribe(function (currentId) {
            if (!_this.isMultiSelect) {
                _this.menuItems.toArray().forEach(function (component) {
                    if (component.id !== currentId) {
                        component.selected = false;
                    }
                });
                _this.isOpen = false;
                _this.isOpenChange.emit(_this.isOpen);
            }
        });
    };
    UifContextualMenuComponent.prototype.ngAfterContentInit = function () {
        var elRef = this.elementRef.nativeElement;
        if (elRef) {
            this.nativeMenuTrigger = elRef.querySelector('[menuTrigger]');
            this.nativeMenu = elRef.querySelector('ul.ms-ContextualMenu');
        }
    };
    UifContextualMenuComponent.prototype.ngOnDestroy = function () {
        if (this.onDocumnetKeyUpListener) {
            this.onDocumnetKeyUpListener.unsubscribe();
            this.onDocumnetKeyUpListener = null;
        }
    };
    UifContextualMenuComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        setTimeout(function () {
            if (_this.nativeMenuTrigger) {
                var props = _this.nativeMenuTrigger.getBoundingClientRect();
                if (_this.nativeMenu && _this.directionHint === UifContextualMenuDirectionHint.Top) {
                    _this.nativeMenu.style.bottom = props.height + 'px';
                }
            }
        });
        for (var prop in changes) {
            if (changes[prop]) {
                var change = changes[prop];
                if (prop === 'isOpen') {
                    if (change.currentValue) {
                        this.addDocumentListener();
                    }
                    else {
                        this.clearDocumentListener();
                    }
                }
            }
        }
    };
    UifContextualMenuComponent.prototype.clearDocumentListener = function () {
        if (this.onDocumnetKeyUpListener) {
            this.onDocumnetKeyUpListener.unsubscribe();
            this.onDocumnetKeyUpListener = null;
        }
    };
    UifContextualMenuComponent.prototype.addDocumentListener = function () {
        var _this = this;
        this.clearDocumentListener();
        this.onDocumnetKeyUpListener = Observable_2.fromEvent(document, 'keyup')
            .subscribe(function ($event) {
            if ($event.key === 'Escape') {
                _this.isOpen = false;
                _this.isOpenChange.emit(_this.isOpen);
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifContextualMenuComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_a = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _a || Object)
    ], UifContextualMenuComponent.prototype, "isOpenChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifContextualMenuComponent.prototype, "isMultiSelect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_b = typeof UifContextualMenuDirectionHint !== "undefined" && UifContextualMenuDirectionHint) === "function" && _b || Object)
    ], UifContextualMenuComponent.prototype, "directionHint", void 0);
    __decorate([
        ContentChildren(UifContextualMenuItemComponent),
        __metadata("design:type", typeof (_c = typeof QueryList !== "undefined" && QueryList) === "function" && _c || Object)
    ], UifContextualMenuComponent.prototype, "menuItems", void 0);
    UifContextualMenuComponent = __decorate([
        Component({
            selector: 'uif-contextualmenu',
            template: "<div class=\"ms-contextual-menu-container\">\n    <div class=\"ms-contextual-menu-holder\">\n        <ng-content select=\"[menuTrigger]\"></ng-content>\n        <ng-content select=\"[contextualMenu]\"></ng-content>\n        <ul class=\"ms-ContextualMenu\" [class.top]=\"directionHint === UifContextualMenuDirectionHints.Top\" [class.is-open]=\"isOpen\"\n            [class.is-hidden]=\"!isOpen\" [class.ms-ContextualMenu--multiselect]=\"isMultiSelect\" [class.is-sub-menu]=\"isSubMenu\">\n            <ng-content></ng-content>\n        </ul>\n    </div>\n</div>",
            styles: [
                ".ms-contextual-menu-container {\n  display: inline-block; }\n  .ms-contextual-menu-container /deep/ [menuTrigger] {\n    display: inline-block; }\n  .ms-contextual-menu-container .ms-ContextualMenu {\n    position: absolute;\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);\n    z-index: 1; }\n    .ms-contextual-menu-container .ms-ContextualMenu:not(.top).is-open {\n      animation: fadein-item-down;\n      animation-duration: 0.367s; }\n    .ms-contextual-menu-container .ms-ContextualMenu.top {\n      bottom: 0; }\n      .ms-contextual-menu-container .ms-ContextualMenu.top.is-open {\n        animation: fadein-item-up;\n        animation-duration: 0.367s; }\n      .ms-contextual-menu-container .ms-ContextualMenu.top.is-sub-menu {\n        margin-bottom: -50%; }\n    .ms-contextual-menu-container .ms-ContextualMenu:not(.top).is-sub-menu {\n      margin-top: -50%; }\n  .ms-contextual-menu-container .ms-contextual-menu-holder {\n    position: relative; }\n  .ms-contextual-menu-container /deep/ .ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu /deep/ .ms-contextual-menu-container {\n    display: inline; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ],
            providers: [
                UifContextMenuService
            ]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof ElementRef !== "undefined" && ElementRef) === "function" && _d || Object, typeof (_e = typeof UifContextMenuService !== "undefined" && UifContextMenuService) === "function" && _e || Object])
    ], UifContextualMenuComponent);
    return UifContextualMenuComponent;
    var _a, _b, _c, _d, _e;
}());

function GetDatesInMonth(dt, selectedDt, firstDayOfWeek, minDate, maxDate) {
    if (firstDayOfWeek === void 0) { firstDayOfWeek = WeekDay.Sunday; }
    if (minDate === void 0) { minDate = new Date(-8640000000000000); }
    if (maxDate === void 0) { maxDate = new Date(8640000000000000); }
    var weeks = [];
    var firstDayOfWeekIndex = Number(firstDayOfWeek);
    var originalDt = new Date(dt);
    var currDt = new Date(dt);
    currDt.setDate(1);
    var currentDate = {
        dt: currDt.getDate(),
        month: currDt.getMonth(),
        year: currDt.getFullYear(),
        index: currDt.getDay()
    };
    var today = new Date();
    var datesToAdjust = currentDate.index >= firstDayOfWeekIndex ?
        firstDayOfWeekIndex - currentDate.index : -7 + (firstDayOfWeekIndex - currentDate.index);
    var startDate = new Date(currentDate.year, currentDate.month, currentDate.dt + datesToAdjust);
    var len = 0;
    for (var wi = 0; wi < 6; wi++) {
        var week = [];
        for (var di = 0; di < 7; di++) {
            var newDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + len);
            len++;
            var dayModel = new DateModel();
            dayModel.date = newDate;
            dayModel.dateNum = newDate.getDate();
            dayModel.monthNum = newDate.getMonth();
            dayModel.yearNum = newDate.getFullYear();
            dayModel.isInFocus = newDate.getMonth() === originalDt.getMonth() ? newDate.getFullYear() === originalDt.getFullYear() : false;
            dayModel.isToday = newDate.getDate() === today.getDate()
                && newDate.getMonth() === today.getMonth()
                && newDate.getFullYear() === today.getFullYear();
            dayModel.isHighlighted = newDate.getDate() === selectedDt.getDate()
                && newDate.getMonth() === selectedDt.getMonth()
                && newDate.getFullYear() === selectedDt.getFullYear();
            dayModel.disabled = dayModel.date < minDate || dayModel.date > maxDate;
            week.push(dayModel);
        }
        weeks.push(week);
    }
    return weeks;
}
function GetWeeksDayMap(fistDayOfWeek) {
    if (fistDayOfWeek === void 0) { fistDayOfWeek = WeekDay.Monday; }
    var weekDayMap = [];
    while (+fistDayOfWeek < 7) {
        weekDayMap.push(WeekDay[fistDayOfWeek++]);
    }
    weekDayMap = weekDayMap.concat(new Array(7 - weekDayMap.length).fill(0).map(function (val, iter) { return WeekDay[iter]; }));
    var weekData = weekDayMap.map(function (day) {
        var data = new WeekDayData();
        data.weekDay = day;
        data.fullName = String(day);
        data.index = Number(WeekDay[day]);
        data.char = String(day).charAt(0);
        return data;
    });
    return weekData;
}
function GetCurrentDayData(dt) {
    var dm = new DateModel();
    dm.date = dt;
    dm.dateNum = dt.getDate();
    dm.monthNum = dt.getMonth();
    dm.yearNum = dt.getFullYear();
    dm.monthName = String(Month[dm.monthNum]);
    return dm;
}

var UifDatepickerComponent = /** @class */ (function () {
    function UifDatepickerComponent() {
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.dateChange = new EventEmitter();
        this.firstDayOfWeek = WeekDay.Monday;
        this.minDate = new Date(-8640000000000000);
        this.maxDate = new Date(8640000000000000);
        this.weekDayMap = [];
        this.weekDays = [];
        this.weekCollection = [];
        this.currentDayData = null;
        this.currentDtContextData = null;
        this.searchContext = {
            dt: new Date(),
            year: 1901,
            month: 0,
            decadeStart: 1901,
            decadeEnd: 1910,
            months: [],
            years: []
        };
        this.isPickingYears = false;
        this.onDocumentKeyUpListener = null;
    }
    UifDatepickerComponent.prototype.ngOnChanges = function (changes) {
        this.currentDtContext = new Date(this.date);
        this.processForDt();
        this.processSearchContext(this.currentDtContext);
        for (var prop in changes) {
            if (changes[prop]) {
                var change = changes[prop];
                if (prop === 'isOpen') {
                    if (change.currentValue) {
                        this.addDocumentListener();
                    }
                    else {
                        this.clearDocumentListener();
                    }
                }
            }
        }
    };
    UifDatepickerComponent.prototype.clearDocumentListener = function () {
        if (this.onDocumentKeyUpListener) {
            this.onDocumentKeyUpListener.unsubscribe();
            this.onDocumentKeyUpListener = null;
        }
    };
    UifDatepickerComponent.prototype.addDocumentListener = function () {
        var _this = this;
        this.clearDocumentListener();
        this.onDocumentKeyUpListener = Observable_2.fromEvent(document, 'keyup')
            .subscribe(function ($event) {
            if ($event.key === 'Escape') {
                _this.isOpen = false;
                _this.isOpenChange.emit(_this.isOpen);
            }
        });
    };
    UifDatepickerComponent.prototype.processForDt = function () {
        this.currentDayData = GetCurrentDayData(this.currentDtContext);
        this.currentDtContextData = GetCurrentDayData(this.currentDtContext);
        this.weekDays = GetWeeksDayMap(this.firstDayOfWeek);
        this.weekCollection = GetDatesInMonth(this.currentDtContext, new Date(this.date), this.firstDayOfWeek, this.minDate, this.maxDate);
    };
    UifDatepickerComponent.prototype.processSearchContext = function (dt) {
        this.searchContext = {
            dt: dt,
            year: dt.getFullYear(),
            month: dt.getMonth(),
            decadeStart: (Math.floor(dt.getFullYear() / 10) * 10),
            decadeEnd: (Math.floor(dt.getFullYear() / 10) * 10) + 11,
            months: [].concat(new Array(12).fill('').map(function (val, index) {
                return MonthShortname[Month[index]];
            })),
            years: []
        };
        for (var i = 0; i < 12; i++) {
            this.searchContext.years.push(this.searchContext.decadeStart + i);
        }
    };
    UifDatepickerComponent.prototype.loadMonthByIncrement = function (increment) {
        var dt = this.searchContext.dt;
        dt.setMonth(dt.getMonth() + increment);
        this.processSearchContext(dt);
        this.currentDtContext = dt;
        this.processForDt();
    };
    UifDatepickerComponent.prototype.loadDecadeInSearch = function (increment) {
        var dt = this.searchContext.dt;
        dt.setFullYear(dt.getFullYear() + (10 * increment));
        this.processSearchContext(dt);
        this.currentDtContext = dt;
        this.processForDt();
    };
    UifDatepickerComponent.prototype.loadYearInSearch = function (increment) {
        var dt = this.searchContext.dt;
        dt.setMonth(dt.getMonth() + increment);
        this.processSearchContext(dt);
        this.currentDtContext = dt;
        this.processForDt();
    };
    UifDatepickerComponent.prototype.goToToday = function () {
        this.currentDtContext = new Date();
        var dt = this.currentDtContext;
        this.processSearchContext(dt);
        this.currentDtContext = dt;
        this.processForDt();
    };
    UifDatepickerComponent.prototype.switchOnYearPicking = function () {
        this.isPickingYears = true;
    };
    UifDatepickerComponent.prototype.switchOnMonthPicking = function () {
        this.isPickingYears = false;
    };
    UifDatepickerComponent.prototype.loadYear = function (year) {
        var dt = this.searchContext.dt;
        dt.setFullYear(year);
        this.processSearchContext(dt);
        this.switchOnMonthPicking();
        this.currentDtContext = dt;
        this.processForDt();
    };
    UifDatepickerComponent.prototype.loadMonth = function (index) {
        var dt = this.searchContext.dt;
        dt.setMonth(index);
        this.processSearchContext(dt);
        this.currentDtContext = dt;
        this.processForDt();
    };
    UifDatepickerComponent.prototype.selectDate = function (dt, disabled) {
        if (!disabled) {
            this.date = dt;
            this.dateChange.emit(this.date);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDatepickerComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifDatepickerComponent.prototype, "isOpenChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDatepickerComponent.prototype, "date", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_a = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _a || Object)
    ], UifDatepickerComponent.prototype, "dateChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_b = (typeof Models !== "undefined" && Models).WeekDay) === "function" && _b || Object)
    ], UifDatepickerComponent.prototype, "firstDayOfWeek", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDatepickerComponent.prototype, "minDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDatepickerComponent.prototype, "maxDate", void 0);
    UifDatepickerComponent = __decorate([
        Component({
            selector: 'uif-datepicker',
            template: "<div class=\"ms-DatePicker\" [class.is-pickingYears]=\"isPickingYears\">\n    <ng-content select=\"uif-open-datepicker, [uifOpenDatepicker]\"></ng-content>\n    <div class=\"ms-DatePicker-picker ms-DatePicker-picker--focused\"  aria-hidden=\"false\" [class.ms-DatePicker-picker--opened]=\"isOpen\">\n        <div class=\"ms-DatePicker-holder\" *ngIf=\"isOpen\" [class.is-opened]=\"isOpen\">\n            <div class=\"ms-DatePicker-frame\">\n                <div class=\"ms-DatePicker-wrap\">\n                    <div class=\"ms-DatePicker-dayPicker\">\n                        <div class=\"ms-DatePicker-header\">\n                            <div class=\"ms-DatePicker-month\">{{currentDayData.monthName}}</div>\n                            <div class=\"ms-DatePicker-year\">{{currentDayData.yearNum}}</div>\n                            <div class=\"picker__nav--prev\" role=\"button\" title=\"Previous month\"> </div>\n                            <div class=\"picker__nav--next\" role=\"button\" title=\"Next month\"> </div>\n                        </div>\n                        <table class=\"ms-DatePicker-table\" role=\"grid\" aria-components=\"P242246400\" aria-readonly=\"true\">\n                            <thead>\n                                <tr>\n                                    <th class=\"ms-DatePicker-weekday\" *ngFor=\"let day of weekDays\" scope=\"col\" [attr.title]=\"day.fullName\">{{day.char}}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let week of weekCollection\">\n                                    <td role=\"presentation\" *ngFor=\"let day of week\">\n                                        <div class=\"ms-DatePicker-day\"\n                                        [class.ms-DatePicker-day--infocus]=\"day.isInFocus\"\n                                        [class.ms-DatePicker-day--outfocus]=\"!day.isInFocus\"\n                                        [class.ms-DatePicker-day--disabled]=\"day.disabled\"\n                                        [class.ms-DatePicker-day--isToday]=\"day.isToday\"\n                                        [class.ms-DatePicker-day--highlighted]=\"day.isHighlighted\" role=\"gridcell\" (click)=\"selectDate(day.date, day.disabled)\">{{day.dateNum}}</div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"ms-DatePicker-monthComponents\">\n                        <span class=\"ms-DatePicker-nextMonth\" (click)=\"loadMonthByIncrement(1)\">\n                            <i class=\"ms-Icon ms-Icon--ChevronRight\"></i>\n                        </span>\n                        <span class=\"ms-DatePicker-prevMonth\" (click)=\"loadMonthByIncrement(-1)\">\n                            <i class=\"ms-Icon ms-Icon--ChevronLeft\"></i>\n                        </span>\n                        <div class=\"ms-DatePicker-headerToggleView\" (click)=\"switchOnMonthPicking()\"></div>\n                    </div>\n                    <span class=\"ms-DatePicker-goToday\" (click)=\"goToToday()\">Go to today</span>\n                    <div class=\"ms-DatePicker-monthPicker\">\n                        <div class=\"ms-DatePicker-header\">\n                            <div class=\"ms-DatePicker-yearComponents\">\n                                <span class=\"ms-DatePicker-nextYear \" (click)=\"loadYearInSearch(1)\">\n                                    <i class=\"ms-Icon ms-Icon--ChevronRight\"></i>\n                                </span>\n                                <span class=\"ms-DatePicker-prevYear \" (click)=\"loadYearInSearch(-1)\">\n                                    <i class=\"ms-Icon ms-Icon--ChevronLeft\"></i>\n                                </span>\n                            </div>\n                            <div class=\"ms-DatePicker-currentYear\" (click)=\"switchOnYearPicking()\">{{searchContext.year}}</div>\n                        </div>\n                        <div class=\"ms-DatePicker-optionGrid\">\n                            <span class=\"ms-DatePicker-monthOption\" [class.is-highlighted]=\"i === searchContext.month\" *ngFor=\"let month of searchContext.months; let i = index;\" (click)=\"loadMonth(i)\">{{month}}</span>\n                        </div>\n                    </div>\n                    <div class=\"ms-DatePicker-yearPicker\">\n                        <div class=\"ms-DatePicker-decadeComponents\">\n                            <span class=\"ms-DatePicker-nextDecade \" (click)=\"loadDecadeInSearch(1)\">\n                                <i class=\"ms-Icon ms-Icon--ChevronRight\"></i>\n                            </span>\n                            <span class=\"ms-DatePicker-prevDecade \" (click)=\"loadDecadeInSearch(-1)\">\n                                <i class=\"ms-Icon ms-Icon--ChevronLeft\"></i>\n                            </span>\n                        </div>\n                        <div class=\"ms-DatePicker-currentDecade\">{{searchContext.decadeStart}} - {{searchContext.decadeEnd}}</div>\n                        <div class=\"ms-DatePicker-optionGrid\">\n                            <span class=\"ms-DatePicker-yearOption\" [class.is-highlighted]=\"year === searchContext.year\" *ngFor=\"let year of searchContext.years; let i = index;\" (click)=\"loadYear(year)\">{{year}}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
            styles: [
                ".ms-DatePicker-day--disabled {\n  color: #a6a6a6;\n  pointer-events: none; }\n\n.ms-DatePicker-day--isToday {\n  border: 1px solid #0078d7; }\n\n.ms-DatePicker-picker.ms-DatePicker-picker--opened .ms-DatePicker-holder.is-opened {\n  animation: fadein-item-down;\n  animation-duration: 0.367s; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ]
        })
    ], UifDatepickerComponent);
    return UifDatepickerComponent;
    var _a, _b;
}());

var UifOpenDatepickerComponent = /** @class */ (function () {
    function UifOpenDatepickerComponent() {
    }
    UifOpenDatepickerComponent = __decorate([
        Component({
            selector: 'uif-open-datepicker',
            styles: [
                ':host {display: inline-block; }'
            ],
            template: '<ng-content></ng-content>'
        })
    ], UifOpenDatepickerComponent);
    return UifOpenDatepickerComponent;
}());

var UifDialogHeaderComponent = /** @class */ (function () {
    function UifDialogHeaderComponent() {
    }
    UifDialogHeaderComponent = __decorate([
        Component({
            selector: 'uif-dialog-header, [uifDialogHeader]',
            styles: [
                ':host {display: inline-block; }'
            ],
            template: '<ng-content></ng-content>'
        })
    ], UifDialogHeaderComponent);
    return UifDialogHeaderComponent;
}());
var UifDialogContentComponent = /** @class */ (function () {
    function UifDialogContentComponent() {
    }
    UifDialogContentComponent = __decorate([
        Component({
            selector: 'uif-dialog-content, [uifDialogContent]',
            styles: [
                ':host {display: inline-block; }'
            ],
            template: '<ng-content></ng-content>'
        })
    ], UifDialogContentComponent);
    return UifDialogContentComponent;
}());
var UifDialogFooterComponent = /** @class */ (function () {
    function UifDialogFooterComponent() {
    }
    UifDialogFooterComponent = __decorate([
        Component({
            selector: 'uif-dialog-footer, [uifDialogFooter]',
            styles: [
                ':host {display: inline-block; }'
            ],
            template: '<ng-content></ng-content>'
        })
    ], UifDialogFooterComponent);
    return UifDialogFooterComponent;
}());

var UifDialogComponent = /** @class */ (function () {
    function UifDialogComponent() {
        this.isModal = false;
        this.modalSize = UifModalSize.Default;
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isBlocking = false;
        this.isLargeHeader = false;
        this.isCloseable = false;
        this.originalOveflowStyle = null;
        this.originalOveflowStyleAvailable = false;
    }
    UifDialogComponent.prototype.ngOnChanges = function () {
        if (this.isOpen) {
            if (this.isBlocking) {
                this.originalOveflowStyle = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
                this.originalOveflowStyleAvailable = true;
            }
        }
        else {
            if (this.isBlocking) {
                if (this.originalOveflowStyleAvailable) {
                    document.body.style.overflow = this.originalOveflowStyle;
                    this.originalOveflowStyleAvailable = false;
                }
            }
        }
    };
    UifDialogComponent.prototype.closeDialog = function () {
        this.isOpen = false;
        this.isOpenChange.emit(this.isOpen);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDialogComponent.prototype, "isModal", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof UifModalSize !== "undefined" && UifModalSize) === "function" && _a || Object)
    ], UifDialogComponent.prototype, "modalSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDialogComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_b = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _b || Object)
    ], UifDialogComponent.prototype, "isOpenChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDialogComponent.prototype, "isBlocking", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDialogComponent.prototype, "isLargeHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDialogComponent.prototype, "isCloseable", void 0);
    __decorate([
        ContentChild(UifDialogHeaderComponent),
        __metadata("design:type", Object)
    ], UifDialogComponent.prototype, "uifDialogHeader", void 0);
    __decorate([
        ContentChild(UifDialogContentComponent),
        __metadata("design:type", Object)
    ], UifDialogComponent.prototype, "uifDialogContent", void 0);
    __decorate([
        ContentChild(UifDialogFooterComponent),
        __metadata("design:type", Object)
    ], UifDialogComponent.prototype, "uifDialogFooter", void 0);
    UifDialogComponent = __decorate([
        Component({
            selector: 'uif-dialog',
            template: "<div class=\"ms-Dialog-Container\" [hidden]=\"!isOpen\">\n    <div class=\"ms-Dialog-overlay\" [class.is-blocking]=\"isBlocking\">\n        <div class=\"ms-Dialog\" [ngClass]=\"modalSize\" [class.ms-Modal-custom]=\"isModal\" [class.is-open]=\"isOpen\" [class.ms-Dialog--lgHeader]=\"isLargeHeader\"\n            [class.ms-Dialog--close]=\"isCloseable\">\n            <div class=\"ms-Dialog-innerContent\" [class.is-open]=\"isOpen\">\n                <button class=\"ms-Dialog-button ms-Dialog-buttonClose\" (click)=\"closeDialog()\" [hidden]=\"!isCloseable\">\n                    <i class=\"ms-Icon ms-Icon--Cancel\"></i>\n                </button>\n                <div class=\"ms-Dialog-title\" [class.ms-Modal-title-custom]=\"isModal\" [hidden]=\"!uifDialogHeader\">\n                    <ng-content select=\"uif-dialog-header, [uifDialogHeader]\"></ng-content>\n                </div>\n                <div class=\"ms-Dialog-content\" [class.ms-Modal-content-custom]=\"isModal\" [hidden]=\"!uifDialogContent\">\n                    <ng-content select=\"uif-dialog-content, [uifDialogContent]\"></ng-content>\n                </div>\n                <div class=\"ms-Dialog-actions\" [class.ms-Modal-actions-custom]=\"isModal\" [hidden]=\"!uifDialogFooter\">\n                    <ng-content select=\"uif-dialog-footer, [uifDialogFooter]\"></ng-content>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
            styles: [
                ".ms-Dialog-Container .ms-Dialog-overlay.is-blocking {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 999; }\n\n.ms-Dialog-Container .ms-Dialog {\n  padding: 0;\n  background: none;\n  box-shadow: none; }\n  .ms-Dialog-Container .ms-Dialog .ms-Dialog-innerContent {\n    padding: 28px 24px;\n    background: #fff;\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); }\n    .ms-Dialog-Container .ms-Dialog .ms-Dialog-innerContent.is-open {\n      animation: fadein-item-in;\n      animation-duration: 0.367s; }\n  .ms-Dialog-Container .ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-buttonClose .ms-Icon.ms-Icon--Cancel {\n    color: #fff; }\n  .ms-Dialog-Container .ms-Dialog.ms-Modal-custom {\n    padding: 0;\n    min-width: 60vw;\n    max-height: 60vh;\n    display: flex;\n    flex-flow: column;\n    min-width: 33vw;\n    min-height: 33vh; }\n    .ms-Dialog-Container .ms-Dialog.ms-Modal-custom .ms-Dialog-innerContent {\n      padding: 0; }\n    .ms-Dialog-Container .ms-Dialog.ms-Modal-custom.ms-Modal-custom-md {\n      min-width: 50vw;\n      max-height: 50vh; }\n    .ms-Dialog-Container .ms-Dialog.ms-Modal-custom.ms-Modal-custom-default, .ms-Dialog-Container .ms-Dialog.ms-Modal-custom.ms-Modal-custom-large {\n      min-width: 75vw;\n      max-height: 75vh; }\n    .ms-Dialog-Container .ms-Dialog.ms-Modal-custom.ms-Modal-custom-xl {\n      min-width: calc(100vw - 48px);\n      max-height: calc(100vh - 48px); }\n    .ms-Dialog-Container .ms-Dialog.ms-Modal-custom .ms-Modal-title-custom {\n      height: 60px;\n      flex: initial;\n      order: 1;\n      margin: 0;\n      padding: 24px; }\n    .ms-Dialog-Container .ms-Dialog.ms-Modal-custom .ms-Modal-content-custom {\n      flex: 1;\n      order: 2;\n      overflow-y: auto;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      -webkit-overflow-scrolling: touch;\n      margin: 0;\n      padding: 0 24px; }\n    .ms-Dialog-Container .ms-Dialog.ms-Modal-custom .ms-Modal-actions-custom {\n      flex: initial;\n      order: 3;\n      margin: 0;\n      padding: 24px; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ]
        })
    ], UifDialogComponent);
    return UifDialogComponent;
    var _a, _b;
}());

var UifDropdownItemService = /** @class */ (function () {
    function UifDropdownItemService() {
        this.dropdownItemToggled = new Subject_2();
        this.onDropdownItemToggled$ = this.dropdownItemToggled.asObservable();
    }
    UifDropdownItemService.prototype.toggleDropdown = function (id) {
        this.dropdownItemToggled.next(id);
    };
    UifDropdownItemService = __decorate([
        Injectable()
    ], UifDropdownItemService);
    return UifDropdownItemService;
}());
var UifDropdownOptionComponent = /** @class */ (function () {
    function UifDropdownOptionComponent(dropdownItemService) {
        this.dropdownItemService = dropdownItemService;
        this.selected = false;
        this.text = '';
        this.selectedChange = new EventEmitter();
        this.id = Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
    }
    UifDropdownOptionComponent.prototype.fireSelection = function () {
        this.dropdownItemService.toggleDropdown(this.id);
    };
    UifDropdownOptionComponent.prototype.toggleItemSelection = function () {
        this.selected = !this.selected;
        this.selectedChange.emit(this.selected);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDropdownOptionComponent.prototype, "selected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDropdownOptionComponent.prototype, "text", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_a = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _a || Object)
    ], UifDropdownOptionComponent.prototype, "selectedChange", void 0);
    UifDropdownOptionComponent = __decorate([
        Component({
            selector: 'uif-dropdown-option, [uifDropdownOption]',
            styles: [
                ':host {display: block; }'
            ],
            template: "<div class=\"ms-Dropdown-item\">\n\t\t<button\n\t\t\t[attr.checked]=\"selected\"\n\t\t\t[attr.id]=\"'checkbox_' + id\"\n\t\t\trole=\"checkbox\"\n\t\t\ttype=\"button\"\n\t\t\tclass=\"ms-Checkbox is-checked is-enabled\"\n\t\t\t[attr.aria-checked]=\"selected\"\n\t\t\t\ttabindex=\"0\" (click)=\"fireSelection()\">\n\t\t\t\t<ng-content></ng-content>\n\t\t</button>\n\t</div>"
        }),
        __metadata("design:paramtypes", [UifDropdownItemService])
    ], UifDropdownOptionComponent);
    return UifDropdownOptionComponent;
    var _a;
}());

var UifDropdownComponent = /** @class */ (function () {
    function UifDropdownComponent(dropdownItemService) {
        this.dropdownItemService = dropdownItemService;
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.title = 'Choose sounds';
        this.isMultiSelectable = false;
        this.options = [];
        this.showSelectedText = false;
        this.isDisabled = false;
        this.showNative = false;
        this.showCustomOptions = false;
        this.onDocumnetKeyUpListener = null;
    }
    UifDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropdownItemService.onDropdownItemToggled$.subscribe(function (id) {
            _this.customOptions.forEach(function (option) {
                if (option.id === id) {
                    option.toggleItemSelection();
                }
                else {
                    if (!_this.isMultiSelectable) {
                        option.selected = false;
                        option.selectedChange.emit(false);
                    }
                }
            });
            if (!_this.isMultiSelectable) {
                _this.isOpen = false;
            }
        });
    };
    UifDropdownComponent.prototype.ngOnDestroy = function () {
        if (this.onDocumnetKeyUpListener) {
            this.onDocumnetKeyUpListener.unsubscribe();
            this.onDocumnetKeyUpListener = null;
        }
    };
    UifDropdownComponent.prototype.ngAfterContentInit = function () {
        if (this.customOptions && this.customOptions.length > 0) {
            this.showNative = false;
            this.showCustomOptions = true;
        }
        else {
            this.showNative = true;
            this.showCustomOptions = false;
        }
    };
    UifDropdownComponent.prototype.toggleDropdown = function () {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
        if (this.isOpen) {
            this.addDocumentListener();
        }
        else {
            this.clearDocumentListener();
        }
    };
    UifDropdownComponent.prototype.toggleItemSelection = function (item) {
        var _this = this;
        this.options.forEach(function (option) {
            if (option.key === item.key) {
                option.selected = !option.selected;
            }
            else {
                if (!_this.isMultiSelectable) {
                    option.selected = false;
                }
            }
        });
        if (!this.isMultiSelectable) {
            this.isOpen = false;
        }
    };
    UifDropdownComponent.prototype.getCurrentSelected = function () {
        var result = 'Choose a option';
        if (this.showSelectedText) {
            if (this.showNative) {
                if (this.options.filter(function (x) { return x.selected; }).length > 0) {
                    result = this.options.filter(function (option) { return option.selected; }).map(function (x) { return x.text; }).join(', ');
                }
            }
            else if (this.showCustomOptions) {
                var items = this.customOptions.filter(function (x) { return x.selected; });
                result = this.customOptions.filter(function (option) { return option.selected; }).map(function (x) { return x.text; }).join(', ');
            }
        }
        return result;
    };
    UifDropdownComponent.prototype.clearDocumentListener = function () {
        if (this.onDocumnetKeyUpListener) {
            this.onDocumnetKeyUpListener.unsubscribe();
            this.onDocumnetKeyUpListener = null;
        }
    };
    UifDropdownComponent.prototype.addDocumentListener = function () {
        var _this = this;
        this.clearDocumentListener();
        this.onDocumnetKeyUpListener = Observable_2.fromEvent(document, 'keyup')
            .subscribe(function ($event) {
            if ($event.key === 'Escape' && _this.isOpen) {
                _this.isOpen = false;
                _this.isOpenChange.emit(_this.isOpen);
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDropdownComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_a = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _a || Object)
    ], UifDropdownComponent.prototype, "isOpenChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDropdownComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDropdownComponent.prototype, "isMultiSelectable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UifDropdownComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDropdownComponent.prototype, "showSelectedText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifDropdownComponent.prototype, "isDisabled", void 0);
    __decorate([
        ContentChildren(UifDropdownOptionComponent),
        __metadata("design:type", Array)
    ], UifDropdownComponent.prototype, "customOptions", void 0);
    UifDropdownComponent = __decorate([
        Component({
            selector: 'uif-dropdown',
            template: "<div class=\"ms-Dropdown\" [attr.tabindex]=\"isDisabled ? -1 : 0\" [class.is-open]=\"isOpen\" [class.is-disabled]=\"isDisabled\">\n    <label class=\"ms-Label\">{{title}}</label>\n    <i class=\"ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown\"></i>\n    <span class=\"ms-Dropdown-title\" (click)=\"toggleDropdown()\">{{getCurrentSelected()}}</span>\n    <ul class=\"ms-Dropdown-items\" [hidden]=\"!showNative\" [class.is-open]=\"isOpen && showNative\">\n        <li class=\"ms-Dropdown-item\" *ngFor=\"let item of options; let i = index;\">\n            <button [attr.checked]=\"item.selected\" [attr.id]=\"'checkbox_' + i\" role=\"checkbox\" type=\"button\" class=\"ms-Checkbox is-checked is-enabled\" [attr.aria-checked]=\"item.selected\"\n                tabindex=\"0\" (click)=\"toggleItemSelection(item)\">\n                <label class=\"ms-Checkbox-label\">\n                    <div class=\"ms-Checkbox-checkbox\" [class.is-selected]=\"item.selected\" aria-hidden=\"true\" [class.visibility-hidden]=\"!isMultiSelectable\" > \n                        <i class=\"ms-Icon ms-Icon--CheckMark\" aria-hidden=\"true\" [hidden]=\"!item.selected\"></i>\n                    </div>\n                    <span class=\"ms-Checkbox-text\">{{item.text}}</span>\n                </label>\n            </button>\n        </li>\n    </ul>\n    <div class=\"ms-Dropdown-items\" [hidden]=\"!showCustomOptions\" [class.is-open]=\"isOpen && showCustomOptions\">\n        <ng-content></ng-content>\n    </div>\n    <span class=\"ms-Dropdown-truncator ms-Dropdown-title\">Choose a option</span>\n</div>",
            styles: [
                ".ms-Dropdown-item,\n/deep/ .ms-Dropdown-item {\n  padding: 0;\n  border: none; }\n  .ms-Dropdown-item button,\n  /deep/ .ms-Dropdown-item button {\n    width: 100%;\n    text-align: left;\n    background: none;\n    height: 36px;\n    border: none;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    cursor: pointer; }\n    .ms-Dropdown-item button .ms-Checkbox-label,\n    /deep/ .ms-Dropdown-item button .ms-Checkbox-label {\n      margin: 0;\n      padding: 0 10px;\n      width: 100%;\n      height: 36px;\n      box-sizing: border-box; }\n      .ms-Dropdown-item button .ms-Checkbox-label .ms-Checkbox-checkbox,\n      /deep/ .ms-Dropdown-item button .ms-Checkbox-label .ms-Checkbox-checkbox {\n        display: inline-block;\n        vertical-align: middle;\n        font-size: small;\n        border: 1px solid #303030;\n        width: 16px;\n        height: 16px;\n        text-align: center;\n        line-height: 16px; }\n        .ms-Dropdown-item button .ms-Checkbox-label .ms-Checkbox-checkbox.is-selected,\n        /deep/ .ms-Dropdown-item button .ms-Checkbox-label .ms-Checkbox-checkbox.is-selected {\n          background: #0078d7;\n          border-color: #0078d7;\n          color: #fff; }\n        .ms-Dropdown-item button .ms-Checkbox-label .ms-Checkbox-checkbox.visibility-hidden,\n        /deep/ .ms-Dropdown-item button .ms-Checkbox-label .ms-Checkbox-checkbox.visibility-hidden {\n          display: none; }\n      .ms-Dropdown-item button .ms-Checkbox-label .ms-Checkbox-text,\n      /deep/ .ms-Dropdown-item button .ms-Checkbox-label .ms-Checkbox-text {\n        color: #333333;\n        margin-top: 0px;\n        margin-right: 5px;\n        margin-bottom: 0px;\n        margin-left: 5px;\n        font-size: 14px;\n        display: inline-block;\n        vertical-align: middle; }\n\n.ms-Dropdown-items.is-open {\n  animation: fadein-item-down;\n  animation-duration: 0.367s; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ],
            providers: [UifDropdownItemService]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof UifDropdownItemService !== "undefined" && UifDropdownItemService) === "function" && _b || Object])
    ], UifDropdownComponent);
    return UifDropdownComponent;
    var _a, _b;
}());

var UifFacepileComponent = /** @class */ (function () {
    function UifFacepileComponent() {
        this.showFacePileAddButton = true;
        this.facepileCards = [];
        this.overflowLimit = 5;
        this.facepileAddClick = new EventEmitter();
        this.facepileOverflowClick = new EventEmitter();
        this.showHeader = false;
        this.showArrow = false;
        this.showActions = false;
        this.contentClasses = 'facepile-content';
        this.calloutClasses = 'facepile-callout';
    }
    UifFacepileComponent.prototype.toggleFacePiles = function (card) {
        this.facepileCards.forEach(function (item) {
            if (item._uid !== card._uid) {
                item.isOpen = false;
            }
        });
    };
    UifFacepileComponent.prototype.onFacepileAddClick = function ($event) {
        console.log(this.facepileCards);
        this.facepileAddClick.emit($event);
    };
    UifFacepileComponent.prototype.onFacepileOverflowClick = function ($event) {
        this.facepileOverflowClick.emit($event);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifFacepileComponent.prototype, "showFacePileAddButton", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UifFacepileComponent.prototype, "facepileCards", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifFacepileComponent.prototype, "overflowLimit", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_a = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _a || Object)
    ], UifFacepileComponent.prototype, "facepileAddClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_b = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _b || Object)
    ], UifFacepileComponent.prototype, "facepileOverflowClick", void 0);
    UifFacepileComponent = __decorate([
        Component({
            selector: 'uif-facepile',
            template: "<div class=\"facepile-holder\">\n\t<button class=\"ms-FacePile-addButton ms-FacePile-addButton--addPerson\" [hidden]=\"!showFacePileAddButton\" (click)=\"onFacepileAddClick($event)\">\n\t\t<i class=\"ms-FacePile-addPersonIcon ms-Icon ms-Icon--AddFriend\"></i>\n\t</button>\n\t<ng-container *ngFor=\"let card of facepileCards; let i = index;\">\n\t\t<div class=\"facepile-item\" *ngIf=\"i < overflowLimit\">\n\t\t\t<uif-callout showClose=\"false\" [showArrow]=\"showArrow\" [showHeader]=\"showHeader\" [showActions]=\"showActions\" [calloutClasses]=\"calloutClasses\"\n\t\t\t [contentClasses]=\"contentClasses\" [showArrow]=\"false\" [(isOpen)]=\"card.isOpen\" [directionalHint]=\"card.directionalHint\">\n\t\t\t\t<uif-open-callout (click)=\"toggleFacePiles(card)\">\n\t\t\t\t\t<span class=\"ms-Persona ms-Persona--facePile\">\n\t\t\t\t\t\t<uif-persona [persona]=\"card.personaCard.personalDetails\"></uif-persona>\n\t\t\t\t\t</span>\n\t\t\t\t</uif-open-callout>\n\t\t\t\t<uif-callout-content>\n\t\t\t\t\t<uif-persona-card [personaCard]=\"card.personaCard\"></uif-persona-card>\n\t\t\t\t</uif-callout-content>\n\t\t\t</uif-callout>\n\t\t</div>\n\t</ng-container>\n\t<button class=\"ms-FacePile-addButton ms-FacePile-addButton--overflow\" [class.is-active]=\"facepileCards.length > overflowLimit\" (click)=\"onFacepileOverflowClick($event)\">\n\t\t<span class=\"ms-FacePile-overflowText\">+{{facepileCards.length - overflowLimit}}</span>\n\t</button>\n\t<div class=\"clearfix\"></div>\n</div>\n<div class=\"clearfix\"></div>",
            styles: ["/deep/ .facepile-content {\n  padding: 0; }\n\n/deep/ .facepile-callout {\n  width: 360px; }\n\n.facepile-holder {\n  display: inline-block; }\n\n.facepile-item {\n  width: 32px;\n  height: 32px;\n  margin-right: 4px;\n  float: left; }\n\n.ms-Persona.ms-Persona--facePile {\n  width: 32px;\n  height: 32px;\n  display: inline-block;\n  margin-right: 4px; }\n\n.clearfix:after {\n  content: ' ';\n  clear: both; }\n"]
        })
    ], UifFacepileComponent);
    return UifFacepileComponent;
    var _a, _b;
}());

var UifPersonaComponent = /** @class */ (function () {
    function UifPersonaComponent() {
        this.viewType = UifPersonaViewType.Default;
        this.classes = '';
        this.showCancelAction = false;
        this.cancelInvoked = new EventEmitter();
        this.PersonaAvailabilityTypes = UifPersonaAvailabilityType;
    }
    UifPersonaComponent.prototype.onCancel = function ($event) {
        this.cancelInvoked.emit();
    };
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof PersonaItem !== "undefined" && PersonaItem) === "function" && _a || Object)
    ], UifPersonaComponent.prototype, "persona", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_b = typeof UifPersonaViewType !== "undefined" && UifPersonaViewType) === "function" && _b || Object)
    ], UifPersonaComponent.prototype, "viewType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPersonaComponent.prototype, "classes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPersonaComponent.prototype, "showCancelAction", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifPersonaComponent.prototype, "cancelInvoked", void 0);
    UifPersonaComponent = __decorate([
        Component({
            selector: 'uif-persona',
            template: "<div class=\"ms-Persona\" [ngClass]=\"viewType + ' ' + persona.availability + ' ' + classes\">\n\t<div class=\"ms-Persona-imageArea\">\n\t\t<div class=\"ms-Persona-initials ms-Persona-initials--blue\" [hidden]=\"persona.imgSrc\">{{persona.initials}}</div>\n\t\t<img class=\"ms-Persona-image\" [hidden]=\"!persona.imgSrc\" [attr.src]=\"persona.imgSrc\">\n\t</div>\n\t<div class=\"ms-Persona-presence\" [hidden]=\"!persona.availability\">\n\t\t<i class=\"ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck\" [hidden]=\"persona.availability !== PersonaAvailabilityTypes.Available\"></i>\n\t\t<i class=\"ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeClock\" [hidden]=\"persona.availability !== PersonaAvailabilityTypes.Away\"></i>\n\t\t<i class=\"ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeMinus\" [hidden]=\"persona.availability !== PersonaAvailabilityTypes.DND\"></i>\n\t</div>\n\t<div class=\"ms-Persona-details\">\n\t\t<div class=\"ms-Persona-primaryText\">{{persona.primary}}</div>\n\t\t<div class=\"ms-Persona-secondaryText\">{{persona.secondary}}</div>\n\t\t<div class=\"ms-Persona-tertiaryText\">{{persona.tertiary}}</div>\n\t\t<div class=\"ms-Persona-optionalText\">{{persona.optional}}</div>\n\t</div>\n\t<div class=\"ms-Persona-actionIcon\" [hidden]=\"!showCancelAction\" (click)=\"onCancel($event)\">\n\t\t<i class=\"ms-Icon ms-Icon--Cancel\"></i>\n\t</div>\n</div>",
            styles: [":host {\n  display: inline-block; }\n"]
        })
    ], UifPersonaComponent);
    return UifPersonaComponent;
    var _a, _b;
}());

var UifPersonaCardComponent = /** @class */ (function () {
    function UifPersonaCardComponent() {
        this.viewType = UifPersonaViewType.Large;
        this.orgViewType = UifPersonaViewType.Default;
    }
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof PersonaCard !== "undefined" && PersonaCard) === "function" && _a || Object)
    ], UifPersonaCardComponent.prototype, "personaCard", void 0);
    UifPersonaCardComponent = __decorate([
        Component({
            selector: 'uif-persona-card',
            template: "<div class=\"ms-PersonaCard\">\n    <div class=\"ms-PersonaCard-persona\">\n        <uif-persona [persona]=\"personaCard.personalDetails\" [viewType]=\"viewType\"></uif-persona>\n    </div>\n    <ul class=\"ms-PersonaCard-actions\">\n        <li data-action-id=\"chat\" class=\"ms-PersonaCard-action\" tabindex=\"1\" [class.is-active]=\"personaCard.isChatPaneActive\" (click)=\"personaCard.activateChatPane()\">\n            <i class=\"ms-Icon ms-Icon--Chat\"></i>\n        </li>\n        <li data-action-id=\"phone\" class=\"ms-PersonaCard-action\" tabindex=\"2\" [class.is-active]=\"personaCard.isPhonePaneActive\" (click)=\"personaCard.activatePhonePane()\">\n            <i class=\"ms-Icon ms-Icon--Phone\"></i>\n        </li>\n        <li data-action-id=\"video\" class=\"ms-PersonaCard-action\" tabindex=\"3\" [class.is-active]=\"personaCard.isVideoPaneActive\" (click)=\"personaCard.activateVideoPane()\">\n            <i class=\"ms-Icon ms-Icon--Video\"></i>\n        </li>\n        <li data-action-id=\"mail\" class=\"ms-PersonaCard-action\" tabindex=\"4\" [class.is-active]=\"personaCard.isMailPaneActive\" (click)=\"personaCard.activatMailPane()\">\n            <i class=\"ms-Icon ms-Icon--Mail\"></i>\n        </li>\n        <li class=\"ms-PersonaCard-overflow\" alt=\"View profile in Delve\" title=\"View profile in Delve\">View Profile</li>\n        <li data-action-id=\"org\" class=\"ms-PersonaCard-action ms-PersonaCard-orgChart\" tabindex=\"5\" [class.is-active]=\"personaCard.isOrgPaneActive\"\n            (click)=\"personaCard.activateOrgPane()\">\n            <i class=\"ms-Icon ms-Icon--Org\"></i>\n        </li>\n    </ul>\n    <div class=\"ms-PersonaCard-actionDetailBox\">\n        <div data-detail-id=\"mail\" class=\"ms-PersonaCard-details\" [class.is-active]=\"personaCard.isMailPaneActive\">\n            <div class=\"ms-PersonaCard-detailLine\" *ngFor=\"let mail of personaCard.mailDetails\">\n                <span class=\"ms-PersonaCard-detailLabel\" [hidden]=\"!mail.meta\">{{mail.meta}}:</span>\n                <a class=\"ms-Link\" [attr.href]=\"mail.href\">{{mail.email}}</a>\n            </div>\n        </div>\n        <div data-detail-id=\"chat\" class=\"ms-PersonaCard-details\" [class.is-active]=\"personaCard.isChatPaneActive\">\n            <div class=\"ms-PersonaCard-detailLine\">\n                <span class=\"ms-PersonaCard-detailLabel\" [hidden]=\"!personaCard.chatDetail.meta\">{{personaCard.chatDetail.meta}}:</span>\n                <a class=\"ms-Link\" [attr.href]=\"personaCard.chatDetail.href\">{{personaCard.chatDetail.label}}</a>\n            </div>\n        </div>\n        <div data-detail-id=\"phone\" class=\"ms-PersonaCard-details\" [class.is-active]=\"personaCard.isPhonePaneActive\" [class.is-collapsed]=\"personaCard.isPhonePaneCollapsed\">\n            <div class=\"ms-PersonaCard-detailExpander\" (click)=\"personaCard.isPhonePaneCollapsed = !personaCard.isPhonePaneCollapsed\"></div>\n            <div class=\"ms-PersonaCard-detailLine\">\n                <span class=\"ms-PersonaCard-detailLabel\">Details</span>\n            </div>\n            <div class=\"ms-PersonaCard-detailLine\" *ngFor=\"let phone of personaCard.phoneDetails\">\n                <span class=\"ms-PersonaCard-detailLabel\" [hidden]=\"!phone.meta\">{{phone.meta}}:</span>\n                <a class=\"ms-Link\" [attr.href]=\"phone.href\">{{phone.label}}</a>\n            </div>\n        </div>\n        <div data-detail-id=\"video\" class=\"ms-PersonaCard-details\" [class.is-active]=\"personaCard.isVideoPaneActive\">\n            <div class=\"ms-PersonaCard-detailLine\">\n                <span class=\"ms-PersonaCard-detailLabel\" [hidden]=\"!personaCard.videoDetail.meta\">{{personaCard.videoDetail.meta}}:</span>\n                <a class=\"ms-Link\" [attr.href]=\"personaCard.videoDetail.href\">{{personaCard.videoDetail.label}}</a>\n            </div>\n        </div>\n        <div data-detail-id=\"org\" class=\"ms-PersonaCard-details\" [class.is-active]=\"personaCard.isOrgPaneActive\">\n            <uif-org-chart [orgChartGroups]=\"personaCard.orgChartGroups\"></uif-org-chart>\n        </div>\n    </div>\n</div>",
            styles: [
                ".ms-PersonaCard-details.is-active {\n  animation: fadein-item-down;\n  animation-duration: 0.367s; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ]
        })
    ], UifPersonaCardComponent);
    return UifPersonaCardComponent;
    var _a;
}());

var UifOrgChartComponent = /** @class */ (function () {
    function UifOrgChartComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UifOrgChartComponent.prototype, "orgChartGroups", void 0);
    UifOrgChartComponent = __decorate([
        Component({
            selector: 'uif-org-chart',
            template: "<div class=\"ms-OrgChart\">\n    <div class=\"ms-OrgChart-group\" *ngFor=\"let group of orgChartGroups\">\n        <div class=\"ms-OrgChart-groupTitle\" [hidden]=\"!group.title\">{{group.title}}</div>\n        <ul class=\"ms-OrgChart-list\">\n            <li class=\"ms-OrgChart-listItem\" *ngFor=\"let orgItem of group.orgItems\">\n                <button class=\"ms-OrgChart-listItemBtn\" tabindex=\"1\">\n                    <uif-persona [persona]=\"orgItem\" [viewType]=\"orgViewType\"></uif-persona>\n                </button>\n            </li>\n        </ul>\n    </div>\n</div>",
            styles: [
                ""
            ]
        })
    ], UifOrgChartComponent);
    return UifOrgChartComponent;
}());

var UifOverlayComponent = /** @class */ (function () {
    function UifOverlayComponent() {
        this.isOpen = false;
        this.isDark = true;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifOverlayComponent.prototype, "isOpen", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifOverlayComponent.prototype, "isDark", void 0);
    UifOverlayComponent = __decorate([
        Component({
            selector: 'uif-overlay',
            template: "<div class=\"ms-Overlay\" [class.is-visible]=\"isOpen\" [class.ms-Overlay--dark]=\"isDark\">\n  <div class=\"ms-Overlay-Content\">\n      <ng-content></ng-content>\n  </div>\n</div>",
            styles: [".ms-Overlay-Content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%; }\n"]
        })
    ], UifOverlayComponent);
    return UifOverlayComponent;
}());

var UifPanelComponent = /** @class */ (function () {
    function UifPanelComponent() {
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.hasOverlay = true;
        this.isClosable = true;
        this.directionalHint = UifPanelDirectionHint.Right;
        this.size = UifPanelSizeHint.Default;
    }
    UifPanelComponent.prototype.ngOnChanges = function () {
        if (this.isOpen && this.hasOverlay) {
            document.body.classList.add('ms-u-overflowHidden');
        }
        else {
            document.body.classList.remove('ms-u-overflowHidden');
        }
    };
    UifPanelComponent.prototype.closePane = function () {
        this.isOpen = false;
        this.isOpenChange.emit(this.isOpen);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPanelComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifPanelComponent.prototype, "isOpenChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPanelComponent.prototype, "hasOverlay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPanelComponent.prototype, "isClosable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof UifPanelDirectionHint !== "undefined" && UifPanelDirectionHint) === "function" && _a || Object)
    ], UifPanelComponent.prototype, "directionalHint", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_b = typeof UifPanelSizeHint !== "undefined" && UifPanelSizeHint) === "function" && _b || Object)
    ], UifPanelComponent.prototype, "size", void 0);
    UifPanelComponent = __decorate([
        Component({
            selector: 'uif-panel',
            template: "<div class=\"ms-PanelHost\" [hidden]=\"!isOpen\">\n    <uif-overlay [isOpen]=\"hasOverlay\"></uif-overlay>\n    <div class=\"ms-Panel\" [class.is-open]=\"isOpen\" [ngClass]=\"[directionalHint, size]\">\n        <button class=\"ms-Panel-closeButton ms-PanelAction-close\" (click)=\"closePane()\" [hidden]=\"!isClosable\">\n            <i class=\"ms-Panel-closeIcon ms-Icon ms-Icon--Cancel\"></i>\n        </button>\n        <div class=\"ms-Panel-contentInner\" *ngIf=\"isOpen\">\n            <div class=\"ms-Panel-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    </div>\n</div>",
            styles: [
                ".ms-Panel.ms-Panel--left.is-open {\n  animation: fadein-item-right;\n  animation-duration: 0.367s; }\n\n.ms-Panel.ms-Panel--right.is-open {\n  animation: fadein-item-left;\n  animation-duration: 0.367s; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ]
        })
    ], UifPanelComponent);
    return UifPanelComponent;
    var _a, _b;
}());

var UifMessageBarComponent = /** @class */ (function () {
    function UifMessageBarComponent() {
        this.type = UifMessageType.Default;
        this.UifMessageTypes = UifMessageType;
    }
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof UifMessageType !== "undefined" && UifMessageType) === "function" && _a || Object)
    ], UifMessageBarComponent.prototype, "type", void 0);
    UifMessageBarComponent = __decorate([
        Component({
            selector: 'uif-message-bar',
            template: "<div class=\"ms-MessageBar\" [ngClass]=\"type\">\n    <div class=\"ms-MessageBar-content\">\n        <div class=\"ms-MessageBar-icon\">\n            <i class=\"ms-Icon ms-Icon--Info\" *ngIf=\"type === UifMessageTypes.Default\"></i>\n            <i class=\"ms-Icon ms-Icon--Completed\" *ngIf=\"type === UifMessageTypes.Success\"></i>\n            <i class=\"ms-Icon ms-Icon--ErrorBadge\" *ngIf=\"type === UifMessageTypes.Error\"></i>\n            <i class=\"ms-Icon ms-Icon--Blocked\" *ngIf=\"type === UifMessageTypes.Blocked\"></i>\n            <i class=\"ms-Icon ms-Icon--Info\" *ngIf=\"type === UifMessageTypes.Warning\"></i>\n            <i class=\"ms-Icon ms-Icon--Warning\" *ngIf=\"type === UifMessageTypes.SevereWarning\"></i>\n        </div>\n        <div class=\"ms-MessageBar-text\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>",
            styles: [""]
        })
    ], UifMessageBarComponent);
    return UifMessageBarComponent;
    var _a;
}());

var UifMessageBannerComponent = /** @class */ (function () {
    function UifMessageBannerComponent() {
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.hasOverlay = false;
        this.isClosable = false;
    }
    UifMessageBannerComponent.prototype.closePane = function () {
        this.isOpen = false;
        this.isOpenChange.emit(this.isOpen);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifMessageBannerComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifMessageBannerComponent.prototype, "isOpenChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifMessageBannerComponent.prototype, "hasOverlay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifMessageBannerComponent.prototype, "isClosable", void 0);
    UifMessageBannerComponent = __decorate([
        Component({
            selector: 'uif-message-banner',
            template: "<div class=\"ms-PanelHost\" [hidden]=\"!isOpen\">\n    <uif-overlay [isOpen]=\"hasOverlay\"></uif-overlay>\n    <div class=\"ms-MessageBanner\" [class.is-open]=\"isOpen\">\n        <div class=\"ms-MessageBanner-content\">\n            <div class=\"ms-MessageBanner-text\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <button class=\"ms-MessageBanner-close\" [hidden]=\"!isClosable\" (click)=\"closePane()\">\n            <i class=\"ms-Icon ms-Icon--Clear\"></i>\n        </button>\n    </div>\n</div>",
            styles: [
                ".ms-MessageBanner {\n  min-height: 52px;\n  height: auto; }\n  .ms-MessageBanner.is-open {\n    animation: fadein-item-down;\n    animation-duration: 0.367s; }\n\n.ms-PanelHost {\n  z-index: 999; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ]
        })
    ], UifMessageBannerComponent);
    return UifMessageBannerComponent;
}());

var UifPeoplePickerComponent = /** @class */ (function () {
    function UifPeoplePickerComponent() {
        this.pickerGroups = [
            new PeoplePickerGroup()
        ];
        this.pickerGroupsChange = new EventEmitter();
        this.selectedPeople = [];
        this.selectedPeopleChange = new EventEmitter();
        this.searchToken = '';
        this.searchTokenChange = new EventEmitter();
        this.viewTypeInList = UifPersonaViewType.Default;
        this.closeOnSelection = false;
        this.allowRemovalOfPersona = false;
        this.personaRemove = new EventEmitter();
        this.isResultPaneOpen = false;
        this.showCancelAction = true;
        this.viewTypeInSelection = UifPersonaViewType.ExtraSmall;
    }
    UifPeoplePickerComponent.prototype.ngOnChanges = function () {
        if (this.viewTypeInList) {
            if (this.viewTypeInList === UifPersonaViewType.Large || this.viewTypeInList === UifPersonaViewType.ExtraLarge) {
                this.viewTypeInList = UifPersonaViewType.Default;
            }
        }
    };
    UifPeoplePickerComponent.prototype.onInputFocussed = function ($event) {
        this.isResultPaneOpen = true;
    };
    UifPeoplePickerComponent.prototype.onInputKeyUp = function ($event) {
        if ($event.keyCode === 27) {
            this.isResultPaneOpen = false;
        }
    };
    UifPeoplePickerComponent.prototype.onSearchTokenChanged = function ($event) {
        this.searchTokenChange.emit(this.searchToken);
        if (!this.isResultPaneOpen) {
            this.isResultPaneOpen = true;
        }
    };
    UifPeoplePickerComponent.prototype.selectPersona = function (groupIndex, itemIndex) {
        if (this.pickerGroups.length > 0) {
            if (this.pickerGroups[groupIndex].poeplePickerItems && this.pickerGroups[groupIndex].poeplePickerItems.length > 0) {
                if (this.pickerGroups[groupIndex].poeplePickerItems[itemIndex]) {
                    var personaItem = this.pickerGroups[groupIndex].poeplePickerItems[itemIndex];
                    this.selectedPeople.push(personaItem);
                    this.selectedPeopleChange.emit(this.selectedPeople);
                    if (this.closeOnSelection) {
                        this.isResultPaneOpen = false;
                    }
                }
            }
        }
    };
    UifPeoplePickerComponent.prototype.deselectPersona = function (persona) {
        var found = false;
        var indexOf = this.selectedPeople.indexOf(persona);
        if (this.pickerGroups.length > 0) {
            this.pickerGroups.forEach(function (group) {
                if (group.poeplePickerItems.length > 0) {
                    group.poeplePickerItems.forEach(function (item) {
                        if (item === persona) {
                            found = true;
                        }
                    });
                }
            });
        }
        if (found && indexOf !== null) {
            this.selectedPeople.splice(indexOf, 1);
            this.selectedPeopleChange.emit(this.selectedPeople);
        }
    };
    UifPeoplePickerComponent.prototype.removePesona = function (groupIndex, itemIndex) {
        if (this.pickerGroups.length > 0) {
            if (this.pickerGroups[groupIndex].poeplePickerItems && this.pickerGroups[groupIndex].poeplePickerItems.length > 0) {
                if (this.pickerGroups[groupIndex].poeplePickerItems[itemIndex]) {
                    var personaRemoved = this.pickerGroups[groupIndex].poeplePickerItems.splice(itemIndex, 1);
                    this.pickerGroupsChange.emit(this.pickerGroups);
                    this.personaRemove.emit(personaRemoved);
                }
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UifPeoplePickerComponent.prototype, "pickerGroups", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifPeoplePickerComponent.prototype, "pickerGroupsChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UifPeoplePickerComponent.prototype, "selectedPeople", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifPeoplePickerComponent.prototype, "selectedPeopleChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPeoplePickerComponent.prototype, "searchToken", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifPeoplePickerComponent.prototype, "searchTokenChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof UifPersonaViewType !== "undefined" && UifPersonaViewType) === "function" && _a || Object)
    ], UifPeoplePickerComponent.prototype, "viewTypeInList", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPeoplePickerComponent.prototype, "closeOnSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPeoplePickerComponent.prototype, "allowRemovalOfPersona", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifPeoplePickerComponent.prototype, "personaRemove", void 0);
    UifPeoplePickerComponent = __decorate([
        Component({
            selector: 'uif-people-picker',
            template: "<div class=\"ms-PeoplePicker\">\n    <uif-context-host [(isOpen)]=\"isResultPaneOpen\">\n        <uif-context-host-header>\n            <div class=\"ms-PeoplePicker-searchBox\" [class.is-active]=\"isResultPaneOpen\">\n                    <ng-container *ngFor=\"let persona of selectedPeople; let itemIndex = index;\">\n                        <uif-persona classes=\"ms-Persona--token ms-PeoplePicker-persona\" [viewType]=\"viewTypeInSelection\" [showCancelAction]=\"showCancelAction\" (cancelInvoked)=\"deselectPersona(persona)\" [persona]=\"persona\"></uif-persona>\n                    </ng-container>\n                <div class=\"ms-TextField ms-TextField--textFieldUnderlined\">\n                    <input class=\"ms-TextField-field\" (keyup)=\"onInputKeyUp($event)\" (focus)=\"onInputFocussed($event)\" type=\"text\" [(ngModel)]=\"searchToken\" placeholder=\"Select or enter an option\" (input)=\"onSearchTokenChanged($event)\">\n                </div>\n            </div>\n        </uif-context-host-header>\n        <uif-context-host-content>\n            <div class=\"ms-PeoplePicker-results\">\n                <div class=\"ms-PeoplePicker-resultGroup\" *ngFor=\"let group of pickerGroups; let groupIndex = index;\">\n                    <div class=\"ms-PeoplePicker-resultGroupTitle\">\n                        {{group.title}}\n                    </div>\n                    <div class=\"ms-PeoplePicker-result\" tabindex=\"1\" *ngFor=\"let persona of group.poeplePickerItems; let itemIndex = index;\">\n                        <uif-persona (click)=\"selectPersona(groupIndex, itemIndex)\" [persona]=\"persona\" [viewType]=\"viewTypeInList\"></uif-persona>\n                        <button class=\"ms-PeoplePicker-resultAction\" (click)=\"removePesona(groupIndex, itemIndex)\" [hidden]=\"!allowRemovalOfPersona\">\n                            <i class=\"ms-Icon ms-Icon--Clear\"></i>\n                        </button>\n                    </div>\n                </div>\n                <button class=\"ms-PeoplePicker-searchMore\">\n                    <div class=\"ms-PeoplePicker-searchMoreIcon\">\n                        <i class=\"ms-Icon ms-Icon--Search\"></i>\n                    </div>\n                    <div class=\"ms-PeoplePicker-searchMoreText\">\n                        Search my groups\n                    </div>\n                </button>\n            </div>\n        </uif-context-host-content>\n    </uif-context-host>\n</div>",
            styles: [
                ".ms-PeoplePicker-results {\n  max-height: 300px;\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -webkit-overflow-scrolling: touch; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ]
        })
    ], UifPeoplePickerComponent);
    return UifPeoplePickerComponent;
    var _a;
}());

var UifContextHostHeaderComponent = /** @class */ (function () {
    function UifContextHostHeaderComponent() {
    }
    UifContextHostHeaderComponent = __decorate([
        Component({
            selector: 'uif-context-host-header, [uifContextHostHeader]',
            template: '<ng-content></ng-content>'
        })
    ], UifContextHostHeaderComponent);
    return UifContextHostHeaderComponent;
}());
var UifContextHostContentComponent = /** @class */ (function () {
    function UifContextHostContentComponent() {
    }
    UifContextHostContentComponent = __decorate([
        Component({
            selector: 'uif-context-host-content, [uifContextHostContent]',
            template: '<ng-content></ng-content>'
        })
    ], UifContextHostContentComponent);
    return UifContextHostContentComponent;
}());
var UifContextHostComponent = /** @class */ (function () {
    function UifContextHostComponent() {
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifContextHostComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_a = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _a || Object)
    ], UifContextHostComponent.prototype, "isOpenChange", void 0);
    UifContextHostComponent = __decorate([
        Component({
            selector: 'uif-context-host',
            template: "<div class=\"ms-Contextual-Host-Container\">\n    <ng-content select=\"uif-context-host-header, [uifContextHostHeader]\"></ng-content>\n    <div class=\"ms-ContextualHost is-positioned\" [class.is-open]=\"isOpen\">\n        <div class=\"ms-ContextualHost-main\">\n            <ng-content select=\"uif-context-host-content, [uifContextHostContent]\"></ng-content>\n        </div>\n    </div>\n</div>",
            styles: [
                ".ms-Contextual-Host-Container {\n  position: relative; }\n  .ms-Contextual-Host-Container .ms-ContextualHost {\n    width: 100%; }\n    .ms-Contextual-Host-Container .ms-ContextualHost.is-open {\n      animation: fadein-item-down;\n      animation-duration: 0.367s; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ]
        })
    ], UifContextHostComponent);
    return UifContextHostComponent;
    var _a;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends$7(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$1 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

/**
 * @license Angular v5.2.1
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _DOM = /** @type {?} */ ((null));
/**
 * @return {?}
 */
function getDOM() {
    return _DOM;
}
/**
 * @param {?} adapter
 * @return {?}
 */

/**
 * @param {?} adapter
 * @return {?}
 */
function setRootDomAdapter(adapter) {
    if (!_DOM) {
        _DOM = adapter;
    }
}
/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 * @abstract
 */
var DomAdapter = /** @class */ (function () {
    function DomAdapter() {
        this.resourceLoaderType = /** @type {?} */ ((null));
    }
    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
        /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         */
        get: /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         * @return {?}
         */
        function () { return this._attrToPropMap; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._attrToPropMap = value; },
        enumerable: true,
        configurable: true
    });
    return DomAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides DOM operations in any browser environment.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 * @abstract
 */
var GenericBrowserDomAdapter = /** @class */ (function (_super) {
    __extends$7(GenericBrowserDomAdapter, _super);
    function GenericBrowserDomAdapter() {
        var _this = _super.call(this) || this;
        _this._animationPrefix = null;
        _this._transitionEnd = null;
        try {
            var /** @type {?} */ element_1 = _this.createElement('div', document);
            if (_this.getStyle(element_1, 'animationName') != null) {
                _this._animationPrefix = '';
            }
            else {
                var /** @type {?} */ domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                for (var /** @type {?} */ i = 0; i < domPrefixes.length; i++) {
                    if (_this.getStyle(element_1, domPrefixes[i] + 'AnimationName') != null) {
                        _this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                        break;
                    }
                }
            }
            var /** @type {?} */ transEndEventNames_1 = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            };
            Object.keys(transEndEventNames_1).forEach(function (key) {
                if (_this.getStyle(element_1, key) != null) {
                    _this._transitionEnd = transEndEventNames_1[key];
                }
            });
        }
        catch (/** @type {?} */ e) {
            _this._animationPrefix = null;
            _this._transitionEnd = null;
        }
        return _this;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.getDistributedNodes = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).getDistributedNodes(); };
    /**
     * @param {?} el
     * @param {?} baseUrl
     * @param {?} href
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.resolveAndSetHref = /**
     * @param {?} el
     * @param {?} baseUrl
     * @param {?} href
     * @return {?}
     */
    function (el, baseUrl, href) {
        el.href = href == null ? baseUrl : baseUrl + '/../' + href;
    };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.supportsDOMEvents = /**
     * @return {?}
     */
    function () { return true; };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = /**
     * @return {?}
     */
    function () {
        return typeof (/** @type {?} */ (document.body)).createShadowRoot === 'function';
    };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.getAnimationPrefix = /**
     * @return {?}
     */
    function () { return this._animationPrefix ? this._animationPrefix : ''; };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.getTransitionEnd = /**
     * @return {?}
     */
    function () { return this._transitionEnd ? this._transitionEnd : ''; };
    /**
     * @return {?}
     */
    GenericBrowserDomAdapter.prototype.supportsAnimation = /**
     * @return {?}
     */
    function () {
        return this._animationPrefix != null && this._transitionEnd != null;
    };
    return GenericBrowserDomAdapter;
}(DomAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _attrToPropMap = {
    'class': 'className',
    'innerHtml': 'innerHTML',
    'readonly': 'readOnly',
    'tabindex': 'tabIndex',
};
var DOM_KEY_LOCATION_NUMPAD = 3;
// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
var _keyMap = {
    // The following values are here for cross-browser compatibility and to match the W3C standard
    // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
    '\b': 'Backspace',
    '\t': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    'Del': 'Delete',
    'Esc': 'Escape',
    'Left': 'ArrowLeft',
    'Right': 'ArrowRight',
    'Up': 'ArrowUp',
    'Down': 'ArrowDown',
    'Menu': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'Win': 'OS'
};
// There is a bug in Chrome for numeric keypad keys:
// https://code.google.com/p/chromium/issues/detail?id=155654
// 1, 2, 3 ... are reported as A, B, C ...
var _chromeNumKeyPadMap = {
    'A': '1',
    'B': '2',
    'C': '3',
    'D': '4',
    'E': '5',
    'F': '6',
    'G': '7',
    'H': '8',
    'I': '9',
    'J': '*',
    'K': '+',
    'M': '-',
    'N': '.',
    'O': '/',
    '\x60': '0',
    '\x90': 'NumLock'
};
var nodeContains;
if (ɵglobal['Node']) {
    nodeContains = ɵglobal['Node'].prototype.contains || function (node) {
        return !!(this.compareDocumentPosition(node) & 16);
    };
}
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
var BrowserDomAdapter = /** @class */ (function (_super) {
    __extends$7(BrowserDomAdapter, _super);
    function BrowserDomAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} templateHtml
     * @return {?}
     */
    BrowserDomAdapter.prototype.parse = /**
     * @param {?} templateHtml
     * @return {?}
     */
    function (templateHtml) { throw new Error('parse not implemented'); };
    /**
     * @return {?}
     */
    BrowserDomAdapter.makeCurrent = /**
     * @return {?}
     */
    function () { setRootDomAdapter(new BrowserDomAdapter()); };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasProperty = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) { return name in element; };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setProperty = /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (el, name, value) { (/** @type {?} */ (el))[name] = value; };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getProperty = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) { return (/** @type {?} */ (el))[name]; };
    /**
     * @param {?} el
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    BrowserDomAdapter.prototype.invoke = /**
     * @param {?} el
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    function (el, methodName, args) {
        (_a = (/** @type {?} */ (el)))[methodName].apply(_a, args);
        var _a;
    };
    // TODO(tbosch): move this into a separate environment class once we have it
    /**
     * @param {?} error
     * @return {?}
     */
    BrowserDomAdapter.prototype.logError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (window.console) {
            if (console.error) {
                console.error(error);
            }
            else {
                console.log(error);
            }
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    BrowserDomAdapter.prototype.log = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (window.console) {
            window.console.log && window.console.log(error);
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    BrowserDomAdapter.prototype.logGroup = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (window.console) {
            window.console.group && window.console.group(error);
        }
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.logGroupEnd = /**
     * @return {?}
     */
    function () {
        if (window.console) {
            window.console.groupEnd && window.console.groupEnd();
        }
    };
    Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
        get: /**
         * @return {?}
         */
        function () { return _attrToPropMap; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} nodeA
     * @param {?} nodeB
     * @return {?}
     */
    BrowserDomAdapter.prototype.contains = /**
     * @param {?} nodeA
     * @param {?} nodeB
     * @return {?}
     */
    function (nodeA, nodeB) { return nodeContains.call(nodeA, nodeB); };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    BrowserDomAdapter.prototype.querySelector = /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) { return el.querySelector(selector); };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    BrowserDomAdapter.prototype.querySelectorAll = /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) { return el.querySelectorAll(selector); };
    /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    BrowserDomAdapter.prototype.on = /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    function (el, evt, listener) { el.addEventListener(evt, listener, false); };
    /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    BrowserDomAdapter.prototype.onAndCancel = /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    function (el, evt, listener) {
        el.addEventListener(evt, listener, false);
        // Needed to follow Dart's subscription semantic, until fix of
        // https://code.google.com/p/dart/issues/detail?id=17406
        return function () { el.removeEventListener(evt, listener, false); };
    };
    /**
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    BrowserDomAdapter.prototype.dispatchEvent = /**
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    function (el, evt) { el.dispatchEvent(evt); };
    /**
     * @param {?} eventType
     * @return {?}
     */
    BrowserDomAdapter.prototype.createMouseEvent = /**
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        var /** @type {?} */ evt = this.getDefaultDocument().createEvent('MouseEvent');
        evt.initEvent(eventType, true, true);
        return evt;
    };
    /**
     * @param {?} eventType
     * @return {?}
     */
    BrowserDomAdapter.prototype.createEvent = /**
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        var /** @type {?} */ evt = this.getDefaultDocument().createEvent('Event');
        evt.initEvent(eventType, true, true);
        return evt;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    BrowserDomAdapter.prototype.preventDefault = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.returnValue = false;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    BrowserDomAdapter.prototype.isPrevented = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        return evt.defaultPrevented || evt.returnValue != null && !evt.returnValue;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getInnerHTML = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.innerHTML; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getTemplateContent = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return 'content' in el && this.isTemplateElement(el) ? (/** @type {?} */ (el)).content : null;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getOuterHTML = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.outerHTML; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.nodeName = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeName; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.nodeValue = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeValue; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.type = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.type; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.content = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.hasProperty(node, 'content')) {
            return (/** @type {?} */ (node)).content;
        }
        else {
            return node;
        }
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.firstChild = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.firstChild; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.nextSibling = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.nextSibling; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.parentElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.parentNode; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.childNodes = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.childNodes; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.childNodesAsList = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var /** @type {?} */ childNodes = el.childNodes;
        var /** @type {?} */ res = new Array(childNodes.length);
        for (var /** @type {?} */ i = 0; i < childNodes.length; i++) {
            res[i] = childNodes[i];
        }
        return res;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.clearNodes = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    };
    /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.appendChild = /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    function (el, node) { el.appendChild(node); };
    /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeChild = /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    function (el, node) { el.removeChild(node); };
    /**
     * @param {?} el
     * @param {?} newChild
     * @param {?} oldChild
     * @return {?}
     */
    BrowserDomAdapter.prototype.replaceChild = /**
     * @param {?} el
     * @param {?} newChild
     * @param {?} oldChild
     * @return {?}
     */
    function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.remove = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        return node;
    };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.insertBefore = /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    function (parent, ref, node) { parent.insertBefore(node, ref); };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} nodes
     * @return {?}
     */
    BrowserDomAdapter.prototype.insertAllBefore = /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} nodes
     * @return {?}
     */
    function (parent, ref, nodes) {
        nodes.forEach(function (n) { return parent.insertBefore(n, ref); });
    };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.insertAfter = /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    function (parent, ref, node) { parent.insertBefore(node, ref.nextSibling); };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setInnerHTML = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.innerHTML = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getText = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.textContent; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setText = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.textContent = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getValue = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.value; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setValue = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.value = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getChecked = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return el.checked; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setChecked = /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    function (el, value) { el.checked = value; };
    /**
     * @param {?} text
     * @return {?}
     */
    BrowserDomAdapter.prototype.createComment = /**
     * @param {?} text
     * @return {?}
     */
    function (text) { return this.getDefaultDocument().createComment(text); };
    /**
     * @param {?} html
     * @return {?}
     */
    BrowserDomAdapter.prototype.createTemplate = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        var /** @type {?} */ t = this.getDefaultDocument().createElement('template');
        t.innerHTML = html;
        return t;
    };
    /**
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createElement = /**
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    function (tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElement(tagName);
    };
    /**
     * @param {?} ns
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createElementNS = /**
     * @param {?} ns
     * @param {?} tagName
     * @param {?=} doc
     * @return {?}
     */
    function (ns, tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElementNS(ns, tagName);
    };
    /**
     * @param {?} text
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createTextNode = /**
     * @param {?} text
     * @param {?=} doc
     * @return {?}
     */
    function (text, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createTextNode(text);
    };
    /**
     * @param {?} attrName
     * @param {?} attrValue
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createScriptTag = /**
     * @param {?} attrName
     * @param {?} attrValue
     * @param {?=} doc
     * @return {?}
     */
    function (attrName, attrValue, doc) {
        doc = doc || this.getDefaultDocument();
        var /** @type {?} */ el = /** @type {?} */ (doc.createElement('SCRIPT'));
        el.setAttribute(attrName, attrValue);
        return el;
    };
    /**
     * @param {?} css
     * @param {?=} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.createStyleElement = /**
     * @param {?} css
     * @param {?=} doc
     * @return {?}
     */
    function (css, doc) {
        doc = doc || this.getDefaultDocument();
        var /** @type {?} */ style = /** @type {?} */ (doc.createElement('style'));
        this.appendChild(style, this.createTextNode(css, doc));
        return style;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.createShadowRoot = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).createShadowRoot(); };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getShadowRoot = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).shadowRoot; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getHost = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return (/** @type {?} */ (el)).host; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.clone = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.cloneNode(true); };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getElementsByClassName = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        return element.getElementsByClassName(name);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getElementsByTagName = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        return element.getElementsByTagName(name);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.classList = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { return Array.prototype.slice.call(element.classList, 0); };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    BrowserDomAdapter.prototype.addClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) { element.classList.add(className); };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) { element.classList.remove(className); };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasClass = /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function (element, className) {
        return element.classList.contains(className);
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?} styleValue
     * @return {?}
     */
    BrowserDomAdapter.prototype.setStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @param {?} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        element.style[styleName] = styleValue;
    };
    /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeStyle = /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    function (element, stylename) {
        // IE requires '' instead of null
        // see https://github.com/angular/angular/issues/7916
        element.style[stylename] = '';
    };
    /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    BrowserDomAdapter.prototype.getStyle = /**
     * @param {?} element
     * @param {?} stylename
     * @return {?}
     */
    function (element, stylename) { return element.style[stylename]; };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        var /** @type {?} */ value = this.getStyle(element, styleName) || '';
        return styleValue ? value == styleValue : value.length > 0;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.tagName = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { return element.tagName; };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.attributeMap = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ res = new Map();
        var /** @type {?} */ elAttrs = element.attributes;
        for (var /** @type {?} */ i = 0; i < elAttrs.length; i++) {
            var /** @type {?} */ attrib = elAttrs.item(i);
            res.set(attrib.name, attrib.value);
        }
        return res;
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.hasAttribute(attribute);
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} attribute
     * @return {?}
     */
    function (element, ns, attribute) {
        return element.hasAttributeNS(ns, attribute);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.getAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.getAttribute(attribute);
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    function (element, ns, name) {
        return element.getAttributeNS(ns, name);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setAttribute = /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (element, name, value) { element.setAttribute(name, value); };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (element, ns, name, value) {
        element.setAttributeNS(ns, name, value);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) { element.removeAttribute(attribute); };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.removeAttributeNS = /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    function (element, ns, name) {
        element.removeAttributeNS(ns, name);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.templateAwareRoot = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.createHtmlDocument = /**
     * @return {?}
     */
    function () {
        return document.implementation.createHTMLDocument('fakeTitle');
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getDefaultDocument = /**
     * @return {?}
     */
    function () { return document; };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getBoundingClientRect = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        try {
            return el.getBoundingClientRect();
        }
        catch (/** @type {?} */ e) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
    };
    /**
     * @param {?} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.getTitle = /**
     * @param {?} doc
     * @return {?}
     */
    function (doc) { return doc.title; };
    /**
     * @param {?} doc
     * @param {?} newTitle
     * @return {?}
     */
    BrowserDomAdapter.prototype.setTitle = /**
     * @param {?} doc
     * @param {?} newTitle
     * @return {?}
     */
    function (doc, newTitle) { doc.title = newTitle || ''; };
    /**
     * @param {?} n
     * @param {?} selector
     * @return {?}
     */
    BrowserDomAdapter.prototype.elementMatches = /**
     * @param {?} n
     * @param {?} selector
     * @return {?}
     */
    function (n, selector) {
        if (this.isElementNode(n)) {
            return n.matches && n.matches(selector) ||
                n.msMatchesSelector && n.msMatchesSelector(selector) ||
                n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
        }
        return false;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.isTemplateElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return this.isElementNode(el) && el.nodeName === 'TEMPLATE';
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isTextNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeType === Node.TEXT_NODE; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isCommentNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeType === Node.COMMENT_NODE; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isElementNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nodeType === Node.ELEMENT_NODE; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.hasShadowRoot = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return node.shadowRoot != null && node instanceof HTMLElement;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.isShadowRoot = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node instanceof DocumentFragment; };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.importIntoDoc = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return document.importNode(this.templateAwareRoot(node), true); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserDomAdapter.prototype.adoptNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return document.adoptNode(node); };
    /**
     * @param {?} el
     * @return {?}
     */
    BrowserDomAdapter.prototype.getHref = /**
     * @param {?} el
     * @return {?}
     */
    function (el) { return /** @type {?} */ ((el.getAttribute('href'))); };
    /**
     * @param {?} event
     * @return {?}
     */
    BrowserDomAdapter.prototype.getEventKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ key = event.key;
        if (key == null) {
            key = event.keyIdentifier;
            // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
            // Safari cf
            // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
            if (key == null) {
                return 'Unidentified';
            }
            if (key.startsWith('U+')) {
                key = String.fromCharCode(parseInt(key.substring(2), 16));
                if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                    // There is a bug in Chrome for numeric keypad keys:
                    // https://code.google.com/p/chromium/issues/detail?id=155654
                    // 1, 2, 3 ... are reported as A, B, C ...
                    key = (/** @type {?} */ (_chromeNumKeyPadMap))[key];
                }
            }
        }
        return _keyMap[key] || key;
    };
    /**
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    BrowserDomAdapter.prototype.getGlobalEventTarget = /**
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    function (doc, target) {
        if (target === 'window') {
            return window;
        }
        if (target === 'document') {
            return doc;
        }
        if (target === 'body') {
            return doc.body;
        }
        return null;
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getHistory = /**
     * @return {?}
     */
    function () { return window.history; };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getLocation = /**
     * @return {?}
     */
    function () { return window.location; };
    /**
     * @param {?} doc
     * @return {?}
     */
    BrowserDomAdapter.prototype.getBaseHref = /**
     * @param {?} doc
     * @return {?}
     */
    function (doc) {
        var /** @type {?} */ href = getBaseElementHref();
        return href == null ? null : relativePath(href);
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.resetBaseElement = /**
     * @return {?}
     */
    function () { baseElement = null; };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.getUserAgent = /**
     * @return {?}
     */
    function () { return window.navigator.userAgent; };
    /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setData = /**
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (element, name, value) {
        this.setAttribute(element, 'data-' + name, value);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getData = /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        return this.getAttribute(element, 'data-' + name);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserDomAdapter.prototype.getComputedStyle = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { return getComputedStyle(element); };
    // TODO(tbosch): move this into a separate environment class once we have it
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.supportsWebAnimation = /**
     * @return {?}
     */
    function () {
        return typeof (/** @type {?} */ (Element)).prototype['animate'] === 'function';
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.performanceNow = /**
     * @return {?}
     */
    function () {
        // performance.now() is not available in all browsers, see
        // http://caniuse.com/#search=performance.now
        return window.performance && window.performance.now ? window.performance.now() :
            new Date().getTime();
    };
    /**
     * @return {?}
     */
    BrowserDomAdapter.prototype.supportsCookies = /**
     * @return {?}
     */
    function () { return true; };
    /**
     * @param {?} name
     * @return {?}
     */
    BrowserDomAdapter.prototype.getCookie = /**
     * @param {?} name
     * @return {?}
     */
    function (name) { return ɵparseCookieValue(document.cookie, name); };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserDomAdapter.prototype.setCookie = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
        // not clear other cookies.
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    };
    return BrowserDomAdapter;
}(GenericBrowserDomAdapter));
var baseElement = null;
/**
 * @return {?}
 */
function getBaseElementHref() {
    if (!baseElement) {
        baseElement = /** @type {?} */ ((document.querySelector('base')));
        if (!baseElement) {
            return null;
        }
    }
    return baseElement.getAttribute('href');
}
// based on urlUtils.js in AngularJS 1
var urlParsingNode;
/**
 * @param {?} url
 * @return {?}
 */
function relativePath(url) {
    if (!urlParsingNode) {
        urlParsingNode = document.createElement('a');
    }
    urlParsingNode.setAttribute('href', url);
    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
        '/' + urlParsingNode.pathname;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
 *
 * Note: Document might not be available in the Application Context when Application and Rendering
 * Contexts are not the same (e.g. when running the application into a Web Worker).
 *
 * @deprecated import from `\@angular/common` instead.
 */
var DOCUMENT$1 = DOCUMENT;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function supportsState() {
    return !!window.history.pushState;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {\@link Location}.
 */
var BrowserPlatformLocation = /** @class */ (function (_super) {
    __extends$7(BrowserPlatformLocation, _super);
    function BrowserPlatformLocation(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._init();
        return _this;
    }
    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    BrowserPlatformLocation.prototype._init = /**
     * \@internal
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this)).location = getDOM().getLocation();
        this._history = getDOM().getHistory();
    };
    /**
     * @return {?}
     */
    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((getDOM().getBaseHref(this._doc))); };
    /**
     * @param {?} fn
     * @return {?}
     */
    BrowserPlatformLocation.prototype.onPopState = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BrowserPlatformLocation.prototype.onHashChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
    };
    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
        get: /**
         * @return {?}
         */
        function () { return this.location.pathname; },
        set: /**
         * @param {?} newPath
         * @return {?}
         */
        function (newPath) { this.location.pathname = newPath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
        get: /**
         * @return {?}
         */
        function () { return this.location.search; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
        get: /**
         * @return {?}
         */
        function () { return this.location.hash; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    BrowserPlatformLocation.prototype.pushState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    function (state, title, url) {
        if (supportsState()) {
            this._history.pushState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    BrowserPlatformLocation.prototype.replaceState = /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    function (state, title, url) {
        if (supportsState()) {
            this._history.replaceState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    /**
     * @return {?}
     */
    BrowserPlatformLocation.prototype.forward = /**
     * @return {?}
     */
    function () { this._history.forward(); };
    /**
     * @return {?}
     */
    BrowserPlatformLocation.prototype.back = /**
     * @return {?}
     */
    function () { this._history.back(); };
    BrowserPlatformLocation.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BrowserPlatformLocation.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return BrowserPlatformLocation;
}(PlatformLocation));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */
var TRANSITION_ID = new InjectionToken('TRANSITION_ID');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var BrowserGetTestability = /** @class */ (function () {
    function BrowserGetTestability() {
    }
    /**
     * @return {?}
     */
    BrowserGetTestability.init = /**
     * @return {?}
     */
    function () { setTestabilityGetter(new BrowserGetTestability()); };
    /**
     * @param {?} registry
     * @return {?}
     */
    BrowserGetTestability.prototype.addToWindow = /**
     * @param {?} registry
     * @return {?}
     */
    function (registry) {
        ɵglobal['getAngularTestability'] = function (elem, findInAncestors) {
            if (findInAncestors === void 0) { findInAncestors = true; }
            var /** @type {?} */ testability = registry.findTestabilityInTree(elem, findInAncestors);
            if (testability == null) {
                throw new Error('Could not find testability for element.');
            }
            return testability;
        };
        ɵglobal['getAllAngularTestabilities'] = function () { return registry.getAllTestabilities(); };
        ɵglobal['getAllAngularRootElements'] = function () { return registry.getAllRootElements(); };
        var /** @type {?} */ whenAllStable = function (callback /** TODO #9100 */) {
            var /** @type {?} */ testabilities = ɵglobal['getAllAngularTestabilities']();
            var /** @type {?} */ count = testabilities.length;
            var /** @type {?} */ didWork = false;
            var /** @type {?} */ decrement = function (didWork_ /** TODO #9100 */) {
                didWork = didWork || didWork_;
                count--;
                if (count == 0) {
                    callback(didWork);
                }
            };
            testabilities.forEach(function (testability /** TODO #9100 */) {
                testability.whenStable(decrement);
            });
        };
        if (!ɵglobal['frameworkStabilizers']) {
            ɵglobal['frameworkStabilizers'] = [];
        }
        ɵglobal['frameworkStabilizers'].push(whenAllStable);
    };
    /**
     * @param {?} registry
     * @param {?} elem
     * @param {?} findInAncestors
     * @return {?}
     */
    BrowserGetTestability.prototype.findTestabilityInTree = /**
     * @param {?} registry
     * @param {?} elem
     * @param {?} findInAncestors
     * @return {?}
     */
    function (registry, elem, findInAncestors) {
        if (elem == null) {
            return null;
        }
        var /** @type {?} */ t = registry.getTestability(elem);
        if (t != null) {
            return t;
        }
        else if (!findInAncestors) {
            return null;
        }
        if (getDOM().isShadowRoot(elem)) {
            return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
        }
        return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
    };
    return BrowserGetTestability;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} input
 * @return {?}
 */

/**
 * @param {?} input
 * @return {?}
 */

/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param {?} name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param {?} value The value to export.
 * @return {?}
 */
function exportNgVar(name, value) {
    if (typeof COMPILED === 'undefined' || !COMPILED) {
        // Note: we can't export `ng` when using closure enhanced optimization as:
        // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
        // - we can't declare a closure extern as the namespace `ng` is already used within Google
        //   for typings for angularJS (via `goog.provide('ng....')`).
        var /** @type {?} */ ng = ɵglobal['ng'] = (/** @type {?} */ (ɵglobal['ng'])) || {};
        ng[name] = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CORE_TOKENS = {
    'ApplicationRef': ApplicationRef,
    'NgZone': NgZone,
};
var INSPECT_GLOBAL_NAME = 'probe';
var CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
/**
 * Returns a {\@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 * @param {?} element
 * @return {?}
 */
function inspectNativeElement(element) {
    return getDebugNode(element);
}
/**
 * @param {?} coreTokens
 * @return {?}
 */
function _createNgProbe(coreTokens) {
    exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
    exportNgVar(CORE_TOKENS_GLOBAL_NAME, __assign$1({}, CORE_TOKENS, _ngProbeTokensToMap(coreTokens || [])));
    return function () { return inspectNativeElement; };
}
/**
 * @param {?} tokens
 * @return {?}
 */
function _ngProbeTokensToMap(tokens) {
    return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
}
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
var ELEMENT_PROBE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: _createNgProbe,
        deps: [
            [NgProbeToken, new Optional()],
        ],
        multi: true,
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@stable
 */
var EVENT_MANAGER_PLUGINS = new InjectionToken('EventManagerPlugins');
/**
 * @abstract
 */
var EventManagerPlugin = /** @class */ (function () {
    function EventManagerPlugin(_doc) {
        this._doc = _doc;
    }
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    EventManagerPlugin.prototype.addGlobalEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var /** @type {?} */ target = getDOM().getGlobalEventTarget(this._doc, element);
        if (!target) {
            throw new Error("Unsupported event target " + target + " for event " + eventName);
        }
        return this.addEventListener(target, eventName, handler);
    };
    return EventManagerPlugin;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SharedStylesHost = /** @class */ (function () {
    function SharedStylesHost() {
        /**
         * \@internal
         */
        this._stylesSet = new Set();
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    SharedStylesHost.prototype.addStyles = /**
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        var /** @type {?} */ additions = new Set();
        styles.forEach(function (style) {
            if (!_this._stylesSet.has(style)) {
                _this._stylesSet.add(style);
                additions.add(style);
            }
        });
        this.onStylesAdded(additions);
    };
    /**
     * @param {?} additions
     * @return {?}
     */
    SharedStylesHost.prototype.onStylesAdded = /**
     * @param {?} additions
     * @return {?}
     */
    function (additions) { };
    /**
     * @return {?}
     */
    SharedStylesHost.prototype.getAllStyles = /**
     * @return {?}
     */
    function () { return Array.from(this._stylesSet); };
    SharedStylesHost.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SharedStylesHost.ctorParameters = function () { return []; };
    return SharedStylesHost;
}());
var DomSharedStylesHost = /** @class */ (function (_super) {
    __extends$7(DomSharedStylesHost, _super);
    function DomSharedStylesHost(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._hostNodes = new Set();
        _this._styleNodes = new Set();
        _this._hostNodes.add(_doc.head);
        return _this;
    }
    /**
     * @param {?} styles
     * @param {?} host
     * @return {?}
     */
    DomSharedStylesHost.prototype._addStylesToHost = /**
     * @param {?} styles
     * @param {?} host
     * @return {?}
     */
    function (styles, host) {
        var _this = this;
        styles.forEach(function (style) {
            var /** @type {?} */ styleEl = _this._doc.createElement('style');
            styleEl.textContent = style;
            _this._styleNodes.add(host.appendChild(styleEl));
        });
    };
    /**
     * @param {?} hostNode
     * @return {?}
     */
    DomSharedStylesHost.prototype.addHost = /**
     * @param {?} hostNode
     * @return {?}
     */
    function (hostNode) {
        this._addStylesToHost(this._stylesSet, hostNode);
        this._hostNodes.add(hostNode);
    };
    /**
     * @param {?} hostNode
     * @return {?}
     */
    DomSharedStylesHost.prototype.removeHost = /**
     * @param {?} hostNode
     * @return {?}
     */
    function (hostNode) { this._hostNodes.delete(hostNode); };
    /**
     * @param {?} additions
     * @return {?}
     */
    DomSharedStylesHost.prototype.onStylesAdded = /**
     * @param {?} additions
     * @return {?}
     */
    function (additions) {
        var _this = this;
        this._hostNodes.forEach(function (hostNode) { return _this._addStylesToHost(additions, hostNode); });
    };
    /**
     * @return {?}
     */
    DomSharedStylesHost.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this._styleNodes.forEach(function (styleNode) { return getDOM().remove(styleNode); }); };
    DomSharedStylesHost.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DomSharedStylesHost.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return DomSharedStylesHost;
}(SharedStylesHost));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NAMESPACE_URIS = {
    'svg': 'http://www.w3.org/2000/svg',
    'xhtml': 'http://www.w3.org/1999/xhtml',
    'xlink': 'http://www.w3.org/1999/xlink',
    'xml': 'http://www.w3.org/XML/1998/namespace',
    'xmlns': 'http://www.w3.org/2000/xmlns/',
};
var COMPONENT_REGEX = /%COMP%/g;
var COMPONENT_VARIABLE = '%COMP%';
var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
/**
 * @param {?} componentShortId
 * @return {?}
 */
function shimContentAttribute(componentShortId) {
    return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
/**
 * @param {?} componentShortId
 * @return {?}
 */
function shimHostAttribute(componentShortId) {
    return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
/**
 * @param {?} compId
 * @param {?} styles
 * @param {?} target
 * @return {?}
 */
function flattenStyles(compId, styles, target) {
    for (var /** @type {?} */ i = 0; i < styles.length; i++) {
        var /** @type {?} */ style = styles[i];
        if (Array.isArray(style)) {
            flattenStyles(compId, style, target);
        }
        else {
            style = style.replace(COMPONENT_REGEX, compId);
            target.push(style);
        }
    }
    return target;
}
/**
 * @param {?} eventHandler
 * @return {?}
 */
function decoratePreventDefault(eventHandler) {
    return function (event) {
        var /** @type {?} */ allowDefaultBehavior = eventHandler(event);
        if (allowDefaultBehavior === false) {
            // TODO(tbosch): move preventDefault into event plugins...
            event.preventDefault();
            event.returnValue = false;
        }
    };
}
var DefaultDomRenderer2 = /** @class */ (function () {
    function DefaultDomRenderer2(eventManager) {
        this.eventManager = eventManager;
        this.data = Object.create(null);
    }
    /**
     * @return {?}
     */
    DefaultDomRenderer2.prototype.destroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    DefaultDomRenderer2.prototype.createElement = /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    function (name, namespace) {
        if (namespace) {
            return document.createElementNS(NAMESPACE_URIS[namespace], name);
        }
        return document.createElement(name);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.createComment = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return document.createComment(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.createText = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return document.createTextNode(value); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    DefaultDomRenderer2.prototype.appendChild = /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    function (parent, newChild) { parent.appendChild(newChild); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    DefaultDomRenderer2.prototype.insertBefore = /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    function (parent, newChild, refChild) {
        if (parent) {
            parent.insertBefore(newChild, refChild);
        }
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeChild = /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    function (parent, oldChild) {
        if (parent) {
            parent.removeChild(oldChild);
        }
    };
    /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    DefaultDomRenderer2.prototype.selectRootElement = /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    function (selectorOrNode) {
        var /** @type {?} */ el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
            selectorOrNode;
        if (!el) {
            throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
        }
        el.textContent = '';
        return el;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DefaultDomRenderer2.prototype.parentNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.parentNode; };
    /**
     * @param {?} node
     * @return {?}
     */
    DefaultDomRenderer2.prototype.nextSibling = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node.nextSibling; };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setAttribute = /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    function (el, name, value, namespace) {
        if (namespace) {
            name = namespace + ":" + name;
            var /** @type {?} */ namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.setAttributeNS(namespaceUri, name, value);
            }
            else {
                el.setAttribute(name, value);
            }
        }
        else {
            el.setAttribute(name, value);
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeAttribute = /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    function (el, name, namespace) {
        if (namespace) {
            var /** @type {?} */ namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.removeAttributeNS(namespaceUri, name);
            }
            else {
                el.removeAttribute(namespace + ":" + name);
            }
        }
        else {
            el.removeAttribute(name);
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    DefaultDomRenderer2.prototype.addClass = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) { el.classList.add(name); };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeClass = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) { el.classList.remove(name); };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setStyle = /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    function (el, style, value, flags) {
        if (flags & RendererStyleFlags2.DashCase) {
            el.style.setProperty(style, value, !!(flags & RendererStyleFlags2.Important) ? 'important' : '');
        }
        else {
            el.style[style] = value;
        }
    };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    DefaultDomRenderer2.prototype.removeStyle = /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    function (el, style, flags) {
        if (flags & RendererStyleFlags2.DashCase) {
            el.style.removeProperty(style);
        }
        else {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            el.style[style] = '';
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setProperty = /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (el, name, value) {
        checkNoSyntheticProp(name, 'property');
        el[name] = value;
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    DefaultDomRenderer2.prototype.setValue = /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) { node.nodeValue = value; };
    /**
     * @param {?} target
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    DefaultDomRenderer2.prototype.listen = /**
     * @param {?} target
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    function (target, event, callback) {
        checkNoSyntheticProp(event, 'listener');
        if (typeof target === 'string') {
            return /** @type {?} */ (this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback)));
        }
        return /** @type {?} */ ((this.eventManager.addEventListener(target, event, decoratePreventDefault(callback))));
    };
    return DefaultDomRenderer2;
}());
var AT_CHARCODE = '@'.charCodeAt(0);
/**
 * @param {?} name
 * @param {?} nameKind
 * @return {?}
 */
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
    }
}
var EmulatedEncapsulationDomRenderer2 = /** @class */ (function (_super) {
    __extends$7(EmulatedEncapsulationDomRenderer2, _super);
    function EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, component) {
        var _this = _super.call(this, eventManager) || this;
        _this.component = component;
        var /** @type {?} */ styles = flattenStyles(component.id, component.styles, []);
        sharedStylesHost.addStyles(styles);
        _this.contentAttr = shimContentAttribute(component.id);
        _this.hostAttr = shimHostAttribute(component.id);
        return _this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    EmulatedEncapsulationDomRenderer2.prototype.applyToHost = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { _super.prototype.setAttribute.call(this, element, this.hostAttr, ''); };
    /**
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    EmulatedEncapsulationDomRenderer2.prototype.createElement = /**
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    function (parent, name) {
        var /** @type {?} */ el = _super.prototype.createElement.call(this, parent, name);
        _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
        return el;
    };
    return EmulatedEncapsulationDomRenderer2;
}(DefaultDomRenderer2));
var ShadowDomRenderer = /** @class */ (function (_super) {
    __extends$7(ShadowDomRenderer, _super);
    function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
        var _this = _super.call(this, eventManager) || this;
        _this.sharedStylesHost = sharedStylesHost;
        _this.hostEl = hostEl;
        _this.component = component;
        _this.shadowRoot = (/** @type {?} */ (hostEl)).createShadowRoot();
        _this.sharedStylesHost.addHost(_this.shadowRoot);
        var /** @type {?} */ styles = flattenStyles(component.id, component.styles, []);
        for (var /** @type {?} */ i = 0; i < styles.length; i++) {
            var /** @type {?} */ styleEl = document.createElement('style');
            styleEl.textContent = styles[i];
            _this.shadowRoot.appendChild(styleEl);
        }
        return _this;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    ShadowDomRenderer.prototype.nodeOrShadowRoot = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { return node === this.hostEl ? this.shadowRoot : node; };
    /**
     * @return {?}
     */
    ShadowDomRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () { this.sharedStylesHost.removeHost(this.shadowRoot); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    ShadowDomRenderer.prototype.appendChild = /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    function (parent, newChild) {
        return _super.prototype.appendChild.call(this, this.nodeOrShadowRoot(parent), newChild);
    };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    ShadowDomRenderer.prototype.insertBefore = /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    function (parent, newChild, refChild) {
        return _super.prototype.insertBefore.call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    ShadowDomRenderer.prototype.removeChild = /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    function (parent, oldChild) {
        return _super.prototype.removeChild.call(this, this.nodeOrShadowRoot(parent), oldChild);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ShadowDomRenderer.prototype.parentNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.nodeOrShadowRoot(_super.prototype.parentNode.call(this, this.nodeOrShadowRoot(node)));
    };
    return ShadowDomRenderer;
}(DefaultDomRenderer2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ɵ0 = function (v) {
    return '__zone_symbol__' + v;
};
/**
 * Detect if Zone is present. If it is then use simple zone aware 'addEventListener'
 * since Angular can do much more
 * efficient bookkeeping than Zone can, because we have additional information. This speeds up
 * addEventListener by 3x.
 */
var __symbol__ = (typeof Zone !== 'undefined') && (/** @type {?} */ (Zone))['__symbol__'] || ɵ0;
var ADD_EVENT_LISTENER = __symbol__('addEventListener');
var REMOVE_EVENT_LISTENER = __symbol__('removeEventListener');
var symbolNames = {};
var FALSE = 'FALSE';
var ANGULAR = 'ANGULAR';
var NATIVE_ADD_LISTENER = 'addEventListener';
var NATIVE_REMOVE_LISTENER = 'removeEventListener';
// use the same symbol string which is used in zone.js
var stopSymbol = '__zone_symbol__propagationStopped';
var stopMethodSymbol = '__zone_symbol__stopImmediatePropagation';
var blackListedEvents = (typeof Zone !== 'undefined') && (/** @type {?} */ (Zone))[__symbol__('BLACK_LISTED_EVENTS')];
var blackListedMap;
if (blackListedEvents) {
    blackListedMap = {};
    blackListedEvents.forEach(function (eventName) { blackListedMap[eventName] = eventName; });
}
var isBlackListedEvent = function (eventName) {
    if (!blackListedMap) {
        return false;
    }
    return blackListedMap.hasOwnProperty(eventName);
};
// a global listener to handle all dom event,
// so we do not need to create a closure everytime
var globalListener = function (event) {
    var /** @type {?} */ symbolName = symbolNames[event.type];
    if (!symbolName) {
        return;
    }
    var /** @type {?} */ taskDatas = this[symbolName];
    if (!taskDatas) {
        return;
    }
    var /** @type {?} */ args = [event];
    if (taskDatas.length === 1) {
        // if taskDatas only have one element, just invoke it
        var /** @type {?} */ taskData = taskDatas[0];
        if (taskData.zone !== Zone.current) {
            // only use Zone.run when Zone.current not equals to stored zone
            return taskData.zone.run(taskData.handler, this, args);
        }
        else {
            return taskData.handler.apply(this, args);
        }
    }
    else {
        // copy tasks as a snapshot to avoid event handlers remove
        // itself or others
        var /** @type {?} */ copiedTasks = taskDatas.slice();
        for (var /** @type {?} */ i = 0; i < copiedTasks.length; i++) {
            // if other listener call event.stopImmediatePropagation
            // just break
            if ((/** @type {?} */ (event))[stopSymbol] === true) {
                break;
            }
            var /** @type {?} */ taskData = copiedTasks[i];
            if (taskData.zone !== Zone.current) {
                // only use Zone.run when Zone.current not equals to stored zone
                taskData.zone.run(taskData.handler, this, args);
            }
            else {
                taskData.handler.apply(this, args);
            }
        }
    }
};
var DomEventsPlugin = /** @class */ (function (_super) {
    __extends$7(DomEventsPlugin, _super);
    function DomEventsPlugin(doc, ngZone) {
        var _this = _super.call(this, doc) || this;
        _this.ngZone = ngZone;
        _this.patchEvent();
        return _this;
    }
    /**
     * @return {?}
     */
    DomEventsPlugin.prototype.patchEvent = /**
     * @return {?}
     */
    function () {
        if (!Event || !Event.prototype) {
            return;
        }
        if ((/** @type {?} */ (Event.prototype))[stopMethodSymbol]) {
            // already patched by zone.js
            return;
        }
        var /** @type {?} */ delegate = (/** @type {?} */ (Event.prototype))[stopMethodSymbol] =
            Event.prototype.stopImmediatePropagation;
        Event.prototype.stopImmediatePropagation = function () {
            if (this) {
                this[stopSymbol] = true;
            }
            // should call native delegate in case
            // in some enviroment part of the application
            // will not use the patched Event
            delegate && delegate.apply(this, arguments);
        };
    };
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    /**
     * @param {?} eventName
     * @return {?}
     */
    DomEventsPlugin.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return true; };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    DomEventsPlugin.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var _this = this;
        var /** @type {?} */ zoneJsLoaded = element[ADD_EVENT_LISTENER];
        var /** @type {?} */ callback = /** @type {?} */ (handler);
        // if zonejs is loaded and current zone is not ngZone
        // we keep Zone.current on target for later restoration.
        if (zoneJsLoaded && (!NgZone.isInAngularZone() || isBlackListedEvent(eventName))) {
            var /** @type {?} */ symbolName = symbolNames[eventName];
            if (!symbolName) {
                symbolName = symbolNames[eventName] = __symbol__(ANGULAR + eventName + FALSE);
            }
            var /** @type {?} */ taskDatas = (/** @type {?} */ (element))[symbolName];
            var /** @type {?} */ globalListenerRegistered = taskDatas && taskDatas.length > 0;
            if (!taskDatas) {
                taskDatas = (/** @type {?} */ (element))[symbolName] = [];
            }
            var /** @type {?} */ zone = isBlackListedEvent(eventName) ? Zone.root : Zone.current;
            if (taskDatas.length === 0) {
                taskDatas.push({ zone: zone, handler: callback });
            }
            else {
                var /** @type {?} */ callbackRegistered = false;
                for (var /** @type {?} */ i = 0; i < taskDatas.length; i++) {
                    if (taskDatas[i].handler === callback) {
                        callbackRegistered = true;
                        break;
                    }
                }
                if (!callbackRegistered) {
                    taskDatas.push({ zone: zone, handler: callback });
                }
            }
            if (!globalListenerRegistered) {
                element[ADD_EVENT_LISTENER](eventName, globalListener, false);
            }
        }
        else {
            element[NATIVE_ADD_LISTENER](eventName, callback, false);
        }
        return function () { return _this.removeEventListener(element, eventName, callback); };
    };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    DomEventsPlugin.prototype.removeEventListener = /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    function (target, eventName, callback) {
        var /** @type {?} */ underlyingRemove = target[REMOVE_EVENT_LISTENER];
        // zone.js not loaded, use native removeEventListener
        if (!underlyingRemove) {
            return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
        var /** @type {?} */ symbolName = symbolNames[eventName];
        var /** @type {?} */ taskDatas = symbolName && target[symbolName];
        if (!taskDatas) {
            // addEventListener not using patched version
            // just call native removeEventListener
            return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
        // fix issue 20532, should be able to remove
        // listener which was added inside of ngZone
        var /** @type {?} */ found = false;
        for (var /** @type {?} */ i = 0; i < taskDatas.length; i++) {
            // remove listener from taskDatas if the callback equals
            if (taskDatas[i].handler === callback) {
                found = true;
                taskDatas.splice(i, 1);
                break;
            }
        }
        if (found) {
            if (taskDatas.length === 0) {
                // all listeners are removed, we can remove the globalListener from target
                underlyingRemove.apply(target, [eventName, globalListener, false]);
            }
        }
        else {
            // not found in taskDatas, the callback may be added inside of ngZone
            // use native remove listener to remove the calback
            target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
    };
    DomEventsPlugin.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DomEventsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] },] },
        { type: NgZone, },
    ]; };
    return DomEventsPlugin;
}(EventManagerPlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var EVENT_NAMES = {
    // pan
    'pan': true,
    'panstart': true,
    'panmove': true,
    'panend': true,
    'pancancel': true,
    'panleft': true,
    'panright': true,
    'panup': true,
    'pandown': true,
    // pinch
    'pinch': true,
    'pinchstart': true,
    'pinchmove': true,
    'pinchend': true,
    'pinchcancel': true,
    'pinchin': true,
    'pinchout': true,
    // press
    'press': true,
    'pressup': true,
    // rotate
    'rotate': true,
    'rotatestart': true,
    'rotatemove': true,
    'rotateend': true,
    'rotatecancel': true,
    // swipe
    'swipe': true,
    'swipeleft': true,
    'swiperight': true,
    'swipeup': true,
    'swipedown': true,
    // tap
    'tap': true,
};
/**
 * A DI token that you can use to provide{\@link HammerGestureConfig} to Angular. Use it to configure
 * Hammer gestures.
 *
 * \@experimental
 */
var HAMMER_GESTURE_CONFIG = new InjectionToken('HammerGestureConfig');
/**
 * @record
 */

/**
 * \@experimental
 */
var HammerGestureConfig = /** @class */ (function () {
    function HammerGestureConfig() {
        this.events = [];
        this.overrides = {};
    }
    /**
     * @param {?} element
     * @return {?}
     */
    HammerGestureConfig.prototype.buildHammer = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ mc = new Hammer(element);
        mc.get('pinch').set({ enable: true });
        mc.get('rotate').set({ enable: true });
        for (var /** @type {?} */ eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    };
    HammerGestureConfig.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HammerGestureConfig.ctorParameters = function () { return []; };
    return HammerGestureConfig;
}());
var HammerGesturesPlugin = /** @class */ (function (_super) {
    __extends$7(HammerGesturesPlugin, _super);
    function HammerGesturesPlugin(doc, _config) {
        var _this = _super.call(this, doc) || this;
        _this._config = _config;
        return _this;
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    HammerGesturesPlugin.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
            return false;
        }
        if (!(/** @type {?} */ (window)).Hammer) {
            throw new Error("Hammer.js is not loaded, can not bind " + eventName + " event");
        }
        return true;
    };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    HammerGesturesPlugin.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var _this = this;
        var /** @type {?} */ zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        return zone.runOutsideAngular(function () {
            // Creating the manager bind events, must be done outside of angular
            var /** @type {?} */ mc = _this._config.buildHammer(element);
            var /** @type {?} */ callback = function (eventObj) {
                zone.runGuarded(function () { handler(eventObj); });
            };
            mc.on(eventName, callback);
            return function () { return mc.off(eventName, callback); };
        });
    };
    /**
     * @param {?} eventName
     * @return {?}
     */
    HammerGesturesPlugin.prototype.isCustomEvent = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return this._config.events.indexOf(eventName) > -1; };
    HammerGesturesPlugin.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HammerGesturesPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] },] },
        { type: HammerGestureConfig, decorators: [{ type: Inject, args: [HAMMER_GESTURE_CONFIG,] },] },
    ]; };
    return HammerGesturesPlugin;
}(EventManagerPlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
var ɵ0$1 = function (event) { return event.altKey; };
var ɵ1$1 = function (event) { return event.ctrlKey; };
var ɵ2$1 = function (event) { return event.metaKey; };
var ɵ3 = function (event) { return event.shiftKey; };
var MODIFIER_KEY_GETTERS = {
    'alt': ɵ0$1,
    'control': ɵ1$1,
    'meta': ɵ2$1,
    'shift': ɵ3
};
/**
 * \@experimental
 */
var KeyEventsPlugin = /** @class */ (function (_super) {
    __extends$7(KeyEventsPlugin, _super);
    function KeyEventsPlugin(doc) {
        return _super.call(this, doc) || this;
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    KeyEventsPlugin.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return KeyEventsPlugin.parseEventName(eventName) != null; };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    KeyEventsPlugin.prototype.addEventListener = /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} handler
     * @return {?}
     */
    function (element, eventName, handler) {
        var /** @type {?} */ parsedEvent = /** @type {?} */ ((KeyEventsPlugin.parseEventName(eventName)));
        var /** @type {?} */ outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(function () {
            return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
        });
    };
    /**
     * @param {?} eventName
     * @return {?}
     */
    KeyEventsPlugin.parseEventName = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        var /** @type {?} */ parts = eventName.toLowerCase().split('.');
        var /** @type {?} */ domEventName = parts.shift();
        if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
            return null;
        }
        var /** @type {?} */ key = KeyEventsPlugin._normalizeKey(/** @type {?} */ ((parts.pop())));
        var /** @type {?} */ fullKey = '';
        MODIFIER_KEYS.forEach(function (modifierName) {
            var /** @type {?} */ index = parts.indexOf(modifierName);
            if (index > -1) {
                parts.splice(index, 1);
                fullKey += modifierName + '.';
            }
        });
        fullKey += key;
        if (parts.length != 0 || key.length === 0) {
            // returning null instead of throwing to let another plugin process the event
            return null;
        }
        var /** @type {?} */ result = {};
        result['domEventName'] = domEventName;
        result['fullKey'] = fullKey;
        return result;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    KeyEventsPlugin.getEventFullKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ fullKey = '';
        var /** @type {?} */ key = getDOM().getEventKey(event);
        key = key.toLowerCase();
        if (key === ' ') {
            key = 'space'; // for readability
        }
        else if (key === '.') {
            key = 'dot'; // because '.' is used as a separator in event names
        }
        MODIFIER_KEYS.forEach(function (modifierName) {
            if (modifierName != key) {
                var /** @type {?} */ modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                if (modifierGetter(event)) {
                    fullKey += modifierName + '.';
                }
            }
        });
        fullKey += key;
        return fullKey;
    };
    /**
     * @param {?} fullKey
     * @param {?} handler
     * @param {?} zone
     * @return {?}
     */
    KeyEventsPlugin.eventCallback = /**
     * @param {?} fullKey
     * @param {?} handler
     * @param {?} zone
     * @return {?}
     */
    function (fullKey, handler, zone) {
        return function (event /** TODO #9100 */) {
            if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
                zone.runGuarded(function () { return handler(event); });
            }
        };
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} keyName
     * @return {?}
     */
    KeyEventsPlugin._normalizeKey = /**
     * \@internal
     * @param {?} keyName
     * @return {?}
     */
    function (keyName) {
        // TODO: switch to a Map if the mapping grows too much
        switch (keyName) {
            case 'esc':
                return 'escape';
            default:
                return keyName;
        }
    };
    KeyEventsPlugin.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    KeyEventsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return KeyEventsPlugin;
}(EventManagerPlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * This regular expression matches a subset of URLs that will not cause script
 * execution if used in URL context within a HTML document. Specifically, this
 * regular expression matches if (comment from here on and regex copied from
 * Soy's EscapingConventions):
 * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
 * (2) or no protocol.  A protocol must be followed by a colon. The below
 *     allows that by allowing colons only after one of the characters [/?#].
 *     A colon after a hash (#) must be in the fragment.
 *     Otherwise, a colon after a (?) must be in a query.
 *     Otherwise, a colon after a single solidus (/) must be in a path.
 *     Otherwise, a colon after a double solidus (//) must be in the authority
 *     (before port).
 *
 * The pattern disallows &, used in HTML entity declarations before
 * one of the characters in [/?#]. This disallows HTML entities used in the
 * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
 * It also disallows HTML entities in the first path part of a relative path,
 * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
 * that. More importantly, it disallows masking of a colon,
 * e.g. "javascript&#58;...".
 *
 * This regular expression was taken from the Closure sanitization library.
 */
var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 */
var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
 * @param {?} url
 * @return {?}
 */
function sanitizeUrl(url) {
    url = String(url);
    if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN))
        return url;
    if (isDevMode()) {
        getDOM().log("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)");
    }
    return 'unsafe:' + url;
}
/**
 * @param {?} srcset
 * @return {?}
 */
function sanitizeSrcset(srcset) {
    srcset = String(srcset);
    return srcset.split(',').map(function (srcset) { return sanitizeUrl(srcset.trim()); }).join(', ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A <body> element that can be safely used to parse untrusted HTML. Lazily initialized below.
 */
var inertElement = null;
/**
 * Lazily initialized to make sure the DOM adapter gets set before use.
 */
var DOM = /** @type {?} */ ((null));
/**
 * Returns an HTML element that is guaranteed to not execute code when creating elements in it.
 * @return {?}
 */
function getInertElement() {
    if (inertElement)
        return inertElement;
    DOM = getDOM();
    // Prefer using <template> element if supported.
    var /** @type {?} */ templateEl = DOM.createElement('template');
    if ('content' in templateEl)
        return templateEl;
    var /** @type {?} */ doc = DOM.createHtmlDocument();
    inertElement = DOM.querySelector(doc, 'body');
    if (inertElement == null) {
        // usually there should be only one body element in the document, but IE doesn't have any, so we
        // need to create one.
        var /** @type {?} */ html = DOM.createElement('html', doc);
        inertElement = DOM.createElement('body', doc);
        DOM.appendChild(html, inertElement);
        DOM.appendChild(doc, html);
    }
    return inertElement;
}
/**
 * @param {?} tags
 * @return {?}
 */
function tagSet(tags) {
    var /** @type {?} */ res = {};
    for (var _i = 0, _a = tags.split(','); _i < _a.length; _i++) {
        var t = _a[_i];
        res[t] = true;
    }
    return res;
}
/**
 * @param {...?} sets
 * @return {?}
 */
function merge() {
    var sets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sets[_i] = arguments[_i];
    }
    var /** @type {?} */ res = {};
    for (var _a = 0, sets_1 = sets; _a < sets_1.length; _a++) {
        var s = sets_1[_a];
        for (var /** @type {?} */ v in s) {
            if (s.hasOwnProperty(v))
                res[v] = true;
        }
    }
    return res;
}
// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements
// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
// Safe Block Elements - HTML5
var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
    'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
    'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
// Inline Elements - HTML5
var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
    'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
    'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
// Attributes that have href and hence need to be sanitized
var URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
// Attributes that have special href set hence need to be sanitized
var SRCSET_ATTRS = tagSet('srcset');
var HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
    'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
    'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
    'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
    'valign,value,vspace,width');
// NB: This currently consciously doesn't support SVG. SVG sanitization has had several security
// issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
// innerHTML is required, SVG attributes should be added here.
// NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
// can be sanitized, but they increase security surface area without a legitimate use case, so they
// are left out here.
var VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
/**
 * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
 * attributes.
 */
var SanitizingHtmlSerializer = /** @class */ (function () {
    function SanitizingHtmlSerializer() {
        this.sanitizedSomething = false;
        this.buf = [];
    }
    /**
     * @param {?} el
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.sanitizeChildren = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
        // However this code never accesses properties off of `document` before deleting its contents
        // again, so it shouldn't be vulnerable to DOM clobbering.
        var /** @type {?} */ current = /** @type {?} */ ((el.firstChild));
        while (current) {
            if (DOM.isElementNode(current)) {
                this.startElement(/** @type {?} */ (current));
            }
            else if (DOM.isTextNode(current)) {
                this.chars(/** @type {?} */ ((DOM.nodeValue(current))));
            }
            else {
                // Strip non-element, non-text nodes.
                this.sanitizedSomething = true;
            }
            if (DOM.firstChild(current)) {
                current = /** @type {?} */ ((DOM.firstChild(current)));
                continue;
            }
            while (current) {
                // Leaving the element. Walk up and to the right, closing tags as we go.
                if (DOM.isElementNode(current)) {
                    this.endElement(/** @type {?} */ (current));
                }
                var /** @type {?} */ next = checkClobberedElement(current, /** @type {?} */ ((DOM.nextSibling(current))));
                if (next) {
                    current = next;
                    break;
                }
                current = checkClobberedElement(current, /** @type {?} */ ((DOM.parentElement(current))));
            }
        }
        return this.buf.join('');
    };
    /**
     * @param {?} element
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.startElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        var /** @type {?} */ tagName = DOM.nodeName(element).toLowerCase();
        if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
            this.sanitizedSomething = true;
            return;
        }
        this.buf.push('<');
        this.buf.push(tagName);
        DOM.attributeMap(element).forEach(function (value, attrName) {
            var /** @type {?} */ lower = attrName.toLowerCase();
            if (!VALID_ATTRS.hasOwnProperty(lower)) {
                _this.sanitizedSomething = true;
                return;
            }
            // TODO(martinprobst): Special case image URIs for data:image/...
            if (URI_ATTRS[lower])
                value = sanitizeUrl(value);
            if (SRCSET_ATTRS[lower])
                value = sanitizeSrcset(value);
            _this.buf.push(' ');
            _this.buf.push(attrName);
            _this.buf.push('="');
            _this.buf.push(encodeEntities(value));
            _this.buf.push('"');
        });
        this.buf.push('>');
    };
    /**
     * @param {?} current
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.endElement = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var /** @type {?} */ tagName = DOM.nodeName(current).toLowerCase();
        if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
            this.buf.push('</');
            this.buf.push(tagName);
            this.buf.push('>');
        }
    };
    /**
     * @param {?} chars
     * @return {?}
     */
    SanitizingHtmlSerializer.prototype.chars = /**
     * @param {?} chars
     * @return {?}
     */
    function (chars) { this.buf.push(encodeEntities(chars)); };
    return SanitizingHtmlSerializer;
}());
/**
 * @param {?} node
 * @param {?} nextNode
 * @return {?}
 */
function checkClobberedElement(node, nextNode) {
    if (nextNode && DOM.contains(node, nextNode)) {
        throw new Error("Failed to sanitize html because the element is clobbered: " + DOM.getOuterHTML(node));
    }
    return nextNode;
}
// Regular Expressions for parsing tags and attributes
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value.replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, function (match) {
        var /** @type {?} */ hi = match.charCodeAt(0);
        var /** @type {?} */ low = match.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    })
        .replace(NON_ALPHANUMERIC_REGEXP, function (match) { return '&#' + match.charCodeAt(0) + ';'; })
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
/**
 * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
 * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo').
 *
 * This is undesirable since we don't want to allow any of these custom attributes. This method
 * strips them all.
 * @param {?} el
 * @return {?}
 */
function stripCustomNsAttrs(el) {
    DOM.attributeMap(el).forEach(function (_, attrName) {
        if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
            DOM.removeAttribute(el, attrName);
        }
    });
    for (var _i = 0, _a = DOM.childNodesAsList(el); _i < _a.length; _i++) {
        var n = _a[_i];
        if (DOM.isElementNode(n))
            stripCustomNsAttrs(/** @type {?} */ (n));
    }
}
/**
 * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
 * the DOM in a browser environment.
 * @param {?} defaultDoc
 * @param {?} unsafeHtmlInput
 * @return {?}
 */
function sanitizeHtml(defaultDoc, unsafeHtmlInput) {
    try {
        var /** @type {?} */ containerEl = getInertElement();
        // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
        var /** @type {?} */ unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
        // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
        // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
        var /** @type {?} */ mXSSAttempts = 5;
        var /** @type {?} */ parsedHtml = unsafeHtml;
        do {
            if (mXSSAttempts === 0) {
                throw new Error('Failed to sanitize html because the input is unstable');
            }
            mXSSAttempts--;
            unsafeHtml = parsedHtml;
            DOM.setInnerHTML(containerEl, unsafeHtml);
            if (defaultDoc.documentMode) {
                // strip custom-namespaced attributes on IE<=11
                stripCustomNsAttrs(containerEl);
            }
            parsedHtml = DOM.getInnerHTML(containerEl);
        } while (unsafeHtml !== parsedHtml);
        var /** @type {?} */ sanitizer = new SanitizingHtmlSerializer();
        var /** @type {?} */ safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl) || containerEl);
        // Clear out the body element.
        var /** @type {?} */ parent_1 = DOM.getTemplateContent(containerEl) || containerEl;
        for (var _i = 0, _a = DOM.childNodesAsList(parent_1); _i < _a.length; _i++) {
            var child = _a[_i];
            DOM.removeChild(parent_1, child);
        }
        if (isDevMode() && sanitizer.sanitizedSomething) {
            DOM.log('WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).');
        }
        return safeHtml;
    }
    catch (/** @type {?} */ e) {
        // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
        inertElement = null;
        throw e;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Regular expression for safe style values.
 *
 * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
 *
 * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
 * font-family) and hence could allow multiple values to get injected, but that should pose no risk
 * of XSS.
 *
 * The function expression checks only for XSS safety, not for CSS validity.
 *
 * This regular expression was taken from the Closure sanitization library, and augmented for
 * transformation values.
 */
var VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
var TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
var COLOR_FNS = '(?:rgb|hsl)a?';
var GRADIENTS = '(?:repeating-)?(?:linear|radial)-gradient';
var CSS3_FNS = '(?:calc|attr)';
var FN_ARGS = '\\([-0-9.%, #a-zA-Z]+\\)';
var SAFE_STYLE_VALUE = new RegExp("^(" + VALUES + "|" +
    ("(?:" + TRANSFORMATION_FNS + "|" + COLOR_FNS + "|" + GRADIENTS + "|" + CSS3_FNS + ")") +
    (FN_ARGS + ")$"), 'g');
/**
 * Matches a `url(...)` value with an arbitrary argument as long as it does
 * not contain parentheses.
 *
 * The URL value still needs to be sanitized separately.
 *
 * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
 * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
 * by observing whether scroll bars are displayed, or character ranges used by a font face
 * definition.
 *
 * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
 * binding a URL value without further cooperation from the page will cause an information leak, and
 * if so, it is just a leak, not a full blown XSS vulnerability.
 *
 * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
 * code is permissive and allows URLs that sanitize otherwise.
 */
var URL_RE = /^url\(([^)]+)\)$/;
/**
 * Checks that quotes (" and ') are properly balanced inside a string. Assumes
 * that neither escape (\) nor any other character that could result in
 * breaking out of a string parsing context are allowed;
 * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
 *
 * This code was taken from the Closure sanitization library.
 * @param {?} value
 * @return {?}
 */
function hasBalancedQuotes(value) {
    var /** @type {?} */ outsideSingle = true;
    var /** @type {?} */ outsideDouble = true;
    for (var /** @type {?} */ i = 0; i < value.length; i++) {
        var /** @type {?} */ c = value.charAt(i);
        if (c === '\'' && outsideDouble) {
            outsideSingle = !outsideSingle;
        }
        else if (c === '"' && outsideSingle) {
            outsideDouble = !outsideDouble;
        }
    }
    return outsideSingle && outsideDouble;
}
/**
 * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
 * value) and returns a value that is safe to use in a browser environment.
 * @param {?} value
 * @return {?}
 */
function sanitizeStyle(value) {
    value = String(value).trim(); // Make sure it's actually a string.
    if (!value)
        return '';
    // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
    // reasoning behind this.
    var /** @type {?} */ urlMatch = value.match(URL_RE);
    if ((urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1]) ||
        value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
        return value; // Safe style values.
    }
    if (isDevMode()) {
        getDOM().log("WARNING: sanitizing unsafe style value " + value + " (see http://g.co/ng/security#xss).");
    }
    return 'unsafe';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Marker interface for a value that's safe to use in a particular context.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as HTML.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as style (CSS).
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as JavaScript.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as a URL linking to a document.
 *
 * \@stable
 * @record
 */

/**
 * Marker interface for a value that's safe to use as a URL to load executable code from.
 *
 * \@stable
 * @record
 */

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * \@security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](http://g.co/ng/security).
 *
 * \@stable
 * @abstract
 */
var DomSanitizer = /** @class */ (function () {
    function DomSanitizer() {
    }
    return DomSanitizer;
}());
var DomSanitizerImpl = /** @class */ (function (_super) {
    __extends$7(DomSanitizerImpl, _super);
    function DomSanitizerImpl(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        return _this;
    }
    /**
     * @param {?} ctx
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.sanitize = /**
     * @param {?} ctx
     * @param {?} value
     * @return {?}
     */
    function (ctx, value) {
        if (value == null)
            return null;
        switch (ctx) {
            case SecurityContext.NONE:
                return /** @type {?} */ (value);
            case SecurityContext.HTML:
                if (value instanceof SafeHtmlImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'HTML');
                return sanitizeHtml(this._doc, String(value));
            case SecurityContext.STYLE:
                if (value instanceof SafeStyleImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Style');
                return sanitizeStyle(/** @type {?} */ (value));
            case SecurityContext.SCRIPT:
                if (value instanceof SafeScriptImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Script');
                throw new Error('unsafe value used in a script context');
            case SecurityContext.URL:
                if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
                    // Allow resource URLs in URL contexts, they are strictly more trusted.
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'URL');
                return sanitizeUrl(String(value));
            case SecurityContext.RESOURCE_URL:
                if (value instanceof SafeResourceUrlImpl) {
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'ResourceURL');
                throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
            default:
                throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
        }
    };
    /**
     * @param {?} value
     * @param {?} expectedType
     * @return {?}
     */
    DomSanitizerImpl.prototype.checkNotSafeValue = /**
     * @param {?} value
     * @param {?} expectedType
     * @return {?}
     */
    function (value, expectedType) {
        if (value instanceof SafeValueImpl) {
            throw new Error("Required a safe " + expectedType + ", got a " + value.getTypeName() + " " +
                "(see http://g.co/ng/security#xss)");
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustHtml = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeHtmlImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustStyle = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeStyleImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustScript = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeScriptImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustUrl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return new SafeUrlImpl(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return new SafeResourceUrlImpl(value);
    };
    DomSanitizerImpl.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DomSanitizerImpl.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] },] },
    ]; };
    return DomSanitizerImpl;
}(DomSanitizer));
/**
 * @abstract
 */
var SafeValueImpl = /** @class */ (function () {
    function SafeValueImpl(changingThisBreaksApplicationSecurity) {
        // empty
        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
    }
    /**
     * @return {?}
     */
    SafeValueImpl.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)";
    };
    return SafeValueImpl;
}());
var SafeHtmlImpl = /** @class */ (function (_super) {
    __extends$7(SafeHtmlImpl, _super);
    function SafeHtmlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeHtmlImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'HTML'; };
    return SafeHtmlImpl;
}(SafeValueImpl));
var SafeStyleImpl = /** @class */ (function (_super) {
    __extends$7(SafeStyleImpl, _super);
    function SafeStyleImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeStyleImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'Style'; };
    return SafeStyleImpl;
}(SafeValueImpl));
var SafeScriptImpl = /** @class */ (function (_super) {
    __extends$7(SafeScriptImpl, _super);
    function SafeScriptImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeScriptImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'Script'; };
    return SafeScriptImpl;
}(SafeValueImpl));
var SafeUrlImpl = /** @class */ (function (_super) {
    __extends$7(SafeUrlImpl, _super);
    function SafeUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeUrlImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'URL'; };
    return SafeUrlImpl;
}(SafeValueImpl));
var SafeResourceUrlImpl = /** @class */ (function (_super) {
    __extends$7(SafeResourceUrlImpl, _super);
    function SafeResourceUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SafeResourceUrlImpl.prototype.getTypeName = /**
     * @return {?}
     */
    function () { return 'ResourceURL'; };
    return SafeResourceUrlImpl;
}(SafeValueImpl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
    { provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID },
    { provide: PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
    { provide: PlatformLocation, useClass: BrowserPlatformLocation, deps: [DOCUMENT$1] },
    { provide: DOCUMENT$1, useFactory: _document, deps: [] },
];
/**
 * \@stable
 */
var platformBrowser = createPlatformFactory(platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
/**
 * @return {?}
 */
function initDomAdapter() {
    BrowserDomAdapter.makeCurrent();
    BrowserGetTestability.init();
}
/**
 * @return {?}
 */
function _document() {
    return document;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@stable
 */
var VERSION = new Version('5.2.1');

var UifPivotService = /** @class */ (function () {
    function UifPivotService() {
        this.activePivotIndexSubject = new Subject_2();
        this.activePivotId = new Subject_2();
        this.activePivot$ = this.activePivotId.asObservable();
    }
    UifPivotService.prototype.loadPivots = function (pivots) {
        this.pivotsCollection = pivots;
        this.initialize();
    };
    UifPivotService.prototype.init = function () {
        var _this = this;
        var activePivot = this.pivotsCollection.find(function (pivot) { return pivot.active === true; });
        if (!activePivot) {
            this.pivotsCollection.forEach(function (pivot, index) {
                pivot.active = index === 0;
                if (index === 0) {
                    _this.activePivotIndex = 0;
                    _this.activePivotId.next(pivot.getId());
                }
            });
        }
        else {
            this.pivotsCollection.forEach(function (pivot, index) {
                if (pivot.active) {
                    _this.activePivotIndex = index;
                    _this.activePivotId.next(pivot.getId());
                }
            });
        }
        this.activePivotIndexSubject.next(this.activePivotIndex);
    };
    UifPivotService.prototype.initialize = function () {
        var _this = this;
        this.pivotsCollection.forEach(function (pivot, index) {
            if (!pivot.getId()) {
                pivot.setId('page_' + _this.getRandomInt());
            }
        });
    };
    UifPivotService.prototype.activatePivot = function (pivotIndex) {
        var _this = this;
        var result = null;
        this.pivotsCollection.forEach(function (pivot, index) {
            pivot.active = index === pivotIndex;
            if (index === pivotIndex) {
                _this.activePivotIndex = index;
                _this.activePivotId.next(pivot.getId());
                result = _this.activePivotIndex;
            }
            pivot.activeChange.emit(pivot.active);
        });
        this.activePivotIndexSubject.next(this.activePivotIndex);
        return result;
    };
    UifPivotService.prototype.getRandomInt = function () {
        return Math.floor(Math.random() * 1000000);
    };
    UifPivotService = __decorate([
        Injectable()
    ], UifPivotService);
    return UifPivotService;
}());

var UifPivotTitleComponent = /** @class */ (function () {
    function UifPivotTitleComponent() {
    }
    UifPivotTitleComponent = __decorate([
        Component({
            selector: 'pivot-title, [pivotTitle]',
            template: '<ng-content></ng-content>'
        })
    ], UifPivotTitleComponent);
    return UifPivotTitleComponent;
}());
var UifPivotContentComponent = /** @class */ (function () {
    function UifPivotContentComponent() {
    }
    UifPivotContentComponent = __decorate([
        Component({
            selector: 'pivot-content, [pivotContent]',
            template: '<ng-content></ng-content>'
        })
    ], UifPivotContentComponent);
    return UifPivotContentComponent;
}());
var UifPivotItemComponent = /** @class */ (function () {
    function UifPivotItemComponent(sanitizer, pivotService) {
        this.sanitizer = sanitizer;
        this.pivotService = pivotService;
        this.active = false;
        this.activeChange = new EventEmitter();
        this.pivotLoaded = new EventEmitter();
        this.id = null;
    }
    UifPivotItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.pivotService.activePivot$.subscribe(function (id) {
            _this.activeChange.emit(_this.active);
            if (_this.getId() === id) {
                _this.pivotLoaded.emit();
            }
        });
    };
    UifPivotItemComponent.prototype.getId = function () {
        return this.id;
    };
    UifPivotItemComponent.prototype.setId = function (id) {
        this.id = id;
    };
    UifPivotItemComponent.prototype.getTitle = function () {
        var result = '';
        if (this.title && this.title.nativeElement) {
            result = this.title.nativeElement.innerHTML;
        }
        return this.sanitizer.bypassSecurityTrustHtml(result);
    };
    __decorate([
        ContentChild(UifPivotTitleComponent, { read: ElementRef }),
        __metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object)
    ], UifPivotItemComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPivotItemComponent.prototype, "active", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifPivotItemComponent.prototype, "activeChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_b = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _b || Object)
    ], UifPivotItemComponent.prototype, "pivotLoaded", void 0);
    UifPivotItemComponent = __decorate([
        Component({
            selector: 'uif-pivot-item',
            template: "<div class=\"ms-Pivot-content\" [class.is-active]=\"active\">\n    <ng-content select=\"pivot-content, [pivotContent]\"></ng-content>\n</div>",
            styles: [".ms-Pivot-content {\n  padding: 0 8px; }\n  .ms-Pivot-content.is-active {\n    display: block; }\n\n.ms-Pivot-link {\n  outline: none; }\n"]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof DomSanitizer !== "undefined" && DomSanitizer) === "function" && _c || Object, typeof (_d = typeof UifPivotService !== "undefined" && UifPivotService) === "function" && _d || Object])
    ], UifPivotItemComponent);
    return UifPivotItemComponent;
    var _a, _b, _c, _d;
}());

var UifPivotComponent = /** @class */ (function () {
    function UifPivotComponent(pivotService) {
        this.pivotService = pivotService;
        this.type = UifPivotType.Regular;
        this.size = UifPivotSize.Default;
        this.showEllipsis = false;
        this.pivots = null;
    }
    UifPivotComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.pivots.changes.subscribe(function (_pivots) {
            _this.pivotService.loadPivots(_pivots);
        });
        setTimeout(function () {
            _this.pivotService.loadPivots(_this.pivots);
            _this.pivotService.init();
        });
    };
    UifPivotComponent.prototype.activatePivot = function (pivotIndex) {
        this.pivotService.activatePivot(pivotIndex);
    };
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof UifPivotType !== "undefined" && UifPivotType) === "function" && _a || Object)
    ], UifPivotComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_b = typeof UifPivotSize !== "undefined" && UifPivotSize) === "function" && _b || Object)
    ], UifPivotComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifPivotComponent.prototype, "showEllipsis", void 0);
    __decorate([
        ContentChildren(UifPivotItemComponent),
        __metadata("design:type", typeof (_c = typeof QueryList !== "undefined" && QueryList) === "function" && _c || Object)
    ], UifPivotComponent.prototype, "pivots", void 0);
    UifPivotComponent = __decorate([
        Component({
            selector: 'uif-pivot',
            template: "<div class=\"ms-Pivot\" [ngClass]=\"[type, size]\">\n    <ul class=\"ms-Pivot-links\">\n        <li class=\"ms-Pivot-link\" tabindex=\"1\" *ngFor=\"let pivot of pivots; let pivotIndex = index;\" [class.is-selected]=\"pivot.active\" (click)=\"activatePivot(pivotIndex)\">\n            <span [innerHTML]=\"pivot.getTitle()\"></span>\n        </li>\n        <li class=\"ms-Pivot-link\" tabindex=\"1\" [hidden]=\"!showEllipsis\">\n            <i class=\"ms-Pivot-ellipsis ms-Icon ms-Icon--More\"></i>\n        </li>\n    </ul>\n    <ng-content></ng-content>\n</div>",
            styles: [".ms-Pivot-content {\n  padding: 0 8px; }\n  .ms-Pivot-content.is-active {\n    display: block; }\n\n.ms-Pivot-link {\n  outline: none; }\n"],
            providers: [UifPivotService]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof UifPivotService !== "undefined" && UifPivotService) === "function" && _d || Object])
    ], UifPivotComponent);
    return UifPivotComponent;
    var _a, _b, _c, _d;
}());

var UifProgressIndicatorComponent = /** @class */ (function () {
    function UifProgressIndicatorComponent() {
        this.progress = 0;
        this.progressBarWidth = 'auto';
        this.indeterminate = false;
        this.name = null;
        this.description = null;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifProgressIndicatorComponent.prototype, "progress", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifProgressIndicatorComponent.prototype, "progressBarWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifProgressIndicatorComponent.prototype, "indeterminate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifProgressIndicatorComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifProgressIndicatorComponent.prototype, "description", void 0);
    UifProgressIndicatorComponent = __decorate([
        Component({
            selector: 'uif-progress-indicator',
            template: "<div class=\"ms-ProgressIndicator\">\n    <div class=\"ms-ProgressIndicator-itemName\" [hidden]=\"!name\">{{name}}</div>\n    <div class=\"ms-ProgressIndicator-itemProgress\" [style.width]=\"progressBarWidth\" [class.indeterminate]=\"indeterminate\">\n        <div class=\"ms-ProgressIndicator-progressTrack\"></div>\n        <div class=\"ms-ProgressIndicator-progressBar\" [class.indeterminate]=\"indeterminate\" [attr.progress]=\"progress\"></div>\n    </div>\n    <div class=\"ms-ProgressIndicator-itemDescription\" [hidden]=\"!description\">{{description}}</div>\n</div>",
            styles: [".ms-ProgressIndicator-progressBar[progress=\"0\"]:not(.indeterminate) {\n  width: 0%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"1\"]:not(.indeterminate) {\n  width: 1%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"2\"]:not(.indeterminate) {\n  width: 2%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"3\"]:not(.indeterminate) {\n  width: 3%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"4\"]:not(.indeterminate) {\n  width: 4%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"5\"]:not(.indeterminate) {\n  width: 5%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"6\"]:not(.indeterminate) {\n  width: 6%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"7\"]:not(.indeterminate) {\n  width: 7%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"8\"]:not(.indeterminate) {\n  width: 8%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"9\"]:not(.indeterminate) {\n  width: 9%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"10\"]:not(.indeterminate) {\n  width: 10%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"11\"]:not(.indeterminate) {\n  width: 11%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"12\"]:not(.indeterminate) {\n  width: 12%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"13\"]:not(.indeterminate) {\n  width: 13%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"14\"]:not(.indeterminate) {\n  width: 14%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"15\"]:not(.indeterminate) {\n  width: 15%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"16\"]:not(.indeterminate) {\n  width: 16%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"17\"]:not(.indeterminate) {\n  width: 17%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"18\"]:not(.indeterminate) {\n  width: 18%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"19\"]:not(.indeterminate) {\n  width: 19%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"20\"]:not(.indeterminate) {\n  width: 20%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"21\"]:not(.indeterminate) {\n  width: 21%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"22\"]:not(.indeterminate) {\n  width: 22%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"23\"]:not(.indeterminate) {\n  width: 23%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"24\"]:not(.indeterminate) {\n  width: 24%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"25\"]:not(.indeterminate) {\n  width: 25%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"26\"]:not(.indeterminate) {\n  width: 26%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"27\"]:not(.indeterminate) {\n  width: 27%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"28\"]:not(.indeterminate) {\n  width: 28%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"29\"]:not(.indeterminate) {\n  width: 29%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"30\"]:not(.indeterminate) {\n  width: 30%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"31\"]:not(.indeterminate) {\n  width: 31%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"32\"]:not(.indeterminate) {\n  width: 32%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"33\"]:not(.indeterminate) {\n  width: 33%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"34\"]:not(.indeterminate) {\n  width: 34%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"35\"]:not(.indeterminate) {\n  width: 35%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"36\"]:not(.indeterminate) {\n  width: 36%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"37\"]:not(.indeterminate) {\n  width: 37%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"38\"]:not(.indeterminate) {\n  width: 38%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"39\"]:not(.indeterminate) {\n  width: 39%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"40\"]:not(.indeterminate) {\n  width: 40%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"41\"]:not(.indeterminate) {\n  width: 41%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"42\"]:not(.indeterminate) {\n  width: 42%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"43\"]:not(.indeterminate) {\n  width: 43%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"44\"]:not(.indeterminate) {\n  width: 44%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"45\"]:not(.indeterminate) {\n  width: 45%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"46\"]:not(.indeterminate) {\n  width: 46%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"47\"]:not(.indeterminate) {\n  width: 47%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"48\"]:not(.indeterminate) {\n  width: 48%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"49\"]:not(.indeterminate) {\n  width: 49%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"50\"]:not(.indeterminate) {\n  width: 50%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"51\"]:not(.indeterminate) {\n  width: 51%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"52\"]:not(.indeterminate) {\n  width: 52%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"53\"]:not(.indeterminate) {\n  width: 53%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"54\"]:not(.indeterminate) {\n  width: 54%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"55\"]:not(.indeterminate) {\n  width: 55%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"56\"]:not(.indeterminate) {\n  width: 56%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"57\"]:not(.indeterminate) {\n  width: 57%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"58\"]:not(.indeterminate) {\n  width: 58%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"59\"]:not(.indeterminate) {\n  width: 59%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"60\"]:not(.indeterminate) {\n  width: 60%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"61\"]:not(.indeterminate) {\n  width: 61%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"62\"]:not(.indeterminate) {\n  width: 62%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"63\"]:not(.indeterminate) {\n  width: 63%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"64\"]:not(.indeterminate) {\n  width: 64%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"65\"]:not(.indeterminate) {\n  width: 65%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"66\"]:not(.indeterminate) {\n  width: 66%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"67\"]:not(.indeterminate) {\n  width: 67%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"68\"]:not(.indeterminate) {\n  width: 68%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"69\"]:not(.indeterminate) {\n  width: 69%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"70\"]:not(.indeterminate) {\n  width: 70%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"71\"]:not(.indeterminate) {\n  width: 71%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"72\"]:not(.indeterminate) {\n  width: 72%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"73\"]:not(.indeterminate) {\n  width: 73%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"74\"]:not(.indeterminate) {\n  width: 74%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"75\"]:not(.indeterminate) {\n  width: 75%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"76\"]:not(.indeterminate) {\n  width: 76%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"77\"]:not(.indeterminate) {\n  width: 77%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"78\"]:not(.indeterminate) {\n  width: 78%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"79\"]:not(.indeterminate) {\n  width: 79%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"80\"]:not(.indeterminate) {\n  width: 80%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"81\"]:not(.indeterminate) {\n  width: 81%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"82\"]:not(.indeterminate) {\n  width: 82%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"83\"]:not(.indeterminate) {\n  width: 83%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"84\"]:not(.indeterminate) {\n  width: 84%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"85\"]:not(.indeterminate) {\n  width: 85%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"86\"]:not(.indeterminate) {\n  width: 86%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"87\"]:not(.indeterminate) {\n  width: 87%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"88\"]:not(.indeterminate) {\n  width: 88%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"89\"]:not(.indeterminate) {\n  width: 89%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"90\"]:not(.indeterminate) {\n  width: 90%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"91\"]:not(.indeterminate) {\n  width: 91%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"92\"]:not(.indeterminate) {\n  width: 92%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"93\"]:not(.indeterminate) {\n  width: 93%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"94\"]:not(.indeterminate) {\n  width: 94%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"95\"]:not(.indeterminate) {\n  width: 95%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"96\"]:not(.indeterminate) {\n  width: 96%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"97\"]:not(.indeterminate) {\n  width: 97%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"98\"]:not(.indeterminate) {\n  width: 98%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"99\"]:not(.indeterminate) {\n  width: 99%; }\n\n.ms-ProgressIndicator-progressBar[progress=\"100\"]:not(.indeterminate) {\n  width: 100%; }\n\n.ms-ProgressIndicator-progressBar.indeterminate {\n  min-width: 33%;\n  background: linear-gradient(to right, transparent 0%, #0078d7 50%, transparent 100%);\n  animation: indeterminateProgress 3s infinite; }\n\n.ms-ProgressIndicator-itemProgress.indeterminate {\n  min-width: 33%;\n  overflow: hidden; }\n\n@keyframes indeterminateProgress {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(300%); } }\n"]
        })
    ], UifProgressIndicatorComponent);
    return UifProgressIndicatorComponent;
}());

var UifToggleComponent = /** @class */ (function () {
    function UifToggleComponent() {
        this.id = 'toggle-' + this.getRandomInt();
        this.onLabel = 'On';
        this.offLabel = 'Off';
        this._value = false;
        this.disabled = false;
        this.propagateChange = function (_) { };
    }
    UifToggleComponent_1 = UifToggleComponent;
    Object.defineProperty(UifToggleComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.propagateChange(val);
        },
        enumerable: true,
        configurable: true
    });
    UifToggleComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this._value = obj;
        }
    };
    UifToggleComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    UifToggleComponent.prototype.registerOnTouched = function () { };
    UifToggleComponent.prototype.ngOnChanges = function () {
        if (!this.name) {
            this.name = this.id;
        }
        this.onValueChange();
    };
    UifToggleComponent.prototype.onValueChange = function () {
        this.propagateChange(this._value);
    };
    UifToggleComponent.prototype.onKeyUp = function ($event) {
        if ($event.keyCode === 13 || $event.keyCode === 32) {
            this._value = !this._value;
            this.onValueChange();
        }
    };
    UifToggleComponent.prototype.getRandomInt = function () {
        return Math.floor(Math.random() * 1000000);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifToggleComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifToggleComponent.prototype, "description", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifToggleComponent.prototype, "onLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifToggleComponent.prototype, "offLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifToggleComponent.prototype, "_value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifToggleComponent.prototype, "disabled", void 0);
    UifToggleComponent = UifToggleComponent_1 = __decorate([
        Component({
            selector: 'uif-toggle',
            template: "<div class=\"ms-Toggle\" [class.is-disabled]=\"disabled\">\n    <span class=\"ms-Toggle-description\" [hidden]=\"!description\">{{description}}</span>\n    <input type=\"checkbox\" [attr.id]=\"id\" class=\"ms-Toggle-input\" (change)=\"onValueChange()\" [disabled]=\"disabled\" [(ngModel)]=\"value\" />\n    <label [attr.for]=\"id\" class=\"ms-Toggle-field\" [attr.tabindex]=\"disabled ? -1 : 0\" [class.is-selected]=\"value\"  [class.is-disabled]=\"disabled\" (keyup)=\"onKeyUp($event)\">\n        <span class=\"ms-Label ms-Label--off\">{{offLabel}}</span>\n        <span class=\"ms-Label ms-Label--on\">{{onLabel}}</span>\n    </label>\n</div>",
            styles: [""],
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return UifToggleComponent_1; }),
                    multi: true,
                }
            ]
        })
    ], UifToggleComponent);
    return UifToggleComponent;
    var UifToggleComponent_1;
}());

var UifIconComponent = /** @class */ (function () {
    function UifIconComponent() {
        this.size = 32;
        this.color = '#000000';
        this.flip = UifIconFlip.None;
        this.badge = UifIconBadge.None;
        this.dir = UifIconDir.Up;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifIconComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifIconComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifIconComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof UifIconFlip !== "undefined" && UifIconFlip) === "function" && _a || Object)
    ], UifIconComponent.prototype, "flip", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_b = typeof UifIconBadge !== "undefined" && UifIconBadge) === "function" && _b || Object)
    ], UifIconComponent.prototype, "badge", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_c = typeof UifIconDir !== "undefined" && UifIconDir) === "function" && _c || Object)
    ], UifIconComponent.prototype, "dir", void 0);
    UifIconComponent = __decorate([
        Component({
            selector: 'uif-icon',
            template: "<i class=\"ms-Icon\" [ngClass]=\"'ms-Icon--' + name + ' ' + flip + ' ' + badge + ' ' + dir\" [style.color]=\"color\" [style.fontSize]=\"size + 'px'\" ></i>",
            styles: [":host {\n  display: inline-block; }\n\ni.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-alert-badge:not(.dir-down):not(.dir-left):not(.dir-right):after, i.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-success-badge:not(.dir-down):not(.dir-left):not(.dir-right):after, i.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-warning-badge:not(.dir-down):not(.dir-left):not(.dir-right):after {\n  top: -5px;\n  right: -5px; }\n\ni.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-alert-badge.dir-down:after, i.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-success-badge.dir-down:after, i.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-warning-badge.dir-down:after {\n  left: -5px;\n  right: auto;\n  bottom: -5px;\n  top: auto; }\n\ni.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-alert-badge.dir-left:after, i.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-success-badge.dir-left:after, i.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-warning-badge.dir-left:after {\n  bottom: -5px;\n  top: auto; }\n\ni.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-alert-badge.dir-right:after, i.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-success-badge.dir-right:after, i.ms-Icon:not(.flip-horizontal):not(.flip-vertical).has-warning-badge.dir-right:after {\n  left: -5px;\n  right: auto; }\n\ni.ms-Icon.flip-horizontal {\n  transform: scaleX(-1); }\n  i.ms-Icon.flip-horizontal.has-alert-badge:not(.dir-down):not(.dir-left):not(.dir-right):after, i.ms-Icon.flip-horizontal.has-success-badge:not(.dir-down):not(.dir-left):not(.dir-right):after, i.ms-Icon.flip-horizontal.has-warning-badge:not(.dir-down):not(.dir-left):not(.dir-right):after {\n    left: -5px;\n    right: auto; }\n  i.ms-Icon.flip-horizontal.has-alert-badge.dir-down:after, i.ms-Icon.flip-horizontal.has-success-badge.dir-down:after, i.ms-Icon.flip-horizontal.has-warning-badge.dir-down:after {\n    left: -5px;\n    right: auto;\n    bottom: -5px;\n    top: auto; }\n  i.ms-Icon.flip-horizontal.has-alert-badge.dir-left:after, i.ms-Icon.flip-horizontal.has-success-badge.dir-left:after, i.ms-Icon.flip-horizontal.has-warning-badge.dir-left:after {\n    bottom: -5px;\n    top: auto; }\n  i.ms-Icon.flip-horizontal.has-alert-badge.dir-right:after, i.ms-Icon.flip-horizontal.has-success-badge.dir-right:after, i.ms-Icon.flip-horizontal.has-warning-badge.dir-right:after {\n    left: -5px;\n    right: auto; }\n\ni.ms-Icon.flip-vertical {\n  transform: scaleY(-1); }\n  i.ms-Icon.flip-vertical.has-alert-badge:not(.dir-down):not(.dir-left):not(.dir-right):after, i.ms-Icon.flip-vertical.has-success-badge:not(.dir-down):not(.dir-left):not(.dir-right):after, i.ms-Icon.flip-vertical.has-warning-badge:not(.dir-down):not(.dir-left):not(.dir-right):after {\n    bottom: -5px;\n    top: auto; }\n  i.ms-Icon.flip-vertical.has-alert-badge.dir-down:after, i.ms-Icon.flip-vertical.has-success-badge.dir-down:after, i.ms-Icon.flip-vertical.has-warning-badge.dir-down:after {\n    left: -5px;\n    right: auto;\n    bottom: -5px;\n    top: auto; }\n  i.ms-Icon.flip-vertical.has-alert-badge.dir-left:after, i.ms-Icon.flip-vertical.has-success-badge.dir-left:after, i.ms-Icon.flip-vertical.has-warning-badge.dir-left:after {\n    bottom: -5px;\n    top: auto; }\n  i.ms-Icon.flip-vertical.has-alert-badge.dir-right:after, i.ms-Icon.flip-vertical.has-success-badge.dir-right:after, i.ms-Icon.flip-vertical.has-warning-badge.dir-right:after {\n    left: -5px;\n    right: auto; }\n\ni.ms-Icon.has-alert-badge {\n  position: relative; }\n  i.ms-Icon.has-alert-badge:after {\n    content: ' ';\n    width: 30%;\n    height: 30%;\n    background: #e81123;\n    border-radius: 50%;\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    border: 3px solid #fff; }\n\ni.ms-Icon.has-success-badge {\n  position: relative; }\n  i.ms-Icon.has-success-badge:after {\n    content: ' ';\n    width: 30%;\n    height: 30%;\n    background: #107c10;\n    border-radius: 50%;\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    border: 3px solid #fff; }\n\ni.ms-Icon.has-warning-badge {\n  position: relative; }\n  i.ms-Icon.has-warning-badge:after {\n    content: ' ';\n    width: 30%;\n    height: 30%;\n    background: #ffb900;\n    border-radius: 50%;\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    border: 3px solid #fff; }\n\ni.ms-Icon.dir-down {\n  transform: rotate(180deg); }\n\ni.ms-Icon.dir-right {\n  transform: rotate(90deg); }\n\ni.ms-Icon.dir-left {\n  transform: rotate(-90deg); }\n"]
        })
    ], UifIconComponent);
    return UifIconComponent;
    var _a, _b, _c;
}());

var UifCheckboxComponent = /** @class */ (function () {
    function UifCheckboxComponent() {
        this.id = 'cb-' + this.getRandomInt();
        this.label = 'On';
        this._value = false;
        this.disabled = false;
        this.propagateChange = function (_) { };
    }
    UifCheckboxComponent_1 = UifCheckboxComponent;
    Object.defineProperty(UifCheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.propagateChange(val);
        },
        enumerable: true,
        configurable: true
    });
    UifCheckboxComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this._value = obj;
        }
    };
    UifCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    UifCheckboxComponent.prototype.registerOnTouched = function () { };
    UifCheckboxComponent.prototype.ngOnChanges = function () {
        if (!this.name) {
            this.name = this.id;
        }
        this.onValueChange();
    };
    UifCheckboxComponent.prototype.onValueChange = function () {
        this.propagateChange(this._value);
    };
    UifCheckboxComponent.prototype.onKeyUp = function ($event) {
        if ($event.keyCode === 13 || $event.keyCode === 32) {
            this._value = !this._value;
            this.onValueChange();
        }
    };
    UifCheckboxComponent.prototype.getRandomInt = function () {
        return Math.floor(Math.random() * 1000000);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCheckboxComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCheckboxComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCheckboxComponent.prototype, "_value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCheckboxComponent.prototype, "disabled", void 0);
    UifCheckboxComponent = UifCheckboxComponent_1 = __decorate([
        Component({
            selector: 'uif-checkbox',
            template: "<div class=\"ms-CheckBox\">\n    <input tabindex=\"-1\" type=\"checkbox\" class=\"ms-CheckBox-input\" [attr.id]=\"id\" (change)=\"onValueChange()\" [disabled]=\"disabled\" [(ngModel)]=\"value\" >\n    <label role=\"checkbox\" class=\"ms-CheckBox-field\" [attr.tabindex]=\"disabled ? -1 : 0\" [attr.aria-checked]=\"value\" [attr.for]=\"id\" [class.is-checked]=\"value\" [class.is-disabled]=\"disabled\" (keyup)=\"onKeyUp($event)\">\n      <span class=\"ms-Label\">{{label}}</span> \n    </label>\n  </div>",
            styles: [""],
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return UifCheckboxComponent_1; }),
                    multi: true,
                }
            ]
        })
    ], UifCheckboxComponent);
    return UifCheckboxComponent;
    var UifCheckboxComponent_1;
}());

var UifChoicefieldService = /** @class */ (function () {
    function UifChoicefieldService() {
        this.selectedValue = new Subject_2();
        this.selectedValue$ = this.selectedValue.asObservable();
    }
    UifChoicefieldService = __decorate([
        Injectable()
    ], UifChoicefieldService);
    return UifChoicefieldService;
}());

var UifChoicefieldItemComponent = /** @class */ (function () {
    function UifChoicefieldItemComponent(choicefieldService) {
        this.choicefieldService = choicefieldService;
        this.id = 'cb-' + GetRandomInt();
        this.disabled = false;
    }
    UifChoicefieldItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.choicefieldService.selectedValue$.subscribe(function (value) {
            if (_this.value !== value) {
                _this.checked = false;
            }
        });
    };
    UifChoicefieldItemComponent.prototype.onValueChange = function () {
        if (this.checked) {
            this.choicefieldService.selectedValue.next(this.value);
        }
    };
    UifChoicefieldItemComponent.prototype.onKeyUp = function ($event) {
        if ($event.keyCode === 13 || $event.keyCode === 32) {
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifChoicefieldItemComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifChoicefieldItemComponent.prototype, "disabled", void 0);
    UifChoicefieldItemComponent = __decorate([
        Component({
            selector: 'uif-choicefield-item, [uifChoicefieldItem]',
            template: "<li class=\"ms-RadioButton\">\n    <input tabindex=\"-1\" type=\"checkbox\" class=\"ms-CheckBox-input\" [attr.id]=\"id\" (change)=\"onValueChange()\" [disabled]=\"disabled\"\n        [(ngModel)]=\"checked\">\n    <label role=\"radio\" class=\"ms-RadioButton-field\" [attr.tabindex]=\"disabled ? -1 : 0\" [attr.aria-checked]=\"checked\" [attr.for]=\"id\"\n        [class.is-checked]=\"checked\" [class.is-disabled]=\"disabled\" (keyup)=\"onKeyUp($event)\">\n        <span class=\"ms-Label\">\n            <ng-content></ng-content>\n        </span>\n    </label>\n</li>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof UifChoicefieldService !== "undefined" && UifChoicefieldService) === "function" && _a || Object])
    ], UifChoicefieldItemComponent);
    return UifChoicefieldItemComponent;
    var _a;
}());

var UifChoicefieldComponent = /** @class */ (function () {
    function UifChoicefieldComponent(choicefieldService) {
        this.choicefieldService = choicefieldService;
        this.id = 'cb-' + GetRandomInt();
        this.choiceFieldItems = null;
        this.label = '';
        this.propagateChange = function (_) { };
    }
    UifChoicefieldComponent_1 = UifChoicefieldComponent;
    Object.defineProperty(UifChoicefieldComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.propagateChange(val);
        },
        enumerable: true,
        configurable: true
    });
    UifChoicefieldComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this._value = obj;
        }
    };
    UifChoicefieldComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    UifChoicefieldComponent.prototype.registerOnTouched = function () { };
    UifChoicefieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.choicefieldService.selectedValue$.subscribe(function (value) {
            _this.value = value;
        });
    };
    UifChoicefieldComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.choiceFieldItems.changes.subscribe(function (_choiceFieldItems) {
            _this.init();
        });
        setTimeout(function () {
            _this.init();
        });
    };
    UifChoicefieldComponent.prototype.init = function () {
        var _this = this;
        this.choiceFieldItems.forEach(function (choicefield) {
            choicefield.checked = choicefield.value === _this.value && !choicefield.disabled;
        });
    };
    UifChoicefieldComponent.prototype.ngOnChanges = function () {
    };
    UifChoicefieldComponent.prototype.onValueChange = function () {
        this.propagateChange(this._value);
    };
    UifChoicefieldComponent.prototype.onKeyUp = function ($event) {
        if ($event.keyCode === 13 || $event.keyCode === 32) {
            this._value = !this._value;
            this.onValueChange();
        }
    };
    __decorate([
        ContentChildren(UifChoicefieldItemComponent),
        __metadata("design:type", typeof (_a = typeof QueryList !== "undefined" && QueryList) === "function" && _a || Object)
    ], UifChoicefieldComponent.prototype, "choiceFieldItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifChoicefieldComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifChoicefieldComponent.prototype, "_value", void 0);
    UifChoicefieldComponent = UifChoicefieldComponent_1 = __decorate([
        Component({
            selector: 'uif-choicefield',
            template: "<div class=\"ms-ChoiceFieldGroup\" id=\"choicefieldgroup\" role=\"radiogroup\">\n    <div class=\"ms-ChoiceFieldGroup-title\">\n        <label class=\"ms-Label is-required\">{{label}}</label>\n    </div>\n    <ul class=\"ms-ChoiceFieldGroup-list\">\n        <ng-content></ng-content>\n    </ul>\n</div>",
            styles: [""],
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return UifChoicefieldComponent_1; }),
                    multi: true,
                },
                UifChoicefieldService
            ]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof UifChoicefieldService !== "undefined" && UifChoicefieldService) === "function" && _b || Object])
    ], UifChoicefieldComponent);
    return UifChoicefieldComponent;
    var UifChoicefieldComponent_1, _a, _b;
}());

var UifTableService = /** @class */ (function () {
    function UifTableService() {
        this.allSelected = new Subject_2();
        this.allSelected$ = this.allSelected.asObservable();
        this.setAllSelectedAsFalse = new Subject_2();
        this.setAllSelectedAsFalse$ = this.setAllSelectedAsFalse.asObservable();
    }
    UifTableService.prototype.headerRowSelectionChange = function (id) {
        var headerRow = this.tRows.find(function (row) { return row.id === id; });
        if (headerRow) {
            this.tRows.forEach(function (row) {
                if (!row.isHeader) {
                    row.selected = headerRow.selected;
                    row.onSelectionChange();
                }
            });
        }
    };
    UifTableService.prototype.bodyRowSelectionChange = function (id) {
        var result = true;
        this.tRows.forEach(function (row) {
            if (!row.isHeader) {
                result = result && row.selected;
            }
        });
        this.tRows.forEach(function (row) {
            if (row.isHeader) {
                row.selected = result;
                row.onSelectionChange();
            }
        });
    };
    UifTableService = __decorate([
        Injectable()
    ], UifTableService);
    return UifTableService;
}());

var UifTableTrComponent = /** @class */ (function () {
    function UifTableTrComponent(elRef, tableService) {
        this.elRef = elRef;
        this.tableService = tableService;
        this.id = 'tr_' + GetRandomInt();
        this.selectable = false;
        this.isHeader = false;
        this.selected = false;
        this.selectedChange = new EventEmitter();
    }
    UifTableTrComponent.prototype.ngOnChanges = function () {
        this.rowClasslistChange();
    };
    UifTableTrComponent.prototype.ngAfterViewInit = function () {
        var row = this.elRef.nativeElement;
        if (row) {
            this.isHeader = row.matches('thead tr') || false;
        }
    };
    UifTableTrComponent.prototype.rowClasslistChange = function () {
        if (this.elRef) {
            var row = this.elRef.nativeElement;
            if (row) {
                if (this.selected && this.selectable) {
                    row.classList.add('is-selected');
                }
                else {
                    row.classList.remove('is-selected');
                }
            }
        }
    };
    UifTableTrComponent.prototype.onClick = function () {
        this.selected = !this.selected;
        this.onSelectionChange();
        if (this.isHeader) {
            this.tableService.headerRowSelectionChange(this.id);
        }
        else {
            this.tableService.bodyRowSelectionChange(this.id);
        }
    };
    UifTableTrComponent.prototype.onSelectionChange = function () {
        this.selectedChange.emit(this.selected);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTableTrComponent.prototype, "selected", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifTableTrComponent.prototype, "selectedChange", void 0);
    UifTableTrComponent = __decorate([
        Component({
            selector: '[uifTableRow]',
            template: "\n\t<th class=\"ms-Table-rowCheck\" [hidden]=\"!selectable\" (click)=\"onClick()\"></th>\n\t<ng-content></ng-content>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object, typeof (_b = typeof UifTableService !== "undefined" && UifTableService) === "function" && _b || Object])
    ], UifTableTrComponent);
    return UifTableTrComponent;
    var _a, _b;
}());

var UifTableComponent = /** @class */ (function () {
    function UifTableComponent(tableService) {
        this.tableService = tableService;
        this.selectable = false;
    }
    UifTableComponent.prototype.ngOnChanges = function () {
        this.init();
    };
    UifTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tRows.changes.subscribe(function (tRows) {
            _this.init();
        });
        setTimeout(function () {
            _this.init();
        });
    };
    UifTableComponent.prototype.init = function () {
        var _this = this;
        if (this.tRows && this.tRows.length > 0) {
            this.tableService.tRows = this.tRows;
            this.tRows.forEach(function (row) {
                row.selectable = _this.selectable;
                row.rowClasslistChange();
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTableComponent.prototype, "selectable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTableComponent.prototype, "classes", void 0);
    __decorate([
        ContentChildren(UifTableTrComponent),
        __metadata("design:type", typeof (_a = typeof QueryList !== "undefined" && QueryList) === "function" && _a || Object)
    ], UifTableComponent.prototype, "tRows", void 0);
    UifTableComponent = __decorate([
        Component({
            selector: 'uif-table',
            template: "<table class=\"ms-Table uif-table\" [class.ms-Table--selectable]=\"selectable\" [ngClass]=\"classes\">\n    <ng-content></ng-content>\n</table>",
            providers: [UifTableService]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof UifTableService !== "undefined" && UifTableService) === "function" && _b || Object])
    ], UifTableComponent);
    return UifTableComponent;
    var _a, _b;
}());

var UifTreeTableColumnComponent = /** @class */ (function () {
    function UifTreeTableColumnComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTreeTableColumnComponent.prototype, "column", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTreeTableColumnComponent.prototype, "classes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTreeTableColumnComponent.prototype, "columnTitle", void 0);
    __decorate([
        ContentChild(TemplateRef),
        __metadata("design:type", typeof (_a = typeof TemplateRef !== "undefined" && TemplateRef) === "function" && _a || Object)
    ], UifTreeTableColumnComponent.prototype, "rowTemplate", void 0);
    UifTreeTableColumnComponent = __decorate([
        Component({
            selector: 'uif-tree-table-column',
            template: "\n\t<ng-template let-row>\n\t\t<ng-content></ng-content>\n\t</ng-template>\n  ",
        })
    ], UifTreeTableColumnComponent);
    return UifTreeTableColumnComponent;
    var _a;
}());
var UifTreeTableContentComponent = /** @class */ (function () {
    function UifTreeTableContentComponent() {
        this.level = 0;
        this.UifIconDirs = UifIconDir;
    }
    Object.defineProperty(UifTreeTableContentComponent.prototype, "hasChildren", {
        get: function () {
            var result = false;
            this.rows.forEach(function (row) {
                if (row.children && row.children.length > 0) {
                    result = true;
                }
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UifTreeTableContentComponent.prototype, "rows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTreeTableContentComponent.prototype, "columns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTreeTableContentComponent.prototype, "classes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTreeTableContentComponent.prototype, "level", void 0);
    UifTreeTableContentComponent = __decorate([
        Component({
            selector: 'uif-tree-table-content',
            template: "<table class=\"ms-Table\" [ngClass]=\"level === 1 ? classes : ''\">\n    <thead *ngIf=\"level === 1\">\n        <tr>\n            <th></th>\n            <th *ngFor=\"let col of columns\">{{col.columnTitle}}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <ng-container *ngFor=\"let row of rows\">\n            <tr>\n                <td class=\"uif-td-toggler\" [class.active]=\"row.children && row.children.length > 0\" *ngIf=\"hasChildren\" (click)=\"row.opened = !row.opened\">\n                    <uif-icon *ngIf=\"row.children && row.children.length > 0\" size=\"12\" color=\"#909090\" [name]=\"!row.opened ? 'ChevronRight' : 'ChevronDown'\"></uif-icon>\n                </td>\n                <td *ngFor=\"let col of columns\" [ngClass]=\"col.classes\">\n                    <span class=\"padder\"></span>\n                    <ng-container *ngIf=\"col.rowTemplate\">\n                        <ng-container *ngTemplateOutlet=\"col.rowTemplate; context: {$implicit: row}\"></ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"!col.rowTemplate\">\n                        <span>{{row[col.column]}}</span>\n                    </ng-container>\n                </td>\n            </tr>\n            <tr *ngIf=\"row.children && row.children.length > 0 && row.opened\" class=\"child-row\">\n                <td class=\"uif-td-toggler\" *ngIf=\"hasChildren\"></td>\n                <td class=\"uif-td-innercell extraPadLeft\" [attr.colspan]=\"columns.length\">\n                    <uif-tree-table-content [rows]=\"row.children\" [columns]=\"columns\">\n                    </uif-tree-table-content>\n                </td>\n            </tr>\n        </ng-container>\n    </tbody>\n</table>",
            styles: [
                ":host {\n  width: 100%;\n  display: block; }\n\ntr.child-row {\n  animation: fadein-item-down;\n  animation-duration: 0.367s; }\n\ntd.uif-td-innercell {\n  padding: 0; }\n\ntd.uif-td-toggler {\n  width: 18px;\n  height: 18px;\n  text-align: center;\n  padding: 0 5px; }\n\ntd.uif-td-toggler.active {\n  cursor: pointer; }\n\ntd.uif-td-toggler.active:hover {\n  background: rgba(0, 0, 0, 0.05); }\n\ntd.extraPadLeft /deep/ tbody tr td:first-child .padder {\n  width: 20px;\n  height: 1px;\n  display: inline-block; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ]
        })
    ], UifTreeTableContentComponent);
    return UifTreeTableContentComponent;
}());

var UifTreeTableComponent = /** @class */ (function () {
    function UifTreeTableComponent() {
        this.columns = [];
        this.level = 0;
        this.classes = '';
    }
    UifTreeTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.columns = _this.columnComponents.toArray();
        });
    };
    __decorate([
        ContentChildren(UifTreeTableColumnComponent),
        __metadata("design:type", typeof (_a = typeof QueryList !== "undefined" && QueryList) === "function" && _a || Object)
    ], UifTreeTableComponent.prototype, "columnComponents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTreeTableComponent.prototype, "classes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], UifTreeTableComponent.prototype, "rows", void 0);
    UifTreeTableComponent = __decorate([
        Component({
            selector: 'uif-tree-table',
            template: "\n\t<uif-tree-table-content [classes]=\"classes\" [level]=\"level + 1\" [rows]=\"rows\" [columns]=\"columns\"></uif-tree-table-content>\n  \t"
        })
    ], UifTreeTableComponent);
    return UifTreeTableComponent;
    var _a;
}());

var UifRatingComponent = /** @class */ (function () {
    function UifRatingComponent() {
        this.maxRating = 5;
        this.rating = 3;
        this.ratingChange = new EventEmitter();
        this.disabled = false;
        this.icon = 'FavoriteStarFill';
        this.activeColor = '#0078D7';
        this.inactiveColor = '#D0D0D0';
        this.size = 18;
        this.stars = [];
        this._initialized = false;
    }
    UifRatingComponent.prototype.ngOnChanges = function () {
        if (this._initialized) {
            this.init();
        }
    };
    UifRatingComponent.prototype.ngOnInit = function () {
        this.init();
    };
    UifRatingComponent.prototype.init = function () {
        if (this.maxRating !== undefined && this.maxRating !== null) {
            if (this.stars.length !== this.maxRating) {
                this.stars = [];
                for (var i = 0; i < this.maxRating; i++) {
                    this.stars.push({
                        marked: false
                    });
                }
            }
            this.initRating();
        }
        this._initialized = true;
    };
    UifRatingComponent.prototype.initRating = function () {
        var _this = this;
        if (this.rating !== undefined && this.rating !== null) {
            this.stars.forEach(function (star, index) {
                star.marked = index < _this.rating;
                star.color = star.marked ? _this.activeColor : _this.inactiveColor;
                star.size = _this.size + 'px';
            });
        }
    };
    UifRatingComponent.prototype.changeRating = function (rating) {
        if (rating !== this.rating) {
            this.rating = rating;
        }
        else {
            this.rating = rating - 1;
        }
        this.initRating();
        this.ratingChange.emit(this.rating);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifRatingComponent.prototype, "maxRating", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifRatingComponent.prototype, "rating", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifRatingComponent.prototype, "ratingChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifRatingComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifRatingComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifRatingComponent.prototype, "activeColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifRatingComponent.prototype, "inactiveColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifRatingComponent.prototype, "size", void 0);
    UifRatingComponent = __decorate([
        Component({
            selector: 'uif-rating',
            template: "<div class=\"ms-Rating-star\" [attr.aria-label]=\"'Rating value is' + rating + ' of ' + maxRating\" id=\"Rating15\">\n    <div role=\"presentation\" tabindex=\"0\">\n        <button class=\"ms-Rating-button\" [disabled]=\"disabled\" role=\"presentation\" *ngFor=\"let star of stars; let i = index;\" (click)=\"changeRating(i + 1)\">\n            <span class=\"ms-Rating-labelText labelText-51\">{{i + 1}} of {{maxRating}} stars selected</span>\n            <div class=\"ms-RatingStar-container\">\n                <i [class.unmarked]=\"!star.marked\" [ngClass]=\"'ms-Icon--' + icon\" class=\"ms-Icon ms-RatingStar-back\" [style.fontSize]=\"star.size\" [style.color]=\"star.color\"></i>\n            </div>\n        </button>\n    </div>\n</div>",
            styles: [".ms-Rating-labelText {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin-top: -1px;\n  margin-right: -1px;\n  margin-bottom: -1px;\n  margin-left: -1px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  border-width: 0px;\n  border-style: initial;\n  border-color: initial;\n  border-image: initial;\n  overflow: hidden; }\n\n.ms-RatingStar-front {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  text-align: center;\n  vertical-align: middle;\n  color: black;\n  overflow: hidden; }\n\n.ms-RatingStar-back {\n  color: #a6a6a6;\n  width: 100%; }\n\n.ms-RatingStar-container {\n  display: inline-block;\n  position: relative; }\n  .ms-RatingStar-container .unmarked {\n    color: #a6a6a6;\n    width: 100%; }\n\n.ms-Rating-button {\n  position: relative;\n  margin-top: 3px;\n  margin-right: 3px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  cursor: pointer;\n  outline: transparent;\n  background: none;\n  border-width: initial;\n  border-style: none;\n  border-color: initial;\n  border-image: initial; }\n  .ms-Rating-button[disabled] {\n    cursor: default; }\n\n:host {\n  display: inline-block; }\n"]
        })
    ], UifRatingComponent);
    return UifRatingComponent;
}());

// tslint:disable max-line-length
/*
    HELPER LIBRARY IMPORTED FROM OFFICE-UI-FABRIC-REACT
    GitHub: https://github.com/OfficeDev/office-ui-fabric-react
    Files
    1.	https://github.com/OfficeDev/office-ui-fabric-react/blob/f1abaa3f1d84cf54447d2fa3ee3ce2d23ae62c4a/packages/office-ui-fabric-react/src/utilities/color/colorValues.ts
    2. https://github.com/OfficeDev/office-ui-fabric-react/blob/f1abaa3f1d84cf54447d2fa3ee3ce2d23ae62c4a/packages/office-ui-fabric-react/src/utilities/color/colors.ts
*/
// tslint:enable max-line-length
// tslint:disable prefer-const
// tslint:disable no-non-null-assertion
var COLOR_VALUES = {
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
    darkgoldenrod: [184, 132, 11],
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
    floralwhite: [255, 255, 240],
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
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
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
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
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
    yellowgreen: [154, 205, 5]
};
var MAX_COLOR_SATURATION = 100;
var MAX_COLOR_HUE = 359;
var MAX_COLOR_VALUE = 100;
var MAX_COLOR_RGBA = 255;
function cssColor(color) {
    return (_named(color)
        || _hex3(color)
        || _hex6(color)
        || _rgb(color)
        || _rgba(color)
        || _hsl(color)
        || _hsla(color));
}
function rgb2hex(r, g, b) {
    return [
        _numberToPaddedHex(r),
        _numberToPaddedHex(g),
        _numberToPaddedHex(b)
    ].join('');
}
function rgb2hsv(r, g, b) {
    var h = NaN;
    var s;
    var v;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    // hue
    if (delta === 0) {
        h = 0;
    }
    else if (r === max) {
        h = ((g - b) / delta) % 6;
    }
    else if (g === max) {
        h = (b - r) / delta + 2;
    }
    else if (b === max) {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    // saturation
    s = Math.round((max === 0 ? 0 : (delta / max)) * 100);
    // value
    v = Math.round(max / 255 * 100);
    return { h: h, s: s, v: v };
}
function hsl2hsv(h, s, l) {
    s *= ((l < 50) ? l : (100 - l)) / 100;
    return {
        h: h,
        s: 2 * s / (l + s) * 100,
        v: l + s
    };
}
function hsl2rgb(h, s, l) {
    var hsv = hsl2hsv(h, s, l);
    return hsv2rgb(hsv.h, hsv.s, hsv.v);
}
function hsv2rgb(h, s, v) {
    s = s / 100;
    v = v / 100;
    var rgb = [];
    var c = v * s;
    var hh = h / 60;
    var x = c * (1 - Math.abs(hh % 2 - 1));
    var m = v - c;
    switch (Math.floor(hh)) {
        case 0:
            rgb = [c, x, 0];
            break;
        case 1:
            rgb = [x, c, 0];
            break;
        case 2:
            rgb = [0, c, x];
            break;
        case 3:
            rgb = [0, x, c];
            break;
        case 4:
            rgb = [x, 0, c];
            break;
        case 5:
            rgb = [c, 0, x];
            break;
    }
    return {
        r: Math.round(MAX_COLOR_RGBA * (rgb[0] + m)),
        g: Math.round(MAX_COLOR_RGBA * (rgb[1] + m)),
        b: Math.round(MAX_COLOR_RGBA * (rgb[2] + m))
    };
}
function getColorFromString(inputColor) {
    var color = cssColor(inputColor);
    if (!color) {
        return;
    }
    var a = color.a, b = color.b, g = color.g, r = color.r;
    var _a = rgb2hsv(r, g, b), h = _a.h, s = _a.s, v = _a.v;
    return {
        a: a,
        b: b,
        g: g,
        h: h,
        hex: rgb2hex(r, g, b),
        r: r,
        s: s,
        str: inputColor,
        v: v
    };
}
function getColorFromRGBA(rgba) {
    var a = rgba.a, b = rgba.b, g = rgba.g, r = rgba.r;
    var _a = rgb2hsv(r, g, b), h = _a.h, s = _a.s, v = _a.v;
    var hex = rgb2hex(r, g, b);
    return {
        a: a,
        b: b,
        g: g,
        h: h,
        hex: hex,
        r: r,
        s: s,
        str: (a === 100) ? "#" + hex : "rgba(" + r + ", " + g + ", " + b + ", " + a / 100 + ")",
        v: v
    };
}
function updateSV(color, s, v) {
    var _a = hsv2rgb(color.h, s, v), r = _a.r, g = _a.g, b = _a.b;
    var hex = rgb2hex(r, g, b);
    return {
        a: color.a,
        b: b,
        g: g,
        h: color.h,
        hex: hex,
        r: r,
        s: s,
        str: (color.a === 100) ? "#" + hex : "rgba(" + r + ", " + g + ", " + b + ", " + color.a / 100 + ")",
        v: v
    };
}
function updateH(color, h) {
    var _a = hsv2rgb(h, color.s, color.v), r = _a.r, g = _a.g, b = _a.b;
    var hex = rgb2hex(r, g, b);
    return {
        a: color.a,
        b: b,
        g: g,
        h: h,
        hex: hex,
        r: r,
        s: color.s,
        str: (color.a === 100) ? "#" + hex : "rgba(" + r + ", " + g + ", " + b + ", " + color.a / 100 + ")",
        v: color.v
    };
}
function updateA(color, a) {
    return Object.assign({}, color, {
        a: a,
        str: (a === 100) ? "#" + color.hex : "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + a / 100 + ")"
    });
}
function _numberToPaddedHex(num) {
    var hex = num.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
function _named(str) {
    var c = COLOR_VALUES[str.toLowerCase()];
    if (c) {
        return {
            r: c[0],
            g: c[1],
            b: c[2],
            a: 100
        };
    }
}
function _rgb(str) {
    if (0 === str.indexOf('rgb(')) {
        str = (str.match(/rgb\(([^)]+)\)/))[1];
        var parts = str.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2],
            a: 100
        };
    }
}
function _rgba(str) {
    if (str.indexOf('rgba(') === 0) {
        str = (str.match(/rgba\(([^)]+)\)/))[1];
        var parts = str.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2],
            a: parts[3] * 100
        };
    }
}
function _hex6(str) {
    if ('#' === str[0] && 7 === str.length) {
        return {
            r: parseInt(str.slice(1, 3), 16),
            g: parseInt(str.slice(3, 5), 16),
            b: parseInt(str.slice(5, 7), 16),
            a: 100
        };
    }
}
function _hex3(str) {
    if ('#' === str[0] && 4 === str.length) {
        return {
            r: parseInt(str[1] + str[1], 16),
            g: parseInt(str[2] + str[2], 16),
            b: parseInt(str[3] + str[3], 16),
            a: 100
        };
    }
}
function _hsl(str) {
    if (str.indexOf('hsl(') === 0) {
        str = (str.match(/hsl\(([^)]+)\)/))[1];
        var parts = str.split(/ *, */);
        var h = parseInt(parts[0], 10);
        var s = parseInt(parts[1], 10);
        var l = parseInt(parts[2], 10);
        var rgba = hsl2rgb(h, s, l);
        rgba.a = 100;
        return rgba;
    }
}
function _hsla(str) {
    if (str.indexOf('hsla(') === 0) {
        str = (str.match(/hsla\(([^)]+)\)/))[1];
        var parts = str.split(/ *, */);
        var h = parseInt(parts[0], 10);
        var s = parseInt(parts[1], 10);
        var l = parseInt(parts[2], 10);
        var a = parseInt(parts[3], 10) * 100;
        var rgba = hsl2rgb(h, s, l);
        rgba.a = a;
        return rgba;
    }
}

var __extends$8 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends$8(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
var Action_2 = Action;


var Action_1 = {
	Action: Action_2
};

var __extends$9 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends$9(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
var AsyncAction_2 = AsyncAction;


var AsyncAction_1 = {
	AsyncAction: AsyncAction_2
};

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
var Scheduler_2 = Scheduler;


var Scheduler_1 = {
	Scheduler: Scheduler_2
};

var __extends$10 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AsyncScheduler = (function (_super) {
    __extends$10(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
var AsyncScheduler_2 = AsyncScheduler;


var AsyncScheduler_1 = {
	AsyncScheduler: AsyncScheduler_2
};

/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
var async_1 = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);


var async = {
	async: async_1
};

var __extends$11 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async.async; }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
var debounceTime_2 = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends$11(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


var debounceTime_1 = {
	debounceTime: debounceTime_2
};

/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime$1(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async.async; }
    return debounceTime_1.debounceTime(dueTime, scheduler)(this);
}
var debounceTime_3 = debounceTime$1;


var debounceTime_2$1 = {
	debounceTime: debounceTime_3
};

Observable_1.Observable.prototype.debounceTime = debounceTime_2$1.debounceTime;

var UifColorPickerComponent = /** @class */ (function () {
    function UifColorPickerComponent(elRef) {
        this.elRef = elRef;
        this.COLOR_RECT = '#FFFFFF';
        this.color = new UIfColorPickerModel();
        this.hex = '#FFFFFF';
        this.hexChange = new EventEmitter();
        this.colorRectId = 'COLOR_RECT' + GetRandomInt();
        this.colorRectThumbActive = false;
        this.colorHueSlideThumbActive = false;
        this.colorAlphaSlideThumbActive = false;
        this.eventSubscribers = new EventSubscribers();
    }
    UifColorPickerComponent.prototype.ngOnInit = function () {
        this.init();
    };
    UifColorPickerComponent.prototype.init = function () {
        this.color = getColorFromString(this.hex);
    };
    UifColorPickerComponent.prototype.ngOnDestroy = function () {
        this.eventSubscribers.clearSubscribers();
    };
    UifColorPickerComponent.prototype.ngAfterViewInit = function () {
        this.createListeners();
        this.initFns();
    };
    UifColorPickerComponent.prototype.initFns = function () {
        this.initiazlizeColorRect();
        this.initializeColorRectThumb();
        this.initializeHueSlider();
        this.initializeAlphaSlider();
        this.updateColorRectThumbColor();
        this.updateAlphaSlideOverlay();
    };
    UifColorPickerComponent.prototype.initiazlizeColorRect = function () {
        var _this = this;
        var color = Object.assign({}, this.color);
        var updateColorForColoRect = updateSV(this.color, 100, 100);
        setTimeout(function () {
            _this.COLOR_RECT = updateColorForColoRect.str;
        });
    };
    UifColorPickerComponent.prototype.initializeColorRectThumb = function () {
        var xPercentForColorRectThumb = (this.color.s / MAX_COLOR_SATURATION) * 100;
        var yPercentForColorRectThumb = ((MAX_COLOR_VALUE - this.color.v) / MAX_COLOR_VALUE) * 100;
        this.assignColorRectThumbPosition(xPercentForColorRectThumb, yPercentForColorRectThumb);
    };
    UifColorPickerComponent.prototype.initializeHueSlider = function () {
        var xPercentForHueSliderThumb = (this.color.h / MAX_COLOR_HUE) * 100;
        this.assignColorHueSliderThumbPosition(xPercentForHueSliderThumb);
    };
    UifColorPickerComponent.prototype.initializeAlphaSlider = function () {
        var xPercentForAlphaSliderThumb = (this.color.a / 100) * 100;
        this.assignColorAlphaSliderThumbPosition(xPercentForAlphaSliderThumb);
    };
    UifColorPickerComponent.prototype.createListeners = function () {
        var _this = this;
        this.eventSubscribers.clearSubscribers();
        if (this.colorRect) {
            this.colorRectProps = this.colorRect.nativeElement.getBoundingClientRect();
            this.eventSubscribers.pushSubscriber({
                name: 'onMouseDownListenerForColorRect',
                subscripiton: Observable_2.fromEvent(this.colorRect.nativeElement, 'mousedown')
                    .subscribe(function ($event) {
                    _this.colorRectThumbActive = true;
                }),
                meta: 'colorRect'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onClickListenerForColorRect',
                subscripiton: Observable_2.fromEvent(this.colorRect.nativeElement, 'click')
                    .subscribe(function ($event) {
                    _this.onColorRectMouseMove($event, true);
                }),
                meta: 'colorRect'
            });
        }
        if (this.colorHueSlide) {
            this.colorHueSlideProps = this.colorHueSlide.nativeElement.getBoundingClientRect();
            this.eventSubscribers.pushSubscriber({
                name: 'onMouseDownListenerForColorHueSlide',
                subscripiton: Observable_2.fromEvent(this.colorHueSlide.nativeElement, 'mousedown')
                    .subscribe(function ($event) {
                    _this.colorHueSlideThumbActive = true;
                }),
                meta: 'colorHueSlide'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onClickListenerForColorRect',
                subscripiton: Observable_2.fromEvent(this.colorHueSlide.nativeElement, 'click')
                    .subscribe(function ($event) {
                    _this.onColorHueSlideMouseMove($event, true);
                }),
                meta: 'colorHueSlide'
            });
        }
        if (this.colorAlphaSlide) {
            this.colorAlphaSlideProps = this.colorAlphaSlide.nativeElement.getBoundingClientRect();
            this.eventSubscribers.pushSubscriber({
                name: 'onMouseDownListenerForColorAlphaSlider',
                subscripiton: Observable_2.fromEvent(this.colorAlphaSlide.nativeElement, 'mousedown')
                    .subscribe(function ($event) {
                    _this.colorAlphaSlideThumbActive = true;
                }),
                meta: 'colorAlphaSlide'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onClickListenerForColorAlphaSlider',
                subscripiton: Observable_2.fromEvent(this.colorAlphaSlide.nativeElement, 'click')
                    .subscribe(function ($event) {
                    _this.onColorAlphaSlideMouseMove($event, true);
                }),
                meta: 'colorAlphaSlide'
            });
        }
        this.eventSubscribers.pushSubscriber({
            name: 'onMouseMoveListener',
            subscripiton: Observable_2.fromEvent(document, 'mousemove')
                .subscribe(function ($event) {
                _this.onColorRectMouseMove($event);
                _this.onColorHueSlideMouseMove($event);
                _this.onColorAlphaSlideMouseMove($event);
            }),
            meta: 'document'
        });
        this.eventSubscribers.pushSubscriber({
            name: 'onMouseUpListener',
            subscripiton: Observable_2.fromEvent(document, 'mouseup')
                .subscribe(function ($event) {
                setTimeout(function () {
                    if (_this.colorRectThumbActive) {
                        _this.colorRectThumbActive = false;
                    }
                    if (_this.colorHueSlideThumbActive) {
                        _this.colorHueSlideThumbActive = false;
                    }
                    if (_this.colorAlphaSlideThumbActive) {
                        _this.colorAlphaSlideThumbActive = false;
                    }
                });
            }),
            meta: 'document'
        });
        this.eventSubscribers.pushSubscriber({
            name: 'onScrollListener',
            subscripiton: Observable_2.fromEvent(document, 'scroll')
                .debounceTime(100)
                .subscribe(function ($event) {
                _this.collectProps();
            }),
            meta: 'document'
        });
        this.eventSubscribers.pushSubscriber({
            name: 'onResizeListener',
            subscripiton: Observable_2.fromEvent(window, 'resize')
                .debounceTime(100)
                .subscribe(function ($event) {
                _this.collectProps();
            }),
            meta: 'window'
        });
        var scrollElm = GetScrollParent(this.elRef.nativeElement);
        if (scrollElm) {
            this.eventSubscribers.pushSubscriber({
                name: 'onScrollListener',
                subscripiton: Observable_2.fromEvent(scrollElm, 'scroll')
                    .debounceTime(100)
                    .subscribe(function ($event) {
                    _this.collectProps();
                }),
                meta: 'scrollElm'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onResizeListener',
                subscripiton: Observable_2.fromEvent(scrollElm, 'resize')
                    .debounceTime(100)
                    .subscribe(function ($event) {
                    _this.collectProps();
                }),
                meta: 'scrollElm'
            });
        }
    };
    UifColorPickerComponent.prototype.collectProps = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.colorRect) {
                _this.colorRectProps = _this.colorRect.nativeElement.getBoundingClientRect();
            }
            if (_this.colorHueSlide) {
                _this.colorHueSlideProps = _this.colorHueSlide.nativeElement.getBoundingClientRect();
            }
            if (_this.colorAlphaSlide) {
                _this.colorAlphaSlideProps = _this.colorAlphaSlide.nativeElement.getBoundingClientRect();
            }
        });
    };
    UifColorPickerComponent.prototype.onColorRectMouseMove = function ($event, forceFalse) {
        if (forceFalse === void 0) { forceFalse = false; }
        if (this.colorRectThumbActive) {
            if (this.colorRectProps) {
                var x = $event.clientX - this.colorRectProps.left;
                x = x;
                x = x < 0 ? 0 : x;
                x = x > this.colorRectProps.width ? this.colorRectProps.width : x;
                var y = $event.clientY - this.colorRectProps.top;
                y = y;
                y = y < 0 ? 0 : y;
                y = y > this.colorRectProps.height ? this.colorRectProps.height : y;
                var xPercent = (x / this.colorRectProps.width) * 100;
                var yPercent = (y / this.colorRectProps.height) * 100;
                this.assignColorRectThumbPosition(Math.round(xPercent), Math.round(yPercent));
                var sValue = Math.round((xPercent * MAX_COLOR_SATURATION) / 100);
                var vValue = Math.round(((100 - yPercent) * MAX_COLOR_VALUE) / 100);
                this.onColorSVUpdate(sValue, vValue);
            }
        }
        if (forceFalse) {
            this.colorRectThumbActive = false;
        }
    };
    UifColorPickerComponent.prototype.assignColorRectThumbPosition = function (xPercent, yPercent) {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.colorRectThumb.nativeElement.style.left = xPercent + '%';
            _this.colorRectThumb.nativeElement.style.top = yPercent + '%';
        });
    };
    UifColorPickerComponent.prototype.onColorHueSlideMouseMove = function ($event, forceFalse) {
        if (forceFalse === void 0) { forceFalse = false; }
        if (this.colorHueSlideThumbActive) {
            if (this.colorHueSlideProps) {
                var x = $event.clientX - this.colorHueSlideProps.left;
                x = x;
                x = x < 0 ? 0 : x;
                x = x > this.colorHueSlideProps.width ? this.colorHueSlideProps.width : x;
                var xPercent = (x / this.colorHueSlideProps.width) * 100;
                this.assignColorHueSliderThumbPosition(Math.round(xPercent));
                var hueValue = Math.round((xPercent * MAX_COLOR_HUE) / 100);
                this.onColorHueUpadate(hueValue);
            }
        }
        if (forceFalse) {
            this.colorHueSlideThumbActive = false;
        }
    };
    UifColorPickerComponent.prototype.assignColorHueSliderThumbPosition = function (xPercent) {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.colorHueSlideThumb.nativeElement.style.left = xPercent + '%';
        });
    };
    UifColorPickerComponent.prototype.onColorAlphaSlideMouseMove = function ($event, forceFalse) {
        if (forceFalse === void 0) { forceFalse = false; }
        if (this.colorAlphaSlideThumbActive) {
            if (this.colorAlphaSlideProps) {
                var x = $event.clientX - this.colorAlphaSlideProps.left;
                x = x;
                x = x < 0 ? 0 : x;
                x = x > this.colorAlphaSlideProps.width ? this.colorAlphaSlideProps.width : x;
                var xPercent = (x / this.colorAlphaSlideProps.width) * 100;
                this.assignColorAlphaSliderThumbPosition(Math.round(xPercent));
                var alphaValue = Math.round((xPercent * 100) / 100);
                this.onColorAlphaUpdate(alphaValue);
            }
        }
        if (forceFalse) {
            this.colorAlphaSlideThumbActive = false;
        }
    };
    UifColorPickerComponent.prototype.assignColorAlphaSliderThumbPosition = function (xPercent) {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.colorAlphaSlideThumb.nativeElement.style.left = xPercent + '%';
        });
    };
    UifColorPickerComponent.prototype.updateColorRectThumbColor = function () {
        if (this.colorRectThumb) {
            this.colorRectThumb.nativeElement.style.backgroundColor = this.color.str;
        }
    };
    UifColorPickerComponent.prototype.updateAlphaSlideOverlay = function () {
        if (this.colorAlphaSlideOverlay) {
            this.colorAlphaSlideOverlay.nativeElement.style.background =
                "linear-gradient(to right, transparent 0px, rgba(" + this.color.r + ", " + this.color.g + ", " + this.color.b + ", " + this.color.a / 100 + ") 100%)";
        }
    };
    UifColorPickerComponent.prototype.onColorSVUpdate = function (s, v) {
        this.color = updateSV(this.color, s, v);
        this.updateColorRectThumbColor();
        this.updateAlphaSlideOverlay();
        this.hex = this.color.str;
        this.hexChange.emit(this.hex);
    };
    UifColorPickerComponent.prototype.onColorHueUpadate = function (hue) {
        this.color = updateH(this.color, hue);
        this.initiazlizeColorRect();
        this.initializeColorRectThumb();
        this.updateColorRectThumbColor();
        this.updateAlphaSlideOverlay();
        this.hex = this.color.str;
        this.hexChange.emit(this.hex);
    };
    UifColorPickerComponent.prototype.onColorAlphaUpdate = function (alpha) {
        this.color = updateA(this.color, alpha);
        this.hex = this.color.str;
        this.hexChange.emit(this.hex);
        this.initiazlizeColorRect();
        this.initializeColorRectThumb();
        this.updateColorRectThumbColor();
        this.updateAlphaSlideOverlay();
    };
    UifColorPickerComponent.prototype.onHexInputChange = function () {
        var hex = this.color.hex;
        var color = getColorFromString("#" + hex);
        if (this.isValidColor(color)) {
            this.color = color;
            this.initFns();
            this.hex = this.color.str;
            this.hexChange.emit(this.hex);
        }
    };
    UifColorPickerComponent.prototype.onRGBAInputChange = function () {
        var color = getColorFromRGBA({ r: this.color.r, g: this.color.g, b: this.color.b, a: this.color.a });
        if (this.isValidColor(color)) {
            this.color = color;
            this.initFns();
            this.hex = this.color.str;
            this.hexChange.emit(this.hex);
        }
    };
    UifColorPickerComponent.prototype.isValidColor = function (color) {
        return typeof color !== 'undefined'
            && typeof color.r !== 'undefined' && color.r >= 0 && color.r <= 255
            && typeof color.g !== 'undefined' && color.g >= 0 && color.g <= 255
            && typeof color.b !== 'undefined' && color.b >= 0 && color.b <= 255
            && typeof color.a !== 'undefined' && color.a >= 0 && color.a <= 100
            && typeof color.h !== 'undefined'
            && typeof color.s !== 'undefined'
            && typeof color.v !== 'undefined'
            && typeof color.hex !== 'undefined' && color.hex !== 'NaNNaNNaN'
            && typeof color.str !== 'undefined';
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifColorPickerComponent.prototype, "hex", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifColorPickerComponent.prototype, "hexChange", void 0);
    __decorate([
        ViewChild('colorRect'),
        __metadata("design:type", Object)
    ], UifColorPickerComponent.prototype, "colorRect", void 0);
    __decorate([
        ViewChild('colorRectThumb'),
        __metadata("design:type", Object)
    ], UifColorPickerComponent.prototype, "colorRectThumb", void 0);
    __decorate([
        ViewChild('colorHueSlide'),
        __metadata("design:type", Object)
    ], UifColorPickerComponent.prototype, "colorHueSlide", void 0);
    __decorate([
        ViewChild('colorHueSlideThumb'),
        __metadata("design:type", Object)
    ], UifColorPickerComponent.prototype, "colorHueSlideThumb", void 0);
    __decorate([
        ViewChild('colorAlphaSlide'),
        __metadata("design:type", Object)
    ], UifColorPickerComponent.prototype, "colorAlphaSlide", void 0);
    __decorate([
        ViewChild('colorAlphaSlideThumb'),
        __metadata("design:type", Object)
    ], UifColorPickerComponent.prototype, "colorAlphaSlideThumb", void 0);
    __decorate([
        ViewChild('colorAlphaSlideOverlay'),
        __metadata("design:type", Object)
    ], UifColorPickerComponent.prototype, "colorAlphaSlideOverlay", void 0);
    UifColorPickerComponent = __decorate([
        Component({
            selector: 'uif-color-picker',
            template: "<div class=\"ms-ColorPicker\">\n    <div class=\"ms-ColorPicker-panel\">\n        <div class=\"ms-ColorPicker-colorRect\"\n            #colorRect\n            [style.backgroundColor]=\"COLOR_RECT\"\n            style=\"min-width: 220px; min-height: 220px;\">\n            <div class=\"ms-ColorPicker-light\"></div>\n            <div class=\"ms-ColorPicker-dark\"></div>\n            <div class=\"ms-ColorPicker-thumb\"\n            #colorRectThumb\n            style=\"left:0%; top: 0%; background-color: rgb(172, 54, 54);\"></div>\n        </div>\n        <div class=\"ms-ColorPicker-slider is-hue\" #colorHueSlide>\n            <div class=\"ms-ColorPicker-sliderOverlay\"></div>\n            <div class=\"ms-ColorPicker-thumb is-slider\" #colorHueSlideThumb style=\"left: 0%;\"></div>\n        </div>\n        <div class=\"ms-ColorPicker-slider is-alpha\" #colorAlphaSlide>\n            <div class=\"ms-ColorPicker-sliderOverlay\" #colorAlphaSlideOverlay style=\"background: linear-gradient(to right, transparent 0px, rgb(172, 54, 54) 100%);\"></div>\n            <div class=\"ms-ColorPicker-thumb is-slider\" #colorAlphaSlideThumb style=\"left: 100%;\"></div>\n        </div>\n        <table class=\"ms-ColorPicker-table\" cellpadding=\"0\" cellspacing=\"0\">\n            <thead>\n                <tr class=\"\">\n                    <td class=\"\">Hex</td>\n                    <td>Red</td>\n                    <td>Green</td>\n                    <td>Blue</td>\n                    <td>Alpha</td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        <div class=\"ms-TextField ms-ColorPicker-input\">\n                            <div class=\"ms-TextField-wrapper\">\n                                <div class=\"ms-TextField-fieldGroup\">\n                                    <input [(ngModel)]=\"color.hex\" (input)=\"onHexInputChange()\" type=\"text\" id=\"TextField259\" class=\"ms-TextField-field\" spellcheck=\"false\" >\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                    <td style=\"width:18%;\">\n                        <div class=\"ms-TextField ms-ColorPicker-input\">\n                            <div class=\"ms-TextField-wrapper\">\n                                <div class=\"ms-TextField-fieldGroup\">\n                                    <input [(ngModel)]=\"color.r\" (input)=\"onRGBAInputChange()\" type=\"number\" id=\"TextField261\" class=\"ms-TextField-field\" min=\"0\" max=\"255\" step=\"1\" >\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class=\"ms-TextField ms-ColorPicker-input\">\n                            <div class=\"ms-TextField-wrapper\">\n                                <div class=\"ms-TextField-fieldGroup\">\n                                    <input [(ngModel)]=\"color.g\" (input)=\"onRGBAInputChange()\" type=\"number\" id=\"TextField263\" class=\"ms-TextField-field\" min=\"0\" max=\"255\" step=\"1\" >\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class=\"ms-TextField ms-ColorPicker-input\">\n                            <div class=\"ms-TextField-wrapper\">\n                                <div class=\"ms-TextField-fieldGroup\">\n                                    <input [(ngModel)]=\"color.b\" (input)=\"onRGBAInputChange()\" type=\"number\" id=\"TextField265\" class=\"ms-TextField-field\" min=\"0\" max=\"255\" step=\"1\" >\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class=\"ms-TextField ms-ColorPicker-input\">\n                            <div class=\"ms-TextField-wrapper\">\n                                <div class=\"ms-TextField-fieldGroup\">\n                                    <input [(ngModel)]=\"color.a\" (input)=\"onRGBAInputChange()\" type=\"number\" id=\"TextField267\" class=\"ms-TextField-field\" min=\"0\" max=\"100\" step=\"1\" >\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>",
            styles: [".ms-ColorPicker {\n  position: relative;\n  max-width: 300px; }\n  .ms-ColorPicker .ms-ColorPicker-panel {\n    padding: 16px; }\n    .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-colorRect {\n      position: relative;\n      margin-bottom: 10px;\n      user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-colorRect .ms-ColorPicker-light {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: -webkit-gradient(linear, left top, right top, from(white), to(transparent));\n        background: linear-gradient(to right, white 0%, transparent 100%);\n        user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-colorRect .ms-ColorPicker-dark {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: -webkit-gradient(linear, left top, left bottom, color-stop(0, transparent), to(#000));\n        background: linear-gradient(to bottom, transparent 0, #000 100%);\n        user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-colorRect .ms-ColorPicker-thumb {\n        position: absolute;\n        width: 20px;\n        height: 20px;\n        background: white;\n        border: 1px solid rgba(255, 255, 255, 0.8);\n        border-radius: 50%;\n        -webkit-box-shadow: 0 0 15px -5px black;\n        box-shadow: 0 0 15px -5px black;\n        -webkit-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none; }\n    .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-slider {\n      position: relative;\n      height: 20px;\n      margin-bottom: 5px;\n      border: 1px solid #eaeaea;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-slider.is-hue {\n        background: linear-gradient(to left, red 0, #f09 10%, #cd00ff 20%, #3200ff 30%, #06f 40%, #00fffd 50%, #0f6 60%, #35ff00 70%, #cdff00 80%, #f90 90%, red 100%); }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-slider.is-alpha {\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==); }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-slider .ms-ColorPicker-sliderOverlay {\n        content: '';\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-slider .ms-ColorPicker-thumb {\n        position: absolute;\n        width: 20px;\n        height: 20px;\n        background: white;\n        border: 1px solid rgba(255, 255, 255, 0.8);\n        border-radius: 50%;\n        -webkit-box-shadow: 0 0 15px -5px black;\n        box-shadow: 0 0 15px -5px black;\n        -webkit-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none; }\n        .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-slider .ms-ColorPicker-thumb.is-slider {\n          top: 50%; }\n    .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-table {\n      table-layout: fixed;\n      width: 100%; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-table thead tr {\n        font-family: \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\n        -webkit-font-smoothing: antialiased;\n        font-size: 12px;\n        font-weight: 400; }\n        .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-table thead tr td:first-child {\n          width: 25%; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-table tbody tr td:not(:first-child) {\n        width: 18%; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-table tbody tr td .ms-TextField-wrapper {\n        padding-right: 2px; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-table tbody tr td .ms-TextField {\n        width: 100%;\n        border: none;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        height: 30px;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        margin: 0;\n        padding: 0;\n        position: relative; }\n      .ms-ColorPicker .ms-ColorPicker-panel .ms-ColorPicker-table tbody tr td input.ms-TextField-field {\n        min-width: auto;\n        min-width: auto;\n        padding: 0 0 0 5px;\n        text-overflow: clip; }\n"]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object])
    ], UifColorPickerComponent);
    return UifColorPickerComponent;
    var _a;
}());

var UifModalHeaderComponent = /** @class */ (function () {
    function UifModalHeaderComponent() {
    }
    UifModalHeaderComponent = __decorate([
        Component({
            selector: 'uif-modal-header, [uifModalHeader]',
            styles: [
                ':host {display: inline-block; }'
            ],
            template: '<ng-content></ng-content>'
        })
    ], UifModalHeaderComponent);
    return UifModalHeaderComponent;
}());
var UifModalContentComponent = /** @class */ (function () {
    function UifModalContentComponent() {
    }
    UifModalContentComponent = __decorate([
        Component({
            selector: 'uif-modal-content, [uifModalContent]',
            styles: [
                ':host {display: inline-block; }'
            ],
            template: '<ng-content></ng-content>'
        })
    ], UifModalContentComponent);
    return UifModalContentComponent;
}());
var UifModalFooterComponent = /** @class */ (function () {
    function UifModalFooterComponent() {
    }
    UifModalFooterComponent = __decorate([
        Component({
            selector: 'uif-modal-footer, [uifModalFooter]',
            styles: [
                ':host {display: inline-block; }'
            ],
            template: '<ng-content></ng-content>'
        })
    ], UifModalFooterComponent);
    return UifModalFooterComponent;
}());

var UifModalComponent = /** @class */ (function () {
    function UifModalComponent() {
        this.isModal = true;
        this.isLargeHeader = true;
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isBlocking = true;
        this.isCloseable = true;
        this.size = UifModalSize.Default;
    }
    UifModalComponent.prototype.onOpenChange = function ($event) {
        this.isOpenChange.emit($event);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifModalComponent.prototype, "isLargeHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifModalComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifModalComponent.prototype, "isOpenChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifModalComponent.prototype, "isBlocking", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifModalComponent.prototype, "isCloseable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof UifModalSize !== "undefined" && UifModalSize) === "function" && _a || Object)
    ], UifModalComponent.prototype, "size", void 0);
    __decorate([
        ContentChild(UifModalHeaderComponent),
        __metadata("design:type", Object)
    ], UifModalComponent.prototype, "uifModalHeader", void 0);
    __decorate([
        ContentChild(UifModalContentComponent),
        __metadata("design:type", Object)
    ], UifModalComponent.prototype, "uifModalContent", void 0);
    __decorate([
        ContentChild(UifModalFooterComponent),
        __metadata("design:type", Object)
    ], UifModalComponent.prototype, "uifModalFooter", void 0);
    UifModalComponent = __decorate([
        Component({
            selector: 'uif-modal',
            template: "<uif-dialog [isOpen]=\"isOpen\" (isOpenChange)=\"onOpenChange($event)\" [isBlocking]=\"isBlocking\" [isCloseable]=\"isCloseable\" [isModal]=\"isModal\" [modalSize]=\"size\" [isLargeHeader]=\"isLargeHeader\">\n    <uif-dialog-header *ngIf=\"uifModalHeader\">\n        <ng-content select=\"uif-modal-header, [uifModalHeader]\"></ng-content>\n    </uif-dialog-header>\n    <uif-dialog-content *ngIf=\"uifModalContent\">\n        <ng-content select=\"uif-modal-content, [uifModalContent]\"></ng-content>\n    </uif-dialog-content>\n    <uif-dialog-footer *ngIf=\"uifModalFooter\">\n        <ng-content select=\"uif-modal-footer, [uifModalFooter]\"></ng-content>\n    </uif-dialog-footer>\n</uif-dialog>",
            styles: [""]
        })
    ], UifModalComponent);
    return UifModalComponent;
    var _a;
}());

var UifTooltipComponent = /** @class */ (function () {
    function UifTooltipComponent() {
        this.onTextEllipsis = false;
        this.maxWidth = '';
        this.showClose = false;
        this.isTooltip = true;
        this.calloutTriggerHint = UifCalloutTriggerHint.HoverInBlurOut;
        this.directionHint = UifCalloutDirectionalHint.TopCenter;
        this.gap = 5;
        this.showArrow = true;
    }
    __decorate([
        Input('uifTooltip'),
        __metadata("design:type", Object)
    ], UifTooltipComponent.prototype, "tooltipMsg", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTooltipComponent.prototype, "onTextEllipsis", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifTooltipComponent.prototype, "maxWidth", void 0);
    UifTooltipComponent = __decorate([
        Component({
            selector: '[uifTooltip]',
            template: "<uif-callout [(isOpen)]=\"isOpen\" [maxWidth]=\"maxWidth\" [onTextEllipsis]=\"onTextEllipsis\" [isTooltip]=\"isTooltip\" [appendToBody]=\"isTooltip\" [showHeader]=\"!isTooltip\" [showActions]=\"!isTooltip\" [showClose]=\"showClose\" [showArrow]=\"showArrow\" [directionalHint]=\"directionHint\" [gap]=\"gap\" [triggerHint]=\"calloutTriggerHint\"> \n    <uif-callout-content>{{tooltipMsg}}</uif-callout-content>\n    <span uifOpenCallout>\n        <ng-content></ng-content>\n    </span>\n</uif-callout>",
            styles: [""]
        })
    ], UifTooltipComponent);
    return UifTooltipComponent;
}());

var UifWizardService = /** @class */ (function () {
    function UifWizardService(cdr) {
        this.cdr = cdr;
        this.activePageIndexSubject = new Subject_2();
        this.isFinished = new Subject_2();
        this.isCancelled = new Subject_2();
        this.nextPageInvoke = new Subject_2();
        this.previousPageInvoke = new Subject_2();
        this.cancelWizardInvoke = new Subject_2();
        this.activePageId = new Subject_2();
        this.activePageId$ = this.activePageId.asObservable();
        this.isFinished$ = this.isFinished.asObservable();
        this.isCancelled$ = this.isCancelled.asObservable();
        this.nextPageInvoked$ = this.nextPageInvoke.asObservable();
        this.previousPageInvoked$ = this.previousPageInvoke.asObservable();
        this.cancelWizardInvoked$ = this.cancelWizardInvoke.asObservable();
        this.activePageIndex$ = this.activePageIndexSubject.asObservable();
    }
    UifWizardService.prototype.loadPages = function (pages) {
        this.pagesCollection = pages;
        this.initialize();
    };
    UifWizardService.prototype.init = function () {
        var _this = this;
        this.pagesCollection.forEach(function (page, index) {
            page.showPage = index === 0;
            if (index === 0) {
                _this.activePageIndex = 0;
                _this.activePageId.next(page.getId());
            }
        });
        this.activePageIndexSubject.next(this.activePageIndex);
        this.cdr.detectChanges();
    };
    UifWizardService.prototype.initialize = function () {
        var _this = this;
        this.pagesCollection.forEach(function (page, index) {
            if (!page.getId()) {
                page.setId('page_' + _this.getRandomInt());
            }
            page.showCancelBtn = true;
            page.showPreviousBtn = index !== 0;
            page.showNextBtn = index !== _this.pagesCollection.length - 1;
            page.showFinishBtn = index === _this.pagesCollection.length - 1;
        });
    };
    UifWizardService.prototype.activatePage = function (pageIndex) {
        var _this = this;
        var result = null;
        this.pagesCollection.forEach(function (page, index) {
            page.showPage = index === pageIndex;
            if (index === pageIndex) {
                _this.activePageIndex = index;
                _this.activePageId.next(page.getId());
                result = _this.activePageIndex;
            }
        });
        this.activePageIndexSubject.next(this.activePageIndex);
        return result;
    };
    UifWizardService.prototype.activatePreviousPage = function () {
        if (this.activePageIndex > 0) {
            var result = this.activatePage(this.activePageIndex - 1);
            if (result) {
                this.previousPageInvoke.next(result);
            }
        }
    };
    UifWizardService.prototype.activateNextPage = function () {
        if (this.activePageIndex < this.pagesCollection.length - 1) {
            var result = this.activatePage(this.activePageIndex + 1);
            if (result) {
                this.nextPageInvoke.next(result);
            }
        }
    };
    UifWizardService.prototype.finishWizard = function () {
        this.isFinished.next(true);
    };
    UifWizardService.prototype.resetWizard = function () {
        this.init();
    };
    UifWizardService.prototype.dismissWizard = function () {
        this.isCancelled.next(true);
        this.cancelWizardInvoke.next({});
    };
    UifWizardService.prototype.getRandomInt = function () {
        return Math.floor(Math.random() * 1000000);
    };
    UifWizardService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof ChangeDetectorRef !== "undefined" && ChangeDetectorRef) === "function" && _a || Object])
    ], UifWizardService);
    return UifWizardService;
    var _a;
}());

var UifWizardPageTitleComponent = /** @class */ (function () {
    function UifWizardPageTitleComponent() {
    }
    UifWizardPageTitleComponent = __decorate([
        Component({
            selector: 'uif-wizard-page-title, [uifWizardPageTitle]',
            template: '<ng-content></ng-content>'
        })
    ], UifWizardPageTitleComponent);
    return UifWizardPageTitleComponent;
}());

var UifWizardPageNavTitleComponent = /** @class */ (function () {
    function UifWizardPageNavTitleComponent() {
    }
    UifWizardPageNavTitleComponent = __decorate([
        Component({
            selector: 'uif-wizard-page-nav-title, [uifWizardPageNavTitle]',
            template: '<ng-content></ng-content>'
        })
    ], UifWizardPageNavTitleComponent);
    return UifWizardPageNavTitleComponent;
}());

var UifWizardPageComponent = /** @class */ (function () {
    function UifWizardPageComponent(sanitizer, wizardService) {
        this.sanitizer = sanitizer;
        this.wizardService = wizardService;
        this.showCancelButtonOverride = true;
        this.showPreviousButtonOverride = true;
        this.showNextButtonOverride = true;
        this.showFinishButtonOverride = true;
        this.disableCancelButtonOverride = false;
        this.disablePreviousButtonOverride = false;
        this.disableNextButtonOverride = false;
        this.disableFinishButtonOverride = false;
        this.wizardPageLoaded = new EventEmitter();
        this.showPage = false;
        this.showPreviousBtn = false;
        this.showNextBtn = false;
        this.showFinishBtn = false;
        this.showCancelBtn = false;
        this.id = null;
    }
    UifWizardPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('page loaded');
        this.wizardService.activePageId$.subscribe(function (id) {
            if (_this.getId() === id) {
                _this.wizardPageLoaded.emit();
            }
        });
    };
    UifWizardPageComponent.prototype.getTitle = function () {
        var result = '';
        if (this.navTitle && this.navTitle.nativeElement) {
            result = this.navTitle.nativeElement.innerHTML;
        }
        else if (this.title && this.title.nativeElement) {
            result = this.title.nativeElement.innerHTML;
        }
        return this.sanitizer.bypassSecurityTrustHtml(result);
    };
    UifWizardPageComponent.prototype.getId = function () {
        return this.id;
    };
    UifWizardPageComponent.prototype.setId = function (id) {
        this.id = id;
    };
    UifWizardPageComponent.prototype.goWizardPreviousPage = function () {
        this.wizardService.activatePreviousPage();
    };
    UifWizardPageComponent.prototype.goWizardNextPage = function () {
        this.wizardService.activateNextPage();
    };
    UifWizardPageComponent.prototype.goWizardFinish = function () {
        this.wizardService.finishWizard();
    };
    UifWizardPageComponent.prototype.goWizardCancel = function () {
        this.wizardService.dismissWizard();
    };
    __decorate([
        ContentChild(UifWizardPageTitleComponent, { read: ElementRef }),
        __metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object)
    ], UifWizardPageComponent.prototype, "title", void 0);
    __decorate([
        ContentChild(UifWizardPageNavTitleComponent, { read: ElementRef }),
        __metadata("design:type", typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" && _b || Object)
    ], UifWizardPageComponent.prototype, "navTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardPageComponent.prototype, "showCancelButtonOverride", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardPageComponent.prototype, "showPreviousButtonOverride", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardPageComponent.prototype, "showNextButtonOverride", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardPageComponent.prototype, "showFinishButtonOverride", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardPageComponent.prototype, "disableCancelButtonOverride", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardPageComponent.prototype, "disablePreviousButtonOverride", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardPageComponent.prototype, "disableNextButtonOverride", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardPageComponent.prototype, "disableFinishButtonOverride", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_c = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _c || Object)
    ], UifWizardPageComponent.prototype, "wizardPageLoaded", void 0);
    UifWizardPageComponent = __decorate([
        Component({
            selector: 'uif-wizard-page',
            template: "<div class=\"uif-wizard-page-content-container\" [hidden]=\"!showPage\" [class.shown]=\"showPage\">\n\t<div class=\"uif-wizard-page-header-container\">\n\t\t<ng-content select=\"uif-wizard-page-title, [uifWizardPageTitle]\"></ng-content>\n\t\t<span hidden>\n\t\t\t\t<ng-content select=\"uif-wizard-page-nav-title, [uifWizardPageNavTitle]\"></ng-content>\n\t\t</span>\n\t</div>\n\t<div class=\"uif-wizard-page-body-container\">\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"uif-wizard-page-footer-container\">\n\t\t<uif-button [disabled]=\"disableCancelButtonOverride\" [hidden]=\"!showCancelBtn || !showCancelButtonOverride\" (click)=\"goWizardCancel()\">Cancel</uif-button>\n\t\t<uif-button [disabled]=\"disablePreviousButtonOverride\" [hidden]=\"!showPreviousBtn || !showPreviousButtonOverride\" (click)=\"goWizardPreviousPage()\">Previous</uif-button>\n\t\t<uif-button [disabled]=\"disableNextButtonOverride\" [hidden]=\"!showNextBtn || !showNextButtonOverride\" (click)=\"goWizardNextPage()\">Next</uif-button>\n\t\t<uif-button [primary]=\"true\" [disabled]=\"disableFinishButtonOverride\" [hidden]=\"!showFinishBtn || !showFinishButtonOverride\" (click)=\"goWizardFinish()\">Finish</uif-button>\n\t</div>\n</div>",
            styles: [".uif-wizard-page-content-container {\n  width: 100%;\n  height: 100%; }\n  .uif-wizard-page-content-container.down-animation {\n    animation: fadein-item-down;\n    animation-duration: 0.367s; }\n  .uif-wizard-page-content-container.left-animation {\n    animation: fadein-item-left;\n    animation-duration: 0.367s; }\n  .uif-wizard-page-content-container .uif-wizard-page-header-container {\n    width: 100%;\n    height: 60px;\n    float: left;\n    line-height: 60px;\n    padding: 0 30px;\n    box-sizing: border-box; }\n  .uif-wizard-page-content-container .uif-wizard-page-body-container {\n    width: 100%;\n    height: calc(100% - 120px);\n    float: left;\n    padding: 0;\n    box-sizing: border-box; }\n  .uif-wizard-page-content-container .uif-wizard-page-footer-container {\n    width: 100%;\n    height: 60px;\n    float: left;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 0 15px; }\n    .uif-wizard-page-content-container .uif-wizard-page-footer-container uif-button {\n      margin-left: 15px; }\n"]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof DomSanitizer !== "undefined" && DomSanitizer) === "function" && _d || Object, typeof (_e = typeof UifWizardService !== "undefined" && UifWizardService) === "function" && _e || Object])
    ], UifWizardPageComponent);
    return UifWizardPageComponent;
    var _a, _b, _c, _d, _e;
}());

var UifWizardComponent = /** @class */ (function () {
    function UifWizardComponent(wizardService) {
        this.wizardService = wizardService;
        this.pages = null;
        this.classes = '';
        this.showPageIndexInNav = false;
        this.showStepMarkers = false;
        this.wizardNavigation = UiFWizardNavigation.SideNavigation;
        this.showNavTitles = true;
        this.wizardOnNext = new EventEmitter();
        this.wizardOnPrevious = new EventEmitter();
        this.wizardOnFinish = new EventEmitter();
        this.wizardOnCancel = new EventEmitter();
        this.UiFWizardNavigations = UiFWizardNavigation;
        this.activePageIndex = null;
        this.showLoader = false;
        this.showWizard = false;
    }
    UifWizardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.pages.changes.subscribe(function (pages) {
            _this.wizardService.loadPages(pages);
        });
        this.wizardService.activePageIndex$.subscribe(function (i) {
            _this.activePageIndex = i;
        });
        this.wizardService.nextPageInvoked$.subscribe(function (i) {
            _this.wizardOnNext.emit(i);
        });
        this.wizardService.previousPageInvoked$.subscribe(function (i) {
            _this.wizardOnPrevious.emit(i);
        });
        this.wizardService.cancelWizardInvoked$.subscribe(function () {
            _this.close();
            _this.wizardOnCancel.emit();
        });
        this.wizardService.isFinished$.subscribe(function () {
            _this.wizardOnFinish.emit();
        });
        setTimeout(function () {
            _this.wizardService.loadPages(_this.pages);
            _this.wizardService.init();
        });
    };
    UifWizardComponent.prototype.activatePage = function (i) {
        this.wizardService.activatePage(i);
    };
    UifWizardComponent.prototype.reset = function () {
        console.log('reset');
        this.wizardService.resetWizard();
    };
    UifWizardComponent.prototype.open = function () {
        this.showWizard = true;
    };
    UifWizardComponent.prototype.close = function () {
        this.showWizard = false;
    };
    __decorate([
        ContentChildren(UifWizardPageComponent),
        __metadata("design:type", typeof (_a = typeof QueryList !== "undefined" && QueryList) === "function" && _a || Object)
    ], UifWizardComponent.prototype, "pages", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardComponent.prototype, "classes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardComponent.prototype, "showPageIndexInNav", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardComponent.prototype, "showStepMarkers", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_b = typeof UiFWizardNavigation !== "undefined" && UiFWizardNavigation) === "function" && _b || Object)
    ], UifWizardComponent.prototype, "wizardNavigation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifWizardComponent.prototype, "showNavTitles", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_c = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _c || Object)
    ], UifWizardComponent.prototype, "wizardOnNext", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_d = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _d || Object)
    ], UifWizardComponent.prototype, "wizardOnPrevious", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_e = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _e || Object)
    ], UifWizardComponent.prototype, "wizardOnFinish", void 0);
    __decorate([
        Output(),
        __metadata("design:type", typeof (_f = typeof EventEmitter !== "undefined" && EventEmitter) === "function" && _f || Object)
    ], UifWizardComponent.prototype, "wizardOnCancel", void 0);
    UifWizardComponent = __decorate([
        Component({
            selector: 'uif-wizard',
            template: "<ng-template #lightWizardNav>\n\t<ul class=\"uif-wizard-nav\" [class.stepMarkersAdded]=\"showStepMarkers\" [class.vert-line]=\"wizardNavigation == UiFWizardNavigations.SideNavigation\" [class.navTitlesHidden]=\"!showNavTitles\">\n\t\t<li [class.done]=\"i < activePageIndex\" [attr.index]=\"i + 1\" [class.active]=\"i === activePageIndex\" *ngFor=\"let page of pages; let i = index\"\n\t\t (click)=\"activatePage(i)\">\n\t\t\t<span [hidden]=\"!showPageIndexInNav\"><strong>{{i + 1}} : </strong></span><span [hidden]=\"!showNavTitles\" class=\"navTitles\"\n\t\t\t [innerHTML]=\"page.getTitle()\"></span>\n\t\t</li>\n\t</ul>\n</ng-template>\n<div class=\"uif-wizard-container\" [hidden]=\"!showWizard\" [ngClass]=\"classes\">\n\t<div class=\"uif-wizard-nav-container\" [hidden]=\"wizardNavigation != UiFWizardNavigations.SideNavigation\" [class.hideNavTitles]=\"!showNavTitles\">\n\t\t<div class=\"uif-wizard-title\" [hidden]=\" !showNavTitles\">\n\t\t\t<span><ng-content select=\"uif-wizard-title, [uifWizardTitle]\"></ng-content></span>\n\t\t</div>\n\t\t<ng-container *ngTemplateOutlet=\"lightWizardNav\"></ng-container>\n\t</div>\n\t<div class=\"uif-wizard-page-container\">\n\t\t<div class=\"uif-wizard-content-container\">\n\t\t\t<div class=\"uif-wizard-top-nav\" [hidden]=\"wizardNavigation != UiFWizardNavigations.TopNavigation\">\n\t\t\t\t<ng-container *ngTemplateOutlet=\"lightWizardNav\"></ng-container>\n\t\t\t</div>\n\t\t\t<div class=\"uif-wizard-content-page \" \n\t\t\t[class.page-anim-down]=\"wizardNavigation === UiFWizardNavigations.SideNavigation\"\n\t\t\t[class.page-anim-left]=\"wizardNavigation !== UiFWizardNavigations.SideNavigation\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t\t<div class=\"uif-wizard-loader-container\" [hidden]=\"!showLoader\">\n\t\t\t\t\t\t<div class=\"uif-wizard-loader-overlay\">\n\t\t\t\t\t\t\t<ng-content select=\"uif-wizard-loader, [uifWizardLoader]\"></ng-content>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"uif-wizard-bottom-nav\" [hidden]=\"wizardNavigation != UiFWizardNavigations.BottomNavigation\">\n\t\t\t\t\t<ng-container *ngTemplateOutlet=\"lightWizardNav\"></ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>",
            styles: [
                ".uif-wizard-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  font-family: 'Roboto', sans-serif;\n  display: flex;\n  flex-flow: row; }\n  .uif-wizard-container .uif-wizard-loader-container {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n    .uif-wizard-container .uif-wizard-loader-container .uif-wizard-loader-overlay {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      float: right;\n      width: 100%;\n      height: calc(100% - 60px);\n      background-color: white; }\n  .uif-wizard-container .uif-wizard-nav-container {\n    order: 1;\n    background-color: #f6f6f6; }\n    .uif-wizard-container .uif-wizard-nav-container:not(.hideNavTitles) {\n      flex: 280px 0 1; }\n    .uif-wizard-container .uif-wizard-nav-container.hideNavTitles {\n      flex: auto 0 1; }\n    .uif-wizard-container .uif-wizard-nav-container .uif-wizard-title {\n      font-size: large;\n      font-weight: 500;\n      padding: 0 30px;\n      box-sizing: border-box;\n      min-height: 60px;\n      line-height: 60px;\n      color: rgba(0, 0, 0, 0.5); }\n      .uif-wizard-container .uif-wizard-nav-container .uif-wizard-title span {\n        line-height: normal; }\n  .uif-wizard-container .uif-wizard-page-container {\n    flex: 1;\n    order: 2;\n    height: 100%;\n    position: relative; }\n    .uif-wizard-container .uif-wizard-page-container .uif-wizard-content-container {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-flow: column;\n      position: relative; }\n    .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav {\n      flex: initial;\n      height: 60px;\n      max-height: 60px;\n      min-height: 60px;\n      order: 1;\n      display: flex; }\n      .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul {\n        width: auto;\n        height: 60px; }\n    .uif-wizard-container .uif-wizard-page-container .uif-wizard-content-page {\n      flex: 1;\n      order: 2;\n      overflow: hidden;\n      position: relative; }\n      .uif-wizard-container .uif-wizard-page-container .uif-wizard-content-page.page-anim-down /deep/ .uif-wizard-page-content-container.shown {\n        animation: fadein-item-down;\n        animation-duration: 0.367s; }\n      .uif-wizard-container .uif-wizard-page-container .uif-wizard-content-page.page-anim-left /deep/ .uif-wizard-page-content-container.shown {\n        animation: fadein-item-left;\n        animation-duration: 0.367s; }\n    .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav {\n      position: absolute;\n      bottom: 0;\n      left: 0; }\n    .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav,\n    .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav {\n      background: #f6f6f6;\n      height: 60px; }\n      .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav,\n      .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav {\n        position: relative;\n        white-space: nowrap; }\n        .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav.stepMarkersAdded li,\n        .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav.stepMarkersAdded li {\n          padding-left: 60px;\n          padding-right: 30px; }\n        .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav.navTitlesHidden:after,\n        .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav.navTitlesHidden:after {\n          content: '';\n          height: 1px;\n          width: calc(100% - 60px);\n          background: #E6E6E6;\n          position: absolute;\n          left: 35px;\n          top: 30px;\n          z-index: 1; }\n        .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav.navTitlesHidden li,\n        .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav.navTitlesHidden li {\n          width: 60px;\n          text-align: center;\n          padding: 0; }\n          .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav.navTitlesHidden li:before, .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav.navTitlesHidden li.active:before, .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav.navTitlesHidden li.done:before,\n          .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav.navTitlesHidden li:before,\n          .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav.navTitlesHidden li.active:before,\n          .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav.navTitlesHidden li.done:before {\n            content: attr(index);\n            left: 18px; }\n        .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav li,\n        .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav li {\n          line-height: 58px;\n          float: left; }\n          .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav li:before, .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav li.active:before, .uif-wizard-container .uif-wizard-page-container .uif-wizard-top-nav ul.uif-wizard-nav li.done:before,\n          .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav li:before,\n          .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav li.active:before,\n          .uif-wizard-container .uif-wizard-page-container .uif-wizard-bottom-nav ul.uif-wizard-nav li.done:before {\n            content: attr(index);\n            left: 18px; }\n\nul.uif-wizard-nav {\n  width: 100%;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #f6f6f6; }\n  ul.uif-wizard-nav.stepMarkersAdded {\n    position: relative; }\n    ul.uif-wizard-nav.stepMarkersAdded.navTitlesHidden li {\n      padding-left: 60px; }\n    ul.uif-wizard-nav.stepMarkersAdded.vert-line:after {\n      content: '';\n      height: calc(100% - 48px);\n      width: 1px;\n      background: #E0E0E0;\n      height: calc(100% - 48px);\n      position: absolute;\n      left: 42px;\n      top: 24px;\n      z-index: 1;\n      opacity: 0.90; }\n    ul.uif-wizard-nav.stepMarkersAdded li {\n      line-height: 60px;\n      padding-left: 75px;\n      position: relative; }\n      ul.uif-wizard-nav.stepMarkersAdded li:before {\n        content: attr(index);\n        line-height: 26px;\n        text-align: center;\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n        border: 1px solid #A0A0A0;\n        background: #f6f6f6;\n        position: absolute;\n        box-sizing: border-box;\n        top: 17px;\n        left: 30px;\n        z-index: 2;\n        font-size: small; }\n      ul.uif-wizard-nav.stepMarkersAdded li.active:before {\n        content: attr(index);\n        line-height: 26px;\n        text-align: center;\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n        border: 1px solid #0078D7;\n        background: #fafafa;\n        position: absolute;\n        box-sizing: border-box;\n        top: 17px;\n        left: 30px;\n        z-index: 2;\n        font-size: small; }\n      ul.uif-wizard-nav.stepMarkersAdded li.done:before {\n        content: attr(index);\n        line-height: 26px;\n        text-align: center;\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n        border: 1px solid #0078D7;\n        background: #0078D7;\n        color: #fff;\n        position: absolute;\n        box-sizing: border-box;\n        top: 17px;\n        left: 30px;\n        z-index: 2;\n        font-size: small; }\n  ul.uif-wizard-nav li {\n    font-size: medium;\n    padding: 0 30px;\n    box-sizing: border-box;\n    line-height: 48px;\n    min-height: 60px;\n    cursor: pointer;\n    transition: background 0.2s linear 0s; }\n    ul.uif-wizard-nav li * {\n      opacity: 0.75; }\n    ul.uif-wizard-nav li.active {\n      background-color: #fff; }\n      ul.uif-wizard-nav li.active * {\n        opacity: 1; }\n    ul.uif-wizard-nav li:hover, ul.uif-wizard-nav li:focus {\n      background-color: #fafafa; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ],
            providers: [UifWizardService]
        }),
        __metadata("design:paramtypes", [typeof (_g = typeof UifWizardService !== "undefined" && UifWizardService) === "function" && _g || Object])
    ], UifWizardComponent);
    return UifWizardComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

var UifCarouselService = /** @class */ (function () {
    function UifCarouselService() {
        this.activeIndex = null;
        this.activeIndexSubject = new Subject_2();
        this.intervalTimer = null;
        this.timerDelay = 2500;
        this.isPlaying = false;
        this.isPlayingSubject = new Subject_2();
        this.activeIndex$ = this.activeIndexSubject.asObservable();
        this.isPlaying$ = this.isPlayingSubject.asObservable();
    }
    UifCarouselService.prototype.loadItems = function (items, timerDelay, autoPlay) {
        var _this = this;
        if (timerDelay === void 0) { timerDelay = 2500; }
        if (autoPlay === void 0) { autoPlay = true; }
        this.timerDelay = 2500;
        this.carouselItems = items;
        this.carouselItems.forEach(function (item, index) {
            item.setId('crsl_item_' + GetRandomInt());
        });
        var activeItem = this.carouselItems.find(function (x) { return x.active; });
        this.carouselItems.forEach(function (item, index) {
            if (activeItem) {
                item.active = item.getId() === activeItem.getId();
            }
            else {
                item.active = index === 0;
            }
            if (item.active) {
                _this.activeIndex = index;
                _this.activeIndexSubject.next(_this.activeIndex);
            }
            item.emitOpenChange();
            item.processForClass();
        });
        this.isPlaying = autoPlay;
        this.isPlayingSubject.next(this.isPlaying);
        this.resetIntervalTimer();
        if (autoPlay) {
            this.setIntervalTimer();
        }
    };
    UifCarouselService.prototype.resetIntervalTimer = function () {
        if (this.intervalTimer) {
            clearInterval(this.intervalTimer);
            this.intervalTimer = null;
        }
    };
    UifCarouselService.prototype.setIntervalTimer = function () {
        var _this = this;
        if (this.intervalTimer) {
            this.resetIntervalTimer();
        }
        this.intervalTimer = setInterval(function () {
            _this.activateNextItem();
        }, this.timerDelay);
    };
    UifCarouselService.prototype.activateNextItem = function () {
        var nextIndex = this.activeIndex + 1;
        nextIndex = nextIndex >= this.carouselItems.length ? 0 : nextIndex;
        this.activateItem(nextIndex, 'left');
    };
    UifCarouselService.prototype.activatePreviousItem = function () {
        var nextIndex = this.activeIndex - 1;
        nextIndex = nextIndex < 0 ? this.carouselItems.length - 1 : nextIndex;
        this.activateItem(nextIndex, 'right');
    };
    UifCarouselService.prototype.activateItem = function (index, dir) {
        if (dir === void 0) { dir = 'left'; }
        this.carouselItems.forEach(function (item, iter) {
            item.active = iter === index;
            item.emitOpenChange();
            item.processForClass(dir);
        });
        this.activeIndex = index;
        this.activeIndexSubject.next(this.activeIndex);
    };
    UifCarouselService.prototype.togglePlaying = function () {
        this.isPlaying = !this.isPlaying;
        this.isPlayingSubject.next(this.isPlaying);
        if (this.isPlaying) {
            this.setIntervalTimer();
        }
        else {
            this.resetIntervalTimer();
        }
    };
    UifCarouselService = __decorate([
        Injectable()
    ], UifCarouselService);
    return UifCarouselService;
}());

var UifCarouselItemComponent = /** @class */ (function () {
    function UifCarouselItemComponent(elemRef) {
        this.elemRef = elemRef;
        this.active = false;
        this.activeChange = new EventEmitter();
    }
    UifCarouselItemComponent.prototype.getId = function () {
        return this._id;
    };
    UifCarouselItemComponent.prototype.setId = function (val) {
        this._id = val;
    };
    UifCarouselItemComponent.prototype.emitOpenChange = function () {
        this.activeChange.emit(this.active);
    };
    UifCarouselItemComponent.prototype.processForClass = function (dir) {
        if (dir === void 0) { dir = 'left'; }
        var elm = this.elemRef.nativeElement;
        if (elm) {
            var trgt = elm.querySelector('.uif-carousel-item-content');
            if (trgt) {
                if (this.active) {
                    trgt.classList.add('fade-in-item', dir);
                }
                else {
                    trgt.classList.remove('fade-in-item', 'left', 'right');
                }
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCarouselItemComponent.prototype, "active", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifCarouselItemComponent.prototype, "activeChange", void 0);
    UifCarouselItemComponent = __decorate([
        Component({
            selector: 'uif-carousel-item',
            template: "<div class=\"uif-carousel-item-content\" [hidden]=\"!active\"><ng-content></ng-content></div>",
            styles: [".uif-carousel-item-content {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.fade-in-item {\n  opacity: 1; }\n  .fade-in-item.left {\n    animation: fadein-item-left;\n    animation-duration: 1s; }\n  .fade-in-item.right {\n    animation: fadein-item-right;\n    animation-duration: 1s; }\n"]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object])
    ], UifCarouselItemComponent);
    return UifCarouselItemComponent;
    var _a;
}());

var UifCarouselComponent = /** @class */ (function () {
    function UifCarouselComponent(carouselService, elRef) {
        this.carouselService = carouselService;
        this.elRef = elRef;
        this.isPlaying = true;
        this.activeIndex = null;
        this.activeIndexChange = new EventEmitter();
        this.autoPlay = true;
        this.delay = 2500;
        this.initialized = false;
        this.eventSubscribers = new EventSubscribers();
    }
    UifCarouselComponent.prototype.ngOnChanges = function () {
        if (this.initialized) {
            this.carouselService.loadItems(this.carouselItems, this.delay, this.autoPlay);
        }
    };
    UifCarouselComponent.prototype.ngOnDestroy = function () {
        this.eventSubscribers.clearSubscribers();
    };
    UifCarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.carouselService.activeIndex$.subscribe(function (index) {
            _this.activeIndex = index;
            _this.activeIndexChange.emit(_this.activeIndex);
        });
        this.carouselService.isPlaying$.subscribe(function (isPlaying) {
            _this.isPlaying = isPlaying;
        });
        this.carouselItems.changes.subscribe(function (items) {
            _this.carouselService.loadItems(_this.carouselItems, _this.delay, _this.autoPlay);
        });
        setTimeout(function () {
            _this.carouselService.loadItems(_this.carouselItems, _this.delay, _this.autoPlay);
        });
        if (this.elRef) {
            this.eventSubscribers.clearSubscribers();
            this.eventSubscribers.pushSubscriber({
                name: 'onMouseOverListener',
                subscripiton: Observable_2.fromEvent(this.elRef.nativeElement, 'mouseover')
                    .subscribe(function ($event) {
                    if (_this.isPlaying) {
                        _this.carouselService.resetIntervalTimer();
                    }
                }),
                meta: 'carousel'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onMouseLeaveListener',
                subscripiton: Observable_2.fromEvent(this.elRef.nativeElement, 'mouseleave')
                    .subscribe(function ($event) {
                    if (_this.isPlaying) {
                        _this.carouselService.setIntervalTimer();
                    }
                }),
                meta: 'carousel'
            });
        }
        this.initialized = true;
    };
    UifCarouselComponent.prototype.togglePlaying = function () {
        this.carouselService.togglePlaying();
    };
    UifCarouselComponent.prototype.activateItem = function (i) {
        this.carouselService.activateItem(i);
    };
    UifCarouselComponent.prototype.activateNext = function () {
        this.carouselService.activateNextItem();
    };
    UifCarouselComponent.prototype.activatePrevious = function () {
        this.carouselService.activatePreviousItem();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCarouselComponent.prototype, "activeIndex", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifCarouselComponent.prototype, "activeIndexChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCarouselComponent.prototype, "autoPlay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifCarouselComponent.prototype, "delay", void 0);
    __decorate([
        ContentChildren(UifCarouselItemComponent),
        __metadata("design:type", typeof (_a = typeof QueryList !== "undefined" && QueryList) === "function" && _a || Object)
    ], UifCarouselComponent.prototype, "carouselItems", void 0);
    UifCarouselComponent = __decorate([
        Component({
            selector: 'uif-carousel',
            template: "<div class=\"uif-carousel-container\">\n    <div class=\"uif-carousel-flipper previous\" (click)=\"activatePrevious()\">\n        <i class=\"ms-Icon ms-Icon--ChevronLeft\"></i>\n    </div>\n    <div class=\"uif-carousel-flipper next\" (click)=\"activateNext()\">\n        <i class=\"ms-Icon ms-Icon--ChevronRight\"></i>\n    </div>\n    <div class=\"uif-carousel-sequence\">\n        <ul>\n            <li class=\"uif-carousel-sequence-indicator\" *ngFor=\"let item of carouselItems; let i = index\" [class.active]=\"item.active\" (click)=\"activateItem(i)\"></li>\n        </ul>\n    </div>\n    <div class=\"uif-carousel-pauseplay\" (click)=\"togglePlaying()\">\n        <i class=\"ms-Icon ms-Icon--Pause\" [hidden]=\"!isPlaying\"></i>\n        <i class=\"ms-Icon ms-Icon--Play\" [hidden]=\"isPlaying\"></i>\n    </div>\n    <div class=\"uif-carousel-content\">\n        <ng-content></ng-content>\n    </div>\n</div>",
            styles: [
                ".uif-carousel-container {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: relative; }\n  .uif-carousel-container .uif-carousel-flipper {\n    position: absolute;\n    height: 60px;\n    width: 36px;\n    text-align: center;\n    background: transparent;\n    line-height: 60px;\n    top: 50%;\n    margin-top: -30px;\n    z-index: 10; }\n    .uif-carousel-container .uif-carousel-flipper:not([disabled]) {\n      cursor: pointer; }\n    .uif-carousel-container .uif-carousel-flipper.previous {\n      left: 0; }\n    .uif-carousel-container .uif-carousel-flipper.next {\n      right: 0; }\n    .uif-carousel-container .uif-carousel-flipper:not([disbaled]):focus, .uif-carousel-container .uif-carousel-flipper:not([disbaled]):hover, .uif-carousel-container .uif-carousel-flipper:not([disbaled]):active {\n      background: rgba(0, 0, 0, 0.1); }\n    .uif-carousel-container .uif-carousel-flipper i {\n      text-shadow: 0px 0px 0px white; }\n  .uif-carousel-container .uif-carousel-sequence {\n    position: absolute;\n    z-index: 10;\n    height: 24px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    text-align: center; }\n    .uif-carousel-container .uif-carousel-sequence ul {\n      white-space: nowrap;\n      list-style: none;\n      padding: 0;\n      margin: 0; }\n      .uif-carousel-container .uif-carousel-sequence ul li {\n        display: inline-block;\n        width: 10px;\n        height: 10px;\n        box-sizing: border-box;\n        border: 1px solid #565656;\n        border-radius: 50%;\n        margin: 5px 3px 0 3px;\n        cursor: pointer;\n        box-shadow: 0px 0px 0px white;\n        vertical-align: top; }\n        .uif-carousel-container .uif-carousel-sequence ul li.active {\n          background: #565656; }\n  .uif-carousel-container .uif-carousel-pauseplay {\n    position: absolute;\n    z-index: 10;\n    right: 0;\n    bottom: 0;\n    height: 36px;\n    width: 36px;\n    text-align: center;\n    line-height: 36px; }\n    .uif-carousel-container .uif-carousel-pauseplay:not([disabled]) {\n      cursor: pointer; }\n    .uif-carousel-container .uif-carousel-pauseplay:not([disbaled]):focus, .uif-carousel-container .uif-carousel-pauseplay:not([disbaled]):hover, .uif-carousel-container .uif-carousel-pauseplay:not([disbaled]):active {\n      background: rgba(0, 0, 0, 0.05); }\n    .uif-carousel-container .uif-carousel-pauseplay i {\n      text-shadow: 0px 0px 0px white; }\n  .uif-carousel-container .uif-carousel-content {\n    width: 100%;\n    height: 100%;\n    background: #fafafa;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    padding: 0;\n    box-sizing: border-box;\n    overflow: hidden; }\n",
                "@keyframes fadein-item-down {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-up {\n  0% {\n    transform: translateY(5px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-left {\n  0% {\n    transform: translateX(10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-right {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadein-item-in {\n  0% {\n    transform: scale3d(0.98, 0.98, 0.98);\n    opacity: 0; }\n  100% {\n    transform: scale3d(1, 1, 1);\n    opacity: 1; } }\n"
            ],
            providers: [UifCarouselService]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof UifCarouselService !== "undefined" && UifCarouselService) === "function" && _b || Object, typeof (_c = typeof ElementRef !== "undefined" && ElementRef) === "function" && _c || Object])
    ], UifCarouselComponent);
    return UifCarouselComponent;
    var _a, _b, _c;
}());

var __extends$12 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var OuterSubscriber = (function (_super) {
    __extends$12(OuterSubscriber, _super);
    function OuterSubscriber() {
        _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
var OuterSubscriber_2 = OuterSubscriber;


var OuterSubscriber_1 = {
	OuterSubscriber: OuterSubscriber_2
};

var isArrayLike_1 = (function (x) { return x && typeof x.length === 'number'; });


var isArrayLike = {
	isArrayLike: isArrayLike_1
};

function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
var isPromise_2 = isPromise;


var isPromise_1 = {
	isPromise: isPromise_2
};

var iterator = createCommonjsModule(function (module, exports) {

function symbolIteratorPonyfill(root$$1) {
    var Symbol = root$$1.Symbol;
    if (typeof Symbol === 'function') {
        if (!Symbol.iterator) {
            Symbol.iterator = Symbol('iterator polyfill');
        }
        return Symbol.iterator;
    }
    else {
        // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
        var Set_1 = root$$1.Set;
        if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
            return '@@iterator';
        }
        var Map_1 = root$$1.Map;
        // required for compatability with es6-shim
        if (Map_1) {
            var keys = Object.getOwnPropertyNames(Map_1.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                    return key;
                }
            }
        }
        return '@@iterator';
    }
}
exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
exports.iterator = symbolIteratorPonyfill(root.root);
/**
 * @deprecated use iterator instead
 */
exports.$$iterator = exports.iterator;

});
var iterator_1 = iterator.symbolIteratorPonyfill;
var iterator_2 = iterator.iterator;
var iterator_3 = iterator.$$iterator;

var __extends$13 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerSubscriber = (function (_super) {
    __extends$13(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        _super.call(this);
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
var InnerSubscriber_2 = InnerSubscriber;


var InnerSubscriber_1 = {
	InnerSubscriber: InnerSubscriber_2
};

function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.closed) {
        return null;
    }
    if (result instanceof Observable_1.Observable) {
        if (result._isScalar) {
            destination.next(result.value);
            destination.complete();
            return null;
        }
        else {
            destination.syncErrorThrowable = true;
            return result.subscribe(destination);
        }
    }
    else if (isArrayLike.isArrayLike(result)) {
        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
            destination.next(result[i]);
        }
        if (!destination.closed) {
            destination.complete();
        }
    }
    else if (isPromise_1.isPromise(result)) {
        result.then(function (value) {
            if (!destination.closed) {
                destination.next(value);
                destination.complete();
            }
        }, function (err) { return destination.error(err); })
            .then(null, function (err) {
            // Escaping the Promise trap: globally throw unhandled errors
            root.root.setTimeout(function () { throw err; });
        });
        return destination;
    }
    else if (result && typeof result[iterator.iterator] === 'function') {
        var iterator$$1 = result[iterator.iterator]();
        do {
            var item = iterator$$1.next();
            if (item.done) {
                destination.complete();
                break;
            }
            destination.next(item.value);
            if (destination.closed) {
                break;
            }
        } while (true);
    }
    else if (result && typeof result[observable.observable] === 'function') {
        var obs = result[observable.observable]();
        if (typeof obs.subscribe !== 'function') {
            destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
        }
        else {
            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
        }
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = ("You provided " + value + " where a stream was expected.")
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        destination.error(new TypeError(msg));
    }
    return null;
}
var subscribeToResult_2 = subscribeToResult;


var subscribeToResult_1 = {
	subscribeToResult: subscribeToResult_2
};

var throttle_1 = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


exports.defaultThrottleConfig = {
    leading: true,
    trailing: false
};
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) { config = exports.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
}
exports.throttle = throttle;
var ThrottleOperator = (function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc
 * @ignore
 * @extends {Ignored}
 */
var ThrottleSubscriber = (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
        this._leading = _leading;
        this._trailing = _trailing;
        this._hasTrailingValue = false;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this._trailing) {
                this._hasTrailingValue = true;
                this._trailingValue = value;
            }
        }
        else {
            var duration = this.tryDurationSelector(value);
            if (duration) {
                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
            }
            if (this._leading) {
                this.destination.next(value);
                if (this._trailing) {
                    this._hasTrailingValue = true;
                    this._trailingValue = value;
                }
            }
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype._unsubscribe = function () {
        var _a = this, throttled = _a.throttled, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue, _trailing = _a._trailing;
        this._trailingValue = null;
        this._hasTrailingValue = false;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
    };
    ThrottleSubscriber.prototype._sendTrailing = function () {
        var _a = this, destination = _a.destination, throttled = _a.throttled, _trailing = _a._trailing, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue;
        if (throttled && _trailing && _hasTrailingValue) {
            destination.next(_trailingValue);
            this._trailingValue = null;
            this._hasTrailingValue = false;
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._sendTrailing();
        this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this._sendTrailing();
        this._unsubscribe();
    };
    return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));

});
var throttle_2 = throttle_1.defaultThrottleConfig;
var throttle_3 = throttle_1.throttle;

var __extends$14 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async.async; }
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
var throttleTime_2 = throttleTime;
var ThrottleTimeOperator = (function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleTimeSubscriber = (function (_super) {
    __extends$14(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
        this._hasTrailingValue = false;
        this._trailingValue = null;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext$1, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext$1(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}


var throttleTime_1 = {
	throttleTime: throttleTime_2
};

/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime$1(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async.async; }
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return throttleTime_1.throttleTime(duration, scheduler, config)(this);
}
var throttleTime_3 = throttleTime$1;


var throttleTime_2$1 = {
	throttleTime: throttleTime_3
};

Observable_1.Observable.prototype.throttleTime = throttleTime_2$1.throttleTime;

var UifSliderComponent = /** @class */ (function () {
    function UifSliderComponent(elRef) {
        this.elRef = elRef;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.step = 1;
        this.disabled = false;
        this.vertical = false;
        this.maxValue = 100;
        this.activeProgress = 0;
        this.inactiveProgress = 0;
        this._progress = 0;
        this.sliderIsActive = false;
        this.initialized = false;
        this.onKeyDownStream$ = null;
        this.eventSubscribers = new EventSubscribers();
    }
    UifSliderComponent.prototype.ngAfterViewInit = function () {
        this.sliderEl = this.slider.nativeElement;
        this.sliderThumbEl = this.sliderThumb.nativeElement;
        this.sliderActiveEl = this.sliderActive.nativeElement;
        this.sliderInactiveEl = this.sliderInactive.nativeElement;
        this.createListeners();
        this.updateProgress();
        this.initialized = true;
    };
    UifSliderComponent.prototype.ngOnChanges = function (changes) {
        if (this.initialized) {
            for (var prop in changes) {
                if (changes[prop]) {
                    var change = changes[prop];
                    if (prop === 'value') {
                        this.updateProgress();
                    }
                    else if (prop === 'disabled') {
                        this.createListeners();
                    }
                }
            }
        }
    };
    UifSliderComponent.prototype.ngOnDestroy = function () {
        this.eventSubscribers.clearSubscribers();
    };
    UifSliderComponent.prototype.createListeners = function () {
        var _this = this;
        this.eventSubscribers.clearSubscribers();
        var self = this;
        if (this.slider && this.slider.nativeElement && !this.disabled) {
            this.sliderElProps = this.sliderEl.getBoundingClientRect();
            this.eventSubscribers.pushSubscriber({
                name: 'onMouseDownListener',
                subscripiton: Observable_2.fromEvent(this.slider.nativeElement, 'mousedown')
                    .subscribe(function ($event) {
                    _this.sliderIsActive = true;
                }),
                meta: 'slider'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onMouseClickListener',
                subscripiton: Observable_2.fromEvent(this.slider.nativeElement, 'click')
                    .subscribe(function ($event) {
                    _this.onSliderThumbMouseMove($event, true);
                }),
                meta: 'slider'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onKeyDownListener',
                subscripiton: Observable_2.fromEvent(this.slider.nativeElement, 'keydown')
                    .throttleTime(100)
                    .subscribe(function ($event) {
                    if ($event.key === 'ArrowRight' || $event.key === 'ArrowUp') {
                        self.onSliderThumbMouseIncrementalMove(true);
                    }
                    else if ($event.key === 'ArrowLeft' || $event.key === 'ArrowDown') {
                        self.onSliderThumbMouseIncrementalMove(false);
                    }
                }),
                meta: 'slider'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onMouseMoveListener',
                subscripiton: Observable_2.fromEvent(document, 'mousemove')
                    .subscribe(function ($event) {
                    _this.onSliderThumbMouseMove($event);
                }),
                meta: 'document'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onMouseUpListener',
                subscripiton: Observable_2.fromEvent(document, 'mouseup')
                    .subscribe(function ($event) {
                    setTimeout(function () {
                        if (_this.sliderIsActive) {
                            _this.sliderIsActive = false;
                        }
                    });
                }),
                meta: 'document'
            });
            this.eventSubscribers.pushSubscriber({
                name: 'onResizeListener',
                subscripiton: Observable_2.fromEvent(window, 'resize')
                    .debounceTime(100)
                    .subscribe(function ($event) {
                    setTimeout(function () {
                        if (_this.sliderEl && !_this.disabled) {
                            _this.sliderElProps = _this.sliderEl.getBoundingClientRect();
                        }
                    });
                }),
                meta: 'document'
            });
        }
    };
    UifSliderComponent.prototype.onSliderThumbMouseIncrementalMove = function (isPositiveIncrement) {
        if (isPositiveIncrement === void 0) { isPositiveIncrement = false; }
        var newValue = isPositiveIncrement ? this.value + this.step : this.value - this.step;
        newValue = newValue < 0 ? 0 : newValue;
        newValue = newValue > 100 ? 100 : newValue;
        this.value = newValue;
        this.updateProgress();
        this.valueChange.emit(this.value);
    };
    UifSliderComponent.prototype.onSliderThumbMouseMove = function ($event, forceFalse) {
        if (forceFalse === void 0) { forceFalse = false; }
        if (this.sliderIsActive) {
            if (this.sliderElProps) {
                if (!this.vertical) {
                    var x = $event.clientX - this.sliderElProps.left;
                    x = x < 0 ? 0 : x;
                    x = x > this.sliderElProps.width ? this.sliderElProps.width : x;
                    var unit = this.sliderElProps.width / (this.maxValue / this.step);
                    var xModValue = x % unit;
                    x = x - xModValue;
                    var xPercent = (x / this.sliderElProps.width) * 100;
                    xPercent = Math.round(xPercent);
                    this.value = xPercent;
                }
                else {
                    var y = $event.clientY - this.sliderElProps.top;
                    y = y < 0 ? 0 : y;
                    y = y > this.sliderElProps.height ? this.sliderElProps.height : y;
                    var unit = this.sliderElProps.height / (this.maxValue / this.step);
                    var yModValue = y % unit;
                    y = y - yModValue;
                    var yPercent = (y / this.sliderElProps.height) * 100;
                    yPercent = Math.round(yPercent);
                    this.value = 100 - yPercent;
                }
                this.updateProgress();
                this.valueChange.emit(this.value);
            }
        }
        if (forceFalse) {
            this.sliderIsActive = false;
        }
    };
    UifSliderComponent.prototype.updateProgress = function () {
        var _this = this;
        var self = this;
        if (self._progress !== self.value) {
            this.activeProgress = (this.value / (this.maxValue)) * 100;
            this.inactiveProgress = ((this.maxValue - this.activeProgress) / (this.maxValue)) * 100;
            if (!this.vertical) {
                window.requestAnimationFrame(function () {
                    if (_this.sliderThumbEl) {
                        _this.sliderThumbEl.style.left = _this.value + '%';
                    }
                });
                window.requestAnimationFrame(function () {
                    if (_this.sliderActiveEl) {
                        _this.sliderActiveEl.style.width = _this.activeProgress + '%';
                    }
                });
                window.requestAnimationFrame(function () {
                    if (_this.sliderInactiveEl) {
                        _this.sliderInactiveEl.style.width = _this.inactiveProgress + '%';
                    }
                });
            }
            else {
                window.requestAnimationFrame(function () {
                    if (_this.sliderThumbEl) {
                        _this.sliderThumbEl.style.bottom = _this.value + '%';
                    }
                });
                window.requestAnimationFrame(function () {
                    if (_this.sliderActiveEl) {
                        _this.sliderActiveEl.style.height = _this.activeProgress + '%';
                    }
                });
                window.requestAnimationFrame(function () {
                    if (_this.sliderInactiveEl) {
                        _this.sliderInactiveEl.style.height = _this.inactiveProgress + '%';
                    }
                });
            }
            self._progress = self.value;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifSliderComponent.prototype, "value", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifSliderComponent.prototype, "valueChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifSliderComponent.prototype, "step", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifSliderComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifSliderComponent.prototype, "vertical", void 0);
    __decorate([
        ViewChild('slider'),
        __metadata("design:type", Object)
    ], UifSliderComponent.prototype, "slider", void 0);
    __decorate([
        ViewChild('sliderThumb'),
        __metadata("design:type", Object)
    ], UifSliderComponent.prototype, "sliderThumb", void 0);
    __decorate([
        ViewChild('sliderActive'),
        __metadata("design:type", Object)
    ], UifSliderComponent.prototype, "sliderActive", void 0);
    __decorate([
        ViewChild('sliderInactive'),
        __metadata("design:type", Object)
    ], UifSliderComponent.prototype, "sliderInactive", void 0);
    UifSliderComponent = __decorate([
        Component({
            selector: 'uif-slider',
            template: "<div class=\"ms-Slider-container\" [class.is-vertical]=\"vertical\" [class.is-horizontal]=\"!vertical\">\n    <button #slider aria-valuenow=\"2\" aria-valuemin=\"1\" aria-valuemax=\"3\" class=\"ms-Slider-slideBox ms-Slider-showValue ms-Slider-showTransitions\"\n        [disabled]=\"disabled\" id=\"Slider5\" type=\"button\" role=\"slider\">\n        <div class=\"ms-Slider-line\">\n            <span class=\"ms-Slider-thumb\" #sliderThumb></span>\n            <span class=\"ms-Slider-active activeSection lineContainer\" #sliderActive></span>\n            <span class=\"ms-Slider-inactive inactiveSection lineContainer\" #sliderInactive></span>\n        </div>\n    </button>\n</div>",
            styles: [".ms-Slider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n  .ms-Slider-container.is-horizontal .ms-Slider-slideBox {\n    height: 28px;\n    padding: 0 8px; }\n    .ms-Slider-container.is-horizontal .ms-Slider-slideBox.ms-Slider-showTransitions .activeSection,\n    .ms-Slider-container.is-horizontal .ms-Slider-slideBox.ms-Slider-showTransitions .inactiveSection {\n      -webkit-transition: width 0.367s cubic-bezier(0.1, 0.9, 0.2, 1);\n      transition: width 0.367s cubic-bezier(0.1, 0.9, 0.2, 1); }\n    .ms-Slider-container.is-horizontal .ms-Slider-slideBox.ms-Slider-showTransitions .ms-Slider-thumb {\n      -webkit-transition: left 0.367s cubic-bezier(0.1, 0.9, 0.2, 1);\n      transition: left 0.367s cubic-bezier(0.1, 0.9, 0.2, 1); }\n    .ms-Slider-container.is-horizontal .ms-Slider-slideBox .ms-Slider-line {\n      width: 100%; }\n      .ms-Slider-container.is-horizontal .ms-Slider-slideBox .ms-Slider-line .ms-Slider-thumb {\n        transform: translateX(-50%);\n        top: -6px; }\n      .ms-Slider-container.is-horizontal .ms-Slider-slideBox .ms-Slider-line .lineContainer {\n        height: 4px; }\n  .ms-Slider-container.is-vertical {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    height: 100%;\n    text-align: center;\n    margin: 8px 0; }\n    .ms-Slider-container.is-vertical .ms-Slider-slideBox {\n      height: 100%;\n      width: 28px;\n      padding: 8px 0; }\n      .ms-Slider-container.is-vertical .ms-Slider-slideBox.ms-Slider-showTransitions .activeSection,\n      .ms-Slider-container.is-vertical .ms-Slider-slideBox.ms-Slider-showTransitions .inactiveSection {\n        -webkit-transition: height 0.367s cubic-bezier(0.1, 0.9, 0.2, 1);\n        transition: height 0.367s cubic-bezier(0.1, 0.9, 0.2, 1); }\n      .ms-Slider-container.is-vertical .ms-Slider-slideBox.ms-Slider-showTransitions .ms-Slider-thumb {\n        -webkit-transition: bottom 0.367s cubic-bezier(0.1, 0.9, 0.2, 1);\n        transition: bottom 0.367s cubic-bezier(0.1, 0.9, 0.2, 1); }\n      .ms-Slider-container.is-vertical .ms-Slider-slideBox .ms-Slider-line {\n        height: 100%;\n        width: 4px;\n        margin: 0 auto;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n        flex-direction: column-reverse; }\n        .ms-Slider-container.is-vertical .ms-Slider-slideBox .ms-Slider-line .ms-Slider-thumb {\n          left: -6px;\n          margin: 0 auto;\n          -webkit-transform: translateY(8px);\n          transform: translateY(8px); }\n        .ms-Slider-container.is-vertical .ms-Slider-slideBox .ms-Slider-line .lineContainer {\n          width: 4px; }\n  .ms-Slider-container .ms-Slider-slideBox {\n    background: transparent;\n    border: none;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    line-height: 28px;\n    position: relative;\n    outline: transparent;\n    cursor: pointer; }\n    .ms-Slider-container .ms-Slider-slideBox .ms-Slider-active {\n      background: #666666; }\n    .ms-Slider-container .ms-Slider-slideBox .ms-Slider-inactive {\n      background: #c8c8c8; }\n    .ms-Slider-container .ms-Slider-slideBox .ms-Slider-line {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      position: relative; }\n      .ms-Slider-container .ms-Slider-slideBox .ms-Slider-line .ms-Slider-thumb {\n        border: 2px solid #666666;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        background: #ffffff;\n        display: block;\n        width: 16px;\n        height: 16px;\n        position: absolute;\n        border-radius: 10px; }\n      .ms-Slider-container .ms-Slider-slideBox .ms-Slider-line .lineContainer {\n        border-radius: 4px;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box; }\n    .ms-Slider-container .ms-Slider-slideBox:not([disabled]):hover .ms-Slider-line .ms-Slider-thumb, .ms-Slider-container .ms-Slider-slideBox:not([disabled]):active .ms-Slider-line .ms-Slider-thumb, .ms-Slider-container .ms-Slider-slideBox:not([disabled]):focus .ms-Slider-line .ms-Slider-thumb {\n      border: 2px solid #627686; }\n    .ms-Slider-container .ms-Slider-slideBox:not([disabled]):hover .ms-Slider-line .activeSection, .ms-Slider-container .ms-Slider-slideBox:not([disabled]):active .ms-Slider-line .activeSection, .ms-Slider-container .ms-Slider-slideBox:not([disabled]):focus .ms-Slider-line .activeSection {\n      background-color: #0078d7; }\n    .ms-Slider-container .ms-Slider-slideBox:not([disabled]):hover .ms-Slider-line .inactiveSection, .ms-Slider-container .ms-Slider-slideBox:not([disabled]):active .ms-Slider-line .inactiveSection, .ms-Slider-container .ms-Slider-slideBox:not([disabled]):focus .ms-Slider-line .inactiveSection {\n      background-color: #c7e0f4; }\n    .ms-Slider-container .ms-Slider-slideBox:not([disabled]):focus {\n      outline: 1px dotted #0073c6; }\n    .ms-Slider-container .ms-Slider-slideBox[disabled] {\n      cursor: default; }\n      .ms-Slider-container .ms-Slider-slideBox[disabled] .ms-Slider-line .ms-Slider-thumb {\n        border-color: #c8c8c8; }\n      .ms-Slider-container .ms-Slider-slideBox[disabled] .ms-Slider-line .activeSection {\n        background-color: #c8c8c8; }\n      .ms-Slider-container .ms-Slider-slideBox[disabled] .ms-Slider-line .inactiveSection {\n        background-color: #eaeaea; }\n"]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object])
    ], UifSliderComponent);
    return UifSliderComponent;
    var _a;
}());

var UifChipsComponent = /** @class */ (function () {
    function UifChipsComponent() {
        this.tags = [];
        this.tagsChange = new EventEmitter();
        this.removeItem = false;
        this.newTag = '';
        this.onKeyupListener = null;
        this.activeIndex = null;
    }
    UifChipsComponent.prototype.ngOnDestroy = function () {
        this.clearListener();
    };
    UifChipsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.clearListener();
        this.onKeyupListener = Observable_2.fromEvent(this.tagInput.nativeElement, 'keyup')
            .subscribe(function ($event) {
            _this.activeIndex = null;
            if ($event.key === 'Enter') {
                _this.addNewTag();
            }
            else if ($event.key === 'Backspace') {
                _this.removeLastTag();
            }
        });
    };
    UifChipsComponent.prototype.clearListener = function () {
        if (this.onKeyupListener) {
            this.onKeyupListener.unsubscribe();
            this.onKeyupListener = null;
        }
    };
    UifChipsComponent.prototype.addNewTag = function () {
        if (this.newTag.trim() !== '') {
            this.tags.push(this.newTag);
            this.tagsChange.emit(this.tags);
            this.newTag = '';
        }
    };
    UifChipsComponent.prototype.removeLastTag = function () {
        if (this.newTag === '') {
            if (this.tags.length > 0) {
                this.tags.splice(this.tags.length - 1, 1);
                this.tagsChange.emit(this.tags);
            }
        }
    };
    UifChipsComponent.prototype.removeTag = function (index) {
        this.tags.splice(index, 1);
        this.tagsChange.emit(this.tags);
        if (this.activeIndex) {
            this.activeIndex = null;
            if (this.tags.length > 0) {
                this.activeIndex = this.tags.length - 1;
            }
        }
    };
    UifChipsComponent.prototype.resetActiveStatus = function () {
        this.activeIndex = null;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifChipsComponent.prototype, "tags", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifChipsComponent.prototype, "tagsChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifChipsComponent.prototype, "removeItem", void 0);
    __decorate([
        ViewChild('tagInput'),
        __metadata("design:type", Object)
    ], UifChipsComponent.prototype, "tagInput", void 0);
    UifChipsComponent = __decorate([
        Component({
            selector: 'uif-chips',
            template: "\n<form>\n    <div class=\"ms-BasePicker-text\" role=\"list\">\n        <div class=\"ms-TagItem\" data-selection-index=\"0\" data-is-focusable=\"true\" *ngFor=\"let tag of tags; let i = index;\" [class.active]=\"i === activeIndex\" (click)=\"activeIndex = i\">\n            <span class=\"ms-TagItem-text\" aria-label=\"red\">{{tag}}</span>\n            <span class=\"ms-TagItem-close\" (click)=\"removeTag(i)\" [hidden]=\"removeItem\">\n                <i role=\"presentation\" class=\"ms-Icon ms-Icon--Cancel\" aria-hidden=\"true\"></i>\n            </span>\n        </div>\n        <input aria-label=\"Tag Picker\" class=\"ms-BasePicker-input\" name=\"newTag\" #tagInput [(ngModel)]=\"newTag\" aria-owns=\"suggestion-list\" (focus)=\"activeIndex = null\"\n            aria-activedescendant=\"sug--1\" \n            aria-expanded=\"false\" aria-haspopup=\"true\" autocomplete=\"off\" role=\"combobox\" aria-controls=\"selected-suggestion-alert\"\n            value=\"\" autocapitalize=\"off\" data-lpignore=\"true\" tabindex=\"0\">\n    </div>\n</form>\n\n",
            styles: [".ms-BasePicker-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #a6a6a6;\n  min-width: 180px;\n  min-height: 30px; }\n  .ms-BasePicker-text .ms-TagItem {\n    position: relative;\n    outline: transparent;\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box;\n    -ms-flex-negative: 1;\n    flex-shrink: 1;\n    background: #f4f4f4;\n    margin: 2px;\n    height: 26px;\n    line-height: 26px;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    max-width: 300px; }\n    .ms-BasePicker-text .ms-TagItem.active {\n      background: #dadada; }\n      .ms-BasePicker-text .ms-TagItem.active:hover {\n        background: #d0d0d0; }\n    .ms-BasePicker-text .ms-TagItem:hover {\n      background: #eaeaea; }\n    .ms-BasePicker-text .ms-TagItem .ms-TagItem-text {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      min-width: 30px;\n      margin: 0 8px; }\n    .ms-BasePicker-text .ms-TagItem .ms-TagItem-close {\n      cursor: pointer;\n      color: #666666;\n      font-size: 12px;\n      display: inline-block;\n      text-align: center;\n      vertical-align: top;\n      width: 30px;\n      height: 100%;\n      -ms-flex-negative: 0;\n      flex-shrink: 0; }\n      .ms-BasePicker-text .ms-TagItem .ms-TagItem-close:focus, .ms-BasePicker-text .ms-TagItem .ms-TagItem-close:hover, .ms-BasePicker-text .ms-TagItem .ms-TagItem-close:active {\n        background: rgba(0, 0, 0, 0.1); }\n  .ms-BasePicker-text .ms-BasePicker-input {\n    height: 34px;\n    border: none;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    outline: none;\n    padding: 0 6px 0px; }\n"]
        })
    ], UifChipsComponent);
    return UifChipsComponent;
}());

var UifAccordionService = /** @class */ (function () {
    function UifAccordionService() {
        this.oneItemOpenOnly = false;
    }
    UifAccordionService.prototype.loadItems = function (items, oneItemOpenOnly) {
        var _this = this;
        this.accordionItems = items;
        this.oneItemOpenOnly = oneItemOpenOnly;
        this.accordionItems.forEach(function (item, index) {
            item.setId('acc_item_' + GetRandomInt());
        });
        var activeItem = this.accordionItems.find(function (x) { return x.isOpen; });
        this.accordionItems.forEach(function (item, index) {
            if (_this.oneItemOpenOnly) {
                if (!item.disabled) {
                    item.isOpen = item.getId() === activeItem.getId();
                }
            }
            item.emitOpenChange();
        });
    };
    UifAccordionService.prototype.openItem = function (id) {
        var _this = this;
        this.accordionItems.forEach(function (item, index) {
            if (!item.disabled) {
                if (item.getId() === id) {
                    item.isOpen = true;
                }
                else {
                    if (_this.oneItemOpenOnly) {
                        item.isOpen = false;
                    }
                }
            }
            item.emitOpenChange();
        });
    };
    UifAccordionService = __decorate([
        Injectable()
    ], UifAccordionService);
    return UifAccordionService;
}());

var UifAccordionItemComponent = /** @class */ (function () {
    function UifAccordionItemComponent(accordionService) {
        this.accordionService = accordionService;
        this.disabled = false;
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isItemOpen = false;
        this.initialized = false;
    }
    UifAccordionItemComponent.prototype.ngOnChanges = function () {
        if (this.isOpen) {
            this.openItemDrawer();
        }
        else {
            this.closeItemDrawer();
        }
    };
    UifAccordionItemComponent.prototype.toggleItemOpen = function () {
        if (this.disabled) {
            return;
        }
        if (!this.isOpen) {
            this.accordionService.openItem(this._id);
        }
        else {
            this.isOpen = false;
            this.emitOpenChange();
        }
    };
    UifAccordionItemComponent.prototype.emitOpenChange = function () {
        this.isOpenChange.emit(this.isOpen);
    };
    UifAccordionItemComponent.prototype.getId = function () {
        return this._id;
    };
    UifAccordionItemComponent.prototype.setId = function (val) {
        this._id = val;
    };
    UifAccordionItemComponent.prototype.openItemDrawer = function () {
        var _this = this;
        this.isItemOpen = true;
        setTimeout(function () {
            var contentElm = _this.contentElement.nativeElement;
            var contentHolderElm = _this.contentHolderElement.nativeElement;
            if (contentElm) {
                var contentElmRect = contentElm.getBoundingClientRect();
                if (contentElmRect) {
                    contentHolderElm.style.height = contentElmRect.height + 'px';
                }
            }
        });
    };
    UifAccordionItemComponent.prototype.closeItemDrawer = function () {
        var _this = this;
        setTimeout(function () {
            var contentHolderElm = _this.contentHolderElement.nativeElement;
            contentHolderElm.style.height = '0px';
            setTimeout(function () {
                _this.isItemOpen = false;
            }, 250);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifAccordionItemComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifAccordionItemComponent.prototype, "isOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UifAccordionItemComponent.prototype, "isOpenChange", void 0);
    __decorate([
        ViewChild('contentElement'),
        __metadata("design:type", typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object)
    ], UifAccordionItemComponent.prototype, "contentElement", void 0);
    __decorate([
        ViewChild('contentHolderElement'),
        __metadata("design:type", typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" && _b || Object)
    ], UifAccordionItemComponent.prototype, "contentHolderElement", void 0);
    __decorate([
        HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UifAccordionItemComponent.prototype, "ngOnChanges", null);
    UifAccordionItemComponent = __decorate([
        Component({
            selector: 'uif-accordion-item, [uifAccordionItem]',
            template: "<div class=\"ms-Accordion-Item-Custom\" [class.is-opened]=\"isItemOpen\" [class.is-disabled]=\"disabled\">\n    <div class=\"ms-Accordion-Item-Header-Custom\" (click)=\"toggleItemOpen()\" [class.is-disabled]=\"disabled\">\n        <div class=\"ms-Accodion-Caret\">\n            <i class=\"ms-Icon ms-Icon--ChevronRight\"></i>\n        </div>\n        <div class=\"ms-Accordion-Title\">\n            <ng-content select=\"uif-accordion-item-title, [uifAccordionItemTitle]\"></ng-content>\n        </div>\n    </div>\n    <div class=\"ms-Accordion-Item-Content-Custom\" [hidden]=\"!isItemOpen\" #contentHolderElement>\n        <div #contentElement>\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>",
            styles: [".ms-Accordion-Custom {\n  border-top: 1px solid #f0f0f0;\n  border-bottom: 1px solid #f0f0f0; }\n  .ms-Accordion-Custom /deep/ uif-accordion-item:not(:last-child) .ms-Accordion-Item-Custom {\n    border-bottom: 1px solid #f0f0f0; }\n\n.ms-Accordion-Item-Custom.is-disabled {\n  cursor: default;\n  opacity: 0.50; }\n  .ms-Accordion-Item-Custom.is-disabled .ms-Accordion-Item-Header-Custom {\n    cursor: default; }\n\n.ms-Accordion-Item-Custom.is-opened .ms-Accordion-Item-Header-Custom .ms-Accodion-Caret i {\n  transform: rotate(90deg);\n  transform-origin: center; }\n\n.ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom {\n  display: flex;\n  flex-flow: row;\n  cursor: pointer; }\n  .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom .ms-Accodion-Caret {\n    box-sizing: border-box;\n    padding: 10px;\n    flex: initial;\n    width: 36px;\n    order: 1;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    color: #909090; }\n    .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom .ms-Accodion-Caret i {\n      transition: transform 0.25s linear 0s; }\n  .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom .ms-Accordion-Title {\n    padding: 10px 0;\n    flex: 1;\n    order: 2; }\n  .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom:not(.is-disabled):hover, .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom:not(.is-disabled):active, .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom:not(.is-disabled):focus {\n    background: rgba(0, 0, 0, 0.03); }\n\n.ms-Accordion-Item-Custom .ms-Accordion-Item-Content-Custom {\n  padding: 0 36px;\n  transition: height 0.25s ease-out 0s;\n  height: 0;\n  overflow-y: hidden; }\n"]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof UifAccordionService !== "undefined" && UifAccordionService) === "function" && _c || Object])
    ], UifAccordionItemComponent);
    return UifAccordionItemComponent;
    var _a, _b, _c;
}());

var UifAccordionComponent = /** @class */ (function () {
    function UifAccordionComponent(accordionService) {
        this.accordionService = accordionService;
        this.oneItemOpenOnly = true;
        this.initialized = false;
    }
    UifAccordionComponent.prototype.ngOnChanges = function () {
        if (this.initialized) {
            this.accordionService.loadItems(this.accordionItems, this.oneItemOpenOnly);
        }
    };
    UifAccordionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.accordionItems.changes.subscribe(function (items) {
            _this.accordionService.loadItems(_this.accordionItems, _this.oneItemOpenOnly);
        });
        setTimeout(function () {
            _this.accordionService.loadItems(_this.accordionItems, _this.oneItemOpenOnly);
        });
        this.initialized = true;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UifAccordionComponent.prototype, "oneItemOpenOnly", void 0);
    __decorate([
        ContentChildren(UifAccordionItemComponent),
        __metadata("design:type", typeof (_a = typeof QueryList !== "undefined" && QueryList) === "function" && _a || Object)
    ], UifAccordionComponent.prototype, "accordionItems", void 0);
    UifAccordionComponent = __decorate([
        Component({
            selector: 'uif-accordion',
            template: "<div class=\"ms-Accordion-Custom\">\n    <ng-content></ng-content>\n</div>",
            styles: [".ms-Accordion-Custom {\n  border-top: 1px solid #f0f0f0;\n  border-bottom: 1px solid #f0f0f0; }\n  .ms-Accordion-Custom /deep/ uif-accordion-item:not(:last-child) .ms-Accordion-Item-Custom {\n    border-bottom: 1px solid #f0f0f0; }\n\n.ms-Accordion-Item-Custom.is-disabled {\n  cursor: default;\n  opacity: 0.50; }\n  .ms-Accordion-Item-Custom.is-disabled .ms-Accordion-Item-Header-Custom {\n    cursor: default; }\n\n.ms-Accordion-Item-Custom.is-opened .ms-Accordion-Item-Header-Custom .ms-Accodion-Caret i {\n  transform: rotate(90deg);\n  transform-origin: center; }\n\n.ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom {\n  display: flex;\n  flex-flow: row;\n  cursor: pointer; }\n  .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom .ms-Accodion-Caret {\n    box-sizing: border-box;\n    padding: 10px;\n    flex: initial;\n    width: 36px;\n    order: 1;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    color: #909090; }\n    .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom .ms-Accodion-Caret i {\n      transition: transform 0.25s linear 0s; }\n  .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom .ms-Accordion-Title {\n    padding: 10px 0;\n    flex: 1;\n    order: 2; }\n  .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom:not(.is-disabled):hover, .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom:not(.is-disabled):active, .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom:not(.is-disabled):focus {\n    background: rgba(0, 0, 0, 0.03); }\n\n.ms-Accordion-Item-Custom .ms-Accordion-Item-Content-Custom {\n  padding: 0 36px;\n  transition: height 0.25s ease-out 0s;\n  height: 0;\n  overflow-y: hidden; }\n"],
            providers: [UifAccordionService]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof UifAccordionService !== "undefined" && UifAccordionService) === "function" && _b || Object])
    ], UifAccordionComponent);
    return UifAccordionComponent;
    var _a, _b;
}());

var UifAccordionItemTitleComponent = /** @class */ (function () {
    function UifAccordionItemTitleComponent() {
    }
    UifAccordionItemTitleComponent = __decorate([
        Component({
            selector: 'uif-accordion-item-title, [uifAccordionItemTitle]',
            template: '<ng-content></ng-content>',
            styles: [".ms-Accordion-Custom {\n  border-top: 1px solid #f0f0f0;\n  border-bottom: 1px solid #f0f0f0; }\n  .ms-Accordion-Custom /deep/ uif-accordion-item:not(:last-child) .ms-Accordion-Item-Custom {\n    border-bottom: 1px solid #f0f0f0; }\n\n.ms-Accordion-Item-Custom.is-disabled {\n  cursor: default;\n  opacity: 0.50; }\n  .ms-Accordion-Item-Custom.is-disabled .ms-Accordion-Item-Header-Custom {\n    cursor: default; }\n\n.ms-Accordion-Item-Custom.is-opened .ms-Accordion-Item-Header-Custom .ms-Accodion-Caret i {\n  transform: rotate(90deg);\n  transform-origin: center; }\n\n.ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom {\n  display: flex;\n  flex-flow: row;\n  cursor: pointer; }\n  .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom .ms-Accodion-Caret {\n    box-sizing: border-box;\n    padding: 10px;\n    flex: initial;\n    width: 36px;\n    order: 1;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    color: #909090; }\n    .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom .ms-Accodion-Caret i {\n      transition: transform 0.25s linear 0s; }\n  .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom .ms-Accordion-Title {\n    padding: 10px 0;\n    flex: 1;\n    order: 2; }\n  .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom:not(.is-disabled):hover, .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom:not(.is-disabled):active, .ms-Accordion-Item-Custom .ms-Accordion-Item-Header-Custom:not(.is-disabled):focus {\n    background: rgba(0, 0, 0, 0.03); }\n\n.ms-Accordion-Item-Custom .ms-Accordion-Item-Content-Custom {\n  padding: 0 36px;\n  transition: height 0.25s ease-out 0s;\n  height: 0;\n  overflow-y: hidden; }\n"]
        })
    ], UifAccordionItemTitleComponent);
    return UifAccordionItemTitleComponent;
}());

var COMPONENTS = [
    UifAccordionComponent,
    UifAccordionItemComponent,
    UifAccordionItemTitleComponent
];
var UifAccordionModule = /** @class */ (function () {
    function UifAccordionModule() {
    }
    UifAccordionModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS,
            providers: []
        })
    ], UifAccordionModule);
    return UifAccordionModule;
}());

var COMPONENTS$1 = [
    UifBreadcrumbComponent
];
var UifBreadcrumbModule = /** @class */ (function () {
    function UifBreadcrumbModule() {
    }
    UifBreadcrumbModule = __decorate([
        NgModule({
            declarations: COMPONENTS$1,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$1,
            providers: []
        })
    ], UifBreadcrumbModule);
    return UifBreadcrumbModule;
}());

var COMPONENTS$2 = [
    UifButtonComponent,
    UifHeroButtonComponent,
    UifCompoundButtonComponent
];
var UifButtonModule = /** @class */ (function () {
    function UifButtonModule() {
    }
    UifButtonModule = __decorate([
        NgModule({
            declarations: COMPONENTS$2,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$2,
            providers: []
        })
    ], UifButtonModule);
    return UifButtonModule;
}());

var COMPONENTS$3 = [
    UifCalloutComponent,
    UifOpenCalloutComponent,
    UifCalloutContentComponent,
    UifCalloutHeaderComponent,
    UifCalloutActionComponent,
];
var UifCalloutModule = /** @class */ (function () {
    function UifCalloutModule() {
    }
    UifCalloutModule = __decorate([
        NgModule({
            declarations: COMPONENTS$3,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$3,
            providers: []
        })
    ], UifCalloutModule);
    return UifCalloutModule;
}());

var COMPONENTS$4 = [
    UifCarouselComponent,
    UifCarouselItemComponent
];
var UifCarouselModule = /** @class */ (function () {
    function UifCarouselModule() {
    }
    UifCarouselModule = __decorate([
        NgModule({
            declarations: COMPONENTS$4,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$4,
            providers: []
        })
    ], UifCarouselModule);
    return UifCarouselModule;
}());

var COMPONENTS$5 = [
    UifCheckboxComponent
];
var UifCheckboxModule = /** @class */ (function () {
    function UifCheckboxModule() {
    }
    UifCheckboxModule = __decorate([
        NgModule({
            declarations: COMPONENTS$5,
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            exports: COMPONENTS$5,
            providers: []
        })
    ], UifCheckboxModule);
    return UifCheckboxModule;
}());

var COMPONENTS$6 = [
    UifChipsComponent
];
var UifChipsModule = /** @class */ (function () {
    function UifChipsModule() {
    }
    UifChipsModule = __decorate([
        NgModule({
            declarations: COMPONENTS$6,
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            exports: COMPONENTS$6,
            providers: []
        })
    ], UifChipsModule);
    return UifChipsModule;
}());

var COMPONENTS$7 = [
    UifChoicefieldComponent,
    UifChoicefieldItemComponent
];
var UifChoicefieldModule = /** @class */ (function () {
    function UifChoicefieldModule() {
    }
    UifChoicefieldModule = __decorate([
        NgModule({
            declarations: COMPONENTS$7,
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            exports: COMPONENTS$7,
            providers: []
        })
    ], UifChoicefieldModule);
    return UifChoicefieldModule;
}());

var COMPONENTS$8 = [
    UifColorPickerComponent
];
var UifColorPickerModule = /** @class */ (function () {
    function UifColorPickerModule() {
    }
    UifColorPickerModule = __decorate([
        NgModule({
            declarations: COMPONENTS$8,
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            exports: COMPONENTS$8,
            providers: []
        })
    ], UifColorPickerModule);
    return UifColorPickerModule;
}());

var COMPONENTS$9 = [
    UifContextHostComponent, UifContextHostContentComponent, UifContextHostHeaderComponent
];
var UifContextHostModule = /** @class */ (function () {
    function UifContextHostModule() {
    }
    UifContextHostModule = __decorate([
        NgModule({
            declarations: COMPONENTS$9,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$9,
            providers: []
        })
    ], UifContextHostModule);
    return UifContextHostModule;
}());

var DIRECTIVES = [
    UifContextualMenuTriggerDirective
];
var COMPONENTS$10 = [
    UifContextualMenuComponent,
    UifContextualMenuItemComponent,
    UifContextualMenuItemDividerComponent,
    UifContextualMenuItemHeaderComponent,
];
var UifContextualMenuModule = /** @class */ (function () {
    function UifContextualMenuModule() {
    }
    UifContextualMenuModule = __decorate([
        NgModule({
            declarations: COMPONENTS$10.concat(DIRECTIVES),
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$10.concat(DIRECTIVES),
            providers: []
        })
    ], UifContextualMenuModule);
    return UifContextualMenuModule;
}());

var COMPONENTS$11 = [
    UifDatepickerComponent,
    UifOpenDatepickerComponent
];
var UifDatepickerModule = /** @class */ (function () {
    function UifDatepickerModule() {
    }
    UifDatepickerModule = __decorate([
        NgModule({
            declarations: COMPONENTS$11,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$11,
            providers: []
        })
    ], UifDatepickerModule);
    return UifDatepickerModule;
}());

var COMPONENTS$12 = [
    UifDialogComponent,
    UifDialogContentComponent,
    UifDialogFooterComponent,
    UifDialogHeaderComponent
];
var UifDialogModule = /** @class */ (function () {
    function UifDialogModule() {
    }
    UifDialogModule = __decorate([
        NgModule({
            declarations: COMPONENTS$12,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$12,
            providers: []
        })
    ], UifDialogModule);
    return UifDialogModule;
}());

var COMPONENTS$13 = [
    UifDropdownComponent,
    UifDropdownOptionComponent
];
var UifDropdownModule = /** @class */ (function () {
    function UifDropdownModule() {
    }
    UifDropdownModule = __decorate([
        NgModule({
            declarations: COMPONENTS$13,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$13,
            providers: []
        })
    ], UifDropdownModule);
    return UifDropdownModule;
}());

var COMPONENTS$14 = [
    UifPersonaComponent
];
var UifPersonaModule = /** @class */ (function () {
    function UifPersonaModule() {
    }
    UifPersonaModule = __decorate([
        NgModule({
            declarations: COMPONENTS$14,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$14,
            providers: []
        })
    ], UifPersonaModule);
    return UifPersonaModule;
}());

var COMPONENTS$15 = [
    UifOrgChartComponent
];
var UifOrgChartModule = /** @class */ (function () {
    function UifOrgChartModule() {
    }
    UifOrgChartModule = __decorate([
        NgModule({
            declarations: COMPONENTS$15,
            imports: [
                CommonModule,
                UifPersonaModule
            ],
            exports: COMPONENTS$15,
            providers: []
        })
    ], UifOrgChartModule);
    return UifOrgChartModule;
}());

var COMPONENTS$16 = [
    UifPersonaCardComponent
];
var UifPersonaCardModule = /** @class */ (function () {
    function UifPersonaCardModule() {
    }
    UifPersonaCardModule = __decorate([
        NgModule({
            declarations: COMPONENTS$16,
            imports: [
                CommonModule,
                UifPersonaModule,
                UifOrgChartModule
            ],
            exports: COMPONENTS$16,
            providers: []
        })
    ], UifPersonaCardModule);
    return UifPersonaCardModule;
}());

var COMPONENTS$17 = [
    UifFacepileComponent
];
var UifFacepileModule = /** @class */ (function () {
    function UifFacepileModule() {
    }
    UifFacepileModule = __decorate([
        NgModule({
            declarations: COMPONENTS$17,
            imports: [
                CommonModule,
                UifCalloutModule,
                UifPersonaModule,
                UifPersonaCardModule
            ],
            exports: COMPONENTS$17,
            providers: []
        })
    ], UifFacepileModule);
    return UifFacepileModule;
}());

var COMPONENTS$18 = [
    UifPeoplePickerComponent
];
var UifPeoplePickerModule = /** @class */ (function () {
    function UifPeoplePickerModule() {
    }
    UifPeoplePickerModule = __decorate([
        NgModule({
            declarations: COMPONENTS$18,
            imports: [
                CommonModule,
                UifContextHostModule,
                UifPersonaModule,
                FormsModule,
                ReactiveFormsModule
            ],
            exports: COMPONENTS$18,
            providers: []
        })
    ], UifPeoplePickerModule);
    return UifPeoplePickerModule;
}());

var COMPONENTS$19 = [
    UifIconComponent
];
var UifIconModule = /** @class */ (function () {
    function UifIconModule() {
    }
    UifIconModule = __decorate([
        NgModule({
            declarations: COMPONENTS$19,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$19,
            providers: []
        })
    ], UifIconModule);
    return UifIconModule;
}());

var COMPONENTS$20 = [
    UifTableComponent,
    UifTableTrComponent,
];
var UifTableModule = /** @class */ (function () {
    function UifTableModule() {
    }
    UifTableModule = __decorate([
        NgModule({
            declarations: COMPONENTS$20,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$20,
            providers: []
        })
    ], UifTableModule);
    return UifTableModule;
}());

var COMPONENTS$21 = [
    UifTreeTableComponent,
    UifTreeTableColumnComponent,
    UifTreeTableContentComponent
];
var UifTreeTableModule = /** @class */ (function () {
    function UifTreeTableModule() {
    }
    UifTreeTableModule = __decorate([
        NgModule({
            declarations: COMPONENTS$21,
            imports: [
                CommonModule,
                UifIconModule
            ],
            exports: COMPONENTS$21,
            providers: []
        })
    ], UifTreeTableModule);
    return UifTreeTableModule;
}());

var COMPONENTS$22 = [
    UifOverlayComponent
];
var UifOverlayModule = /** @class */ (function () {
    function UifOverlayModule() {
    }
    UifOverlayModule = __decorate([
        NgModule({
            declarations: COMPONENTS$22,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$22,
            providers: []
        })
    ], UifOverlayModule);
    return UifOverlayModule;
}());

var COMPONENTS$23 = [
    UifMessageBannerComponent
];
var UifMessageBannerModule = /** @class */ (function () {
    function UifMessageBannerModule() {
    }
    UifMessageBannerModule = __decorate([
        NgModule({
            declarations: COMPONENTS$23,
            imports: [
                CommonModule,
                UifOverlayModule
            ],
            exports: COMPONENTS$23,
            providers: []
        })
    ], UifMessageBannerModule);
    return UifMessageBannerModule;
}());

var COMPONENTS$24 = [
    UifMessageBarComponent
];
var UifMessageBarModule = /** @class */ (function () {
    function UifMessageBarModule() {
    }
    UifMessageBarModule = __decorate([
        NgModule({
            declarations: COMPONENTS$24,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$24,
            providers: []
        })
    ], UifMessageBarModule);
    return UifMessageBarModule;
}());

var COMPONENTS$25 = [
    UifPanelComponent
];
var UifPanelModule = /** @class */ (function () {
    function UifPanelModule() {
    }
    UifPanelModule = __decorate([
        NgModule({
            declarations: COMPONENTS$25,
            imports: [
                CommonModule,
                UifOverlayModule
            ],
            exports: COMPONENTS$25,
            providers: []
        })
    ], UifPanelModule);
    return UifPanelModule;
}());

var COMPONENTS$26 = [
    UifModalComponent,
    UifModalHeaderComponent,
    UifModalContentComponent,
    UifModalFooterComponent,
];
var UifModalModule = /** @class */ (function () {
    function UifModalModule() {
    }
    UifModalModule = __decorate([
        NgModule({
            declarations: COMPONENTS$26,
            imports: [
                CommonModule,
                UifDialogModule
            ],
            exports: COMPONENTS$26,
            providers: []
        })
    ], UifModalModule);
    return UifModalModule;
}());

var COMPONENTS$27 = [
    UifPivotComponent,
    UifPivotItemComponent,
    UifPivotContentComponent,
    UifPivotTitleComponent,
];
var UifPivotModule = /** @class */ (function () {
    function UifPivotModule() {
    }
    UifPivotModule = __decorate([
        NgModule({
            declarations: COMPONENTS$27,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$27,
            providers: []
        })
    ], UifPivotModule);
    return UifPivotModule;
}());

var COMPONENTS$28 = [
    UifProgressIndicatorComponent
];
var UifProgressIndicatorModule = /** @class */ (function () {
    function UifProgressIndicatorModule() {
    }
    UifProgressIndicatorModule = __decorate([
        NgModule({
            declarations: COMPONENTS$28,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$28,
            providers: []
        })
    ], UifProgressIndicatorModule);
    return UifProgressIndicatorModule;
}());

var COMPONENTS$29 = [
    UifRatingComponent
];
var UifRatingModule = /** @class */ (function () {
    function UifRatingModule() {
    }
    UifRatingModule = __decorate([
        NgModule({
            declarations: COMPONENTS$29,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$29,
            providers: []
        })
    ], UifRatingModule);
    return UifRatingModule;
}());

var COMPONENTS$30 = [
    UifSliderComponent
];
var UifSliderModule = /** @class */ (function () {
    function UifSliderModule() {
    }
    UifSliderModule = __decorate([
        NgModule({
            declarations: COMPONENTS$30,
            imports: [
                CommonModule
            ],
            exports: COMPONENTS$30,
            providers: []
        })
    ], UifSliderModule);
    return UifSliderModule;
}());

var COMPONENTS$31 = [
    UifToggleComponent
];
var UifToggleModule = /** @class */ (function () {
    function UifToggleModule() {
    }
    UifToggleModule = __decorate([
        NgModule({
            declarations: COMPONENTS$31,
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            exports: COMPONENTS$31,
            providers: []
        })
    ], UifToggleModule);
    return UifToggleModule;
}());

var COMPONENTS$32 = [
    UifTooltipComponent
];
var UifTooltipModule = /** @class */ (function () {
    function UifTooltipModule() {
    }
    UifTooltipModule = __decorate([
        NgModule({
            declarations: COMPONENTS$32,
            imports: [
                CommonModule,
                UifCalloutModule
            ],
            exports: COMPONENTS$32,
            providers: []
        })
    ], UifTooltipModule);
    return UifTooltipModule;
}());

var COMPONENTS$33 = [
    UifWizardComponent,
    UifWizardPageComponent,
    UifWizardPageNavTitleComponent,
    UifWizardPageTitleComponent
];
var UifWizardModule = /** @class */ (function () {
    function UifWizardModule() {
    }
    UifWizardModule = __decorate([
        NgModule({
            declarations: COMPONENTS$33,
            imports: [
                CommonModule,
                UifButtonModule
            ],
            exports: COMPONENTS$33,
            providers: []
        })
    ], UifWizardModule);
    return UifWizardModule;
}());

/*  EXPORT MODELS & ENUMS */

export { UifButtonType, UifCalloutDirectionalHint, UifCalloutTriggerHint, UIfColorPickerModel, UifContextualMenuDirectionHint, WeekDay, MonthFullname, Month, MonthShortname, DateModel, WeekDayData, UifFacepileCard, UifIconFlip, UifIconBadge, UifIconDir, UifMessageType, UifPanelSizeHint, UifPanelDirectionHint, PeoplePickerGroup, UifPersonaViewType, UifPersonaAvailabilityType, PersonaItem, PersonMailItem, PersonChatItem, PersonPhoneItem, OrgChartGroup, PersonaCard, UifPivotType, UifPivotSize, UifRatingModel, UifModalSize, UiFWizardNavigation, UifBreadcrumbComponent, UifButtonComponent, UifHeroButtonComponent, UifCompoundButtonComponent, UifCalloutComponent, UifOpenCalloutComponent, UifCalloutHeaderComponent, UifCalloutContentComponent, UifCalloutActionComponent, UifContextualMenuComponent, UifContextMenuService, UifContextualMenuTriggerDirective, UifContextualMenuItemComponent, UifContextualMenuItemDividerComponent, UifContextualMenuItemHeaderComponent, UifDatepickerComponent, UifOpenDatepickerComponent, UifDialogComponent, UifDialogHeaderComponent, UifDialogContentComponent, UifDialogFooterComponent, UifDropdownComponent, UifDropdownItemService, UifDropdownOptionComponent, UifFacepileComponent, UifPersonaComponent, UifPersonaCardComponent, UifOrgChartComponent, UifOverlayComponent, UifPanelComponent, UifMessageBarComponent, UifMessageBannerComponent, UifPeoplePickerComponent, UifContextHostHeaderComponent, UifContextHostContentComponent, UifContextHostComponent, UifPivotComponent, UifPivotTitleComponent, UifPivotContentComponent, UifPivotItemComponent, UifProgressIndicatorComponent, UifToggleComponent, UifIconComponent, UifCheckboxComponent, UifChoicefieldComponent, UifChoicefieldItemComponent, UifTableComponent, UifTableTrComponent, UifTreeTableComponent, UifTreeTableColumnComponent, UifTreeTableContentComponent, UifRatingComponent, UifColorPickerComponent, UifModalComponent, UifModalHeaderComponent, UifModalContentComponent, UifModalFooterComponent, UifTooltipComponent, UifWizardComponent, UifWizardPageComponent, UifWizardPageNavTitleComponent, UifWizardPageTitleComponent, UifCarouselComponent, UifCarouselItemComponent, UifSliderComponent, UifChipsComponent, UifAccordionModule, UifBreadcrumbModule, UifButtonModule, UifCalloutModule, UifCarouselModule, UifCheckboxModule, UifChipsModule, UifChoicefieldModule, UifColorPickerModule, UifContextHostModule, UifContextualMenuModule, UifDatepickerModule, UifDialogModule, UifDropdownModule, UifFacepileModule, UifPersonaModule, UifOrgChartModule, UifPeoplePickerModule, UifIconModule, UifTableModule, UifTreeTableModule, UifMessageBannerModule, UifMessageBarModule, UifOverlayModule, UifPanelModule, UifModalModule, UifPivotModule, UifProgressIndicatorModule, UifRatingModule, UifSliderModule, UifToggleModule, UifTooltipModule, UifWizardModule };
//# sourceMappingURL=uif-fabric.esm.js.map
