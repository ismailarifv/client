import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Span from "./Span";
import { Link } from 'react-router-dom';
import "./style.css";


function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${id}`)
      .then((res) => res.data)
      .then((data) => setChar(data))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div className="detailPage" style={{backgroundColor:'gray'}}>
        <Link to='/'>Home</Link>
      {loading && <Loading />}
      {char && (
        
        <div style={{textAlign:'center'}} >
            
          <h1 style={{display:'inline'}}>{char.name}</h1><br />
          <img src={char.image} alt="sdfa" style={{ width: "20%" }} />
          <br />
          <Span text={char.status} preText="Status" />
          <Span text={char.species} preText="Species" />
          <Span text={char.type} preText="Type" />
          <Span text={char.gender} preText="Gender" />
          <Span text={char.origin.name} preText="Origin" />
          <Span text={char.location.name} preText="Location" />
        </div>
      )}
    </div>
  );
}

export default Detail;
