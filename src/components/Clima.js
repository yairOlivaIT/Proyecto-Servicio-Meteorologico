import React, { useState , useEffect }  from 'react';
import axios from 'axios';
import TableClima from './TableClima';
import TablePagination from '@material-ui/core/TablePagination';
import styled from 'styled-components';

const Titles = styled.div`
    display: flex;
    flex-direction: row;
    background-color:#5D6D7E;
    margin:0 auto;
    justify-content: space-around;
    text-align: center;

    @media(max-width:720px){
        h2{
            font-size:1rem;
        }
    }
`;


const Clima = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [ data , setData ] = useState([]);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
      
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    useEffect(() => {
        const consultarApi = async() => {
            const response = await axios.get(`https://ws.smn.gob.ar/map_items/weather`);
            setData(response.data);
        }
        consultarApi();
    },[]);

    return (
        <div>
            <Titles>
                <h2>Ciudad <i className="fas fa-city"></i></h2>
                <h2>Provincia <i className="fas fa-map-marked-alt"></i></h2>
                <h2>Temperatura <i className="fas fa-temperature-low"></i></h2>
            </Titles>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(information => (
                <TableClima 
                    key={information._id}
                    information={information}
                />
            ))}
                
            <TablePagination
                style={{color:'#fff',fontSize:'1rem'}}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}
 
export default Clima;