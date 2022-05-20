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
    tooltip: {
        type: null;
        required: true;
        default: {};
    };
}, {
    props: {
        message: string;
        observation?: string | undefined;
        help: boolean;
        tooltip: any;
    };
    showHelp: import("vue").Ref<boolean>;
    showObservation: import("vue").Ref<boolean>;
    doShowHelp: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    tooltip: {
        type: null;
        required: true;
        default: {};
    };
}>>, {
    help: boolean;
    tooltip: any;
}>;
export default _sfc_main;
