# 🎮 Comenzando tu Aventura en DevQuest

¡Bienvenido, valiente desarrollador! Este pergamino te guiará en tus primeros pasos en el reino de React y Next.js.

## 📋 Requisitos del Aventurero

Antes de comenzar tu viaje, asegúrate de tener en tu inventario:

- Node.js (versión 18.17 o superior)
- npm (incluido con Node.js) o yarn
- Git (para control de versiones)
- Un editor de código (recomendamos VS Code)
- Conocimientos básicos de JavaScript y HTML

## 🗺️ Preparación del Entorno

### 1. Clona el Grimorio (Repositorio)

```bash
# Clona el repositorio
git clone https://github.com/borchsolutions/devquest.git

# Ingresa al directorio
cd devquest
```

### 2. Instala tus Herramientas Mágicas (Dependencias)

```bash
# Si usas npm
npm install

# Si prefieres yarn
yarn
```

### 3. Configura tu Entorno de Desarrollo

#### Extensiones Recomendadas para VS Code:
- ESLint
- Prettier
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- GitHub Copilot (opcional)

## 🎯 Tu Primera Misión

### 1. Proyecto Inicial
Comienza con el proyecto básico en `projects/basic-quest`:

```bash
cd projects/basic-quest
npm install
npm run dev
```

Tu portal de desarrollo se abrirá en `http://localhost:3000`

### 2. Verifica tu Instalación

Deberías ver la página de bienvenida de DevQuest. Si encuentras algún problema, consulta la sección de [Troubleshooting](#troubleshooting) más abajo.

## 📚 Estructura del Curso

El curso está dividido en misiones (capítulos):

1. **Tutorial (Estás aquí)**
   - Configuración del entorno
   - Primeros pasos

2. **El Despertar del Desarrollador**
   - Fundamentos de React
   - [Ir al Capítulo 1](/docs/chapters/chapter-1/)

3. **El Camino del Estado**
   - useState y useEffect
   - [Ir al Capítulo 2](/docs/chapters/chapter-2/)

## 🎮 Sistema de Progresión

### Cómo Avanzar
1. Cada capítulo contiene:
   - 📖 Teoría y conceptos
   - ⚔️ Ejercicios prácticos
   - 🎯 Desafíos para resolver
   - ✅ Quiz de comprensión

2. Para "completar" un capítulo:
   - Lee el material teórico
   - Completa los ejercicios
   - Supera los desafíos
   - Aprueba el quiz

## 💡 Consejos para tu Aventura

1. **Mantén un Ritmo Constante**
   - Dedica tiempo regularmente
   - No te apresures por los capítulos

2. **Práctica Activamente**
   - Experimenta con el código
   - Modifica los ejemplos
   - Crea tus propias variaciones

3. **Únete a la Comunidad**
   - Participa en discusiones
   - Ayuda a otros aventureros
   - Comparte tus logros

## ❓ Troubleshooting

### Problemas Comunes y Soluciones

1. **Error: Cannot find module**
   ```bash
   npm clean-install
   ```

2. **Error: Port 3000 is already in use**
   ```bash
   # En Windows
   npx kill-port 3000

   # En Mac/Linux
   lsof -ti:3000 | xargs kill
   ```

## 🆘 Soporte

- 💬 [Discord del Proyecto](https://discord.gg/tuenlace)
- 📝 [GitHub Issues](https://github.com/borchsolutions/devquest/issues)
- 📧 [Email de Soporte](mailto:support@devquest.com)

## 🎖️ Siguientes Pasos

Una vez completada tu configuración:

1. 📚 Revisa el [Capítulo 1](/docs/chapters/chapter-1/)
2. 👥 Únete a nuestro [Discord](https://discord.gg/tuenlace)
3. ⭐ Dale una estrella al repositorio si te gusta el proyecto

---

*"El viaje de mil líneas de código comienza con un simple git clone"* - Antiguo proverbio del desarrollador

[Volver al README principal](../../README.md) | [Ir al Capítulo 1](/docs/chapters/chapter-1/)
