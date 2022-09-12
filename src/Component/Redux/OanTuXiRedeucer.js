const stateDefault = {

    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/GameOanTuXi/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/GameOanTuXi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/GameOanTuXi/bao.png', datCuoc: false },
    ],
    ketQua: "Ngon !!!",
    soBanThang: 0,
    soBanThua: 0,
    computer: { ma: 'keo', hinhAnh: './img/GameOanTuXi/keo.png' },

}

const BaiTapOanTuXiRedeucer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_ICON_CUOC': {
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
                if (item.ma === action.iCon) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangDatCuocUpdate;
            return { ...state };
        }
        case 'PLAY_GAME_OTX': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;

            return { ...state };


        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hoa Nhau';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua';
                        state.soBanThua += 1;

                    } else {
                        state.ketQua = 'Win';
                        state.soBanThang += 1;
                    };
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Win';
                        state.soBanThang += 1;

                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hoa Nhau';
                    } else {
                        state.ketQua = 'Thua';
                        state.soBanThua += 1;
                    };
                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Thua';
                        state.soBanThua += 1;

                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Win';
                        state.soBanThang += 1;

                    } else { state.ketQua = 'Hoa Nhau' };
                    break;
                default: state.ketQua = 'Win';

                    return { ...state }
            }
            return { ...state }
        }
        default: return { ...state }
    }
}
export default BaiTapOanTuXiRedeucer;