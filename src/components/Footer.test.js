import React from 'react'
import { shallow, mount } from 'enzyme'
import Footer from './Footer'

describe('Footer', () => {
	let wrapper

	beforeAll(() => {
		wrapper = mount(<Footer />)
	})

	test('renders without crashing', () => {
		shallow(<Footer />)
	})
	
	test('should have a footer tag', () => {
		const footerTag = wrapper.find('footer')
		
		expect(footerTag.length).toBe(1)
	})
})