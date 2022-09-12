import { forwardRef } from "react";

const stateXucXac = {
    mangXucXac: [
        { ma: 1, hinhAnh: './img/GameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/GameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/GameXucXac/1.png' }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}

const xucXacRedeucer = (state = stateXucXac, action) => {
    switch (action.type) {
        case 'CHON_TAI_XIU': {
            state.taiXiu = action.giaTri;
            return { ...state }
        }
        case 'PLAY_GAME': {
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien = { ma: soNgauNhien, hinhAnh: `./img/GameXucXac/${soNgauNhien}.png` };
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXucXac = mangXucXacNgauNhien;

            state.tongSoBanChoi += 1;


            let tongDiem = mangXucXacNgauNhien.reduce((tinhTong, xucXac, index) => {
                return tinhTong += xucXac.ma;
            }, 0);
            if (tongDiem >= 11 && state.taiXiu === true) {
                alert('Thắng Rồi');
                state.soBanThang += 1;
            } else {
                alert('Thua rồi');
            }

            return { ...state };
        }
        default: return { ...state };
    }
}
export default xucXacRedeucer;