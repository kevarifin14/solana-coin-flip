import renderer from 'react-test-renderer';
import <FTName> from '.';

describe('<FTName>', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <<FTName>>
      </<FTName>>
    );
    expect(tree).toMatchSnapshot();
  });
});