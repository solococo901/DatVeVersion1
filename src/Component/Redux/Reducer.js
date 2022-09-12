

const stateGioHang = {
    gioHang: [

    ]
}


const gioHangReducer = (state = stateGioHang, action) => {


    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang.push(action.spGioHang)
            }


            state.gioHang = [...state.gioHang];

            return { ...state }

        }
        case 'XOA_SAN_PHAM': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.maSP);
            if (index !== -1) {
                state.gioHang.splice(index, 1)
            }
            state.gioHang = [...state.gioHang]

            return { ...state }

        }

        case 'TANG_GIAM_SO_LUONG': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.maSP);

            if (index !== -1) {
                if (state.gioHang[index].soLuong <= 1 && action.number === -1) {
                    alert('Tối thiểu là 1');
                    return
                } else {
                    state.gioHang[index].soLuong += action.number
                }
            }
            state.gioHang = [...state.gioHang]

            return { ...state }

        }
    }
    return { ...state }
}

export default gioHangReducer;