import React, { Component } from 'react';
import { connect } from 'react-redux';

class SeatInfo extends Component {
    renderDSGheDangDat = () => {
        return this.props.danhSachGheDangDat.map((gheDangDat, index) => {
            return (
                <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                        <button className='' onClick={() => {
                            this.props.dispatch({
                                type: "CANCEL_SEAT",
                                soGhe: gheDangDat.soGhe
                            })
                        }}>
                            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <>
                <div className='mt-3'>
                    <ul className="mt-5 confirmSeat display-block">
                        <li>
                            <button className='gheDuocChon' id='resSeat'></button>
                            <span className='fs-ghe'>Ghế đã đặt</span>
                        </li>
                        <li>
                            <button className='gheDangChon' id='seleSeat'></button>
                            <span className='fs-ghe'>Ghế đang chọn</span>
                        </li>
                        <li>
                            <button className='ghe ml-0' id='empSeat'></button>
                            <span className='fs-ghe'>Ghế chưa đặt</span>
                        </li>
                    </ul>
                </div>
                <div className='mt-1'>
                    <table className="table" border={2}>
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDSGheDangDat()}
                        </tbody>
                    </table>
                </div>
                <div className='total text-left'>Tổng tiền:</div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.ThongTinDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(SeatInfo);