import confirmDeviceScreen from './confirmDeviceScreen'
// FUNÇÃO ACIMA VERIFICA SE O PROPORTION PASSADO REALMENTE BATE COM O WIDTH ATUAL

let ScreenOptions = [
    {
        proportion: "(min-width: 1025px)",
        device: 'desktop'
    },
    {   proportion: '(min-width: 768px) and (max-width: 1024px)',
        device: 'tablet'
    },
    {   proportion: '(max-width: 768px)',
        device: 'smartphone'
    }
]

let CorrectScreen

for(let i = 0; ScreenOptions.length; i++) {
    let x = window.matchMedia(ScreenOptions[i].proportion)
    if(confirmDeviceScreen(x)) {
        CorrectScreen = ScreenOptions[i].device
        break
    }
}

export default CorrectScreen