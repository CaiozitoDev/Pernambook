function slideAnimation(item) {
    let easeResult

    if(item == 'LeftMenu') {
        easeResult = 'ease-out'
    } else if(item == 'RightMenu') {
        easeResult = 'ease-in'
    } else {
        easeResult = 'ease-out'
    }

    document.querySelector('.' + item).style.top = '0%'
    document.querySelector('.' + item).style.transition = `all 0.5s ` + easeResult
}

export default slideAnimation