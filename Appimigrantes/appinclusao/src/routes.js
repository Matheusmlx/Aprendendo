import {createAppContainer, createDrawerNavigator} from 'react-navigation';

import Inicio from './pages/Inicio';
import Entrada from './pages/Entrada';
import Main from './pages/Main';
import Gps from './pages/gps';
import Tradutor from './pages/Tradutor';
import Documentos from './pages/Documentos';
import Educacao from './pages/Educacao';

export default createAppContainer(
  createDrawerNavigator({
    Inicio,
    Entrada,
    Main,
    Documentos,
    Gps,
    Tradutor,
    Educacao,
  }),
);
