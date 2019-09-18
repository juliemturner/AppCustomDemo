## app-custom-demo

The solution demo's various ways to load/reload the application customizer in the page.  

The video shows the test I ran that transitions between pages in a site collection, pages between site collections where both have the application customizer and then to a site collection without the customizer and back... 

You can see in the console logs the issues. The one issue I can't yet replicate is in the render method the "this.context" object being undefined although in the Multilingual Pages solution that happens consistantly.  I will try and work on replicating that issue.

The method for coding I think is rather obvious, the biggest issues really is that the history and the context think the page is one thing but the standard "document.location.href" thinks the url is something different.

Also, the code in the MyComponent.tsx file in the componentDidMount method, for testing the page state... this is necessary because we have no other way of trapping the page going in and out of Edit mode which is often critical. Note in the console logs that method is called because the component did mount but the context has been disposed....

```typescript
if (_self.props.context.isDisposed) {
  console.error(`Disposed context during page transition - ${_self.LOG_SOURCE} (componentDidMount-pushState)`);
  return _defaultPushState.apply(this, [data, title, url]);
}
```
