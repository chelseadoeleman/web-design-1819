const monthInput = document.getElementById('monthInput')

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

monthInput.addEventListener('keyup', event => {

    const month = document.getElementById('monthAbove')

    month.innerText = ''
    
    const value = event.target.value
    const monthName = months[value - 1]

    month.innerText = monthName
})

const focussables = document.querySelectorAll('.focussable')
    const state = {
        focussedElement: null,
        previousKey: null,
    }

    window.addEventListener('keydown', focusNextElement)

    focussables.forEach(focussable => {
        focussable.addEventListener('focus', (event) => {
            state.focussedElement = event.target
        })
    })

    function focusNextElement(event) {
        if (event.key !== 'Shift' && event.key !== ' ') {
            return
        }

        const { previousKey, focussedElement } = state

        const currentIndex = focussedElement
            ? [...focussables].findIndex(focussable => focussable === focussedElement)
            : -1

        if (previousKey !== 'Shift' && event.key === ' ') {
            const nextIndex = currentIndex + 1 > focussables.length
                ? 0
                : currentIndex + 1

            const element = focussables[nextIndex]
            element.focus()
        } else if (previousKey === 'Shift' && event.key === ' ') {
            const previousIndex = currentIndex - 1 < 0
                ? 0
                : currentIndex - 1

            const element = focussables[previousIndex]
            element.focus()
        }

        state.previousKey = event.key
    }