# MyLocationinTimeline

**MyLocationinTimeline** es una aplicación administrativa diseñada para registrar eventos históricos y acontecimientos importantes que han cambiado el mundo tal como lo conocemos. También permite llevar un seguimiento del progreso de tus hábitos, finanzas personales, negocios o proyectos, entre muchas otras cosas.

¡Organiza tu vida y tu historia en un solo lugar!

## Basado en [Devias Kit - React](https://material-kit-react.devias.io/)

Esta aplicación comenzó con el código abierto proporcionado por el proyecto [Devias Kit - React](https://github.com/devias-io/material-kit-react), un panel administrativo gratuito desarrollado con [MUI](https://mui.com), [React](https://reactjs.org), y [Next.js](https://github.com/vercel/next.js).

El frontend original ha sido **personalizado extensivamente** para adaptarse a las funcionalidades y diseño de **MyLocationinTimeline**. Además, se le ha integrado un backend propio desarrollado en **Node.js** para añadir más características como:

- Gestión de hábitos.
- Seguimiento de finanzas personales.
- Administración de proyectos.
- Registro y seguimiento de eventos históricos.

---

## Características del proyecto

### Frontend:
- Basado en el diseño original de [Devias Kit - React](https://github.com/devias-io/material-kit-react).
- Modificaciones en diseño, imágenes, menú y estilos para alinearse con los objetivos de **MyLocationinTimeline**.

### Backend:
- Desarrollado completamente con **Node.js**.
- Soporta nuevas funcionalidades de almacenamiento y seguimiento.

---

## Licencias

Este proyecto está cubierto por dos licencias:

1. **Licencia personalizada (toda la aplicación):**
   - Permite el uso y modificación del código con atribución a **VeccitDevopS**.
   - Restringe el uso comercial sin permiso explícito.

2. **Licencia de Devias:**
   - El frontend inicial de este proyecto está basado en [Devias Kit - React](https://github.com/devias-io/material-kit-react), licenciado bajo [MIT](https://github.com/devias-io/material-kit-react/blob/main/LICENSE.md).

---

## Créditos

Este proyecto utiliza el código abierto de [Devias Kit - React](https://github.com/devias-io/material-kit-react). Agradecemos a **Devias** por proporcionar un punto de partida sólido para aplicaciones administrativas. ¡Su trabajo es increíble y ha sido clave para construir esta aplicación!

### Configurar la Base de Datos

Asegúrate de que MySQL esté instalado y en funcionamiento. Crea una base de datos y un usuario para el proyecto.

Ejecuta el siguiente script SQL para crear las tablas necesarias.

-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for veccitdevopsapp
DROP DATABASE IF EXISTS `veccitdevopsapp`;
CREATE DATABASE IF NOT EXISTS `veccitdevopsapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `veccitdevopsapp`;

-- Dumping structure for table veccitdevopsapp.customers
DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table veccitdevopsapp.customers: ~3 rows (approximately)
INSERT INTO `customers` (`id`, `name`, `email`, `phone`, `address`, `created_at`) VALUES
	(13, 'Test Prueba 12', 'Kakuseisha14@gmail.com.v', '856431121', 'Teste funciona', '2025-01-05 18:04:17'),
	(19, 'Michael Kuencas', 'kakuseisha14@gmail.com', '04121616871', 'Barrio Simon Bolivar', '2025-01-05 19:15:54'),
	(20, 'El Frodo Guzman', 'kakuseisha14@gmail.com', '04121616871', 'Barrio Simon Bolivar', '2025-01-05 19:16:03'),
	(26, 'Derwin', 'kakuseisha1454@gmail.com', '04121616871', 'Barrio Simon Bolivar', '2025-02-12 23:03:29'),
	(27, 'VeccitDevopS', 'Veccit@gmail.com', '65645216354654', 'Test', '2025-02-15 16:16:06');

-- Dumping structure for table veccitdevopsapp.historia
DROP TABLE IF EXISTS `historia`;
CREATE TABLE IF NOT EXISTS `historia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `fecha` varchar(255) DEFAULT NULL,
  `fragmento` varchar(255) DEFAULT NULL,
  `affected_personnel` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table veccitdevopsapp.historia: ~6 rows (approximately)
INSERT INTO `historia` (`id`, `titulo`, `fecha`, `fragmento`, `affected_personnel`, `img`) VALUES
	(1, 'Bombardeos de Hiroshima y Nagasaki', '1945', 'Estados Unidos lanzó las primeras bombas nucleares en estas ciudades japonesas', NULL, NULL),
	(15, 'Teste1', '2025-02-15', 'Teste1', 'Teste1', '1739636065473-WhatsApp Image 2025-02-08 at 11.16.58 AM.jpeg'),
	(16, 'Test 2', '2025-02-22', 'Test 24', 'Test 22', '1740271084380-jsheader-1024x535.png'),
	(17, 'Teste 31', '2025-02-22', 'Teste 34', 'Teste 32', '1740271268488-jsheader-1024x535.png'),
	(18, 'Prueba1', '2025-02-26', 'Prueba1', 'Prueba1', '1740600460212-daemon-mejor-personaje-la-casa-del-dragon-matt-smith-1666364128.jpeg'),
	(20, 'Prueba2', '2025-02-26', 'Prueba2', 'Prueba2', '1740600904652-jsheader-1024x535.png');

-- Dumping structure for table veccitdevopsapp.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table veccitdevopsapp.users: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
