import './Faq.scss';

const Faq = () => {
  return (
    <div className="faq-container">
      <p>
        <strong>A quoi ça sert ?</strong>
      </p>
      <p>
        <em>
          Cette application permet de trouver une liste de dépôts GitHub pour un
          critère donné.
        </em>
      </p>
      <p>
        <strong>Comment faire une recherche ?</strong>
      </p>
      <p>
        <em>
          Sur la page recherche, complétez le champ de recherche et valider la
          recherche.
        </em>
      </p>
      <p>
        <strong>Puis-je chercher n&apos;importe quel terme ?</strong>
      </p>
      <p>
        <em>Oui, c&apos;est fou.</em>
      </p>
    </div>
  );
};

export default Faq;
