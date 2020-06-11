import React from 'react'

function HeaderMyProfile() {
    return (
        <div className='HeaderMyProfile' onClick={() => {
            document.querySelector('.Left').classList.add('isLeftClicked')
            document.querySelector('.LeftMenu').classList.add('isLeftMenuClicked')
        }}>
            <img src={window.location.origin + '/fds/95791762_2894799623888750_6357181261760430080_n.jpg'} className='PostUserIcon' alt='img' />
            <div>
                <h5>Caio Felipe</h5>
                <p>@CaioReidaFarofa</p>
            </div>
        </div>
    )
}

export default HeaderMyProfile