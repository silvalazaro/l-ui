declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
