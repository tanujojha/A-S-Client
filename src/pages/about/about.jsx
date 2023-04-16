import Animation from '../../components/animation/animation';
import Prenavbar from '../../components/prenavbar/prenavbar';

export default function About(){
return  <>
        <Prenavbar/>
        <div className = "row">
        <Animation/>
        <div className=" content col-md-6">

          <h1 className="about_h1">About Us</h1>
          <p className="about_p"> We believe that a platform such as this, an online platform free to use and accessible by anyone anywhere will give a boost to artistic talent. There are many social media websites that are popular and used by people all over the world like Facebook, Instagram, Twitter, Youtube, TikTok, Reddit, Pinterest etc. However, in all these platforms there are all sorts of people with different propogandas, interests and all sorts of activities going on. Most of these plateforms have lost their idea of creating and promoting art. Hence, if there is a social media that is artist-centric, artists can grow together and build a community of their own, allowing talents to nurture and evolve in public and perhaps start to earn from their art.
          </p>

        </div>
        </div>
      </>
}
