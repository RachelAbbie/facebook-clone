import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/128424980_479468843029137_8168339566780711416_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeHuzArZEefE154w9h22ZESohVce1hnZCseFVx7WGdkKx-nsErLmSh1Ry8DS1LCOeRrhrPiJw4gvf-I4cmQcn8so&_nc_ohc=PynMJTWVCGcAX8QzzHm&_nc_ht=scontent.fcrk3-1.fna&oh=79995aa04ed423f4828102223feefbaa&oe=6026464B"
            profileSrc = "https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/58831688_2429083663789321_6826828793047416832_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF6XFIhH-bNugwY-GKX7B2zi3BXJ0sK80GLcFcnSwrzQZy_f-c0tEUPER_09FISZUtP0Wpf5VGRh_8OsLvdmt1X&_nc_ohc=1SCniyn5RzUAX9HmT8f&_nc_ht=scontent.fcrk3-1.fna&oh=c18e183e8d02b95eaef0bfe0e10aba3a&oe=6027E8C6"
            title="Esther Joy F. Fernando"/>

            <Story image="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/131172609_887545741991062_3730493747759299281_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeGz5w32Nk4g2wX7JuInlHyJ4Yjcl5Sq0PbhiNyXlKrQ9jkDxEV_Q1wovS-p-wjdB9loJjqZoxplpiWwfKVSK9r8&_nc_ohc=wre5Jf5ce_EAX83Flsz&_nc_ht=scontent.fcrk3-1.fna&oh=9668924cf51cf9ea2d19a7e2aee26a1e&oe=6028EA43" 
            profileSrc="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/130274036_886854495393520_7893147171905297478_n.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeFsgeP24wDHXGAJm7mgbUusrQHg0Bf_ZBGtAeDQF_9kEeD7xa_6YZzdk_G13ByPabwdds9DOrXhoa6Ruq1Wep9G&_nc_ohc=Ng9y9nrodEwAX-wVvbE&_nc_ht=scontent.fcrk3-1.fna&oh=5b7c050c9c8c0b6be5136c6bbd34746d&oe=6028458B"
            title="Carl Joshua"/>

            <Story 
            image="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/29258506_1723532641001906_785809247995691008_o.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_eui2=AeGaorfhZaNZKCb1VBNMboaR_vImhpuxPrL-8iaGm7E-st8pbwv3Lh8_WvzO6i_0tALP-ARF_OoLtMyO29oLJekR&_nc_ohc=r4Kuu3sWiRoAX_nylAz&_nc_ht=scontent.fcrk3-1.fna&oh=a67ec2ee0568dce9b0f2473f66947cd3&oe=60279914"
            profileSrc="https://scontent.fcrk3-1.fna.fbcdn.net/v/t31.0-8/10710397_831477136874132_5945998315335080157_o.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_eui2=AeGLaNBHV_jglOUYQndUki6p3TiGrQuRIG3dOIatC5EgbZHC9yIgtsRIQlP2hRjUEHaFGtRbUc-SRSLPQxTw_Uba&_nc_ohc=m4VAY0htZJUAX9bfibD&_nc_ht=scontent.fcrk3-1.fna&oh=1a7f19f9baed95b8cf3547f857fdcd43&oe=6025E25C"
            title="Eden Villar" />

            <Story 
            image="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/78732774_2658983497481868_4812497094092783616_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_eui2=AeGH3xwU5Z2_XgeFad7f5GEuTUZo2RONjZ5NRmjZE42Nng5FEyOPd3pW1xKVV-9O7oH3nh-PhO4dFCVSMsrMT-Iv&_nc_ohc=ZRFPPUBgFYoAX_UgjV_&_nc_oc=AQnEXGkF6RzQr8rnOCukVKcLo7-enmxklWb4XSlE5fGDf-sZa44_BwJ8ItELi91_Jdk&_nc_ht=scontent.fcrk3-1.fna&oh=2c22aa857226f1e78bb4a8dd7bb3a073&oe=602650F5"
            profileSrc="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/14717285_1187106738002892_7717331669666601309_n.jpg?_nc_cat=103&ccb=2&_nc_sid=174925&_nc_eui2=AeFW0Gv9Mh4kRJKURgv2et-B-vZdYWQyouT69l1hZDKi5BA13LVRdX59-N9f7tkBhp9BOzxLVK1PXTiqqixseuaH&_nc_ohc=qnMGaIJaSwkAX8YPqvW&_nc_ht=scontent.fcrk3-1.fna&oh=20d43c77780b35bf65ec60d4aded6309&oe=6025CE89"
            title="Jorel Ferrer"/>
            <Story 
            image="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/89682589_235025197625861_5745205618159910912_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeH5T1szcpWzvMOiQrso_PtNnDrgLzZdBNycOuAvNl0E3Lria6_JV7T-HU4J7eNm7ITw3tnW78Xmwhv2B_u0m56Y&_nc_ohc=kwoFPZA1FWEAX99uONE&_nc_ht=scontent.fcrk3-1.fna&oh=e5c05eb533b41799909c7b5c484887b4&oe=60273F47"
            profileSrc="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/133755068_1597899830597952_5519149716884708988_o.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEuO_eOtKqoKjl0xmfzJ8vNIN30jb3N3sgg3fSNvc3eyFoL48Ohn9EqLWMxm5_T68d90Wywv55rQ22EmZWvC-Xw&_nc_ohc=Ovjrh61ttnkAX8VvaCl&_nc_ht=scontent.fcrk3-1.fna&oh=432e8d67fc76c68bb72ade9f389976a0&oe=6028B8EE"
            title="Frisha Noreen"/>
           
        </div>
    )
}

export default StoryReel
