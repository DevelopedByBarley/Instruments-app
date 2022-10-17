import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom"

export function InstrumentSinglePage(props) {

  const param = useParams();
  const id = param.instrumentId;
  const navigate = useNavigate();

  const [instrument, setInstrument] = useState({});
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    (async () => {
      try {
        const res = await fetch(`https://kodbazis.hu/api/instruments/${id}`, { credentials: "include" });
        const instrument = await res.json();
        setInstrument(instrument)
        console.log(instrument);
      } catch (err) {
        console.error(err);
      } finally {
        setPending(false);
      }
    })();
  }, [])


  function deleteInstrument() {
    console.log('Hello');
  }

  return (

    <>
      <div className="p-5  m-auto text-center content bg-lavender">
        {isPending || !instrument.id ? (
          <div className="spinner-border"></div>
        ) : (
          <div className="card p-3">
            <div className="card-body">
              <h4>{instrument.brand}</h4>
              <h5 className="card-title">{instrument.name}</h5>
              <div className="lead">{instrument.price} ft</div>
              <p>Készleten: {instrument.quantity} db</p>
              <img
                className="img-fluid rounded"
                style={{ maxHeight: "500px" }}
                src={instrument.imageURL ? instrument.imageURL : "https://via.placeholder.com/400x800"}
              />
            </div>
            <div className="btn-container">
              <button className="btn m-2 btn-danger" onClick={(event) => {
                event.preventDefault();
                fetch(`https://kodbazis.hu/api/instruments/${instrument.id}`, {
                  method: "DELETE",
                  credentials: "include"
                })
                  .then(() => navigate('/'))
              }}>Delete</button>
              <NavLink to={`/update-instrument/${instrument.id}`}>
                <button className="btn btn-warning">Update</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  )
}