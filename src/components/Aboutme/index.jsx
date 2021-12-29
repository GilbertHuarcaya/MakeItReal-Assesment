import './styles.scss';
import Github from '../../imgs/github.svg';

const Aboutme = () => {
  return (
    <div className="About">
      <div className="About__card">
        <h1 className="About__title">
          Hola! me llamo Gilbert Alonso Huarcaya Matias
        </h1>
        <div className="About__info">
          <p className="About__description">
            Soy un desarrollador FullStack vivo en Perú tengo 25 años y soy
            estudiante de Make it Real de tiempo completo
          </p>
          <img
            src="https://scontent.flim16-3.fna.fbcdn.net/v/t1.6435-9/54349910_2187685074626055_2012416216555061248_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l4vYOQmuOHYAX9ChJGX&_nc_ht=scontent.flim16-3.fna&oh=00_AT8bI0HSsmMXnT9txBvKMd2Z_lEpIbSFHXYTZGdo_QHifg&oe=61E35D69"
            alt="Mi foto personal"
            className="About__photo"
          />
        </div>
        <h3 className="About__subtitle">
          Temas aprendidos en el programa de Make it Real
        </h3>
        <ul className="About__list">
          <li>
            ✔ Es importante manejar SCRUM para tener un mejor desempeño laboral.
          </li>
          <li>✔ Frontend con REACT y SASS</li>
          <li>✔ Backend con MongoDB, NodeJS y Express</li>
        </ul>
        <a
          className="About__a"
          href="mailto:gilberthuarcaya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="About__email">gilberthuarcaya@gmail.com</p>
        </a>
        <a
          className="About__a"
          href="https://github.com/GilbertHuarcaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="About__a__img" src={Github} alt="githublink" />
          <p className="About__email">GilbertHuarcaya</p>
        </a>
      </div>
    </div>
  );
};

export default Aboutme;
