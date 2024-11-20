import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    // Wenn das aktuelle Zeichen ein 'e' ist, wird es aus dem Text entfernt.
    if (currentElement === "e") {
      // ingorieren wir das Zeichen, und entfernen es aus dem Text.
    } else {
      // Wenn das aktuelle Zeichen kein 'e' ist, wird es dem Text angehängt.
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wandle das aktuelle zeichen in einen Grossbuchstaben um, und hänge es an
    // das Resultat an.
    result.push(currentElement.toUpperCase())
  }

  // Gebe das Resultat aus
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  // erstelle eine Variable um alle e zu zählen
  let eCount = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      eCount = eCount + 1
    }
  }
  return eCount
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  let wordCount = 0

  //Erstelle eine Variable um die Anzahl der Wörter zu zählen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Wenn das aktuelle Zeichen ein Leerzeichen ist, dann erhöhe die Anzahl der Wörter
    if (currentElement === " ") {
      wordCount = wordCount + 1
    }
  }
  //gebe die Anzahl der Wörter zurück
  return wordCount + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []
  let count = 0
  //Erstelle eine Variable um alle  Grossbuchstaben zu zählen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //erstelle eine Variable die den ascii code von curent element speichert
    const asciiCode = currentElement.charCodeAt(0)
    // prüfe ob ascii code zwischen 65 und 90 liegt
    if (asciiCode >= 65 && asciiCode <= 90) {
      count = count + 1
    }
  }
  //wenn count grösser als Null ist geben sie wahr zurück sonst falsch
  if (count > 0) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const asciiCode = currentElement.charCodeAt(0)
    if (asciiCode >= 33 && asciiCode <= 63) {
      count = count + 1
    }
  }
  if (count > 1) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Prüfe ob das current element ein u ist
    if (currentElement === "u") {
      const nextElement = input[i + 1]
      // Prüfe ob das next element ein n ist
      if (nextElement === "n") {
        const nextNextElement = input[i + 2]
        // Prüfe ob das next next element ein d ist
        if (nextNextElement === "d") {
          return true
        }
      }
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)
