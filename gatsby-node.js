// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.

const LAYOUT_PAGES = {
  HOME: 'home',
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(resolve => {
    switch (page.path) {
      case '/':
        createPage({ ...page, layout: LAYOUT_PAGES.HOME });
        break;
      default:
        break;
    }
    resolve();
  });
};
