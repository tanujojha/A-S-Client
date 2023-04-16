import Animation from '../../components/animation/animation';
import Prenavbar from '../../components/prenavbar/prenavbar';




export default function Main (){
  return(
    <>
    <Prenavbar/>
    <div className = "row">
    <Animation/>

      <div className=" content col-md-6">

          <h2>Welcome To ArHub</h2>
          <h3>This is a community for artists of any kind</h3>
          <h2>Showcase your talent</h2>
          <h3>This is a great platform to showcase your art and get acknowledge</h3>
          <h2>Join to Explore the world of Art</h2>

        </div>

      </div>

      
        </>
      )

}
