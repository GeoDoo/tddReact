import index from './index'

test('renders without crashing', () => {
	expect(JSON.stringify(
    Object.assign({}, index, { _reactInternalInstance: 'censored' })
  )).toMatchSnapshot()
})