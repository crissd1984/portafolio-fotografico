import Header from '../helpers/Header'
import Footer from '../helpers/Footer'
import uno from '../../assets/Produccion3/1.jpg'
import dos from '../../assets/Produccion3/2.png'
import tres from '../../assets/Produccion3/3.jpg'
import cuatro from '../../assets/Produccion3/4.jpg'
import cinco from '../../assets/Produccion3/5.jpg'
import seis from '../../assets/Produccion3/6.jpg'

const Produccion3 = () => {
  return (
    <section className='fondoproduccion'>
    <Header />
    <h2 className='tituloproduccion'>PIELES DE ARQUITECTURA</h2>
    <p>Descripción</p>
    <section className='produccion'>

    </section>
    <div className='sectionProduccion'>
      <img src={uno} alt="" className='imagenes' />
      <img src={dos} alt="" className='imagenes' />
      <img src={tres} alt="" className='imagenes' />
      <img src={cuatro} alt="" className='imagenes' />
      <img src={cinco} alt="" className='imagenes' />
      <img src={seis} alt="" className='imagenes' />

    </div>
    <Footer />
  </section>
  )
}

export default Produccion3