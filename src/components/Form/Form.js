import style from 'components/Form/style.module.css'

function Form( {setInput} ) {

  return (
    <>
      <div className={style.form}>
        <input 
          className={style.input}
          type='text'
          placeholder='Şehir Ara..'
          onKeyDown={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  )
}

export default Form