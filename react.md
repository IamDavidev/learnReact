---
author: Brayan David Lezma Trejo
---

# Coceptos de react

- _jsx_ es una sintaxis que permite escribir mezclar html y css con javacript ( no es un HTML)

- _Virtual DOM_ es una representacion de la vista del DOM en js que se guarda en la memoria del navegador y se actualiza cuando se hace un cambio en el DOM

- Fiber => es un algoritmo que utiliza react para inplementar otro concepnto llamado _Reconciliacion_

- Ademas react por debajo implementa un algorito llamado diferencial `Actualizaciones (de estados, nodos, componentes etc ) tienen que ser predecibles y al mismo tiempo sean lo suficientemente rapidas para las aplicaciones de alto rendimiento`

- React se manejo con _Arbol_ de componentes (elementos de react)

- _Algoritmo Euristico_ se utiliza para poder transformar un arbol ( Estructura de datos ) de componentes en un arbol de nodos

- Recursion en hijos

- el estado es asincronico

## useEffect

_UseEffect_ ciclo de vida de un componente
es un hook asincronico al igual que useState

### rules of useEffect

Es un hook de react que funciona que se ejecuta
`

- iniciar el componente o se monta el componente ( componentDidMount )
- cada vez que se actualiza el componente ( componetDidUpdate)
- Cuando se destrute el componente ( componentWillUnmount)
  `
  no podemos usar async-await en useEffect por que el ciclo de vida que maneja useEffect es asincronico

## useCallback

_useCallback_ se utiliza para poder memorizar un funcion, la cual no queremos que se vuelva crear cada vez que se actuilize el componente (
solo se va a crear una vez o cada que cambien sus variables )

## React.useMemo

- se ocupa normalmente en componentes que tienen una propiedad que cambia

_useMemo_ se ultiliza para memorizar

## Dinamic rendiring

- _Dynamic Render_ es un forma de renderizado de react que se utiliza cuando dependiendo del usuario que visite la pagina se utiliza server side rendering (SSR) o client side rendering( CSR )
