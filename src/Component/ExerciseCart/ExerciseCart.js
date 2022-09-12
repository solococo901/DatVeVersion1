import React, { Component } from 'react'
import CartModal from './CartModal'
import ProductList from './ProductList'

export default class ExerciseCart extends Component {

    state = {
        gioHang: [

        ]
    }
    themGioHang = (sanPham) => {
        console.log(sanPham);
        let spGioHang = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            soLuong: 1,
            donGia: sanPham.giaBan,
            hinhAnh: sanPham.hinhAnh
        }

        let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP);

        if (index != -1) {
            this.state.gioHang[index].soLuong += 1;
        } else {
            this.state.gioHang.push(spGioHang);
        }

        let capNhatGioHang = [...this.state.gioHang];


        this.setState({
            gioHang: capNhatGioHang
        })
    }

    xoaGioHang = (maSP) => {
        console.log(maSP);
        let index = this.state.gioHang.findIndex(spGH => spGH.maSP === maSP);
        if (index !== -1) {
            this.state.gioHang.splice(index, 1);
        }
        this.setState({
            gioHang: this.state.gioHang
        })
    }

    tinhTongGioHang = () => {
        return this.state.gioHang.reduce((tongSoLuong, spGH, index) => {
            return tongSoLuong += spGH.soLuong;
        }, 0)
    }

    tangGiamSoLuong = (maSP, number) => {
        let gioHang = [...this.state.gioHang];
        let index = gioHang.findIndex(spGH => spGH.maSP === maSP);

        if (index != -1) {
            if (gioHang[index].soLuong <= 1 && number === -1) {
                alert("tối thiểu là 1");
                return;
            }
            gioHang[index].soLuong += number;
        }

        this.setState({
            gioHang
        })
    }
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Bài Tập giỏ hàng</h3>
                <CartModal gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                <ProductList themGioHang={this.themGioHang} tinhTongGioHang={this.tinhTongGioHang} />
            </div>


        )
    }
}
