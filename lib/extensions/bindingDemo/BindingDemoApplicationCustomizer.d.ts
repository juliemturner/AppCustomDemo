import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IBindingDemoApplicationCustomizerProperties {
    testMessage: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class BindingDemoApplicationCustomizer extends BaseApplicationCustomizer<IBindingDemoApplicationCustomizerProperties> {
    private LOG_SOURCE;
    onInit(): Promise<void>;
    onDispose(): Promise<void>;
    private render;
}
//# sourceMappingURL=BindingDemoApplicationCustomizer.d.ts.map