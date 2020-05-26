function slideAnimation(item) {
    let easeResult

    if(item == 'LeftMenu') {
        easeResult = 'ease-out'
    } else if('RightMenu') {
        easeResult = 'ease-in'
    } else {
        easeResult = 'ease-out'
        document.querySelector('.' + item).style.bottom = '-100%'
    }


    if(item != 'DownMenu'){
        document.querySelector('.' + item).style.top = '0%'
    }
    document.querySelector('.' + item).style.transition = `all 0.7s ` + easeResult
}

export default slideAnimation