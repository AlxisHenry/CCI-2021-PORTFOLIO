import AOS from 'aos'
import 'aos/dist/aos.css'
import * as Menu from './components/burger-menu'

const Themes = () => {
    // Swap themes with navbar icons
    const SwapThemeElement = document.querySelector('.__theme__main__')
    const Theme = SwapThemeElement.children[0]
    if (SwapThemeElement) {
        SwapThemeElement.addEventListener('click', () => {
            if (Theme) {
                const ActualTheme = SwapThemeElement.id
                const SwapTo = Theme.dataset.next
                SwapThemeElement.id = SwapTo.toLowerCase()
                Theme.id = SwapTo.toLowerCase()
                Theme.title = SwapTo
                Theme.alt = SwapTo
                Theme.dataset.next = ActualTheme
                Theme.src = Theme.src.replace(ActualTheme, SwapTo.toLowerCase())
            }
        })
    }

}

const LoadingPosition = (e) => {
    // Load scrollbar on the left of the page
    const LoadingIndicator = document.querySelector('.__state__indicator__')
    const TotalHeight = document.body.offsetHeight
    const PassedHeight = Math.round(window.scrollY + window.innerHeight)
    const LoadingState = Math.round((PassedHeight / TotalHeight) * 100)
    LoadingIndicator.style.height = LoadingState + '%'
}

const BackToTopArrow = (status) => {

    if (status) {
        if(document.documentElement.scrollTop < 350) {
            console.log(status, "Presentation section")
            status = false
            console.log("new status", status)
            return
        }
    }

    const Arrow = document.querySelector('.to-top-arrow')

    Arrow.addEventListener('click', () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    })

    if(document.documentElement.scrollTop > 350) {
        Arrow.classList.remove('hidden')
        Arrow.classList.remove('reverse-animation')
    } else {
        Arrow.classList.add('reverse-animation')
    }

}

window.addEventListener('load', (e) => {

    let BackToTopState = true

    AOS.init({ duration: 1800 })
    Themes()
    LoadingPosition(e)
    Menu.Button()
    Menu.Hover()
    Menu.Animation()
    BackToTopArrow(BackToTopState)

})

window.addEventListener('scroll', (e) => {

    LoadingPosition(e)
    BackToTopArrow()

})

window.addEventListener('resize', () => {

    Menu.Resize()

})

