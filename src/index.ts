import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
import { NumbersCollection } from './NumbersCollection'
import { Sorter } from './Sorter'

const numbersCollection = new NumbersCollection([100, 3, 0, -5])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('XaedGezf')
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(40)
linkedList.add(3)
linkedList.add(10)
linkedList.add(-100)
linkedList.add(0)
linkedList.sort()

console.log(linkedList.print())
