import * as React from "react";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";
export interface IMyComponentProps {
    init: number;
    context: ApplicationCustomizerContext;
    render: number;
}
export interface IMyComponentState {
    url: string;
    rootFolder: boolean;
    editMode: boolean;
}
export declare class MyComponentState implements IMyComponentState {
    url: string;
    editMode: boolean;
    rootFolder: boolean;
    constructor(url?: string, editMode?: boolean, rootFolder?: boolean);
}
export default class MyComponent extends React.Component<IMyComponentProps, IMyComponentState> {
    private LOG_SOURCE;
    constructor(props: any);
    componentDidMount(): Promise<void>;
    render(): React.ReactElement<IMyComponentProps>;
}
//# sourceMappingURL=MyComponent.d.ts.map