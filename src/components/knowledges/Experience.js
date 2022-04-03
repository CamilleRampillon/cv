import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Développeuse informatique au Puy du Fou </h4>
        <h5>2018 - 2020</h5>
        <p>
          Développement en équipe d’une application permettant l’enregistrement
          de données et de statistiques. Utilisation de Symfony 4, SQL Server,
          GitHub et Trello.
          <br></br> 
          Développement et dockerisation d’une application de
          gestion d’évènements. Utilisation de Symfony 4, SQLServer, Git,
          Jenkins, SonarQube.
          <br></br>
          Développement d’une application permettant l’édition des plans des
          restaurants avec PHP et SQL Server.
        </p>
      </div>
      <div className="exp-2">
        <h4>Agent de réservations hôtels - restaurants au Puy du Fou </h4>
        <h5>2013 - 2017</h5>
      </div>
      <div className="exp-3">
        <h4>Réceptionniste polyvalente à l'hôtel « Le Lion D’Or » (St Gilles  Croix de Vie - 85)</h4>
        <h5>2011 - 2012</h5>
      </div>
      <div className="exp-4">
        <h4>Jeune fille au-pair à Cork (Irlande)</h4>
        <h5>2009</h5>
      </div>
      <div className="exp-5">
        <h4>Conseillère commerciale à France Télécom (Les Sables d'Olonne - 85)</h4>
        <h5>2005 - 2008</h5>
      </div>
    </div>
  );
};

export default Experience;
