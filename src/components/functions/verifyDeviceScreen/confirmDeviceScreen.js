function confirmDeviceScreen(x) {
    if (x.matches) {           // If media query matches
        return true
    } else {
        return false
    }
}

export default confirmDeviceScreen