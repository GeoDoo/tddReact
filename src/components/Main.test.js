import React from 'react'
import { shallow, mount } from 'enzyme'
import Main from './Main'

describe('Main', () => {
	let wrapper

	beforeAll(() => {
		wrapper = mount(<Main />)
	})

	test('renders without crashing', () => {
		shallow(<Main />)
	})
	
	test('should have a main tag', () => {
		const mainTag = wrapper.find('main')
		
		expect(mainTag.length).toBe(1)
	})
})