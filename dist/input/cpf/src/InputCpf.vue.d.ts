declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    required: {
        type: BooleanConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        modelValue: string;
        required?: boolean | undefined;
        label: string;
    };
    emit: (event: "update:modelValue" | "search", ...args: any[]) => void;
    localValue: import("vue").WritableComputedRef<string>;
    validator: import("../../../../validator/validator").Validator;
    LuInputText: import("vue").DefineComponent<{
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
            validator?: import("../../../../validator/validator").ValidatorInterface | undefined;
        };
        emit: (event: "update:modelValue", ...args: any[]) => void;
        maskedValue: import("vue").Ref<string>;
        el: import("vue").Ref<any>;
        localValue: import("vue").WritableComputedRef<any>;
        erroMessage: import("vue").Ref<string>;
        inputStatus: import("vue").Ref<string>;
        validate: (value: string, validator: import("../../../../validator/validator").ValidatorInterface) => void;
        input: (value: any) => void;
        LuButtonInfo: import("vue").DefineComponent<{
            message: {
                type: StringConstructor;
                required: true;
            };
            observation: {
                type: StringConstructor;
                required: false;
            };
            help: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
            active: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }, {
            props: {
                message: string;
                observation?: string | undefined;
                help: boolean;
                active: boolean;
            };
            emit: (event: "update:active" | "change", ...args: any[]) => void;
            localActiveTooltip: import("vue").Ref<boolean>;
            showHelp: import("vue").Ref<boolean>;
            activeTooltip: import("vue").WritableComputedRef<boolean>;
            showObservation: import("vue").Ref<boolean>;
            openTooltip: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:active" | "change")[], "update:active" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            message: {
                type: StringConstructor;
                required: true;
            };
            observation: {
                type: StringConstructor;
                required: false;
            };
            help: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
            active: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>> & {
            "onUpdate:active"?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
        }, {
            help: boolean;
            active: boolean;
        }>;
        mask: typeof import("maska").mask;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "search")[], "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    required: {
        type: BooleanConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    required: boolean;
}>;
export default _sfc_main;
