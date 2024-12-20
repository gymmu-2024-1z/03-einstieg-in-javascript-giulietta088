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
    result.push(currentElement.toUpperCase()) // toUpperCase= macht das aktuelle Zeichen in einen Grossbuchstaben
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
    const asciiCode = currentElement.charCodeAt(0) // charCodeAt= gib den ascii code eines zeichens wieder
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
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Vergleiche ob das aktuelle Zeichen ein 'e' ist, wenn das der Fall ist, dann hänge eine 3 an
    if (currentElement === "e") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("") // join= macht aus einem array einen string
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  // Prüfe ob die Länge der Zeichenfolge 6 ist
  if (input.length === 6) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe11(args) {
  const input = args
  // Prüfe ob die Länge der Zeichenfolge 1 ist
  if (input.length === 1) {
    const asciiCode = input.charCodeAt(0) // charCodeAt= gibt den ascii code eines zeichens wieder
    // prüfe ob der ascii code zwischen 97 und 122 liegt
    if (asciiCode >= 97 && asciiCode <= 122) {
      return asciiCode
    } else {
      return null
    }
  } else {
    return null
  }
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  // Suche das erste e im Text und gebe die Position an.
  const position = input.indexOf("e") // indexOf= sucht bis zum ersten Lehrzeichen im Text
  return position
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  // Suche das letzte e im Text und gebe die Position an.
  const position = input.lastIndexOf("e") // lastIndexOf= sucht bis zum letzten Lehrzeichen im Text
  return position
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  // suche die Position de dritten e im Text.
  const input = args
  let position = -1
  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      countE = countE + 1
      if (countE === 3) {
        position = i
      }
    }
  }

  return position
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  //lese das Wort bis zu dem ersten Leerzeichen
  const word = input.substring(0, input.indexOf(" "))
  // Substring= extrahiert die Zeichen zwischen den  zwei Indizes und gibt die Teilzeichenfolge wieder zurück
  // indexOf= sucht das erste Leerzeichen im Text
  return word
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe20(args) {
  const input = args
  // Prüfe ob nach jedem . ein Leerschlag kommt
  const position = input.indexOf(".") // indexOf= sucht das erste Lehrzeichen im Text
  if (input[position + 1] === " ") {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  // Kehre die Eingabe um und gebe das Ergebnis wieder
  const input = args
  return input.split("").reverse().join("") // reverse= kehrt die Eingabe um   // join= macht aus einem array einen string
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  //ersetze alle Zeichen mit einem _ bis zum ersten k
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe29(args) {
  const input = args
  // ersetze alle t mit einem $
  return input.replace("t", "r") // replace= ersetzt alle genannten Zeichen mit dem gewählten Zeichen.
}
linkupExerciseHandler("[data-click=aufgabe29]", aufgabe29)

export function aufgabe30(args) {
  const input = args
  // Lese die Eingabe bis ein grosses S kommt
  return input.substring(0, input.indexOf("S")) // indexOf= sucht das erste Lehrzeichen (Großbuchstaben) im Text
}
linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)
