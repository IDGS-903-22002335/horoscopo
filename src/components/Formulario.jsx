import React, { use, useState } from 'react'
import "./Formulario.css"


const Formulario = () => {
  const [signo, setSigno] = useState(" ");
  const [nombre, setNombre] = useState("");
  const [detalle, setDetalle] = useState("");
  

  const calcularSigno = (e) => {

    e.preventDefault() 
    const nombre1 = document.querySelector("#nombre").value;
    const seleccion = document.querySelector("#fecha").value;

    setNombre(nombre1);
    const fecha = new Date(seleccion) // convierto el estrig que optengo en seleccion a formato de fecha

    const mes = fecha.getMonth() + 1;
    const dias = fecha.getDate();


   
  // Aries
  if ((mes === 3 && dias >= 21) || (mes === 4 && dias <= 19)) {
    setSigno("Aries ♈");
    setDetalle(
      <>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVvFd5CZY_LaVK8BUJJTna7X1oQuSRzeBbA&s" alt="Aries" className="signo-img" />

        <br/>
        <h3>Rasgos de Aries</h3>
        <p><strong>Fortalezas:</strong> Valiente, energético, competitivo, decidido</p>
        <p><strong>Debilidades:</strong> Impaciente, impulsivo, agresivo</p>
        <p><strong>A Aries le gusta:</strong> Aventuras, liderazgo, retos</p>
        <p><strong>A Aries le disgusta:</strong> Esperar, perder, rutina</p>
      </>
    );
  }

  // Tauro
  else if ((mes === 4 && dias >= 20) || (mes === 5 && dias <= 20)) {
    setSigno("Tauro ♉");
    setDetalle(
      <>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvo14A1AE8BVXFZAtLufhXdqLU6Fsr3HW3A&s" alt="Tauro" className="signo-img" />

        <h3>Rasgos de Tauro</h3>
        <p><strong>Fortalezas:</strong> Paciente, confiable, práctico, responsable</p>
        <p><strong>Debilidades:</strong> Terco, posesivo, rencoroso</p>
        <p><strong>A Tauro le gusta:</strong> Comodidad, naturaleza, buena comida</p>
        <p><strong>A Tauro le disgusta:</strong> Cambios repentinos, inseguridad</p>
      </>
    );
  }

  // Géminis
  else if ((mes === 5 && dias >= 21) || (mes === 6 && dias <= 20)) {
    setSigno("Géminis ♊");
    setDetalle(
      <>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0foPh1gEAm5gsJIUlxjNJ91L7DP2dOKmDg&s" alt="Geminis" className="signo-img" />

        <h3>Rasgos de Géminis</h3>
        <p><strong>Fortalezas:</strong> Adaptable, curioso, comunicativo</p>
        <p><strong>Debilidades:</strong> Nervioso, indeciso, superficial</p>
        <p><strong>A Géminis le gusta:</strong> Conversaciones, aprender cosas nuevas</p>
        <p><strong>A Géminis le disgusta:</strong> Rutina, aburrimiento, restricciones</p>
      </>
    );
  }

  // Cáncer
  else if ((mes === 6 && dias >= 21) || (mes === 7 && dias <= 22)) {
    setSigno("Cáncer ♋");
    setDetalle(
      <>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNORvzKPZ3FM2Q_tlpIN6JYhmDLE3pm_GGSQ&s" alt="Cencer" className="signo-img" />

        <h3>Rasgos de Cáncer</h3>
        <p><strong>Fortalezas:</strong> Leal, protector, sensible</p>
        <p><strong>Debilidades:</strong> Emocional, inseguro, temperamental</p>
        <p><strong>A Cáncer le gusta:</strong> Familia, hogar, tranquilidad</p>
        <p><strong>A Cáncer le disgusta:</strong> Frialdad, conflictos, críticas</p>
      </>
    );
  }

  // Leo
  else if ((mes === 7 && dias >= 23) || (mes === 8 && dias <= 22)) {
    setSigno("Leo ♌");
    setDetalle(
      <>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhKcPNJXToxJVZs_CmdHfxGSzx3TLyJJ3fg&s" alt="Leo" className="signo-img" />

        <h3>Rasgos de Leo</h3>
        <p><strong>Fortalezas:</strong> Creativo, generoso, apasionado</p>
        <p><strong>Debilidades:</strong> Arrogante, obstinado, mandón</p>
        <p><strong>A Leo le gusta:</strong> Atención, liderazgo, diversión</p>
        <p><strong>A Leo le disgusta:</strong> Ser ignorado, perder control</p>
      </>
    );
  }

  // Virgo
  else if ((mes === 8 && dias >= 23) || (mes === 9 && dias <= 22)) {
    setSigno("Virgo ♍");
    setDetalle(
      <>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IcmMXdoH6yQFnC4FaawWZ1Ec3RBFWnggtA&s" alt="virgo" className="signo-img" />

        <h3>Rasgos de Virgo</h3>
        <p><strong>Fortalezas:</strong> Analítico, trabajador, práctico</p>
        <p><strong>Debilidades:</strong> Crítico, perfeccionista, reservado</p>
        <p><strong>A Virgo le gusta:</strong> Organización, limpieza, ayudar a otros</p>
        <p><strong>A Virgo le disgusta:</strong> Desorden, irresponsabilidad</p>
      </>
    );
  }

  // Libra
  else if ((mes === 9 && dias >= 23) || (mes === 10 && dias <= 22)) {
    setSigno("Libra ♎");
    setDetalle(
      <>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH-W3d_5G3Acd29dBpkYY1dyEp_vRzI2Ywg&s" alt="Libra" className="signo-img" />

        <h3>Rasgos de Libra</h3>
        <p><strong>Fortalezas:</strong> Diplomático, justo, sociable</p>
        <p><strong>Debilidades:</strong> Indeciso, evita confrontaciones, superficial</p>
        <p><strong>A Libra le gusta:</strong> Belleza, armonía, amistad</p>
        <p><strong>A Libra le disgusta:</strong> Conflictos, injusticia, soledad</p>
      </>
    );
  }

  // Escorpio
  else if ((mes === 10 && dias >= 23) || (mes === 11 && dias <= 21)) {
    setSigno("Escorpio ♏");
    setDetalle(
      <>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtSLbxuRUfSgcdgUnDf-z-SwwgExxRhnWhQ&s" alt="Escorpio" className="signo-img" />

        <h3>Rasgos de Escorpio</h3>
        <p><strong>Fortalezas:</strong> Valiente, apasionado, decidido</p>
        <p><strong>Debilidades:</strong> Celoso, reservado, rencoroso</p>
        <p><strong>A Escorpio le gusta:</strong> Misterio, verdad, desafíos</p>
        <p><strong>A Escorpio le disgusta:</strong> Traición, superficialidad, deshonestidad</p>
      </>
    );
  }

  // Sagitario
  else if ((mes === 11 && dias >= 22) || (mes === 12 && dias <= 21)) {
    setSigno("Sagitario ♐");
    setDetalle(
      <>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22EoZwpPvVdjaJAaoK76MgGt_qiWvgwXdkA&s" alt="Sagitario" className="signo-img" />

        <h3>Rasgos de Sagitario</h3>
        <p><strong>Fortalezas:</strong> Aventurero, optimista, generoso</p>
        <p><strong>Debilidades:</strong> Impaciente, descuidado, confiado</p>
        <p><strong>A Sagitario le gusta:</strong> Viajar, aprender, libertad</p>
        <p><strong>A Sagitario le disgusta:</strong> Rutina, restricciones, pesimismo</p>
      </>
    );
  }

  // Capricornio
  else if ((mes === 12 && dias >= 22) || (mes === 1 && dias <= 19)) {
    setSigno("Capricornio ♑");
    setDetalle(
      <>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfZincpCMQh5K6ui__h4eA91ieYDbCGjNEw&s" alt="Capricornio" className="signo-img" />

        <h3>Rasgos de Capricornio</h3>
        <p><strong>Fortalezas:</strong> Responsable, disciplinado, paciente</p>
        <p><strong>Debilidades:</strong> Pesimista, terco, reservado</p>
        <p><strong>A Capricornio le gusta:</strong> Éxito, estructura, metas claras</p>
        <p><strong>A Capricornio le disgusta:</strong> Fracaso, desorganización, impuntualidad</p>
      </>
    );
  }

  // Acuario
  else if ((mes === 1 && dias >= 20) || (mes === 2 && dias <= 18)) {
    setSigno("Acuario ♒");
    setDetalle(
      <>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3h5pXZfGXxCYJuswWbJltwJYEuFAgmzCZ6A&s" alt="Acuario" className="signo-img" />

        <h3>Rasgos de Acuario</h3>
        <p><strong>Fortalezas:</strong> Progresista, original, independiente, humanitario</p>
        <p><strong>Debilidades:</strong> Evita expresar sus emociones, temperamental, intransigente, distante</p>
        <p><strong>A Acuario le gusta:</strong> Amigos, ayudar a otros, causas nobles, conversaciones intelectuales</p>
        <p><strong>A Acuario le disgusta:</strong> Limitaciones, soledad, gente cerrada de mente</p>
      </>
    );
  }

  // Piscis
  else if ((mes === 2 && dias >= 19) || (mes === 3 && dias <= 20)) {
    setSigno("Piscis ♓");
    setDetalle(
      <>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz282PHa8jnJP4vbZ2JMQhqml4qoOLH3nmmQ&s" alt="Piscis" className="signo-img" />

        <h3>Rasgos de Piscis</h3>
        <p><strong>Fortalezas:</strong> Compasivo, intuitivo, creativo</p>
        <p><strong>Debilidades:</strong> Temeroso, escapista, indeciso</p>
        <p><strong>A Piscis le gusta:</strong> Música, arte, ayudar a otros</p>
        <p><strong>A Piscis le disgusta:</strong> Conflictos, injusticia, rutinas aburridas</p>
      </>
    );
  }
  }
  return (
    <div className= "contenedor">
      <div className="card">
      <h2>Formulario</h2>
      <form> 
        <label>Nombre:</label>
        <input type="text" placeholder="Escribe tu nombre" id="nombre"/>

        <label>Fecha:</label>
        <input type="Date" id= "fecha"/>

        <button type="submit" onClick={calcularSigno}>Enviar</button>
      </form>
    </div>

    <div className="card">
      <form id="horoscopo">
        <div>Tu signo es: <strong>{signo}</strong> </div>
        <div>{nombre} <br />: <strong>{detalle}</strong></div>
      </form>
      
      
       </div>
    </div>
    

  )
}

export default Formulario