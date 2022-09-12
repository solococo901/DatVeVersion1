import { DAT_GHE, HUY_GHE, XAC_NHAN } from "../Types/BaiTapBookingType"

export const datGheAction = (ghe) => {
    return {
        type: DAT_GHE,
        ghe
    }
}

export const huyGheAction = (ghe) => {
    return {
        type: HUY_GHE,
        ghe
    }
}

export const xacNhanDatGhe = (ghe) => {
    return {
        type: XAC_NHAN,
        ghe
    }
}