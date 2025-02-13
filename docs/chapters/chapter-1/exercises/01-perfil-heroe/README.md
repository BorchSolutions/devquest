# Misión: Crear tu Perfil de Héroe 🦸‍♂️

## 🎯 Objetivo de la Misión

Crear un componente de perfil de héroe que muestre información personal y estadísticas utilizando los fundamentos de React y JSX.

![Ejemplo del Perfil](../../assets/profile-example.png)

## 📋 Requisitos

### Tecnologías Necesarias
- React
- JSX
- CSS (incluido en el proyecto)

### Conceptos a Practicar
- Creación de componentes funcionales
- Uso de props
- Destructuring
- Renderizado condicional
- Listas y keys
- Estilos básicos con CSS

## 🎮 Instrucciones

### 1. Estructura del Componente

Crea un componente `HeroProfile` que acepte las siguientes props:
```typescript
interface HeroStats {
    strength: number;
    intelligence: number;
    agility: number;
}

interface HeroProps {
    name: string;
    level: number;
    class: string;
    stats: HeroStats;
    abilities: string[];
    isOnline?: boolean;
}
```

### 2. Requisitos del Componente

El componente debe mostrar:
- Nombre del héroe
- Nivel actual
- Clase del héroe (Guerrero, Mago, etc.)
- Estadísticas básicas
- Lista de habilidades
- Indicador de estado (online/offline)

### 3. Ejemplo de Uso

```jsx
const hero = {
    name: "Reactix",
    level: 10,
    class: "Frontend Warrior",
    stats: {
        strength: 80,
        intelligence: 95,
        agility: 85
    },
    abilities: ["Component Mastery", "Hook Casting", "State Management"],
    isOnline: true
};

<HeroProfile {...hero} />
```

## 🛠️ Tareas Específicas

1. **Estructura Básica**
   - [ ] Crear el componente funcional
   - [ ] Implementar destructuring de props
   - [ ] Crear la estructura JSX base

2. **Mostrar Información**
   - [ ] Renderizar nombre y nivel
   - [ ] Mostrar clase del héroe
   - [ ] Crear barra de estadísticas
   - [ ] Listar habilidades

3. **Funcionalidades Adicionales**
   - [ ] Implementar indicador online/offline
   - [ ] Añadir barra de progreso de nivel
   - [ ] Mostrar iconos para cada habilidad

4. **Estilizado**
   - [ ] Aplicar estilos CSS incluidos
   - [ ] Asegurar diseño responsive
   - [ ] Implementar animaciones básicas

## 📝 Criterios de Evaluación

- Uso correcto de props y destructuring
- Implementación adecuada de renderizado condicional
- Manejo apropiado de listas y keys
- Código limpio y bien organizado
- Diseño responsive y visualmente atractivo

## 💡 Pistas

<details>
<summary>Pista 1: Destructuring</summary>

```jsx
const HeroProfile = ({ name, level, class: heroClass, stats, abilities, isOnline }) => {
    // Usar heroClass en lugar de class (palabra reservada)
};
```
</details>

<details>
<summary>Pista 2: Renderizado Condicional</summary>

```jsx
{isOnline ? (
    <span className="status-online">Online</span>
) : (
    <span className="status-offline">Offline</span>
)}
```
</details>

## 🎯 Reto Adicional

¿Quieres subir de nivel? Intenta añadir estas características:
- Animación cuando el héroe sube de nivel
- Tooltips en las habilidades mostrando descripciones
- Sistema de experiencia con barra de progreso
- Efectos visuales para el estado online/offline

## 📚 Recursos

- [Documentación de React sobre Componentes](https://react.dev/learn/your-first-component)
- [Guía de CSS Animations](https://developer.mozilla.org/es/docs/Web/CSS/CSS_animations)
- [Tutorial de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 🤔 Preguntas Frecuentes

**P**: ¿Puedo añadir más props de las especificadas?
**R**: ¡Sí! Siéntete libre de expandir el componente mientras mantengas las props requeridas.

**P**: ¿Debo crear componentes adicionales?
**R**: Es una buena práctica dividir en subcomponentes si identificas partes reutilizables.

## ✅ Entrega

Tu solución debe incluir:
1. Código del componente principal
2. Subcomponentes (si los creaste)
3. Estilos CSS
4. Documentación de props adicionales (si las añadiste)

## 🏆 Bonus

- Implementar temas (claro/oscuro)
- Añadir efectos de sonido
- Crear una versión editable del perfil
- Implementar sistema de logros

---

[← Volver al Capítulo 1](../README.md) | [Siguiente Ejercicio →](../02-lista-poderes/README.md)