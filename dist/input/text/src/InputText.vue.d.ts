import { mask } from "maska";
import { ValidatorInterface } from '../../../../../../../../../node/app/src/validator/validator';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: null;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    mask: {
        type: StringConstructor;
        required: false;
    };
    message: {
        type: StringConstructor;
        required: false;
    };
    validator: {
        type: null;
        required: false;
    };
}, {
    props: {
        modelValue: any;
        label: string;
        mask?: string | undefined;
        message?: string | undefined;
        validator?: ValidatorInterface | undefined;
    };
    emit: (event: "update:modelValue", ...args: any[]) => void;
    maskedValue: import("vue").Ref<string>;
    el: import("vue").Ref<any>;
    localValue: import("vue").WritableComputedRef<any>;
    erroMessage: import("vue").Ref<string>;
    inputStatus: import("vue").Ref<string>;
    validate: (value: string, validator: ValidatorInterface) => void;
    input: (value: any) => void;
    LuButtonInfo: any;
    mask: typeof mask;
    vMask: {
        created: (el: HTMLElement, binding: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void;
        updated: (el: HTMLElement, binding: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: null;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    mask: {
        type: StringConstructor;
        required: false;
    };
    message: {
        type: StringConstructor;
        required: false;
    };
    validator: {
        type: null;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
}>;
export default _sfc_main;
