import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcharacter } from "../../redux/characterSlice";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from 'react-router-dom';
import "./styles.css";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchcharacter());
    }
    
  }, [dispatch,status]);
  
  
  if (status === 'failed') {
    return <Error message={error}/>
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters ?
          characters.map((character) => (
            <div key={character.id}>
              <Link to={`/char/${character.id}`}>
              <img alt={character.name} src={character.image} />
              <div className="char_name">{character.name}</div>
              </Link>
            </div>
          )) :
          <div>Veri yok</div>}
      </Masonry>
      <div style={{padding:"20px 0px 40px 0px",textAlign:'center'}}>
        {status === 'loading' && <Loading />}
        {nextPage <43 && status !== 'loading' &&(<button onClick={() => dispatch(fetchcharacter(nextPage))}>Load More({nextPage})</button>)}
      
      </div>
    </div>
  );
}

export default Home;
