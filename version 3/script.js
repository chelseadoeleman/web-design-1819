class State {

    set(key, value) {
        this[key] = value
    }

    get(key) {
        return this[key]
    }
}

const stateMemory = new State()

const buttonAm = document.querySelector('.first-check')
const buttonPm = document.querySelector('.second-check')

if(buttonAm || buttonPm) {
    buttonAm.addEventListener('click', event => {

        buttonPm.classList.remove('clicked')

        if(buttonAm.classList.contains('clicked')) {
            buttonAm.classList.remove('clicked')
        } else {
            if(event) {
                buttonAm.classList.add('clicked')
            } 
        }
    })
    buttonPm.addEventListener('click', event => {
        buttonAm.classList.remove('clicked')
        if(buttonPm.classList.contains('clicked')){
            buttonPm.classList.remove('clicked')
        } else {
            if(event) {
                buttonPm.classList.add('clicked')
            } 
        }
    })
}


// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ]
const keyUpEvents = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'b', 'n', 'm', '{', ';', '|', ',', '.', '/', '}', 'Enter']
const keyDownEvents = ['t', 'g', 'b', 'v', 'f', 'r', 'e', 'd', 'c', 'w', 's', 'x', 'q', 'a', 'z', '`']
const keyPlusses = document.querySelectorAll('.keyUpEvent')
const keyMinuses = document.querySelectorAll('.keyUpEvent')
const eventKeys = [...keyUpEvents, ...keyDownEvents]

// keyPlusses.forEach(keyPlus => {
//     keyPlus.addEventListener('keyup', event => {
//         const { key, target } = event
//         console.log(key)
//         const matches = keyUpEvents.filter(keyEvent => keyEvent === key)
        
//         if (matches && matches.length > 0) {
//             target.value++
//         }
//     })
// })

// keyMinuses.forEach(keyMin => {
//     keyMin.addEventListener('keyup', event => {
//         const { key, target } = event
//         console.log(key)
//         const matches = keyDownEvents.filter(keyEvent => keyEvent === key)
    
//         if (matches && matches.length > 0) {
//                 target.value--
//         } 
//     })
// })

// const monthInput = document.getElementById('monthInput')

// if (monthInput) {
//     monthInput.addEventListener('keyup', event => {
//         const { key, target } = event
//         const matches = keyUpEvents.filter(keyEvent => keyEvent === key)
    
//         if (matches && matches.length > 0) {
//             const month = document.getElementById('monthAbove')
        
//             month.innerText = ''
        
//             const value = event.target.value
//             console.log(value)
//             if (value) {
//                 const monthName = months[value - 1]
//                 month.innerText = monthName
//             }
//             if (target.value + 1 < Number(target.getAttribute('max'))) {
//                 target.value++
//             } 
//         } else {
//             const month = document.getElementById('monthAbove')
        
//             month.innerText = ''
        
//             const value = event.target.value
//             if (value) {
//                 const monthName = months[value - 1]
//                 month.innerText = monthName
//             }
//         }
//     })
// }


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

    event.preventDefault()

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

const toggle = document.getElementById('toggle')

function onToggleFocus({ target }) {
    if (target) {
        target.addEventListener('keydown', ({ key }) => {
            if (eventKeys.includes(key)) {
                target.click()
            }
        })
    }
}

toggle.addEventListener('focus', onToggleFocus)

toggle.addEventListener('change', event => {
    const target = event.target.checked
    if(target) {
        const explanations = document.querySelectorAll('.explanation')
        Array.from(explanations).forEach(explanation => explanation.setAttribute('style', 'opacity: 0;'))
    } else {
        const explanations = document.querySelectorAll('.explanation')
        Array.from(explanations).forEach(explanation => explanation.setAttribute('style', 'opacity: 1;'))
    }
})


const dayInput = document.getElementById('dayInput')
const monthInput = document.getElementById('monthInput')
const setDate = document.querySelector('.setDate')

setDate.innerText = 'january - 1'

monthInput.addEventListener('change', (event) => {
    const { target } = event
    const newMonth = target.value
    stateMemory.set('month', newMonth)

    const day = stateMemory.get('day')
    const month = stateMemory.get('month')  

    if(day || month) {
        setDate.innerText =  (month || 'january') + ' - ' + (day || '1')
    }
})

dayInput.addEventListener('change', (event) => {
    const { target } = event
    const newDay = target.value
    stateMemory.set('day', newDay)

    const day = stateMemory.get('day')
    const month = stateMemory.get('month')
    
    if(day || month) {
        setDate.innerText = (month || 'january') + ' - ' + (day || '1')
    }  
})


