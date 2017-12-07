import React from 'react'
import { shallow, mount } from 'enzyme'
import Header from './Header'

describe('Header', () => {
	let wrapper

	beforeAll(() => {
		wrapper = mount(<Header />)
	})

	test('renders without crashing', () => {
		shallow(<Header />)
	})
	
	test('should have a header tag', () => {
		const headerTag = wrapper.find('header')
		
		expect(headerTag.length).toBe(1)
	})
})