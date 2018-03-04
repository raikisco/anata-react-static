import React from "react";
// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
export default {
  siteRoot: "http://anatamassage.com",
  paths: {
    src: 'src', // The source directory. Must include an index.js entry file.
    dist: 'docs', // The production output directory.
    devDist: 'dist', // The development scratch directory.
    public: 'public', // The public directory (files copied to dist during build)
  },
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      // const script1 = "window.child_process = require('child_process')";
      // const script2 =
      //   "window.lazySizesConfig = window.lazySizesConfig || {}; window.lazySizesConfig.loadMode = 1"
      return (
        <Html lang="de">
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Anata Massage</title>
            {renderMeta.styleTags}
            {/* <script dangerouslySetInnerHTML={{ __html: script1 }} /> */}
            {/* <script dangerouslySetInnerHTML={{ __html: script2 }} /> */}
            {/* <script async defer src="https://apis.google.com/js/api.js" /> */}
            <script src="https://www.paypalobjects.com/api/checkout.js" />
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
