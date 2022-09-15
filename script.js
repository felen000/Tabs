const tabBtns = document.querySelectorAll('.tabs__btn') 
const tabItems = document.querySelectorAll('.tabs__item') 

tabBtns.forEach(item => {
	let tabBtn = item
	tabBtn.addEventListener('click', () => {
		let tabItemId = tabBtn.getAttribute('data-tabId')
		let tabItem = document.querySelector(tabItemId)

		tabBtns.forEach(item => item.classList.remove('active'))
		tabItems.forEach(item => item.classList.remove('active'))

		tabBtn.classList.add('active')
		tabItem.classList.add('active')
	})
})