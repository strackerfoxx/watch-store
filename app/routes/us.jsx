import us1 from '~/../public/img/nosotros1.jpeg'
import us2 from '~/../public/img/nosotros2.jpg'

export default function Us() {
  return (
    <div className='about'>
        <h2 className='titulo'>about us</h2>
        <div className='center'>
            <img src={us2} alt="imagen de reloj" />
        </div>

        <div className='contenido'>
        
              <p className='texto2'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis sed libero, commodi 
                  inventore beatae veniam cupiditate ratione labore autem asperiores quibusdam iste mollitia 
                  voluptatibus, quasi tenetur corrupti dignissimos perspiciatis.
              </p>
            
              <p className='texto2'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis sed libero, commodi 
                  inventore beatae veniam cupiditate ratione labore autem asperiores quibusdam iste mollitia 
                  voluptatibus, quasi tenetur corrupti dignissimos perspiciatis.
              </p>
        </div>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis sed libero, commodi 
            inventore beatae veniam cupiditate ratione labore autem asperiores quibusdam iste mollitia 
            voluptatibus, quasi tenetur corrupti dignissimos perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas inventore beatae cumque 
            dolorum esse consectetur natus ducimus fugiat debitis, accusamus soluta voluptate tempore autem, 
            explicabo excepturi quibusdam repudiandae dolores.
        </p>
        <div className='center'>
            <img src={us1} alt="imagen de reloj" />
        </div>
    </div>
  )
}
