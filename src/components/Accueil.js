import React from 'react';
import logo from '../images/asbblogo.jpg';
function Accueil(props) {
    return (
    <div className='accueil-content container'>
      <header className='accueil-header container'>
        <img src={logo} alt='logo de AS-BIEVILLE-BEUVILLE'/>
        <h1>AS-BIEVILLE-BEUVILLE</h1>
        <img src={logo} alt='logo de AS-BIEVILLE-BEUVILLE'/>
      </header>
      <div>
        <p className='accueil-paragraphe'>
          Bienvenue sur le site officiel du Club de Football <strong>AS-BIEVILLE-BEUVILLE</strong> ! 
          Nous sommes un club dynamique évoluant dans le district en Division 2.
          Fondé le<strong> 25/06/1997 </strong>, notre club est animé par une passion 
          commune pour le football et le sport en général.
        </p>
        <p className='accueil-paragraphe'>
          Notre équipe est composée de joueurs passionnés et dévoués, prêts à donner le meilleur d'eux-mêmes à chaque match. 
          Notre objectif est de promouvoir le football amateur en offrant un environnement 
          convivial où les joueurs de tous niveaux peuvent s'épanouir et développer leurs compétences.
        </p>
        <p className='accueil-paragraphe'>
          Au-delà du terrain, nous sommes également fiers de notre engagement envers la communauté.
          Nous organisons régulièrement des événements caritatifs et des actions sociales pour soutenir notre ville et ses habitants.
        </p>
        <p className='accueil-paragraphe'>
         Que vous soyez un joueur à la recherche d'une nouvelle équipe ou un fan de football à la recherche d'une atmosphère chaleureuse, nous vous invitons à rejoindre notre club.
         Venez nous encourager lors de nos matchs à domicile et partagez avec nous la passion du football.
        </p>
      </div>
    </div>)
  }
  
export default Accueil;
  