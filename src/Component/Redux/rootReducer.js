import { combineReducers } from 'redux';
import BaiTapOanTuXiRedeucer from './OanTuXiRedeucer';
import gioHangReducer from './Reducer';
import xucXacRedeucer from './XucXacRedeucer';
import DatVeRedeucer from './DatVeRedeucer';

const rootReducer = combineReducers({
    stateGioHang: gioHangReducer,
    xucXacRedeucer: xucXacRedeucer,
    BaiTapOanTuXiRedeucer: BaiTapOanTuXiRedeucer,
    DatVeRedeucer: DatVeRedeucer

})

export default rootReducer;  