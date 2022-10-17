import { useNavigate, useParams } from "react-router-dom";



export function UpdateInstrument() {
  const navigate = useNavigate();
  const param = useParams();
  const id = param.instrumentId

  return (
    <div className="p-5 content bg-whitesmoke text-center">
      <h2>Új hangszer</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        fetch(`https://kodbazis.hu/api/instruments/${id}`, {
          method: "PUT",
          credentials: "include",
          body: JSON.stringify({
            name: event.target.elements.name.value,
            price: event.target.elements.price.value,
            quantity: event.target.elements.quantity.value,
            imageURL: event.target.elements.imageURL.value,
          })
        })
          .then(() => navigate('/'))
          .catch(console.log())
      }}>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Név:</label>
          <div className="col-sm-9">
            <input type="text" name="name" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ár:</label>
          <div className="col-sm-9">
            <input type="number" name="price" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Darabszám:</label>
          <div className="col-sm-9">
            <input type="number" name="quantity" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Kép URL:</label>
          <div className="col-sm-9">
            <input type="text" name="imageURL" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Küldés
        </button>
      </form>
    </div>
  )
}