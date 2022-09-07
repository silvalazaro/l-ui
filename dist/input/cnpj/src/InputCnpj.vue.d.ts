declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    required: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: {
        modelValue: string;
        required?: boolean | undefined;
    };
    emit: (event: "update:modelValue" | "search", ...args: any[]) => void;
    localValue: import("vue").WritableComputedRef<string>;
    validator: import("../../../../validator/validator").Validator;
    LuInputText: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "search")[], "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    required: {
        type: BooleanConstructor;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
}, {
    required: boolean;
}>;
export default _sfc_main;
