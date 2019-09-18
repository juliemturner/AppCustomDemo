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

export class MyComponentState implements IMyComponentState {
  constructor(
    public url: string = null,
    public editMode: boolean = document.location.href.indexOf("Mode=Edit") !== -1,
    public rootFolder: boolean = false
  ) { }
}

export default class MyComponent extends React.Component<IMyComponentProps, IMyComponentState> {
  private LOG_SOURCE: string = "MyComponent";

  constructor(props) {
    super(props);
    let h = (history.state) ? history.state["url"] : "null";
    this.state = new MyComponentState(h, document.location.href.indexOf("Mode=Edit") !== -1);

    if (document.location.pathname.indexOf(`${this.props.context.pageContext.site.serverRelativeUrl}/`) < 0) {
      console.warn(`Page context location != document location: (${this.props.context.pageContext.site.serverRelativeUrl}) - (${document.location.pathname})`);
    }
  }

  public async componentDidMount(): Promise<void> {
    let h = (history.state) ? history.state["url"] : "null";
    this.setState({ url: h });
    //this.mountCode();
    //this.calculateLocation();

    // Thanks to Elio Stuyf - https://www.eliostruyf.com/check-page-mode-from-within-spfx-extensions/
    // *****
    // Needed to trap page state changes between edit/view to change display
    // *****
    const _pushState = () => {
      const _defaultPushState = history.pushState;
      // We need the current this context to update the component its state
      const _self = this;
      return function (data: any, title: string, url?: string | null) {
        try {
          if (_self.props.context.isDisposed) {
            console.error(`Disposed context during page transition - ${_self.LOG_SOURCE} (componentDidMount-pushState)`);
            return _defaultPushState.apply(this, [data, title, url]);
          }
          let rootFolder: boolean = false;
          let workingUrl = url.toLowerCase();
          if (workingUrl.indexOf('.aspx') == -1) {
            //Assume home page and get full url
            workingUrl = `${document.location.origin}${_self.props.context.pageContext.site.serverRequestPath}`.toLowerCase();
          }
          let pageUrl = workingUrl.split("?")[0];
          let spIdx: number = pageUrl.toLowerCase().indexOf('sitepages');
          if (spIdx < 0) {
            //If not in sites pages folder -- disable multilingual
            console.warn(`User is not in site pages library - ${_self.LOG_SOURCE} (componentDidMount-pushState)`);
          } else {
            rootFolder = ((pageUrl.substr(spIdx).split("/").length - 1) == 1);
            let homePage = (url.indexOf('.aspx') < 0);

            //Check if state needs to be updated
            let editMode = url.indexOf('Mode=Edit') !== -1;
            if (editMode !== _self.state.editMode ||
              pageUrl !== _self.state.url ||
              rootFolder !== _self.state.rootFolder) {
              _self.setState({
                url: pageUrl,
                editMode: editMode,
                rootFolder: rootFolder
              });
            }
          }
        } catch (err) {
          console.error(`${err} - ${_self.LOG_SOURCE} (componentDidMount-pushState)`);
        }
        // Call the original function with the provided arguments
        // This context is necessary for the context of the history change
        return _defaultPushState.apply(this, [data, title, url]);
      };
    };
    history.pushState = _pushState();
  }

  public render(): React.ReactElement<IMyComponentProps> {
    try {
      return (
        <div data-component={this.LOG_SOURCE} style={{ backgroundColor: 'yellow', padding: '10px' }}>
          <div>Render Count: {this.props.render}</div>
          <div>Page Edit Mode: {this.state.editMode.toString()}</div>
          <div>Context Path from Site: {this.props.context.pageContext.site.serverRequestPath}</div>
          <div>Document.Location.HREF: {document.location.href}</div>
          <div>State Url from History: {this.state.url}</div>
        </div>
      );
    } catch (err) {
      console.log(`${err} - ${this.LOG_SOURCE} (render)`);
      return null;
    }
  }
}