
import loading from './loading.gif'

const Spinner =()=> {
 
    return (
      <div className='text-center'>
        <img className='img-fluid max-width: 100% height:auto' src={loading} alt="loading" />
      </div>
    )
  }


export default Spinner
