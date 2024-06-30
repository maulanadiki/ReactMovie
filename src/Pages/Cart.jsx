import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import Swal from "sweetalert2";

const Cart = ({ movie }) => {
    const waktuTayang = [];
    const waktu = () => {
        let waktuMulai = 10;
        while (waktuMulai <= 21) {
            waktuTayang.push(`${waktuMulai}:00`);
            waktuMulai += 2;
        }
    };
    waktu();

    const [active, setActive] = useState(null);
    const { id } = useParams();
    const Detail = movie.find((item) => item.id === parseInt(id));
    const tgl_realease = format(new Date(Detail.release_date), 'dd-MMMM-yyyy');
    const [selectDate, setSelectDate] = useState('');

    const HandleSelectDate = (e) => {
        const DateSelected = new Date(e.target.value);
        const dateNow = new Date();

        if (DateSelected < dateNow) {
            setSelectDate('');
        } else {
            setSelectDate(e.target.value);
        }
    };

    const jamSekarang = new Date().getHours();

    const handleBuyTicket = (e)=>{
        e.preventDefault();
        
        Swal.fire({
            title: "Apakah Anda Yakin ?",
            text: `Pesanan Tiket Film ${Detail.title} di tanggal ${format(new Date(selectDate), 'dd MMMM yyyy')} pukul ${waktuTayang[active]} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Proses Pesanan Berhasil!",
                text: `Pesanan Tiket Film ${Detail.title} Berhasil! Dilakukan`,
                icon: "success"
                }).then(result => {
                    window.location.href = "/";
                });
            }
        })
    }
    return (
        <div className="col-md-12" >
            <div className="col-md-8 p-3 border border-3 rounded mx-auto mt-3">
                <div className="row"> 
                    <div className="col-md-4">
                        <img className="img-fluid rounded-start" src={`https://image.tmdb.org/t/p/w500${Detail.poster_path}`} style={{ height: '421px', width: 'auto' }} alt={Detail.title} />
                    </div>
                    <div className="col-md-8">
                        <h2>{Detail.title}</h2>
                        <h5>Release Date: {tgl_realease}</h5>
                        <h5>Rating: {Detail.vote_average}</h5>
                        <div className="row">
                            <h5 className="col-md-3">Pilih Tanggal</h5>
                            <div className="col-md-4">
                                <input type="date" className="form-control" onChange={HandleSelectDate} value={selectDate} min={new Date().toISOString().split('T')[0]} />
                            </div>
                        </div>
                        <h5>Jam Tayang</h5>
                        <div className="d-flex flex-direction-row gap-2 mt-3">
                            {selectDate && new Date(selectDate) > new Date() ?
                                (
                                    waktuTayang.map((item, index) => (
                                        <div key={index}>
                                            <button className={`btn btn-outline-primary ${active === index ? 'active' : ''}`} onClick={() => setActive(index)}>{item}</button>
                                        </div>
                                    ))
                                ) :
                                (
                                    waktuTayang.filter((item) => parseInt(item.split(':')[0]) >= jamSekarang).map((item, index) => (
                                        <div key={index}>
                                            <button className={`btn btn-outline-primary ${active === index ? 'active' : ''}`} onClick={() => setActive(index)}>{item}</button>
                                        </div>
                                    ))
                                )}
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-success text-light mt-3" onClick={handleBuyTicket}><i className="bi bi-bag-plus"></i> Buy Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
