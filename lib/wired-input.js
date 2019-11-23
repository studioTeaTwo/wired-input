var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { rectangle, fire } from 'wired-lib';
import { WiredBase, BaseCSS } from 'wired-lib/lib/wired-base';
import { customElement, property, query, css, html } from 'lit-element';
let WiredInput = class WiredInput extends WiredBase {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.placeholder = '';
        this.type = 'text';
        this.autocomplete = '';
        this.autocapitalize = '';
        this.autocorrect = '';
        this.required = false;
        this.autofocus = false;
        this.readonly = false;
    }
    static get styles() {
        return [
            BaseCSS,
            css `
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
      `
        ];
    }
    render() {
        return html `
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `;
    }
    get input() {
        return this.textInput;
    }
    get value() {
        const input = this.input;
        return (input && input.value) || '';
    }
    set value(v) {
        if (this.shadowRoot) {
            const input = this.input;
            if (input) {
                input.value = v;
                return;
            }
        }
        this.pendingValue = v;
    }
    firstUpdated() {
        this.value = this.pendingValue || this.value || this.getAttribute('value') || '';
        delete this.pendingValue;
    }
    canvasSize() {
        const s = this.getBoundingClientRect();
        return [s.width, s.height];
    }
    draw(svg, size) {
        rectangle(svg, 2, 2, size[0] - 2, size[1] - 2);
    }
    refire(event) {
        event.stopPropagation();
        fire(this, event.type, { sourceEvent: event });
    }
};
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], WiredInput.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], WiredInput.prototype, "placeholder", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], WiredInput.prototype, "name", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], WiredInput.prototype, "min", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], WiredInput.prototype, "max", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], WiredInput.prototype, "step", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], WiredInput.prototype, "type", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], WiredInput.prototype, "autocomplete", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], WiredInput.prototype, "autocapitalize", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], WiredInput.prototype, "autocorrect", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], WiredInput.prototype, "required", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], WiredInput.prototype, "autofocus", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], WiredInput.prototype, "readonly", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], WiredInput.prototype, "minlength", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], WiredInput.prototype, "maxlength", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], WiredInput.prototype, "size", void 0);
__decorate([
    query('input'),
    __metadata("design:type", HTMLInputElement)
], WiredInput.prototype, "textInput", void 0);
WiredInput = __decorate([
    customElement('wired-input')
], WiredInput);
export { WiredInput };
