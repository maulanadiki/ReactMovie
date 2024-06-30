import { useParams } from "react-router-dom"
import { format } from "date-fns"
const Detail = ({movie}) => {
  const {id } = useParams();
  const Detail = movie.find(item=>item.id === parseInt(id) )
  const tgl_realease = format(new Date(Detail.release_date), 'dd-MMMM-yyyy')
  return (
    <div className="row p-3 border border-3 rounded m-3">
        <div className="col-md-3">
          <img className="img-fluid rounded-start" src={`https://image.tmdb.org/t/p/w500${Detail.poster_path}`} style={{ height: '421px', width: 'auto' }} alt={Detail.title}/>
        </div>
        <div className="col-md-8">
          <h2>{Detail.title}</h2>
          <h5>Realese Date : {tgl_realease}</h5>
          <h5>Rating : {Detail.vote_average}</h5>
          <h5>Type : {Detail.media_type}</h5>
          <div className="d-flex flex-direction-row gap-2">
              <h5>Overview </h5>
              <span>{Detail.overview}</span>
          </div>
          <a href={`/cart/${id}`}  className="btn btn-success text-light mt-3"><i className="bi bi-bag-plus"></i> Buy Ticket</a>
      </div>
    </div>
  )
}

export default Detail