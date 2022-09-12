const stateDefault = {
    danhSachGheDangDat: [

    ]
};

const DatVeRedeucer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate

            return { ...state }
        }
        case 'HUY_GHE': {
            let index = state.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);

            if (index !== -1) {
                state.danhSachGheDangDat.splice(index, 1);
            }

            state.danhSachGheDangDat = [...state.danhSachGheDangDat];
        }

        case 'XAC_NHAN': {


            return { ...state }
        }
        default: return { ...state }
    }
}
export default DatVeRedeucer;
