import Styles from "./About.module.css"

export default function About() {
    console.log("sea");
    return (<div className={Styles.divContainer}>
            <div className={Styles.divDetails}>
            <div className={Styles.fichaContainer}>
            <div className={Styles.imageContainer}>
                <img className={Styles.img} src="/images/hernan.png" alt='Perfil' />
            </div>
            <div className={Styles.textContainer}>
                <div className="info">
                <h3>status: Estudiando </h3>
                <h3>name: Hernan Parino</h3>
                <h3>species: Humano</h3>
                <h3>gender: Masculino</h3>
                <h3>origin: Argentina </h3>
                </div>
            </div>
            </div>
        </div>     
        <div className={Styles.divDetails}> 
            <h1>¡Bienvenidos a mi página sobre mi proyecto de React.js basado en la famosa serie Rick and Morty!</h1>
            <p>¡Hola a todos! Mi nombre es Juan Hernan Parino y actualmente estoy cursando el bootcamp de SoyHenry, donde he tenido la oportunidad de desarrollar este increíble proyecto. Experimentando la potencia de React.js.</p>
            <p>La aplicación que he creado te permitirá explorar el emocionante universo de Rick and Morty de una manera interactiva y divertida. Podrás buscar y obtener información detallada sobre tus personajes favoritos, desde los clásicos hasta los más recientes. </p>
            <p>El desarrollo de esta aplicación ha sido un desafío emocionante que me ha permitido aprender y mejorar mis habilidades en el desarrollo de aplicaciones web con React.js.</p>
            <p>Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo. Estoy abierto a recibir comentarios y mejoras para seguir evolucionando esta aplicación.</p>
            <p>¡Espero que te diviertas explorando el universo de Rick and Morty a través de mi proyecto! Gracias por visitar mi página "About".</p>
            <p>¡Saludos,<br/>Juan Hernan Parino</p>
        </div>
            {/* <img className={Styles.img}  src="/images/hernan.png" alt="Mi imagen" /> */}
        </div>
        // Además, podrás filtrarlos según sus características, como especie, género y origen.
    )
}