import style from 'components/City/style.module.css';

function City( {city} ) {
  return (
    <>
        <div className={style.titles}>
            <h1> {city.name}, {city.sys.country} </h1>
            <h2> {city.weather[0].main} </h2>
            <h3> {city.main.temp} </h3>
            <p> Wind: {city.wind.deg} , Speed: {city.wind.speed} </p>
        </div>
    </>
  )
}

export default City