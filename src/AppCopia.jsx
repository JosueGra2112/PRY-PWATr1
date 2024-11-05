// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import { Helmet } from 'react-helmet';
import Inicio from './Views/Inicio';
import Header from './Views/Header';
import Footer from './Views/Footer';
import Login from './Views/Login';
import Registro from './Views/Registro';
import Restauracion from './Views/Restauracion';
import Bitacoras from './Views/Bitacoras';
import Boletin from './Views/Boletin';
import Calendario from './Views/Calendarios';
import AcercaDe from './Views/AcercaDe';
import Sesion from './Views/sesion';
import SesionAd from './Views/sesionAd';
import TableExp from './Views/TablaExp';

import MenuAd from './Views/Repo/MenuAd';
import Expedientes from './Views/Repo/TBL/expedientes';
import ErrorHandler from './Views/ErrorHandler';
import PageTransition from './Views/PageTransition'; // Importa el componente de transición
import Rest from './Views/ResetPasswordForm';
import IMG404 from './IMG/404.png';
import ValidarUsuario from './Views/ValidarUsuario';
import ResponderPregunta from './Views/ResponderPregunta';
import RestaurarContraseña from './Views/RestaurarContraseña';

import SessionTimeoutHandler from './Views/SessionTimeoutHandler';
import ProtectedRoute from './Views/ProtectedRoute';
import ViewsBit from './Views/ViewsBittacoras';

import CargaAct from './Views/cargar';
import DownAct from './Views/actDoc';


//Cargos

//Admin
import SesionAdmin from './CARGOS/Admin/sesionAdmin';
import DiaEvent from './CARGOS/Admin/DiarioEvent'
import UserControl from './CARGOS/Admin/UserAcceso';
import CargaAlumnos from './CARGOS/Admin/CargaAlumnos';
import TablaAlumnos from './CARGOS/Admin/TablaAlm';
import TablaHistoral from './CARGOS/Admin/TablaHis';
import BitacorasAd from './CARGOS/Admin/BitacorasAd';
import BoletinAd from './CARGOS/Admin/BoletinAd';

//Directivos
import SesionDic from './CARGOS/Directivos/sesionDic';
import DiaEventDir from './CARGOS/Directivos/DiarioEventDir';
import ExpedientesDir from './CARGOS/Directivos/expedientesDir';
import CargaAlumnosDir from './CARGOS/Directivos/CargaAlumnosDir';
import AlumnosDir from './CARGOS/Directivos/AlumnosDir';
import TablaExpDic from './CARGOS/Directivos/TablaExpDic';
import TablaAlumnosDie from './CARGOS/Directivos/TablaAlmDic';
import BitacorasDir from './CARGOS/Directivos/BitacorasDir';
import BoletinDir from './CARGOS/Directivos/BoletinDir';



//Administrativo
import SesionAdmi from './CARGOS/Administrativos/sesionAdministrativo';
import DiaEventAdmi from './CARGOS/Administrativos/DiarioEventAdm';
import CargaAlumnosAdmi from './CARGOS/Administrativos/CargaAlumnosAdm';
import TablaAlumnosAdmu from './CARGOS/Administrativos/TablaAlmAdmi';
import TblExpS from './CARGOS/Administrativos/TablaExpAdmi';
import ExpedientesDocAdmi from './CARGOS/Administrativos/ExpedientesDocV';

import BitacorasAds from './CARGOS/Administrativos/BitacorasAds';
import BoletinAds from './CARGOS/Administrativos/BoletinAds';


//Docente
import SesionD from './CARGOS/Docentes/sesionD';
import Acti from './CARGOS/Docentes/Acti';

//Secretario
import SesionS from './CARGOS/Secretario/sesionS';
import ExpS from './CARGOS/Secretario/TablaExpS';
import ExpedientesS from './CARGOS/Secretario/expedientesS';
import DiariEventSec from './CARGOS/Secretario/DiarioEventSec';
import BitacorasSec from './CARGOS/Secretario/BitacorasSec';
import BoletinSec from './CARGOS/Secretario/BoletinSec';




//notificaciones
import NotificationHandler from './components/NotificationHandler';

import { useLocalStorage } from 'react-use';




const NotFound = () => (
  <div>
    <center>
      <Header />
      <h2>¡Ooops!</h2>
      <h1>¡Error 404!</h1>
      <h3>La página que estás buscando no se encuentra en el servidor.</h3>
      <img src={IMG404} alt="Error 404" style={{ maxWidth: '100%', height: 'auto' }} />
    </center>
  </div>
);

