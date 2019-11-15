import React from 'react';
import { connect } from 'react-redux';

import { toggleRules } from 'src/store/settings/actions';
import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { rules } = state.settings;
  return {
    rules
  };
};

// Strategy to write in global state
const mapDispatchToProps = (dispatch) => {
  return {
    handleOnClick: (event) => {
      dispatch(toggleRules());
    }
  };
};

// Presentational Component
const Rules = ({ rules, handleOnClick }) => {
  return <div className="rules">
    <div className="rules-title" onClick={handleOnClick}>Les règles du jeu :</div>

    {/* On click, this part is displayed or hidden */}
    { rules && <div className="rules-details">
      <blockquote className="rules-quote">
        "Ah, mais je suis bête ! Vous devez jouer avec les règles à l'Aquitaine vous..."
      </blockquote>

      <h2 className="rules-section">Principe</h2>
      <p>Chaque joueur lance 3 dés pour tenter de faire une <span className="important-element">combinaison</span> et marquer des points.</p>
      <p>Le premier à atteindre <span className="important-element">343</span> remporte la partie.</p>

      <h3 className="rules-subsection">La Chouette</h3>
      <p><span className="important-element">2 dés identiques</span>. La Chouette vaut le carré du chiffre de la Chouette.</p>
      <p className="rules-example">Chouette de 1 = 1 point, de 2 = 4pts, de 3 = 9pts, de 4 = 16pts, de 5 = 25pts, de 6 = 36pts.</p>

      <h3 className="rules-subsection">La Velute</h3>
      <p>Deux dés additionnés <span className="important-element">valent le troisième dé</span>. La Velute vaut le double du carré de la Velute.</p>
      <p className="rules-example">Velute de 2 = 8pts, de 3 = 18pts, de 4 = 32pts, de 5 = 50pts, de 6 = 72pts</p>

      <h3 className="rules-subsection">La Chouette Velute</h3>
      <p>Une Chouette <span className="important-element">combinée</span> à une Velute. Elle vaut les points de la Velute.</p>
      <p>Le premier joueur à <span className="important-element">frapper dans ses mains et à crier "Pas mou, le Caillou"</span> remporte les points.</p>

      <h3 className="rules-subsection">Le Cul de Chouette</h3>
      <p>Les trois dés sont <span className="important-element">identiques</span>. Le Cul de Chouette vaut entre 50 et 100 points suivant la valeur des dés.</p>
      <p className="rules-example">Cul de chouette de 1 = 50pts, de 2 = 60pts, de 3 = 70pts, de 4 = 80pts, de 5 = 90pts, de 6 = 100pts.</p>

      <h3 className="rules-subsection">La Suite</h3>
      <p>Les trois dés se suivent.</p>
      <p>Tous les joueurs doivent <span className="important-element">frapper du poing sur la table et crier "Grelotte ça picotte"</span>. Le dernier perd 10 points.</p>
    </div> }

  </div>;
};


const RulesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rules);

export default RulesContainer;
