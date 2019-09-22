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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var jf = __importStar(require("joiful"));
var NewNoteDto = /** @class */ (function () {
    function NewNoteDto() {
        this.authorId = "";
        this.content = "";
    }
    __decorate([
        jf.string().required().min(1),
        __metadata("design:type", String)
    ], NewNoteDto.prototype, "authorId", void 0);
    __decorate([
        jf.string().required().min(3),
        __metadata("design:type", String)
    ], NewNoteDto.prototype, "content", void 0);
    return NewNoteDto;
}());
exports.default = NewNoteDto;