const App = () => {
  const [user, setUser] = useLocalStorage('user');
  // milis por 60 para obtener minutos * la cantidad de minutos
  const TIMEOUT_DURATION = 1000 * 60 * 5;
  console.log("CSP activo");

  return (
    <body>
      <Router>
      <NotificationHandler />
         <SessionTimeoutHandler timeoutDuration={TIMEOUT_DURATION} />
        <Helmet>
      <meta http-equiv="Content-Security-Policy" content="
        default-src 'self'; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://www.google.com; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data:; 
  connect-src 'self' https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com https://identitytoolkit.googleapis.com https://firestore.googleapis.com https://securetoken.googleapis.com https://sigaemail.host8b.me http://localhost:3000/ https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css ;
  frame-src 'self' https://www.google.com;"  
      />


          

    </Helmet>
          <TransitionGroup>
            
              <Routes>
                <Route path="/" element={<PageTransition><Inicio /></PageTransition>} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<PageTransition><Registro /></PageTransition>} />
                <Route path="/Restauracion" element={<PageTransition><Restauracion /></PageTransition>} />
                <Route path="/Bitacoras" element={<PageTransition><Bitacoras /></PageTransition>} />
                <Route path="/Boletin" element={<PageTransition><Boletin /></PageTransition>} />
                <Route path="/Calendario" element={<PageTransition><Calendario /></PageTransition>} />
                <Route path="/AcercaDe" element={<PageTransition><AcercaDe /></PageTransition>} />
                <Route path="/Rest" element={<PageTransition><Rest /></PageTransition>} />
                <Route path="/ValidarUsuario" element={<ValidarUsuario />} />
                <Route path="/ResponderPregunta/:usuario" element={<ResponderPregunta />} />
                <Route path="/RestaurarContrasena/:usuario" element={<RestaurarContraseña />}/>



                {/*INICIA - RUTAS PROTEGIDAS */}
                

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/sesion" element={<PageTransition><Sesion /></PageTransition>} />
                </Route>



                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/sesionD" element={<PageTransition><SesionD /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/SesionS" element={<PageTransition><SesionS /></PageTransition>} />
                </Route>
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/SesionDic" element={<PageTransition><SesionDic /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/ExpS" element={<PageTransition><ExpS /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/TblExpS" element={<PageTransition><TblExpS /></PageTransition>} />
                </Route>
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/ExpedientesDocAdmi" element={<PageTransition><ExpedientesDocAdmi /></PageTransition>} />
                </Route>                

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/TablaExpDic" element={<PageTransition><TablaExpDic /></PageTransition>} />
                </Route>  

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/TablaHistoral" element={<PageTransition><TablaHistoral /></PageTransition>} />
                </Route>  

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/BitacorasSec" element={<PageTransition><BitacorasSec /></PageTransition>} />
                </Route>  

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/BoletinSec" element={<PageTransition><BoletinSec /></PageTransition>} />
                </Route>  
                

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/sesionAd" element={<PageTransition><SesionAd /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/SesionAdmi" element={<PageTransition><SesionAdmi /></PageTransition>} />
                </Route>

                
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/SesionAdmin" element={<PageTransition><SesionAdmin /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/DiaEvent" element={<PageTransition><DiaEvent /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/DiaEventDir" element={<PageTransition><DiaEventDir /></PageTransition>} />
                </Route>


                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/ExpedientesDir" element={<PageTransition><ExpedientesDir /></PageTransition>} />
                </Route>

                
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/CargaAlumnosDir" element={<PageTransition><CargaAlumnosDir /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/AlumnosDir" element={<PageTransition><AlumnosDir /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/DiariEventSec" element={<PageTransition><DiariEventSec /></PageTransition>} />
                </Route>
                

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/Acti" element={<PageTransition><Acti /></PageTransition>} />
                </Route>
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/SesionAdmi" element={<PageTransition><SesionAdmi /></PageTransition>} />
                </Route>
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/DiaEventAdmi" element={<PageTransition><DiaEventAdmi /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/CargaAlumnosAdmi" element={<PageTransition><CargaAlumnosAdmi /></PageTransition>} />
                </Route>
                
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/TablaAlumnosAdmu" element={<PageTransition><TablaAlumnosAdmu /></PageTransition>} />
                </Route>
                
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/TablaAlumnosDie" element={<PageTransition><TablaAlumnosDie /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/BitacorasAd" element={<PageTransition><BitacorasAd /></PageTransition>} />
                </Route>  

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/BoletinAd" element={<PageTransition><BoletinAd /></PageTransition>} />
                </Route>  


                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/BitacorasDir" element={<PageTransition><BitacorasDir /></PageTransition>} />
                </Route>  

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/BoletinDir" element={<PageTransition><BoletinDir /></PageTransition>} />
                </Route>  
                
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/BitacorasAds" element={<PageTransition><BitacorasAds /></PageTransition>} />
                </Route>  

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/BoletinAds" element={<PageTransition><BoletinAds /></PageTransition>} />
                </Route>  
                

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/TablaExp" element={<PageTransition><TableExp /></PageTransition>} />
                </Route>


                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/TablaAlumnos" element={<PageTransition><TablaAlumnos /></PageTransition>} />
                </Route>


                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/CargaAct" element={<PageTransition><CargaAct /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/DownAct" element={<PageTransition><DownAct /></PageTransition>} />
                </Route>


                {/*FIN - 
                
                
                 /<Route element={<ProtectedRoute canActivate={user} />}>
                 // <Route path="/CargaAlm" element={<PageTransition><CargaAlm /></PageTransition>} />
                </Route>
                
                RUTAS PROTEGIDAS */}

                /<Route element={<ProtectedRoute canActivate={user} />}>
                 // <Route path="/CargaAlumnos" element={<PageTransition><CargaAlumnos /></PageTransition>} />
                </Route>

                

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/MenuAd" element={<PageTransition><MenuAd /></PageTransition>} />
                </Route>



                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/expedientes" element={<PageTransition><Expedientes /></PageTransition>} />
                </Route>

                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/expedientesS" element={<PageTransition><ExpedientesS /></PageTransition>} />
                </Route>
                
                <Route element={<ProtectedRoute canActivate={user} />}>
                  <Route path="/UserControl" element={<PageTransition><UserControl /></PageTransition>} />
                </Route>
                


                <Route path="/ViewsBit" element={<PageTransition><ViewsBit /></PageTransition>} />

                

                {/*<Route path="404" element={<NotFound />} />
                
                <Route path="*" element={<Navigate to="/404" />} />
                */}
                
              </Routes>
            
          </TransitionGroup>
          <Footer />
      </Router>
    </body>
  );
};

export default App;