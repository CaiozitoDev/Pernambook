import React from 'react'


function HeaderMyProfile() {
    /* const [HeaderMyProfileClick, setHeaderMyProfileClick] = useState(false) */

    function makeLeftMenuAppear() {
        document.querySelector('.Left').style.left = '0%'
        document.querySelector('.Left').style.display = 'initial'
    }


    return (
        <div className='HeaderMyProfile' onClick={makeLeftMenuAppear}>
            <img src={window.location.origin + '/fds/95791762_2894799623888750_6357181261760430080_n.jpg'} className='PostUserIcon'/>
            <div>
                <h5>Caio Felipe</h5>
                <p>@CaioReidaFarofa</p>
            </div>
        </div>
    )
}

export default HeaderMyProfile