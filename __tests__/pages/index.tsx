import renderer from 'react-test-renderer';

import Index from 'pages/index';

describe('Index Page', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
