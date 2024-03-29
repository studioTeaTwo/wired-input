import { Point } from 'wired-lib';
import { WiredBase } from 'wired-lib/lib/wired-base';
import { TemplateResult, CSSResultArray } from 'lit-element';
export declare class WiredInput extends WiredBase {
    disabled: boolean;
    placeholder: string;
    name?: string;
    min?: string;
    max?: string;
    step?: string;
    type: string;
    autocomplete: string;
    autocapitalize: string;
    autocorrect: string;
    required: boolean;
    autofocus: boolean;
    readonly: boolean;
    minlength?: number;
    maxlength?: number;
    size?: number;
    private textInput?;
    private pendingValue?;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    readonly input: HTMLInputElement | undefined;
    value: string;
    firstUpdated(): void;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    private refire;
}
